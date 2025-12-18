import { SafetyWarning } from '../components/SafetyWarning';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Helper component for icons
const FeatureIcon = ({ emoji, label }: { emoji: string; label: string }) => (
    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mr-6" aria-label={label}>
        <span className="text-3xl">{emoji}</span>
    </div>
);

// --- Define a type for our features ---
interface Feature {
    emoji: string;
    title: string;
    description: string | React.ReactNode;
}

// Data Definition
const features: {
    physical: Feature[];
    firmware: Feature[];
    transparency: Feature[];
} = {
    physical: [
        {
            emoji: '🔒',
            title: 'Fail-Safe Lock',
            description:
                'The system uses electromagnets (MagLocks) which require power to stay locked. If power is lost for any reason (unplugged, power outage, device failure), the lock automatically releases. This is the primary, non-negotiable safety feature.',
        },
        {
            emoji: '🔌',
            title: 'Quick-Release Power Plug',
            description:
                'The 12V DC power plug is a standard barrel jack, not a locking connector. This is intentional. It acts as an immediate, universal override. In an emergency, you can simply pull the plug to cut power and release the lock.',
        },
        {
            emoji: '🛑',
            title: 'Physical Abort Switch',
            description:
                'A hard-wired foot switch (or button) connects directly to the controller. It will immediately cut power to the lock even if the Wi-Fi, Bluetooth, or the Session Manager app has completely crashed.',
        },
        {
            emoji: '🛡️',
            title: 'Flyback Diode Protection',
            description:
                'A diode across the MagLock terminals safely absorbs the "inductive kickback" (voltage spike) when power is cut. This protects the controller\'s MOSFET switch from failing in the "closed" (permanently on) position.',
        },
        {
            emoji: '🔗',
            title: 'Secure (Non-Power) Connectors',
            description:
                'The MagLock and Abort Switch plugs use secure-locking aviation connectors. This prevents an *accidental* disconnection of a critical component, while preserving the *intentional* quick-release for the main power.',
        },
        {
            emoji: '💡',
            title: 'Clear Visual Status',
            description: (
                <>
                    A single-color LED provides distinct, unambiguous patterns for every device state (e.g., solid on for Locked,
                    fast-blinking for Countdown, or a slow pulse for Ready). This allows you to know the controller's status at a glance.
                    See the{' '}
                    <NavLink to="/build-controller" className="text-indigo-400 hover:text-indigo-300 underline">
                        Build Controller page
                    </NavLink>{' '}
                    for a full list of patterns.
                </>
            ),
        },
    ],
    firmware: [
        {
            emoji: '⏰',
            title: 'Network-Independent Timer',
            description:
                "All session timers and rules run 100% on the controller's hardware clock, not in the app. This means the session timing is not dependent on a stable internet or Wi-Fi connection.",
        },
        {
            emoji: '❤️',
            title: 'App Keep-Alive (Heartbeat)',
            description:
                'If the controller stops receiving the app\'s constant "keep-alive" signal for two minutes (due to a crash, PC sleep, or Wi-Fi failure), it automatically triggers an abort. This ensures you are never "locked blind".',
        },
        {
            emoji: '🧠',
            title: 'Dual-Core Isolation',
            description:
                'The ESP32 runs critical session timers on Core 0 and all network communication (Wi-Fi/BLE) on Core 1. This prevents a network lag spike from *ever* freezing the main session timer.',
        },
        {
            emoji: '🐕',
            title: 'Crash & Freeze Protection (Watchdog)',
            description:
                'A hardware "watchdog" timer is always running. If the main code ever freezes (e.g., an infinite loop), this timer will automatically force a full reboot of the device to recover.',
        },
        {
            emoji: '💾',
            title: 'Power-Loss Recovery',
            description:
                'The current session state is saved to persistent flash memory. When the device reboots (from a watchdog or power loss), it immediately resumes the session exactly where it left off.',
        },
        {
            emoji: '🧹',
            title: 'Memory Corruption Prevention',
            description:
                'The firmware is carefully coded to prevent heap corruption and stack overflows, which are the most common and unpredictable causes of device crashes, ensuring long-term stability.',
        },
        {
            emoji: '🚧',
            title: 'Built-in Safety Limits',
            description:
                'The firmware has hard-coded limits. The maximum session duration is capped at 3 hours and the maximum penalty timer is 2 hours. This provides a common-sense boundary.',
        },
    ],
    transparency: [
        {
            emoji: '🏠',
            title: 'Private & Offline-First',
            description:
                'The system runs 100% locally and does not require an internet connection, an account, or any personal information. No tracking, no analytics. Nothing ever leaves your local network.',
        },
        {
            emoji: '📖',
            title: 'Open-Source Firmware',
            description:
                "The controller's firmware is fully open-source. This allows for complete public transparency. Anyone can audit the code to verify all these safety features.",
        },
    ],
};

type TabCategory = 'physical' | 'firmware' | 'transparency';

// Helper map for display titles
const categoryTitles: Record<TabCategory, string> = {
    physical: 'Physical & Hardware',
    firmware: 'Firmware & Software',
    transparency: 'Transparency',
};

// --- MOVED COMPONENT: Now defined outside SafetyPage ---
interface TabButtonProps {
    label: string;
    category: TabCategory;
    isActive: boolean;
    onClick: (category: TabCategory) => void;
}

const TabButton = ({ label, category, isActive, onClick }: TabButtonProps) => {
    return (
        <button
            onClick={() => onClick(category)}
            className={`
        relative w-full py-4 px-4 text-sm font-bold uppercase tracking-wider transition-all duration-200
        border-b sm:border-b-0 sm:border-r border-gray-700 last:border-0
        focus:outline-none 
        
        /* Active State */
        ${
            isActive
                ? 'bg-gray-800 text-white shadow-[inset_0_2px_0_0_#6366f1]'
                : 'bg-gray-900 text-gray-500 hover:bg-gray-800/50 hover:text-gray-300'
        }
      `}
        >
            {label}
        </button>
    );
};

export const SafetyPage = () => {
    const [activeTab, setActiveTab] = useState<TabCategory>('physical');

    // --- Helper function to render a feature list ---
    const renderFeatureList = (list: Feature[]) => (
        <div className="space-y-8 animate-fade-in">
            {list.map((feature) => (
                <div key={feature.title} className="flex flex-col sm:flex-row items-center sm:items-start p-4 text-center sm:text-left">
                    <div className="mb-4 sm:mb-0">
                        <FeatureIcon emoji={feature.emoji} label={feature.title} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        {typeof feature.description === 'string' ? (
                            <p
                                className="text-gray-300"
                                dangerouslySetInnerHTML={{
                                    __html: feature.description,
                                }}
                            />
                        ) : (
                            <p className="text-gray-300">{feature.description}</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <>
            <div className="py-6 md:py-12">
                <h1 className="text-2xl md:text-4xl font-bold text-white text-center mb-4 md:mb-6">Safety by Design</h1>
                <p className="text-lg md:text-xl text-center text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
                    A deep dive into the safety features and redundant failsafes built into the Lobster toolkit.
                </p>

                {/* Intro Section */}
                <section className="my-8 md:my-16 max-w-5xl mx-auto px-4 sm:px-6">
                    <div className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-xl border border-gray-700">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Our Design Philosophy</h2>
                        <p className="text-gray-300 mb-4">
                            The Lobster toolkit is designed to be "strict," but it must <strong>never</strong> be unsafe. Safety and
                            reliability are the foundation of this project. Every design choice was made with one question in mind: "What
                            happens if this fails?"
                        </p>
                        <p className="text-gray-300">
                            This page outlines the multiple, redundant layers of safety, from the physical hardware to the core firmware
                            logic.
                        </p>
                    </div>
                </section>

                <SafetyWarning />

                <section className="my-8 md:my-16 max-w-5xl mx-auto px-4 sm:px-6">
                    {/* --- MOBILE VIEW: STACKED LIST --- */}
                    <div className="md:hidden space-y-12">
                        {(['physical', 'firmware', 'transparency'] as TabCategory[]).map((category) => (
                            <div key={category} className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
                                {/* Mobile Section Header */}
                                <div className="bg-gray-900 border-b border-gray-700 p-4">
                                    <h3 className="text-lg font-bold text-indigo-100 uppercase tracking-wider text-center">
                                        {categoryTitles[category]}
                                    </h3>
                                </div>
                                {/* Mobile List Content */}
                                <div className="p-4">{renderFeatureList(features[category])}</div>
                            </div>
                        ))}
                    </div>

                    {/* --- DESKTOP VIEW: TABS --- */}
                    <div className="hidden md:block rounded-xl overflow-hidden shadow-2xl border border-gray-700">
                        {/* Tab Header */}
                        <div className="bg-gray-900 flex flex-row border-b border-gray-700">
                            <TabButton
                                label={categoryTitles.physical}
                                category="physical"
                                isActive={activeTab === 'physical'}
                                onClick={setActiveTab}
                            />
                            <TabButton
                                label={categoryTitles.firmware}
                                category="firmware"
                                isActive={activeTab === 'firmware'}
                                onClick={setActiveTab}
                            />
                            <TabButton
                                label={categoryTitles.transparency}
                                category="transparency"
                                isActive={activeTab === 'transparency'}
                                onClick={setActiveTab}
                            />
                        </div>

                        {/* Tab Content */}
                        <div className="bg-gray-800 p-8">
                            {activeTab === 'physical' && renderFeatureList(features.physical)}
                            {activeTab === 'firmware' && renderFeatureList(features.firmware)}
                            {activeTab === 'transparency' && renderFeatureList(features.transparency)}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

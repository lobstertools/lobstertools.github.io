import { SafetyWarning } from '../components/SafetyWarning';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Helper component for icons (or you can use a real icon library like react-icons)
// Using emoji for simplicity here
const FeatureIcon = ({ emoji, label }: { emoji: string; label: string }) => (
  <div
    className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mr-6"
    aria-label={label}
  >
    <span className="text-3xl">{emoji}</span>
  </div>
);

// --- Define a type for our features ---
interface Feature {
  emoji: string;
  title: string;
  description: string | React.ReactNode;
}

// We'll define our features as data to make the layout cleaner
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
          A single-color LED provides distinct, unambiguous patterns for every
          device state (e.g., solid on for Locked, fast-blinking for Countdown, or
          a slow pulse for Ready). This allows you to know the controller's
          status at a glance. See the{' '}
          <NavLink
            to="/build-controller"
            className="text-indigo-400 hover:text-indigo-300 underline"
          >
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

export const SafetyPage = () => {
  const [activeTab, setActiveTab] = useState<TabCategory>('physical');

  const TabButton = ({
    label,
    category,
  }: {
    label: string;
    category: TabCategory;
  }) => (
    <button
      onClick={() => setActiveTab(category)}
      className={`
        px-6 py-3 text-lg font-medium rounded-t-lg
        focus:outline-none focus:ring-2 focus:ring-indigo-500
        ${
          activeTab === category
            ? 'bg-gray-800 text-white' 
            : 'bg-gray-900 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
        }
      `}
    >
      {label}
    </button>
  );

  // --- Helper function to render a feature list ---
  const renderFeatureList = (list: Feature[]) => (
    <div className="space-y-8">
      {list.map((feature) => (
        <div key={feature.title} className="flex items-start p-4">
          <FeatureIcon emoji={feature.emoji} label={feature.title} />
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              {feature.title}
            </h3>
            {/* Conditionally render:
              - If it's a string, use dangerouslySetInnerHTML for HTML tags
              - If it's JSX (like our NavLink), render it directly
            */}
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
      <div className="py-12">
        <h1 className="text-4xl font-bold text-white text-center mb-6">
          Safety by Design
        </h1>
        <p className="text-xl text-center text-gray-400 mb-12 max-w-3xl mx-auto">
          A deep dive into the safety features and redundant failsafes built
          into the Lobster toolkit.
        </p>

        {/* Intro Section */}
        <section className="my-16 max-w-5xl mx-auto">
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-6">
              Our Design Philosophy
            </h2>
            <p className="text-gray-300 mb-4">
              The Lobster toolkit is designed to be "strict," but it must{' '}
              <strong>never</strong> be unsafe. Safety and reliability are the
              foundation of this project. Every design choice was made with one
              question in mind: "What happens if this fails?"
            </p>
            <p className="text-gray-300">
              This page outlines the multiple, redundant layers of safety, from
              the physical hardware to the core firmware logic.
            </p>
          </div>
        </section>

        <SafetyWarning />

        <section className="my-16 max-w-5xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex space-x-1 border-b border-gray-700">
            <TabButton label="Physical & Hardware" category="physical" />
            <TabButton label="Firmware & Software" category="firmware" />
            <TabButton label="Transparency" category="transparency" />
          </div>

          {/* Tab Content */}
          <div className="bg-gray-800 p-8 rounded-b-lg shadow-xl">
            {activeTab === 'physical' && renderFeatureList(features.physical)}
            {activeTab === 'firmware' && renderFeatureList(features.firmware)}
            {activeTab === 'transparency' &&
              renderFeatureList(features.transparency)}
          </div>
        </section>
      </div>
    </>
  );
};
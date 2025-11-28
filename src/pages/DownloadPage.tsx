import React from 'react';
import { NavLink } from "react-router-dom";
import { SafetyWarning } from "../components/SafetyWarning";
import { ImageOverlay } from "../components/ImageOverlay";

// --- IMAGE IMPORTS ---
import sessionScreenSrc from '@/images/session-manager/main-screen.webp?w=1200&format=webp';
import sessionScreenSrcSet from '@/images/session-manager/main-screen.webp?w=400;800;1200&format=webp&as=srcset';
import { AppleIcon, ChipIcon, LinuxIcon, WindowsIcon } from 'src/icons';

// --- HELPER COMPONENT ---

interface DownloadButtonProps {
    url: string;
    label: string;
    Icon: React.FC;
    version: string;
    date: string;
    primary?: boolean;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ url, label, Icon, version, date, primary = false }) => {
    // Check if the URL is valid
    const isAvailable = url && url !== "not-found" && url.trim() !== "";
    
    if (!isAvailable) {
        // Disabled "Coming Soon" State
        return (
            <div className={`block ${primary ? 'bg-indigo-900/50 text-indigo-200' : 'bg-gray-800 text-gray-500'} font-bold py-4 px-6 rounded-lg text-center cursor-not-allowed border border-dashed border-gray-700`}>
                <div className="opacity-50"><Icon /></div>
                <div>{label}</div>
                <div className="text-sm mt-1 uppercase tracking-wider font-semibold">Coming Soon</div>
            </div>
        );
    }

    // Active State
    const baseClasses = "block font-bold py-4 px-6 rounded-lg text-center transition-colors";
    const colorClasses = primary 
        ? "bg-indigo-600 hover:bg-indigo-700 text-white" 
        : "bg-gray-700 hover:bg-gray-600 text-white";

    return (
        <a href={url} className={`${baseClasses} ${colorClasses}`}>
            <Icon />
            <div>{label}</div>
            <div className={`text-sm mt-1 ${primary ? 'text-indigo-200' : 'text-gray-400'}`}>
                {version} {date && <span className={`${primary ? 'opacity-75' : 'text-gray-500'} font-normal`}> • {date}</span>}
            </div>
        </a>
    );
};

// --- DATA FROM ENV ---

const appVersion = (import.meta as any).env?.VITE_APP_VERSION || 'latest';
const appDate = (import.meta as any).env?.VITE_APP_DATE || '';
const firmwareVersion = (import.meta as any).env?.VITE_FIRMWARE_VERSION || 'latest';
const firmwareDate = (import.meta as any).env?.VITE_FIRMWARE_DATE || '';

// --- MAIN PAGE ---

export const DownloadsPage = () => (
    <>
        <div className="py-12">
            <h1 className="text-4xl font-bold text-white text-center mb-6">Downloads</h1>
            <p className="text-xl text-center text-gray-400 mb-12 max-w-3xl mx-auto">
                Get everything you need to set up your Lobster system. Download the Session Manager application for your device and the latest firmware for your controller.
            </p>

            {/* Application Screenshot */}
            <section className="my-16">
                <h2 className="text-3xl font-bold text-white text-center mb-8">See the Session Manager in Action</h2>
                <div className="p-4 rounded-lg shadow-lg max-w-5xl mx-auto">
                    <ImageOverlay 
                        src={sessionScreenSrc} 
                        srcSet={sessionScreenSrcSet}
                        alt="Screenshot of the Session Manager Application"
                        className="w-full h-auto rounded-md"
                    />
                </div>
            </section>

            <SafetyWarning />

            {/* Session Manager */}
            <section className="my-16">
                <h2 className="text-3xl font-bold text-white mb-6">Session Manager Application</h2>
                <div className="bg-gray-800 p-8 rounded-lg">
                    <p className="text-gray-400 mb-6">
                        The Session Manager is your control center. Use it to configure timers, manage locks, and monitor your sessions. Available for multiple platforms.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                        <DownloadButton 
                            label="Windows"
                            url={(import.meta as any).env?.VITE_WIN_DOWNLOAD_URL}
                            Icon={WindowsIcon}
                            version={appVersion}
                            date={appDate}
                        />
                        <DownloadButton 
                            label="macOS"
                            url={(import.meta as any).env?.VITE_MAC_DOWNLOAD_URL}
                            Icon={AppleIcon}
                            version={appVersion}
                            date={appDate}
                        />
                        <DownloadButton 
                            label="Linux"
                            url={(import.meta as any).env?.VITE_LINUX_DOWNLOAD_URL}
                            Icon={LinuxIcon}
                            version={appVersion}
                            date={appDate}
                        />
                    </div>
                </div>
            </section>

            {/* Controller Firmware */}
            <section className="my-16">
                <h2 className="text-3xl font-bold text-white mb-6">Controller Firmware</h2>
                <div className="bg-gray-800 p-8 rounded-lg">
                    <p className="text-gray-400 mb-6">
                        Flash this firmware onto your ESP32 controller. For detailed build and flashing instructions, see the <NavLink to="/build-controller" className="underline">Build Controller</NavLink> page.
                    </p>
                    <div className="max-w-md mx-auto"> 
                        <DownloadButton 
                            label="Download Firmware"
                            url={(import.meta as any).env?.VITE_FIRMWARE_DOWNLOAD_URL}
                            Icon={ChipIcon}
                            version={firmwareVersion}
                            date={firmwareDate}
                            primary={true}
                        />
                    </div>
                </div>
            </section>

            {/* Downloads */}
            <section className="my-16">
                <h2 className="text-3xl font-bold text-white mb-6">Resources</h2>
                <div className="bg-gray-800 p-8 rounded-lg">
                    <div className="space-y-4">
                        <a href="/downloads/controller_drill_template.pdf" className="block p-4 bg-gray-700 hover:bg-gray-600 rounded transition-colors">
                            <div className="font-semibold text-white">Drill Template (PDF)</div>
                            <div className="text-sm text-gray-400">Drill template for the Plastic Project Box</div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </>
);
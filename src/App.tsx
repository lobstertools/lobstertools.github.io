import React, { useState } from 'react';
import {
    Routes,
    Route,
    Link,
    NavLink,
    useNavigate,
} from 'react-router-dom';

import { SafetyWarning } from './components/SafetyWarning';
import { BuildMagLockPage } from './pages/BuildMagLockPage';
import { DownloadsPage } from './pages/DownloadPage';
import { FeaturesSection } from './components/Features';
import { FaqSection } from './components/FAQ';
import { BuildControllerPage } from './pages/BuildControllerPage';
import { Community } from './components/Community';
import { PageTitle } from './components/PageTitle';
import { SafetyPage } from './pages/SafetyPage';

// --- ICONS ---

const MenuIcon = () => (
    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CloseIcon = () => (
    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const GitHubIcon = () => (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
);

// --- Navbar ---
const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Downloads', path: '/downloads' },
        { name: 'Build MagLock', path: '/build-maglock' },
        { name: 'Build Controller', path: '/build-controller' },
        { name: 'Safety Features', path: '/safety-features' },
    ];
    
    return (
        <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-700/50">
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex-shrink-0 flex items-center" onClick={() => setMobileMenuOpen(false)}>
                       <img src="/images/lobster-logo.png" alt="Lobster Logo" className="h-12 w-auto" />
                       <span className="ml-2 text-xl font-bold text-white">Lobster</span>
                    </Link>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4"> {/* Changed items-baseline to items-center for better icon alignment */}
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                            isActive
                                                ? 'bg-gray-700 text-white'
                                                : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                            
                            {/* GitHub Icon Link - Desktop Only */}
                            <a 
                                href="https://github.com/lobstertools" 
                                target="_blank" 
                                rel="noreferrer"
                                className="text-gray-400 hover:text-white transition-colors ml-4"
                                aria-label="GitHub Repository"
                            >
                                <GitHubIcon />
                            </a>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button 
                            type="button" 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
                
                {/* Mobile menu (Updated) */}
                {mobileMenuOpen && (
                    <div className="md:hidden pb-3 pt-2">
                        <div className="flex flex-col space-y-1">
                            {/* Also use <NavLink> here */}
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setMobileMenuOpen(false)} // Close menu on click
                                    className={({ isActive }) =>
                                        `block px-3 py-2 rounded-md text-base font-medium transition-colors text-left ${
                                            isActive
                                                ? 'bg-gray-700 text-white'
                                                : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

// --- Footer ---
const Footer = () => (
    <footer className="border-t border-gray-700/50 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-500">
            <p>&copy; 2025 Lobster. Released under the Apaches 2.0 license.</p>
            <p className="mt-1 text-sm">Please play safely and responsibly.</p>
        </div>
    </footer>
);

// --- HOME PAGE ---
const HomePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* Hero Section */}
            <section id="hero" className="py-24 sm:py-32 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                    Lobster: The DIY Self-Bondage Toolkit
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400">
                    An open-source, low-cost, and accessible framework for self-bondage.
                    Built by you, controlled by you.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

                    <button
                        onClick={() => navigate('/build-maglock')}
                        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
                    >
                        Start Building
                    </button>
                    <button
                        onClick={() => navigate('/downloads')}
                        className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
                    >
                        Get Software
                    </button>
                </div>
            </section>

            <SafetyWarning />
            <FeaturesSection />
            <FaqSection />
            <Community />
        </>
    )
};

// --- Beta warning ---
const BetaWarningBanner: React.FC = () => {
    // Read the env variable. Vite embeds this at build time.
    // We must compare against the string 'true'
    const isBeta = (import.meta as any).env?.VITE_IS_BETA === 'true';

    if (!isBeta) {
        return null; 
    }
    
    // Colors sampled from the Ant Design 'ant-alert-warning' theme:
    // Background: #2b2111
    // Border: #ffe58f
    // Text (and icon): #d46b08 (approx)
    // Using text-yellow-900 as a close, readable Tailwind equivalent for the text.
    return (
        <div className="bg-[#2b2111] text-[rgba(255,255,255,0.85)] font-bold p-3 text-center sticky top-0 z-40">
            <p>
                ⚠️ <strong>Beta Version:</strong> This is unfinished software
                currently in testing and not officially released. Please use
                with caution.
            </p>
        </div>
    );
};

// --- MAIN APP COMPONENT ---

export default function App() {

    return (
        <div className="bg-gray-900 text-gray-300 font-sans min-h-screen">
            <Navbar />
            
            <BetaWarningBanner />
            
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            <PageTitle title="Lobster - DIY Self-Bondage Toolkit">
                                <HomePage />
                            </PageTitle>
                        } 
                    />
                    <Route 
                        path="/safety-features" 
                        element={
                            <PageTitle title="Lobster - Safety Features">
                                <SafetyPage />
                            </PageTitle>
                        } 
                    />
                    <Route 
                        path="/downloads" 
                        element={
                            <PageTitle title="Lobster - Downloads">
                                <DownloadsPage />
                            </PageTitle>
                        } 
                    />
                    <Route 
                        path="/build-maglock" 
                        element={
                            <PageTitle title="Lobster - Build MagLock">
                                <BuildMagLockPage />
                            </PageTitle>
                        } 
                    />
                    <Route 
                        path="/build-controller" 
                        element={
                            <PageTitle title="Lobster - Build Controller">
                                <BuildControllerPage />
                            </PageTitle>
                        } 
                    />
                    
                    {/* A "catch-all" route that redirects to home if no match is found */}
                    <Route 
                        path="*" 
                        element={
                            <PageTitle title="Lobster - DIY Self-Bondage Toolkit">
                                <HomePage />
                            </PageTitle>
                        } 
                    /> 
                </Routes>
            </main>

            <Footer />
        </div>
    );
}
// src/App.tsx
import React, { useState } from 'react';
// --- Import react-router-dom components ---
import {
    Routes,
    Route,
    Link,
    NavLink,
    useNavigate,
} from 'react-router-dom';

import { SafetyWarning } from './components/SafetyWarning';
import { BuildMagLockPage } from './pages/BuildMagLockPage';
import { DownloadsPage } from './components/DownloadPage';
import { FeaturesSection } from './components/Features';
import { FaqSection } from './components/FAQ';
import { BuildControllerPage } from './pages/BuildControllerPage';

// --- ICONS (No changes) ---

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

// --- Navbar (Updated) ---
// We no longer need 'currentPage' or 'setPage' props
const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    // Update navItems to use URL paths
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Downloads', path: '/downloads' },
        { name: 'Build MagLock', path: '/build-maglock' },
        { name: 'Build Controller', path: '/build-controller' },
    ];
    
    return (
        <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-700/50">
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Use <Link> for the logo to navigate to home */}
                    <Link to="/" className="flex-shrink-0 flex items-center" onClick={() => setMobileMenuOpen(false)}>
                        <span className="text-2xl font-bold text-indigo-400">Lobster</span>
                    </Link>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {/* Use <NavLink> instead of <button> for navigation */}
                            {/* 'isActive' is automatically provided by NavLink */}
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

// --- Footer (No changes) ---
const Footer = () => (
    <footer className="border-t border-gray-700/50 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-500">
            <p>&copy; 2025 Lobster Project. Released under the MIT License.</p>
            <p className="mt-1 text-sm">Please play safely and responsibly.</p>
        </div>
    </footer>
);

// --- HOME PAGE (Updated) ---
// We remove the 'setPage' prop
const HomePage: React.FC = () => {
    // Use the 'useNavigate' hook to handle button clicks
    const navigate = useNavigate();

    return (
        <>
            {/* Hero Section */}
            <section id="hero" className="py-24 sm:py-32 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                    Lobster: The DIY Toolkit
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400">
                    An open-source, low-cost, and accessible framework for self-bondage.
                    Built by you, controlled by you.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    {/* Update onClick to use navigate */}
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

            {/* ... other sections ... */}
            <section id="opensource" className="my-20 py-16 text-center">
                {/* ... */}
            </section>
            <section id="contact" className="my-20 py-16 bg-gray-800 rounded-lg text-center">
                {/* ... */}
            </section>
        </>
    )
};


// --- MAIN APP COMPONENT (Updated) ---

export default function App() {

    return (
        <div className="bg-gray-900 text-gray-300 font-sans min-h-screen">
            <Navbar />
            
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/downloads" element={<DownloadsPage />} />
                    <Route path="/build-maglock" element={<BuildMagLockPage />} />
                    <Route path="/build-controller" element={<BuildControllerPage />} />
                    
                    {/* A "catch-all" route that redirects to home if no match is found */}
                    <Route path="*" element={<HomePage />} /> 
                </Routes>
            </main>

            <Footer />
        </div>
    );
}
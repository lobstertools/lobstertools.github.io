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
import { CustomArmaturePage } from './pages/CustomArmaturePage';
import { DownloadsPage } from './pages/DownloadPage';
import { FeaturesSection } from './components/Features';
import { FaqSection } from './components/FAQ';
import { BuildControllerPage } from './pages/BuildControllerPage';
import { Community } from './components/Community';
import { PageTitle } from './components/PageTitle';
import { SafetyPage } from './pages/SafetyPage';

// --- IMAGE IMPORTS ---
import logoSrc from '@/images/lobster-logo.png?w=200&format=webp';
import logoSrcSet from '@/images/lobster-logo.png?w=64;128;256&format=webp&as=srcset';
import { GitHubIcon, CloseIcon, MenuIcon } from './icons';
import { Footer } from './components/Footer';
import { BetaWarningBanner } from './components/BetaWarningBanner';


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
                       <img 
                            src={logoSrc} 
                            srcSet={logoSrcSet}
                            sizes="48px" 
                            alt="Lobster Logo" 
                            className="h-12 w-auto" 
                       />
                       <span className="ml-2 text-xl font-bold text-white">Lobster</span>
                    </Link>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4"> 
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
                
                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden pb-3 pt-2">
                        <div className="flex flex-col space-y-1">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setMobileMenuOpen(false)} 
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
                        path="/build-maglock/custom-armature" 
                        element={
                            <PageTitle title="Lobster - Build Custom Armature">
                                <CustomArmaturePage />
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
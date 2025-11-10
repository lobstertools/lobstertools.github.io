// src/components/ImageOverlay.tsx

import { useState, useEffect } from 'react';

// Define the props for the component
interface ImageOverlayProps {
    src: string;
    alt: string;
    className?: string; // Allow passing custom styles
}

export const ImageOverlay = ({ src, alt, className }: ImageOverlayProps) => {
    const [isOpen, setIsOpen] = useState(false);

    // Effect to handle the 'Escape' key press
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        // Cleanup function to remove the event listener
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]); // Only re-run if 'isOpen' changes

    // Function to handle image click
    const handleImageClick = () => {
        setIsOpen(true);
    };

    // Function to close the overlay
    const handleClose = () => {
        setIsOpen(false);
    };

    // Prevent clicks on the image itself from closing the overlay
    const handleImageContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <>
            {/* The inline image that triggers the overlay */}
            <div 
                className={`relative group ${className || ''}`} 
                onClick={handleImageClick}
            >
                <img 
                    src={src} 
                    alt={alt} 
                    className="w-full h-full object-cover rounded-md bg-gray-700"
                    onError={(e) => (e.currentTarget.src = `https://placehold.co/600x400/2D3748/E2E8F0?text=${alt.replace(/\s/g, '+')}`)}
                />
                {/* Magnifying glass icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 opacity-0 group-hover:opacity-60 cursor-pointer rounded-md">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                </div>
            </div>

            {/* The Fullscreen-like Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
                    onClick={handleClose} // Close on backdrop click
                >
                    {/* Close Button (Top Right) */}
                    <button 
                        className="absolute top-4 right-4 z-50 text-white hover:text-gray-300"
                        onClick={handleClose}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Image Container */}
                    <div 
                        className="relative max-w-full max-h-full"
                        onClick={handleImageContentClick} // Prevent closing when clicking image
                    >
                        <img 
                            src={src} 
                            alt={alt} 
                            className="block max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
                            onError={(e) => (e.currentTarget.src = `https://placehold.co/1200x800/2D3748/E2E8F0?text=${alt.replace(/\s/g, '+')}`)}
                        />
                    </div>
                </div>
            )}
        </>
    );
};  
import { useState, useEffect } from 'react';

// Define the props for the component
interface ImageOverlayProps {
    src: string;
    srcSet?: string;
    sizes?: string;
    alt: string;
    className?: string;
}

export const ImageOverlay = ({ src, srcSet, sizes, alt, className }: ImageOverlayProps) => {
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
        // Disable opening the overlay on mobile devices ( < 768px )
        // Using matchMedia ensures we align exactly with Tailwind's 'md' breakpoint
        if (window.matchMedia('(min-width: 768px)').matches) {
            setIsOpen(true);
        }
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
            {/* The inline image block (wrapper + image + caption) */}
            <div 
                // Only show pointer cursor on desktop
                className={`${className || ''} cursor-default md:cursor-pointer`} 
                onClick={handleImageClick}
            >
                <div className="relative group"> {/* Inner wrapper for image + hover */}
                    <img 
                        src={src} 
                        srcSet={srcSet}
                        // Default sizes: 100vw on mobile, approx 600px on desktop if not provided
                        sizes={sizes || "(max-width: 768px) 100vw, 600px"}
                        alt={alt} 
                        className="w-full h-auto object-cover rounded-md bg-gray-700"
                        onError={(e) => (e.currentTarget.src = `https://placehold.co/600x400/2D3748/E2E8F0?text=${alt.replace(/\s/g, '+')}`)}
                    />
                    {/* Magnifying glass icon on hover - Hidden on mobile */}
                     <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 md:opacity-0 md:group-hover:opacity-100 rounded-md md:pointer-events-auto pointer-events-none">
                       <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                       </svg>
                    </div>
                </div>
                
                {/* Caption for the inline image */}
                <p className="text-sm text-gray-400 mt-2 text-center">{alt}</p>
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

                    {/* Image Container + Caption */}
                    <div 
                        className="relative max-w-full max-h-full"
                        onClick={handleImageContentClick} // Prevent closing when clicking image
                    >
                        <img 
                            src={src} 
                            srcSet={srcSet}
                            sizes="90vw" // Always large in overlay mode
                            alt={alt} 
                            className="block max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
                            onError={(e) => (e.currentTarget.src = `https://placehold.co/1200x800/2D3748/E2E8F0?text=${alt.replace(/\s/g, '+')}`)}
                        />
                        <p className="text-sm text-gray-400 mt-2 text-center">{alt}</p>
                    </div>
                </div>
            )}
        </>
    );
};
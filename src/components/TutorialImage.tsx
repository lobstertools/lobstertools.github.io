
export const TutorialImage = ({ src, alt, className, wrapperClassName }: {
    src: string;
    alt: string;
    className: string;
    wrapperClassName?: string; // Optional classes for the wrapper (like margins)
}) => (
    <div className={wrapperClassName || ''}>
        <img
            src={src}
            alt={alt}
            className={className} 
            onError={(e) => (e.currentTarget.src = `https://placehold.co/600x400/2D3748/E2E8F0?text=${alt.replace(/\s/g, '+')}`)}
        />
        <p className="text-sm text-gray-400 mt-2 text-center">{alt}</p>
    </div>
);

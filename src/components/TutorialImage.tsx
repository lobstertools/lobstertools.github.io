export const TutorialImage = ({ src, srcSet, sizes, alt, className, wrapperClassName }: {
    src: string;
    srcSet?: string;
    sizes?: string;
    alt: string;
    className: string;
    wrapperClassName?: string;
}) => (
    <div className={wrapperClassName || ''}>
        <img
            src={src}
            srcSet={srcSet}
            sizes={sizes}
            alt={alt}
            className={className} 
            onError={(e) => (e.currentTarget.src = `https://placehold.co/600x400/2D3748/E2E8F0?text=${alt.replace(/\s/g, '+')}`)}
        />
        <p className="text-sm text-gray-400 mt-2 text-center">{alt}</p>
    </div>
);
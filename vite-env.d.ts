/// <reference types="vite/client" />

declare module '@/images/*' {
    const src: string;
    export default src;
}

// Specific declarations for @/images alias with imagetools
declare module '@/images/*.webp?*' {
    const src: string;
    export default src;
}

declare module '@/images/*.jpg?*' {
    const src: string;
    export default src;
}

declare module '@/images/*.png?*' {
    const src: string;
    export default src;
}

declare module '@/images/**/*.webp?*' {
    const src: string;
    export default src;
}

declare module '@/images/**/*.jpg?*' {
    const src: string;
    export default src;
}

declare module '@/images/**/*.png?*' {
    const src: string;
    export default src;
}

// Generic wildcard declarations for relative imports
declare module '*?*&as=srcset' {
    const srcSet: string;
    export default srcSet;
}

declare module '*?*&format=webp' {
    const src: string;
    export default src;
}

declare module '*.webp?*' {
    const src: string;
    export default src;
}

declare module '*.jpg?*' {
    const src: string;
    export default src;
}

declare module '*.png?*' {
    const src: string;
    export default src;
}

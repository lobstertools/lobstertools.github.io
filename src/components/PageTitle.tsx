import { useEffect } from 'react';

// --- Page Title Helper Component ---
interface PageTitleProps {
    title: string;
    children: React.ReactElement;
}

export const PageTitle: React.FC<PageTitleProps> = ({ title, children }) => {
    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0); // <-- This line scrolls to the top
    }, [title]);

    return children;
};

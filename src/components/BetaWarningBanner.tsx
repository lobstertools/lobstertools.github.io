export const BetaWarningBanner: React.FC = () => {
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

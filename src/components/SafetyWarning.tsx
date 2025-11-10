export const SafetyWarning = () => (
    <section id="safety" className="my-16">
        <div className="bg-red-900/30 border border-red-700 text-red-200 px-6 py-5 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-red-100 flex items-center gap-x-2">
                <span role="img" aria-label="Warning">⚠️</span>
                Important Safety Warning
            </h2>
            <p className="mt-3 text-red-100">
                This project is intended for educational and novelty purposes by responsible adults. Self-bondage carries inherent and serious risks, including nerve damage, circulation loss, and asphyxiation.
            </p>
            <ul className="list-disc list-outside space-y-2 mt-4 pl-5 text-red-200">
                <li>You are building this toolkit at your <strong>own risk</strong>.</li>
                <li>Thoroughly test all components, especially release mechanisms, before any use.</li>
                <li>Always have a failsafe plan and emergency tools (like shears or cutters) within reach.</li>
                <li>Never use this system in a way that restricts breathing or in any situation you cannot safely escape from.</li>
                <li>The creators of this project assume <strong>no liability</strong> for any harm, damage, or legal consequences.</li>
            </ul>
        </div>
    </section>
);
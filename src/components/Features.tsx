export const FeaturesSection: React.FC = () => (
    <section id="features" className="my-20">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Why Build Lobster?</h2>
        <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white">Low-Cost & Accessible</h3>
                <p className="mt-2 text-gray-400">
                    Uses readily available, off-the-shelf components you can source online, keeping costs minimal.
                </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white">Easy to Assemble (DIY)</h3>
                <p className="mt-2 text-gray-400">
                    Designed for the hobbyist. With clear instructions, a few basic tools, and a bit of time, you can build the full kit.
                </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white">Open Source & Customizable</h3>
                <p className="mt-2 text-gray-400">
                    The entire project is open source. Modify the code, adapt the hardware, and share your creations with the community.
                </p>
            </div>
        </div>
    </section>
);

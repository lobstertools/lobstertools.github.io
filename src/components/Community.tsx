export const Community = () => (
    <section id="community" className="my-20 py-16 px-4 bg-gray-800 rounded-lg text-center">
        <h2 className="text-3xl font-bold text-white">Community & Open Source</h2>
        <p className="mt-3 max-w-2xl mx-auto text-gray-400">
            Find a bug? Have a feature request? Want to share your build? The Lobster Toolkit is constantly evolving. Get in touch with the
            community or check out the source code.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
                href="https://github.com/lobstertools"
                target="_blank"
                rel="noreferrer"
                // w-full makes it stretch, but the parent px-4 keeps it off the edge
                className="inline-block w-full sm:w-auto bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
            >
                View on GitHub
            </a>
        </div>
    </section>
);

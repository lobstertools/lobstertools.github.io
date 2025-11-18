export const Contact = () => (
    <section id="contact" className="my-20 py-16 bg-gray-800 rounded-lg text-center">
        <h2 className="text-3xl font-bold text-white">Have Feedback?</h2>
        <p className="mt-3 max-w-xl mx-auto text-gray-400">
            Find a bug? Have a feature request? Want to share your build?
            Get in touch with the community.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="https://www.reddit.com/r/lobstertools/" target="_blank" className="inline-block w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                Join on /r/lobstertools
            </a>
            <a href="mailto:lobster@pobox.com" className="inline-block w-full sm:w-auto bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                Send an Email
            </a>
        </div>
    </section>
);
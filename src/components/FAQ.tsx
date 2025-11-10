export const FaqSection: React.FC = () => (
    <section id="faq" className="my-20">
        <h2 className="text-3xl font-bold text-center text-white mb-16">Frequently Asked Questions</h2>
        
        <div className="max-w-4xl mx-auto">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                
                <div className="faq-item">
                    <dt className="text-lg font-semibold text-white">What is the absolute failsafe?</dt>
                    <dd className="mt-2 text-gray-400">The primary failsafe is that MagLocks are "fail-safe," meaning they require power to stay locked. If the controller loses power (e.g., you unplug it), the lock will release. Always keep emergency shears within reach as a final backup.</dd>
                </div>

                <div className="faq-item">
                    <dt className="text-lg font-semibold text-white">How much does this cost to build?</dt>
                    <dd className="mt-2 text-gray-400">The MagLock costs about 50 Euro. The controller costs about 20. The total cost for a full setup with two MagLocks is typically under 150 EUR.</dd>
                </div>
                
                <div className="faq-item">
                    <dt className="text-lg font-semibold text-white">Where do I buy the components?</dt>
                    <dd className="mt-2 text-gray-400">We recommend common electronics hobbyist sites like AliExpress, Amazon, Adafruit, or SparkFun, as well as your local hardware store. The components are generic and widely available.</dd>
                </div>

                <div className="faq-item">
                    <dt className="text-lg font-semibold text-white">What is the "Session Manager"?</dt>
                    <dd className="mt-2 text-gray-400">The Session Manager is the application (for web, desktop, or mobile) that you use to communicate with the MagLock Controller. It lets you set timers, sequences, and manually lock/unlock the device.</dd>
                </div>

                <div className="faq-item">
                    <dt className="text-lg font-semibold text-white">How hard is this to build? Do I need to code?</dt>
                    <dd className="mt-2 text-gray-400">No coding is required! You only need to flash the pre-compiled firmware. You will need basic soldering skills and the ability to follow a wiring diagram. It's a "beginner-intermediate" electronics project.</dd>
                </div>

                <div className="faq-item">
                    <dt className="text-lg font-semibold text-white">Do I need a 3D printer?</dt>
                    <dd className="mt-2 text-gray-400">No. Both the MagLock and the Controller use off-the-shelf enclosures. You use a standard "project box" and a PVC fittings.</dd>
                </div>

                <div className="faq-item">
                    <dt className="text-lg font-semibold text-white">Is the wireless connection secure?</dt>
                    <dd className="mt-2 text-gray-400">The controller connects to your local WiFi network. As long as your WiFi network is secure (e.g., using WPA2/WPA3), the connection is private. The app communicates directly with the controller over your local network.</dd>
                </div>

                <div className="faq-item">
                    <dt className="text-lg font-semibold text-white">Why "Lobster"?</dt>
                    <dd className="mt-2 text-gray-400">Lobsters are associated with concepts of being "bound" (e.g., lobster claws). We thought it was a memorable and fitting codename for an open-source project in this space.</dd>
                </div>
                
                <div className="faq-item">
                    <dt className="text-lg font-semibold text-white">Can I use a stronger (e.g., 300lb) MagLock?</dt>
                    <dd className="mt-2 text-gray-400">Yes, but you MUST ensure your 12V power supply and the MOSFET can handle the increased amperage (current draw) of the stronger lock. The 60kg/130lb lock is recommended as it's more than sufficient and has a low power draw.</dd>
                </div>
                
                <div className="faq-item">
                    <dt className="text-lg font-semibold text-white">How many MagLocks can one controller power?</dt>
                    <dd className="mt-2 text-gray-400">The current design (and firmware) supports up to two MagLocks per controller.</dd>
                </div>

                <div className="faq-item">
                    <dt className="text-lg font-semibold text-white">Is this legal?</dt>
                    <dd className="mt-2 text-gray-400">Building electronics projects is legal. However, the use of this device is subject to your local laws and regulations regarding BDSM and consensual activities. You are solely responsible for ensuring your use is lawful and consensual.</dd>
                </div>

                <div className="faq-item">
                    <dt className="text-lg font-semibold text-white">How long does the build take?</dt>
                    <dd className="mt-2 text-gray-400">For someone with basic soldering experience, you can probably assemble and test the controller an hour. The MagLock assembly is very quick, around 30 minutes.</dd>
                </div>

            </dl>
        </div>
    </section>
);
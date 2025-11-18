import { SafetyWarning } from "../components/SafetyWarning";
import { ImageOverlay } from "../components/ImageOverlay";
import { TutorialImage } from "../components/TutorialImage";

export const BuildControllerPage = () => (
    <>
        <div className="py-12">
            <h1 className="text-4xl font-bold text-white text-center mb-6">Build the MagLock Controller</h1>
            <p className="text-xl text-center text-gray-400 mb-12 max-w-3xl mx-auto">
                The "brains" of your Lobster system. This controller receives commands from the Session Manager and controls power to the MagLock.
            </p>

            <TutorialImage 
                src="/controller/finished_controller.jpg" 
                alt="Finished Lobster MagLock Controller" 
                wrapperClassName="mb-12"
                className="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-lg bg-gray-700"
            />
            
            <SafetyWarning />

            {/* Introduction */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                        Overview
                    </h2>
                    <p className="text-gray-300 mb-4">This guide covers the assembly of the Lobster MagLock Controller using a robust, off-the-shelf component: the DIYMORE ESP32 2-Channel MOS Switch Module.</p>
                    <p className="text-gray-300 mb-4">By using this specific pre-made board (which integrates the ESP32 and MOSFETs), you avoid the complexity of hand-wiring individual modules or the expense of ordering custom PCBs. It connects to your computer via the Lobster App and safely switches 12V power to your MagLocks.</p>
                    <p className="text-gray-300">The assembly primarily involves drilling the enclosure, soldering the included pin headers to the DIYMORE board, and wiring the panel-mount connectors. Expect to spend about 1-2 hours on this build.</p>
                </div>
            </section>

            {/* Cost Breakdown */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                        Controller Cost Breakdown
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                            <div className="text-3xl font-bold text-green-400">~€40</div>
                            <div className="text-gray-400 mt-2">Total Cost</div>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                            <div className="text-3xl font-bold text-yellow-400">~€25</div>
                            <div className="text-gray-400 mt-2">Main Board & Connectors</div>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                            <div className="text-3xl font-bold text-blue-400">~€15</div>
                            <div className="text-gray-400 mt-2">Housing, PSU & Programmer</div>
                        </div>
                    </div>
                    <p className="text-gray-300 mb-4">The total cost to build the controller is roughly 40 to 50 EUR. The main expense is the DIYMORE 2-Channel board, the secure GX-series connectors and the Abort Switch (foot pedal), which costs about 25 EUR, depending on the supplier. </p>
                    <p className="text-gray-300">The remaining cost covers the 12V power supply, the USB-to-Serial programmer for flashing, and all the additional hardware. This includes the project box, the status LED, and other miscellaneous wires and components. Prices will vary a bit over time and based on shipping.</p>
                </div>
            </section>

            {/* Materials Section */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">Required Materials</h2>
                    <p className="text-gray-300 mb-8">This build relies on a DIYMORE Mosfet Smart Switch. Please ensure you buy the 2-Channel version.</p>

                    {/* TWO COLUMN LAYOUT HERE */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Connectors & Hardware</h3>
                            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                                <li>1 x Plastic Project Box (e.g., 100x60x25mm or similar)</li>
                                <li>1 x Panel-Mount DC Barrel Jack (Female)
                                    <ul className="list-['»'] list-outside pl-5 text-sm text-gray-400">
                                        <li>Note: Check inner diameter (e.g., 2.1mm vs 2.5mm) to match your power adapter.</li>
                                    </ul>
                                </li>
                                <li>3 x Panel-Mount GX16 "Aviation" Connector (Female, 2-pin)</li>
                                <li>3 x GX16 Cable Connector (Male, 2-pin)</li>
                                <li>1 x Status LED (with built-in resistor)</li>
                                <li>1 x Abort Switch (Momentary push button or foot pedal)</li>
                                <li>Hook-up wire (22 AWG, color-coded red/black)</li>
                                <li>Heat Shrink Tubing</li>
                                <li>Double-sided tape</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Electronics</h3>
                            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300 mb-8">
                                <li>1 x DIYMORE ESP32 2-Channel MOS Switch Module (DC 5-60V)</li>
                                <li>1 x 6-Pin Male Header (Single row -  included with board)</li>
                                <li>1 x 10-Pin Male Header (Double row - included with board)</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mb-4">Programmer & Power Supply</h3>
                            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                                <li>1 x USB-to-Serial (UART) Adapter (for flashing firmware)</li>
                                <li>1 x 12V DC Power Supply (2A+) or 12V Battery Pack</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">Required Tools</h2>
                    <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                        <li>Soldering Iron & Solder (Fine tip recommended)</li>
                        <li>Wire Stripper & Cutting Pliers</li>
                        <li>Small Screwdriver Set</li>
                        <li>Set of small spanners (to tighten connector nuts)</li>
                        <li>Drill or Dremel</li>
                        <li>Drill Bits:
                            <ul className="list-['»'] list-outside pl-5 text-sm text-gray-400">
                                <li><strong>6mm</strong> (for Status LED)</li>
                                <li><strong>8mm</strong> (for GX12/GX16 connectors & Abort Switch)</li>
                                <li><strong>11mm</strong> (for DC Power Jack)</li>
                            </ul>
                        </li>
                        <li>Printer (for drilling template)</li>
                        <li>"Helping Hands" (a weighted stand with clips) - <em>(Recommended)</em></li>
                    </ul>                    
                </div>
            </section>

            {/* Assembly Instructions */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">Assembly Instructions</h2>
                    
                    <div className="bg-blue-900/20 border border-blue-700/50 rounded p-4 mb-8">
                        <h4 className="text-blue-100 font-bold mb-2">🔧 Construction Note: Achieving a Perfect Fit</h4>
                        <p className="text-blue-200 text-sm">
                            Fitting an off-the-shelf PCB like the DIYMORE module into a generic project box often requires a bit of patience. Internal standoffs and dimensions rarely align perfectly. Expect to do some test fitting and "fiddling" to get everything seated correctly inside the enclosure.
                        </p>
                    </div>

                    {/* Part 1: Box Preparation */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-200 mb-6 pb-3 border-b border-gray-700">Part 1: Enclosure Preparation</h3>
                        <div className="space-y-6">
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Step 1: Drill Holes</h4>
                                <p className="text-gray-300 mb-4">Print and cut out the provided drilling template. Use transparent tape to fix it in place on your project box, then use a sharpie or center punch to place markers for each hole.</p>
                                <p className="text-gray-300 mb-4">You can use either a wood or metal drill bit, as the box is plastic. (Do not use an aluminum box, as it will act as a Faraday cage and block the ESP32's Wi-Fi signal).</p>
                                <p className="text-gray-300 mb-4">If you do not have a printer, measure the layout manually keeping in mind the clearance as explained below.</p>
                                
                                <a href="#" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors mb-4">
                                    Download Drilling Template (.pdf)
                                </a>

                                <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                                    <li>Use a <strong>6mm drill bit</strong> for the Status LED.</li>
                                    <li>Use an <strong>8mm drill bit</strong> for the GX connectors and Abort Switch.</li>
                                    <li>Use an <strong>11mm drill bit</strong> for the DC Power connector.</li>
                                </ul>
                                
                                <div className="bg-yellow-900/20 border border-yellow-700/50 rounded p-3 my-4">
                                    <p className="text-yellow-200 text-sm font-bold mb-4">⚠️ Check Sizing & Clearance:</p>
                                    <ul className="list-disc list-outside pl-5 text-yellow-200 text-sm ml-2 space-y-2">
                                        <li><strong>Measure First:</strong> These drill sizes are common, but parts vary. Use a caliper to measure the exact diameter of your panel-mount connectors, switch, and LED before drilling to ensure a perfect, snug fit.</li>
                                        <li><strong>Internal Nuts:</strong> Do not drill too close to the box edge. Leave enough internal room for the counter nut to spin freely.</li>
                                        <li><strong>External Plugs:</strong> The GX plugs are wide (over 12mm). Space your drill holes at least <strong>1.5cm apart (center-to-center)</strong> to ensure the plugs don't block each other.</li>
                                    </ul>
                                </div>

                                <TutorialImage 
                                    src="/images/controller/drilled_box.jpg" 
                                    alt="All holes drilled in the project box" 
                                    className="w-full h-auto rounded-md"
                                />                                
                            </div>

                            {/* --- WIRE PREP PRO-TIP --- */}
                            <div className="bg-blue-900/20 border border-blue-700/50 rounded p-4 my-6">
                                <h4 className="text-blue-100 font-bold mb-2">💡 Wire Preparation Pro-Tip</h4>
                                <p className="text-blue-200 text-sm">
                                    For a strong, reliable connection (in both screw terminals and on solder pads), always prepare your wire ends:
                                </p>
                                <ol className="list-decimal list-inside text-blue-200 text-sm pl-5 mt-2">
                                    <li><strong>Strip:</strong> Remove about 0.5cm (5mm) of insulation.</li>
                                    <li><strong>Twist:</strong> Tightly twist the exposed strands into a single fine point.</li>
                                    <li><strong>Tin:</strong> Apply a small amount of solder to the twisted end. This prevents fraying and ensures excellent conductivity.</li>
                                </ol>
                            </div>

                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Step 2: Prepare Panel Connectors</h4>
                                <p className="text-gray-300 mb-4">Cut 6 wires (3 red, 3 black) to about 15cm in length. <strong>Prepare all 12 wire ends</strong> as described in the Pro-Tip box. A "Helping Hand" tool makes this much easier.</p>
                                <p className="text-gray-300 mb-4">Solder the prepared wires to each of the 3 panel-mount connectors (2 for MagLocks, 1 for Abort). Be consistent with your polarity, ensuring the same pin is used for positive (red) on all connectors.</p>
                                <p className="text-gray-300 mb-4">Once soldered, slide a small piece of heat shrink tube over each connection and apply heat to insulate them.</p>

                                <TutorialImage 
                                    src="/images/controller/prepared_connectors.jpg" 
                                    alt="Three GX12 connectors fully prepared with wires and heat shrink" 
                                    className="w-full h-auto rounded-md"
                                />
                            </div>

                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Step 3: Mount Connectors</h4>
                                <p className="text-gray-300">Install the connectors into the drilled holes. Ensure they are upright and tighten the counter nuts firmly from the inside using your small spanners.</p>
                                
                                <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <ImageOverlay 
                                        src="/controller/connectors_soldered.jpg" 
                                        alt="Connectors with wires soldered" 
                                        className="w-full h-auto rounded-md"
                                    />
                                    <ImageOverlay
                                        src="/controller/box_internal_view.jpg" 
                                        alt="Connectors mounted inside box" 
                                        className="w-full h-auto rounded-md"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Part 2: PCB Assembly */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-200 mb-6 pb-3 border-b border-gray-700">Part 2: PCB Header Preparation</h3>
                        <div className="space-y-6">
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Step 4: Solder Programming Header</h4>
                                <p className="text-gray-300 mb-4">The DIYMORE board comes with loose pin headers. PCB pads are fragile, so take your time. First, solder the <strong>single-row 6-pin header</strong> located above the ESP32.</p>
                                <p className="text-gray-300">This header (IO0, GND, GND, TX, RX, 5V) is required for connecting the USB-to-Serial programmer to flash firmware.</p>
                            </div>

                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Step 5: Solder I/O Header</h4>
                                <p className="text-gray-300 mb-4">Next, solder the <strong>double-row pin header</strong>.</p>
                                <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                                    <li><strong>Location:</strong> This header goes on the <strong>inside</strong> row of pads (closest to the ESP32), <em>not</em> the outside edge.</li>
                                    <li><strong>Requirements:</strong> You must solder the outer pads for stability, and specifically pins <strong>G17</strong> and <strong>G18</strong>.</li>
                                </ul>
                            </div>

                            <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <ImageOverlay 
                                    src="/controller/connectors_soldered.jpg" 
                                    alt="Connectors with wires soldered" 
                                    className="w-full h-auto rounded-md"
                                />
                                <ImageOverlay
                                    src="/controller/box_internal_view.jpg" 
                                    alt="Connectors mounted inside box" 
                                    className="w-full h-auto rounded-md"
                                />
                            </div>                            
                        </div>
                    </div>

                    {/* Part 3: Peripheral Wiring */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-200 mb-6 pb-3 border-b border-gray-700">Part 3: Peripheral Wiring</h3>
                        <div className="space-y-6">
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Step 6: Connect Peripherals</h4>
                                <p className="text-gray-300 mb-4"><strong>Prepare the ends</strong> of your LED and Abort Switch wires (as described in the Pro-Tip box). Solder them to the double-row header following this pinout:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-900/50 p-4 rounded border border-gray-700">
                                    <div>
                                        <div className="font-bold text-white">Status LED</div>
                                        <div className="text-gray-400 text-sm">Red Wire → <strong>G17</strong></div>
                                        <div className="text-gray-400 text-sm">Black Wire → <strong>GND</strong></div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">Abort Switch</div>
                                        <div className="text-gray-400 text-sm">Red Wire → <strong>G18</strong></div>
                                        <div className="text-gray-400 text-sm">Black Wire → <strong>GND</strong></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Part 4: Main Power & Lock Wiring */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-200 mb-6 pb-3 border-b border-gray-700">Part 4: Main Power & Lock Wiring</h3>
                        <div className="space-y-6">
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Step 7: Measure, Cut, and Connect</h4>
                                <p className="text-gray-300 mb-4">Place the PCB loosely inside the box to determine the best fit, then prepare the heavy-gauge wires.</p>
                                <ol className="list-decimal list-inside space-y-3 text-gray-300">
                                    <li><strong>Measure:</strong> Route wires from panel connectors to the green screw terminals on the PCB.</li>
                                    <li><strong>Prep:</strong> Cut the wires to their final length and <strong>prepare the ends</strong> as described in the Pro-Tip box.</li>
                                    <li><strong>Connect:</strong> Insert the prepared ends into the green terminals and tighten the screws.</li>
                                    <li><strong>Check Polarity:</strong> Double-check Positive (+) and Negative (-) markings.</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    {/* Part 5: Mounting */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-200 mb-6 pb-3 border-b border-gray-700">Part 5: Mounting</h3>
                        <div className="space-y-6">
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Step 8: Mount the Board</h4>
                                <p className="text-gray-300 mb-4">Test fit the board inside the box. The board should fit well enough inside the box laying on top of the internal stands. You can align two of the screw holes over the stands and, with small enough screws, you can secure the board to the box.</p>
                                <p className="text-gray-300">If the PCB's mounting holes do not align with the box's screw stands, the simplest method is to apply layers of double-sided tape to the bottom of the box. Ensure the tape is thick enough to clear the solder joints on the bottom of the PCB. Press the board firmly onto the tape to secure it.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- NEW FLASHING SECTION --- */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">Flashing the Firmware</h2>
                    <p className="text-gray-300 mb-8">With the controller fully assembled, you must flash the Lobster firmware onto it before use. This is done from the Lobster Session Manager application.</p>
                    
                    <div className="space-y-6">
                        {/* Step 1 */}
                        <div className="bg-gray-800/50 rounded-lg p-6">
                            <h4 className="text-xl font-bold text-white mb-4">Step 1: Connect the Programmer</h4>
                            <p className="text-gray-300 mb-4">Connect your USB-to-Serial (UART) programmer to the 6-pin header you soldered. Follow the pinout carefully:</p>
                            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300 mb-4">
                                <li>Programmer <strong>RX</strong> → Controller <strong>TX</strong></li>
                                <li>Programmer <strong>TX</strong> → Controller <strong>RX</strong></li>
                                <li>Programmer <strong>GND</strong> → Controller <strong>GND</strong></li>
                                <li>Programmer <strong>5V</strong> → Controller <strong>5V</strong></li>
                            </ul>
                            <div className="bg-red-900/20 border border-red-700/50 rounded p-4">
                                <p className="text-yellow-200 text-sm font-bold mb-4">⚠️ Important:</p>
                                <p className="text-red-100 font-bold">Do not attach any other power source (like your 12V adapter or a USB cable) while flashing. The controller is powered by the 5V pin from your programmer during this process.</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-gray-800/50 rounded-lg p-6">
                            <h4 className="text-xl font-bold text-white mb-4">Step 2: Get the Software</h4>
                            <p className="text-gray-300 mb-4">Go to the <a href="/downloads" className="text-indigo-400 hover:text-indigo-300">Downloads page</a> to get both the <strong>Lobster Session Manager</strong> app and the latest <strong>firmware.bin</strong> file.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-gray-800/50 rounded-lg p-6">
                            <h4 className="text-xl font-bold text-white mb-4">Step 3: Open the Device Manager</h4>
                            <p className="text-gray-300 mb-4">Start the Session Manager. If this is your first time, you'll see a welcome screen, followed by the Device Manager. Otherwise, open the "Device Manager" by clicking on the device name in the top right corner.</p>
                        </div>

                        {/* Step 4 */}
                        <div className="bg-gray-800/50 rounded-lg p-6">
                            <h4 className="text-xl font-bold text-white mb-4">Step 4: Select Port & Firmware</h4>
                            <p className="text-gray-300 mb-4">In the Device Manager, go to the "Serial Port" tab. Select your programmer from the dropdown list. Then, click "Select Firmware" and choose the `firmware.bin` file you downloaded.</p>
                            <div className="bg-blue-900/20 border border-blue-700/50 rounded p-3 mt-4">
                                <p className="text-blue-200 text-sm"><strong>Note:</strong> If your programmer doesn't show up, you may need to install drivers for it. If you're stuck, drop a question in our <a href="https://www.reddit.com/r/lobstertools/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">support community</a>.</p>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="bg-gray-800/50 rounded-lg p-6">
                            <h4 className="text-xl font-bold text-white mb-4">Step 5: Enter Bootloader Mode</h4>
                            <p className="text-gray-300 mb-4">This step is timing-sensitive, so read it first:</p>
                            <ol className="list-decimal list-inside space-y-3 text-gray-300">
                                <li><strong>Press and HOLD</strong> the "BOOT" button on the controller board.</li>
                                <li>While still holding the button, <strong>plug the programmer's USB cable</strong> into your computer.</li>
                                <li>After a few seconds, you can <strong>release the button</strong>.</li>
                            </ol>
                            <p className="text-gray-300 mt-4">The ESP32 must be powered on *while* the boot button is held to enter firmware loading mode. Pressing the button *after* it's already powered on will not work.</p>
                        </div>

                        {/* Step 6 */}
                        <div className="bg-gray-800/50 rounded-lg p-6">
                            <h4 className="text-xl font-bold text-white mb-4">Step 6: Flash!</h4>
                            <p className="text-gray-300">Click the "Flash" button in the Session Manager. You will see a progress bar. The entire flashing process should take around 2 minutes. Once complete, you can unplug the programmer.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Using Your Controller */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                        Using Your Controller
                    </h2>
                    <p className="text-gray-300 mb-4">Congratulations! You have now fully assembled and flashed your Lobster MagLock Controller. It is securely encased in its project box, with robust panel-mount connectors ready for your MagLocks and power supply.</p> 
                    <p className="text-gray-300 mb-4">This controller is now the central "brains" of your system. You can now connect your 12V power supply, plug in your MagLock(s) and Abort Switch, and connect to the Lobster Session Manager application to begin a session.</p>

                    <TutorialImage 
                        src="/controller/finished_controller.jpg" 
                        alt="Finished Lobster MagLock Controller" 
                        wrapperClassName="mb-4"
                        className="w-full max-w-3xl mx-auto h-auto rounded-md"
                    />

                    {/* Final Test */}
                    <div className="bg-green-900/30 border border-green-600/50 rounded-lg p-6 mt-8 mb-6">
                        <h2 className="text-2xl font-bold text-white mb-3">⚠️ Final System Test</h2>
                        <p className="text-green-100">
                            Before putting it to its final use, connect your new controller to your MagLock. Thoroughly test the entire system with your power source and the Session Manager application.
                        </p>
                        <p className="text-green-100 mt-2">
                            The Session Manager has a dedicated <strong>"Hardware Test" mode</strong> for this purpose. This mode allows you to test the communication between the app and the controller, and it will power the MagLocks for a short duration to ensure everything engages and disengages reliably.
                        </p>
                        <p className="text-green-100 font-bold mt-2">Play safe and have fun.</p>
                    </div>                    
                </div>
            </section>

            {/* --- LED Status --- */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                        Understanding the Status LED
                    </h2>
                    <p className="text-gray-300 mb-6">
                        The single-color status LED provides at-a-glance information on what the controller is doing. It uses distinct patterns, defined in the firmware, to communicate its state.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-700/50 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold text-white mb-2">READY</h3>
                            <p className="text-gray-300 text-sm"><strong>Pattern: Slow Breath</strong> (Fades on for 2s, off for 2s)</p>
                            <p className="text-gray-400 text-sm mt-1">The controller is idle and ready to accept a new session command from the app.</p>
                        </div>
                        <div className="bg-gray-700/50 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold text-white mb-2">COUNTDOWN</h3>
                            <p className="text-gray-300 text-sm"><strong>Pattern: Fast Blink</strong> (250ms on, 250ms off)</p>
                            <p className="text-gray-400 text-sm mt-1">A session has started, and the channel delay timers are active. The lock is not yet engaged.</p>
                        </div>
                        <div className="bg-gray-700/50 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold text-white mb-2">LOCKED</h3>
                            <p className="text-gray-300 text-sm"><strong>Pattern: Solid On</strong></p>
                            <p className="text-gray-400 text-sm mt-1">The session is active, and power is being supplied to the MagLock(s).</p>
                        </div>
                        <div className="bg-gray-700/50 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold text-white mb-2">ABORTED</h3>
                            <p className="text-gray-300 text-sm"><strong>Pattern: SOS Signal</strong> (3 fast blinks, 1s pause)</p>
                            <p className="text-gray-400 text-sm mt-1">The session was aborted (either by button or app). The reward penalty timer is now active.</p>
                        </div>
                        <div className="bg-gray-700/50 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold text-white mb-2">COMPLETED</h3>
                            <p className="text-gray-300 text-sm"><strong>Pattern: Slow Double-Blink</strong> (2 blinks, 3s pause)</p>
                            <p className="text-gray-400 text-sm mt-1">The session or penalty timer finished successfully. The reward code is available in the app.</p>
                        </div>
                        <div className="bg-gray-700/50 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold text-white mb-2">TESTING</h3>
                            <p className="text-gray-300 text-sm"><strong>Pattern: Medium Pulse</strong> (Fades on for 750ms, off for 750ms)</p>
                            <p className="text-gray-400 text-sm mt-1">The hardware test mode is active, powering the MagLock(s) for a short duration.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Power Source Considerations */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">Power Source Considerations</h2>
                    <p className="text-gray-300 mb-4">
                        While a standard 12V power adapter works well, using an <strong>external 12V battery pack</strong> (like LiPo/Li-ion) adds a layer of safety. If the controller freezes, the battery eventually dies, releasing the lock.
                    </p>
                    
                    <div className="bg-gray-700/50 p-6 rounded-lg mt-6">
                        <h3 className="text-xl font-bold text-white mb-4">Battery Sizing Example (3 Hour Session)</h3>
                        <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                            <li><strong>MagLock Current:</strong> ~160 mA per lock (x2)</li>
                            <li><strong>ESP32 Current:</strong> ~160 mA (conservative)</li>
                            <li><strong>Total Current:</strong> (2 × 160 mA) + 160 mA = <strong>480 mA</strong></li>
                            <li><strong>Capacity Needed:</strong> 480 mA × 3 hours = <strong>1440 mAh</strong></li>
                        </ul>
                        <p className="text-gray-400 mt-4 text-sm">
                            <em>Recommendation: A 2000-2500 mAh battery provides a healthy safety margin. Remember this is a trade-off: a larger battery gives you more operational time, but it will also take longer to run out in a failsafe scenario.</em>
                        </p>
                    </div>
                </div>
            </section>

            {/* Wiring & Connectors Info */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                        Wiring & Connectors Logic
                    </h2>
                    <p className="text-gray-300 mb-4">Your choice of connectors is important because this system is designed to be strict about bailing out early.</p>

                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">MagLocks & Abort Switches</h3>
                            <div className="bg-gray-700/30 p-4 rounded border-l-4 border-indigo-500">
                                <p className="text-gray-300 text-sm">
                                    We strongly recommend <strong>GX-series "aviation" connectors</strong>. They screw into place and lock. This prevents you from defeating the system by simply yanking the plug out, which is a <strong>hard bypass</strong> and system failure.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Main Power</h3>
                            <div className="bg-gray-700/30 p-4 rounded border-l-4 border-green-500">
                                <p className="text-gray-300 text-sm">
                                    The power plug <strong>should not</strong> use a locking connector. This is a safety feature. In an emergency, you can instantly cut power without fumbling with a lock. The software detects this reboot and applies a penalty, so cheating isn't free.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sourcing Materials */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                        Sourcing Materials
                    </h2>
                    <p className="text-gray-300 mb-6">You can find these parts on sites like AliExpress, Amazon, or electronics hobbyist stores. Use these specific names in your search:</p>
                    
                    <div className="space-y-4">
                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-2">Main Board</h3>
                            <p className="text-gray-300 text-sm">"DiyMore ESP32 2-way MOS Switch Module DC 5-60V" (Important: <strong>Select the 2-Channel version</strong>)</p>
                        </div>
                        
                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-2">Enclosure</h3>
                            <p className="text-gray-300 text-sm">"FT100-68-50 Transparent Waterproof Outdoor Enclosure" or similar (min. 100x60x25mm)</p>
                        </div>
                        
                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-2">Connectors</h3>
                            <p className="text-gray-300 text-sm">"GX16 2-pin female panel mount" and "GX16 2-pin male cable connector"</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
);

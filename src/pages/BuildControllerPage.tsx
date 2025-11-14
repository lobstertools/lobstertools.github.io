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
                    <p className="text-gray-300 mb-4">This guide covers the assembly of the Lobster MagLock Controller using a robust, off-the-shelf component: the **DIYMORE ESP32 2-Channel MOS Switch Module**.</p>
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
                            <div className="text-3xl font-bold text-green-400">~€35</div>
                            <div className="text-gray-400 mt-2">Total Cost</div>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                            <div className="text-3xl font-bold text-yellow-400">~€20</div>
                            <div className="text-gray-400 mt-2">Main Board</div>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                            <div className="text-3xl font-bold text-blue-400">~€15</div>
                            <div className="text-gray-400 mt-2">Housing & Connectors</div>
                        </div>
                    </div>
                    <p className="text-gray-300 mb-4">The total cost is roughly €35. The DIYMORE board is a cost-effective all-in-one solution that replaces about €15 worth of separate microcontrollers and MOSFET modules.</p>
                    <p className="text-gray-300">The remaining cost covers the project box, the robust GX-series aviation connectors (highly recommended for safety), and the power supply. Using high-quality connectors ensures the system cannot be accidentally disconnected.</p>
                </div>
            </section>

            {/* Materials Section */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">Required Materials</h2>
                    <p className="text-gray-300 mb-8">This build relies on a specific commercial board. Please ensure you buy the **2-Channel** version.</p>

                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-4">Electronics</h3>
                        <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                            <li>1 x <strong>DIYMORE ESP32 2-Channel MOS Switch Module</strong> (DC 5-60V)</li>
                            <li>1 x 6-Pin Male Header (Single row - usually included with board)</li>
                            <li>1 x Double-Row Male Header (usually included with board)</li>
                            <li>1 x USB-to-Serial (UART) Adapter (for flashing firmware)</li>
                            <li>1 x 12V DC Power Supply (2A+) or 12V Battery Pack</li>
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-4">Connectors & Hardware</h3>
                        <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                            <li>1 x Project Box (e.g., 100x60x25mm or similar)</li>
                            <li>1 x Panel-Mount DC Barrel Jack (Female)
                                <ul className="list-['»'] list-outside pl-5 text-sm text-gray-400">
                                    <li>Note: Check inner diameter (e.g., 2.1mm vs 2.5mm) to match your power adapter.</li>
                                </ul>
                            </li>
                            <li>1 x Panel-Mount GX16 "Aviation" Connector (Female, 2-pin) - <em>Recommended for Lock</em></li>
                            <li>1 x GX16 Cable Connector (Male, 2-pin) - <em>For the lock cable side</em></li>
                            <li>1 x Status LED (with built-in resistor preferred)</li>
                            <li>1 x Abort Switch (Momentary push button or foot pedal)</li>
                            <li>Hook-up wire (22 AWG, color-coded red/black)</li>
                            <li>Heat Shrink Tubing</li>
                            <li>Double-sided tape</li>
                        </ul>
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
                        <li><strong>Drill Bits:</strong>
                            <ul className="list-['»'] list-outside pl-5 text-sm text-gray-400">
                                <li><strong>8mm</strong> (for GX12/GX16 connectors, LED, Switch)</li>
                                <li><strong>11mm</strong> (for DC Power Jack)</li>
                            </ul>
                        </li>
                        <li>Printer (for drilling template)</li>
                    </ul>                    
                </div>
            </section>

            {/* Recommended Tools */}
            <section className="my-16">
                  <div className="bg-gray-800 p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-white mb-4">Recommended Tools</h3>
                    <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                        <li>"Helping Hands" (a weighted stand with clips) to hold wires and the board, making soldering much easier.</li>
                    </ul>
                </div>
            </section>

            {/* Assembly Instructions */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">Assembly Instructions</h2>
                    
                    <div className="bg-blue-900/20 border border-blue-700/50 rounded p-4 mb-8">
                        <h4 className="text-blue-100 font-bold mb-2">Construction Note: Achieving a Perfect Fit</h4>
                        <p className="text-blue-200 text-sm">
                            Fitting an off-the-shelf PCB like the DIYMORE module into a generic project box often requires a bit of patience. Internal standoffs and dimensions rarely align perfectly. <strong>Expect to do some test fitting and "fiddling"</strong> to get everything seated correctly inside the enclosure.
                        </p>
                    </div>

                    {/* Part 1: Box Preparation */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-200 mb-6 pb-3 border-b border-gray-700">Part 1: Enclosure Preparation</h3>
                        <div className="space-y-6">
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Step 1: Drill Holes</h4>
                                <p className="text-gray-300 mb-4">Print the provided drilling template to mark your project box. If you do not have a printer, measure the layout manually.</p>
                                
                                <a href="#" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors mb-4">
                                    Download Drilling Template (.pdf)
                                </a>

                                <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                                    <li>Use an <strong>8mm drill bit</strong> for the GX connectors, Abort Switch, and LED.</li>
                                    <li>Use an <strong>11mm drill bit</strong> for the DC Power connector.</li>
                                </ul>
                                
                                <div className="bg-yellow-900/20 border border-yellow-700/50 rounded p-3 mt-4">
                                    <p className="text-yellow-200 text-sm">⚠️ <strong>Check Clearance:</strong> Connectors require internal space for the <strong>counter nut</strong>. Do not drill too close to the edge or to other holes; leave enough clearance for the nuts to spin freely.</p>
                                </div>
                            </div>

                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Step 2: Prepare Panel Connectors</h4>
                                <p className="text-gray-300 mb-4">Cut 6 wires (3 red, 3 black) to about 15cm in length. Strip about 0.5cm of each tip. Roll the strands into a fine point and tin the edge with a small amount of solder. A "Helping Hand" tool makes this much easier.</p>
                                <p className="text-gray-300 mb-4">Solder the red and black wires to each of the 3 panel-mount connectors (2 for MagLocks, 1 for Abort). Be consistent with your polarity, ensuring the same pin is used for positive (red) on all connectors.</p>
                                <p className="text-gray-300">Once soldered, slide a small piece of heat shrink tube over each connection and apply heat to insulate them.</p>

                                <TutorialImage 
                                    src="/controller/prepared_connectors.jpg" 
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
                                <p className="text-gray-300">This header (IO0, GND, GND, TX, RX, 5V) is <strong>required</strong> for connecting the USB-to-Serial programmer to flash firmware.</p>
                            </div>

                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Step 5: Solder I/O Header</h4>
                                <p className="text-gray-300 mb-4">Next, solder the <strong>double-row pin header</strong>.</p>
                                <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                                    <li><strong>Location:</strong> This header goes on the <strong>inside</strong> row of pads (closest to the ESP32), <em>not</em> the outside edge.</li>
                                    <li><strong>Requirements:</strong> You must solder the outer pads for stability, and specifically pins **G17** and **G18**.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Part 3: Peripheral Wiring */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-200 mb-6 pb-3 border-b border-gray-700">Part 3: Peripheral Wiring</h3>
                        <div className="space-y-6">
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Step 6: Connect Peripherals</h4>
                                <p className="text-gray-300 mb-4">Strip about 5mm of insulation from your LED and Abort Switch wires, twist, and tin the ends. Solder them to the double-row header following this pinout:</p>
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
                                    <li><strong>Prep:</strong> Cut wires to length. Strip, <strong>twist tightly</strong>, and <strong>tin the ends</strong> with solder to prevent fraying.</li>
                                    <li><strong>Connect:</strong> Insert tinned ends into green terminals and tighten screws.</li>
                                    <li><strong>Check Polarity:</strong> Double-check Positive (+) and Negative (-) markings.</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    {/* Part 5: Mounting & Finalizing */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-200 mb-6 pb-3 border-b border-gray-700">Part 5: Mounting & Finalizing</h3>
                        <div className="space-y-6">
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Step 8: Mount the Board</h4>
                                <p className="text-gray-300 mb-4">Test fit the board inside the box. The board should fit well enough without modifying the box's internal stands.</p>
                                <p className="text-gray-300">If the PCB's mounting holes do not align with the box's screw stands, the simplest method is to apply layers of double-sided tape to the bottom of the box. Ensure the tape is thick enough to clear the solder joints on the bottom of the PCB. Press the board firmly onto the tape to secure it.</p>
                            </div>

                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Step 9: Flash Firmware</h4>
                                <p className="text-gray-300 mb-4">Before closing the box, connect your <strong>USB-to-Serial Adapter</strong> to the 6-pin header you soldered in Step 4. Follow the instructions on the Downloads page to flash the firmware.</p>
                            </div>

                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Step 10: Close Up</h4>
                                <p className="text-gray-300">Once flashed and thoroughly tested, secure the lid on your project box.</p>
                            </div>
                        </div>
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

            {/* Power Source Considerations */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">Power Source Considerations</h2>
                    <p className="text-gray-300 mb-4">
                        While a standard 12V power adapter works well, using an **external 12V battery pack** (like LiPo/Li-ion) adds a layer of safety. If the controller freezes, the battery eventually dies, releasing the lock.
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
                            <em>Recommendation: Use at least a 2000-2500 mAh battery for a healthy safety margin.</em>
                        </p>
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

            {/* Final Test */}
            <section className="my-16">
                <div className="bg-green-900/30 border border-green-600/50 rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-white mb-3">⚠️ Final System Test</h2>
                    <p className="text-green-100">
                        Before putting it to its final use, connect your new controller to your MagLock. Thoroughly test the entire system with your power source and the Session Manager application. Ensure the lock engages and disengages reliably every time.
                    </p>
                    <p className="text-green-100 font-bold mt-2">Play safe and have fun.</p>
                </div>
            </section>
        </div>
    </>
);
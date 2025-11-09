// src/pages/BuildControllerPage.tsx

import { SafetyWarning } from "../components/SafetyWarning";

export const BuildControllerPage = () => (
    <>
        <div className="py-12">
            <h1 className="text-4xl font-bold text-white text-center mb-6">Build the MagLock Controller</h1>
            <p className="text-xl text-center text-gray-400 mb-12 max-w-3xl mx-auto">
                The "brains" of your Lobster system. This controller connects to the app and safely switches power to your MagLocks.
            </p>

            <img 
                src="/controller/finished_controller.jpg" 
                alt="Finished Lobster MagLock Controller" 
                className="w-full max-w-4xl mx-auto h-auto rounded-lg mb-12 shadow-lg bg-gray-700"
                onError={(e) => (e.currentTarget.src = 'https://placehold.co/896x504/2D3748/E2E8F0?text=Finished+Controller')}
            />
            

            <SafetyWarning />

            {/* Introduction */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                        Overview
                    </h2>
                    <p className="text-gray-300 mb-4">This guide covers the assembly of the Lobster MagLock Controller. This unit is the "brains" of the system, connecting to your computer (via the Lobster App) and safely switching 12V power to your MagLocks.</p>
                    <p className="text-gray-300">The assembly is fairly straightforward and primarily involves soldering connectors and wiring them to the main ESP32-MOS board. The most tool-intensive part is drilling the holes in the plastic enclosure.</p>
                </div>
            </section>

            {/* Materials Section */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">Required Materials</h2>
                    
                    <div className="grid md:grid-cols-2 gap-x-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Electronics</h3>
                            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                                <li>1 x DiyMore ESP32 2-way MOS Switch Module (DC 5-60V)</li>
                                <li>1 x LED Metal Indicator (6mm, 3-6V)
                                    <ul className="list-['»'] list-outside pl-5 text-sm text-gray-400">
                                        <li>Note: Ensure the indicator light has built-in resistors.</li>
                                    </ul>
                                </li>
                                <li>3 x GX12 Panel Mount Connectors (Female, 2-pin)</li>
                                <li>3 x GX12 Cable Connectors (Male, 2-pin)</li>
                                <li>1 x DC Power Jack Socket (Female, Panel Mount, 5.5*2.1mm)</li>
                                <li>1 x USB to UART Flasher (e.g., FTDI FT232 3.3V)</li>
                                <li>1 x 12V DC Adapter (min. 3 Amps)</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Hardware & Consumables</h3>
                            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                                <li>1 x Small Plastic Box (e.g., FT100-68-50)</li>
                                <li>1 x OMCH Foot Switch (e.g., TFS-1/FS-1)</li>
                                <li>Electrical Wire (22AWG, preferably red & black)</li>
                                <li>Solder</li>
                                <li>Double-sided Tape</li>
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
                        <li>Soldering Iron (a fine tip is helpful)</li>
                        <li>Wire Stripper & Cutters</li>
                        <li>Drill Press (recommended) or Hand Drill</li>
                        <li><strong>Drill Bits:</strong>
                            <ul className="list-['»'] list-outside pl-5 text-sm text-gray-400">
                                <li><strong>6mm</strong> (for LED)</li>
                                <li><strong>12mm</strong> (for GX12 connectors)</li>
                                <li>A bit for your DC Power Jack (check its size, often 8-12mm)</li>
                            </ul>
                        </li>
                        <li>Small Screwdriver (for box screws and board terminals)</li>
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
                    <p className="text-gray-300 mb-8">Follow these steps carefully. The assembly involves preparing the external connectors, drilling the enclosure, then soldering and mounting the components.</p>

                    {/* Part 1: Prepare External Connectors */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-200 mb-6 pb-3 border-b border-gray-700">Part 1: Prepare External Connectors</h3>
                        <div className="space-y-6">
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Step 1: Wire MagLock Connectors</h4>
                                <p className="text-gray-300 mb-4">Take your two MagLocks. Solder the two wires of each lock to one of the <strong>male GX12 cable connectors</strong> (2-pin). Ensure you are consistent with which pin is positive (red) and which is negative (black).</p>
                                
                            </div>
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Step 2: Wire Foot Pedal Connector</h4>
                                <p className="text-gray-300 mb-4">Take your Foot Pedal. Cut the cable if necessary and solder its two wires to the third <strong>male GX12 cable connector</strong>. Polarity does not matter for the switch, which is just a simple contact.</p>
                            </div>
                        </div>
                    </div>

                    {/* Part 2: Prepare the Enclosure */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-200 mb-6 pb-3 border-b border-gray-700">Part 2: Prepare the Enclosure</h3>
                        <div className="space-y-6">
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Step 1: Drill Enclosure Holes</h4>
                                <p className="text-gray-300 mb-4">You need to drill holes in your plastic enclosure. You can use the provided template or mark them manually.</p>
                                
                                <a href="/path/to/drilling-template.svg" download="lobster-controller-template.svg" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                                    Download Drilling Template (.svg)
                                </a>
                                

                                <div className="bg-blue-900/20 border border-blue-700/50 rounded p-3 my-4">
                                    <p className="text-blue-200 text-sm"><strong>Manual Alternative:</strong> If not using the template, place your components (3x GX12, 1x LED, 1x DC Jack) on the box walls. Trace their outlines with a marker and use a center punch to mark the center of each hole before drilling.</p>
                                </div>

                                <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                                    <li><strong>"Rear" Side:</strong> 1 hole for the DC Power Jack (check size).</li>
                                    <li><strong>"Front" Side:</strong> 4 holes:
                                        <ul className="list-['»'] list-outside pl-5 text-sm">
                                            <li>1 x 6mm hole (for the LED Indicator)</li>
                                            <li>3 x 12mm holes (for the 3 GX12 Panel Mounts)</li>
                                        </ul>
                                    </li>
                                </ul>
                                <p className="text-gray-300 mt-4">Deburr the holes with a file or sandpaper for a clean fit.</p>
                            </div>
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Step 2: Install Panel Mounts</h4>
                                <p className="text-gray-300 mb-4">Solder a red and black wire (approx. 10-15cm) to the two pins of all three <strong>female GX12 panel mounts</strong>. Be consistent with your polarity (e.g., pin 1 = red, pin 2 = black).</p>
                                <div className="bg-blue-900/20 border border-blue-700/50 rounded p-3 mb-4">
                                    <p className="text-blue-200 text-sm"><strong>Insider Tip:</strong> Cut your wires 1-2cm longer than you think you need. It's much easier to manage a little slack than to re-solder a wire that's too short.</p>
                                </div>
                                <p className="text-gray-300 mb-4">Install the DC Power Jack and the three GX12 panel mounts into the holes you drilled. Secure them with their included nuts.</p>
                            </div>
                        </div>
                    </div>

                    {/* Part 3: Board & Enclosure Assembly */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-200 mb-6 pb-3 border-b border-gray-700">Part 3: Board & Enclosure Assembly</h3>
                        <div className="space-y-6">
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Step 1: Solder UART Header</h4>
                                <p className="text-gray-300 mb-4">Solder the 6-pin PCB header onto the main board. The 6 holes are located in a row, typically above the ESP32 chip. This will be used for flashing.</p>
                                
                            </div>
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Step 2: Wire Main Power</h4>
                                <p className="text-gray-300 mb-4">Solder your red and black power wires to the <strong>solder lugs</strong> on the back of the DC Power Jack. Insert the other ends of these wires into the main power <strong>screw terminal</strong> on the ESP32-MOS board. <strong>Mind the polarity</strong> (red = +, black = -).</p>
                                
                            </div>
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Step 3: Wire Output Channels (MagLocks)</h4>
                                <p className="text-gray-300 mb-4">Take the wires from the two GX12 connectors intended for your MagLocks (e.g., "Channel 1" and "Channel 2"). Screw them into the <strong>Channel 1</strong> and <strong>Channel 2</strong> output screw terminals on the board. Again, <strong>mind the polarity</strong>.</p>
                            </div>
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Step 4: Wire LED and Abort Switch</h4>
                                <p className="text-gray-300 mb-4">This step requires soldering wires directly to the board's pins. The pins are labeled on the PCB and are <strong>through-hole</strong>, which makes this much easier.</p>
                                
                                
                                <div className="bg-yellow-900/20 border border-yellow-700/50 rounded p-4 mb-4">
                                    <p className="text-yellow-100 font-bold mb-2">⚠️ Be Careful!</p>
                                    <ul className="list-disc list-outside pl-5 text-yellow-200 text-sm">
                                        <li>Use a fine-point soldering tip if you have one.</li>
                                        <li>Use "Helping Hands" to hold the wire in place so you can use both hands for soldering.</li>
                                        <li>Be quick to avoid overheating the board components.</li>
                                        <li>Double-check that your solder does not accidentally connect (bridge) two adjacent pins.</li>
                                    </ul>
                                </div>

                                <p className="text-gray-300 mb-4"><strong>Procedure:</strong></p>
                                <ol className="list-decimal list-inside space-y-3 text-gray-300">
                                    <li>Strip a few millimeters of insulation from the end of your wire.</li>
                                    <li>"Tin" the wire by applying a small amount of solder to the exposed end.</li>
                                    <li>Push the tinned wire through the correct hole (e.g., `GPIO17`) from the top of the board. (Use your Helping Hands to hold it here).</li>
                                    <li>Turn the board over. Heat the pin and the PCB ring for a second, then apply a small drop of solder to create a clean, solid joint.</li>
                                </ol>
                                
                                <p className="text-gray-300 my-4"><strong>Connections:</strong></p>
                                <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                                    <li>Solder the <strong>LED +</strong> wire to <strong>GPIO17</strong>.</li>
                                    <li>Solder the <strong>LED -</strong> wire to <strong>GND</strong>.</li>
                                    <li>Solder one wire from the <strong>Abort GX12</strong> to <strong>GPIO19</strong>.</li>
                                    <li>Solder the other wire from the <strong>Abort GX12</strong> to <strong>GND</strong> (you can use the same GND pin as the LED, or another one).</li>
                                </ul>
                            </div>
                             <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Step 5: Mount the Board</h4>
                                <p className="text-gray-300 mb-4">Put a strip of double-sided tape on the bottom of the plastic box. Press the ESP32-MOS module firmly onto the tape to secure it in place, ensuring no wires are pinched.</p>
                            </div>
                        </div>
                    </div>

                    {/* Part 4: Firmware Flashing */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-200 mb-6 pb-3 border-b border-gray-700">Part 4: Firmware Flashing</h3>
                        <div className="space-y-6">
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Step 1: Connect Flasher</h4>
                                <p className="text-gray-300 mb-4">Attach your USB to UART flashing cable to the 6-pin header you soldered earlier. The pinout is critical:</p>
                                
                                <table className="min-w-full divide-y divide-gray-700 bg-gray-900/50 rounded-lg my-4 text-sm">
                                    <thead className="bg-gray-700/50">
                                        <tr>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Board Pin</th>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Function</th>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Connect to Flasher</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-700">
                                        <tr className="bg-gray-800/40">
                                            <td className="px-4 py-2">Pin 1 (RX)</td>
                                            <td className="px-4 py-2">Receives Data</td>
                                            <td className="px-4 py-2 font-medium text-white">Flasher's TX Pin</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">Pin 2 (TX)</td>
                                            <td className="px-4 py-2">Transmits Data</td>
                                            <td className="px-4 py-2 font-medium text-white">Flasher's RX Pin</td>
                                        </tr>
                                        <tr className="bg-gray-800/40">
                                            <td className="px-4 py-2">Pin 3 (5V)</td>
                                            <td className="px-4 py-2">5V Power</td>
                                            <td className="px-4 py-2 font-medium text-white">Flasher's 5V Pin</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">Pin 4 (GND)</td>
                                            <td className="px-4 py-2">Ground</td>
                                            <td className="px-4 py-2 font-medium text-white">Flasher's GND Pin</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="bg-yellow-900/20 border border-yellow-700/50 rounded p-3">
                                    <p className="text-yellow-200 text-sm">⚠️ <strong>Important:</strong> You must <strong>cross the RX and TX wires</strong>. The board's RX pin connects to the flasher's TX pin, and the board's TX pin connects to the flasher's RX pin.</p>
                                </div>
                            </div>
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">Step 2: Flash in Lobster App</h4>
                                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                                    <li>Start the Lobster App and open the device manager.</li>
                                    <li>Plug the USB flasher into your computer.</li>
                                    <li>Press "Scan Device" and select the correct serial port from the dropdown.</li>
                                    <li>Download the latest firmware: 
                                        <a href="[TODO: INSERT FIRMWARE LINK HERE]" className="text-indigo-400 hover:text-indigo-300 underline ml-2">Lobster_Controller_v1.bin</a>
                                    </li>
                                    <li>Press "Select Firmware" and choose the downloaded file.</li>
                                    <li>Press "Flash" and watch the progress bar. Once complete, the device is ready.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    
                    {/* Part 5: Final Assembly */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-200 mb-6 pb-3 border-b border-gray-700">Part 5: Final Assembly</h3>
                        <div className="bg-gray-800/50 rounded-lg p-6">
                            <p className="text-gray-300">Detach the flasher cable. Carefully tuck all wires into the enclosure and screw the lid onto the box. Your controller is now complete.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Using the Controller */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                        Using Your Controller
                    </h2>
                    <p className="text-gray-300 mb-4">Your controller is now the central hub of your Lobster setup.</p>
                    <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300 mt-4">
                        <li>Plug your 12V DC adapter into the power jack.</li>
                        <li>Plug your two MagLocks (with their male GX12 connectors) into the "Channel 1" and "Channel 2" ports.</li>
                        <li>Plug your Foot Pedal into the "Abort" port.</li>
                        <li>The device connects to the Lobster App via Wi-Fi (after first-time setup) or a serial connection.</li>
                    </ul>
                    <div className="bg-green-900/30 border border-green-600/50 rounded-lg p-4 mt-6">
                        <p className="text-green-100 font-semibold">⚠️ Always test the system thoroughly. Ensure the foot pedal correctly and instantly cuts power to the MagLocks <strong>before</strong> any use.</p>
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
                            <p className="text-gray-300 text-sm">"DiyMore ESP32 2-way MOS Switch Module DC 5-60V"</p>
                        </div>
                        
                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-2">Enclosure</h3>
                            <p className="text-gray-300 text-sm">"FT100-68-50 Transparent Waterproof Outdoor Enclosure"</p>
                        </div>
                        
                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-2">Connectors</h3>
                            <p className="text-gray-300 text-sm">"GX12 2-pin female panel mount" and "GX12 2-pin male cable connector"</p>
                        </div>

                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-2">Flasher</h3>
                            <p className="text-gray-300 text-sm">"FTDI FT232 USB to 3.3v TTL Serial Cable"</p>
                        </div>

                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-2">Foot Switch</h3>
                            <p className="text-gray-300 text-sm">"OMCH Foot Switch TFS-1"</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
);
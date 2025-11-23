import { ImageOverlay } from "../components/ImageOverlay";
import { SafetyWarning } from "../components/SafetyWarning";
import { TutorialImage } from "../components/TutorialImage";

export const BuildControllerPage = () => (
    <>
        <div className="py-12">
            <h1 className="text-4xl font-bold text-white text-center mb-6">Build the MagLock Controller</h1>
            <p className="text-xl text-center text-gray-400 mb-12 max-w-3xl mx-auto">
                The "brains" of your Lobster system. This guide follows a <strong>"First Life" workflow</strong>: we will get the MagLock working with the absolute minimum wiring first to give you a quick win, then add the advanced features.
            </p>

            <TutorialImage 
                src="/images/controller/finished_controller.jpg" 
                alt="Finished Lobster MagLock Controller" 
                wrapperClassName="mb-12"
                className="w-full h-auto rounded-lg shadow-lg bg-gray-700"
            />
            
            <SafetyWarning />

            {/* Introduction */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                        Overview
                    </h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">This guide covers the assembly of the Lobster MagLock Controller using the DIYMORE ESP32 WiFi MOS Switch Module.</p>
                    
                    <div className="bg-blue-900/20 border border-blue-700/50 rounded p-4 mb-6">
                        <h4 className="text-blue-100 font-bold mb-2">ℹ️ A Note on Board Versions</h4>
                        <p className="text-blue-200 text-sm mb-2">
                            This board is available in <strong>2-channel</strong> and <strong>4-channel</strong> versions. We recommend the <strong>2-channel</strong> version as it's slightly narrower, making for a better fit in the project box.
                        </p>
                        <p className="text-blue-200 text-sm">
                            <strong>Good news:</strong> The firmware supports both versions! During provisioning, you can select exactly which channels (1, 2, 3, or 4) to enable. This gives you maximum flexibility to extend or shrink your channel count later, regardless of which board you buy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Materials & Tools */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">Required Materials & Tools</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Materials</h3>
                            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                                <li>1 x DIYMORE ESP32 MOS Switch Module</li>
                                <li>1 x Plastic Project Box (min 100x60x25mm)</li>
                                <li>1 x 12V Power Supply (2A+)</li>
                                <li>1 x Panel-Mount DC Jack (Female)</li>
                                <li>3 x GX12 Connector Pairs (Male + Female)</li>
                                <li>1 x Status LED (with resistor)</li>
                                <li>1 x Abort Switch (Momentary)</li>
                                <li>Dupont Jumper Wires (Female)</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Tools</h3>
                            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                                <li>Soldering Iron & Solder</li>
                                <li>USB-to-Serial (UART) Programmer</li>
                                <li>Drill & Bits (6mm, 8mm, 11mm)</li>
                                <li>Wire Strippers & Heat Shrink</li>
                                <li>Caliper (recommended)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PART 1: BOARD PREP --- */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">Part 1: Solder PCB Headers</h2>
                    <p className="text-gray-300 mb-8">Before we can flash the chip or connect accessories, we must solder the included pin headers.</p>

                    <div className="bg-gray-800/50 rounded-lg p-6">
                        <h4 className="text-xl font-bold text-white mb-4">Step 1: Solder the Headers</h4>
                        
                        <div className="bg-blue-900/20 border border-blue-700/50 rounded p-3 mb-4">
                            <p className="text-blue-200 text-sm">
                                <strong>Tip:</strong> Solder just one pin first to check alignment. Once straight, solder the rest.
                            </p>
                        </div>
                        <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300 mb-6">
                            <li><strong>Single Row (6-pin):</strong> Solder to the holes above the ESP32 (Required for Flashing).</li>
                            <li><strong>Double Row (10-pin):</strong> Solder the entire block to the side holes (Required later for LED/Switch).</li>
                        </ul>
                        
                        <TutorialImage
                            src="/images/controller/diymore_mosfet_board_headers.jpg" 
                            alt="Diymore Mosfet Board with headers soldered"  
                            wrapperClassName="mb-4"
                            className="w-full h-auto rounded-md"
                        />
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ImageOverlay 
                                src="/images/controller/diymore_mosfet_board_4ch.jpg" 
                                alt="Diymore Mosfet Board with provided headers" 
                                className="w-full h-auto rounded-md"
                            />
                            <ImageOverlay
                                src="/images/controller/diymore_mosfet_board_serial.jpg" 
                                alt="Diymore Mosfet Board with serial programmer connected" 
                                className="w-full h-auto rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PART 2: FIRST LIFE TEST --- */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">Part 2: The "First Life" Test</h2>
                    <p className="text-gray-300 mb-8">
                        We are going to skip the peripheral wiring for now. Let's just connect power and flash the board to see it come alive.
                    </p>

                    <div className="space-y-6">
                        
                        {/* Step 2: Basic Power Wiring */}
                        <div className="bg-gray-800/50 rounded-lg p-6">
                            <h4 className="text-xl font-bold text-white mb-4">Step 2: Basic Power Wiring</h4>
                            <p className="text-gray-300 mb-6">
                                We are going to skip the LED and Abort Switch wiring for now. Let's just connect power and flash the board to see it come alive.
                            </p>

                            <ol className="list-decimal list-outside pl-5 space-y-3 text-gray-300 mb-6">
                                <li>
                                    <strong>Prepare your wires:</strong> Cut the DC Jack wires to about 10 cm in length and strip about 5mm of insulation from the ends. Also strip about 5mm of insulation fromn the end of your MagLock wires. Tin them with solder to ensure a clean connection.
                                </li>
                                <li>
                                    Solder the two short wires (Red/Black) to your <strong>Female DC Jack</strong>.
                                </li>
                                <li>
                                    Screw the other ends of the DC Jack wires into the green <strong>INPUT</strong> terminals on the board. <span className="text-gray-400 italic">(Check polarity: Red to +, Black to -)</span>.
                                </li>
                                <li>
                                    Take the tinned wires from your <strong>MagLock</strong> and screw them directly into the green <strong>CHANNEL</strong> terminals.
                                </li>
                            </ol>
                            
                            <div className="bg-blue-900/20 border border-blue-700/50 rounded p-3 mb-4">
                                <p className="text-blue-200 text-sm">
                                    <em>Note: We are ignoring the LED and Abort Switch for now. You can test the core functionality working first, however they are essential for safety in the final build.</em>
                                </p>
                            </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ImageOverlay 
                                src="/images/controller/power_connector.jpg" 
                                alt="DC Power Connector"
                                className="w-full h-auto rounded-md"
                            />
                            <ImageOverlay
                                src="/images/controller/diymore_first_life_wiring.jpg" 
                                alt="Diymore Mosfet Board fully wired for testing" 
                                className="w-full h-auto rounded-md"
                            />
                        </div>
                        </div>

                        {/* Step 3: Flash & Test */}
                        <div className="bg-gray-800/50 rounded-lg p-6">
                            <h4 className="text-xl font-bold text-white mb-6">Step 3: Flash, Provision & Test</h4>
                            
                            {/* Critical Warnings */}
                            <div className="bg-red-900/20 border border-red-700/50 rounded p-4 mb-8">
                                <h5 className="text-red-100 font-bold flex items-center gap-2 mb-2">
                                    <span>⚠️</span> CRITICAL POWER WARNINGS
                                </h5>
                                <ul className="list-disc list-outside pl-5 space-y-2 text-red-100 text-sm">
                                    <li>
                                        <strong>Voltage Conflict:</strong> Never connect the serial programming tool (5V) and the external 12V power supply at the same time. Connecting these together can damage your controller board or destroy your computer's USB port.
                                    </li>
                                    <li>
                                        <strong>Testing Safety:</strong> When testing the actual electromagnet, you must use the external 12V power supply. Do not attempt to power the magnet via the USB connection; your computer is not designed for this heavy electrical load and could be damaged.
                                    </li>
                                </ul>
                            </div>

                            {/* 3a. Flashing */}
                            <h5 className="text-lg font-bold text-white mb-3">3a. Flashing the Firmware</h5>
                            <ol className="list-decimal list-outside pl-5 space-y-3 text-gray-300 mb-6">
                                <li>
                                    Connect the USB Programmer to the 6-pin header, <strong>making sure to swap RX and TX</strong> (RX on the board goes to TX on the programmer, and vice versa).
                                </li>
                                <li>
                                    With the USB Programmer <strong>disconnected</strong> from your computer (ensure the board is powered off), press and hold the <strong>BOOT</strong> button on the ESP32.
                                </li>
                                <li>
                                    While keeping the BOOT button pressed, plug the USB Programmer into your computer to power up the board. Hold the button for another second, then release. The ESP32 is now in <strong>Programmer Mode</strong>.
                                </li>
                                <li>
                                    Open the <strong>Session Manager App</strong>. Click the Settings icon (gear, top right) and select <strong>Device Manager</strong>.
                                </li>
                                <li>
                                    Navigate to the third tab: <strong>Device Flasher</strong>. Select your programmer from the list* and select the firmware file downloaded from the website.
                                </li>
                                <li>
                                    Press <strong>"Flash"</strong>. The process should take about 2 minutes; watch the progress bar to confirm completion.
                                </li>
                            </ol>
                            <p className="text-xs text-gray-500 italic mb-8 pl-5">
                                * If you don't see your programmer or have trouble flashing, please join the support Reddit for assistance.
                            </p>

                            <TutorialImage 
                                src="/images/controller/session_manager_device_flasher.png" 
                                alt="Session Manager Device Flasher" 
                                wrapperClassName="mb-4"
                                className="w-full h-auto rounded-md"
                            />

                            {/* 3b. Power & Provisioning */}
                            <h5 className="text-lg font-bold text-white mb-3">3b. Power Up & Provisioning</h5>
                            <ol className="list-decimal list-outside pl-5 space-y-3 text-gray-300 mb-8">
                                <li>
                                    <strong>Unplug the USB programmer</strong> from your computer. Now, plug in your <strong>12V power adapter</strong>. This reboots the ESP32 and provides sufficient power for the MagLocks.
                                </li>
                                <li>
                                    Give the device a minute to boot. Since no WiFi is configured, it will enter <strong>Discovery Mode</strong>.
                                </li>
                                <li>
                                    In the Device Manager modal, switch to the second tab: <strong>New / Provisioning</strong>. You should see your newly flashed Controller listed.
                                </li>
                                <li>
                                    Select <strong>"Provision"</strong>. You will be asked to configure the device:
                                    <ul className="list-disc list-inside pl-4 mt-2 space-y-1 text-gray-400">
                                        <li><strong>WiFi:</strong> Enter your network credentials.</li>
                                        <li><strong>Channels:</strong> Select which channels to enable (1, 2, 3, 4). If you are building the standard 2-lock box, enable 1 and 2. If you have the 4-channel board, enable 3 and 4 as these align best with the position of the front panel connectors. This allows you to customize the software to match your specific hardware build.</li>
                                    </ul>
                                </li>
                                <li>
                                    Once provisioned, the device will move to the first tab: <strong>Ready Devices</strong>. Select it there to close the Manager and return to the main interface.
                                </li>
                            </ol>

                            <TutorialImage 
                                src="/images/controller/session_manager_device_provision.png" 
                                alt="Session Manager in Devic Provision Mode" 
                                wrapperClassName="mb-4"
                                className="w-full h-auto rounded-md"
                            />

                            {/* 3c. Hardware Test */}
                            <h5 className="text-lg font-bold text-white mb-3">3c. Hardware Test</h5>
                            <ol className="list-decimal list-outside pl-5 space-y-3 text-gray-300 mb-8">
                                <li>
                                    Verify the status tag is green and reads <strong>"Ready"</strong>.
                                </li>
                                <li>
                                    Click on the <strong>Device Name</strong> (top right, next to the settings menu) to expand the device properties panel (IP address, channels, etc).
                                </li>
                                <li>
                                    At the bottom of this menu, select <strong>Test Hardware</strong>.
                                </li>
                                <li>
                                    This starts a short (2-minute) session with the MagLocks activated. This is your "bench test"—verify the magnets hold firmly. You can wait for the timer to end or click <strong>Abort</strong> to test the release mechanism.
                                </li>
                            </ol>

                            <TutorialImage 
                                src="/images/controller/session_manager_hardware_test.png" 
                                alt="Session Manager in Hardware Test Mode" 
                                wrapperClassName="mb-4"
                                className="w-full h-auto rounded-md"
                            />

                        </div>
                    </div>
                </div>
            </section>

            {/* --- PART 3: UPGRADING CONTROLS --- */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">Part 3: Adding the LED and Abort Switch</h2>
                    <p className="text-gray-300 mb-8">
                        Now that the basics work, let's add the Status LED and physical Abort Switch using "Dupont" jumpers.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-gray-800/50 rounded-lg p-6">
                            <h4 className="text-xl font-bold text-white mb-6">Step 4: Splice the Jumpers</h4>

                            {/* LED Sub-section */}
                            <h5 className="text-lg font-bold text-white mb-3">4a. Preparing the LED</h5>
                            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300 mb-8">
                                <li>Cut the LED wires to about 3cm in length and strip the ends.</li>
                                <li>Cut a female jumper cable to about 2cm in length and strip the cut ends.</li>
                                <li>Splice the jumpers and the LED wires together (Red to Red, Black to Black).</li>
                                <li>Secure the connection using heat shrink tubing or a piece of insulation tape to prevent shorts.</li>
                            </ul>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <ImageOverlay 
                                    src="/images/controller/led_jumpers.jpg" 
                                    alt="LED jumpers cut to size"
                                    className="w-full h-auto rounded-md"
                                />
                                <ImageOverlay
                                    src="/images/controller/led_fully_wired.jpg" 
                                    alt="LED fully wired" 
                                    className="w-full h-auto rounded-md"
                                />
                            </div>

                            {/* Abort Switch Sub-section */}
                            <h5 className="text-lg font-bold text-white mb-3">4b. Preparing the Abort Switch</h5>
                            
                            <div className="bg-blue-900/20 border border-blue-700/50 rounded p-3 mb-4">
                                <p className="text-blue-200 text-sm"><strong>Tip:</strong> To ensure your wiring logic is correct, screw the male panel mount and female cable connector together before soldering. This helps you visually trace which wire goes to which pin.</p>
                            </div>

                            <ol className="list-decimal list-outside pl-5 space-y-3 text-gray-300">
                                <li><strong>Panel Mount Side:</strong> Cut a female jumper cable to about 10cm in length, strip and tin the cut ends.</li>
                                <li>Solder these jumper cables to the rear lugs of the <strong>GX12 Panel Mount</strong>. Make a note of which pin corresponds to Signal (+) and which to Ground (-).</li>
                                <li><strong>Switch Side:</strong> Disassemble the female GX12 cable connector. Slide the housing parts onto your Abort Switch cable in this order: End Screw &rarr; Rubber Strain Relief &rarr; Housing.</li>
                                <li>Strip and tin the ends of the Abort Switch wires. Cut small pieces of heat shrink tubing and slide them over the individual wires.</li>
                                <li>Solder the Abort Switch wires to the GX12 pins, <strong>mirroring the configuration</strong> of the panel mount (Signal to Signal, Ground to Ground).</li>
                                <li>Slide the heat shrink over the solder joints and apply heat to insulate them.</li>
                                <li>Screw the GX12 housing back together.</li>
                            </ol>
                        </div>

                        <TutorialImage 
                            src="/images/controller/gx12_connector_disassembled.png" 
                            alt="GX12 Connector Disassembled" 
                            wrapperClassName="mb-4"
                            className="w-full h-auto rounded-md"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <ImageOverlay 
                                src="/images/controller/led_jumpers.jpg" 
                                alt="LED jumpers cut to size"
                                className="w-full h-auto rounded-md"
                            />
                            <ImageOverlay
                                src="/images/controller/led_fully_wired.jpg" 
                                alt="LED fully wired" 
                                className="w-full h-auto rounded-md"
                            />
                        </div>


                        <div className="bg-gray-800/50 rounded-lg p-6">
                            <h4 className="text-xl font-bold text-white mb-4">Step 5: Connect & Retest</h4>
                            <ol className="list-decimal list-outside pl-5 space-y-3 text-gray-300">
                                <li>Plug the LED onto the headers (Red → GPIO21, Black → GND).</li>
                                <li>Plug the Abort Switch connector onto the headers (Red → GPIO18, Black → GND).</li>
                                <li>
                                    <strong>Test again:</strong> Using the Session Manager, re-run the <strong>Hardware Test</strong>.
                                    <ul className="list-disc list-inside pl-4 mt-2 space-y-1 text-gray-400">
                                        <li>You should see the LED in a "Slow Breath" pattern after booting (indicating the device is READY).</li>
                                        <li>The LED should fade into a "Medium Pulse" during hardware testing.</li>
                                        <li>Pressing the <strong>Abort Switch</strong> should immediately end the test session, allowing you to confirm everything works as intended.</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PART 4: CONNECTOR PREP --- */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">Part 4: MagLock Connector Assembly</h2>
                    <p className="text-gray-300 mb-8">
                        Everything works! Now we replace the temporary direct wiring of the MagLocks with secure GX aviation connectors.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="bg-gray-800/50 rounded-lg p-6">
                            <h4 className="text-xl font-bold text-white mb-6">Step 6: MagLock Internal Wiring (Panel Mounts)</h4>
                            <div className="bg-blue-900/20 border border-blue-700/50 rounded p-3 mb-4">
                                <p className="text-blue-200 text-sm"><strong>Note:</strong> This process mirrors the Abort Switch assembly, but this time you are preparing connectors for the MagLock outputs.</p>
                            </div>
                            <ol className="list-decimal list-outside pl-5 space-y-3 text-gray-300">
                                <li>Cut two pairs of wires (Red/Black) to about 8cm in length.</li>
                                <li>Strip about 5mm of insulation from the ends and tin them with solder.</li>
                                <li>Solder these wires to the rear lugs of your <strong>GX12 Panel Mount connectors</strong>. Ensure you are consistent with polarity (e.g., Pin 1 = Positive, Pin 2 = Negative).</li>
                                <li>
                                    <strong>Important:</strong> After soldering, insulate the individual pin connections with heat shrink tubing to prevent short circuits inside the case.
                                </li>
                            </ol>
                        </div>
                    
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <ImageOverlay 
                                src="/images/controller/two_sizes_of_pvc_sleeves.jpg" 
                                alt="Two sizes of PVC sleeves" 
                                className="w-full h-auto rounded-md" 
                            />
                            <ImageOverlay 
                                src="/images/controller/ring_does_not_fit_correctly.jpg" 
                                alt="The ring does not fit correctly" 
                                className="w-full h-auto rounded-md" 
                            />
                            <ImageOverlay 
                                src="/images/controller/prepared_gx_connectors.jpg" 
                                alt="Fully prepared GX panel mount connectors" 
                                className="w-full h-auto rounded-md" 
                            />
                        </div>


                        <div className="bg-gray-800/50 rounded-lg p-6">
                            <h4 className="text-xl font-bold text-white mb-6">Step 7: MagLock External Wiring (Cable Plugs)</h4>
                            <p className="text-gray-300 mb-4">Now we attach the matching male plugs to your MagLock cables.</p>
                            <ol className="list-decimal list-outside pl-5 space-y-3 text-gray-300">
                                <li>Disassemble the male GX12 cable connector and slide the housing parts (End Screw &rarr; Rubber &rarr; Housing) onto the MagLock wire.</li>
                                <li>Strip and tin the ends of the MagLock wires.</li>
                                <li>
                                    <strong>Verification Trick:</strong> Before soldering, screw the male plug into the female panel mount you just prepared in Step 6. This allows you to visually trace the wires and ensure you are soldering Positive to Positive and Negative to Negative.
                                </li>
                                <li>Solder the MagLock wires to the pins, insulate with heat shrink, and reassemble the connector housing.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PART 5: ENCLOSURE PREPARATION --- */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">Part 5: Enclosure Preparation</h2>
                    
                    <div className="bg-gray-800/50 rounded-lg p-6">
                        <h4 className="text-xl font-bold text-white mb-4">Step 8: Drilling the Enclosure</h4>
                        
                        <div className="mb-6">
                            <p className="text-gray-300 mb-4">
                                Precision is key for a clean build. Use our printable template to mark your drilling points.
                            </p>
                            <a 
                                href="/downloads/controller_drill_template.pdf" 
                                target="_blank"
                                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-md transition-colors duration-200"
                            >
                                Download Drill Template
                            </a>
                        </div>

                        <ol className="list-decimal list-outside pl-5 space-y-3 text-gray-300 mb-6">
                            <li>Download and print the template. <strong>Make sure to set the page size to 100%</strong> (Do not scale).</li>
                            <li>Carefully cut out the front and back templates. Using a piece of transparent tape, stick them onto the respective sides of your enclosure. <strong>Make sure the edges align perfectly</strong> with the box corners.</li>
                            <li>Using a sharp object (like a center punch) or a pencil, mark the center of each crosshair. Remove the paper template before drilling to avoid it catching and tearing.</li>
                            <li>
                                Drill the holes using the following sizes:
                                <ul className="list-disc list-inside pl-4 mt-2 space-y-1 text-gray-400">
                                    <li><strong>LED:</strong> 6mm</li>
                                    <li><strong>GX12 panel mounts:</strong> 8mm</li>
                                    <li><strong>DC connector:</strong> 11mm</li>
                                </ul>
                            </li>
                        </ol>

                        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded p-4 mb-6">
                            <p className="text-yellow-100 text-sm">
                                <strong>Tip:</strong> Your components may vary slightly in diameter. We highly recommend measuring your specific components using a caliper before drilling to avoid disappointment.
                            </p>
                        </div>

                        <TutorialImage 
                            src="/images/controller/enclosure_with_holes.jpg" 
                            alt="Drilled enclosure" 
                            wrapperClassName="mb-4"
                            className="w-full h-auto rounded-md"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ImageOverlay 
                                src="/images/controller/enclosure_with_template.jpg" 
                                alt="Enclosure with template attached using tape" 
                                className="w-full h-auto rounded-md"
                            />
                            <ImageOverlay
                                src="/images/controller/enclosure_with_markings.jpg" 
                                alt="Enclosure with markings made with center punch" 
                                className="w-full h-auto rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PART 6: FINAL ASSEMBLY --- */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">Part 6: Final Assembly</h2>
                    
                    <div className="bg-gray-800/50 rounded-lg p-6">
                        <h4 className="text-xl font-bold text-white mb-4">Step 9: Mounting and Wiring</h4>
                        
                        <ul className="list-disc list-outside pl-5 space-y-4 text-gray-300 mb-8">
                            <li>
                                <strong>Install Front Components:</strong> Insert the LED, the Abort Switch GX12 panel mount, and the two MagLock GX12 panel mounts into the front of the box. Use pliers to tighten the counter nuts securely.
                            </li>
                            <li>
                                <strong>Wire MagLocks:</strong> Attach the MagLock GX12 wires (from the panel mounts) to <strong>Channels 1 and 2</strong> on the screw terminals (labeled CH1 and CH2).
                            </li>
                            <li>
                                <strong>Mount the Board:</strong> Cut a thick piece (approx 6mm) of double-sided tape and place it on the bottom of the project box. Slide the controller board into place, pressing it firmly against the pad so it doesn't slide.
                            </li>
                            <li>
                                <strong>Connect Jumpers:</strong> Locate the pin headers you soldered earlier and attach the Dupont connectors:
                                <ul className="list-circle list-inside pl-4 mt-2 space-y-2 text-gray-400">
                                    <li><strong>LED:</strong> Connect to pins <strong>IO21</strong> and <strong>GND</strong>.</li>
                                    <li><strong>Abort Switch:</strong> Connect to pins <strong>IO18</strong> and <strong>GND</strong>.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Install DC Connector:</strong> Mount the DC connector onto the side of the box. Use pliers to tighten the counter nut.
                            </li>
                            <li>
                                <strong>Power Wiring:</strong> Bring the power wires from the DC connector to the green <strong>INPUT</strong> terminal and screw them fit (Red to +, Black to -).
                            </li>
                        </ul> 
                        
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <ImageOverlay 
                                src="/images/controller/two_sizes_of_pvc_sleeves.jpg" 
                                alt="Two sizes of PVC sleeves" 
                                className="w-full h-auto rounded-md" 
                            />
                            <ImageOverlay 
                                src="/images/controller/ring_does_not_fit_correctly.jpg" 
                                alt="The ring does not fit correctly" 
                                className="w-full h-auto rounded-md" 
                            />
                            <ImageOverlay 
                                src="/images/controller/prepared_gx_connectors.jpg" 
                                alt="Fully prepared GX panel mount connectors" 
                                className="w-full h-auto rounded-md" 
                            />
                        </div>

                        <div className="mt-8 p-4 bg-green-900/20 border border-green-600/50 rounded-lg text-center">
                            <p className="text-green-100 font-bold text-xl">
                                Screw the lid shut. You built a MagLock Controller!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

             {/* Usage Recommendation / Battery */}
             <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                        Session Safety: The Battery Fail-Safe
                    </h2>
                    
                    <div className="rounded p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-2xl">🔋</span>
                            <h4 className="text-green-100 font-bold text-xl">The Ultimate Fail-Safe</h4>
                        </div>
                        
                        <p className="text-gray-300 mb-4">
                            The Lobster firmware has been designed with failure in mind, featuring multiple software watchdogs and hardware protections. Even so, the safest option for a live session is to power your controller with a battery pack. 
                        </p>
                        <p className="text-gray-300 mb-6">
                            This acts as the ultimate fail-safe: should the software hang, the physical device break, or the abort switch fail, the battery will eventually die, cutting power and releasing the lock due to lack of power.
                        </p>

                        <div className="bg-blue-900/20 border border-blue-700/50 rounded p-4 mb-6">
                            <h4 className="text-blue-100 font-bold mb-2">Recommended: 600mAh Ni-Cd Battery Pack (10 Cells)</h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li><strong>Configuration:</strong> 10 Cells × 1.2V = <strong>12.0V Nominal</strong>.</li>
                                <li><strong>Chemistry:</strong> Ni-Cd (Nickel-Cadmium).</li>
                                <li><strong>Why Ni-Cd?</strong> Unlike other chemistries, Ni-Cd batteries maintain a very steady voltage (~1.2V per cell) for about 80-90% of their discharge cycle. This is perfect for MagLocks, which require constant voltage to hold securely.</li>
                            </ul>
                        </div>
                                                
                        <p className="text-gray-300">
                            With a 600mAh pack, you can expect approximately <strong>~3 Hours of runtime</strong> before the voltage drops and the lock releases automatically.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </>
);
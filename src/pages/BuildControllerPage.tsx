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
                            This board is available in <strong>2-channel</strong> and <strong>4-channel</strong> versions. We recommend the <strong>2-channel</strong> version as it's slightly narrower making for a better fit in the project box.
                        </p>
                        <p className="text-blue-200 text-sm">
                            The photos in this guide show the 4-channel board. The <strong>ESP32 chip and the pin headers are identical</strong>, it's just slightly wider.
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
                                <li>3 x GX16 Connector Pairs (Male + Female)</li>
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
                            <h4 className="text-xl font-bold text-white mb-6">Step 2: Basic Power Wiring</h4>
                            <div className="bg-blue-900/20 border border-blue-700/50 rounded p-3 mb-6">
                                <p className="text-blue-200 text-sm">
                                    <em>Note: We are ignoring the LED and Abort Switch for now. You can test the core functionality working first, however they are essential for safety in the final build.</em>
                                </p>
                            </div>

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
                                    Take the tinned wires from your <strong>MagLock</strong> and screw them directly into the green <strong>OUTPUT</strong> terminals. <span className="text-gray-400 italic">(Again check polarity)</span>.
                                </li>
                            </ol>
                            
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <ImageOverlay 
                                    src="/images/controller/power_connector.jpg" 
                                    alt="DC Jack Connector" 
                                    className="w-full h-auto rounded-md"
                                />
                                <ImageOverlay
                                    src="/images/controller/diymore_first_life_wiring.jpg" 
                                    alt="Diymore Mosfet Board fully wired for the first life test" 
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
                                    Select <strong>"Provision"</strong> and enter your WiFi credentials. (You can ignore other settings for now).
                                </li>
                                <li>
                                    Once provisioned, the device will move to the first tab: <strong>Ready Devices</strong>. Select it there to close the Manager and return to the main interface.
                                </li>
                            </ol>

                            <TutorialImage
                                src="/images/controller/session_manager_device_flasher.png" 
                                alt="Session Manager Device Flasher" 
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
                                alt="Session Manager Hardware Test Running" 
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
                    <h2 className="text-3xl font-bold text-white mb-6">Part 3: Adding Controls</h2>
                    <p className="text-gray-300 mb-8">
                        Now that the basics work, let's add the Status LED and physical Abort Switch using "Dupont" jumpers.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-gray-800/50 rounded-lg p-6">
                            <h4 className="text-xl font-bold text-white mb-4">Step 4: Splice the Jumpers</h4>
                            
                            <div className="bg-blue-900/20 border border-blue-700/50 rounded p-3 mb-4">
                                <p className="text-blue-200 text-sm"><strong>How to Splice:</strong> Slide Heat Shrink on → Twist Wires Together → Solder → Shrink.</p>
                            </div>

                            <ul className="list-disc list-outside pl-5 space-y-4 text-gray-300">
                                <li>
                                    <strong>Status LED:</strong> Cut a female jumper wire in half. Splice the cut ends to your LED wires (Red to Red, Black to Black).
                                </li>
                                <li>
                                    <strong>Abort Switch:</strong> Cut another female jumper pair. Solder the cut ends to the lugs of your <strong>Female GX Panel Connector</strong>. <br/>
                                    <span className="text-gray-500 text-sm">(We use the connector here because you can't solder directly to the external switch).</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-800/50 rounded-lg p-6">
                            <h4 className="text-xl font-bold text-white mb-4">Step 5: Connect & Retest</h4>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                1. Plug the LED onto the headers (Red → GPIO21, Black → GND).<br/>
                                2. Plug the Abort Switch connector onto the headers (Red → GPIO18, Black → GND).<br/>
                                3. <strong>Test again:</strong> Does the LED pulse? Plug your physical switch into the connector—does pressing it trigger an abort in the app?
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PART 4: FINAL CONNECTOR PREP --- */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">Part 4: Connector Assembly</h2>
                    <p className="text-gray-300 mb-8">
                        Everything works! Now we replace the temporary direct wiring with secure GX aviation connectors.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="bg-gray-800/50 rounded-lg p-6">
                            <h4 className="text-xl font-bold text-white mb-4">Step 6: Install MagLock Connectors</h4>
                            <ol className="list-decimal list-inside space-y-2 text-gray-300">
                                <li>Unscrew the MagLock wires from the PCB.</li>
                                <li>Solder the <strong>Male GX Cable Connector</strong> to the MagLock wires.</li>
                                <li>Prepare short wires (Red/Black) and solder them to the <strong>Female GX Panel Connector</strong>.</li>
                                <li>Twist and tin the other ends of these new wires.</li>
                            </ol>
                        </div>
                        
                        <div className="bg-gray-800/50 rounded-lg p-6">
                            <h4 className="text-xl font-bold text-white mb-4">Step 7: External Switch Connector</h4>
                            <p className="text-gray-300">
                                (If you haven't already) Solder the <strong>Male GX Cable Connector</strong> to your external Abort Switch/Pedal wires.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PART 5: BOX & MOUNT --- */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">Part 5: Enclosure & Mounting</h2>
                    
                    <div className="space-y-6">
                        <div className="bg-gray-800/50 rounded-lg p-6">
                            <h4 className="text-xl font-bold text-white mb-4">Step 8: Drill & Install</h4>
                            <p className="text-gray-300 mb-4">
                                1. Drill holes using the template (6mm LED, 8mm GX, 11mm DC).<br/>
                                2. Install all Panel Connectors (DC Jack, MagLock Socket, Abort Switch Socket) into the box walls. Tighten nuts firmly.
                            </p>
                            <TutorialImage 
                                src="/images/controller/box_internal_view.jpg" 
                                alt="Connectors mounted inside box" 
                                className="w-full h-auto rounded-md"
                            />
                        </div>

                        <div className="bg-gray-800/50 rounded-lg p-6">
                            <h4 className="text-xl font-bold text-white mb-4">Step 9: Final Assembly</h4>
                            <ul className="list-none space-y-4 text-gray-300">
                                <li className="flex gap-4">
                                    <span className="bg-gray-700 h-8 w-8 flex items-center justify-center rounded-full font-bold text-white shrink-0">1</span>
                                    <span><strong>Mount Board:</strong> Use double-sided tape to stick the PCB firmly into the box.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="bg-gray-700 h-8 w-8 flex items-center justify-center rounded-full font-bold text-white shrink-0">2</span>
                                    <span><strong>Install LED:</strong> Push the LED into the 6mm hole.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="bg-gray-700 h-8 w-8 flex items-center justify-center rounded-full font-bold text-white shrink-0">3</span>
                                    <span><strong>Connect:</strong> Screw DC Input and MagLock Output wires into terminals. Plug in LED and Switch jumpers.</span>
                                </li>
                            </ul>
                            <div className="mt-8 p-4 bg-green-900/20 border border-green-600/50 rounded-lg text-center">
                                <p className="text-green-100 font-bold text-xl">
                                    Screw the lid shut. You built a MagLock Controller!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
);
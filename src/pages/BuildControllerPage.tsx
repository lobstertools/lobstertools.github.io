import { ImageOverlay } from "../components/ImageOverlay";
import { SafetyWarning } from "../components/SafetyWarning";
import { TutorialImage } from "../components/TutorialImage";

// --- IMAGES ---

// Header
import finishedControllerSrc from '@/images/controller/finished_controller.webp?w=1200&format=webp';
import finishedControllerSrcSet from '@/images/controller/finished_controller.webp?w=400;800;1200&format=webp&as=srcset';

// Part 1
import headersSrc from '@/images/controller/diymore_mosfet_board_headers.webp?w=1200&format=webp';
import headersSrcSet from '@/images/controller/diymore_mosfet_board_headers.webp?w=400;800;1200&format=webp&as=srcset';
import headers4chSrc from '@/images/controller/diymore_mosfet_board_4ch.webp?w=1200&format=webp';
import headers4chSrcSet from '@/images/controller/diymore_mosfet_board_4ch.webp?w=400;800;1200&format=webp&as=srcset';
import serialSrc from '@/images/controller/diymore_mosfet_board_serial.webp?w=1200&format=webp';
import serialSrcSet from '@/images/controller/diymore_mosfet_board_serial.webp?w=400;800;1200&format=webp&as=srcset';

// Part 2
import powerConnSrc from '@/images/controller/power_connector.webp?w=1200&format=webp';
import powerConnSrcSet from '@/images/controller/power_connector.webp?w=400;800;1200&format=webp&as=srcset';
import firstLifeWiringSrc from '@/images/controller/diymore_first_life_wiring.webp?w=1200&format=webp';
import firstLifeWiringSrcSet from '@/images/controller/diymore_first_life_wiring.webp?w=400;800;1200&format=webp&as=srcset';
import flasherSrc from '@/images/controller/session_manager_device_flasher.webp?w=1200&format=webp';
import flasherSrcSet from '@/images/controller/session_manager_device_flasher.webp?w=400;800;1200&format=webp&as=srcset';
import provisionSrc from '@/images/controller/session_manager_device_provision.webp?w=1200&format=webp';
import provisionSrcSet from '@/images/controller/session_manager_device_provision.webp?w=400;800;1200&format=webp&as=srcset';
import hardwareTestSrc from '@/images/controller/session_manager_hardware_test.webp?w=1200&format=webp';
import hardwareTestSrcSet from '@/images/controller/session_manager_hardware_test.webp?w=400;800;1200&format=webp&as=srcset';

// Part 3
import cutWiresSrc from '@/images/controller/switch_and_led_cut_to_size.webp?w=1200&format=webp';
import cutWiresSrcSet from '@/images/controller/switch_and_led_cut_to_size.webp?w=400;800;1200&format=webp&as=srcset';
import prepGxSrc from '@/images/controller/prepared_gx_connectors.webp?w=1200&format=webp';
import prepGxSrcSet from '@/images/controller/prepared_gx_connectors.webp?w=400;800;1200&format=webp&as=srcset';

// Part 4
import disassembledGxSrc from '@/images/controller/disassembled_gcx_connector.webp?w=1200&format=webp';
import disassembledGxSrcSet from '@/images/controller/disassembled_gcx_connector.webp?w=400;800;1200&format=webp&as=srcset';
import abortSwitchSrc from '@/images/controller/abort_switch.webp?w=1200&format=webp';
import abortSwitchSrcSet from '@/images/controller/abort_switch.webp?w=400;800;1200&format=webp&as=srcset';

// Part 5
import enclosureHolesSrc from '@/images/controller/enclosure_with_holes.webp?w=1200&format=webp';
import enclosureHolesSrcSet from '@/images/controller/enclosure_with_holes.webp?w=400;800;1200&format=webp&as=srcset';
import enclosureTemplateSrc from '@/images/controller/enclosure_with_template.webp?w=1200&format=webp';
import enclosureTemplateSrcSet from '@/images/controller/enclosure_with_template.webp?w=400;800;1200&format=webp&as=srcset';
import enclosureMarkingsSrc from '@/images/controller/enclosure_with_markings.webp?w=1200&format=webp';
import enclosureMarkingsSrcSet from '@/images/controller/enclosure_with_markings.webp?w=400;800;1200&format=webp&as=srcset';

// Part 6
import insideSolderedSrc from '@/images/controller/controller_inside_the_box_soldered.webp?w=1200&format=webp';
import insideSolderedSrcSet from '@/images/controller/controller_inside_the_box_soldered.webp?w=400;800;1200&format=webp&as=srcset';
import edgeBoxSrc from '@/images/controller/controller_edge_box.webp?w=1200&format=webp';
import edgeBoxSrcSet from '@/images/controller/controller_edge_box.webp?w=400;800;1200&format=webp&as=srcset';
import insideBoxSrc from '@/images/controller/controller_inside_the_box.webp?w=1200&format=webp';
import insideBoxSrcSet from '@/images/controller/controller_inside_the_box.webp?w=400;800;1200&format=webp&as=srcset';
import stickyPadSrc from '@/images/controller/controller_with_sticky_pad.webp?w=1200&format=webp';
import stickyPadSrcSet from '@/images/controller/controller_with_sticky_pad.webp?w=400;800;1200&format=webp&as=srcset';


export const BuildControllerPage = () => (
    <>
        <div className="py-6 md:py-12">
            <h1 className="text-2xl md:text-4xl font-bold text-white text-center mb-4 md:mb-6">Build the MagLock Controller</h1>
            <p className="text-lg md:text-xl text-center text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
                The "brains" of your Lobster system. This guide follows a <strong>"First Life" workflow</strong>: we will get the MagLock working with the absolute minimum wiring first to give you a quick win, then add the advanced features.
            </p>

            <TutorialImage 
                src={finishedControllerSrc}
                srcSet={finishedControllerSrcSet}
                alt="Finished Lobster MagLock Controller" 
                wrapperClassName="mb-8 md:mb-12"
                className="w-full h-auto rounded-lg shadow-lg bg-gray-700"
            />
            
            <SafetyWarning />

            {/* Introduction */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 flex items-center">
                        Overview
                    </h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">This guide covers the assembly of the Lobster MagLock Controller using the DIYMORE ESP32 WiFi MOS Switch Module.</p>
                    
                    <div className="bg-blue-900/20 border border-blue-700/50 rounded p-3 md:p-4 mb-6">
                        <h4 className="text-blue-100 font-bold mb-2 text-sm md:text-base">ℹ️ A Note on Board Versions</h4>
                        <p className="text-blue-200 text-sm mb-2">
                            This board is available in <strong>2-channel</strong> and <strong>4-channel</strong> versions. We recommend the <strong>2-channel</strong> version as it's slightly narrower, making for a better fit in the project box.
                        </p>
                        <p className="text-blue-200 text-sm">
                            <strong>Good news:</strong> The firmware supports both versions! During provisioning, you can select exactly which channels (1, 2, 3, or 4) to enable. This gives you maximum flexibility to extend or shrink your channel count later, regardless of which board you buy.
                        </p>
                    </div>
                </div>
            </section>
            
            {/* Cost Breakdown */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 flex items-center">
                        Controller Cost Breakdown
                    </h2>
                    
                    {/* Updated Grid: Always 3 columns (grid-cols-3), smaller gap on mobile */}
                    <div className="grid grid-cols-3 gap-2 md:gap-6 mb-6">
                        <div className="bg-gray-800/50 p-2 md:p-4 rounded-lg text-center flex flex-col justify-center">
                            {/* Adjusted text sizes for mobile fit */}
                            <div className="text-lg sm:text-2xl md:text-3xl font-bold text-green-400">~€50</div>
                            <div className="text-gray-400 mt-1 md:mt-2 text-[10px] sm:text-xs md:text-base leading-tight">Total Cost</div>
                        </div>
                        <div className="bg-gray-800/50 p-2 md:p-4 rounded-lg text-center flex flex-col justify-center">
                            <div className="text-lg sm:text-2xl md:text-3xl font-bold text-yellow-400">~€35</div>
                            <div className="text-gray-400 mt-1 md:mt-2 text-[10px] sm:text-xs md:text-base leading-tight">Main Board, Connectors & Battery</div>
                        </div>
                        <div className="bg-gray-800/50 p-2 md:p-4 rounded-lg text-center flex flex-col justify-center">
                            <div className="text-lg sm:text-2xl md:text-3xl font-bold text-blue-400">~€15</div>
                            <div className="text-gray-400 mt-1 md:mt-2 text-[10px] sm:text-xs md:text-base leading-tight">Housing, Programmer and Misc. Parts</div>
                        </div>
                    </div>

                    <p className="text-gray-300 mb-4">The total cost to build the controller is roughly 40 to 50 EUR. The main expense is the DIYMORE 2-Channel board, the secure GX-series connectors, the Abort Switch (foot pedal), and the 12V battery pack, which costs about 35 EUR, depending on the supplier. </p>
                    <p className="text-gray-300">The remaining cost covers the USB-to-Serial programmer for flashing and all the additional hardware. This includes the project box, the status LED, and other miscellaneous wires and components. Prices will vary over time and based on shipping.</p>
                </div>
            </section>

            {/* Materials & Tools */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Required Materials & Tools</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Materials</h3>
                            <ul className="list-disc list-inside md:list-outside md:pl-5 space-y-2 text-gray-300 text-sm md:text-base">
                                <li>1 x DIYMORE ESP32 MOS Switch Module</li>
                                <li>1 x Plastic Project Box (100x68x50mm)</li>
                                <li>1 x 12V 600mAh Ni-Cd Battery Pack (10 cells)</li>
                                <li>1 x Panel-Mount DC Jack (Female)</li>
                                <li>3 x GX12 Connector Pairs (Male + Female)</li>
                                <li>1 x Status LED (with resistor)</li>
                                <li>1 x Abort Switch (TFS-1) - <strong>Normally Closed Config</strong></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Tools</h3>
                            <ul className="list-disc list-inside md:list-outside md:pl-5 space-y-2 text-gray-300 text-sm md:text-base">
                                <li>Soldering Iron & Solder</li>
                                <li>USB-to-Serial (UART) Programmer</li>
                                <li>Drill & Bits (6mm, 8mm, 11mm)</li>
                                <li>Wire Strippers & Heat Shrink or Elecrical Tape</li>
                                <li>Caliper (recommended)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Power Source */}
             <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 flex items-center">
                        Power Source
                    </h2>
                    
                    <div className="rounded p-2 md:p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-2xl">🔋</span>
                            <h4 className="text-green-100 font-bold text-lg md:text-xl">The Ultimate Fail-Safe</h4>
                        </div>
                        
                        <p className="text-gray-300 mb-4">
                            The Lobster firmware is engineered with safety in mind, featuring multiple internal watchdogs and hardware protections. However, the most reliable safeguard is to power your controller with a battery pack.
                        </p>
                        <p className="text-gray-300 mb-6">
                            This creates a physical fail-safe: if the software hangs, the device breaks, or the abort switch malfunctions, the battery will eventually drain. Once the power runs out, the magnet automatically releases, ensuring you are never trapped indefinitely.
                        </p>

                        <div className="bg-blue-900/20 border border-blue-700/50 rounded p-4 mb-6">
                            <h4 className="text-blue-100 font-bold mb-2 text-sm md:text-base">Recommended: 600mAh Ni-Cd Battery Pack (10 Cells)</h4>
                            <ul className="list-disc list-inside md:list-outside md:pl-5 text-gray-300 space-y-2 text-sm md:text-base">
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

            {/* --- PART 1: BOARD PREP --- */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Part 1: Solder PCB Headers</h2>
                    <p className="text-gray-300 mb-8">
                        We start by preparing the ESP32 board itself. You will solder the necessary pin headers to the PCB, enabling us to flash the firmware now and connect our peripherals later.
                    </p>

                    <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                        <h4 className="text-lg md:text-xl font-bold text-white mb-4">Step 1: Solder the Headers</h4>
                        
                        <div className="bg-blue-900/20 border border-blue-700/50 rounded p-3 mb-4">
                            <p className="text-blue-200 text-sm">
                                <strong>Tip:</strong> Solder just one pin first to check alignment. Once straight, solder the rest.
                            </p>
                        </div>
                        <ul className="list-disc list-inside md:list-outside md:pl-5 space-y-2 text-gray-300 mb-6 text-sm md:text-base">
                            <li><strong>Single Row (6-pin):</strong> Solder to the holes above the ESP32 (Required for Flashing).</li>
                            <li><strong>Double Row (10-pin):</strong> Solder the entire block to the side holes (Required later for LED/Switch wiring).</li>
                        </ul>
                        
                        <TutorialImage
                            src={headersSrc}
                            srcSet={headersSrcSet}
                            alt="Diymore Mosfet Board with headers soldered"  
                            wrapperClassName="mb-4"
                            className="w-full h-auto rounded-md"
                        />
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <ImageOverlay 
                                src={headers4chSrc}
                                srcSet={headers4chSrcSet}
                                alt="Diymore Mosfet Board with provided headers" 
                                className="w-full h-auto rounded-md"
                            />
                            <ImageOverlay
                                src={serialSrc}
                                srcSet={serialSrcSet}
                                alt="Diymore Mosfet Board with serial programmer connected" 
                                className="w-full h-auto rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PART 2: FIRST LIFE TEST --- */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Part 2: The "First Life" Test</h2>
                    <p className="text-gray-300 mb-8">
                         Before building the full enclosure, we verify the core electronics. In this phase, you will connect basic power, flash the Lobster firmware, and provision the device over WiFi to ensure the "brain" is alive and working.
                    </p>

                    <div className="space-y-6">
                        
                        {/* Step 2: Basic Power Wiring */}
                        <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                            <h4 className="text-lg md:text-xl font-bold text-white mb-4">Step 2: Basic Power Wiring</h4>
                            <p className="text-gray-300 mb-6 text-sm md:text-base">
                                We are going to skip the LED and Abort Switch wiring for now. Let's just connect power and flash the board to see it come alive.
                            </p>

                            <ol className="list-decimal list-inside md:list-outside md:pl-5 space-y-3 text-gray-300 mb-6 text-sm md:text-base">
                                <li>
                                    <strong>Prepare your wires:</strong> Cut the DC Jack wires to about 10 cm in length and strip about 5mm of insulation from the ends. Also strip about 5mm of insulation from the end of your MagLock wires. Tin them with solder to ensure a clean connection.
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
                                    Note: We are ignoring the LED and Abort Switch for now. You can test the core functionality working first, however they are essential for safety in the final build.
                                </p>
                            </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <ImageOverlay 
                                src={powerConnSrc}
                                srcSet={powerConnSrcSet}
                                alt="DC Power Connector"
                                className="w-full h-auto rounded-md"
                            />
                            <ImageOverlay
                                src={firstLifeWiringSrc}
                                srcSet={firstLifeWiringSrcSet}
                                alt="Diymore Mosfet Board fully wired for testing" 
                                className="w-full h-auto rounded-md"
                            />
                        </div>
                        </div>

                        {/* Step 3: Flash & Test */}
                        <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                            <h4 className="text-lg md:text-xl font-bold text-white mb-6">Step 3: Flash, Provision & Test</h4>
                            
                            {/* Critical Warnings */}
                            <div className="bg-red-900/20 border border-red-700/50 rounded p-3 md:p-4 mb-8">
                                <h5 className="text-red-100 font-bold flex items-center gap-2 mb-2 text-sm md:text-base">
                                    <span>⚠️</span> CRITICAL POWER WARNINGS
                                </h5>
                                <ul className="list-disc list-inside md:list-outside md:pl-5 space-y-2 text-red-100 text-sm">
                                    <li>
                                        <strong>Voltage Conflict:</strong> Never connect the serial programming tool (5V) and the external 12V battery at the same time. Connecting these together can damage your controller board or destroy your computer's USB port.
                                    </li>
                                    <li>
                                        <strong>Testing Safety:</strong> When testing the actual electromagnet, you must use the external 12V battery. Do not attempt to power the magnet via the USB connection; your computer is not designed for this heavy electrical load and could be damaged.
                                    </li>
                                </ul>
                            </div>

                            {/* 3a. Flashing */}
                            <h5 className="text-base md:text-lg font-bold text-white mb-3">3a. Flashing the Firmware</h5>
                            <ol className="list-decimal list-inside md:list-outside md:pl-5 space-y-3 text-gray-300 mb-6 text-sm md:text-base">
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
                           
                            <TutorialImage 
                                src={flasherSrc}
                                srcSet={flasherSrcSet}
                                alt="Session Manager Device Flasher" 
                                wrapperClassName="mb-4"
                                className="w-full h-auto rounded-md"
                            />

                            {/* 3b. Power & Provisioning */}
                            <h5 className="text-base md:text-lg font-bold text-white mb-3">3b. Power Up & Provisioning</h5>
                            <ol className="list-decimal list-inside md:list-outside md:pl-5 space-y-3 text-gray-300 mb-8 text-sm md:text-base">
                                <li>
                                    <strong>Unplug the USB programmer</strong> from your computer. Now, plug in your <strong>12V battery</strong>. This reboots the ESP32 and provides sufficient power for the MagLocks.
                                </li>
                                <li>
                                    Give the device a minute to boot. Since no WiFi is configured, it will enter <strong>Discovery Mode</strong>.
                                </li>
                                <li>
                                    In the Device Manager modal, switch to the second tab: <strong>New / Provisioning</strong>. You should see your newly flashed Controller listed.
                                </li>
                                <li>
                                    Select <strong>"Provision"</strong>. You will be asked to configure the device:
                                    <ul className="list-disc list-inside md:list-outside md:pl-4 mt-2 space-y-1 text-gray-400">
                                        <li><strong>WiFi:</strong> Enter your network credentials.</li>
                                        <li><strong>Channels:</strong> Select which channels to enable (1, 2, 3, 4). If you are building the standard 2-lock box, enable 1 and 2. If you have the 4-channel board, enable 3 and 4 as these align best with the position of the front panel connectors.</li>
                                    </ul>
                                </li>
                                <li>
                                    Once provisioned, the device will move to the first tab: <strong>Ready Devices</strong>. Select it there to close the Manager and return to the main interface.
                                </li>
                            </ol>

                            <TutorialImage 
                                src={provisionSrc}
                                srcSet={provisionSrcSet}
                                alt="Session Manager in Devic Provision Mode" 
                                wrapperClassName="mb-4"
                                className="w-full h-auto rounded-md"
                            />

                            {/* 3c. Hardware Test */}
                            <h5 className="text-base md:text-lg font-bold text-white mb-3">3c. Hardware Test</h5>
                            <ol className="list-decimal list-inside md:list-outside md:pl-5 space-y-3 text-gray-300 mb-8 text-sm md:text-base">
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
                                src={hardwareTestSrc}
                                srcSet={hardwareTestSrcSet}
                                alt="Session Manager in Hardware Test Mode" 
                                wrapperClassName="mb-4"
                                className="w-full h-auto rounded-md"
                            />

                        </div>
                    </div>
                </div>
            </section>

            {/* --- PART 3: INTERNAL WIRING --- */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Part 3: Internal Wiring Preparation</h2>
                    <p className="text-gray-300 mb-8">
                        Now we prepare the components that will live <em>inside</em> the enclosure. You will cut, tin, and solder wires to the LED and the rear side of the panel-mount connectors, getting everything ready for the final assembly.
                    </p>

                    <div className="space-y-6">
                        <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                            <h4 className="text-lg md:text-xl font-bold text-white mb-6">Step 4: Prepare the LED</h4>

                            <ul className="list-disc list-inside md:list-outside md:pl-5 space-y-2 text-gray-300 mb-8 text-sm md:text-base">
                                <li>Cut the LED wires to approximately 10-12cm in length. This gives you enough slack to reach the board when mounted.</li>
                                <li>Strip about 5mm of insulation from the ends and tin them with solder.</li>
                                <li><strong>Optional:</strong> Use heat shrink tubing to bundle the wires together for a cleaner look.</li>
                            </ul>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
                                <ImageOverlay 
                                    src={cutWiresSrc}
                                    srcSet={cutWiresSrcSet}
                                    alt="Switch and LED wires cut to size"
                                    className="w-full h-auto rounded-md"
                                />
                                <ImageOverlay
                                    src={prepGxSrc}
                                    srcSet={prepGxSrcSet}
                                     alt="Fully prepared GX panel mount connectors"
                                    className="w-full h-auto rounded-md"
                                />
                            </div>
                        </div>

                        <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                            <h4 className="text-lg md:text-xl font-bold text-white mb-6">Step 5: MagLock & Abort Switch Panel Mounts</h4>
                            <p className="text-gray-300 mb-4">
                                You need to prepare 3 panel mount connectors: one for the Abort Switch (Signal) and two for the MagLocks (Power).
                            </p>
                            
                            <div className="bg-blue-900/20 border border-blue-700/50 rounded p-3 mb-4">
                                <p className="text-blue-200 text-sm">
                                    <strong>Tip:</strong> Solder the wires to the <strong>Female Panel Mount</strong> sockets. After soldering, we highly recommend insulating the individual pins with heat shrink tubing to prevent shorts inside the tight case.
                                </p>
                            </div>

                            <ol className="list-decimal list-inside md:list-outside md:pl-5 space-y-4 text-gray-300 text-sm md:text-base">
                                <li>
                                    <strong>Abort Switch Input:</strong> Cut two wires (Red/Black) to about 12cm. Solder them to the rear lugs of one GX12 connector.
                                    <ul className="list-disc list-inside md:list-outside md:pl-4 mt-1 text-gray-400 text-sm">
                                        <li>Note which pin is Signal (Red) and which is Ground (Black).</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>MagLock Outputs:</strong> Cut two pairs of wires (Red/Black) to about 8cm. Solder these to the remaining two GX12 connectors.
                                    <ul className="list-disc list-inside md:list-outside md:pl-4 mt-1 text-gray-400 text-sm">
                                        <li>Ensure you are consistent with polarity (e.g., Pin 1 = Positive, Pin 2 = Negative).</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Insulate:</strong> Apply heat shrink tubing over all soldered connections on the back of the connectors.
                                </li>
                            </ol>
                        
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PART 4: EXTERNAL CABLE ASSEMBLY --- */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Part 4: External Cable Assembly</h2>
                    <p className="text-gray-300 mb-8">
                        With the internal components ready, we turn to the external accessories. Here you will assemble the robust aviation connectors for your MagLock cables and the safety Abort Switch (or foot pedal).
                    </p>
                    
                    <div className="space-y-6">
                        <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                            <h4 className="text-lg md:text-xl font-bold text-white mb-6">Step 6: Abort Switch Assembly (Fail-Safe Config)</h4>
                            <p className="text-gray-300 mb-4">This connects your momentary switch (or foot pedal) to a Male GX12 plug.</p>

                            <div className="bg-yellow-900/20 border border-yellow-700/50 rounded p-4 mb-6">
                                <h4 className="text-yellow-100 font-bold mb-2 text-sm md:text-base">Safety First: Why Normally Closed (NC)?</h4>
                                <div className="text-yellow-200 text-sm space-y-2">
                                    <p>
                                        We configure the switch as <strong>Normally Closed</strong> to create a "Fail-Safe" system. In a standard (Normally Open) setup, a broken wire or loose plug would simply stop the button from working—meaning you press the pedal, but the signal never reaches the controller, leaving the lock engaged.
                                    </p>
                                    <p>
                                        With <strong>Normally Closed</strong>, the system requires a constant electrical connection to stay locked. Any interruption—whether it is you pressing the switch, a cable getting cut, or the plug falling out—breaks the circuit and <strong>immediately releases the lock</strong>.
                                    </p>
                                </div>                            </div>

                            <ol className="list-decimal list-inside md:list-outside md:pl-5 space-y-3 text-gray-300 mb-8 text-sm md:text-base">
                                <li>Disassemble a male GX12 cable connector. Slide the housing parts onto your switch cable in this order: End Screw &rarr; Rubber Strain Relief &rarr; Housing.</li>
                                <li>
                                    Strip and tin the ends of the Abort Switch wires.
                                    <div className="bg-blue-900/20 border border-blue-700/50 rounded p-3 mt-3 mb-2">
                                        <p className="text-blue-200 text-sm">
                                            <strong>Wiring the TFS-1 (Normally Closed):</strong> This switch typically has three wires: <strong>COM</strong>, <strong>NO</strong>, and <strong>NC</strong>.
                                            You need to connect <strong>COM (White)</strong> and <strong>NC (Black)</strong> for the fail-safe logic to work. The third wire (Red/NO) can be cut or ignored.
                                            <br/><em className="text-xs text-blue-300">Note: Always verify the wire colors on your specific switch with a multimeter.</em>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <strong>Verification Trick:</strong> Screw this male plug into the female panel mount you prepared in Step 5. This lets you visually trace the wires to ensure Signal connects to Signal and Ground to Ground.
                                </li>
                                <li>Solder the wires to the pins and insulate with heat shrink.</li>
                                <li>Screw the GX12 housing back together.</li>
                            </ol>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <ImageOverlay 
                                    src={disassembledGxSrc}
                                    srcSet={disassembledGxSrcSet}
                                    alt="GX12 Connector Disassembled" 
                                    className="w-full h-auto rounded-md"
                                />
                                <ImageOverlay
                                    src={abortSwitchSrc}
                                    srcSet={abortSwitchSrcSet}
                                    alt="The abort switch with GX12 connector" 
                                    className="w-full h-auto rounded-md"
                                />
                            </div>

                        </div>

                        <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                            <h4 className="text-lg md:text-xl font-bold text-white mb-6">Step 7: MagLock Cable Assembly</h4>
                            <p className="text-gray-300 mb-4">Now we attach the matching male plugs to your MagLock cables.</p>
                            <ol className="list-decimal list-inside md:list-outside md:pl-5 space-y-3 text-gray-300 text-sm md:text-base">
                                <li>Disassemble the male GX12 cable connector and slide the housing parts (End Screw &rarr; Rubber &rarr; Housing) onto the MagLock wire.</li>
                                <li>Strip and tin the ends of the MagLock wires.</li>
                                <li>
                                    <strong>Verification Trick:</strong> Again, screw the male plug into the female panel mount from Step 5. Ensure you are soldering Positive to Positive and Negative to Negative.
                                </li>
                                <li>Solder the MagLock wires to the pins, insulate with heat shrink, and reassemble the connector housing.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PART 5: ENCLOSURE PREPARATION --- */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Part 5: Enclosure Preparation</h2>
                    <p className="text-gray-300 mb-8">
                        It is time to prepare the housing. Using the provided template, you will drill precise holes in the project box to accommodate the status LED, power jack, and aviation connectors.
                    </p>
                    
                    <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                        <h4 className="text-lg md:text-xl font-bold text-white mb-4">Step 8: Drilling the Enclosure</h4>
                        
                        <div className="mb-6">
                            <p className="text-gray-300 mb-4">
                                Precision is key for a clean build. Use our printable template to mark your drilling points.
                            </p>
                            <a 
                                href="/downloads/controller_drill_template.pdf" 
                                target="_blank"
                                className="inline-block w-full md:w-auto text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 md:py-2 rounded-md transition-colors duration-200"
                            >
                                Download Drill Template
                            </a>
                        </div>

                        <ol className="list-decimal list-inside md:list-outside md:pl-5 space-y-3 text-gray-300 mb-6 text-sm md:text-base">
                            <li>Download and print the template. <strong>Make sure to set the page size to 100%</strong> (Do not scale).</li>
                            <li>Carefully cut out the front and back templates. Using a piece of transparent tape, stick them onto the respective sides of your enclosure. <strong>Make sure the edges align perfectly</strong> with the box corners.</li>
                            <li>Using a sharp object (like a center punch) or a pencil, mark the center of each crosshair. Remove the paper template before drilling to avoid it catching and tearing.</li>
                            <li>
                                Drill the holes using the following sizes:
                                <ul className="list-disc list-inside md:list-outside md:pl-4 mt-2 space-y-1 text-gray-400">
                                    <li><strong>LED:</strong> 6mm</li>
                                    <li><strong>GX12 panel mounts:</strong> 8mm</li>
                                    <li><strong>DC connector:</strong> 11mm</li>
                                </ul>
                            </li>
                        </ol>

                        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded p-3 md:p-4 mb-6">
                            <p className="text-yellow-100 text-sm">
                                <strong>Tip:</strong> Your components may vary slightly in diameter. We highly recommend measuring your specific components using a caliper before drilling to avoid disappointment.
                            </p>
                        </div>

                        <TutorialImage 
                            src={enclosureHolesSrc}
                            srcSet={enclosureHolesSrcSet}
                            alt="Drilled enclosure" 
                            wrapperClassName="mb-4"
                            className="w-full h-auto rounded-md"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <ImageOverlay 
                                src={enclosureTemplateSrc}
                                srcSet={enclosureTemplateSrcSet}
                                alt="Enclosure with template attached using tape" 
                                className="w-full h-auto rounded-md"
                            />
                            <ImageOverlay
                                src={enclosureMarkingsSrc}
                                srcSet={enclosureMarkingsSrcSet}
                                alt="Enclosure with markings made with center punch" 
                                className="w-full h-auto rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PART 6: FINAL ASSEMBLY --- */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Part 6: Final Assembly</h2>
                    <p className="text-gray-300 mb-8">
                        This final stage brings everything together. To make assembly easy, we will wire the MagLock connectors <strong>with the PCB out of the box</strong> to ensure easy access. Once those are secure, we will place the board <strong>inside the box</strong> and perform the final in-place soldering for the LED and Abort Switch, as well as connecting the power supply.
                    </p>
                    
                    <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                        <h4 className="text-lg md:text-xl font-bold text-white mb-4">Step 9: Mounting and Soldering</h4>
                        
                        <ul className="list-disc list-inside md:list-outside md:pl-5 space-y-4 text-gray-300 mb-8 text-sm md:text-base">
                            <li>
                                <strong>Install Front Components (Part 1):</strong> Insert the two MagLock GX12 panel mounts into the front of the box. Use a wrench and socket (size 10) to tighten the counter nuts securely.
                            </li>
                            <li>
                                <strong>Wire MagLocks:</strong> Attach the MagLock GX12 wires (from the panel mounts) to <strong>Channels 1 and 2</strong> on the screw terminals (labeled CH1 and CH2).
                                <br />
                                <span className="text-gray-400 italic text-sm">Note: If you are using the 4-channel board, Channels 3 and 4 are closer to the side of the PCB and may offer a better physical fit.</span>
                            </li>
                            <li>
                                <strong>Mount the Board:</strong> Cut a thick piece of double-sided tape and place it on the bottom of the project box. Slide the controller board into place, pressing it firmly against the pad so it doesn't slide.
                                <br />
                                <span className="text-gray-400 italic text-sm">Note: You might need to stack a few pieces of tape to overcome the height of the solder joints or stands on the bottom of the board.</span>
                            </li>
                            <li>
                                <strong>Install Front Components (Part 2):</strong> Now insert the LED and the Abort Switch GX12 panel mount into the front of the box and tighten them.
                            </li>
                            <li>
                                <strong>Solder Connections:</strong> Locate the 10-pin header you soldered in Part 1. Now we must solder the peripheral wires directly to these header pins. Be careful not to melt the surrounding plastic.
                                <ul className="list-circle list-inside md:list-outside md:pl-4 mt-2 space-y-2 text-gray-400">
                                    <li><strong>LED:</strong> Solder the Red wire to pin <strong>IO21</strong> and Black to <strong>GND</strong>.</li>
                                    <li><strong>Abort Switch:</strong> Solder the Red wire (Signal) to pin <strong>IO15</strong> and Black to <strong>GND</strong>.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Install DC Connector:</strong> Mount the DC connector onto the side of the box. Use pliers to tighten the counter nut.
                            </li>
                            <li>
                                <strong>Power Wiring:</strong> Bring the power wires from the DC connector to the green <strong>INPUT</strong> terminal and screw them fit (Red to +, Black to -).
                            </li>
                        </ul> 

                        <TutorialImage 
                            src={insideSolderedSrc}
                            srcSet={insideSolderedSrcSet}
                            alt="LED and Abort wires soldered to the pin header" 
                            className="w-full h-auto rounded-md" 
                        />

                        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <ImageOverlay 
                                src={edgeBoxSrc}
                                srcSet={edgeBoxSrcSet}
                                alt="wire the MagLock connectors to the controller terminals" 
                                className="w-full h-auto rounded-md" 
                            />
                            <ImageOverlay 
                                src={insideBoxSrc}
                                srcSet={insideBoxSrcSet}
                                alt="Flip the controller board over, and mount inside the box" 
                                className="w-full h-auto rounded-md" 
                            />
                            <ImageOverlay 
                                src={stickyPadSrc}
                                srcSet={stickyPadSrcSet}
                                alt="Place some double sides pads on the bottom of the controller or project box" 
                                className="w-full h-auto rounded-md" 
                            />
                        </div>
                    </div>

                    <div className="md:bg-gray-800/50 md:rounded-lg md:p-6 mt-6">
                        <h4 className="text-lg md:text-xl font-bold text-white mb-4">Step 10: Final Hardware Test</h4>
                        <ol className="list-decimal list-inside md:list-outside md:pl-5 space-y-3 text-gray-300 text-sm md:text-base">
                            <li>
                                Power up the device using the 12V battery.
                            </li>
                            <li>
                                <strong>Test again:</strong> Using the Session Manager, re-run the <strong>Hardware Test</strong>.
                                <ul className="list-disc list-inside md:list-outside md:pl-4 mt-2 space-y-1 text-gray-400">
                                    <li>You should see the LED in a "Slow Breath" pattern after booting (indicating the device is READY).</li>
                                    <li>The LED should fade into a "Medium Pulse" during hardware testing.</li>
                                    <li>Pressing the <strong>Abort Switch</strong> should immediately end the test session, allowing you to confirm everything works as intended.</li>
                                </ul>
                            </li>
                        </ol>

                        <div className="mt-8 p-4 bg-green-900/20 border border-green-600/50 rounded-lg text-center">
                            <p className="text-green-100 font-bold text-lg md:text-xl">
                                Screw the lid shut. You built a MagLock Controller!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sourcing Materials */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                        Sourcing Materials
                    </h2>
                    <p className="text-gray-300 mb-6">Finding the specific components is straightforward. Here are a few suggested search terms for AliExpress or similar online marketplaces, focusing on the more specialized parts:</p>
                    
                    <div className="space-y-4">
                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-4">Controller board</h3>
                            <p className="text-gray-300 text-sm">Diymore ESP32 2/4-way MOS Switch 60v</p>

                        </div>
                        
                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-4">Project Box</h3>
                            <p className="text-gray-300 text-sm mb-4">Transparent Waterproof Outdoor Box FT100-68-50</p>
                        </div>
                        
                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-4">LED</h3>
                            <p className="text-gray-300 text-sm">5pcs LED Metal Indicator 6mm 3-6v</p>
                        </div>
                        
                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-4">Foot Pedal</h3>
                            <p className="text-gray-300 text-sm">OMCH Foot Switch TFS-1</p>
                        </div>
                        
                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-4">USB Programmer Cable</h3>
                            <p className="text-gray-300 text-sm">CH340 CH340G USB 2.0 to TTL Serial Adapter Dupont Interface</p>
                        </div>
                    </div>
                </div>
            </section>            
        </div>
    </>
);
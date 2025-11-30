import { SafetyWarning } from "../components/SafetyWarning";
import { ImageOverlay } from "../components/ImageOverlay";
import { TutorialImage } from "../components/TutorialImage";

// --- IMAGES ---

// Header
import finishedMagLockSrc from '@/images/maglock/finished_maglock.webp?w=1200&format=webp';
import finishedMagLockSrcSet from '@/images/maglock/finished_maglock.webp?w=400;800;1200&format=webp&as=srcset';

// Prelim
import disassembledMagnetSrc from '@/images/maglock/disassembled_magnet.webp?w=1200&format=webp';
import disassembledMagnetSrcSet from '@/images/maglock/disassembled_magnet.webp?w=400;800;1200&format=webp&as=srcset';
import roughDiscSrc from '@/images/maglock/discs_rough.webp?w=1200&format=webp';
import roughDiscSrcSet from '@/images/maglock/discs_rough.webp?w=400;800;1200&format=webp&as=srcset';
import sandedDiscSrc from '@/images/maglock/discs_sanded.webp?w=1200&format=webp';
import sandedDiscSrcSet from '@/images/maglock/discs_sanded.webp?w=400;800;1200&format=webp&as=srcset';

// Part 1: Housing
import sleeveNoHoleSrc from '@/images/maglock/sleeve_without_hole.webp?w=1200&format=webp';
import sleeveNoHoleSrcSet from '@/images/maglock/sleeve_without_hole.webp?w=400;800;1200&format=webp&as=srcset';
import twoSizesSrc from '@/images/maglock/two_sizes_of_pvc_sleeves.webp?w=1200&format=webp';
import twoSizesSrcSet from '@/images/maglock/two_sizes_of_pvc_sleeves.webp?w=400;800;1200&format=webp&as=srcset';
import ringWrongSrc from '@/images/maglock/ring_does_not_fit_correctly.webp?w=1200&format=webp';
import ringWrongSrcSet from '@/images/maglock/ring_does_not_fit_correctly.webp?w=400;800;1200&format=webp&as=srcset';
import customSpacerSrc from '@/images/maglock/custom_and_off-the_shelve_spacer.webp?w=1200&format=webp';
import customSpacerSrcSet from '@/images/maglock/custom_and_off-the_shelve_spacer.webp?w=400;800;1200&format=webp&as=srcset';
import sleeveHoleSrc from '@/images/maglock/sleeve_with_hole.webp?w=1200&format=webp';
import sleeveHoleSrcSet from '@/images/maglock/sleeve_with_hole.webp?w=400;800;1200&format=webp&as=srcset';
import wireHoleSrc from '@/images/maglock/wire_through_the_hole.webp?w=1200&format=webp';
import wireHoleSrcSet from '@/images/maglock/wire_through_the_hole.webp?w=400;800;1200&format=webp&as=srcset';

// Part 1: Diode
import diodeSchematicSrc from '@/images/maglock/diode_schematic.webp?w=1200&format=webp';
import diodeSchematicSrcSet from '@/images/maglock/diode_schematic.webp?w=400;800;1200&format=webp&as=srcset';
import diodesSrc from '@/images/maglock/1N4007_diodes.webp?w=1200&format=webp';
import diodesSrcSet from '@/images/maglock/1N4007_diodes.webp?w=400;800;1200&format=webp&as=srcset';
import magnetDiodeSrc from '@/images/maglock/magnet_with_diode.webp?w=1200&format=webp';
import magnetDiodeSrcSet from '@/images/maglock/magnet_with_diode.webp?w=400;800;1200&format=webp&as=srcset';
import magnetWiresSrc from '@/images/maglock/magnet_with_diode_and_wires.webp?w=1200&format=webp';
import magnetWiresSrcSet from '@/images/maglock/magnet_with_diode_and_wires.webp?w=400;800;1200&format=webp&as=srcset';
import magnetInsulationSrc from '@/images/maglock/magnet_with_insulation.webp?w=1200&format=webp';
import magnetInsulationSrcSet from '@/images/maglock/magnet_with_insulation.webp?w=400;800;1200&format=webp&as=srcset';
import zipTieSrc from '@/images/maglock/zip_tie_strain_relief.webp?w=1200&format=webp';
import zipTieSrcSet from '@/images/maglock/zip_tie_strain_relief.webp?w=400;800;1200&format=webp&as=srcset';

// Part 2: Armature
import centerPunchSrc from '@/images/maglock/center_punched.webp?w=1200&format=webp';
import centerPunchSrcSet from '@/images/maglock/center_punched.webp?w=400;800;1200&format=webp&as=srcset';
import countersunkSrc from '@/images/maglock/drilled_countersunk_hole.webp?w=1200&format=webp';
import countersunkSrcSet from '@/images/maglock/drilled_countersunk_hole.webp?w=400;800;1200&format=webp&as=srcset';
import armatureEye2Src from '@/images/maglock/armature_with_eye_2.webp?w=1200&format=webp';
import armatureEye2SrcSet from '@/images/maglock/armature_with_eye_2.webp?w=400;800;1200&format=webp&as=srcset';
import armatureScrewSrc from '@/images/maglock/armature_screw.webp?w=1200&format=webp';
import armatureScrewSrcSet from '@/images/maglock/armature_screw.webp?w=400;800;1200&format=webp&as=srcset';
import drilledHoleSrc from '@/images/maglock/drilled_hole.webp?w=1200&format=webp';
import drilledHoleSrcSet from '@/images/maglock/drilled_hole.webp?w=400;800;1200&format=webp&as=srcset';
import armatureEye1Src from '@/images/maglock/armature_with_eye_1.webp?w=1200&format=webp';
import armatureEye1SrcSet from '@/images/maglock/armature_with_eye_1.webp?w=400;800;1200&format=webp&as=srcset';

// Part 3: Final
import rearEyeSrc from '@/images/maglock/assembled_rear_eye_bolt.webp?w=1200&format=webp';
import rearEyeSrcSet from '@/images/maglock/assembled_rear_eye_bolt.webp?w=400;800;1200&format=webp&as=srcset';
import threadLockSrc from '@/images/maglock/thread_lock_inside_magnet.webp?w=1200&format=webp';
import threadLockSrcSet from '@/images/maglock/thread_lock_inside_magnet.webp?w=400;800;1200&format=webp&as=srcset';
import finalTopSrc from '@/images/maglock/final_assembly_top.webp?w=1200&format=webp';
import finalTopSrcSet from '@/images/maglock/final_assembly_top.webp?w=400;800;1200&format=webp&as=srcset';
import finalSingleSrc from '@/images/maglock/final_assembly_single.webp?w=1200&format=webp';
import finalSingleSrcSet from '@/images/maglock/final_assembly_single.webp?w=400;800;1200&format=webp&as=srcset';
import finalPlaceSrc from '@/images/maglock/final_assembly_with_place.webp?w=1200&format=webp';
import finalPlaceSrcSet from '@/images/maglock/final_assembly_with_place.webp?w=400;800;1200&format=webp&as=srcset';

export const BuildMagLockPage = () => (
    <>
        <div className="py-6 md:py-12">
            <h1 className="text-2xl md:text-4xl font-bold text-white text-center mb-4 md:mb-6">Build the MagLock</h1>
            <p className="text-lg md:text-xl text-center text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
                Easy & Low-Cost DIY Electromagnet Lock
            </p>

            <TutorialImage 
                src={finishedMagLockSrc}
                srcSet={finishedMagLockSrcSet}
                alt="Finished Lobster MagLock" 
                wrapperClassName="mb-8 md:mb-12"
                className="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-lg bg-gray-700"
            />

            <SafetyWarning />

            {/* Introduction */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 flex items-center">
                        Overview
                    </h2>
                    <p className="text-gray-300 mb-4">This guide provides step-by-step instructions for assembling an electromagnet lock intended for self-bondage applications.</p>
                    <p className="text-gray-300 mb-4">The build can be very straightforward, requiring nothing more than basic household tools (like a Philips screwdriver and Allen keys), some tape, and standard parts sold at every major hardware store, as long as you can source all components with the exact sizes specified.</p>
                    <p className="text-gray-300">However, if you need to use components with different dimensions, these instructions provide alternatives. Be aware that these workarounds do require more specialized tools, such as a drill press and a cross-cut saw. While it's theoretically possible to perform these steps using hand tools (like a saw and a handheld power drill), it will be significantly more difficult to get the perfectly straight holes and flush cuts that are critical for this project.</p>
                </div>
            </section>

            {/* Cost Breakdown */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 flex items-center">
                        Cost Breakdown
                    </h2>
                    {/* Updated Grid: Always 3 columns (grid-cols-3), smaller gap on mobile */}
                    <div className="grid grid-cols-3 gap-2 md:gap-6 mb-6">
                        <div className="bg-gray-800/50 p-2 md:p-4 rounded-lg text-center flex flex-col justify-center">
                            {/* Adjusted text sizes for mobile fit */}
                            <div className="text-lg sm:text-2xl md:text-3xl font-bold text-green-400">~€50</div>
                            <div className="text-gray-400 mt-1 md:mt-2 text-[10px] sm:text-xs md:text-base leading-tight">Total Cost</div>
                        </div>
                        <div className="bg-gray-800/50 p-2 md:p-4 rounded-lg text-center flex flex-col justify-center">
                            <div className="text-lg sm:text-2xl md:text-3xl font-bold text-yellow-400">~€40</div>
                            <div className="text-gray-400 mt-1 md:mt-2 text-[10px] sm:text-xs md:text-base leading-tight">Electromagnet</div>
                        </div>
                        <div className="bg-gray-800/50 p-2 md:p-4 rounded-lg text-center flex flex-col justify-center">
                            <div className="text-lg sm:text-2xl md:text-3xl font-bold text-blue-400">~€10</div>
                            <div className="text-gray-400 mt-1 md:mt-2 text-[10px] sm:text-xs md:text-base leading-tight">Hardware</div>
                        </div>
                    </div>
                    <p className="text-gray-300 mb-4">Building this MagLock costs around €50, a significant saving compared to commercial versions which can easily cost three times as much. The electromagnet is the main expense at about €40, with the remaining €10 covering all the smaller hardware.</p>
                    <p className="text-gray-300">Keep in mind that small parts like screws and washers are often sold in packs when bought online, which may raise your initial cost (your local hardware store might sell them individually). The upside, however, is you'll have enough extra parts to build a couple of MagLocks, making your setup more versatile.</p>
                </div>
            </section>

            {/* Materials Section */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Required Materials</h2>
                    <p className="text-gray-300 mb-8">This shopping list is broken down by component. Some parts are conditional based on what you can source.</p>

                    {/* Base Materials */}
                    <div className="mb-8">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Core Materials</h3>
                        <ul className="list-disc list-inside md:list-outside md:pl-5 space-y-2 text-gray-300 text-sm md:text-base">
                            <li>1 x Round Electromagnet (50mm Diameter, 60kg, 12V)</li>
                            <li>1 x 50mm Galvanized Iron Circular Disc (Armature Plate), 5mm thick</li>
                            <li>1 x 1N4001 Flyback Diode (or similar, e.g., 1N4007)</li>
                            <li>3 x 50mm Washers with an M8 hole</li>
                            <li>1 x M8 Nut</li>
                            <li>1 x M6 Galvanized Iron Countersunk Screw, length 16mm</li>
                            <li>1 x Galvanized Iron Eye Bolt, M6 hole</li>
                            <li>1 x Two-Core Electrical Wire (length as needed, typically 4 meters)</li>
                            <li>1 x Cable or Zip Tie</li>
                            <li>Solder (for joining wires)</li>
                            <li>Electrical Tape or Heat Shrink Tubing (for insulating soldered wires)</li>
                            <li>Thread Locker - Recommended to create a strong connection for the nuts and bolts</li>
                        </ul>
                    </div>

                    {/* Housing Parts */}
                    <div className="mb-8">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Housing Parts</h3>
                        <p className="text-gray-400 mb-6 italic text-sm md:text-base">Your parts will depend on the PVC sleeve you can source. The goal is to have the magnet + spacer fit snugly. The ~72mm "simple build" sleeve is designed to fit an off-the-shelf `50-to-40mm conversion ring` perfectly. If your sleeve is shorter (e.g., ~65mm), you will need to cut your own spacer from 50mm PVC pipe.</p>

                        <div className="mb-6">
                            <h4 className="text-base md:text-lg font-semibold text-white mb-4">Path 1: The "Simple Build" (using a ~72mm sleeve):</h4>
                            <ul className="list-disc list-inside md:list-outside md:pl-5 space-y-2 text-gray-300 text-sm md:text-base">
                                <li>1 x 50mm PVC Connector Sleeve (approx. 72mm long)</li>
                                <li>1 x 50-to-40-mm conversion ring</li>
                                <li>1 x Stainless Steel Eye Bolt, 45 to 50mm M8 Thread</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-base md:text-lg font-semibold text-white mb-4">Path 2: The "Custom Spacer" Build (using a ~65mm sleeve):</h4>
                            <ul className="list-disc list-inside md:list-outside md:pl-5 space-y-2 text-gray-300 text-sm md:text-base">
                                <li>1 x 50mm PVC Connector Sleeve (approx. 65mm long)</li>
                                <li>1 x 50mm PVC pipe (typically sold per meter, will be cut down to ~27mm)</li>
                                <li>1 x Stainless Steel Eye Bolt, 40 to 45mm M8 Thread</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Required Tools</h2>
                    <p className="text-gray-300 mb-8">You will need the following tools to assemble the magnet and drill the armature plate.</p>

                    <div className="mb-8">
                        <ul className="list-disc list-inside md:list-outside md:pl-5 space-y-2 text-gray-300 text-sm md:text-base">
                            <li>Drill Press or Hand Drill with a Vertical Hole Drilling Jig</li>
                            <li>Drill Bits for Metal (2mm, 4mm, and 6mm to step up the hole size)</li>
                            <li>Countersink Drill Bit (Metal), sized for your M6 countersunk screw (typically 90°)</li>
                            <li>Center Finder, Center Punch & Hammer</li>
                            <li>Soldering Iron</li>
                            <li>Wire Stripper and Cutting pliers</li>
                            <li>Sandpaper or File (for cleaning PVC cuts and smoothing edges)</li>
                            <li>Philips screwdrivers, Allen keys, and spanners (for tightening the nut)</li>
                        </ul>
                    </div>

                    {/* Tools for Custom Spacer */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Additional Tools for Custom Spacer</h3>
                        <p className="text-gray-400 mb-4 italic text-sm md:text-base">Only required if your PVC sleeve is shorter than 72mm and you need to cut a custom spacer.</p>
                        <ul className="list-disc list-inside md:list-outside md:pl-5 space-y-2 text-gray-300 text-sm md:text-base">
                            <li>Cross-cutting Saw (Recommended for a perfectly flat, square cut)</li>
                            <li>Alternative: A fine-toothed handsaw or PVC pipe cutter, but you must be very steady to ensure the cut is not angled</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* --- PRELIMINARY STEPS --- */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Preliminary Steps</h2>
                    <p className="text-gray-300 mb-8">Before starting the main build, complete the preliminary steps below.</p>
                    
                    {/* Step 1 */}
                    <div className="md:bg-gray-800/50 md:rounded-lg md:p-6 mb-6">
                        <h4 className="text-lg md:text-xl font-bold text-white mb-4">
                            Step 1: Disassemble the Magnet
                        </h4>
                        <p className="text-gray-300 mb-4">If your electromagnet arrives in a bracket, disassemble this first. It is usually secured with a few simple screws. Remove them to take out the bare 50mm round electromagnet, the only part needed for this build.</p>
                        <p className="text-gray-300 mb-4">Once you have the bare magnet, check its center. You may find a small, spring-loaded pusher pin. Unscrew the central hex screw to remove the pin and spring. This gives you a longer internal thread, allowing a deeper, more secure eye bolt connection.</p>
                        
                        <TutorialImage
                            src={disassembledMagnetSrc}
                            srcSet={disassembledMagnetSrcSet}
                            alt="Disassembled magnet" 
                            wrapperClassName="mb-4"
                            className="w-full h-auto rounded-md"
                        />
                    </div>

                    {/* Step 2 */}
                    <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                        <h4 className="text-lg md:text-xl font-bold text-white mb-4">
                            Step 2: Shape the Armature Disc
                        </h4>

                        <p className="text-gray-300 mb-4">The 50mm armature metal discs match the inner diameter of the PVC connector sleeve, creating a very tight fit. This is often compounded by the laser-cutting process, which can leave a sharp, rough edge or small burrs.</p>
                        <p className="text-gray-300 mb-4">This combination makes it easy for the disc to catch or jam sideways if not inserted perfectly.</p>
                        <p className="text-gray-300 mb-4">To fix this, use a light piece of sandpaper to smooth the roughness from the laser-cut edge and create a slight lead-in by chamfering or rounding the sides. Test fit the disc in the sleeve to ensure it now enters and exits smoothly.</p>
                        
                        <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <ImageOverlay
                                src={roughDiscSrc}
                                srcSet={roughDiscSrcSet}
                                alt="Laser-cut armature discs with rough edges" 
                                className="w-full h-auto rounded-md"
                            />
                            <ImageOverlay 
                                src={sandedDiscSrc}
                                srcSet={sandedDiscSrcSet}
                                alt="Armature discs after sanding" 
                                className="w-full h-auto rounded-md"
                            />
                        </div>                                
                    </div>
                </div>
            </section>

            {/* --- PART 1: HOUSING --- */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Part 1: Magnet Housing Assembly</h2>
                    
                    <div className="space-y-6">
                        {/* Housing Step 1 */}
                        <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                            <h4 className="text-lg md:text-xl font-bold text-white mb-4">
                                Step 1: Install the Conversion Ring
                            </h4>
                            <p className="text-gray-300 mb-4">Push the 50-to-40mm conversion ring into one of the sides of PVC Connector so that it fits tightly against the ridge in the middle. Optionally, apply some PVC cement to glue the inset in place.</p>
                            <div className="bg-blue-900/20 border border-blue-700/50 rounded p-3 mb-4">
                                <p className="text-blue-200 text-sm"><strong>Alternative (Path 2):</strong> Use your saw to cut a ~27mm long piece from the 50mm PVC pipe. Clean and deburr the cut edge using sandpaper or a file.</p>
                            </div>
                            
                            <TutorialImage 
                                src={sleeveNoHoleSrc}
                                srcSet={sleeveNoHoleSrcSet}
                                alt="Installing conversion ring, note how it leaves room for the back assembly" 
                                className="w-full h-auto rounded-md"
                            />
                            
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <ImageOverlay 
                                    src={twoSizesSrc}
                                    srcSet={twoSizesSrcSet}
                                    alt="Two sizes of PVC sleeves" 
                                    className="w-full h-auto rounded-md" 
                                />
                                <ImageOverlay 
                                    src={ringWrongSrc}
                                    srcSet={ringWrongSrcSet}
                                    alt="The ring does not fit correctly" 
                                    className="w-full h-auto rounded-md" 
                                />
                                <ImageOverlay 
                                    src={customSpacerSrc}
                                    srcSet={customSpacerSrcSet}
                                    alt="Both custom-cut and off-the-shelf spacers" 
                                    className="w-full h-auto rounded-md" 
                                />
                            </div>

                        </div>

                        {/* Housing Step 2 */}
                        <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                            <h4 className="text-lg md:text-xl font-bold text-white mb-4">
                                Step 2: Drill Wire Hole and Feed Wire
                            </h4>
                            <p className="text-gray-300 mb-4">
                                First, you will drill the hole for the power cable. This hole must go through <strong>both</strong> the outer <strong>PVC sleeve</strong> and the <strong>inner PVC insert</strong> (the conversion ring or custom spacer) that you installed in Step 1.
                            </p>
                            <p className="text-gray-300 mb-4">
                                Drill a single hole (e.g., 6mm) through the <strong>side wall</strong> of the PVC sleeve, in the area where the insert is located. Continue drilling in a straight line, so the bit passes through the sleeve's wall and then immediately through the insert's wall, creating one clean path.
                            </p>
                            <p className="text-gray-300 mb-4">
                                Next, feed the end of your electrical wire through this new hole. Push it from the <strong>outside</strong> of the sleeve, through both walls you just drilled, so the end of the wire is now inside the central cavity where the magnet will be seated.
                            </p>

                            <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <ImageOverlay
                                    src={sleeveHoleSrc}
                                    srcSet={sleeveHoleSrcSet}
                                    alt="PVC sleeve and inset with drilled hole" 
                                    className="w-full h-auto rounded-md"
                                />
                                <ImageOverlay 
                                    src={wireHoleSrc}
                                    srcSet={wireHoleSrcSet}
                                    alt="Feeding wire through drilled hole" 
                                    className="w-full h-auto rounded-md"
                                />
                            </div>                                
                        </div>

                        {/* Housing Step 3 */}
                        <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                            <h4 className="text-lg md:text-xl font-bold text-white mb-4">
                                Step 3: Install Flyback Diode & Solder Wires
                            </h4>

                            <p className="text-gray-300 mb-4">This step is critical for protecting your electronics. We will first install a flyback diode directly onto the magnet's terminals before attaching the main power wires.</p>

                            <h5 className="text-base md:text-lg font-semibold text-white mb-4">Step 4a: Install the Flyback Diode</h5>
                            <p className="text-gray-300 mb-4">
                                A diode has polarity. Look for a <strong>silver or white band</strong> on one end of the diode; this is the <strong>cathode (-)</strong>. The other end is the <strong>anode (+)</strong>.
                            </p>
                            <p className="text-gray-300 mb-4">
                                You must install this diode in <strong>reverse bias</strong>. This means the diode's band (cathode) connects to the magnet's <strong>POSITIVE (+)</strong> terminal, and the non-banded side (anode) connects to the magnet's <strong>NEGATIVE (-)</strong> terminal.
                            </p>

                            <div className="my-8 md:my-12 flex justify-center w-full">
                                <TutorialImage 
                                    src={diodeSchematicSrc}
                                    srcSet={diodeSchematicSrcSet}
                                    alt="Diode schematic diagram" 
                                    wrapperClassName="w-full md:w-1/2"
                                    className="w-full h-auto rounded-md"
                                />
                            </div>

                            <p className="text-gray-300 mb-4">
                                Solder the diode's legs directly across the magnet's two terminals, ensuring the polarity is correct as described. Trim any excess wire from the diode's legs after soldering.
                            </p>

                            <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <ImageOverlay 
                                    src={diodesSrc}
                                    srcSet={diodesSrcSet}
                                    alt="Selection of 1N4007 diodes" 
                                    className="w-full h-auto rounded-md"
                                />
                                <ImageOverlay
                                    src={magnetDiodeSrc}
                                    srcSet={magnetDiodeSrcSet}
                                    alt="Soldered flyback diode on magnet terminals" 
                                    className="w-full h-auto rounded-md"
                                />
                            </div>
                            
                            <div className="bg-blue-900/20 border border-blue-700/50 rounded p-3 md:p-4 my-6">
                                <h4 className="text-blue-100 font-bold mb-4 text-sm md:text-base">What is a Flyback Diode and Why is it Essential?</h4>
                                <p className="text-blue-200 text-sm mb-4">
                                    An electromagnet is an <strong>inductor</strong>. When you cut the power, its collapsing magnetic field creates a massive, instantaneous <strong>reverse-voltage spike</strong> (also called "inductive kickback"). This spike can be hundreds of volts and will instantly destroy sensitive electronics like timers, relays, or microcontrollers.
                                </p>
                                <p className="text-blue-200 text-sm mb-4">
                                    The flyback diode is connected "backwards" (in reverse bias) across the magnet. When the power is on, no current flows through it. But when you cut the power, the reverse-voltage spike is exactly the right polarity to flow *forward* through the diode. This gives the spike a safe, short-circuit path to loop back through the magnet coil, where it harmlessly dissipates as a tiny amount of heat.
                                </p>
                                
                                <p className="text-blue-200 text-sm mt-3">
                                    <strong>Never operate an electromagnet with electronic controls without one.</strong>
                                </p>
                            </div>
                            
                            <h5 className="text-base md:text-lg font-semibold text-white mb-4">Step 4b: Solder the Power Wires and Insulate Connections</h5>
                            <p className="text-gray-300 mb-4">Strip about 1cm of insulation from your two main power wires. Solder them to the same terminals where you just attached the diode, matching the polarity.</p>
                            
                            <div className="bg-red-900/20 border border-red-700/50 rounded p-3 md:p-4 mb-4">
                                <p className="text-red-100 mb-2 text-sm md:text-base">In the electromagnet shown in the sourced materials the 12v wiring is as follows: red + yellow connect to the <strong>positive (+)</strong> terminal (this is where the diode's band should be). Black and orange connect to the <strong>negative (-)</strong> terminal. Otherwise, follow the wiring instructions that came with the electromagnet.</p>
                                <p className="text-red-100 font-bold text-sm md:text-base">⚠️ Test the wiring of your magnet using the 12v power supply *after* installing the diode to ensure it functions correctly.</p>
                            </div>

                            <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <ImageOverlay 
                                    src={magnetWiresSrc}
                                    srcSet={magnetWiresSrcSet}
                                    alt="Soldering wires to magnet terminals" 
                                    className="w-full h-auto rounded-md"
                                />
                                <ImageOverlay
                                    src={magnetInsulationSrc}
                                    srcSet={magnetInsulationSrcSet}
                                    alt="Magnet terminals with diode and wires insulated" 
                                    className="w-full h-auto rounded-md"
                                />
                            </div>

                        </div>

                        {/* Housing Step 4 */}
                        <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                            <h4 className="text-lg md:text-xl font-bold text-white mb-4">
                                Step 4: Insulate Connections
                            </h4>
                            <p className="text-gray-300">Cover all bare connections (the power wire joints <strong>and</strong> the flyback diode's legs) individually with electrical tape or heat shrink tubing to prevent any short circuits.</p>
                        </div>

                        {/* Housing Step 5 */}
                        <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                            <h4 className="text-lg md:text-xl font-bold text-white mb-4">
                                Step 5: Add Strain Relief
                            </h4>
                            <p className="text-gray-300 mb-4">On the inside of the housing, place a cable tie tightly around the main electrical wire. Cut the long end off, leaving the small square tab in place. This tab will act as a "stop," preventing the wire from being pulled directly from the solder joints if the cord is tugged.</p>
                            
                            <TutorialImage 
                                src={zipTieSrc}
                                srcSet={zipTieSrcSet}
                                alt="Strain relief" 
                                className="w-full h-auto rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PART 2: ARMATURE PLATE --- */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Part 2: Armature Plate Assembly</h2>
                    
                    <div className="space-y-6">
                        {/* Armature Step 1 */}
                        <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                            <h4 className="text-lg md:text-xl font-bold text-white mb-4">
                                Step 1: Find Center
                            </h4>
                            <p className="text-gray-300">Use the center finder to locate the center of the 50mm galvanized iron disc. Mark this spot with the center punch.</p>

                            <TutorialImage 
                                src={centerPunchSrc}
                                srcSet={centerPunchSrcSet}
                                alt="Center punched armature disc" 
                                className="w-full h-auto rounded-md"
                            />

                            
                        </div>

                        {/* Armature Step 2 */}
                        <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                            <h4 className="text-lg md:text-xl font-bold text-white mb-4">
                                Step 2: Drill Hole and Countersink
                            </h4>
                            <p className="text-gray-300 mb-4">Drill a 6mm hole through the center mark by stepping up your drill bit sizes. Start with a 2mm drill bit, move to a 4mm bit, and finish with the 6mm bit.</p>
                            <p className="text-gray-300 mb-4">On one side of the disc, use the countersink drill bit to create a recess. Drill deep enough that the head of the screw sits perfectly flush on the surface of the disc.</p>
                            
                            <TutorialImage 
                                src={countersunkSrc}
                                srcSet={countersunkSrcSet}
                                alt="Countersunk center hole" 
                                className="w-full h-auto rounded-md"
                            />
                            
                        </div>

                        {/* Armature Step 3 */}
                        <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                            <h4 className="text-lg md:text-xl font-bold text-white mb-4">
                                Step 3: Assemble Plate
                            </h4>
                            <p className="text-gray-300 mb-4">Insert the conical screw through the countersunk side of the disc. Apply a drop of thread lock, then screw the eye bolt onto the threads until it is tight against the disc.</p>
                            <div className="bg-blue-900/20 border border-blue-700/50 rounded p-3 md:p-4 mb-6">
                                <h4 className="text-blue-100 font-bold mb-2 text-sm md:text-base">ℹ️ A Note on Metal Types</h4>
                                <p className="text-blue-200 text-sm mb-2">
                                    The galvanized disc alone lacks sufficient iron to create a strong magnetic connection. Therefore, it is critical that both the eye and the screw are made of ferrous metal. If you use stainless steel for these parts, the armature plate will not hold.
                                </p>
                            </div>

                            <TutorialImage 
                                src={armatureEye2Src}
                                srcSet={armatureEye2SrcSet}
                                alt="Assembled Armature" 
                                className="w-full h-auto rounded-md"
                            />

                            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <ImageOverlay 
                                    src={armatureScrewSrc}
                                    srcSet={armatureScrewSrcSet}
                                    alt="Armature screw" 
                                    className="w-full h-auto rounded-md" 
                                />
                                <ImageOverlay 
                                    src={drilledHoleSrc}
                                    srcSet={drilledHoleSrcSet}
                                    alt="Drilled hole" 
                                    className="w-full h-auto rounded-md" 
                                />
                                <ImageOverlay 
                                    src={armatureEye1Src}
                                    srcSet={armatureEye1SrcSet}
                                    alt="Armature with eye bolt" 
                                    className="w-full h-auto rounded-md" 
                                />
                            </div>

                            <div className="bg-orange-900/20 border border-orange-700/50 rounded p-3 md:p-4 mt-6">
                                <p className="text-orange-100 text-sm md:text-base">
                                    <strong>Critical Test: Check for Flatness</strong>
                                </p>
                                <p className="text-orange-100 mt-2 text-sm md:text-base">
                                    After assembly, you must test that the base of your armature plate is perfectly flat. Place it on a level surface (like a table) with the screw head facing down.
                                </p>
                                <p className="text-orange-100 mt-2 text-sm md:text-base">
                                    Try to rock the disc back and forth. If it rocks, it means your countersunk screw isn't set deep enough or the disc is warped. A plate that rocks will not make a secure connection with the magnet; it will only hold on a single point, allowing you to rock yourself free and defeating the purpose of this project.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PART 3: FINAL ASSEMBLY --- */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Part 3: Magnet Backing and Body Assembly</h2>
                    
                    <div className="space-y-6">
                        {/* Final Step 1 */}
                        <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                            <h4 className="text-lg md:text-xl font-bold text-white mb-4">
                                Step 1: Prepare Rear Eye Bolt
                            </h4>
                            <p className="text-gray-300">Take the <strong>Stainless Steel M8 Eye Bolt</strong> (the long one for the magnet's housing, not the shorter one for the armature plate). Slide the 50mm washers onto the thread so they rest against the flat base of the eye. Depending on the final size of your inset, you may need to use two or three washers to ensure a proper fit.</p>
                        </div>

                        {/* Final Step 2 */}
                        <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                            <h4 className="text-lg md:text-xl font-bold text-white mb-4">
                                Step 2: Secure Washers
                            </h4>
                            <p className="text-gray-300 mb-4">Apply a drop of thread lock to the threads and screw on the M8 nut. Ensure the washers are properly aligned and do not skew as you tighten the nut firmly.</p>
                            
                            <TutorialImage 
                                src={rearEyeSrc}
                                srcSet={rearEyeSrcSet}
                                alt="Rear eye bolt assembly" 
                                className="w-full h-auto rounded-md"
                            />
                        </div>

                        {/* Final Step 3 */}
                        <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                            <h4 className="text-lg md:text-xl font-bold text-white mb-4">
                                Step 3: Final Assembly
                            </h4>
                            <p className="text-gray-300 mb-4">Apply a few drops of thread lock inside the threaded hole on the back of the electromagnet. This prevents the liquid from being pushed out as you tighten the bolt. Firmly screw your rear eye bolt assembly into the back of the magnet, which is now seated inside its PVC housing. Cover the central hole on the magnet's face with a small piece of electrical tape to catch any excess thread lock.</p>
                            
                            <TutorialImage 
                                src={threadLockSrc}
                                srcSet={threadLockSrcSet}
                                alt="Thread lock inside the magnet" 
                                wrapperClassName="mb-4"
                                className="w-full h-auto rounded-md"
                            />

                            <div className="bg-orange-900/20 border border-orange-700/50 rounded p-3 md:p-4">
                                <p className="text-orange-100 text-sm md:text-base"><strong>Important:</strong> Tightening the rear eye bolt is critical to lock the electromagnet and prevent wires from twisting. However, do not over tighten as this can warp the PVD sleeve and jam the armature plate. As you tighten, test-fit the armature plate a few times. Find the balance where the magnet is secure, and the armature still slides smoothly.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Using the MagLock */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                        Using Your MagLock
                    </h2>
                    <p className="text-gray-300 mb-4">Congratulations! You have now fully assembled your own custom electromagnet lock, securely encased in a durable PVC housing. You have a solid attachment eye on the magnet body and a matching armature plate, also with its own eye, ready to be integrated into your self-bondage setup.</p> 
                    <p className="text-gray-300 mb-4">To make it functional, attach an appropriate electrical connector (such as a barrel jack or aviation plug) to the other end of the cable. This will allow you to easily connect it to your 12v power supply and a control system, such as a simple timer, a remote switch, or control software.</p>

                    <TutorialImage 
                        src={finishedMagLockSrc}
                        srcSet={finishedMagLockSrcSet}
                        alt="Final assembly" 
                        wrapperClassName="mb-4"
                        className="w-full h-auto rounded-md"
                    />

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <ImageOverlay 
                            src={finalTopSrc}
                            srcSet={finalTopSrcSet}
                            alt="Final assembly top view" 
                            className="w-full h-auto rounded-md" 
                        />
                        <ImageOverlay 
                            src={finalSingleSrc}
                            srcSet={finalSingleSrcSet}
                            alt="Final assembly single view" 
                            className="w-full h-auto rounded-md" 
                        />
                        <ImageOverlay 
                            src={finalPlaceSrc}
                            srcSet={finalPlaceSrcSet}
                            alt="Final assembly with armature plate" 
                            className="w-full h-auto rounded-md" 
                        />
                    </div>

                    <div className="bg-green-900/30 border border-green-600/50 rounded-lg p-3 md:p-4 mb-6">
                        <p className="text-green-100 font-semibold text-sm md:text-base">⚠️ Before putting it to its final use, thoroughly test the lock with your power source and control system to ensure it engages and disengages reliably. Play safe and have fun.</p>
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
                            <h3 className="text-lg font-semibold text-white mb-4">Electromagnet</h3>
                            <p className="text-gray-300 text-sm">12V/24V 60kg 120Lbs Electromagnetic Magnetic Lock Floor-mounted Door Holder Fire Door Suction Smokeproof Emergency Door Holder</p>

                        </div>
                        
                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-4">Armature Plate</h3>
                            <p className="text-gray-300 text-sm mb-4"><strong>Search Term:</strong> `Galvanized Iron Circular Disc Q235/A3 Metal Iron Circular Plate`</p>
                            <p className="text-gray-300 text-sm"><strong>Details:</strong> From the listing, be sure to select <strong>50mm Diameter</strong> and <strong>5mm Thickness</strong>.</p>
                        </div>
                        
                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-4">Washers</h3>
                            <p className="text-gray-300 text-sm">Forgefix FORFPWAS850 Flat Mudguard Washers ZP M8 x 50mm Pack 6</p>
                        </div>
                        
                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-4">PVC Sleeve</h3>
                            <p className="text-gray-300 text-sm">PVC fitting adhesive sleeve 50 mm</p>
                        </div>
                        
                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-4">Other Hardware</h3>
                            <p className="text-gray-300 text-sm">Eye bolt flat, conical screw counter sunken, eye bolt screw hole nut</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
);
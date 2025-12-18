import { Link } from 'react-router-dom';
import { SafetyWarning } from '../components/SafetyWarning';
import { ImageOverlay } from '../components/ImageOverlay';
import { TutorialImage } from '../components/TutorialImage';

// --- IMAGES ---

// Header
import finishedMagLockSrc from '@/images/maglock/finished_maglock.webp?w=1200&format=webp';
import finishedMagLockSrcSet from '@/images/maglock/finished_maglock.webp?w=400;800;1200&format=webp&as=srcset';

// Prelim
import disassembledMagnetSrc from '@/images/maglock/disassembled_magnet.webp?w=1200&format=webp';
import disassembledMagnetSrcSet from '@/images/maglock/disassembled_magnet.webp?w=400;800;1200&format=webp&as=srcset';

// Housing
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

// Electronics
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

// Armature
import armaturePartsSrc from '@/images/maglock/eclipse_armature_parts.webp?w=1200&format=webp';
import armaturePartsSrcSet from '@/images/maglock/eclipse_armature_parts.webp?w=400;800;1200&format=webp&as=srcset';
import armatureThreadedSrc from '@/images/maglock/eclipse_armature_threaded.webp?w=1200&format=webp';
import armatureThreadedSrcSet from '@/images/maglock/eclipse_armature_threaded.webp?w=400;800;1200&format=webp&as=srcset';
import armatureAssembledSrc from '@/images/maglock/eclipse_armature_assembled.webp?w=1200&format=webp';
import armatureAssembledSrcSet from '@/images/maglock/eclipse_armature_assembled.webp?w=400;800;1200&format=webp&as=srcset';

// Final
import backPlatePartsSrc from '@/images/maglock/back_plate_parts.webp?w=1200&format=webp';
import backPlatePartsSrcSet from '@/images/maglock/back_plate_parts.webp?w=400;800;1200&format=webp&as=srcset';
import backPlatePartiallyAssembledSrc from '@/images/maglock/back_plate_partly_assembled.webp?w=1200&format=webp';
import backPlatepartiallyAssembledSrcSet from '@/images/maglock/back_plate_partly_assembled.webp?w=400;800;1200&format=webp&as=srcset';
import backPlateAssembledEyeSrc from '@/images/maglock/back_plate_assembled.webp?w=1200&format=webp';
import backPlateAssembledSrcSet from '@/images/maglock/back_plate_assembled.webp?w=400;800;1200&format=webp&as=srcset';

import threadLockSrc from '@/images/maglock/thread_lock_inside_magnet.webp?w=1200&format=webp';
import threadLockSrcSet from '@/images/maglock/thread_lock_inside_magnet.webp?w=400;800;1200&format=webp&as=srcset';
import finalSingleSrc from '@/images/maglock/final_assembly_single.webp?w=1200&format=webp';
import finalSingleSrcSet from '@/images/maglock/final_assembly_single.webp?w=400;800;1200&format=webp&as=srcset';
import finalPlaceSrc from '@/images/maglock/final_assembly_with_plate.webp?w=1200&format=webp';
import finalPlaceSrcSet from '@/images/maglock/final_assembly_with_plate.webp?w=400;800;1200&format=webp&as=srcset';

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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 flex items-center">Overview</h2>
                    <p className="text-gray-300 mb-4">
                        This guide provides step-by-step instructions for assembling an electromagnet lock intended for self-bondage
                        applications.
                    </p>
                    <p className="text-gray-300 mb-4">
                        The build is designed to be straightforward, requiring nothing more than basic household tools (like a Philips
                        screwdriver and Allen keys), some tape, and standard parts.
                    </p>
                    <p className="text-gray-300">
                        We utilize an off-the-shelf armature plate to avoid complex drilling or machining. If you cannot source this
                        specific part, we provide a separate guide for building your own from raw materials.
                    </p>
                </div>
            </section>

            {/* Cost Breakdown */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 flex items-center">Cost Breakdown</h2>
                    <div className="grid grid-cols-3 gap-2 md:gap-6 mb-6">
                        <div className="bg-gray-800/50 p-2 md:p-4 rounded-lg text-center flex flex-col justify-start">
                            <div className="text-lg sm:text-2xl md:text-3xl font-bold text-green-400">~€50</div>
                            <div className="text-gray-400 mt-1 md:mt-2 text-[10px] sm:text-xs md:text-base leading-tight">Total Cost</div>
                        </div>
                        <div className="bg-gray-800/50 p-2 md:p-4 rounded-lg text-center flex flex-col justify-start">
                            <div className="text-lg sm:text-2xl md:text-3xl font-bold text-yellow-400">~€40</div>
                            <div className="text-gray-400 mt-1 md:mt-2 text-[10px] sm:text-xs md:text-base leading-tight">
                                Electromagnet
                            </div>
                        </div>
                        <div className="bg-gray-800/50 p-2 md:p-4 rounded-lg text-center flex flex-col justify-start">
                            <div className="text-lg sm:text-2xl md:text-3xl font-bold text-blue-400">~€10</div>
                            <div className="text-gray-400 mt-1 md:mt-2 text-[10px] sm:text-xs md:text-base leading-tight">Hardware</div>
                        </div>
                    </div>
                    <p className="text-gray-300 mb-4">
                        Building this MagLock costs around €50, a significant saving compared to commercial versions which can easily cost
                        three times as much. The electromagnet is the main expense at about €40, with the remaining €10 covering all the
                        smaller hardware.
                    </p>
                </div>
            </section>

            {/* Materials Section */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Required Materials</h2>
                    <p className="text-gray-300 mb-8">
                        This shopping list is broken down by component. Some parts are conditional based on what we can source.
                    </p>

                    {/* Base Materials */}
                    <div className="mb-8">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Core Materials</h3>
                        <ul className="list-disc list-inside md:list-outside md:pl-5 space-y-2 text-gray-300 text-sm md:text-base">
                            <li>1 x Round Electromagnet (50mm Diameter, 60kg, 12V)</li>
                            <li>1 x 50mm Eclipse Magnetics Armature Plate (Product Code M52171/50ARM)</li>
                            <li>1 x M4-to-M8 Thread Adapter (Male)</li>
                            <li>1 x M8 Eye Nut (Female)</li>
                            <li>1 x 1N4001 Flyback Diode (or similar, e.g., 1N4007)</li>
                            <li>3 x 50mm Washers with an M8 hole</li>
                            <li>1 x M8 Nut</li>
                            <li>1 x Two-Core Electrical Wire (length as needed, typically 4 meters)</li>
                            <li>1 x Cable or Zip Tie</li>
                            <li>Solder (for joining wires)</li>
                            <li>Electrical Tape or Heat Shrink Tubing (for insulating soldered wires)</li>
                            <li>Thread Locker - Recommended to create a strong connection for the nuts and bolts</li>
                        </ul>

                        <div className="mt-4 p-4 bg-gray-700/50 rounded-lg border-l-4 border-yellow-500">
                            <p className="text-gray-300 text-sm">
                                <strong>Note:</strong> If you cannot order the Eclipse armature plate, you can build your own from a raw
                                disc.
                                <Link to="/build-maglock/custom-armature" className="text-yellow-400 hover:text-yellow-300 underline ml-1">
                                    Click here for the Custom Armature Guide
                                </Link>
                                .
                            </p>
                        </div>
                    </div>

                    {/* Housing Parts */}
                    <div className="mb-8">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Housing Parts</h3>
                        <p className="text-gray-400 mb-6 italic text-sm md:text-base">
                            Our parts will depend on the PVC sleeve we can source. The goal is to have the magnet + spacer fit snugly. The
                            ~72mm "simple build" sleeve is designed to fit an off-the-shelf <strong>50-to-40mm conversion ring</strong>{' '}
                            perfectly. If our sleeve is shorter (e.g., ~65mm), we will need to cut our own spacer from 50mm PVC pipe.
                        </p>

                        <div className="mb-6">
                            <h4 className="text-base md:text-lg font-semibold text-white mb-4">
                                Path 1: The "Simple Build" (using a ~72mm sleeve):
                            </h4>
                            <ul className="list-disc list-inside md:list-outside md:pl-5 space-y-2 text-gray-300 text-sm md:text-base">
                                <li>1 x 50mm PVC Connector Sleeve (approx. 72mm long)</li>
                                <li>1 x 50-to-40-mm conversion ring</li>
                                <li>1 x Stainless Steel Eye Bolt, 45 to 50mm M8 Thread</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-base md:text-lg font-semibold text-white mb-4">
                                Path 2: The "Custom Spacer" Build (using a ~65mm sleeve):
                            </h4>
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
                    <p className="text-gray-300 mb-8">We will need the following tools to assemble the magnet.</p>

                    <div className="mb-8">
                        <ul className="list-disc list-inside md:list-outside md:pl-5 space-y-2 text-gray-300 text-sm md:text-base">
                            <li>Flat Screw Driver</li>
                            <li>Soldering Iron</li>
                            <li>Wire Stripper and Cutting pliers</li>
                            <li>Sandpaper or File (for cleaning PVC cuts and smoothing edges)</li>
                            <li>Philips screwdrivers, Allen keys, and spanners (for tightening the nut)</li>
                        </ul>
                    </div>

                    {/* Tools for Custom Spacer */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Additional Tools for Custom Spacer</h3>
                        <p className="text-gray-400 mb-4 italic text-sm md:text-base">
                            Only required if the PVC sleeve is shorter than 72mm and we need to cut a custom spacer.
                        </p>
                        <ul className="list-disc list-inside md:list-outside md:pl-5 space-y-2 text-gray-300 text-sm md:text-base">
                            <li>Cross-cutting Saw (Recommended for a perfectly flat, square cut)</li>
                            <li>
                                Alternative: A fine-toothed handsaw or PVC pipe cutter, but we must be very steady to ensure the cut is not
                                angled
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* --- PRELIMINARY STEPS --- */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Preliminary Steps</h2>

                    <div className="md:bg-gray-800/50 md:rounded-lg md:p-6 mb-6">
                        <h4 className="text-lg md:text-xl font-bold text-white mb-4">Step 1: Disassemble the Magnet</h4>
                        <p className="text-gray-300 mb-4">
                            If the electromagnet arrives in a bracket, disassemble this first. It is usually secured with a few simple
                            screws. Remove them to take out the bare 50mm round electromagnet, the only part needed for this build.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Once we have the bare magnet, check its center. We may find a small, spring-loaded pusher pin. Unscrew the
                            central hex screw to remove the pin and spring. This gives us a longer internal thread, allowing a deeper, more
                            secure eye bolt connection.
                        </p>

                        <TutorialImage
                            src={disassembledMagnetSrc}
                            srcSet={disassembledMagnetSrcSet}
                            alt="Disassembled magnet"
                            wrapperClassName="mb-4"
                            className="w-full h-auto rounded-md"
                        />
                    </div>
                </div>
            </section>

            {/* --- PART 1: MECHANICAL ASSEMBLY (MERGED) --- */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Part 1: Mechanical Assembly</h2>

                    <div className="space-y-8">
                        {/* Section A: Armature */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 border-b border-gray-600 pb-2">
                                A. Armature Plate Assembly
                            </h3>
                            <p className="text-gray-300 mb-6">
                                Using the off-the-shelf armature plate makes this process simple and requires no drilling.
                            </p>

                            <TutorialImage
                                src={armaturePartsSrc}
                                srcSet={armaturePartsSrcSet}
                                alt="Armature plate parts: Plate, screw, adapter, eye nut"
                                className="w-full h-auto rounded-md mb-6"
                            />

                            <div className="md:bg-gray-800/50 md:rounded-lg md:p-6 mb-6">
                                <h4 className="text-lg md:text-xl font-bold text-white mb-4">Step 1: Mount the Adapter</h4>
                                <p className="text-gray-300 mb-4">
                                    The armature plate comes with a countersunk M4 screw. Insert this screw through the center hole from the
                                    front, ensuring the head sits flush in the recess.
                                </p>
                                <p className="text-gray-300 mb-4">
                                    Apply a drop of thread locker inside the M4-to-M8 adapter. Screw the adapter onto the exposed M4 thread
                                    on the back of the plate and tighten it securely using a flat screwdriver.
                                </p>

                                <TutorialImage
                                    src={armatureThreadedSrc}
                                    srcSet={armatureThreadedSrcSet}
                                    alt="Armature plate with adapter attached"
                                    className="w-full h-auto rounded-md"
                                />
                            </div>

                            <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                                <h4 className="text-lg md:text-xl font-bold text-white mb-4">Step 2: Attach the Eye Nut</h4>
                                <p className="text-gray-300 mb-4">
                                    Apply thread locker to the external threads of the adapter (or inside the eye nut). Screw the M8 Eye Nut
                                    onto the adapter.
                                </p>
                                <p className="text-gray-300 mb-4">
                                    Give the assembly a final tightening with the screwdriver to ensure it is rigid. Allow the thread locker
                                    to cure for 24 hours before putting the lock into service.
                                </p>

                                <TutorialImage
                                    src={armatureAssembledSrc}
                                    srcSet={armatureAssembledSrcSet}
                                    alt="Fully assembled armature plate"
                                    className="w-full h-auto rounded-md"
                                />
                            </div>
                        </div>

                        {/* Section B: Magnet Backing */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 border-b border-gray-600 pb-2">
                                B. Magnet Backing Preparation
                            </h3>

                            <div className="md:bg-gray-800/50 md:rounded-lg md:p-6 mb-6">
                                <h4 className="text-lg md:text-xl font-bold text-white mb-4">Step 1: Prepare Rear Eye Bolt</h4>
                                <p className="text-gray-300 mb-4">
                                    Take the <strong>Stainless Steel M8 Eye Bolt</strong> (the long one for the magnet's housing, not the
                                    shorter one for the armature plate). Slide the 50mm washers onto the thread so they rest against the
                                    flat base of the eye. Depending on the final size of the inset, we may need to use two or three washers
                                    to ensure a proper fit.
                                </p>

                                <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    <ImageOverlay
                                        src={backPlatePartsSrc}
                                        srcSet={backPlatePartsSrcSet}
                                        alt="Back plate parts"
                                        className="w-full h-auto rounded-md"
                                    />
                                    <ImageOverlay
                                        src={backPlatePartiallyAssembledSrc}
                                        srcSet={backPlatepartiallyAssembledSrcSet}
                                        alt="Back plate partially assembed"
                                        className="w-full h-auto rounded-md"
                                    />
                                </div>
                            </div>

                            <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                                <h4 className="text-lg md:text-xl font-bold text-white mb-4">Step 2: Secure Washers</h4>
                                <p className="text-gray-300 mb-4">
                                    Apply a drop of thread lock to the threads and screw on the M8 nut. Ensure the washers are properly
                                    aligned and do not skew as we tighten the nut firmly.
                                </p>

                                <TutorialImage
                                    src={backPlateAssembledEyeSrc}
                                    srcSet={backPlateAssembledSrcSet}
                                    alt="Back plate fully assembed"
                                    className="w-full h-auto rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PART 2: HOUSING --- */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Part 2: Magnet Housing Assembly</h2>

                    <div className="space-y-6">
                        {/* Housing Step 1 */}
                        <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                            <h4 className="text-lg md:text-xl font-bold text-white mb-4">Step 1: Install the Conversion Ring</h4>
                            <p className="text-gray-300 mb-4">
                                Push the 50-to-40mm conversion ring into one of the sides of PVC Connector so that it fits tightly against
                                the ridge in the middle. Optionally, apply some PVC cement to glue the inset in place.
                            </p>
                            <div className="bg-blue-900/20 border border-blue-700/50 rounded p-3 mb-4">
                                <p className="text-blue-200 text-sm">
                                    <strong>Alternative (Path 2):</strong> Use the saw to cut a ~27mm long piece from the 50mm PVC pipe.
                                    Clean and deburr the cut edge using sandpaper or a file.
                                </p>
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
                            <h4 className="text-lg md:text-xl font-bold text-white mb-4">Step 2: Drill Wire Hole and Feed Wire</h4>
                            <p className="text-gray-300 mb-4">
                                First, we will drill the hole for the power cable. This hole must go through <strong>both</strong> the outer{' '}
                                <strong>PVC sleeve</strong> and the <strong>inner PVC insert</strong> (the conversion ring or custom spacer)
                                installed in Step 1.
                            </p>
                            <p className="text-gray-300 mb-4">
                                Drill a single hole (e.g., 6mm) through the <strong>side wall</strong> of the PVC sleeve, in the area where
                                the insert is located. Continue drilling in a straight line, so the bit passes through the sleeve's wall and
                                then immediately through the insert's wall, creating one clean path.
                            </p>
                            <p className="text-gray-300 mb-4">
                                Next, feed the end of the electrical wire through this new hole. Push it from the <strong>outside</strong>{' '}
                                of the sleeve, through both walls just drilled, so the end of the wire is now inside the central cavity
                                where the magnet will be seated.
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
                    </div>
                </div>
            </section>

            {/* --- PART 3: ELECTRONICS ASSEMBLY --- */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Part 3: Electronics Assembly</h2>

                    <div className="space-y-6">
                        {/* Electronics Step 1 */}
                        <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                            <h4 className="text-lg md:text-xl font-bold text-white mb-4">Step 1: Install Flyback Diode & Solder Wires</h4>

                            <p className="text-gray-300 mb-4">
                                This step is critical for protecting the electronics. We will first install a flyback diode directly onto
                                the magnet's terminals before attaching the main power wires.
                            </p>

                            <h5 className="text-base md:text-lg font-semibold text-white mb-4">Step 1a: Install the Flyback Diode</h5>
                            <p className="text-gray-300 mb-4">
                                A diode has polarity. Look for a <strong>silver or white band</strong> on one end of the diode; this is the{' '}
                                <strong>cathode (-)</strong>. The other end is the <strong>anode (+)</strong>.
                            </p>
                            <p className="text-gray-300 mb-4">
                                We must install this diode in <strong>reverse bias</strong>. This means the diode's band (cathode) connects
                                to the magnet's <strong>POSITIVE (+)</strong> terminal, and the non-banded side (anode) connects to the
                                magnet's <strong>NEGATIVE (-)</strong> terminal.
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
                                Solder the diode's legs directly across the magnet's two terminals, ensuring the polarity is correct as
                                described. Trim any excess wire from the diode's legs after soldering.
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
                                <h4 className="text-blue-100 font-bold mb-4 text-sm md:text-base">
                                    What is a Flyback Diode and Why is it Essential?
                                </h4>
                                <p className="text-blue-200 text-sm mb-4">
                                    An electromagnet is an <strong>inductor</strong>. When we cut the power, its collapsing magnetic field
                                    creates a massive, instantaneous <strong>reverse-voltage spike</strong> (also called "inductive
                                    kickback"). This spike can be hundreds of volts and will instantly destroy sensitive electronics like
                                    timers, relays, or microcontrollers.
                                </p>
                                <p className="text-blue-200 text-sm mb-4">
                                    The flyback diode is connected "backwards" (in reverse bias) across the magnet. When the power is on, no
                                    current flows through it. But when we cut the power, the reverse-voltage spike is exactly the right
                                    polarity to flow <em>forward</em> through the diode. This gives the spike a safe, short-circuit path to
                                    loop back through the magnet coil, where it harmlessly dissipates as a tiny amount of heat.
                                </p>

                                <p className="text-blue-200 text-sm mt-3">
                                    <strong>Never operate an electromagnet with electronic controls without one.</strong>
                                </p>
                            </div>

                            <h5 className="text-base md:text-lg font-semibold text-white mb-4">
                                Step 1b: Solder the Power Wires and Insulate Connections
                            </h5>
                            <p className="text-gray-300 mb-4">
                                Strip about 1cm of insulation from the two main power wires. Solder them to the same terminals where we just
                                attached the diode, matching the polarity.
                            </p>

                            <div className="bg-red-900/20 border border-red-700/50 rounded p-3 md:p-4 mb-4">
                                <p className="text-red-100 mb-2 text-sm md:text-base">
                                    In the electromagnet shown in the sourced materials the 12v wiring is as follows: red + yellow connect
                                    to the <strong>positive (+)</strong> terminal (this is where the diode's band should be). Black and
                                    orange connect to the <strong>negative (-)</strong> terminal. Otherwise, follow the wiring instructions
                                    that came with our electromagnet.
                                </p>
                                <p className="text-red-100 font-bold text-sm md:text-base">
                                    ⚠️ Test the wiring of the magnet using the 12v battery after installing the diode to ensure it functions
                                    correctly.
                                </p>
                            </div>

                            <TutorialImage
                                src={magnetWiresSrc}
                                srcSet={magnetWiresSrcSet}
                                alt="Soldering wires to magnet terminals"
                                className="w-full h-auto rounded-md"
                            />
                        </div>

                        {/* Electronics Step 2 */}
                        <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                            <h4 className="text-lg md:text-xl font-bold text-white mb-4">Step 2: Insulate Connections</h4>
                            <p className="text-gray-300 mb-4">
                                Cover all bare connections (the power wire joints <strong>and</strong> the flyback diode's legs)
                                individually with electrical tape or heat shrink tubing to prevent any short circuits.
                            </p>
                            <TutorialImage
                                src={magnetInsulationSrc}
                                srcSet={magnetInsulationSrcSet}
                                alt="Magnet terminals with diode and wires insulated"
                                className="w-full h-auto rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PART 4: FINAL ASSEMBLY --- */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Part 4: Final Assembly</h2>

                    <div className="space-y-6">
                        {/* Final Step 1 */}
                        <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                            <h4 className="text-lg md:text-xl font-bold text-white mb-4">Step 1: Add Strain Relief</h4>
                            <p className="text-gray-300 mb-4">
                                On the inside of the housing, place a cable tie tightly around the main electrical wire. Cut the long end
                                off, leaving the small square tab in place. This tab will act as a "stop," preventing the wire from being
                                pulled directly from the solder joints if the cord is tugged.
                            </p>

                            <TutorialImage src={zipTieSrc} srcSet={zipTieSrcSet} alt="Strain relief" className="w-full h-auto rounded-md" />
                        </div>

                        {/* Final Step 2 */}
                        <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                            <h4 className="text-lg md:text-xl font-bold text-white mb-4">Step 2: Assemble Housing</h4>
                            <p className="text-gray-300 mb-4">
                                Apply a few drops of thread lock inside the threaded hole on the back of the electromagnet. This prevents
                                the liquid from being pushed out as we tighten the bolt. Firmly screw the rear eye bolt assembly (prepared
                                in Part 1) into the back of the magnet, which is now seated inside its PVC housing. Cover the central hole
                                on the magnet's face with a small piece of electrical tape to catch any excess thread lock.
                            </p>

                            <TutorialImage
                                src={threadLockSrc}
                                srcSet={threadLockSrcSet}
                                alt="Thread lock inside the magnet"
                                wrapperClassName="mb-4"
                                className="w-full h-auto rounded-md"
                            />

                            <div className="bg-orange-900/20 border border-orange-700/50 rounded p-3 md:p-4">
                                <p className="text-orange-100 text-sm md:text-base">
                                    <strong>Important:</strong> Tightening the rear eye bolt is critical to lock the electromagnet and
                                    prevent wires from twisting. However, do not over tighten as this can warp the PVD sleeve and jam the
                                    armature plate. As we tighten, test-fit the armature plate a few times. Find the balance where the
                                    magnet is secure, and the armature still slides smoothly.
                                </p>
                            </div>

                            <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
                        </div>
                    </div>
                </div>
            </section>

            {/* Using the MagLock */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">Using Your MagLock</h2>
                    <p className="text-gray-300 mb-4">
                        Congratulations! We have now fully assembled our own custom electromagnet lock, securely encased in a durable PVC
                        housing. We have a solid attachment eye on the magnet body and a matching armature plate, also with its own eye,
                        ready to be integrated into a self-bondage setup.
                    </p>
                    <p className="text-gray-300 mb-4">
                        To make it functional, attach an appropriate electrical connector (such as a barrel jack or aviation plug) to the
                        other end of the cable. This will allow us to easily connect it to the 12v battery and a control system, such as a
                        simple timer, a remote switch, or control software.
                    </p>

                    <TutorialImage
                        src={finishedMagLockSrc}
                        srcSet={finishedMagLockSrcSet}
                        alt="Final assembly"
                        wrapperClassName="mb-4"
                        className="w-full h-auto rounded-md"
                    />

                    <div className="bg-green-900/30 border border-green-600/50 rounded-lg p-3 md:p-4 mb-6">
                        <p className="text-green-100 font-semibold text-sm md:text-base">
                            ⚠️ Before putting it to its final use, thoroughly test the lock with the battery and control system to ensure it
                            engages and disengages reliably. Play safe and have fun.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sourcing Materials */}
            <section className="my-8 md:my-16">
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">Sourcing Materials</h2>
                    <p className="text-gray-300 mb-6">
                        Finding the specific components is straightforward. Here are a few suggested search terms for AliExpress or similar
                        online marketplaces, focusing on the more specialized parts:
                    </p>

                    <div className="space-y-4">
                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-4">Electromagnet</h3>
                            <p className="text-gray-300 text-sm">
                                12V/24V 60kg 120Lbs Electromagnetic Magnetic Lock Floor-mounted Door Holder Fire Door Suction Smokeproof
                                Emergency Door Holder
                            </p>
                        </div>

                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-4">Armature Plate</h3>
                            <p className="text-gray-300 text-sm mb-4">
                                <strong>Eclipse Magnetics (Code M52171/50ARM)</strong>.
                            </p>
                            <p className="text-gray-300 text-sm">
                                If building custom: Galvanized Iron Circular Disc Q235/A3 Metal Iron Circular Plate (50mm Diameter, 5mm
                                Thickness).
                            </p>
                        </div>

                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-4">Washers</h3>
                            <p className="text-gray-300 text-sm">Forgefix FORFPWAS850 Flat Mudguard Washers ZP M8 x 50mm Pack 6</p>
                        </div>

                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-4">PVC Sleeve</h3>
                            <p className="text-gray-300 text-sm">PVC fitting adhesive sleeve 50 mm</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
);

// src/pages/BuildMagLockPage.tsx

import { SafetyWarning } from "../components/SafetyWarning";

export const BuildMagLockPage = () => (
    <>
        <div className="py-12">
            <h1 className="text-4xl font-bold text-white text-center mb-6">Build the MagLock</h1>
            <p className="text-xl text-center text-gray-400 mb-12 max-w-3xl mx-auto">
                Easy & Low-Cost DIY Electromagnet Lock
            </p>

            <img 
                src="/maglock/finished_maglock.jpg" 
                alt="Finished Lobster MagLock" 
                className="w-full max-w-4xl mx-auto h-auto rounded-lg mb-12 shadow-lg bg-gray-700"
                onError={(e) => (e.currentTarget.src = 'https://placehold.co/896x504/2D3748/E2E8F0?text=Image+Missing')}
            />

            <SafetyWarning />

            {/* Introduction */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                        Overview
                    </h2>
                    <p className="text-gray-300 mb-4">This guide provides step-by-step instructions for assembling an electromagnet lock intended for self-bondage applications.</p>
                    <p className="text-gray-300 mb-4">The build can be very straightforward, requiring nothing more than basic household tools (like a Philips screwdriver and Allen keys), some tape, and standard parts sold at every major hardware store, as long as you can source all components with the exact sizes specified.</p>
                    <p className="text-gray-300">However, if you need to use components with different dimensions, these instructions provide alternatives. Be aware that these workarounds do require more specialized tools, such as a drill press and a cross-cut saw. While it's theoretically possible to perform these steps using hand tools (like a saw and a handheld power drill), it will be significantly more difficult to get the perfectly straight holes and flush cuts that are critical for this project.</p>
                </div>
            </section>

            {/* Cost Breakdown */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                        Cost Breakdown
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                            <div className="text-3xl font-bold text-green-400">~€50</div>
                            <div className="text-gray-400 mt-2">Total Cost</div>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                            <div className="text-3xl font-bold text-yellow-400">~€40</div>
                            <div className="text-gray-400 mt-2">Electromagnet</div>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                            <div className="text-3xl font-bold text-blue-400">~€10</div>
                            <div className="text-gray-400 mt-2">Hardware</div>
                        </div>
                    </div>
                    <p className="text-gray-300 mb-3">The base cost for the MagLock is about 50 Euro, offering considerable savings, as commercially available locks easily cost three times as much.</p>
                    <p className="text-gray-300 mb-3">The most expensive part by far is the electromagnet, which runs around 40 Euro on Amazon, including shipping. The remaining 10 Euro is for smaller hardware, though you should plan on spending a bit more because it can be difficult to find individual parts.</p>
                    <p className="text-gray-300">Small parts like screws, washers, and bolts are often sold in packs online rather than individually, which will increase your initial spending. (Your local hardware store might sell them apiece). The upside of buying in packs is that you'll have enough extra parts to build a couple of magnet locks, making your setup more versatile.</p>
                </div>
            </section>

            {/* Materials Section */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">Required Materials</h2>
                    <p className="text-gray-300 mb-8">This shopping list is broken down by component. Some parts are conditional based on what you can source.</p>

                    {/* Base Materials */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-4">Base Materials</h3>
                        <p className="text-gray-400 mb-4 italic">Core parts required for every build</p>
                        <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                            <li>1 x Electromagnet (50mm Diameter, 60kg Holder Strength, 12V)</li>
                            <li>3 x 50mm Washers with an M8 hole</li>
                            <li>1 x M8 Nut</li>
                            <li>1 x Two-Core Electrical Wire (length as needed, typically 4 meters)</li>
                            <li>1 x Cable or Zip Tie</li>
                            <li>Solder (for joining wires)</li>
                            <li>Electrical Tape or Heat Shrink Tubing (for insulating soldered wires)</li>
                            <li><i>Alternative to Solder/Tape: 1 x Terminal Block (for a no-solder connection)</i></li>
                        </ul>
                    </div>

                    {/* Armature Plate Parts */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-4">Armature Plate Parts</h3>
                        <p className="text-gray-400 mb-6 italic">Your parts will depend on whether your electromagnet includes a 50mm armature plate.</p>
                        
                        <div className="mb-6">
                            <h4 className="text-lg font-semibold text-white mb-3">Path A: If your magnet *includes* a 50mm armature plate:</h4>
                            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                                <li>1 x Galvanized Iron Eye Bolt, M8 Thread, 5 to 8mm long</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Path B: If your magnet *does NOT* include a 50mm armature plate:</h4>
                            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                                <li>1 x 50mm Galvanized Iron Circular Disc (Armature Plate), 5mm thick</li>
                                <li>1 x M6 Galvanized Iron Countersunk Screw, length 16mm</li>
                                <li>1 x Galvanized Iron Eye Bolt, M6 hole</li>
                            </ul>
                        </div>
                    </div>

                    {/* Housing Parts */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-4">Housing Parts</h3>
                        <p className="text-gray-400 mb-6 italic">Your parts will depend on the PVC sleeve you can source. The goal is to have the magnet + spacer fit snugly. The ~72mm "simple build" sleeve is designed to fit the `50-to-44mm conversion ring` perfectly. If your sleeve is shorter (e.g., ~65mm), you will need to cut your own spacer from `50mm PVC pipe`.</p>

                        <div className="mb-6">
                            <h4 className="text-lg font-semibold text-white mb-3">Path 1: The "Simple Build" (using a ~72mm sleeve):</h4>
                            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                                <li>1 x 50mm PVC Connector Sleeve (approx. 72mm long)</li>
                                <li>1 x 50-to-44mm conversion ring</li>
                                <li>1 x Stainless Steel Eye Bolt, 45 to 50mm M8 Thread</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Path 2: The "Custom Spacer" Build (using a ~65mm sleeve):</h4>
                            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                                <li>1 x 50mm PVC Connector Sleeve (approx. 65mm long)</li>
                                <li>1 x 50mm PVC pipe (typically sold per meter, will be cut down to ~27mm)</li>
                                <li>1 x Stainless Steel Eye Bolt, 40 to 45mm M8 Thread</li>
                            </ul>
                        </div>
                    </div>

                    {/* Recommended Materials */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Recommended Materials</h3>
                        <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                            <li>Thread Locker - Recommended to create a strong connection for the nuts and bolts</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">Required Tools</h2>
                    <p className="text-gray-300 mb-8">Tool requirements depend on your chosen materials and build approach.</p>

                    {/* Base Tools */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-4">Base Tools (Required for All Builds)</h3>
                        <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                            <li>Power Drill with a 6 or 8mm drill bit (for making a hole in the PVC housing)</li>
                            <li>Soldering Iron (if you are soldering your connections)</li>
                            <li>Small Screwdriver (if you are using a terminal block)</li>
                            <li>Wire Stripper (Alternative: Sharp knife)</li>
                            <li>Sandpaper or File (for cleaning PVC cuts and smoothing edges)</li>
                            <li>Philips screwdrivers, Allen keys, and spanners</li>
                        </ul>
                    </div>

                    {/* Tools for Armature */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-4">Additional Tools for Armature</h3>
                        <p className="text-gray-400 mb-4 italic">Only required if your magnet did not come with a 50mm armature plate and you need to drill your own.</p>
                        <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                            <li>Drill Press (Highly recommended for a straight hole) or a Hand Drill</li>
                            <li>Center Finder</li>
                            <li>Center Punch & Hammer</li>
                            <li>Drill Bits for Metal (2mm, 4mm, 6mm and 8mm to step up the hole size)</li>
                            <li>Countersink Drill Bit (Metal), sized for your M8 countersunk screw (typically a 90° angle)</li>
                        </ul>
                    </div>

                    {/* Tools for Custom Spacer */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Additional Tools for Custom Spacer</h3>
                        <p className="text-gray-400 mb-4 italic">Only required if your PVC sleeve is shorter than 72mm and you need to cut a custom spacer.</p>
                        <ul className="list-disc list-outside pl-5 space-y-2 text-gray-300">
                            <li>Cross-cutting Saw (Recommended for a perfectly flat, square cut)</li>
                            <li>Alternative: A fine-toothed handsaw or PVC pipe cutter, but you must be very steady to ensure the cut is not angled</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Assembly Instructions */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">Assembly Instructions</h2>
                    <p className="text-gray-300 mb-8">Before starting the main build, complete the preliminary steps. Then proceed through the three main assembly parts.</p>

                    {/* Preliminary Steps */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-200 mb-6 pb-3 border-b border-gray-700">Preliminary Steps</h3>
                        
                        {/* Step 1 */}
                        <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                            <h4 className="text-xl font-bold text-white mb-4">
                                Step 1: Disassemble the Magnet
                            </h4>
                            <p className="text-gray-300 mb-4">The electromagnet will arrive in a metal factory housing. Disassemble this first. It is usually secured with a few simple screws. Remove them to take out the bare 50mm round electromagnet, the only part needed for this build.</p>
                            <p className="text-gray-300 mb-4">Once you have the bare magnet, check its center. You may find a small, spring-loaded pusher pin. Unscrew the central hex screw to remove the pin and spring. This gives you a longer internal thread, allowing a deeper, more secure eye bolt connection.</p>
                            <img src="/maglock/disassembled_magnet.jpg" alt="Disassembled magnet" className="w-full h-auto rounded-md my-3 bg-gray-700" />
                        </div>

                        {/* Step 2 */}
                        <div className="bg-gray-800/50 rounded-lg p-6">
                            <h4 className="text-xl font-bold text-white mb-4">
                                Step 2: Shape the Armature Disc
                            </h4>
                            <div className="bg-yellow-900/20 border border-yellow-700/50 rounded p-3 mb-6">
                                <p className="text-yellow-200">⚠️ This step is only required if your building your own armature plate.</p>
                            </div>

                            <p className="text-gray-300 mb-4">The 50mm armature metal discs are the same size as the inner diameter of the PVC connector sleeve. This can make them a very tight fit, and it's easy for the disc to become "stuck" or jammed sideways if it doesn't enter exactly perpendicular to the connector sleeve.</p>
                            <p className="text-gray-300 mb-4">To solve this issue, the discs need to be shaped first. Using a light piece of sandpaper, take a bit of the edge off (chamfer or round the edge slightly). Give it a couple of test fits in the PVC sleeve to make sure the disc enters and exits smoothly.</p>
                            <img src="https://placehold.co/600x300/2D3748/E2E8F0?text=2.+Sanding+Armature+Disc+Edge" alt="Sanding armature disc" className="w-full h-auto rounded-md my-3 bg-gray-700" />
                        </div>
                    </div>

                    {/* Part 1: Housing */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-200 mb-6 pb-3 border-b border-gray-700">Part 1: Magnet Housing Assembly</h3>
                        
                        <div className="space-y-6">
                            {/* Housing Step 1 */}
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">
                                    Step 1: Install the Conversion Ring
                                </h4>
                                <p className="text-gray-300 mb-3">Push the 50-to-40mm conversion ring into one of the sides of PVC Connector so that it fits tightly against the ridge in the middle. Optionally, apply some PVC cement to glue the inset in place.</p>
                                <div className="bg-blue-900/20 border border-blue-700/50 rounded p-3 mb-3">
                                    <p className="text-blue-200 text-sm"><strong>Alternative (Path 2):</strong> Use your saw to cut a ~27mm long piece from the 50mm PVC pipe. Clean and deburr the cut edge using sandpaper or a file.</p>
                                </div>
                                <img src="/maglock/conversion_ring_inside_pcv_sleeve.jpg" alt="Installing conversion ring" className="w-full h-auto rounded-md bg-gray-700" />
                                
                                <div className="mt-4 grid grid-cols-3 gap-4">
                                    <img 
                                        src="maglock/two_sizes_of_pvc_sleeves.jpg" 
                                        alt="Two sizes of PVC sleeves" 
                                        className="w-full h-auto rounded-md bg-gray-700" 
                                    />
                                    <img 
                                        src="maglock/ring_does_not_fit_correctly.jpg" 
                                        alt="The ring does not fit correctly" 
                                        className="w-full h-auto rounded-md bg-gray-700" 
                                    />
                                    <img 
                                        src="maglock/custom_and_off-the-shelve_spacer.jpg" 
                                        alt="Both custom-cut and off-the-shelf spacers" 
                                        className="w-full h-auto rounded-md bg-gray-700" 
                                    />
                                </div>

                            </div>

                            {/* Housing Step 2 */}
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">
                                    Step 2: Drill the Wire Hole
                                </h4>
                                <p className="text-gray-300">Drill a hole (e.g., 6mm, or the size of your wire) in the center of the PVC insert you just pushed in.</p>
                            </div>

                            {/* Housing Step 3 */}
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">
                                    Step 3: Feed the Wire
                                </h4>
                                <p className="text-gray-300">Push the end of your electrical wire through the hole from the outside to the inside.</p>
                            </div>

                            {/* Housing Step 4 */}
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">
                                    Step 4: Solder the Magnet
                                </h4>
                                <p className="text-gray-300 mb-4">Strip about 1cm of insulation from the two wires. Solder these wires to the leads on the 12V electromagnet.</p>
                                <div className="bg-red-900/20 border border-red-700/50 rounded p-4 mb-4">
                                    <p className="text-red-100 mb-2">In the electromagnet shown in the sourced materials the 12v wiring is as follows: red + yellow connect to the positive (+) terminal, black and orange connect to the negative (-) terminal. Otherwise, follow the wiring instructions that came with the electromagnet.</p>
                                    <p className="text-red-100 font-bold">⚠️ Test the wiring of your magnet using the 12v power supply before assembling the lock to ensure it functions correctly.</p>
                                </div>
                                <img src="/maglock/soldering_wires.jpg" alt="Soldering wires" className="w-full h-auto rounded-md mb-3 bg-gray-700" />
                                <div className="bg-blue-900/20 border border-blue-700/50 rounded p-3">
                                    <p className="text-blue-200 text-sm"><strong>No-Solder Alternative:</strong> You can use a terminal block. Securely fasten the two magnet wires into two ports on one side of the block, and fasten your main power wires into the corresponding ports on the other side.</p>
                                </div>
                            </div>

                            {/* Housing Step 5 */}
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">
                                    Step 5: Insulate Connections (If Soldered)
                                </h4>
                                <p className="text-gray-300">If you soldered your wires, cover the bare connections individually with electrical tape or heat shrink tubing to prevent any short circuits. (This step is not needed if you used a terminal block).</p>
                            </div>

                            {/* Housing Step 6 */}
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">
                                    Step 6: Seat the Magnet
                                </h4>
                                <p className="text-gray-300">Carefully place the electromagnet inside the PVC sleeve, with the main wire trailing out the hole. The magnet should sit snugly on the internal ridge of the connector sleeve.</p>
                            </div>

                            {/* Housing Step 7 */}
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">
                                    Step 7: Add Strain Relief
                                </h4>
                                <p className="text-gray-300 mb-4">On the inside of the housing, place a cable tie tightly around the electrical wire. Cut the long end off, leaving the small square tab in place. This tab will act as a "stop," preventing the wire from being pulled directly from the solder joints if the cord is tugged.</p>
                                <img src="/maglock/zip_tie_strain_relief.jpg" alt="Strain relief" className="w-full h-auto rounded-md bg-gray-700" />
                            </div>
                        </div>
                    </div>

                    {/* Part 2: Armature Plate */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-200 mb-6 pb-3 border-b border-gray-700">Part 2: Armature Plate Assembly</h3>
                        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded p-3 mb-6">
                            <p className="text-yellow-200">⚠️ This entire section is only required if your electromagnet did NOT come with a 50mm armature plate and you are following "Path B" from the materials list and building your own.</p>
                        </div>
                        
                        <div className="space-y-6">
                            {/* Armature Step 1 */}
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">
                                    Step 1: Find Center
                                </h4>
                                <p className="text-gray-300">Use the center finder to locate the center of the 50mm galvanized iron disc. Mark this spot with the center punch.</p>
                            </div>

                            {/* Armature Step 2 */}
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">
                                    Step 2: Drill Hole
                                </h4>
                                <p className="text-gray-300 mb-4">Drill a 6mm hole through the center mark by stepping up your drill bit sizes. Start with a 2mm drill bit, move to a 4mm bit, and finish with the 6mm bit.</p>
                                <img src="maglock/drilled_countersunk_hole.jpg" alt="Drilling center hole" className="w-full h-auto rounded-md bg-gray-700" />
                                
                                <div className="mt-4 grid grid-cols-3 gap-4">
                                    <img 
                                        src="maglock/armature_screw.jpg" 
                                        alt="Two sizes of PVC sleeves" 
                                        className="w-full h-auto rounded-md bg-gray-700" 
                                    />
                                    <img 
                                        src="maglock/drilled_hole.jpg" 
                                        alt="The ring does not fit correctly" 
                                        className="w-full h-auto rounded-md bg-gray-700" 
                                    />
                                    <img 
                                        src="maglock/armature_with_eye_1.jpg" 
                                        alt="Both custom-cut and off-the-shelf spacers" 
                                        className="w-full h-auto rounded-md bg-gray-700" 
                                    />
                                </div>

                            </div>

  
                            {/* Armature Step 3 */}
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">
                                    Step 3: Countersink
                                </h4>
                                <p className="text-gray-300">On one side of the disc, use the countersink drill bit to create a recess. Drill deep enough that the head of the screw sits perfectly flush on the surface of the disc.</p>
                            </div>

                            {/* Armature Step 4 */}
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">
                                    Step 4: Assemble Plate
                                </h4>
                                <p className="text-gray-300 mb-4">Insert the conical screw through the countersunk side of the disc. Apply a drop of thread lock, then screw the eye bolt onto the threads until it is tight against the disc.</p>
                                <img src="maglock/armature_with_eye_2.jpg" alt="Assembled Armature" className="w-full h-auto rounded-md bg-gray-700" />
                            </div>
                        </div>
                    </div>

                    {/* Part 3: Final Assembly */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-200 mb-6 pb-3 border-b border-gray-700">Part 3: Magnet Backing and Body Assembly</h3>
                        
                        <div className="space-y-6">
                            {/* Final Step 1 */}
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">
                                    Step 1: Prepare Rear Eye Bolt
                                </h4>
                                <p className="text-gray-300">Take the <strong>Stainless Steel M8 Eye Bolt</strong> (the long one for the magnet's housing, not the shorter one for the armature plate). Slide the 50mm washers onto the thread so they rest against the flat base of the eye. Depending on the final size of your inset, you may need to use two or three washers to ensure a proper fit.</p>
                            </div>

                            {/* Final Step 2 */}
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">
                                    Step 2: Secure Washers
                                </h4>
                                <p className="text-gray-300 mb-4">Apply a drop of thread lock to the threads and screw on the M8 nut. Ensure the washers are properly aligned and do not skew as you tighten the nut firmly.</p>
                                <img src="maglock/assembled_rear_eye_bolt.jpg" alt="Rear eye bolt assembly" className="w-full h-auto rounded-md bg-gray-700" />
                            </div>

                            {/* Final Step 3 */}
                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h4 className="text-xl font-bold text-white mb-4">
                                    Step 3: Final Assembly
                                </h4>
                                <p className="text-gray-300 mb-4">Apply a few drops of thread lock to the threads of your rear eye bolt assembly. Screw it firmly into the back of the electromagnet, which is now seated inside its PVC housing.</p>
                                <img src="maglock/finished_maglock.jpg" alt="Final assembly" className="w-full h-auto rounded-md mb-4 bg-gray-700" />
                                <div className="bg-orange-900/20 border border-orange-700/50 rounded p-4">
                                    <p className="text-orange-100"><strong>Important:</strong> Tightening the rear eye bolt is critical to lock the electromagnet and prevent wires from twisting. However, do not over tighten as this can warp the PVC sleeve and jam the armature plate. As you tighten, test-fit the armature plate a few times. Find the balance where the magnet is secure, and the armature still slides smoothly.</p>
                                </div>

                                <div className="mt-4 grid grid-cols-3 gap-4">
                                    <img 
                                        src="maglock/final_assembly_top.jpg" 
                                        alt="Final assembly top view" 
                                        className="w-full h-auto rounded-md bg-gray-700" 
                                    />
                                    <img 
                                        src="maglock/final_assembly_single.jpg" 
                                        alt="Final assembly single view" 
                                        className="w-full h-auto rounded-md bg-gray-700" 
                                    />
                                    <img 
                                        src="maglock/final_assembly_with_place.jpg" 
                                        alt="Final assembly with armature plate" 
                                        className="w-full h-auto rounded-md bg-gray-700" 
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Using the MagLock */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                        Using Your MagLock
                    </h2>
                    <p className="text-gray-300 mb-4">Congratulations! You have now fully assembled your own custom electromagnet lock, securely encased in a durable PVC housing. You have a solid attachment eye on the magnet body and a matching armature plate, also with its own eye, ready to be integrated into your self-bondage setup.</p> 
                    <p className="text-gray-300 mb-4">To make it functional, attach an appropriate electrical connector (such as a barrel jack, aviation plug, or terminal block) to the other end of the cable. This will allow you to easily connect it to your 12v power supply and a control system, such as a simple timer, a remote switch, or control software.</p>
                    
                    <div className="bg-green-900/30 border border-green-600/50 rounded-lg p-4 mb-6">
                        <p className="text-green-100 font-semibold">⚠️ Before putting it to its final use, thoroughly test the lock with your power source and control system to ensure it engages and disengages reliably. Play safe and have fun.</p>
                    </div>
                    
                </div>
            </section>

            {/* Sourcing Materials */}
            <section className="my-16">
                <div className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                        Sourcing Materials
                    </h2>
                    <p className="text-gray-300 mb-6">Finding the specific components is straightforward. Here are a few suggested search terms for AliExpress or similar online marketplaces, focusing on the more specialized parts:</p>
                    
                    <div className="space-y-4">
                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-2">Electromagnet</h3>
                            <p className="text-gray-300 text-sm">12V/24V 60kg 120Lbs Electromagnetic Magnetic Lock Floor-mounted Door Holder Fire Door Suction Smokeproof Emergency Door Holder</p>

                        </div>
                        
                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-2">Armature Plate</h3>
                            <p className="text-gray-300 text-sm mb-2"><strong>Search Term:</strong> `Galvanized Iron Circular Disc Q235/A3 Metal Iron Circular Plate`</p>
                            <p className="text-gray-300 text-sm"><strong>Details:</strong> From the listing, be sure to select <strong>50mm Diameter</strong> and <strong>5mm Thickness</strong>.</p>
                        </div>
                        
                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-2">Washers</h3>
                            <p className="text-gray-300 text-sm">Forgefix FORFPWAS850 Flat Mudguard Washers ZP M8 x 50mm Pack 6</p>
                        </div>
                        
                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-2">PVC Sleeve</h3>
                            <p className="text-gray-300 text-sm">PVC fitting adhesive sleeve 50 mm</p>
                        </div>
                        
                        <div className="bg-gray-700/50 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-white mb-2">Other Hardware</h3>
                            <p className="text-gray-300 text-sm">Eye bolt flat, conical screw counter sunken, eye bolt screw hole nut</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
);
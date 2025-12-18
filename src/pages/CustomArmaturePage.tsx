import { Link } from 'react-router-dom';
import { ImageOverlay } from '../components/ImageOverlay';
import { TutorialImage } from '../components/TutorialImage';

// --- IMAGES ---
// Prelim (Sanding)
import roughDiscSrc from '@/images/maglock/discs_rough.webp?w=1200&format=webp';
import roughDiscSrcSet from '@/images/maglock/discs_rough.webp?w=400;800;1200&format=webp&as=srcset';
import sandedDiscSrc from '@/images/maglock/discs_sanded.webp?w=1200&format=webp';
import sandedDiscSrcSet from '@/images/maglock/discs_sanded.webp?w=400;800;1200&format=webp&as=srcset';

// Assembly
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

export const CustomArmaturePage = () => (
    <div className="py-6 md:py-12">
        <Link to="/build-maglock" className="text-indigo-400 hover:text-indigo-300 mb-6 inline-block font-medium">
            &larr; Back to MagLock Guide
        </Link>

        <h1 className="text-2xl md:text-4xl font-bold text-white text-center mb-4 md:mb-6">Custom Armature Plate</h1>
        <p className="text-lg md:text-xl text-center text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
            Instructions for creating a custom armature from a raw metal disc.
        </p>

        <section className="my-8 md:my-16">
            <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Required Materials & Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Materials</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>1 x 50mm Galvanized Iron Circular Disc, 5mm thick</li>
                            <li>1 x M6 Galvanized Iron Countersunk Screw, length 16mm</li>
                            <li>1 x Galvanized Iron Eye Bolt, M6 hole</li>
                            <li>Thread Locker</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Tools</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Drill Press or Hand Drill with Jig</li>
                            <li>Drill Bits for Metal (2mm, 4mm, and 6mm)</li>
                            <li>Countersink Drill Bit (Metal, 90°)</li>
                            <li>Center Finder, Center Punch & Hammer</li>
                            <li>Sandpaper or File</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* --- PRELIMINARY STEP: SANDING --- */}
        <section className="my-8 md:my-16">
            <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Step 1: Shape the Armature Disc</h2>

                <p className="text-gray-300 mb-4">
                    The 50mm armature metal discs match the inner diameter of the PVC connector sleeve, creating a very tight fit. This is
                    often compounded by the laser-cutting process, which can leave a sharp, rough edge or small burrs.
                </p>
                <p className="text-gray-300 mb-4">
                    This combination makes it easy for the disc to catch or jam sideways if not inserted perfectly.
                </p>
                <p className="text-gray-300 mb-4">
                    To fix this, use a light piece of sandpaper to smooth the roughness from the laser-cut edge and create a slight lead-in
                    by chamfering or rounding the sides. Test fit the disc in the sleeve to ensure it now enters and exits smoothly.
                </p>

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
        </section>

        {/* --- ASSEMBLY --- */}
        <section className="my-8 md:my-16">
            <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Step 2: Armature Plate Assembly</h2>

                <div className="space-y-6">
                    {/* Armature Step 1 */}
                    <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                        <h4 className="text-lg md:text-xl font-bold text-white mb-4">Find Center</h4>
                        <p className="text-gray-300">
                            Use the center finder to locate the center of the 50mm galvanized iron disc. Mark this spot with the center
                            punch.
                        </p>

                        <TutorialImage
                            src={centerPunchSrc}
                            srcSet={centerPunchSrcSet}
                            alt="Center punched armature disc"
                            className="w-full h-auto rounded-md"
                        />
                    </div>

                    {/* Armature Step 2 */}
                    <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                        <h4 className="text-lg md:text-xl font-bold text-white mb-4">Drill Hole and Countersink</h4>
                        <p className="text-gray-300 mb-4">
                            Drill a 6mm hole through the center mark by stepping up the drill bit sizes. Start with a 2mm drill bit, move to
                            a 4mm bit, and finish with the 6mm bit.
                        </p>
                        <p className="text-gray-300 mb-4">
                            On one side of the disc, use the countersink drill bit to create a recess. Drill deep enough that the head of
                            the screw sits perfectly flush on the surface of the disc.
                        </p>

                        <TutorialImage
                            src={countersunkSrc}
                            srcSet={countersunkSrcSet}
                            alt="Countersunk center hole"
                            className="w-full h-auto rounded-md"
                        />
                    </div>

                    {/* Armature Step 3 */}
                    <div className="md:bg-gray-800/50 md:rounded-lg md:p-6">
                        <h4 className="text-lg md:text-xl font-bold text-white mb-4">Assemble Plate</h4>
                        <p className="text-gray-300 mb-4">
                            Insert the conical screw through the countersunk side of the disc. Apply a drop of thread lock, then screw the
                            eye bolt onto the threads until it is tight against the disc.
                        </p>
                        <div className="bg-blue-900/20 border border-blue-700/50 rounded p-3 md:p-4 mb-6">
                            <h4 className="text-blue-100 font-bold mb-2 text-sm md:text-base">ℹ️ A Note on Metal Types</h4>
                            <p className="text-blue-200 text-sm mb-2">
                                The galvanized disc alone lacks sufficient iron to create a strong magnetic connection. Therefore, it is
                                critical that both the eye and the screw are made of ferrous metal. If we use stainless steel for these
                                parts, the armature plate will not hold.
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
                                After assembly, we must test that the base of the armature plate is perfectly flat. Place it on a level
                                surface (like a table) with the screw head facing down.
                            </p>
                            <p className="text-orange-100 mt-2 text-sm md:text-base">
                                Try to rock the disc back and forth. If it rocks, it means the countersunk screw isn't set deep enough or
                                the disc is warped. A plate that rocks will not make a secure connection with the magnet; it will only hold
                                on a single point, allowing us to rock ourselves free and defeating the purpose of this project.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

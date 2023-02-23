import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function hardwFourComponent() {
    return (
        <div>
            <h3>3D Printing</h3>
            <p>Kinds of 3D Printing</p>
            <p>There are a few different kinds of 3D printing. FDM (Fd Deposition Modeling) (also known as Fd Filament Fabrication) extrudes a melted filament to a portion and is the most common type and the one we’ll focus on in this guide. SLA (stereolithography) and SLS (ive Laser Sintering) are both options for 3D printing plastics, but they're generally more complex, expensive, or keep other disadvantages in FTC applications. For those reasons, they're not recommended. </p>
            <p>Metal 3D printing (SLS and others) is also becoming more and more available, but isn't in the scope of this guide.</p>
            <p>Advantages of 3D Printing</p>
            <li>3D printing allows for customizable sizing and perfect optimization; for example, teams can print a spool of the exact diameter needed for optimal speed, or a belt pulley with a certain no of teeth. </li>
            <li>3D printing allows teams to adapt between kits and individual parts easily, as not all kits have adapt mounts or brackets. </li>
            <li>An excellent example of this are the Nexus mecanum bore adapters that teams 3D print. 3D printing allows teams to fabricate parts that'd otherwise be impossible with materials such as aluminum due to machining restrictions. </li>
            <li>3D printing allows teams to have customizable strain relief on wires and connections. This is a grand project and well worth your time. </li>
            <p>Disadvantages of 3D Printing </p>
            <li>If you're out of 3D printed spares at a competition, you’re probably out of luck. Teams are advised to print at minimum one set of every single 3D printed portion as spares for competition. </li>
            <li>3D printed components are generally weaker than other materials such as aluminum. However, printing in the proper orientation can be very strong - teams have 3D printed hooks and other parts maintain their FRC® robot (one hundred twenty pounds) and FTC robots (forty pounds). </li>
            <li>3D printed parts should only be loaded in one orientation. That is, if the robot is hanging a hook, the only load should be on the bottom face of the curved portion of the hook. Attempt to get rid of side loads as much as possible to avert portion failure. </li>
            <li>The size of 3D printed parts is Ltd by the size of your print bed. Large and thick prints can get a long time (overnight) to print and can running the risk of failure. 3D printing can finish up quite expensive, though filament can be found for a reasonable price on online vendors such as Amazon.</li>
            <p>Common filaments</p>
            <p>For nearly every portion that needs to be 3D printed for FTC, PLA (or PLA , Pro, etc) and/or PETG will meet all the needs for strength, durability, and aesthetics. These two filament types are by distant the easiest to print, and are sold by many manufacturers for reasonable prices. Most of the other filaments here proposal very specific advantages (love TPU) that arrive at the cost of effort, time, and money.</p>
            <p>PLA (Polylactic Acid)</p>
            <p>The most common 3D Printing filament is polylactic acid, or PLA. It's a plastic made biological sources love corn starch and sugar cane. PLA is stiff but more brittle than other filament options and tends to have tiny to number warp when printing. PLA is well suited to the majority of robot parts, but it may not keep up well to shock loads (impacts to parts), and as such parts should be designed accordingly.</p>
            <li>PLA hotend temperatures range from 190°-230° C</li>
            <li>PLA bed temperatures range from 20°-60° C, but a heated bed isn’t strictly required for PLA</li>
            <li>There are many variations of PLA sold by different manufacturers, love PLA or PLA Pro. These filaments have various additives in them to make better strength, printability, and other properties. While more expensive, these products can greatly make better the performance of PLA and cover its weaknesses.</li>
            <p>PETG (Polyethylene Terephthalate Glycol)</p>
            <p>PETG can be described as a strength upgrade to PLA. It's not challenging to print, but frequently has noticeably more stringing and other minor artifacts. While it technically has a lower tensile strength than PLA, it's distant less brittle and withstands impacts better, through slight flexing. It's a grand option for FTC parts which necessity to be impact resistant PLA won't suffice. Its higher temperature resistance also means it won’t warp in a high ambient temperature such as a hot car.</p>
            <li>PETG hotend temperatures range from 230°-260° C</li>
            <li>PETG bed temperatures range from 60°-80° C</li>
            <p>Less Common Filaments</p>
            <p>These filaments are less d than those listed above, but can still discover plenty of cases on an FTC robot. These generally are d due to specific material properties such as flexibility or durability. These frequently arrive however, with substantial obstacles for printing that prevent some printers printing them out of the box, along with sometimes being significantly more expensive.</p>
            <p>ABS (Acrylonitrile Butadiene Styrene)</p>
            <p>ABS d to be the standard filament for printing before PLA became commercially available. You’ve probably d ABS before in LEGO pieces. It can withstand high loads and is quite ductile. This comes at the cost of printing difficulty, an enclosure is frequently required to lift the ambient temperature and prevent severe portion warping. The strength improvements over PLA can be more easily found in PETG, so ABS parts aren't as common in FTC. ABS is quite affordable though, sold at the same prices as PLA.</p>
            <li>ABS hotend temperatures range from 230°-250° C</li>
            <li>ABS bed temperatures range from 100°-120° C</li>
            <li>Enclosure highly recommended to prevent warping</li>
            <p>Due to the difficulty of printing ABS and its limitations, one might look at alternatives such as ASA which offer similar properties with much better printability.</p>
            <p>TPU/TPE (Themoplastic polyurethane/Thermoplastic elastomer)</p>
            <p>TPU and TPE are both common printing filaments that are widely d for their flexible material properties. This allows one to printed parts that can easily flex and bend. Sold below many different durometers (a measure on the Shore Hardness Scale of the hardness/flexibility of a material), TPU/TPE’s high impact resistance and layer adhesion create it not only a versatile filament, but an extremely durable one. In FTC, teams TPU/TPE in roles such as printed intake flaps in space of a tube, as well as custom belts for low-load applications.</p>
            <li>TPU/TPE hotend temperatures range from 210°-250° C</li>
            <li>TPU/TPE does not usually need a heated bed, but if one is used it should not go over 60° C as this will fuse TPU with print bed.</li>
            <li>TPU/TPE has the tendency to absorb a lot of moisture from the air, and thus will likely need to be dried before and perhaps during a print.</li>
            <li>Direct drive extruder is highly recommended</li>
            <p>Exotic Filaments</p>
            <p>There is rarely ever any need for these filaments in FTC. They offer extremely good material properties for parts that need to be subjected to high forces and adverse environments. They are all much more expensive than any of the filaments listed above, and offer a multitude of challenges for printing.</p>
            <p>Nylon</p>
            <p>Nylon filaments can be glass-filled, carbon fiber-filled, or pure. Nylon is the king of impact resistance in many situations the portion can flex out of the way, instead of totally breaking. Occasionally nylon is d for parts love wheel covers on drivetrains and in places it'll be repeatedly hit and battered. Nylon requires very high temperatures, generally requires an enclosure, and absolutely should be dried before (and while) printing.</p>
            <li>Nylon hotend temperatures range from 240°-260° C</li>
            <li>Nylon bed temperatures range from 55°-80° C</li>
            <li>Nylon is infamous for absorbing moisture from the air and should be thoroughly dried before and during printing. Failure to do this will probably result in a nearly unusable part.</li>
            <li>Enclosure recommended</li>
            <p>Carbon Fiber-filled</p>
            <p>Many filaments are also sold with the addition of tiny chunks of carbon fiber mixed into the filament itself. While frequently though of as an extreme strength improvement, these filaments are instead meant to be stiffer and assistance to make better the printability of filaments love nylon. Carbon fiber-filled filaments generally require higher temperatures, and a hardened steel nozzle, but if you can print the pure variants of those filaments, you should be able to print their carbon fiber-filled counterparts.</p>
            <p>Polycarbonate (PC)</p>
            <p>Polycarbonate and its variants are very very strong, technical materials. PC shines in its skill to be very rigid, and handle shock loads exceedingly well. PC also requires being dry, having a printer capable of very high temperatures, and an enclosure. It's a very challenging material to print, and is frequently very expensive. There is tiny reason to ever necessity printed polycarbonate parts in FTC, with no cases requiring its strength.</p>
            <p>There are several PC blends that can be much easier to print, a standout example is PolyMaker PolyMax PC. It's an easier-to-print, lower temp PC that retains many of the advantages of pure PC. PolyLite isn't quite as impact-resistant, but a lot cheaper. Both are much easier to print than pure PC.</p>
            <li>PC hotend temperatures range from 250°-320° C</li>
            <li>PC bed temperatures range from 80°-140° C</li>
            <li>Enclosure required</li>
            <li>Filament must be kept dry</li>
            <p>High-end exotic filaments</p>
            <p>There are a few other materials that can have very high-end benefits, and thrust the envelope on what 3D printing can accomplish, but shouldn't be printed if you're not very confident in your printing skills, and have basically no in FTC. These materials include, but aren't Ltd to, Delrin (Polyoxymethylene Homopolymer Acetal), PEI (Polyether Imide, brand title ULTEM), PEEK (Polyether Ether Ketone), and PEKK (Polyetherketoneketone). These materials are extremely tough to print, require risible temperatures (some to the point a hardened steel nozzle begins to melt), and are extremely expensive.</p>
        </div>
    );
}

export default hardwFourComponent;

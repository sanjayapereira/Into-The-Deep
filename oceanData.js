// Ocean zones and creatures data
const oceanData = [
    // SUNLIGHT ZONE (0-200m)
    {
        type: "zone",
        depth: 0,
        content: "SUNLIGHT ZONE (0-200m)"
    },
    {
        type: "creature",
        depth: 15,
        left: "15%",
        scale: 1,
        content: {
            name: "scuba diver",
            description: "Carries compressed air so humans can spend nearly an hour exploring reefs underwater.",
            image: "assests/scuba diver.png"
        }
    },
    {
        type: "creature",
        depth: 10,
        left: "55%",
        scale: 0.25,
        content: {
            name: "Sea Turtle",
            description: "Undertakes thousand-mile migrations between feeding grounds and nesting beaches.",
            image: "assests/sea-turtle.png"
        }
    },
    {
        type: "fact",
        depth: 25,
        content: "97% of Earth's water is found in the ocean, containing about 96.5% of all Earth's water!"
    },
    {
        type: "creature",
        depth: 20,
        left: "75%",
        scale:0.5,
        content: {
            name: "clown fish",
            description: "Lives immune inside sea anemones and can change sex to become the dominant female.",
            image: "assests/clown-fish.png"
        }
    },
    {
        type: "creature",
        depth: 35,
        left: "40%",
        scale: 1.5,
        content: {
            name:"Tuna",
            description: "Warm-blooded fish that can sprint faster than 70 km/h while chasing prey.",
            image: "assests/tuna.png"
        }
    },
    {
        type: "creature",
        depth: 40,
        left: "70%",
        scale: 1.5,
        content: {
            name:"greem sea turtle",
            description: "Green sea turtles migrate thousands of miles between feeding and nesting areas.",
            image: "assests/green turtle.png"
        }
    },
    {
        type: "creature",
        depth: 50,
        left: "10%",
        scale: 2,
        content: {
            name:"reef shark",
            description: "Constantly swims around coral reefs to force water over its gills for oxygen.",
            image: "assests/reef shark.png"
        }
    },
        {
        type: "creature",
        depth: 60,
        left: "70%",
        scale: 0.8,
        content: {
            name:"blue crab",
            description: "Can swim using paddle-like back legs and spends life in brackish coastal estuaries.",
            image: "assests/blue crab.png"
        }
    },
    {
        type: "creature",
        depth: 65,
        left: "25%",
        scale: 1.5,
        content: {
            name:"Bottle Nose Dolphin",
            description: "Intelligent marine mammals known for their playful behavior.",
            image: "assests/bottle nose dolphin-48411_1280.png"
        }
    },
        {
        type: "creature",
        depth: 72,
        left: "12%",
        scale: 0.4,
        content: {
            name:"nudibranch",
            description: "Absorbs toxins from prey and stores them in its own body as chemical armor.",
            image: "assests/nudibarnch.png"
        }
    },
    {
        type: "fact",
        depth: 78,
        content: "Sunlight can penetrate down to about 200 meters, making this zone full of life and photosynthesis!"
    },
        {
        type: "creature",
        depth: 85,
        left: "80%",
        scale:0.7,
        content: {
            name:"coral",
            description: "Hosts symbiotic algae that supply most of the coral’s energy through photosynthesis.",
            image: "assests/coral.png"
        }
    },
    {
        type: "creature",
        depth: 92,
        left: "40%",
        scale: 3,
        content: {
            name:"Humpback whale",
            description: "Males sing complex songs lasting 20 minutes that can travel across entire oceans.",
            image: "assests/humpback.png"
        }
    },
    {
        type: "creature",
        depth: 104,
        left: "75%",
        scale: 0.3,
        content: {
            name:"parrot fish",
            description: "Chews coral rock into fine sand, producing hundreds of kilograms each year.",
            image: "assests/parrotfish.png"
        }
    },
        {
        type: "creature",
        depth: 112,
        left: "15%",
        scale: 1.2,
        content: {
            name:"spinner Dolphin",
            description: "Performs rapid spinning leaps that may communicate or shake off parasites.",
            image: "assests/spinner Dolphin.png"
        }
    },
        {
        type: "creature",
        depth: 135,
        left: "77%",
        scale:1.5,
        content: {
            name:"mahi mahi",
            description: "Reaches adulthood in under a year and constantly changes color when excited.",
            image: "assests/Mahi Mahi.png"
        }
    },
        {
        type: "creature",
        depth: 133,
        left: "34%",
        scale: 5.5,
        content: {
            name:"blue whale",
            description: "Largest animal ever known—its heart alone can weigh as much as a small car.",
            image: "assests/blue whale.png"
        }
    },
        {
        type: "creature",
        depth: 148,
        left: "78%",
        scale: 0.3,
        content: {
            name:"Porcupine fish",
            description: "Puffs into a spiny sphere and carries tetrodotoxin strong enough to kill predators.",
            image: "assests/porcupine fish.png"
        }
    },
    {
        type: "fact",
        depth: 160,
        content: "The sunlight zone contains more than 90% of all marine life, including coral reefs!"
    },
        {
        type: "creature",
        depth: 155,
        left: "65%",
        scale: 0.3,
        content: {
            name:"cone snail",
            description: "Fires a hollow venom dart that can paralyze fish instantly despite its slow crawl.",
            image: "assests/cone snail.png"
        }
    },
        {
        type: "creature",
        depth: 160,
        left: "2%",
        scale: 0.5,
        content: {
            name:"sea snake",
            description: "Possesses paddle tails for swimming but still must surface regularly to breathe air.",
            image: "assests/sea-snake.png"
        }
    },
        {
        type: "creature",
        depth: 168,
        left: "40%",
        scale: 0.3,
        content: {
            name:"butterfly fish",
            description: "Often travels in lifelong pairs and uses eye-like spots to confuse predators.",
            image: "assests/butterflyfish.png"
        }
    },
    {
        type: "creature",
        depth: 175,
        left: "70%",
        scale: 2.5,
        content: {
            name:"Blue Marlin",
            description: "Fast and powerful fish, one of the ocean's apex predators.",
            image: "assests/blue fin marlin.png"
        }
    },
            {
        type: "creature",
        depth: 183,
        left: "15%",
        scale: 1.0,
        content: {
            name:"Hawksbill Turtle",
            description: "Critically endangered turtle whose narrow beak lets it pry sponges from crevices.",
            image: "assests/Hawksbill.png"
        }
    },
                {
        type: "creature",
        depth: 202,
        left: "80%",
        scale: 0.7,
        content: {
            name:"Flying Fish",
            description: "Can glide over 200 meters using enlarged fins after building speed underwater.",
            image: "assests/flying fish.png"
        }
    },
        {
        type: "fact",
        depth: 190,
        content: "Sperm whales can hold their breath for up to 90 minutes and dive down to hunt in the twilight zone below!"
    },
    // TWILIGHT ZONE (200-1000m)
    {
        type: "zone",
        depth: 200,
        content: "TWILIGHT ZONE (200-1000m)"
    },
    {
        type: "fact",
        depth: 250,
        content: "This zone receives only 1% of surface sunlight, just enough for some animals to see silhouettes above them!"
    },
    {
        type: "fact",
        depth: 350,
        content: "Bioluminescence is the primary light source here, over 90% of animals in this zone produce their own light!"
    },
    {
        type: "creature",
        depth: 305,
        left: "5%",
        scale: 0.4,
        content: {
            name: "Lanternfish",
            description: "Small bioluminescent fish that migrate vertically each night to feed.",
            image: "assests/lanternfish.png"
        }
    },
        {
        type: "creature",
        depth: 315,
        left: "40%",
        scale: 1.0,
        content: {
            name: "Glass Octopus",
            description: "Transparent body reveals its internal organs, making it nearly invisible in the water.",
            image: "assests/sGlass Octopus.png"
        }
    },
            {
        type: "creature",
        depth: 600,
        left: "20%",
        scale: 1.0,
        content: {
            name: "Vampire Squid",
            description: "Uses glowing blue light and webbed arms to startle predators instead of ink.",
            image: "assests/Vampire Squid.png"
        }
    },
            {
        type: "creature",
        depth: 332,
        left: "15%",
        scale: 0.8,
        content: {
            name: "Hatchetfish",
            description: "Has light-producing organs on its belly to hide its silhouette from hunters below.",
            image: "assests/hatchetface.png"
        }
    },
    {
        type: "creature",
        depth: 355,
        left: "70%",
        scale: 0.9,
        content: {
            name: "Anglerfish",
            description: "Deep-sea predator with a bioluminescent lure dangling from its head.",
            image: "assests/anglerfish.png"
        }
    },
    {
        type: "creature",
        depth: 385,
        left: "75%",
        scale: 0.85,
        content: {
            name: "Beardfish",
            description: "Named for their chin barbels used to sense prey in the dark.",
            image: "assests/Beardfish.png"
        }
    },
            {
        type: "creature",
        depth: 360,
        left: "20%",
        scale: 1.0,
        content: {
            name: "Goblin Shark",
            description: "Shoots its jaw forward on extendable ligaments to snatch prey faster than a blink.",
            image: "assests/goblin-shark.png"
        }
    },
            {
        type: "creature",
        depth: 325,
        left: "60%",
        scale: 0.7,
        content: {
            name: "Stoplight Loosejaw",
            description: "One of the few fish that shines red light, letting it see prey that cannot see it back.",
            image: "assests/loosejaw.png"
        }
    },
                {
        type: "creature",
        depth: 420,
        left: "65%",
        scale: 0.7,
        content: {
            name: "barreleye fish",
            description: "Has a transparent dome head with tubular eyes that swivel upward for spotting silhouettes.",
            image: "assests/barreleye fish.png"
        }
    },
            {
        type: "creature",
        depth: 312,
        left: "75%",
        scale: 0.8,
        content: {
            name: "Bristlemouth Fish",
            description: "Likely the most abundant vertebrate on Earth, armed with rows of needle-like teeth.",
            image: "assests/bristle mouth.png"
        }
    },
            {
        type: "creature",
        depth: 215,
        left: "35%",
        scale: 1.0,
        content: {
            name: "Glass Squid",
            description: "Nearly transparent body dotted with photophores helps it disappear in the dim twilight.",
            image: "assests/glass squid.png"
        }
    },
    {
        type: "creature",
        depth: 502,
        left: "45%",
        scale: 1.0,
        content: {
            name: "Pearleye Fish",
            description: "Its tubular eyes can rotate forward or upward like periscopes to track prey above.",
            image: "assests/Pearleye.png"
        }
    },
    {
        type: "fact",
        depth: 525,
        content: "The largest migration on Earth happens here daily, billions of marine animals swim up at night to feed!"
    },
        {
        type: "creature",
        depth: 515,
        left: "75%",
        scale: 1.0,
        content: {
            name: " Umbrella Octopus",
            description: "Spreads a web of skin between its arms like a cape and glows softly to confuse hunters.",
            image: "assests/Umbrella Octopus.png"
        }
    },
        {
        type: "creature",
        depth: 400,
        left: "20%",
        scale: 1.0,
        content: {
            name: "Bathylychnops",
            description: "Possesses large light organs near the eyes that work like headlights in the dark.",
            image: "assests/Bathylychnops.png"
        }
    },
        {
        type: "creature",
        depth: 500,
        left: "15%",
        scale: 1.0,
        content: {
            name: "Snipe Eel",
            description: "Extremely long beak lined with outward-facing teeth strips shrimp from the water column.",
            image: "assests/Snipe Eel.png"
        }
    },
        {
        type: "creature",
        depth: 205,
        left: "55%",
        scale: 1.0,
        content: {
            name: " Black Dragonfish",
            description: "Females carry a glowing chin barbel lure while males remain tiny and short-lived.",
            image: "assests/Black Dragonfish.png"
        }
    },
        {
        type: "creature",
        depth: 210,
        left: "12%",
        scale: 1.0,
        content: {
            name: "Tomopteris ",
            description: "Transparent planktonic worm known for producing rare yellow bioluminescent flashes.",
            image: "assests/Tomopteris.png"
        }
    },
        {
        type: "creature",
        depth: 520,
        left: "13%",
        scale: 1.0,
        content: {
            name: "Shining Tubeshoulder",
            description: "Can squirt glowing mucus out of shoulder glands to distract predators.",
            image: "assests/Shining Tubeshoulder.png"
        }
    },
    {
        type: "fact",
        depth: 800,
        content: "Many fish here have upward-facing eyes to spot prey silhouettes against the faint light above!"
    },
        {
        type: "creature",
        depth: 550,
        left: "20%",
        scale: 1.0,
        content: {
            name: "Telescopefish",
            description: "Forward-pointing tubular eyes give it binocular vision for striking prey above.",
            image: "assests/Telescopefish.png"
        }
    },
    {
        type: "creature",
        depth: 580,
        left: "70%",
        scale: 0.75,
        content: {
            name: "Cutlass Fish",
            description: "Silver elongated fish with sharp teeth resembling a blade.",
            image: "assests/Cutlass-fish.png"
        }
    },
    {
        type: "creature",
        depth: 620,
        left: "35%",
        scale: 0.6,
        content: {
            name: "Cyclothone",
            description: "One of the most abundant vertebrates on Earth.",
            image: "assests/Cyclothone.png"
        }
    },
    // MIDNIGHT ZONE (1000-4000m)
    {
        type: "zone",
        depth: 1000,
        content: "MIDNIGHT ZONE (1000-4000m)"
    },
    {
        type: "fact",
        depth: 1010,
        content: "Welcome to eternal darkness,no sunlight has reached here for millions of years!"
    },
    {
        type: "creature",
        depth: 1050,
        left: "50%",
        scale: 1.0,
        content: {
            name: "Giant Squid",
            description: "Possesses dinner-plate-sized eyes and two 8m feeding tentacles tipped with barbed suckers.",
            image: "assests/giant squid.png"
        }
    },
    {
        type: "creature",
        depth: 1200,
        left: "40%",
        scale: 1.0,
        content: {
            name: "Stoplight Loosejaw",
            description: "Deep-sea predator with bioluminescent red and green lights used to hunt in total darkness.",
            image: "assests/stoplight-loosejaw.png"
        }
    },
    {
        type: "creature",
        depth: 1300,
        left: "70%",
        scale: 0.8,
        content: {
            name: "Cookiecutter Shark",
            description: "Small shark that gouges circular chunks of flesh from larger animals.",
            image: "assests/cookiecutter-shark.png"
        }
    },
    {
        type: "creature",
        depth: 1600,
        left: "25%",
        scale: 0.9,
        content: {
            name: "Deep-sea Hatchetfish",
            description: "Tiny fish with light-producing organs that make them nearly invisible from below.",
            image: "assests/deep-sea-hatchetfish.png"
        }
    },
        {
        type: "creature",
        depth: 4500,
        left: "50%",
        scale: 1.0,
        content: {
            name: " Fangtooth Fish",
            description: "Has the largest teeth relative to body size of any fish, so it must hinge its jaws to close.",
            image: "assests/Fangtooth Fish.png"
        }
    },
        {
        type: "creature",
        depth: 1020,
        left: "15%",
        scale: 1.0,
        content: {
            name: "Dumbo Octopus",
            description: "Flaps ear-like fins to glide gracefully above the seafloor at crushing pressures.",
            image: "assests/dumbo octopus.png"
        }
    },
        {
        type: "creature",
        depth: 1515,
        left: "74%",
        scale: 1.0,
        content: {
            name: "Deep-sea Dragonfish",
            description: "Glowing chin barbel and invisibly red bioluminescence make it a stealth hunter.",
            image: "assests/Deep-sea Dragonfish.png"
        }
    },
        {
        type: "creature",
        depth: 1540,
        left: "15%",
        scale: 1.0,
        content: {
            name: "Barreleye Fish",
            description: "Transparent dome protects eyes that swivel upward to track prey through darkness.",
            image: "assests/barreleye fish.png"
        }
    },
        {
        type: "creature",
        depth: 1500,
        left: "45%",
        scale: 1.0,
        content: {
            name: "Frilled Shark",
            description: "Has 300 backward-facing teeth in 25 rows and lunges forward like a snake.",
            image: "assests/frilled shark.png"
        }
    },
    {
        type: "creature",
        depth: 1650,
        left: "25%",
        scale: 1.1,
        content: {
            name: "Colossal Squid",
            description: "Largest known squid species with enormous eyes adapted for deep waters.",
            image: "assests/colossal squid.png"
        }
    },
    {
        type: "fact",
        depth: 1700,
        content: "The colossal squid has the largest eyes in the animal kingdom, up to 27cm in diameter!"
    },
    {
        type: "creature",
        depth: 1800,
        left: "75%",
        scale: 0.8,
        content: {
            name: "Deep Sea Dragonfish",
            description: "Fierce predator with sharp teeth and bioluminescent organs.",
            image: "assests/deep sea gragon fish.png"
        }
    },
    {
        type: "creature",
        depth: 2000,
        left: "60%",
        scale: 0.7,
        content: {
            name: "Pelican Eel",
            description: "Known for its enormous mouth that can gulp prey larger than itself.",
            image: "assests/pelican-eel.png"
        }
    },
    {
        type: "creature",
        depth: 2200,
        left: "35%",
        scale: 1.0,
        content: {
            name: "Deep-sea Jellyfish (Atolla wyvillei)",
            description: "Produces bright bioluminescent rings to distract predators.",
            image: "assests/atolla-jellyfish.png"
        }
    },
    {
        type: "creature",
        depth: 2400,
        left: "75%",
        scale: 0.8,
        content: {
            name: "Viperfish",
            description: "One of the fiercest predators in the deep sea, with long fangs and a glowing lure.",
            image: "assests/viperfish.png"
        }
    },
        {
        type: "creature",
        depth: 3000,
        left: "50%",
        scale: 1.0,
        content: {
            name: "Snaggletooth Fish",
            description: "Crooked jaws lined with fangs and light organs let it ambush prey in the dark.",
            image: "assests/Snaggletooth Fish.png"
        }
    },
        {
        type: "creature",
        depth: 1570,
        left: "50%",
        scale: 1.0,
        content: {
            name: "Bathyraja abyssicola",
            description: "Deep-sea skate that glides over muddy bottoms, sensing prey with wing-tip nerves.",
            image: "assests/Bathyraja abyssicola.png"
        }
    },
        {
        type: "creature",
        depth: 1000,
        left: "75%",
        scale: 1.0,
        content: {
            name: "Flashlight Fish",
            description: "Hides and reveals bacteria-powered light organs under its eyes like headlights.",
            image: "assests/flashlight-fish.png"
        }
    },
        {
        type: "creature",
        depth: 1590,
        left: "50%",
        scale: 1.0,
        content: {
            name: "Deep-sea Shrimp",
            description: "Some species can spit glowing blue chemicals to startle predators and escape.",
            image: "assests/deep-sea-shrimp.png"
        }
    },
        {
        type: "creature",
        depth: 2600,
        left: "50%",
        scale: 1.0,
        content: {
            name: "Chimaera",
            description: "Cartilaginous relative of sharks with venomous dorsal spines and grinding tooth plates.",
            image: "assests/chimaera-fish.png"
        }
    },
        {
        type: "creature",
        depth: 2500,
        left: "50%",
        scale: 1.0,
        content: {
            name: "Swallower Fish",
            description: "Elastic stomach lets it gulp prey two to three times its own size whole.",
            image: "assests/Swallower Fish.png"
        }
    },
    {
        type: "fact",
        depth: 2550,
        content: "The temperature here is a constant 2-4°C (36-39°F), regardless of surface conditions!"
    },
    {
        type: "creature",
        depth: 2700,
        left: "30%",
        scale: 0.9,
        content: {
            name: "Lampocteis",
            description: "Bioluminescent comb jelly floating in the deep ocean.",
            image: "assests/Lampocteis cruenruventer.png"
        }
    },
    {
        type: "creature",
        depth: 2850,
        left: "60%",
        scale: 0.85,
        content: {
            name: "Pacific Grenadier",
            description: "Deep-sea fish that scavenges on the ocean floor.",
            image: "assests/Pacific-grenadier.png"
        }
    },
        {
        type: "creature",
        depth: 3000,
        left: "45%",
        scale: 1.0,
        content: {
            name: "Tripodfish",
            description: "Props itself upright on elongated fin rays and waits for drifting prey to brush past.",
            image: "assests/tripod fiah.png"
        }
    },
    {
        type: "creature",
        depth: 3200,
        left: "45%",
        scale: 1.0,
        content: {
            name: "Dragonfish",
            description: "Produces red bioluminescent light invisible to most other species.",
            image: "assests/dragonfish.png"
        }
    },
    {
        type: "creature",
        depth: 3500,
        left: "20%",
        scale: 1.0,
        content: {
            name: "Tripodfish",
            description: "Balances on long fins like legs while waiting motionless for food.",
            image: "assests/tripod fiah.png"
        }
    },
    {
        type: "fact",
        depth: 3600,
        content: "The pressure here is 360 times greater than at the surface - like having 50 elephants standing on you!"
    },
    {
        type: "fact",
        depth: 3800,
        content: "Some deep-sea fish like the dragonfish can see infrared light—an ability almost unknown in other animals!"
    },
        {
        type: "creature",
        depth: 4000,
        left: "74%",
        scale: 1.0,
        content: {
            name: "Rattail",
            description: "Also called grenadiers, they sweep the seafloor with sensitive barbels for carrion.",
            image: "assests/Rattail.png"
        }
    },
    // ABYSSAL ZONE (4000-6000m)
    {
        type: "zone",
        depth: 4000,
        content: "ABYSSAL ZONE (4000-6000m)"
    },
    {
        type: "fact",
        depth: 4050,
        content: "The abyssal plains cover 54% of the Earth's surface - more than all continents combined!"
    },
    {
        type: "creature",
        depth: 4025,
        left: "30%",
        scale: 1.0,
        content: {
            name: "Deep-sea Cucumber",
            description: "Sea cucumbers that crawl along the seafloor, processing sediment.",
            image: "assests/deep sea cucumber.png"
        }
    },
    {
        type: "creature",
        depth: 4100,
        left: "50%",
        scale: 0.9,
        content: {
            name: "Dumbo Octopus",
            description: "Named for its ear-like fins, this octopus glides gracefully near the seafloor.",
            image: "assests/dumbo octopus.png"
        }
    },
    {
        type: "creature",
        depth: 4300,
        left: "20%",
        scale: 0.8,
        content: {
            name: "Sea Dandelion",
            description: "A colonial organism resembling a flower, drifting slowly through the abyss.",
            image: "assests/sea-dandelion.png"
        }
    },
        {
        type: "creature",
        depth: 4510,
        left: "30%",
        scale: 1.0,
        content: {
            name: "Tripod Fish",
            description: "Perches motionless on three elongated fins that act like legs and sensors.",
            image: "assests/tripod fiah.png"
        }
    },
        {
        type: "creature",
        depth: 6015,
        left: "30%",
        scale: 0.5,
        content: {
            name: "Sea Pig",
            description: "Inflates its body and uses tube feet to sift organic particles from abyssal mud.",
            image: "assests/sea pig.png"
        }
    },
        {
        type: "creature",
        depth: 4530,
        left: "30%",
        scale: 1.0,
        content: {
            name: "Yeti Crab",
            description: "Hairy claws cultivate bacteria it later scrapes off and eats near hydrothermal vents.",
            image: "assests/yeti crab.png"
        }
    },
    {
        type: "creature",
        depth: 4800,
        left: "70%",
        scale: 1.0,
        content: {
            name: "Giant Isopod",
            description: "A huge deep-sea relative of the pill bug, feeding on decaying matter.",
            image: "assests/giant-isopod.png"
        }
    },
    {
        type: "fact",
        depth: 4800,
        content: "Hydrothermal vents here can reach temperatures of 400°C (752°F) while the surrounding water is near freezing!"
    },
        {
        type: "creature",
        depth: 5000,
        left: "30%",
        scale: 1.0,
        content: {
            name: "Cusk Eel",
            description: "Eel-like fish that uses sensitive lateral lines to navigate pitch-black plains.",
            image: "assests/cusk eel.png"
        }
    },
        {
        type: "creature",
        depth: 6005,
        left: "55%",
        scale: 1.0,
        content: {
            name: "Abyssal Grenadier",
            description: "Long-tailed scavenger that detects the faint scent of carcasses drifting down.",
            image: "assests/Abyssal Grenadier.png"
        }
    },
        {
        type: "creature",
        depth: 5000,
        left: "70%",
        scale: 1.0,
        content: {
            name: "Harp Sponge",
            description: "Fan-shaped sponge whose silica hooks snag tiny crustaceans for nourishment.",
            image: "assests/Harp Sponge.png"
        }
    },
    {
        type: "creature",
        depth: 5200,
        left: "15%",
        scale: 1.1,
        content: {
            name: "Deep-sea Anglerfish",
            description: "Female anglerfish host parasitic males that fuse into their bodies.",
            image: "assests/anglerfish.png"
        }
    },
    {
        type: "creature",
        depth: 5600,
        left: "68%",
        scale: 0.9,
        content: {
            name: "Sea Spider",
            description: "Spindly-legged creature that walks across the abyssal plain.",
            image: "assests/sea-spider.png"
        }
    },
    {
        type: "fact",
        depth: 5600,
        content: "Food is so scarce here that animals can survive for months without eating!"
    },
    {
        type: "fact",
        depth: 5800,
        content: "The Abyssal Zone covers more than 60% of Earth's surface, yet remains largely unexplored."
    },
        {
        type: "creature",
        depth: 4500,
        left: "8%",
        scale: 1.0,
        content: {
            name: "Cirrothauma murrayi",
            description: "Blind, gelatinous octopus with umbrella-like webbing between its arms.",
            image: "assests/CirrothaumaMurrayi.png"
        }
    },
    {
        type: "creature",
        depth: 4300,
        left: "65%",
        scale: 0.95,
        content: {
            name: "Carnivorous Tunicates",
            description: "Unusual filter feeders that capture prey in the abyss.",
            image: "assests/Carnivorous-Tunicates.png"
        }
    },
    {
        type: "creature",
        depth: 4750,
        left: "15%",
        scale: 0.7,
        content: {
            name: "Psychrolutes Marcidus",
            description: "Also known as the blobfish, adapted to extreme pressures.",
            image: "assests/Psychrolutes-Marcidus.png"
        }
    },
    {
        type: "creature",
        depth: 5200,
        left: "55%",
        scale: 0.8,
        content: {
            name: "Black Swallower",
            description: "Can swallow prey larger than itself.",
            image: "assests/Real-black-swallower.png"
        }
    },
        {
        type: "creature",
        depth: 4580,
        left: "30%",
        scale: 1.0,
        content: {
            name: "Abyssal Snailfish",
            description: "Slimy body lacks scales and tolerates pressures over 800 times surface levels.",
            image: "assests/snail fish.png"
        }
    },
        {
        type: "creature",
        depth: 4005,
        left: "15%",
        scale: 1.0,
        content: {
            name: "Abyssal Cusk Eel",
            description: "Pairs of parents guard eggs in burrows despite the near-freezing darkness.",
            image: "assests/Abyssal Cusk Eel.png"
        }
    },
        {
        type: "creature",
        depth: 4000,
        left: "45%",
        scale: 1.0,
        content: {
            name: "Sea Spider",
            description: "Organs extend into its long legs because its body is too small to hold them.",
            image: "assests/sea spider.png"
        }
    },
        {
        type: "creature",
        depth: 4515,
        left: "75%",
        scale: 1.0,
        content: {
            name: "Zombie Worm",
            description: "No mouth—releases acid to bore whale bones and lets bacteria digest the fat.",
            image: "assests/Zombie Worm.png"
        }
    },
        {
        type: "creature",
        depth: 4620,
        left: "30%",
        scale: 1.0,
        content: {
            name: "Pancake Batfish",
            description: "Flat fish that walks on limb-like fins and wiggles a lure to ambush prey.",
            image: "assests/pancake batfish.png"
        }
    },
    // HADAL ZONE (6000-11000m)
    {
        type: "zone",
        depth: 6000,
        content: "HADAL ZONE (6000-11000m)"
    },
    {
        type: "fact",
        depth: 6050,
        content: "Named after Hades, the ancient Greek god of the underworld - the deepest and most mysterious zone!"
    },
    {
        type: "creature",
        depth: 6200,
        left: "45%",
        scale: 1.0,
        content: {
            name: "Mariana Snailfish",
            description: "Holds the record for deepest living fish, adapted to extreme pressure.",
            image: "assests/Mariana Snailfish.png"
        }
    },
        {
        type: "creature",
        depth: 6000,
        left: "8%",
        scale: 0.5,
        content: {
            name: "Hadal Amphipods",
            description: "Scavenging crustaceans that swarm around carcasses falling into trenches.",
            image: "assests/scavenger amphipoid.png"
        }
    },
    {
        type: "creature",
        depth: 7000,
        left: "55%",
        scale: 0.5,
        content: {
            name: "Hadal Amphipod",
            description: "Crustaceans that survive crushing pressure and feed on sinking organic debris.",
            image: "assests/hadal-amphipod.png"
        }
    },
        {
        type: "creature",
        depth: 7300,
        left: "45%",
        scale: 1.0,
        content: {
            name: "Eelpout",
            description: "Slow-moving fish with antifreeze proteins in its blood to survive near-freezing water.",
            image: "assests/Eelpout.png"
        }
    },
    {
        type: "fact",
        depth: 7500,
        content: "The pressure at this depth is 750 atmospheres - equivalent to 1,100 pounds per square inch!"
    },
        {
        type: "creature",
        depth: 6000,
        left: "78%",
        scale: 1,
        content: {
            name: "Hirondellea gigas",
            description: "Hadal amphipod that carves calcium from seafloor sediments to build its exoskeleton.",
            image: "assests/Hirondellea gigas.png"
        }
    },
        {
        type: "creature",
        depth: 6100,
        left: "45%",
        scale: 1.0,
        content: {
            name: "Liparid Fish ",
            description: "Family of snailfish with gelatinous bodies that withstand pressures over 1,000 atmospheres.",
            image: "assests/Liparid Fish.png"
        }
    },
        {
        type: "creature",
        depth: 7600,
        left: "45%",
        scale: 1.0,
        content: {
            name: "Hadal Snailfish",
            description: "Deepest-known vertebrate, filmed cruising at nearly 8,200 meters.",
            image: "assests/Pancake Batfish.png"
        }
    },
        {
        type: "creature",
        depth: 7000,
        left: "15%",
        scale: 1.0,
        content: {
            name: "Polychaete Worms",
            description: "Segmented worms that anchor to trench walls and filter tiny particles from the water.",
            image: "assests/Polychaete Worms.png"
        }
    },
        {
        type: "creature",
        depth: 7800,
        left: "45%",
        scale: 1.0,
        content: {
            name: "Tiny Foraminifera",
            description: "Single-celled organisms that build intricate shells from dissolved minerals even at 8 km down.",
            image: "assests/Tiny Foraminifera.png"
        }
    },
    {
        type: "creature",
        depth: 8200,
        left: "35%",
        scale: 1.0,
        content: {
            name: "Deep-sea Ctenophore",
            description: "Gelatinous comb jelly with rainbow-colored bioluminescence.",
            image: "assests/deep-sea-ctenophore.png"
        }
    },
    {
        type: "fact",
        depth: 8850,
        content: "You're now deeper than Mount Everest is tall (8,849m)! Few places on Earth are more extreme!"
    },
    {
        type: "creature",
        depth: 9000,
        left: "65%",
        scale: 0.8,
        content: {
            name: "Hadal Polychaete Worm",
            description: "Segmented worm species adapted to survive crushing depths and low oxygen.",
            image: "assests/hadal-worm.png"
        }
    },
    {
        type: "creature",
        depth: 10800,
        left: "40%",
        scale: 1.0,
        content: {
            name: "Bacterial Mats",
            description: "Colonies of chemosynthetic bacteria thriving on hydrothermal vents.",
            image: "assests/bacterial-mats.jpg"
        }
    },
    {
        type: "fact",
        depth: 10850,
        content: "The Challenger Deep is the deepest known point of the seabed of Earth,located in the western Pacific Ocean at the southern end of the Mariana Trench, in the ocean territory of the Federated States of Micronesia."
    },
    {
        type: "creature",
        depth: 10880,
        left: "50%",
        scale: 2.3,
        content: {
            name: "challenger subamrine",
            description: "Deepsea Challenger (DCV 1) is a deep-diving submersible designed to reach the bottom of the Challenger Deep, the deepest-known point on Earth. ",
            image: "assests/challenger-submersible.png"
        }
    },
    {
        type: "fact",
        depth: 10970,
        content: "The Mariana Trench reaches depths of nearly 11,000m, deeper than Mount Everest is tall!"
    },
        {
        type: "creature",
        depth: 11000,
        left: "45%",
        scale: 1.0,
        content: {
            name: "Pressure-tolerant bacteria",
            description: "Holds the record for deepest living fish, adapted to extreme pressure.",
            image: "assests/Pressure-tolerant bacteria.png"
        }
    },
    {
        type: "fact",
        depth: 10920,
        content: "Mariana Trench- The deepest point on Earth at 10,994m! Only 3 people have ever reached the bottom!"
    },
    {
        type: "fact",
        depth: 10950,
        content: "More people have walked on the Moon than have visited the deepest part of the ocean! We've explored less than 5% of our oceans."
    }
];


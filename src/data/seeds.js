import { scoreSet } from '../lib/atlas.js';

const a = (article) => article;

export const articles = [
  a({
    id: 'boston-molasses-flood',
    title: 'Boston Molasses Flood',
    hook: 'A storage tank burst in 1919 and sent a wave of molasses through Boston.',
    summary:
      'A huge molasses tank ruptured in the North End of Boston, flooding streets with a sticky surge that killed people, damaged buildings, and became one of the strangest industrial disasters in American memory.',
    whyStrange:
      'It sounds like a joke until you read the casualty count, the cleanup, and the lawsuits that followed.',
    tags: ['disaster', 'industrial', 'urban'],
    collectionIds: ['disasters', 'absurd-history'],
    scores: scoreSet(54, 95, 72, 38, 96),
  }),
  a({
    id: 'london-beer-flood',
    title: 'London Beer Flood',
    hook: 'A brewery burst in 1814 and released a tidal wave of beer into London.',
    summary:
      'A failed vat at a London brewery triggered a domino effect that sent thousands of gallons of beer into surrounding streets and homes, turning a workday into a disaster that sounded too surreal for reality.',
    whyStrange:
      'The event is a genuine urban flood, but the floodwater was beer and the city had to treat it like a catastrophe.',
    tags: ['disaster', 'industrial', 'urban'],
    collectionIds: ['disasters', 'absurd-history'],
    scores: scoreSet(58, 92, 69, 35, 95),
  }),
  a({
    id: 'great-emu-war',
    title: 'Great Emu War',
    hook: 'Australia sent soldiers against emus and mostly lost.',
    summary:
      'In Western Australia, the military was deployed to help control emus that were devastating crops. The campaign became a famous example of a state underestimating wildlife and overestimating its own control.',
    whyStrange:
      'It is a military operation that reads like a parody but is documented as a real administrative decision.',
    tags: ['history', 'military', 'wildlife'],
    collectionIds: ['absurd-history', 'government-projects'],
    scores: scoreSet(61, 97, 68, 42, 98),
  }),
  a({
    id: 'lake-nyos-disaster',
    title: 'Lake Nyos disaster',
    hook: 'A lake released a lethal cloud of carbon dioxide overnight.',
    summary:
      'A limnic eruption at Lake Nyos in Cameroon killed thousands of people and animals when a sudden burst of carbon dioxide rolled through nearby settlements without warning.',
    whyStrange:
      'The disaster was invisible, odorless, and devastating, which makes it feel like a geological horror story.',
    tags: ['disaster', 'science', 'geology'],
    collectionIds: ['disasters'],
    scores: scoreSet(63, 88, 82, 51, 92),
  }),
  a({
    id: 'dancing-plague-of-1518',
    title: 'Dancing plague of 1518',
    hook: 'People in Strasbourg danced themselves into exhaustion and death.',
    summary:
      'In 1518, a wave of uncontrolled dancing spread through Strasbourg, with hundreds of participants reportedly unable to stop. Historians still debate the causes, from mass hysteria to environmental stress.',
    whyStrange:
      'It is one of the strangest collective episodes in European history because the behavior spread socially, but the exact cause remains uncertain.',
    tags: ['history', 'mystery', 'psychology'],
    collectionIds: ['absurd-history', 'myths-and-mysteries'],
    scores: scoreSet(70, 94, 74, 44, 97),
  }),
  a({
    id: 'dyatlov-pass-incident',
    title: 'Dyatlov Pass incident',
    hook: 'Nine hikers died in the Ural Mountains under unexplained conditions.',
    summary:
      'A ski expedition in the northern Urals ended with a tent cut from the inside, scattered bodies, and decades of speculation. The site became a magnet for theories ranging from avalanches to secret military tests.',
    whyStrange:
      'Its combination of missing context, eerie injuries, and endless theories gives it a mythic quality.',
    tags: ['mystery', 'disaster', 'soviet'],
    collectionIds: ['myths-and-mysteries', 'cold-war-weirdness'],
    scores: scoreSet(69, 91, 83, 46, 98),
  }),
  a({
    id: 'the-great-stink',
    title: 'The Great Stink',
    hook: 'London’s summer heat turned the Thames into a civic emergency.',
    summary:
      'In 1858, foul sewage odors from the Thames became so severe that Parliament raced to address the city’s sanitation crisis. The episode helped drive one of the most important public-works responses in British history.',
    whyStrange:
      'A smell problem became a policy shock that transformed infrastructure planning.',
    tags: ['history', 'infrastructure', 'urban'],
    collectionIds: ['disasters', 'infrastructure-that-mattered'],
    scores: scoreSet(49, 81, 87, 37, 90),
  }),
  a({
    id: 'project-pluto',
    title: 'Project Pluto',
    hook: 'The U.S. built plans for a nuclear-powered cruise missile.',
    summary:
      'Project Pluto explored a ramjet missile powered by a nuclear reactor, promising extreme range and speed at a horrifying cost. It remains one of the most unnerving examples of Cold War engineering ambition.',
    whyStrange:
      'The project sits at the intersection of brilliant physics and deeply unsettling weapons design.',
    tags: ['military', 'science', 'cold-war'],
    collectionIds: ['cold-war-weirdness', 'government-projects'],
    scores: scoreSet(38, 99, 92, 55, 99),
  }),
  a({
    id: 'operation-northwoods',
    title: 'Operation Northwoods',
    hook: 'The Pentagon drafted plans for false-flag attacks to justify war.',
    summary:
      'Operation Northwoods was a proposed set of covert and deceptive actions that would have manufactured support for military intervention. The plan was never carried out, but it became infamous after declassification.',
    whyStrange:
      'It is astonishing less for what happened than for what was seriously proposed in official channels.',
    tags: ['government', 'military', 'cold-war'],
    collectionIds: ['cold-war-weirdness', 'government-projects'],
    scores: scoreSet(44, 93, 90, 39, 99),
  }),
  a({
    id: 'operation-plowshare',
    title: 'Operation Plowshare',
    hook: 'The U.S. tried to use nuclear explosions for peacetime engineering.',
    summary:
      'Operation Plowshare was a broad program for using nuclear detonations to excavate harbors, cut channels, and reshape the land. The technical enthusiasm was enormous; the practical and political objections were even larger.',
    whyStrange:
      'It is a peace project built on the logic of nuclear blast optimization.',
    tags: ['science', 'military', 'infrastructure'],
    collectionIds: ['cold-war-weirdness', 'government-projects'],
    scores: scoreSet(41, 96, 88, 44, 97),
  }),
  a({
    id: 'acoustic-kitty',
    title: 'Acoustic Kitty',
    hook: 'The CIA once tried to turn a cat into a listening device.',
    summary:
      'Acoustic Kitty was a covert attempt to implant surveillance hardware in a cat so it could eavesdrop on conversations. The project is remembered as an expensive and deeply impractical intelligence experiment.',
    whyStrange:
      'It is the kind of idea that becomes more absurd the more seriously it was pursued.',
    tags: ['spycraft', 'technology', 'cold-war'],
    collectionIds: ['cold-war-weirdness', 'government-projects'],
    scores: scoreSet(34, 98, 79, 40, 99),
  }),
  a({
    id: 'project-pigeon',
    title: 'Project Pigeon',
    hook: 'A behaviorist tried to guide missiles with trained pigeons.',
    summary:
      'Project Pigeon proposed using pigeons to visually steer guidance systems inside missiles. The concept came from serious experimental psychology and remains one of the most memorable examples of wartime improvisation.',
    whyStrange:
      'It combines animal training, engineering optimism, and military seriousness in a way that is hard to forget.',
    tags: ['military', 'technology', 'behavioral-science'],
    collectionIds: ['cold-war-weirdness', 'government-projects'],
    scores: scoreSet(42, 97, 77, 43, 98),
  }),
  a({
    id: 'casaba-howitzer',
    title: 'Casaba-Howitzer',
    hook: 'A nuclear weapon concept aimed to turn blast energy into a beam.',
    summary:
      'Casaba-Howitzer was a speculative nuclear weapon design that would shape energy into a focused directional pulse. The concept lives at the edge of physics, weapons engineering, and military imagination.',
    whyStrange:
      'It sounds like a fantasy prop, but it emerged from real Cold War research logic.',
    tags: ['military', 'science', 'cold-war'],
    collectionIds: ['cold-war-weirdness', 'government-projects'],
    scores: scoreSet(35, 98, 88, 57, 99),
  }),
  a({
    id: 'orion-nuclear-pulse-propulsion',
    title: 'Orion nuclear pulse propulsion',
    hook: 'NASA once studied spacecraft propelled by nuclear explosions.',
    summary:
      'Project Orion proposed a gigantic spacecraft pushed forward by repeated nuclear detonations behind a pusher plate. The idea was technically serious, audacious, and almost unimaginable by contemporary standards.',
    whyStrange:
      'It is one of the most spectacular examples of engineering at the far edge of the possible.',
    tags: ['science', 'spaceflight', 'cold-war'],
    collectionIds: ['cold-war-weirdness', 'vanished-technologies'],
    scores: scoreSet(31, 97, 91, 74, 99),
  }),
  a({
    id: 'duga-radar',
    title: 'Duga radar',
    hook: 'The Soviet Union built a giant over-the-horizon radar array.',
    summary:
      'Duga was an enormous Soviet radar installation whose electrical noise led listeners to nick it the Russian Woodpecker. It remains an iconic artifact of the Cold War landscape.',
    whyStrange:
      'It is both a listening machine and a haunting piece of industrial architecture.',
    tags: ['military', 'architecture', 'cold-war'],
    collectionIds: ['cold-war-weirdness', 'deranged-architecture'],
    scores: scoreSet(38, 89, 86, 95, 94),
  }),
  a({
    id: 'project-habakkuk',
    title: 'Project Habakkuk',
    hook: 'Britain once explored an aircraft carrier made of ice.',
    summary:
      'Project Habakkuk proposed using reinforced ice as a material for enormous wartime naval platforms. The plan was part engineering problem, part material-science experiment, and part emergency improvisation.',
    whyStrange:
      'An ice carrier is such a strange sentence that the project feels fictional until you trace the documents.',
    tags: ['military', 'science', 'technology'],
    collectionIds: ['cold-war-weirdness', 'vanished-technologies'],
    scores: scoreSet(40, 94, 83, 58, 98),
  }),
  a({
    id: 'biosphere-2',
    title: 'Biosphere 2',
    hook: 'A sealed habitat in Arizona tried to simulate a self-sustaining world.',
    summary:
      'Biosphere 2 was a massive experimental enclosure designed to test closed ecological systems and long-term human habitation. The project became famous for technical setbacks, internal tensions, and the ambition of trying to bottle a biosphere.',
    whyStrange:
      'It is a scientific experiment that looks like a utopian cult and acts like both a lab and a stage set.',
    tags: ['science', 'experiment', 'utopia'],
    collectionIds: ['failed-utopias', 'social-experiments'],
    scores: scoreSet(46, 83, 88, 89, 93),
  }),
  a({
    id: 'milgram-experiment',
    title: 'Milgram experiment',
    hook: 'People were asked to deliver shocks to strangers in the name of research.',
    summary:
      'Stanley Milgram’s obedience experiments are famous for revealing how readily ordinary participants might follow authority even when the task seems morally troubling. The experiments remain central to psychology and ethics debates.',
    whyStrange:
      'The setup is simple, but the implications about obedience and agency are deeply unsettling.',
    tags: ['experiment', 'psychology', 'ethics'],
    collectionIds: ['social-experiments'],
    scores: scoreSet(52, 82, 92, 33, 96),
  }),
  a({
    id: 'stanford-prison-experiment',
    title: 'Stanford prison experiment',
    hook: 'A fake prison study quickly turned into a lesson in power dynamics.',
    summary:
      'The Stanford prison experiment simulated a prison environment to examine how role assignment and institutional power might influence behavior. It became one of the most debated studies in social psychology.',
    whyStrange:
      'Its legacy is not just the data, but the way the experiment itself became a cautionary tale.',
    tags: ['experiment', 'psychology', 'ethics'],
    collectionIds: ['social-experiments'],
    scores: scoreSet(47, 85, 90, 31, 95),
  }),
  a({
    id: 'the-third-wave',
    title: 'The Third Wave',
    hook: 'A classroom experiment created a miniature authoritarian movement.',
    summary:
      'The Third Wave was a high-school classroom experiment meant to demonstrate how quickly fascistic dynamics could take root in a group. It produced a disturbing burst of conformity and remains a vivid teaching example.',
    whyStrange:
      'An educational exercise briefly became a real social movement, which is exactly the kind of line the atlas loves.',
    tags: ['experiment', 'psychology', 'education'],
    collectionIds: ['social-experiments'],
    scores: scoreSet(50, 84, 86, 36, 95),
  }),
  a({
    id: 'fordlandia',
    title: 'Fordlândia',
    hook: 'Henry Ford tried to build a rubber utopia in the Amazon.',
    summary:
      'Fordlândia was a company town and plantation project meant to secure rubber supply for Ford’s industrial empire. Instead it became a notorious story of ecological mismatch, paternalism, and failed planning.',
    whyStrange:
      'It is what happens when a car company tries to export Midwestern order into the rainforest.',
    tags: ['utopia', 'industry', 'place'],
    collectionIds: ['failed-utopias', 'eccentric-rich-projects'],
    scores: scoreSet(44, 88, 84, 67, 93),
  }),
  a({
    id: 'auroville',
    title: 'Auroville',
    hook: 'A planned city in India aimed to become a universal township.',
    summary:
      'Auroville was founded as an intentional community with spiritual and social ambitions that stretched far beyond a conventional town plan. Its history includes idealism, governance disputes, and the difficulty of turning utopian ideas into durable institutions.',
    whyStrange:
      'It is a city that was explicitly designed to be more than a city.',
    tags: ['utopia', 'community', 'place'],
    collectionIds: ['failed-utopias', 'social-experiments'],
    scores: scoreSet(48, 78, 85, 61, 91),
  }),
  a({
    id: 'kowloon-walled-city',
    title: 'Kowloon Walled City',
    hook: 'A dense city-block grew into one of the most packed places on Earth.',
    summary:
      'Kowloon Walled City became famous for its extraordinary density, improvised infrastructure, and tightly stacked urban life before demolition. It remains one of the clearest examples of a place that developed a logic all its own.',
    whyStrange:
      'It looks like a speculative city from a dystopian film, yet it existed as a real, lived place.',
    tags: ['place', 'architecture', 'urban'],
    collectionIds: ['deranged-architecture', 'failed-utopias', 'strange-places'],
    scores: scoreSet(39, 87, 88, 98, 95),
  }),
  a({
    id: 'hashima-island',
    title: 'Hashima Island',
    hook: 'A crowded mining island was later abandoned to the sea.',
    summary:
      'Hashima Island, often called Battleship Island, was once a densely packed industrial settlement built around coal extraction. After the mine closed, the island became an emblem of industrial abandonment.',
    whyStrange:
      'It feels like a set from a post-industrial film, but it is a real and heavily documented place.',
    tags: ['place', 'industry', 'architecture'],
    collectionIds: ['strange-places', 'deranged-architecture'],
    scores: scoreSet(42, 80, 84, 96, 91),
  }),
  a({
    id: 'pripyat',
    title: 'Pripyat',
    hook: 'A Soviet city was evacuated after the Chernobyl disaster.',
    summary:
      'Pripyat was built to serve the Chernobyl nuclear plant and became one of the most famous abandoned cities in the world after the 1986 disaster. Its empty blocks and frozen public spaces became visual shorthand for a failed future.',
    whyStrange:
      'Few places carry such a powerful mix of modernism, abandonment, and historical trauma.',
    tags: ['place', 'disaster', 'soviet'],
    collectionIds: ['strange-places', 'disasters'],
    scores: scoreSet(43, 86, 97, 92, 95),
  }),
  a({
    id: 'centralia-pennsylvania',
    title: 'Centralia, Pennsylvania',
    hook: 'A mine fire turned a town into a slow-burning warning.',
    summary:
      'Centralia’s underground coal seam fire burned for decades and forced the gradual abandonment of the town. It became one of the best-known examples of infrastructure failure producing a lingering, uncanny landscape.',
    whyStrange:
      'The town did not explode or vanish overnight; it simply became uninhabitable one year at a time.',
    tags: ['disaster', 'place', 'infrastructure'],
    collectionIds: ['disasters', 'strange-places'],
    scores: scoreSet(49, 84, 85, 74, 93),
  }),
  a({
    id: 'nakagin-capsule-tower',
    title: 'Nakagin Capsule Tower',
    hook: 'A Tokyo building was designed as a stack of replaceable living pods.',
    summary:
      'The Nakagin Capsule Tower embodied metabolic architecture, with modular capsules attached to a concrete core and meant to be swapped over time. It became an icon of Japanese architectural futurism and its limits.',
    whyStrange:
      'It is a rare building where the premise alone tells a story about a future that never fully arrived.',
    tags: ['architecture', 'technology', 'place'],
    collectionIds: ['deranged-architecture', 'vanished-technologies'],
    scores: scoreSet(41, 82, 89, 97, 91),
  }),
  a({
    id: 'pruitt-igoe',
    title: 'Pruitt-Igoe',
    hook: 'A public housing complex became shorthand for architectural failure.',
    summary:
      'Pruitt-Igoe was a St. Louis housing project whose decline became a symbol in debates about modernist planning, policy, and urban design. Its demolition is one of the most cited moments in twentieth-century architectural history.',
    whyStrange:
      'A housing project can become mythic when its failure is reinterpreted as a cultural turning point.',
    tags: ['architecture', 'urban', 'history'],
    collectionIds: ['deranged-architecture', 'failed-utopias'],
    scores: scoreSet(47, 79, 90, 88, 92),
  }),
  a({
    id: 'buzludzha-monument',
    title: 'Buzludzha Monument',
    hook: 'A monumental concrete saucer rose above a Bulgarian mountaintop.',
    summary:
      'The Buzludzha Monument was built to commemorate socialist ideology and now stands as a decaying icon of twentieth-century monumentality. Its silhouette makes it one of the most visually memorable ruins in Eastern Europe.',
    whyStrange:
      'It looks like a crashed spaceship, but it is really political architecture in ruin.',
    tags: ['architecture', 'soviet', 'monument'],
    collectionIds: ['deranged-architecture', 'strange-places'],
    scores: scoreSet(36, 77, 87, 99, 91),
  }),
  a({
    id: 'ryugyong-hotel',
    title: 'Ryugyong Hotel',
    hook: 'Pyongyang’s pyramid-shaped hotel became a monument to unfinished ambition.',
    summary:
      'The Ryugyong Hotel dominated the skyline of Pyongyang for decades while remaining incomplete or underused. It became a global symbol of grand architectural aspiration colliding with political and economic reality.',
    whyStrange:
      'It is one of the world’s most famous empty megastructures.',
    tags: ['architecture', 'place', 'failed-utopia'],
    collectionIds: ['deranged-architecture', 'strange-places', 'failed-utopias'],
    scores: scoreSet(38, 81, 88, 94, 92),
  }),
  a({
    id: 'sealand',
    title: 'Sealand',
    hook: 'An offshore platform declared itself a sovereign principality.',
    summary:
      'Sealand is a self-declared micronation based on a former sea fort in the North Sea. Its history blends legal oddity, internet-era mythmaking, and the persistent appeal of makeshift sovereignty.',
    whyStrange:
      'It is a real place that has spent decades acting like a state in miniature.',
    tags: ['micronation', 'legal', 'place'],
    collectionIds: ['micronations', 'strange-places'],
    scores: scoreSet(37, 89, 72, 69, 96),
  }),
  a({
    id: 'republic-of-rose-island',
    title: 'Republic of Rose Island',
    hook: 'A tiny offshore platform briefly tried to become its own country.',
    summary:
      'Rose Island was an artificial structure in the Adriatic Sea that was declared independent by its creator. The project’s short life made it a legend of legal creativity and exuberant self-invention.',
    whyStrange:
      'It is a micronation story that feels simultaneously whimsical and deeply committed.',
    tags: ['micronation', 'legal', 'utopia'],
    collectionIds: ['micronations', 'failed-utopias'],
    scores: scoreSet(42, 87, 71, 64, 95),
  }),
  a({
    id: 'heavens-gate',
    title: 'Heaven\'s Gate',
    hook: 'A UFO religion ended in one of the most infamous mass deaths in U.S. history.',
    summary:
      'Heaven’s Gate was a millenarian group whose beliefs about transcendence, space, and transformation culminated in a tragic mass death. Its mix of science-fiction imagery and religious conviction remains disturbing.',
    whyStrange:
      'It shows how cosmic narratives can become deadly when they are combined with absolute certainty.',
    tags: ['cult', 'religion', 'mystery'],
    collectionIds: ['cults-and-charismatics', 'myths-and-mysteries'],
    scores: scoreSet(51, 90, 86, 48, 98),
  }),
  a({
    id: 'church-of-the-subgenius',
    title: 'Church of the SubGenius',
    hook: 'A parody religion grew a real subculture around slack and absurdity.',
    summary:
      'The Church of the SubGenius began as a satirical religion and developed a durable following through zines, humor, and countercultural play. It sits at the border of joke, commentary, and genuine community.',
    whyStrange:
      'It is a parody that became culturally real without ever surrendering its weirdness.',
    tags: ['culture', 'cult', 'satire'],
    collectionIds: ['cults-and-charismatics', 'social-experiments'],
    scores: scoreSet(57, 88, 67, 53, 96),
  }),
  a({
    id: 'colonia-dignidad',
    title: 'Colonia Dignidad',
    hook: 'A secluded settlement in Chile became infamous for abuse and secrecy.',
    summary:
      'Colonia Dignidad was a German enclave in Chile that became associated with coercion, abuse, and entanglement with authoritarian politics. Its history is a grim example of isolated communities turning inward in destructive ways.',
    whyStrange:
      'It combines utopian community language with some of the darkest real-world outcomes imaginable.',
    tags: ['cult', 'community', 'history'],
    collectionIds: ['cults-and-charismatics', 'failed-utopias'],
    scores: scoreSet(49, 83, 89, 52, 95),
  }),
  a({
    id: 'cargo-cult',
    title: 'Cargo cult',
    hook: 'Island communities built rituals around the arrival of foreign goods.',
    summary:
      'Cargo cults emerged in colonial and postwar contexts where imported goods, military logistics, and ritual behavior became entangled in local religious practice. The term has since broadened into a shorthand for imitation without understanding.',
    whyStrange:
      'It is one of the most misunderstood phrases in popular culture, and the real history is more nuanced than the cliché.',
    tags: ['religion', 'anthropology', 'culture'],
    collectionIds: ['cults-and-charismatics', 'myths-and-mysteries'],
    scores: scoreSet(60, 82, 79, 45, 94),
  }),
  a({
    id: 'surtsey',
    title: 'Surtsey',
    hook: 'A volcanic island emerged from the sea off Iceland in the 1960s.',
    summary:
      'Surtsey appeared after an underwater eruption and became a rare opportunity to watch a new island develop from scratch. Scientists have studied its ecology for decades, treating it like a living laboratory.',
    whyStrange:
      'It is a place you can watch being born in real time.',
    tags: ['geography', 'science', 'place'],
    collectionIds: ['strange-places', 'science-dead-ends'],
    scores: scoreSet(45, 73, 85, 94, 91),
  }),
  a({
    id: 'cardiff-giant',
    title: 'Cardiff Giant',
    hook: 'A famous nineteenth-century petrified giant was actually a hoax.',
    summary:
      'The Cardiff Giant was a monumental fake “fossilized man” uncovered in New York and celebrated as a scientific marvel before being exposed as a hoax. It became a classic American story of spectacle, belief, and profit.',
    whyStrange:
      'Its success depended on how eagerly people wanted the impossible to be true.',
    tags: ['hoax', 'history', 'mystery'],
    collectionIds: ['myths-and-mysteries', 'absurd-history'],
    scores: scoreSet(66, 86, 69, 41, 98),
  }),
  a({
    id: 'cottingley-fairies',
    title: 'Cottingley Fairies',
    hook: 'Two girls produced photographs that convinced prominent believers.',
    summary:
      'The Cottingley Fairies photographs became a famous early twentieth-century case of fairy imagery that fooled serious observers. The story remains a neat collision of wishful thinking, photographic culture, and cultural appetite for wonder.',
    whyStrange:
      'A few staged photographs grew into a durable modern myth about what evidence can and cannot do.',
    tags: ['hoax', 'folklore', 'mystery'],
    collectionIds: ['myths-and-mysteries', 'absurd-history'],
    scores: scoreSet(71, 79, 66, 59, 96),
  }),
  a({
    id: 'john-frum',
    title: 'John Frum',
    hook: 'A cargo-cult figure became part of a living religious movement.',
    summary:
      'John Frum is a figure associated with a cargo cult movement in Vanuatu whose origins mix colonial encounter, belief, and ritual. The movement is often invoked as a case study in how outside influence can be transformed into local sacred narrative.',
    whyStrange:
      'It is a religious tradition with a modern origin story that feels stranger the more carefully you study it.',
    tags: ['religion', 'anthropology', 'culture'],
    collectionIds: ['cults-and-charismatics', 'myths-and-mysteries'],
    scores: scoreSet(63, 77, 74, 43, 93),
  }),
  a({
    id: 'taman-shud-case',
    title: 'Taman Shud case',
    hook: 'An unidentified man and a coded note became an enduring mystery.',
    summary:
      'The Taman Shud case centers on the discovery of an unidentified man on an Australian beach with a cryptic note linked to a book. The case remains one of the most discussed mysteries in Australian history.',
    whyStrange:
      'It combines a body, a code, and decades of speculation without a satisfying solution.',
    tags: ['mystery', 'crime', 'history'],
    collectionIds: ['myths-and-mysteries', 'bizarre-legal-cases'],
    scores: scoreSet(68, 84, 78, 36, 98),
  }),
  a({
    id: 'isdal-woman',
    title: 'Isdal Woman',
    hook: 'An unidentified woman was found dead in Norway under puzzling circumstances.',
    summary:
      'The Isdal Woman case concerns an unidentified body, false identities, and a mystery that drew intelligence and criminal theories. The combination of travel clues and missing identity makes it one of Europe’s most famous cold cases.',
    whyStrange:
      'It has the shape of spy fiction, but the official record never fully resolved the story.',
    tags: ['mystery', 'crime', 'cold-war'],
    collectionIds: ['myths-and-mysteries', 'bizarre-legal-cases'],
    scores: scoreSet(67, 85, 80, 35, 97),
  }),
  a({
    id: 'pyramiden',
    title: 'Pyramiden',
    hook: 'A Soviet mining town in Svalbard was abandoned almost overnight.',
    summary:
      'Pyramiden was a mining settlement with Soviet cultural infrastructure that later became a preserved ghost town in the Arctic. Its frozen streets and odd survival as a monument to a vanished system make it unforgettable.',
    whyStrange:
      'It is a ghost town with a stage-set quality and a very specific ideological past.',
    tags: ['place', 'soviet', 'ghost-town'],
    collectionIds: ['strange-places', 'failed-utopias'],
    scores: scoreSet(44, 79, 83, 90, 91),
  }),
  a({
    id: 'ten-thousand-year-clock',
    title: 'Clock of the Long Now',
    hook: 'A clock designed to run for ten thousand years became a philosophy project.',
    summary:
      'The Clock of the Long Now is a monumental timekeeping project intended to keep time on a scale far beyond ordinary planning horizons. It combines engineering, art, and a philosophical wager about stewardship.',
    whyStrange:
      'It is a machine built to outlast the institutions and habits that created it.',
    tags: ['technology', 'philosophy', 'architecture'],
    collectionIds: ['vanished-technologies', 'eccentric-rich-projects'],
    scores: scoreSet(33, 74, 81, 86, 89),
  }),
  a({
    id: 'the-great-moon-hoax',
    title: 'The Great Moon Hoax',
    hook: 'Newspaper readers were told the Moon was full of extraordinary life.',
    summary:
      'The Great Moon Hoax was a nineteenth-century newspaper sensation that described fictional lunar creatures and landscapes as if they were discovered fact. It is a classic example of mass media spectacle and credulity.',
    whyStrange:
      'It shows how quickly a compelling invented story can behave like news.',
    tags: ['hoax', 'media', 'history'],
    collectionIds: ['myths-and-mysteries', 'absurd-history'],
    scores: scoreSet(72, 78, 65, 44, 96),
  }),
  a({
    id: 'zzyzx-california',
    title: 'Zzyzx, California',
    hook: 'A desert health resort got a name chosen to be the last word in the dictionary.',
    summary:
      'Zzyzx began as a deliberately named desert resort and health spa whose bizarre branding gave it lasting fame. It is a tiny example of self-made mythology in place naming and marketing.',
    whyStrange:
      'Even the name feels like a practical joke that somehow became a geographic fact.',
    tags: ['place', 'history', 'eccentricity'],
    collectionIds: ['strange-places', 'eccentric-rich-projects'],
    scores: scoreSet(54, 74, 66, 60, 88),
  }),
];

export const collections = [
  {
    id: 'disasters',
    slug: 'disasters-that-sound-made-up',
    title: 'Disasters that sound made up',
    description:
      'Events where the premise alone seems fictional: floods of food and drink, invisible gas clouds, and towns that became cautionary tales.',
    accent: 'amber',
    articleIds: [
      'boston-molasses-flood',
      'london-beer-flood',
      'lake-nyos-disaster',
      'dancing-plague-of-1518',
      'dyatlov-pass-incident',
      'the-great-stink',
      'centralia-pennsylvania',
      'pripyat',
    ],
  },
  {
    id: 'cold-war-weirdness',
    slug: 'cold-war-weirdness',
    title: 'Cold War weirdness',
    description:
      'Secret plans, nuclear fantasies, and projects that feel like science fiction smuggled into state paperwork.',
    accent: 'sky',
    articleIds: [
      'project-pluto',
      'operation-northwoods',
      'operation-plowshare',
      'acoustic-kitty',
      'project-pigeon',
      'casaba-howitzer',
      'orion-nuclear-pulse-propulsion',
      'duga-radar',
      'project-habakkuk',
    ],
  },
  {
    id: 'failed-utopias',
    slug: 'failed-utopias',
    title: 'Failed utopias',
    description:
      'Grand social visions, planned cities, and corporate dreams that ran into ecology, power, or the simple friction of reality.',
    accent: 'emerald',
    articleIds: [
      'fordlandia',
      'auroville',
      'kowloon-walled-city',
      'hashima-island',
      'pripyat',
      'centralia-pennsylvania',
      'pruitt-igoe',
      'ryugyong-hotel',
      'republic-of-rose-island',
      'pyramiden',
    ],
  },
  {
    id: 'social-experiments',
    slug: 'social-experiments',
    title: 'Social experiments',
    description:
      'Behavioral studies, classroom simulations, and communities that tried to engineer human nature from first principles.',
    accent: 'fuchsia',
    articleIds: [
      'biosphere-2',
      'milgram-experiment',
      'stanford-prison-experiment',
      'the-third-wave',
      'church-of-the-subgenius',
      'colonia-dignidad',
      'cargo-cult',
      'john-frum',
      'heavens-gate',
    ],
  },
  {
    id: 'strange-places',
    slug: 'strange-places',
    title: 'Strange places',
    description:
      'Abandoned cities, island anomalies, oversized monuments, and settlements that became famous for how they look and feel.',
    accent: 'violet',
    articleIds: [
      'kowloon-walled-city',
      'hashima-island',
      'pripyat',
      'centralia-pennsylvania',
      'nakagin-capsule-tower',
      'buzludzha-monument',
      'ryugyong-hotel',
      'sealand',
      'republic-of-rose-island',
      'surtsey',
      'pyramiden',
      'zzyzx-california',
    ],
  },
  {
    id: 'myths-and-mysteries',
    slug: 'myths-and-mysteries',
    title: 'Myths and mysteries',
    description:
      'Cases, hoaxes, and unexplained events that keep generating theories because the documents are incomplete and the story is too good to die.',
    accent: 'orange',
    articleIds: [
      'dyatlov-pass-incident',
      'dancing-plague-of-1518',
      'cardiff-giant',
      'cottingley-fairies',
      'john-frum',
      'taman-shud-case',
      'isdal-woman',
      'the-great-moon-hoax',
      'heavens-gate',
    ],
  },
  {
    id: 'government-projects',
    slug: 'government-projects',
    title: 'Things governments seriously funded',
    description:
      'These are the pages that make you reread the source material twice because the official record is stranger than the joke version.',
    accent: 'cyan',
    articleIds: [
      'project-pluto',
      'operation-northwoods',
      'operation-plowshare',
      'acoustic-kitty',
      'project-pigeon',
      'casaba-howitzer',
      'orion-nuclear-pulse-propulsion',
      'duga-radar',
      'project-habakkuk',
      'great-emu-war',
    ],
  },
  {
    id: 'vanished-technologies',
    slug: 'vanished-technologies',
    title: 'Vanished technologies',
    description:
      'Technologies and systems that almost won, stalled out, or left behind beautiful ruins and better stories than products.',
    accent: 'yellow',
    articleIds: [
      'orion-nuclear-pulse-propulsion',
      'project-habakkuk',
      'nakagin-capsule-tower',
      'ten-thousand-year-clock',
      'surtsey',
    ],
  },
  {
    id: 'eccentric-rich-projects',
    slug: 'eccentric-rich-peoples-projects',
    title: 'Eccentric rich people projects',
    description:
      'Large personal visions that became expensive, strange, and almost impossible to separate from the people who made them.',
    accent: 'rose',
    articleIds: [
      'fordlandia',
      'zzyzx-california',
      'ten-thousand-year-clock',
      'ryugyong-hotel',
      'republic-of-rose-island',
    ],
  },
  {
    id: 'bizarre-legal-cases',
    slug: 'bizarre-legal-cases',
    title: 'Bizarre legal cases',
    description:
      'Unusual cold cases, strange evidence trails, and stories where legal ambiguity is part of the mystery.',
    accent: 'slate',
    articleIds: ['taman-shud-case', 'isdal-woman'],
  },
  {
    id: 'absurd-history',
    slug: 'absurd-history',
    title: 'Absurd history',
    description:
      'Historical episodes that are real, well documented, and still feel like someone made them up on purpose.',
    accent: 'amber',
    articleIds: [
      'boston-molasses-flood',
      'london-beer-flood',
      'great-emu-war',
      'dancing-plague-of-1518',
      'cardiff-giant',
      'cottingley-fairies',
      'the-great-moon-hoax',
      'zzyzx-california',
    ],
  },
  {
    id: 'infrastructure-that-mattered',
    slug: 'infrastructure-that-mattered',
    title: 'Infrastructure that mattered',
    description:
      'Public works and systems that were ugly, costly, necessary, or all three at once.',
    accent: 'sky',
    articleIds: ['the-great-stink', 'centralia-pennsylvania', 'pruitt-igoe', 'nakagin-capsule-tower'],
  },
  {
    id: 'science-dead-ends',
    slug: 'science-dead-ends',
    title: 'Science dead ends',
    description:
      'Ideas that were once considered plausible enough to fund, test, or build before they were overtaken by reality.',
    accent: 'cyan',
    articleIds: [
      'project-pluto',
      'operation-plowshare',
      'project-habakkuk',
      'orion-nuclear-pulse-propulsion',
      'ten-thousand-year-clock',
      'surtsey',
    ],
  },
  {
    id: 'cults-and-charismatics',
    slug: 'cults-and-charismatics',
    title: 'Cults and charismatics',
    description:
      'Movements, personalities, and belief systems that blur the line between performance, devotion, and social control.',
    accent: 'fuchsia',
    articleIds: [
      'heavens-gate',
      'church-of-the-subgenius',
      'colonia-dignidad',
      'cargo-cult',
      'john-frum',
    ],
  },
  {
    id: 'micronations',
    slug: 'micronations',
    title: 'Micronations',
    description:
      'Tiny claims of sovereignty, whether playful, ideological, or legally inventive.',
    accent: 'violet',
    articleIds: ['sealand', 'republic-of-rose-island'],
  },
  {
    id: 'deranged-architecture',
    slug: 'deranged-architecture',
    title: 'Deranged architecture',
    description:
      'Buildings and urban forms that look impossible, overscaled, or too strange to have been fully intentional.',
    accent: 'rose',
    articleIds: [
      'kowloon-walled-city',
      'hashima-island',
      'nakagin-capsule-tower',
      'buzludzha-monument',
      'ryugyong-hotel',
      'pruitt-igoe',
      'duga-radar',
    ],
  },
];

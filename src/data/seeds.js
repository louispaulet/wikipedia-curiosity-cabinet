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
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Boston_Molasses_Flood',
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
    wikipediaUrl: 'https://en.wikipedia.org/wiki/London_Beer_Flood',
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
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Great_Emu_War',
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
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Lake_Nyos_disaster',
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
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Dancing_Plague_of_1518',
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
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Dyatlov_Pass_incident',
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
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Great_Stink',
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
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Project_Pluto',
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
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Operation_Northwoods',
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
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Operation_Plowshare',
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
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Acoustic_Kitty',
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
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Project_Pigeon',
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
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Casaba-Howitzer',
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
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Project_Orion_(nuclear_propulsion)',
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
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Duga_radar',
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
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Project_Habakkuk',
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
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Biosphere_2',
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
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Milgram_experiment',
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
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Stanford_prison_experiment',
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
    wikipediaUrl: 'https://en.wikipedia.org/wiki/The_Third_Wave_(experiment)',
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
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Fordl%C3%A2ndia',
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
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Auroville',
    tags: ['utopia', 'community', 'place'],
    collectionIds: ['failed-utopias', 'social-experiments'],
    scores: scoreSet(48, 78, 85, 61, 91),
  }),
  a({
    id: 'kowloon-walled-city',
    title: 'Kowloon Walled City',
    hook: 'A dense enclave in Hong Kong became an urban labyrinth.',
    summary:
      'Kowloon Walled City was a compact, heavily built-up settlement known for its density, informal governance, and maze-like architecture. It became an enduring icon of urban extremity.',
    whyStrange:
      'It looks like a city designed by layering until the geometry gave up.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Kowloon_Walled_City',
    tags: ['architecture', 'urban', 'place'],
    collectionIds: ['deranged-architecture'],
    scores: scoreSet(66, 90, 88, 92, 89),
  }),
  a({
    id: 'hashima-island',
    title: 'Hashima Island',
    hook: 'An abandoned coal island became a concrete ghost ship.',
    summary:
      'Hashima Island, off the coast of Nagasaki, was once a dense mining settlement before industrial decline left it largely deserted. Its silhouette and history made it famous as a symbol of modern ruin.',
    whyStrange:
      'It is an island that looks like a ship, a fortress, and a ruin all at once.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Hashima_Island',
    tags: ['place', 'architecture', 'ruin'],
    collectionIds: ['deranged-architecture', 'abandoned-places'],
    scores: scoreSet(62, 87, 84, 90, 88),
  }),
  a({
    id: 'pripyat',
    title: 'Pripyat',
    hook: 'A Soviet city near Chernobyl was abandoned almost overnight.',
    summary:
      'Pripyat was built to house workers for the Chernobyl plant and was evacuated after the reactor disaster in 1986. It remains one of the most recognizable abandoned cities in the world.',
    whyStrange:
      'It is a planned city frozen at the instant its purpose ended.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Pripyat',
    tags: ['place', 'disaster', 'soviet'],
    collectionIds: ['abandoned-places', 'disasters'],
    scores: scoreSet(59, 86, 89, 77, 92),
  }),
  a({
    id: 'centralia-pennsylvania',
    title: 'Centralia, Pennsylvania',
    hook: 'A mine fire turned a town into a long-burning evacuation zone.',
    summary:
      'An underground coal seam fire in Centralia has burned for decades, making the borough nearly uninhabitable. The town became a haunting example of slow, persistent industrial catastrophe.',
    whyStrange:
      'The ground itself became the enemy, and the fire never really stopped.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Centralia,_Pennsylvania',
    tags: ['disaster', 'place', 'industry'],
    collectionIds: ['abandoned-places', 'disasters'],
    scores: scoreSet(64, 89, 83, 72, 91),
  }),
  a({
    id: 'nakagin-capsule-tower',
    title: 'Nakagin Capsule Tower',
    hook: 'A modular Tokyo tower became a shrine to metabolist architecture.',
    summary:
      'Nakagin Capsule Tower was built from detachable prefabricated units as a vision of flexible urban living. It later became beloved as a strange, fragile icon of architectural futurism.',
    whyStrange:
      'It is an apartment building that looks like an exploded camera roll of the future.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Nakagin_Capsule_Tower',
    tags: ['architecture', 'design', 'urban'],
    collectionIds: ['deranged-architecture', 'vanished-technologies'],
    scores: scoreSet(55, 84, 87, 94, 90),
  }),
  a({
    id: 'pruitt-igoe',
    title: 'Pruitt-Igoe',
    hook: 'A modernist housing project collapsed into a symbol of urban failure.',
    summary:
      'Pruitt-Igoe was a large public-housing complex in St. Louis whose demolition became shorthand for the failures of midcentury planning, policy, and maintenance.',
    whyStrange:
      'Its destruction became more famous than its life, which is a brutal kind of legacy.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Pruitt%E2%80%93Igoe',
    tags: ['architecture', 'urban', 'policy'],
    collectionIds: ['deranged-architecture', 'failed-utopias'],
    scores: scoreSet(57, 83, 86, 88, 89),
  }),
  a({
    id: 'buzludzha-monument',
    title: 'Buzludzha Monument',
    hook: 'A Bulgarian monument resembles a crashed spaceship on a mountain.',
    summary:
      'The Buzludzha Monument was built as a communist memorial and now stands as a decaying concrete spectacle. Its form and deterioration make it one of the most striking ruins of the Eastern Bloc.',
    whyStrange:
      'It looks like a sci-fi prop left in the mountains after filming wrapped.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Buzludzha_Monument',
    tags: ['architecture', 'ruin', 'soviet'],
    collectionIds: ['deranged-architecture', 'abandoned-places'],
    scores: scoreSet(58, 85, 85, 96, 90),
  }),
  a({
    id: 'ryugyong-hotel',
    title: 'Ryugyong Hotel',
    hook: 'Pyongyang’s giant pyramid hotel became a monument to unfinished ambition.',
    summary:
      'The Ryugyong Hotel has towered over Pyongyang for decades as a largely dormant megastructure. It is one of the most famous examples of architecture becoming political spectacle.',
    whyStrange:
      'It is a skyline-defining building that spent years being more promise than function.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Ryugyong_Hotel',
    tags: ['architecture', 'urban', 'soviet'],
    collectionIds: ['deranged-architecture', 'failed-utopias'],
    scores: scoreSet(61, 86, 87, 97, 91),
  }),
  a({
    id: 'sealand',
    title: 'Sealand',
    hook: 'A sea fort off England became a self-declared micronation.',
    summary:
      'Sealand is a former wartime platform that was turned into a pseudo-state with its own titles, flags, and mythology. It remains one of the strangest acts of political self-invention.',
    whyStrange:
      'It is statehood as performance art, but with concrete and sea spray.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Principality_of_Sealand',
    tags: ['place', 'politics', 'micronation'],
    collectionIds: ['micronations', 'government-projects'],
    scores: scoreSet(53, 80, 82, 74, 94),
  }),
  a({
    id: 'republic-of-rose-island',
    title: 'Republic of Rose Island',
    hook: 'An offshore platform briefly declared itself a nation.',
    summary:
      'The Republic of Rose Island was an engineered platform in the Adriatic that was proclaimed a sovereign state in the 1960s. It became a legendary example of playful, defiant micronationalism.',
    whyStrange:
      'It is what happens when libertarian fantasy meets maritime engineering.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Republic_of_Rose_Island',
    tags: ['micronation', 'place', 'utopia'],
    collectionIds: ['micronations', 'failed-utopias'],
    scores: scoreSet(56, 82, 79, 73, 92),
  }),
  a({
    id: 'heavens-gate',
    title: "Heaven's Gate",
    hook: 'A cult of the apocalypse expected to exit the planet in a spacecraft.',
    summary:
      "Heaven's Gate was a religious movement that blended UFO beliefs, communal living, and apocalyptic expectation. Its tragic end made it one of the most infamous cult stories in modern memory.",
    whyStrange:
      'Its cosmology was so specific that it almost feels fabricated after the fact.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Heaven%27s_Gate_(religious_group)',
    tags: ['religion', 'cult', 'mystery'],
    collectionIds: ['myths-and-mysteries', 'social-experiments'],
    scores: scoreSet(68, 90, 84, 48, 97),
  }),
  a({
    id: 'church-of-the-subgenius',
    title: 'Church of the SubGenius',
    hook: 'A parody religion became a real subculture.',
    summary:
      'The Church of the SubGenius began as a satirical media prank and evolved into a durable, playful religious parody with its own iconography and lore.',
    whyStrange:
      'It is one of the best examples of a joke becoming an institution.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Church_of_the_SubGenius',
    tags: ['religion', 'parody', 'culture'],
    collectionIds: ['myths-and-mysteries'],
    scores: scoreSet(62, 79, 77, 41, 88),
  }),
  a({
    id: 'colonia-dignidad',
    title: 'Colonia Dignidad',
    hook: 'A secluded colony in Chile became notorious for abuse and violence.',
    summary:
      'Colonia Dignidad was a settlement founded by German expatriates that later became associated with human rights abuses, authoritarian control, and political collaboration.',
    whyStrange:
      'It is a community with a deeply sinister hidden history.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Colonia_Dignidad',
    tags: ['history', 'cult', 'place'],
    collectionIds: ['myths-and-mysteries', 'social-experiments'],
    scores: scoreSet(71, 87, 83, 54, 96),
  }),
  a({
    id: 'cargo-cult',
    title: 'Cargo cult',
    hook: 'Imitation ritual emerged around the arrival of modern goods.',
    summary:
      'Cargo cults are social and religious movements that developed in parts of Melanesia in response to colonial encounters and sudden material change.',
    whyStrange:
      'The term sounds dismissive, but the underlying history is far more complex.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Cargo_cult',
    tags: ['anthropology', 'religion', 'history'],
    collectionIds: ['myths-and-mysteries'],
    scores: scoreSet(55, 76, 89, 45, 86),
  }),
  a({
    id: 'surtsey',
    title: 'Surtsey',
    hook: 'A volcanic island emerged from the sea off Iceland.',
    summary:
      'Surtsey formed in the 1960s and has been tightly protected for scientific study ever since. It is a rare place where geology, ecology, and conservation all meet in real time.',
    whyStrange:
      'It is a brand-new island that immediately became an experiment in not interfering.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Surtsey',
    tags: ['science', 'geology', 'place'],
    collectionIds: ['disasters', 'abandoned-places'],
    scores: scoreSet(60, 74, 88, 81, 87),
  }),
  a({
    id: 'cardiff-giant',
    title: 'Cardiff Giant',
    hook: 'A fake petrified giant fooled 19th-century crowds.',
    summary:
      'The Cardiff Giant was an elaborate hoax created in New York and displayed as a fossilized giant human. It became a celebrated example of American curiosity and credulity.',
    whyStrange:
      'The joke was so successful that people paid money to believe it.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Cardiff_Giant',
    tags: ['hoax', 'history', 'mystery'],
    collectionIds: ['myths-and-mysteries'],
    scores: scoreSet(66, 81, 73, 39, 85),
  }),
  a({
    id: 'cottingley-fairies',
    title: 'Cottingley Fairies',
    hook: 'Two girls produced photographs of fairies that captivated the world.',
    summary:
      'The Cottingley Fairies were a famous early-20th-century photographic hoax that fooled many observers, including some prominent believers in spiritualism.',
    whyStrange:
      'It is a tiny local prank that grew into an international belief drama.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Cottingley_Fairies',
    tags: ['hoax', 'photography', 'mystery'],
    collectionIds: ['myths-and-mysteries'],
    scores: scoreSet(65, 80, 70, 37, 83),
  }),
  a({
    id: 'john-frum',
    title: 'John Frum',
    hook: 'A cargo cult centered on a mysterious promised figure.',
    summary:
      'John Frum is a legendary figure associated with cargo beliefs and political symbolism in parts of Vanuatu. The name became a lasting cultural symbol with layers of colonial and local meaning.',
    whyStrange:
      'It is a belief system built around a name that may itself be a clue, joke, or mythic placeholder.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/John_Frum',
    tags: ['religion', 'anthropology', 'mystery'],
    collectionIds: ['myths-and-mysteries'],
    scores: scoreSet(57, 73, 80, 46, 84),
  }),
  a({
    id: 'taman-shud-case',
    title: 'Taman Shud case',
    hook: 'An unidentified man and a cryptic note became a long-running mystery.',
    summary:
      'The Taman Shud case centers on an unknown deceased man found in Adelaide and the fragment of poetry linked to him. The case has generated decades of speculation and investigative fascination.',
    whyStrange:
      'It has all the ingredients of a spy thriller without ever resolving into one.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Tamam_Shud_Case',
    tags: ['mystery', 'crime', 'history'],
    collectionIds: ['myths-and-mysteries'],
    scores: scoreSet(70, 86, 78, 43, 90),
  }),
  a({
    id: 'isdal-woman',
    title: 'Isdal Woman',
    hook: 'An unidentified woman was found dead in Norway under strange circumstances.',
    summary:
      'The Isdal Woman case remains an unresolved mystery involving aliases, burned belongings, and conflicting clues about her identity and movements.',
    whyStrange:
      'The investigation keeps opening new doors without ever reaching a final room.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Isdal_Woman',
    tags: ['mystery', 'crime', 'history'],
    collectionIds: ['myths-and-mysteries'],
    scores: scoreSet(72, 84, 76, 41, 89),
  }),
  a({
    id: 'pyramiden',
    title: 'Pyramiden',
    hook: 'A Soviet mining town on Svalbard became a frozen monument to abandonment.',
    summary:
      'Pyramiden was a remote Arctic settlement with industrial ambitions, later abandoned after Soviet-era decline. Today it stands as one of the most atmospheric ghost towns in the North.',
    whyStrange:
      'It feels like someone left a planned city in the freezer and never came back.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Pyramiden',
    tags: ['place', 'soviet', 'abandoned'],
    collectionIds: ['abandoned-places', 'cold-war-weirdness'],
    scores: scoreSet(60, 85, 84, 83, 88),
  }),
  a({
    id: 'ten-thousand-year-clock',
    title: 'Clock of the Long Now',
    hook: 'A clock is being designed to tick for ten thousand years.',
    summary:
      'The Clock of the Long Now is a long-term thinking project focused on building a mechanical clock intended to run for millennia. It is as much philosophy and art as engineering.',
    whyStrange:
      'It is a machine built to make time feel bigger than human institutions.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Clock_of_the_Long_Now',
    tags: ['science', 'technology', 'philosophy'],
    collectionIds: ['vanished-technologies'],
    scores: scoreSet(33, 71, 88, 93, 87),
  }),
  a({
    id: 'the-great-moon-hoax',
    title: 'The Great Moon Hoax',
    hook: 'Newspaper reports claimed life had been discovered on the Moon.',
    summary:
      'The Great Moon Hoax was a series of fake newspaper stories that described elaborate lunar life. It is a classic example of 19th-century media sensationalism.',
    whyStrange:
      'A fabricated astronomy story once passed as public fact and made headlines.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Great_Moon_Hoax',
    tags: ['hoax', 'media', 'history'],
    collectionIds: ['myths-and-mysteries'],
    scores: scoreSet(67, 79, 75, 40, 84),
  }),
  a({
    id: 'zzyzx-california',
    title: 'Zzyzx, California',
    hook: 'A desert settlement was named to be the last word in the dictionary.',
    summary:
      'Zzyzx began as an offbeat desert development and health resort with a deliberately memorable name. It has become a roadside curiosity and a symbol of eccentric American branding.',
    whyStrange:
      'It is a place that sounds invented because, in a sense, it was.',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Zzyzx,_California',
    tags: ['place', 'roadside', 'oddity'],
    collectionIds: ['eccentric-rich-projects', 'abandoned-places'],
    scores: scoreSet(54, 77, 71, 60, 82),
  }),
];

export const collections = [];

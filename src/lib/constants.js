export const COMPANY = {
  name: "Hansaria Food",
  tagline: "Bridging Harvests, Building Trust",
  phone: "+91-83369-24060",
  phoneRaw: "+918336924060",
  email: "info@hansariafood.com",
  address: "Kolkata, West Bengal, India",
  logo: "/logo.png",
  slogan: "Farm 2 Factory",
};

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/commodities", label: "Commodity Trading" },
  { to: "/services", label: "Services" },
  { to: "/clients", label: "Clients" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
  { to: "/it-services", label: "IT Services" },
];

export const COMMODITIES = [
  {
    slug: "maize",
    name: "Maize",
    category: "Coarse Grains",
    image:
      "https://images.unsplash.com/photo-1578652903016-b78571b87410?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxtYWl6ZSUyMGNvcm4lMjBtYWNyb3xlbnwwfHx8fDE3ODI3OTYyNzZ8MA&ixlib=rb-4.1.0&q=85",
    blurb:
      "Sourced across India — feed grade and industrial grade maize delivered nationwide.",
  },
  {
    slug: "soya-bean-doc",
    name: "Soya Bean D.O.C.",
    category: "Oil Seeds",
    image:
      "https://images.unsplash.com/photo-1655929299728-93ee15ed7967?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxzb3liZWFuJTIwYWdyaWN1bHR1cmV8ZW58MHx8fHwxNzgyNzk2Mjc2fDA&ixlib=rb-4.1.0&q=85",
    blurb:
      "De-oiled cake with high-protein consistency. Trusted by feed millers across the subcontinent.",
  },
  {
    slug: "wheat",
    name: "Wheat",
    category: "Cereals",
    image:
      "https://images.unsplash.com/photo-1657626625832-2c0851cdaa9b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwyfHx3aGVhdCUyMGZpZWxkJTIwaGFydmVzdCUyMHN1bnNldHxlbnwwfHx8fDE3ODI3OTYyNzV8MA&ixlib=rb-4.1.0&q=85",
    blurb:
      "Milling and industrial-grade wheat with tight moisture and protein specifications.",
  },
  {
    slug: "millet",
    name: "Millet",
    category: "Cereals",
    image:
      "https://images.unsplash.com/photo-1768729339784-bf0b5fb86918?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHw0fHxtaWxsZXQlMjBncmFpbiUyMG1hY3JvfGVufDB8fHx8MTc4Mjc5NjI4NXww&ixlib=rb-4.1.0&q=85",
    blurb:
      "Pearl, finger and foxtail millets — the rediscovered grain of resilience.",
  },
  {
    slug: "mustard-doc",
    name: "Mustard D.O.C.",
    category: "Oil Seeds",
    image:
      "https://images.pexels.com/photos/18346906/pexels-photo-18346906.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    blurb:
      "Mustard de-oiled cake — a protein-rich ingredient for cattle and poultry feed formulations.",
  },
  {
    slug: "broken-rice",
    name: "Broken Rice",
    category: "Cereals",
    image:
      "https://images.unsplash.com/photo-1600387845879-a4713f764110?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwzfHxyaWNlJTIwZ3JhaW4lMjBtYWNyb3xlbnwwfHx8fDE3ODI3OTYyODV8MA&ixlib=rb-4.1.0&q=85",
    blurb:
      "Premium broken rice, maize DDGS and rice DDGS for distilleries and feed manufacturers.",
  },
];

export const CATEGORIES = [
  { name: "Coarse Grains", items: ["Maize", "Sorghum", "Barley"] },
  { name: "Cereals", items: ["Wheat", "Broken Rice", "Millet"] },
  {
    name: "Feed Supplements",
    items: ["Maize DDGS", "Rice DDGS", "Wheat Bran"],
  },
  {
    name: "Oil Seeds",
    items: ["Soya Bean D.O.C.", "Mustard D.O.C.", "Rapeseed"],
  },
];

export const SERVICES = [
  {
    title: "International Presence",
    desc: "From Indian harvests to Southeast Asian ports — a logistics footprint built on decades of relationships.",
    image:
      "https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBwb3J0JTIwbG9naXN0aWNzfGVufDB8fHx8MTc4Mjc5NjI3NXww&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "Market Intelligence Analysis",
    desc: "Daily desks monitor weather, freight, policy and price spreads — so our clients trade with information, not intuition.",
    image:
      "https://images.unsplash.com/photo-1684607961356-1d99dc31aee2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHwzfHxncmFpbiUyMHNpbG9zJTIwYWdyaWN1bHR1cmV8ZW58MHx8fHwxNzgyNzk2Mjc2fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "World-Class Broking",
    desc: "Principal-grade execution: contract structuring, arbitration, quality conformance and on-time settlement.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb3Jwb3JhdGUlMjBoYW5kc2hha2V8ZW58MHx8fHwxNzgyNzk2Mjc2fDA&ixlib=rb-4.1.0&q=85",
  },
];

export const TEAM = [
  {
    name: "Gopal Agarwal",
    role: "Director and Founder",
    bio: "Two decades in physical commodities. Architect of the firm's risk and logistics playbook.",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=faces&fit=crop&w=600&h=600&q=80",
    level: 0,
  },
  {
    name: "Sunita Agarwalla",
    role: "Head — Trading Desk",
    bio: "Oil seeds and feed supplement specialist. Former arbitrator with the Solvent Extractors' Association.",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=faces&fit=crop&w=600&h=600&q=80",
    level: 1,
  },
  {
    name: "Prince Surana",
    role: "Head — Market Analysis",
    bio: "Builds the rail-road-port corridors that keep our cargoes moving on schedule.",
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=faces&fit=crop&w=600&h=600&q=80",
    level: 1,
  },
  {
    name: "Uttam Das",
    role: "Head — Finance",
    bio: "Manages the financial aspects of our operations, ensuring compliance and optimal resource allocation.",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=faces&fit=crop&w=600&h=600&q=80",
    level: 1,
  },
];

export const CLIENTS = [
  "PREMIUM CHICK FEEDS PVT LTD",
  "SUGUNA FOODS PRIVATE LIMITED",
  "SHALIMAR PELLET FEEDS LTD",
  "SONAVETS PVT LTD",
  "GODREJ AGROVET LTD",
  "JAPFA COMFEED INDIA PVT LTD",
  "ABIS EXPORTS INDIA PVT LTD",
  "VENKY'S (INDIA) LIMITED",
  "ITC LIMITED",
  "Farmart india pvt ltd",
  "GUJARAT AMBUJA EXPORTS LTD",
  "RELIANCE RETAIL LTD",
];

export const NEWS = [
  {
    date: "12 Dec 2025",
    tag: "Market Brief",
    title: "Maize prices firm on tightening Bihar arrivals",
    excerpt:
      "Domestic mandi arrivals down 14% week-on-week. Feed demand from poultry clusters keeps the curve in backwardation.",
  },
  {
    date: "04 Dec 2025",
    tag: "Logistics",
    title: "Kandla–Chittagong corridor sees freight relief",
    excerpt:
      "Bunker softness and a longer rabi window push ocean freight 8% lower for Q1 contracts.",
  },
  {
    date: "21 Nov 2025",
    tag: "Policy",
    title: "DDGS export window opens for non-fuel grade",
    excerpt:
      "Revised guidelines allow rice and maize DDGS exports under tighter quality conformance — what it means for distilleries.",
  },
];

export const STATS = [
  { value: "20+", label: "Years in physical trade" },
  { value: "9", label: "Origin markets" },
  { value: "120M", label: "MT shipped annually" },
  { value: "300+", label: "Counterparty relationships" },
];

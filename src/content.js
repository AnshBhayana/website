// All text, links, prices and images live here. Edit this file to update content.
export const site = {
  name: "Ansh Bhayana",
  email: "anshbhayanabusiness@gmail.com",
  instagram: "https://instagram.com/anshbhayana",
  phone: "918860425510",
  phoneDisplay: "+91 88604 25510",
  footerTagline: "Content Creator · Producer · Strategist",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSea7H3ftFiOKIEH9nQzpyyW7Rm7vEpCUCJ2siAr4NaF4yUMlA/viewform",
};

// Moving strip under the nav bar. Edit, add or reorder freely.
export const ticker = [
  "Social Media",
  "Content Strategy",
  "Creative IPs",
  "Content Creation",
  "Video Editing",
  "Brand Films",
  "Ad Films",
  "Scriptwriting",
  "Shoot Production",
  "Creative Direction",
];

export const navLinks = [
  { label: "Work", to: "/work" },
  { label: "Packages", to: "/packages" },
    { label: "Contact", to: "/contact" },
];

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export const hero = {
  eyebrow: "CONTENT CREATOR / PRODUCER / STRATEGIST",
  title: "WE MAKE CONTENT PEOPLE CAN'T SCROLL PAST.",
  lines: ["Ideas. Stories. Strategy. Execution.", "From the first idea to the final frame."],
  cta: "LET'S WORK.",
  image: "/assets/ansh-cutout.webp",
  imageAlt: "Ansh Bhayana in a navy shirt with a sunflower print, looking off to the side",
  meta: ["DELHI, INDIA"],
};

// Verified/unverified flags are for the owner: see README notes in the hand-off.
export const impact = {
  title: "Impact at a glance",
    items: [
    { value: 40, suffix: "+", label: "Celebrity interviews" },
    { value: 30, suffix: "M+", label: "Entertainment platform experience" },
    { value: 300, suffix: "M+", label: "Branded content views" },
    { value: 2.5, suffix: " yrs", label: "Leading Capture A Trip's content team", decimals: 1 },
    { value: 50, suffix: "+", label: "Sponsored trips for content" },
  ],
};

export const work = {
  title: "Some crazy ideas that actually made it out of my head.",
  intro: "Four worlds, one skill set: find the idea, shape the story, get it made.",
  items: [
    {
      number: "01",
      title: "Instant Bollywood",
      role: "Celebrity interviewer, on-camera face, creative producer",
      image: "/assets/work/work-instant-bollywood.webp",
      imageAlt: "Ansh with Shaan, Raveena Tandon and Ali Fazal at Instant Bollywood interviews",
      fit: "contain",   // ← add this line
      logo: "/assets/insta.JPG",
      text: "Interviews for a 30M+ entertainment platform. Research, ideation, scripting and production for every conversation, then viral reel cuts and packaging.",
      results: ["40+ celebrity interviews", "Interviews include Shaan and Raveena Tandon"],
      links: [
        { label: "YouTube interview", href: "https://www.youtube.com/watch?v=rS7zCuus-p0" },
        {
          label: "Instagram feature",
          href: "https://www.instagram.com/p/C5OA3M5PoZe/?img_index=1&igsh=MTNkcmtpdWxncDNtOA%3D%3D",
        },
      ],
    },
    {
      number: "02",
      title: "Capture A Trip",
      role: "Creator, strategist, producer and content lead",
      image: "/assets/work/work-capture-a-trip.webp",
      imageAlt: "Ansh travelling with Capture A Trip",
      fit: "contain",
      text: "Content strategy, sponsored travel campaigns and creator partnerships, from ideation to final execution, with a content team of 10.",
      results: ["2.5 years", "50+ sponsored trips", "Led a team of 10"],
      links: [
        {
          label: "Portfolio film",
          href: "https://drive.google.com/file/d/17W9QiM3AU0Hzy_E8S_m_qJnpYSJ3R4yz/view?usp=drive_link",
        },
        { label: "Instagram work", href: "https://www.instagram.com/p/DWNbd7miS2E/" },
      ],
    },
    {
      number: "03",
      title: "Shark Tank India journey",
      role: "Managed the complete content journey",
      image: "/assets/work/work-shark-tank.webp",
      imageAlt: "Ansh at Shark Tank India 5 with the Capture A Trip team",
      fit: "contain",   // ← add this line
      text: "Capture A Trip's Shark Tank story from application and selection to the TV appearance, episode launch and post-air marketing, built around the founder and company story.",
      results: ["Application to post-air marketing", "TV appearance and episode launch"],
      links: [
        { label: "Shark Tank work", href: "https://www.instagram.com/p/DTJyMy0kncE/" },
        { label: "Campaign work", href: "https://www.instagram.com/p/DTKoRbfDJbX/" },
      ],
    },
    {
      number: "04",
      title: "Creator work",
      role: "Creator, on-camera, branded content",
      image: "/assets/work/work-creator.webp",
      imageAlt: "Instagram reel insights showing 41M, 22M and 9M views",
      fit: "contain",
      text: "Brand collaborations and creator-led campaigns, executed on camera: viral reels, features across media pages and branded content.",
      results: ["300M+ branded content views", "Red Label, Head & Shoulders, Nothing, Flipkart, Ubon"],
      links: [
        { label: "Featured reel", href: "https://www.instagram.com/reel/DMDJtvtSPmE/" },
        { label: "All creator work", href: "https://www.instagram.com/anshbhayana/reels/" },
      ],
    },
  ],
};

export const services = {
  title: "What we do",
  intro: "Pick one part of the content engine, or hand me the whole thing.",
  categories: [
    {
      title: "Content strategy & consulting",
      items: [
        "Social media strategy",
        "Content pillars and positioning",
        "Audience research",
        "Content calendars",
        "Trend mapping",
        "Campaign strategy",
        "Performance reviews",
        "Brand storytelling",
      ],
    },
    {
      title: "Creative development & ideation",
      items: [
        "Viral reel concepts",
        "Hooks and scripting",
        "Short-form storytelling",
        "Recurring content formats",
        "Brand integration concepts",
        "Campaign ideation",
        "Creative direction",
      ],
    },
    {
      title: "Creator & on-camera content",
      items: [
        "UGC and branded content",
        "On-camera hosting",
        "Celebrity interviews",
        "Creator-led campaigns",
        "Anchoring and presenting",
        "Comedy and relatable content",
        "Brand collaborations",
      ],
    },
    {
      title: "Production & creative direction",
      items: [
        "Production planning",
        "Shoot direction",
        "Creator coordination",
        "Cinematography coordination",
        "Editing supervision",
        "Production execution",
        "Post-production coordination",
      ],
    },
    {
      title: "Content operations & campaign management",
      items: [
        "End-to-end content management",
        "Content team leadership",
        "Influencer and creator coordination",
        "Campaign execution",
        "Brand integrations",
        "Content packaging and distribution",
        "Project management",
      ],
    },
  ],
};

export const experience = {
  title: "The journey so far",
  items: [
    {
      name: "Instant Bollywood",
      role: "Celebrity interviewer, on-camera face and creative producer",
      period: "",
      image: "/assets/celebs/celeb-05.webp",
      imageAlt: "Ansh with a guest, both giving a thumbs up",
      points: [
        "Researched, ideated, scripted and conducted 40+ celebrity interviews",
        "Interviews include Shaan and Raveena Tandon",
        "Managed viral reel cuts and packaging for a 30M+ entertainment platform",
      ],
    },
    {
      name: "Capture A Trip",
      role: "Creator, strategist, producer and content lead",
      period: "2.5 years",
      image: "/assets/capture.webp",
      imageAlt: "Capture A Trip logo",
      fit: "contain",
      points: [
        "Built content, marketing strategies and IPs",
        "Created content around 50+ sponsored trips",
        "Led the content team of 10 from ideation to final execution",
      ],
    },
    {
      name: "Shark Tank India",
      role: "Managed the complete Shark Tank content journey",
      period: "",
      image: "/assets/shark.webp",
      imageAlt: "Ansh at Shark Tank India",
      points: [
        "Managed the application and selection journey",
        "Handled the TV appearance, episode launch and post-air marketing",
        "Creative ideation around the founder and company story",
      ],
    },
    {
      name: "Independent creator",
      role: "Creator and brand collaborator",
      period: "",
      image: "/assets/creator.webp",
      imageAlt: "Ansh's Instagram profile",
      fit: "contain",
      points: [
        "Viral reels and features across media pages",
        "Branded content crossing 300M+ views",
        "Collaborations with Red Label, Head & Shoulders, Nothing, Flipkart and Ubon",
      ],
    },
  ],
};

export const gallery = {
  title: "Trusted by your favourites",
  intro: "Interview sets, event floors and the people in between.",
  speed: 90,
  photos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((n) => ({
    src: `/assets/celebs/celeb-${String(n).padStart(2, "0")}.webp`,
    alt: "Ansh with a guest on set",
    width: [5, 12, 17].includes(n) ? { 5: 1013, 12: 1349, 17: 1140 }[n] : 570,
    height: 760,
  })),
};

export const brands = {
  title: "Brands I've created for",
  speed: 100,
  // Logo files live in /public/assets/brands/ (trimmed, transparent webp). Order here = order on screen.
  logos: [
    { name: "Brooke Bond Red Label", src: "/assets/brands/brooke-bond.webp", width: 298, height: 260 },
    { name: "Head & Shoulders", src: "/assets/brands/head-and-shoulders.webp", width: 493, height: 260 },
    { name: "Nothing", src: "/assets/brands/nothing.webp", width: 700, height: 126 },
    { name: "Swiggy", src: "/assets/brands/swiggy.webp", width: 198, height: 260 },
    { name: "Ubon", src: "/assets/brands/ubon.webp", width: 700, height: 206 },
    { name: "JioHotstar", src: "/assets/brands/jiohotstar.webp", width: 700, height: 184 },
    { name: "Ash & Eve", src: "/assets/brands/ash-and-eve.webp", width: 700, height: 221 },
    { name: "Gizmore", src: "/assets/brands/gizmore.webp", width: 700, height: 111 },
    { name: "Atrangi Events", src: "/assets/brands/atrangi-events.webp", width: 258, height: 260 },
    { name: "Shotgun", src: "/assets/brands/shotgun.webp", width: 316, height: 260 },
    { name: "Capture a Trip", src: "/assets/brands/capture-a-trip.webp", width: 700, height: 255 },
    { name: "Toreto", src: "/assets/brands/toreto.webp", width: 700, height: 163 },
    { name: "Smaaash", src: "/assets/brands/smaaash.webp", width: 512, height: 219 },
    { name: "Maggi", src: "/assets/brands/maggi.webp", width: 512, height: 219 },

  ],
};

export const whyModel = {
  title: "One senior person.|A network behind them.",
  intro: "You get strategy, ideas, direction and execution from the same person, so you stop coordinating a pile of freelancers.",
  items: [
    {
      title: "One senior point of contact",
      text: "Ansh brings together strategy, ideation, creative direction and execution. One brief, one conversation, one person accountable.",
    },
    {
      title: "Extended execution network",
      text: "When a project needs more production muscle, Ansh coordinates editors, cinematographers, actors, influencers and other specialists.",
    },
  ],
};

export const packages = {
  title: "Ways to work together",
  intro: "Monthly retainers for brands that want consistent content without a full-time hire.",
    items: [
    {
      name: "Content Brain",
      tagline: "If you have existing content resources",
      features: [
        "Monthly content strategy",
        "20–30 content ideas",
        "Hooks and formats",
        "Content calendar",
        "Trend mapping",
      ],
    },
    {
      name: "Content Partnership",
      tagline: "Complete end to end social media solution",
      featured: true,
      features: [
        "Everything in Content Brain",
        "20 Reels: Content Strategy, Ideation & Scripting",
        "10 Carousels: Conceptualisation, Copywriting & Content Planning",
        "Creator Led Content Execution & On Camera Hosting",
        "Shoot Planning, Direction & Production Coordination",
        "Professional Video Editing & Reel Packaging",
        "Creative Design & Carousel Execution",
        "Experienced Content & Creative Team",
      ],
    },
    {
      name: "Content Studio",
      tagline: "Brand films, ad films & high quality reels",
      features: [
        "Brand Strategy & Creative Ideation",
        "8 Original Advertising Concepts & Scripts",
        "End to End Production of 8 Ad Reels",
        "Professional Cinematography & Camera Setup",
        "Professional Actors & On Camera Talent",
        "Shoot Planning, Direction & Production Management",
        "High Quality Video Editing, Sound Design & Final Packaging",
      ],
    },
  ],
  custom: {
    name: "Custom projects",
    text: "For standalone campaigns, shoots, brand integrations, interviews and other creative projects.",
    cta: "Enquire about a project",
  },
};

export const contact = {
  title: "HAVE A CONTENT PROBLEM? LET'S BUILD THE ANSWER.",
  text: "Strategy, ideas, creation or the whole thing.",
  projectTypes: [
    "Content Brain",
    "Content Partner",
    "Content Studio",
    "Custom project",
    "Interview or hosting",
    "Not sure yet",
  ],
  budgets: [
    "Under ₹25,000",
    "₹25,000–₹30,000 / month",
    "₹45,000–₹55,000 / month",
    "₹65,000–₹75,000 / month",
    "Project-based, above ₹75,000",
    "Not sure yet",
  ],
};

// All the text, links and images on the site live here.
// Edit this file to update the content without touching the layout.

export const site = {
  name: "ANSH BHAYANA",
  footerName: "Ansh Bhayana",
  footerTagline: "Content Strategist · Creator · Creative Producer",
  email: "anshbhayanabusiness@gmail.com",
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Content Creator · Producer · Strategist",
  title: "Content people actually want to watch.",
  intro:
    "Think of me as the social media boyfriend your brand needs but never hired. I bring the ideas, make the content, fix the chaos and occasionally tell the algorithm what it wants to hear.",
  ctaLabel: "Work with me",
  ctaHref: "#contact",
  image: "/assets/hero.webp",
  imageAlt: "Ansh Bhayana portrait",
  captionTitle: "ANSH BHAYANA",
  captionText: "Creator · Producer · Strategist",
  stats: [
    { value: "1000M+", label: "Content views" },
    { value: "2000+", label: "Pieces created" },
    { value: "40+", label: "Celebrity interviews" },
    { value: "200K → 600K", label: "Capture A Trip journey" },
  ],
};

export const services = {
  title: "What I do",
  intro:
    "Tired of hiring someone for one “viral reel”, another person for strategy and then three more people to actually get the thing made? You got this. I can plug into the mess, figure out what the brand actually needs and take it from idea to execution.",
  items: [
    {
      title: "Content Strategy",
      text: "Content pillars, formats, calendars, trend mapping, audience thinking, campaign direction and performance reviews.",
    },
    {
      title: "Ideation",
      text: "Hooks, reel concepts, scripts, recurring formats, campaign ideas and brand integrations built for social behaviour.",
    },
    {
      title: "Creator Content",
      text: "On camera execution, hosting, UGC, relatable formats, comedy, storytelling and creator led brand content.",
    },
    {
      title: "Creative Direction",
      text: "From brief to shoot. Direction, production planning, creator coordination, editing supervision and execution.",
    },
  ],
};

export const work = {
  title: "Selected work",
  intro:
    "Not even 1% of what I’ve done. Just enough to show you how many worlds I can create in.",
  // fit: "cover" (default) fills the 16:9 frame; use "contain" for images that are not 16:9.
  items: [
    {
      number: "01",
      title: "Instant Bollywood",
      image: "/assets/insta.JPG",
      imageAlt: "Instant Bollywood",
      thumbClass: "workthumbInstant",
      fit: "contain",
      // round: true crops a square logo into a circle
      round: true,
      text: "Celebrity interviewer, on camera face and creative producer for a 30M+ entertainment platform. I researched, ideated, scripted and conducted 40+ celebrity interviews, including Shaan and Raveena Tandon, while also managing viral reel cuts and packaging.",
      links: [
        { label: "YouTube interview →", href: "https://www.youtube.com/watch?v=rS7zCuus-p0" },
        {
          label: "Instagram feature →",
          href: "https://www.instagram.com/p/C5OA3M5PoZe/?img_index=1&igsh=MTNkcmtpdWxncDNtOA%3D%3D",
        },
      ],
    },
    {
      number: "02",
      title: "Capture A Trip",
      image: "/assets/capture.webp",
      imageAlt: "Capture A Trip",
      thumbClass: "workthumbCapture",
      text: "2.5 years as Creator, Strategist, Producer and Content Lead. Built content, marketing strategies and IPs, created content around 30+ sponsored trips and led the content team of 10 from ideation through final execution.",
      links: [
        {
          label: "Portfolio film →",
          href: "https://drive.google.com/file/d/17W9QiM3AU0Hzy_E8S_m_qJnpYSJ3R4yz/view?usp=drive_link",
        },
        { label: "Instagram work →", href: "https://www.instagram.com/p/DWNbd7miS2E/" },
      ],
    },
    {
      number: "03",
      title: "Shark Tank Journey",
      image: "/assets/shark.webp",
      imageAlt: "Ansh Bhayana at Shark Tank India",
      thumbClass: "workthumbShark",
      text: "Managed Capture A Trip’s complete Shark Tank content journey, from application and selection to the TV appearance, episode launch, post air marketing and creative ideation around the founder and company story.",
      links: [
        { label: "Shark Tank work →", href: "https://www.instagram.com/p/DTJyMy0kncE/" },
        { label: "Campaign work →", href: "https://www.instagram.com/p/DTKoRbfDJbX/" },
      ],
    },
    {
      number: "04",
      title: "Creator Work",
      image: "/assets/creator.webp",
      imageAlt: "Ansh Bhayana creator work",
      thumbClass: "creatorThumb",
      fit: "contain",
      text: "As a creator myself, I’ve built viral reels, been featured across media pages and created branded content for Red Label, Head & Shoulders, Nothing, Flipkart, Ubon and more, with branded content crossing 20M+ views.",
      links: [
        { label: "Featured reel →", href: "https://www.instagram.com/reel/DMDJtvtSPmE/" },
        { label: "All creator work →", href: "https://www.instagram.com/anshbhayana/reels/" },
      ],
    },
  ],
};

export const whyModel = {
  title: "Why this model",
  intro:
    "You do not need another person on payroll just to get senior content thinking. Bring me in for the part of the content engine you actually need.",
  items: [
    {
      title: "One senior point of contact",
      text: "I handle strategy, ideas, creative direction and creator execution instead of making you coordinate multiple freelancers.",
    },
    {
      title: "An extended execution network",
      text: "When an idea needs more production, I can bring in trusted editors, cinematographers, actors, influencers and production specialists.",
    },
  ],
};

export const packages = {
  title: "Ways to work together",
  intro:
    "Flexible retainers for brands that need consistent content support without a full time content hire.",
  items: [
    {
      name: "Content Brain",
      price: "₹25K to ₹30K / month",
      featured: false,
      features: [
        "Monthly content strategy",
        "12 to 16 content ideas",
        "Hooks and formats",
        "Content calendar",
        "Trend mapping",
        "Monthly strategy call",
      ],
    },
    {
      name: "Content Partner",
      price: "₹45K to ₹55K / month",
      // priceNote: "Editing/Revisions on Requirement*",
      featured: true,
      features: [
        "Everything in Content Brain",
        "5 to 7 original scripts written by me",
        "Hook to CTA scripting with execution",
        "Creator led content",
        "On camera execution",
        "Editing on requirement",
        "Creative direction",
      ],
    },
    {
      name: "Content Studio",
      price: "₹65K to ₹75K / month",
      // priceNote: "Editing/Revisions on Requirement*",
      featured: false,
      features: [
        "Strategy and ideation",
        "10 original scripts written by me",
        "Hook to CTA scripting with execution",
        "3 high production camera and edit shoots per month",
        "Creator coordination",
        "Editing on requirement",
        "Campaign concepts",
      ],
    },
  ],
};

export const contact = {
  eyebrow: "Selected freelance partnerships",
  title: "Have a content problem? Let's build the answer.",
  text: "Strategy, ideas, creation or the whole thing.",
};

// Auto-scrolling photo strip under the hero.
// Add a name (e.g. name: "Raveena Tandon") to show it as a caption on that photo
// and to use it as the image's alt text. Leave it "" to show no caption.
// To add a photo: drop a .webp/.jpg into public/assets/celebs/ and add a row below.
export const celebStrip = {
  // eyebrow: "40+ CELEBRITY INTERVIEWS",
  // intro: "Some of the people I've had the chance to create with and interview.",
  // label: "Ansh with guests and celebrities",
  // Seconds for one full loop. Bigger number = slower.
  speed: 90,
  photos: [
    { src: "/assets/celebs/celeb-01.webp", width: 570, height: 760, name: "" },
    { src: "/assets/celebs/celeb-02.webp", width: 570, height: 760, name: "" },
    { src: "/assets/celebs/celeb-03.webp", width: 570, height: 760, name: "" },
    { src: "/assets/celebs/celeb-04.webp", width: 570, height: 760, name: "" },
    { src: "/assets/celebs/celeb-05.webp", width: 1013, height: 760, name: "" },
    { src: "/assets/celebs/celeb-06.webp", width: 570, height: 760, name: "" },
    { src: "/assets/celebs/celeb-07.webp", width: 570, height: 760, name: "" },
    { src: "/assets/celebs/celeb-08.webp", width: 570, height: 760, name: "" },
    { src: "/assets/celebs/celeb-09.webp", width: 570, height: 760, name: "" },
    { src: "/assets/celebs/celeb-10.webp", width: 570, height: 760, name: "" },
    { src: "/assets/celebs/celeb-11.webp", width: 570, height: 760, name: "" },
    { src: "/assets/celebs/celeb-12.webp", width: 1349, height: 760, name: "" },
    { src: "/assets/celebs/celeb-13.webp", width: 570, height: 760, name: "" },
    { src: "/assets/celebs/celeb-14.webp", width: 570, height: 760, name: "" },
    { src: "/assets/celebs/celeb-15.webp", width: 570, height: 760, name: "" },
    { src: "/assets/celebs/celeb-16.webp", width: 570, height: 760, name: "" },
    { src: "/assets/celebs/celeb-17.webp", width: 1140, height: 760, name: "" },
    { src: "/assets/celebs/celeb-18.webp", width: 570, height: 760, name: "" },
    { src: "/assets/celebs/celeb-19.webp", width: 570, height: 760, name: "" },
  ],
};

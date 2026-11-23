// ALL the copy and links for the site. Edit text here, not in the components.
// Copy comes word-for-word from copy.md (the client's company profile).

export const site = {
  name: "Seyi Israel Music Ltd",
  shortName: "Seyi Israel Music",
  meta: {
    title: "Seyi Israel Music Ltd | Inspirational music, worship & artist development",
    description:
      "Seyi Israel Music Ltd is a UK-based music company dedicated to producing, promoting, and distributing inspirational music.",
  },
  location: { label: "Derby, UK", timeZone: "Europe/London" },
  address: ["18 Selborne Street", "Derby DE24 8WF", "United Kingdom"],
  // TODO: add the client's email and phone. Empty values are hidden on the page.
  email: "",
  phone: "",
  // TODO: add real links. Entries with an empty href are hidden.
  socials: [
    { label: "YouTube", href: "" },
    { label: "Spotify", href: "" },
    { label: "Apple Music", href: "" },
    { label: "Instagram", href: "" },
    { label: "Facebook", href: "" },
  ],
};

export const nav = [
  { label: "About", href: "/#about" },
  { label: "What We Do", href: "/#services" },
  { label: "Mission", href: "/#mission" },
  { label: "Values", href: "/#values" },
];

export const hero = {
  word: "Worship.",
  kicker: ["Producing", "Promoting", "Distributing"],
  kickerNote: "inspirational music",
  lead: "We combine creativity, worship, and artistry to create content that uplifts, inspires, and engages",
  leadAccent: "diverse audiences.",
  marquee: "Work With Us",
};

export const about = {
  label: "Who We Are",
  lead:
    "Seyi Israel Music Ltd is a UK-based music company dedicated to producing, promoting, and distributing inspirational music.",
  body:
    "Founded by Seyi Israel, a professional worship leader, singer, and music entrepreneur, the company combines creativity, worship, and artistry to create content that uplifts, inspires, and engages diverse audiences.",
  platform:
    "The company also serves as a platform for artist development, music production, project management, live performance, media engagement, and event management, aiming to bring high-quality, faith-inspired music to global audiences.",
  tags: [
    "Artist development",
    "Music production",
    "Project management",
    "Live performance",
    "Media engagement",
    "Event management",
  ],
  founder: { name: "Seyi Israel", role: "Founder · Worship leader, singer & music entrepreneur" },
};

export const services = {
  label: "What We Do",
  title: "Seyi Israel Music Ltd operates across multiple interconnected areas:",
  items: [
    {
      title: "Music Production & Distribution",
      points: [
        "Recording, producing, and releasing original music",
        "Managing streaming, digital distribution, and music media content",
        "Developing portfolios for emerging artists",
      ],
      tags: ["Recording", "Distribution", "Streaming"],
      image: "service-production.jpg",
    },
    {
      title: "Music Project Management & Live Events",
      points: [
        "Managing music projects, concerts, and live performances",
        "Coordinating production, logistics, and creative direction",
        "Organizing worship nights, concerts, and talent showcases",
      ],
      tags: ["Concerts", "Worship nights", "Showcases"],
      image: "service-live.jpg",
    },
    {
      title: "Talent Discovery & Development",
      points: [
        "Identifying and mentoring emerging artists and worship leaders",
        "Delivering structured workshops for personal transformation and confidence-building",
        "Fostering creative expression, emotional wellbeing, and vocational skill development",
      ],
      tags: ["Mentorship", "Worship leaders", "Wellbeing"],
      image: "service-talent.jpg",
    },
    {
      title: "Workshops & Skills Training",
      intro: "Participants engage in practical workshops that include:",
      points: [
        "Songwriting and music production",
        "Performance and creative collaboration",
        "Creative entrepreneurship",
        "Music business fundamentals",
        "Digital marketing and personal branding",
      ],
      tags: ["Songwriting", "Music business", "Branding"],
      image: "service-workshops.jpg",
    },
    {
      title: "Media & Creative Engagement",
      points: [
        "Developing music media content for social platforms, broadcast, and streaming",
        "Managing public relations, content creation, and digital engagement",
      ],
      tags: ["Content", "Broadcast", "PR"],
      image: "service-media.jpg",
    },
  ],
};

export const vision = {
  label: "Our Vision",
  text:
    "To become a leading UK-based music company that inspires worship, nurtures talent, and creates global impact through music, while empowering artists and communities to reach their full creative potential.",
};

export const mission = {
  label: "Our Mission",
  title: "To raise gospel singers, empower artists, and impact communities through music by:",
  items: [
    "Producing and distributing professional music across multiple genres",
    "Managing music projects, live performances, concerts, and all music media",
    "Providing mentorship, talent discovery, and development for emerging artists",
    "Organizing live events, worship sessions, and workshops",
    "Equipping participants with vocational and employable skills in the music industry",
  ],
};

export const values = {
  label: "Our Values",
  items: [
    { title: "Creativity", text: "Encouraging artistic expression and innovation" },
    { title: "Integrity", text: "Upholding high ethical and professional standards" },
    { title: "Excellence", text: "Delivering high-quality music, workshops, and events" },
    { title: "Empowerment", text: "Developing artists and leaders for sustainable careers" },
    { title: "Transformation", text: "Supporting personal growth and community impact" },
  ],
};

export const governance = {
  label: "Governance",
  text:
    "Seyi Israel Music Ltd is governed by a board of directors, ensuring compliance with UK company law, ethical business practice, and safeguarding standards. All operations—including production, talent mentoring, live events, and media management—are overseen to maintain professional standards and financial transparency.",
  activities: [
    "Performing arts",
    "Sound recording and music publishing activities",
    "Organisation of conventions, concerts, and shows",
    "Motion picture, video, television programme production activities",
  ],
};

export const contact = {
  label: "Work With Us",
  title: "Bring high-quality, faith-inspired music to global audiences.",
  form: {
    title: "Send us a message",
    button: "Send Message",
    // Where messages go. Falls back to CONTACT_TO in the environment (see README).
    to: "", // TODO: client's inbox, e.g. hello@seyiisraelmusic.com
    confirmation: "Thank you. Your message has been sent and we'll be in touch soon.",
    error: "Sorry, your message couldn't be sent right now. Please try again shortly.",
    // Shown under the submit button, followed by a link to /privacy
    privacyNote: "We'll only use your details to reply to your message.",
    interests: [
      { value: "production", label: "Music production & distribution" },
      { value: "events", label: "Project management & live events" },
      { value: "talent", label: "Talent discovery & development" },
      { value: "workshops", label: "Workshops & skills training" },
      { value: "media", label: "Media & creative engagement" },
      { value: "other", label: "Something else" },
    ],
  },
};

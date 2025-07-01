import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Osama",
  lastName: "Iqbal",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Design Engineer",
  avatar: "/images/avatar.jpg",
  email: "iqbalosama365@gmail.com",
  location: "Asia/Karachi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      Get the latest on affiliate tools, AI automation, SEO tricks, and passive income strategies.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/osamaiqbal46",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/osamaiqbal",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.net/@osamaiqbal",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building Bridges Between Designs And Codes</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Osama, an affiliate marketer and AI automation expert at <Logo icon="/trademarks/wordmark-dark.svg" style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft systems that grow traffic, leads, and passive income.
<br /> In my spare time, I build AI tools, SEO blogs, and scale digital products at ViralMarketX.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Osama is a Pakistan-based affiliate marketer and digital automation expert. He specializes in
        helping businesses scale using SEO blogging, AI tools, and smart affiliate strategies. He’s
        the founder of <strong>ViralMarketX</strong>, a platform for earning with digital products.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "ViralMarketX",
        timeframe: "2023 - Present",
        role: "Founder & Lead Marketer",
        achievements: [
          <>
            Generated 10k+ leads using smart automation and AI tools.
          </>,
          <>
            Built affiliate blogs that rank and convert using SEO + AI.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Amazon & Digital Product Affiliates",
        timeframe: "2023 - Present",
        role: "Affiliate Partner",
        achievements: [
          <>
            Promoted and reviewed products in tech, health, and beauty niches.
          </>,
          <>
            Grew multiple niche blogs and YouTube funnels for commissions.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Oxford College PAF Base Karachi",
        description: <>Completed professional certifications in Tech.</>,
      },
      {
        name: "AI Automation Courses",
        description: <>Focused on building automation systems using Python and APIs.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Tools & Skills",
    skills: [
      {
        title: "AI & Automation",
        description: <>Built bots, API tools, and automations using OpenAI, Python, and WordPress.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Affiliate Blogging",
        description: <>Ranked SEO blogs and monetized through Amazon, Digistore24, and AdSense.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Smart Marketing, SEO & AI Blogs",
  description: `Insights from ${person.name} on digital growth, automation, and affiliate strategies`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Explore tools and automations built by ${person.name} for affiliate success.`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

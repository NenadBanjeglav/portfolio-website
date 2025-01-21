export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I thrive in team environments and enjoy collaborating with colleagues and clients.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "Flexible with working hours and comfortable with both remote and office work.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start mb-15",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Constantly striving to progress",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Always willing to go the extra mile.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning React Native Expo",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Auto Škola Drive Team",
    des: "Razvio sam modernu, responzivnu landing stranicu za Auto Školu Drive Team iz Novog Sada kao svoj prvi samostalni freelance projekat. Koristeći Next.js, Tailwind CSS i Framer Motion, kreirao sam vizuelno privlačan i dinamičan dizajn sa glatkim animacijama za unapređenje korisničkog iskustva. Projekat je obuhvatao integraciju obrazaca za prijavu, sekcija za cene i informativnih elemenata koji studentima pružaju sve potrebne informacije na jednom mestu, sa naglaskom na intuitivnu navigaciju i estetsku privlačnost.",
    img: "/DriveTeamPic.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://auto-skola-dt.vercel.app/",
  },
  {
    id: 2,
    title: "Programersko Pitanje",
    des: "Programersko Pitanje je online platforma namenjena mladim programerima koji žele da unaprede svoje veštine i znanje u IT industriji. Ovaj sajt pruža prostor za postavljanje pitanja, deljenje iskustava i razmenu ideja među članovima zajednice. Bez obzira da li se radi o početnicima u programiranju ili iskusnim profesionalcima.",
    img: "/programersko.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/mongodb-svgrepo-com.svg",
      "/c.svg",
    ],
    link: "https://programersko-pitanje.vercel.app/",
  },
  {
    id: 3,
    title: "Home Away",
    des: "AirBnB Clone rental booking app",
    img: "/home-awayss.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/prisma-2.svg",
      "/supabase-icon.svg",
      "/c.svg",
    ],
    link: "https://home-away-seven-iota.vercel.app/",
  },
  {
    id: 4,
    title: "GlassMarket Ecommerce",
    des: "E-commerce shop for Glass Market Glassware",
    img: "/glassmarket.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/sanity.svg", "/c.svg"],
    link: "https://glassmarket.dev/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "Freelance Frontend Developer Intern (AI & E-commerce MVP)",
    desc: "Working on an AI-powered analytics MVP as a freelance intern for sellers on a major e-commerce platform, aimed at providing actionable insights to enhance seller performance and decision-making. Utilizing Next.js, GraphQL, TypeScript, Tailwind CSS, and Firebase to develop a responsive, data-driven interface that supports real-time analysis. Collaborating with an international team to integrate AI models and deliver a seamless user experience, following agile development practices.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 3,
    title: "Freelance Website Language Method Dev Project",
    desc: "Leading the dev of language learning method product website for a client, from initial concept to deployment..",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "UI/UX Developer Internship",
    desc: "To solidify my knowledge, I aplied my skills in real-world scenarios during my time at Vega IT, where I contributed to UI/UX development project.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Website Dev Project",
    desc: "Leading the dev of personal training website for a client, from initial concept to deployment..",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/NenadBanjeglav",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/nenad-banjeglav-1923a21b1/",
  },
];

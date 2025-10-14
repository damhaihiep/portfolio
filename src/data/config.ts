const config = {
  title: "Hiep Dam Hai | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Hiep, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Hiep, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Hiep",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Hai Hiep",
  email: "damhaihiep1996@gmail.com",
  site: "https://haihiep.dev",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/nothotchaddi",
    linkedin: "https://www.linkedin.com/in/dam-hai-hiep-55366b1b7/",
    instagram: "https://www.instagram.com/hotchaddi",
    facebook: "https://www.facebook.com/HotChaddi/",
    github: "https://github.com/damhaihiep",
  },
};
export { config };

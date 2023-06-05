import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Mean Stack Developer",
      company_name: "Teksystems Global Services",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Sep 2022 - Present",
      points: [
        "Developed a secure full-stack web app using Angular, Bootstrap,MongoDB, and Nodejs with emphasis on user authentication and validation.",
        "Utilized Postman for API testing, ensuring accurate functionality",
        "Integrated MongoDB for efficient storage and management of user data, including files and images.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Developed a timesheet automation project using Blue Prism,implementing logical workflows, multiple stages, and calculations for accurate time tracking",
        "Utilized Blue Prism to automate recording, validation, and calculations, reducing errors and manual effort.",
        "Implemented error handling for a reliability and precision.",
      ],
    },
    {
      title: "Technical Trainee",
      company_name: "Teksystems Global Services",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - July 2022",
      points: [
        "Completed training and Developed web applications using Angular and utilized SQL for data management and analysis.",
        "Completed training on Python and implemented scripts for automation",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Kartar proved me wrong.",
      name: "Sundar Pichai",
      designation: "CEO",
      company: "Google",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Sundar_Pichai.jpg/800px-Sundar_Pichai.jpg?20150113205915",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Kartar does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After optimizing our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Projectify",
      description:
        "Web-Application platform that allows users to search, store, and manage projects informations from various clients, providing a convenient and efficient solution for storing and managing.",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css/bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/kartarSingh02/Projectify-MeanStack",
    },
    {
      name: "Ping Pong Game",
      description:
        "Developed a ping-pong using python and turtle which is a multiplayer game.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "turtle",
          color: "green-text-gradient",
        },
        {
          name: "physicsphython",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Portfolio",
      description:
        "A portfolio made using React.js is a dynamic and interactive website that showcases a person's or a company's work, projects, skills, and achievements.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindCss",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
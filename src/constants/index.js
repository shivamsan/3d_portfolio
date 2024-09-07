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

    
    threejs,
    myeats,
    musicplayer,
    drowsiness,

    codeclause,
    edunet,
    yp,
    ps,
    im,
    
    
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
      title: "Blockchain Developer",
      icon: mobile,
    },
    {
      title: "ML Developer",
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
      title: "Web Development Internship",
      company_name: "Edunet Foundation",
      icon: edunet,
      iconBg: "#383E56",
      date: "Feb 2024 - April 2024",
      points: [
        "Developed a Food Ordering Website: Designed and implemented a dynamic and responsive food ordering platform.",
        "Created an engaging and user-friendly interface to enhance customer experience and streamline navigation.",
        "Successfully integrated a chatbot using Google Dialogflow service to handle customer queries and provide real-time assistance, improving customer interaction.",
        "Implemented an efficient order management system, allowing users to place, track, and manage their food orders.",
      ],
    },
    {
      title: "Web Development Internship",
      company_name: "CodeClause",
      icon: codeclause,
      iconBg: "#E6DEDD",
      date: "Dec 2023 - Jan 2024",
      points: [
        "Built a web-based text editor providing users with rich text editing capabilities.",
        "Enabled functionalities such as text highlighting, bold, italics, various heading levels, text alignment, and more to enhance document formatting.",
        "Designed an intuitive and clean interface to make text editing simple and accessible for users.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "The drowsiness detection system is impressive—accurate alerts and smooth functionality!",
      name: "Yashodeep Patil",
      image: yp,
    },
    {
      testimonial:
        "Great design and easy navigation—ordering my favorite dishes is quick and simple.",
      name: "Pritam Singh",
      image: ps,
    },
    {
      testimonial:
        "The editor's features and customization options make it a powerful tool for all my text editing needs.",
      name: "Ishaan Matto",
      image: im,
    },
  ];
  
  const projects = [
    {
      name: "Music Streaming Website",
      description:
        "Created a fully functional music streaming platform. Designed an intuitive and visually appealing interface to enhance the user experience and facilitate easy navigation. Implemented features allowing users to create playlists, search for tracks, and control playback seamlessly.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
      ],
      image: musicplayer,
      source_code_link: "https://github.com/shivamsan/Groovista",
    },
    {
      name: "Drowsiness Detection System",
      description:
        "Implemented a real-time computer vision project utilizing facial mapping techniques to track users’ eyes and head position through coordinate analysis. Implemented an alert mechanism to trigger alarms upon detecting drowsiness, enhancing safety and attentiveness. Enhanced safety and attentiveness in various contexts, showcasing skills in computer vision, real-time monitoring, and AI-based safety solutions.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "OpenCV",
          color: "green-text-gradient",
        },
        {
          name: "YOLO",
          color: "pink-text-gradient",
        },
      ],
      image: drowsiness,
      source_code_link: "https://github.com/shivamsan/Open_CV_Drowsiness_Detector",
    },
    {
      name: "My Eats",
      description:
        "Developed a Food Ordering Website: Designed and implemented a dynamic and responsive food ordering platform. Created an engaging and user-friendly interface to enhance customer experience and streamline navigation. Successfully integrated a chatbot using Google Dialogflow service to handle customer queries and provide real-time assistance, improving customer interaction. Implemented an efficient order management system, allowing users to place, track, and manage their food orders.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "Dialogflow",
          color: "green-text-gradient",
        },
      ],
      image: myeats,
      source_code_link: "https://github.com/shivamsan/myeats",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };
import { ITeamMember } from "@/components/Aboutpage/AboutPage";
import { IFilterButton } from "@/components/Button/FilterButton";
import { IReachout } from "@/components/Contactpage/Reachout";
import { ICourse } from "@/components/CourseCard/CourseCard";
import { IReason } from "@/components/HomepageComp/Chooseus";
import { IFaq } from "@/components/HomepageComp/Faq";
import { ITestimony } from "@/components/HomepageComp/Testimonials";
import { IPlan } from "@/components/Payments/Payments";

export const AllCourses: ICourse[] = [
  {
    name: "Foundation Level ( Level 0-1)",
    img: "/brain/abacus.jpeg",
    dollarPrice: 245.99,
    nairaPrice: null,
    level: "Beginner",
    category: "Most Popular",
    isLoved: false,
    rating: 4.9,
    noEnrolled: 100,
    field: "Abacus",
    id: 1,
    desc: "Abacus classes are designed to help children enhance their math skills and overall cognitive abilities. Using an abacus, students master quick and accurate arithmetic while improving concentration, memory, and problem-solving skills. These classes make learning math interactive and enjoyable, turning numbers into a game of logic and visualisation. Abacus training boosts confidence, sharpens the mind, and lays a strong foundation for lifelong learning. It is ideal for kids of all ages and nurtures a love for numbers and mental agility.",
    skills: [
      "Introduction to the abacus tool and its parts.",
      "Learning basic bead movements and understanding place values.",
      "Learning basic bead movements and understanding place values.",
      "Suitable for beginners to build a strong foundation.",
    ],
    duration: 3,
    tutors: [
      {
        name: "Dominic Torredo",
        job: "Software Engineer @Altschool",
        email: "torredo@gmail.com",
        img: "/assets/tobi.png",
      },
      {
        name: "Ekundayo Musk",
        job: "Software Engineer @Twitter",
        email: "elonekundayomusk@gmail.com",
        img: "/assets/richard.png",
      },
    ],
    requirements: [
      "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
      "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
      "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Visual Design",
        number: 1,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },

      {
        title: "User Research and Analysis",
        number: 2,
        topics: [
          "User Research and Analysis",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Web and Mobile App Design",
        number: 3,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Project Phase ",
        number: 4,
        topics: [
          "Design an nft landing page",
          "Design an e-learning website",
          "Redesign twitter user dashboard",
          "Design an e-commerce website",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],

    totalReviews: 700,
    introVideo: "https://youtu.be/BOt3MNB71gI",
  },
  {
    name: "Basic Level ( Level 2-3)",
    img: "/brain/vedic_maths.jpeg",
    dollarPrice: 200.99,
    nairaPrice: null,
    level: "Beginner",
    category: "Most Popular",
    isLoved: false,
    rating: 5.0,
    noEnrolled: 800,
    field: "Abacus",
    id: 2,
    desc: "Abacus classes are designed to help children enhance their math skills and overall cognitive abilities. Using an abacus, students master quick and accurate arithmetic while improving concentration, memory, and problem-solving skills. These classes make learning math interactive and enjoyable, turning numbers into a game of logic and visualisation. Abacus training boosts confidence, sharpens the mind, and lays a strong foundation for lifelong learning. It is ideal for kids of all ages and nurtures a love for numbers and mental agility.",
    skills: [
      "Addition and subtraction with larger numbers.",
      "Introduction to multiplication concepts.",
      "Developing speed and accuracy in calculations.",
    ],
    duration: 3,
    tutors: [
      {
        name: "Dominic Torredo",
        job: "Software Engineer @Altschool",
        email: "torredo@gmail.com",
        img: "/assets/tobi.png",
      },
      {
        name: "Ekundayo Musk",
        job: "Software Engineer @Twitter",
        email: "elonekundayomusk@gmail.com",
        img: "/assets/richard.png",
      },
    ],
    requirements: [
      "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
      "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
      "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Visual Design",
        number: 1,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },

      {
        title: "Visual Design",
        number: 2,
        topics: [
          "User Research and Analysis",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Web and Mobile App Design",
        number: 3,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Project Phase ",
        number: 4,
        topics: [
          "Design an nft landing page",
          "Design an e-learning website",
          "Redesign twitter user dashboard",
          "Design an e-commerce website",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],

    totalReviews: 750,
    introVideo: "https://youtu.be/BOt3MNB71gI",
  },
  {
    name: "Intermediate Level ( Level 4-5)",
    img: "/brain/rubik_cube.jpeg",
    dollarPrice: 150.49,
    nairaPrice: null,
    level: "Beginner",
    category: "Most Popular",
    isLoved: false,
    rating: 4.4,
    noEnrolled: 300,
    field: "Abacus",
    id: 3,
    desc: "Abacus classes are designed to help children enhance their math skills and overall cognitive abilities. Using an abacus, students master quick and accurate arithmetic while improving concentration, memory, and problem-solving skills. These classes make learning math interactive and enjoyable, turning numbers into a game of logic and visualisation. Abacus training boosts confidence, sharpens the mind, and lays a strong foundation for lifelong learning. It is ideal for kids of all ages and nurtures a love for numbers and mental agility.",
    skills: [
      "Mastering multiplication and introducing division.",
      "Transitioning from using the physical abacus to mental arithmetic.",
      "Solving multi-step problems with improved precision.",
    ],
    duration: 3,
    tutors: [
      {
        name: "Dominic Torredo",
        job: "Software Engineer @Altschool",
        email: "torredo@gmail.com",
        img: "/assets/tobi.png",
      },
      {
        name: "Ekundayo Musk",
        job: "Software Engineer @Twitter",
        email: "elonekundayomusk@gmail.com",
        img: "/assets/richard.png",
      },
    ],
    requirements: [
      "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
      "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
      "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Visual Design",
        number: 1,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },

      {
        title: "User Research and Analysis",
        number: 2,
        topics: [
          "User Research and Analysis",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Web and Mobile App Design",
        number: 3,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Project Phase ",
        number: 4,
        topics: [
          "Design a flier",
          "Design an e-learning website logo",
          "Design a billboard poster",
          "Design a real estate advertisement ad poster",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],

    totalReviews: 100,
    introVideo: "https://youtu.be/WONZVnlam6U",
  },
  {
    name: "Advanced Level ( Level 6-7)",
    img: "/brain/mid_brain.jpeg",
    dollarPrice: 250.49,
    nairaPrice: null,
    level: "Beginner",
    category: "New",
    isLoved: false,
    rating: 4.6,
    noEnrolled: 70,
    field: "Abacus",
    id: 4,
    desc: "Abacus classes are designed to help children enhance their math skills and overall cognitive abilities. Using an abacus, students master quick and accurate arithmetic while improving concentration, memory, and problem-solving skills. These classes make learning math interactive and enjoyable, turning numbers into a game of logic and visualisation. Abacus training boosts confidence, sharpens the mind, and lays a strong foundation for lifelong learning. It is ideal for kids of all ages and nurtures a love for numbers and mental agility.",
    skills: [
      "Complex calculations, including decimals and percentages.",
      "Strengthening mental arithmetic without the physical abacus.",
      "Achieving high-speed calculations with large numbers."
      
    ],
    duration: 5,
    tutors: [
      {
        name: "Dominic Torredo",
        job: "Software Engineer @Altschool",
        email: "torredo@gmail.com",
        img: "/assets/tobi.png",
      },
      {
        name: "Ekundayo Musk",
        job: "Software Engineer @Twitter",
        email: "elonekundayomusk@gmail.com",
        img: "/assets/richard.png",
      },
    ],
    requirements: [
      "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
      "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
      "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Microsoft Excel",
        number: 1,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },

      {
        title: "Microsoft Access",
        number: 2,
        topics: [
          "User Research and Analysis",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "SQL databases and Querying",
        number: 3,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Project Phase ",
        number: 4,
        topics: [
          "Design an nft landing page",
          "Design an e-learning website",
          "Redesign twitter user dashboard",
          "Design an e-commerce website",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
        likes: 90,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
        likes: 80,
        comments: 150,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],

    totalReviews: 400,
    introVideo: "https://youtu.be/SfE3aO3LWi0",
  },
  {
    name: "Grand Level (Proficiency) ( Level 8)",
    img: "/brain/right_barin.jpeg",
    dollarPrice: 305.99,
    nairaPrice: null,
    level: "Expert",
    category: "Most Popular",
    isLoved: false,
    rating: 4.8,
    noEnrolled: 490,
    field: "Abacus",
    id: 5,
    desc: "Abacus classes are designed to help children enhance their math skills and overall cognitive abilities. Using an abacus, students master quick and accurate arithmetic while improving concentration, memory, and problem-solving skills. These classes make learning math interactive and enjoyable, turning numbers into a game of logic and visualisation. Abacus training boosts confidence, sharpens the mind, and lays a strong foundation for lifelong learning. It is ideal for kids of all ages and nurtures a love for numbers and mental agility.",
    skills: [
      "Mastery of all arithmetic operations (addition, subtraction, multiplication, division).",
      "Fluency in solving real-world math problems using mental arithmetic.",
      "Exceptional speed, accuracy, and confidence in calculations.",
    ],
    duration: 6,
    tutors: [
      {
        name: "Dominic Torredo",
        job: "Software Engineer @Altschool",
        email: "torredo@gmail.com",
        img: "/assets/tobi.png",
      },
      {
        name: "Ekundayo Musk",
        job: "Software Engineer @Twitter",
        email: "elonekundayomusk@gmail.com",
        img: "/assets/richard.png",
      },
    ],
    requirements: [
      "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
      "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
      "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "HMTL, The Backbone of the Web",
        number: 1,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },

      {
        title: "CSS, Beauty of the web",
        number: 2,
        topics: [
          "User Research and Analysis",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Responsive Web Design",
        number: 3,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Project Phase ",
        number: 4,
        topics: [
          "Code an nft landing page",
          "Develop an e-learning website",
          "Redesign twitter user dashboard",
          "Develop an e-commerce website",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 4,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
        likes: 700,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 7,
      },
    ],

    totalReviews: 800,
    introVideo: "https://youtu.be/zJSY8tbf_ys",
  },
  {
    name: "2x2 Rubik’s Cube (Pocket Cube)",
    img: "/brain/mid_brain.jpeg",
    dollarPrice: 450.99,
    nairaPrice: null,
    level: "Expert",
    category: "Most Popular",
    isLoved: false,
    rating: 5.0,
    noEnrolled: 312,
    field: "Rubik's Cube",
    id: 6,
    desc: `The classic Rubik's Cube, with 3 squares on each side. It's the most popular and widely recognized.`,
    skills: [

    ],
    duration: 3,
    tutors: [
      {
        name: "Dominic Torredo",
        job: "Software Engineer @Altschool",
        email: "torredo@gmail.com",
        img: "/assets/tobi.png",
      },
      {
        name: "Ekundayo Musk",
        job: "Software Engineer @Twitter",
        email: "elonekundayomusk@gmail.com",
        img: "/assets/richard.png",
      },
    ],
    requirements: [
      "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
      "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
      "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Visual Design",
        number: 1,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },

      {
        title: "Visual Design",
        number: 2,
        topics: [
          "User Research and Analysis",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Web and Mobile App Design",
        number: 3,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Project Phase ",
        number: 4,
        topics: [
          "Design an nft landing page",
          "Design an e-learning website",
          "Redesign twitter user dashboard",
          "Design an e-commerce website",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
        likes: 50,
        comments: 51,
        img: "/assets/mide.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
        likes: 70,
        comments: 151,
        img: "/assets/mike.png",
        daysAgo: 3,
      },
    ],

    totalReviews: 430,
    introVideo: "https://youtu.be/SfE3aO3LWi0",
  },
  {
    name: "4x4 Rubik’s Cube (Rubik’s Revenge)",
    img: "/brain/right_barin.jpeg",
    dollarPrice: 305.99,
    nairaPrice: null,
    level: "Expert",
    category: "Most Popular",
    isLoved: false,
    rating: 4.8,
    noEnrolled: 490,
    field: "Rubik's Cube",
    id: 7,
    desc: `A more complex version with 4 squares on each side, adds extra layers of difficulty and requires more advanced solving techniques.`,
    skills: [
      "Mastery of all arithmetic operations (addition, subtraction, multiplication, division).",
      "Fluency in solving real-world math problems using mental arithmetic.",
      "Exceptional speed, accuracy, and confidence in calculations.",
    ],
    duration: 6,
    tutors: [
      {
        name: "Dominic Torredo",
        job: "Software Engineer @Altschool",
        email: "torredo@gmail.com",
        img: "/assets/tobi.png",
      },
      {
        name: "Ekundayo Musk",
        job: "Software Engineer @Twitter",
        email: "elonekundayomusk@gmail.com",
        img: "/assets/richard.png",
      },
    ],
    requirements: [
      "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
      "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
      "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "HMTL, The Backbone of the Web",
        number: 1,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },

      {
        title: "CSS, Beauty of the web",
        number: 2,
        topics: [
          "User Research and Analysis",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Responsive Web Design",
        number: 3,
        topics: [
          "Introduction to Design and Design Principles",
          "Style Guides and Design Systems",
          "Wireframing and Prototyping",
          "Mini project",
        ],
      },
      {
        title: "Project Phase ",
        number: 4,
        topics: [
          "Code an nft landing page",
          "Develop an e-learning website",
          "Redesign twitter user dashboard",
          "Develop an e-commerce website",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 4,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
        likes: 700,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 7,
      },
    ],

    totalReviews: 800,
    introVideo: "https://youtu.be/zJSY8tbf_ys",
  },
  // {
  //   name: "Database Management",
  //   img: "/assets/database.jpg",
  //   dollarPrice: 380.5,
  //   nairaPrice: null,
  //   level: "Beginner",
  //   category: "New",
  //   isLoved: false,
  //   rating: 4.7,
  //   noEnrolled: 72,
  //   field: "Programming",
  //   id: 7,
  //   desc: "A UI (User Interface) design deals with the application's graphical layout, which includes buttons, screen layout, animations, transitions, micro-interactions while UX (User Experience) design deals with how users interact with the system, how smooth and intuitive the experience is, to help users have a positive experience. In this course, we’ll teach you how to become a UI/UX Designer in 3 months and become ready to be an intern or start entry level jobs as a designer. To know more about UI/UX design, click here to read a detailed article on UI/UX design.",
  //   skills: [
  //     "Visual Design",
  //     "Wireframing & Prototyping",
  //     "Interaction Design",
  //     "User Research",
  //     "Mobile App & Responsive Web Design",
  //     "Userability Testing",
  //     "Figma",
  //     "Adobe XD",
  //   ],
  //   duration: 3,
  //   tutors: [
  //     {
  //       name: "Dominic Torredo",
  //       job: "Software Engineer @Altschool",
  //       email: "torredo@gmail.com",
  //       img: "/assets/tobi.png",
  //     },
  //     {
  //       name: "Ekundayo Musk",
  //       job: "Software Engineer @Twitter",
  //       email: "elonekundayomusk@gmail.com",
  //       img: "/assets/richard.png",
  //     },
  //   ],
  //   requirements: [
  //     "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
  //     "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
  //     "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
  //   ],
  //   syllabus: [
  //     {
  //       title: "Visual Design",
  //       number: 1,
  //       topics: [
  //         "Introduction to Design and Design Principles",
  //         "Style Guides and Design Systems",
  //         "Wireframing and Prototyping",
  //         "Mini project",
  //       ],
  //     },

  //     {
  //       title: "Visual Design",
  //       number: 2,
  //       topics: [
  //         "User Research and Analysis",
  //         "Style Guides and Design Systems",
  //         "Wireframing and Prototyping",
  //         "Mini project",
  //       ],
  //     },
  //     {
  //       title: "Web and Mobile App Design",
  //       number: 3,
  //       topics: [
  //         "Introduction to Design and Design Principles",
  //         "Style Guides and Design Systems",
  //         "Wireframing and Prototyping",
  //         "Mini project",
  //       ],
  //     },
  //     {
  //       title: "Project Phase ",
  //       number: 4,
  //       topics: [
  //         "Design an nft landing page",
  //         "Design an e-learning website",
  //         "Redesign twitter user dashboard",
  //         "Design an e-commerce website",
  //       ],
  //     },
  //   ],
  //   reviews: [
  //     {
  //       name: "Omotayo",
  //       post: "Alumni",
  //       review:
  //         "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
  //       likes: 50,
  //       comments: 51,
  //       img: "/assets/tayo.png",
  //       daysAgo: 1,
  //     },
  //     {
  //       name: "Tolulope",
  //       post: "Student",
  //       review:
  //         "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
  //       likes: 70,
  //       comments: 151,
  //       img: "/assets/tayo.png",
  //       daysAgo: 3,
  //     },
  //   ],

  //   totalReviews: 720,
  //   introVideo: "https://youtu.be/mqprM5YUdpk",
  // },
  // {
  //   name: "Figma For Devs",
  //   img: "/assets/figma.png",
  //   dollarPrice: 300.49,
  //   nairaPrice: null,
  //   level: "Intermediate",
  //   category: "New",
  //   isLoved: false,
  //   rating: 4.9,
  //   noEnrolled: 122,
  //   field: "Design",
  //   id: 8,
  //   desc: "A UI (User Interface) design deals with the application's graphical layout, which includes buttons, screen layout, animations, transitions, micro-interactions while UX (User Experience) design deals with how users interact with the system, how smooth and intuitive the experience is, to help users have a positive experience. In this course, we’ll teach you how to become a UI/UX Designer in 3 months and become ready to be an intern or start entry level jobs as a designer. To know more about UI/UX design, click here to read a detailed article on UI/UX design.",
  //   skills: [
  //     "Visual Design",
  //     "Wireframing & Prototyping",
  //     "Interaction Design",
  //     "User Research",
  //     "Mobile App & Responsive Web Design",
  //     "Userability Testing",
  //     "Figma",
  //     "Adobe XD",
  //   ],
  //   duration: 3,
  //   tutors: [
  //     {
  //       name: "Dominic Torredo",
  //       job: "Software Engineer @Altschool",
  //       email: "torredo@gmail.com",
  //       img: "/assets/tobi.png",
  //     },
  //     {
  //       name: "Ekundayo Musk",
  //       job: "Software Engineer @Twitter",
  //       email: "elonekundayomusk@gmail.com",
  //       img: "/assets/richard.png",
  //     },
  //   ],
  //   requirements: [
  //     "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
  //     "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
  //     "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
  //   ],
  //   syllabus: [
  //     {
  //       title: "Visual Design",
  //       number: 1,
  //       topics: [
  //         "Introduction to Design and Design Principles",
  //         "Style Guides and Design Systems",
  //         "Wireframing and Prototyping",
  //         "Mini project",
  //       ],
  //     },

  //     {
  //       title: "Visual Design",
  //       number: 2,
  //       topics: [
  //         "User Research and Analysis",
  //         "Style Guides and Design Systems",
  //         "Wireframing and Prototyping",
  //         "Mini project",
  //       ],
  //     },
  //     {
  //       title: "Web and Mobile App Design",
  //       number: 3,
  //       topics: [
  //         "Introduction to Design and Design Principles",
  //         "Style Guides and Design Systems",
  //         "Wireframing and Prototyping",
  //         "Mini project",
  //       ],
  //     },
  //     {
  //       title: "Project Phase ",
  //       number: 4,
  //       topics: [
  //         "Design an nft landing page",
  //         "Design an e-learning website",
  //         "Redesign twitter user dashboard",
  //         "Design an e-commerce website",
  //       ],
  //     },
  //   ],
  //   reviews: [
  //     {
  //       name: "Omotayo",
  //       post: "Alumni",
  //       review:
  //         "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
  //       likes: 50,
  //       comments: 51,
  //       img: "/assets/tayo.png",
  //       daysAgo: 1,
  //     },
  //     {
  //       name: "Tolulope",
  //       post: "Student",
  //       review:
  //         "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
  //       likes: 70,
  //       comments: 151,
  //       img: "/assets/tayo.png",
  //       daysAgo: 3,
  //     },
  //   ],

  //   totalReviews: 170,
  //   introVideo: "https://youtu.be/hbN9RGcQFNU",
  // },
  // {
  //   name: "React and Redux",
  //   img: "/assets/react_redux.png",
  //   dollarPrice: 200.49,
  //   nairaPrice: null,
  //   level: "Beginner",
  //   category: "New",
  //   isLoved: false,
  //   rating: 4.8,
  //   noEnrolled: 50,
  //   field: "Programming",
  //   id: 9,
  //   desc: "A UI (User Interface) design deals with the application's graphical layout, which includes buttons, screen layout, animations, transitions, micro-interactions while UX (User Experience) design deals with how users interact with the system, how smooth and intuitive the experience is, to help users have a positive experience. In this course, we’ll teach you how to become a UI/UX Designer in 3 months and become ready to be an intern or start entry level jobs as a designer. To know more about UI/UX design, click here to read a detailed article on UI/UX design.",
  //   skills: [
  //     "Visual Design",
  //     "Wireframing & Prototyping",
  //     "Interaction Design",
  //     "User Research",
  //     "Mobile App & Responsive Web Design",
  //     "Userability Testing",
  //     "Figma",
  //     "Adobe XD",
  //   ],
  //   duration: 3,
  //   tutors: [
  //     {
  //       name: "Dominic Torredo",
  //       job: "Software Engineer @Altschool",
  //       email: "torredo@gmail.com",
  //       img: "/assets/tobi.png",
  //     },
  //     {
  //       name: "Ekundayo Musk",
  //       job: "Software Engineer @Twitter",
  //       email: "elonekundayomusk@gmail.com",
  //       img: "/assets/richard.png",
  //     },
  //   ],
  //   requirements: [
  //     "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
  //     "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
  //     "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
  //   ],
  //   syllabus: [
  //     {
  //       title: "Visual Design",
  //       number: 1,
  //       topics: [
  //         "Introduction to Design and Design Principles",
  //         "Style Guides and Design Systems",
  //         "Wireframing and Prototyping",
  //         "Mini project",
  //       ],
  //     },

  //     {
  //       title: "Visual Design",
  //       number: 2,
  //       topics: [
  //         "User Research and Analysis",
  //         "Style Guides and Design Systems",
  //         "Wireframing and Prototyping",
  //         "Mini project",
  //       ],
  //     },
  //     {
  //       title: "Web and Mobile App Design",
  //       number: 3,
  //       topics: [
  //         "Introduction to Design and Design Principles",
  //         "Style Guides and Design Systems",
  //         "Wireframing and Prototyping",
  //         "Mini project",
  //       ],
  //     },
  //     {
  //       title: "Project Phase ",
  //       number: 4,
  //       topics: [
  //         "Design an nft landing page",
  //         "Design an e-learning website",
  //         "Redesign twitter user dashboard",
  //         "Design an e-commerce website",
  //       ],
  //     },
  //   ],
  //   reviews: [
  //     {
  //       name: "Omotayo",
  //       post: "Alumni",
  //       review:
  //         "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
  //       likes: 50,
  //       comments: 51,
  //       img: "/assets/tayo.png",
  //       daysAgo: 1,
  //     },
  //     {
  //       name: "Tolulope",
  //       post: "Student",
  //       review:
  //         "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
  //       likes: 70,
  //       comments: 151,
  //       img: "/assets/tayo.png",
  //       daysAgo: 3,
  //     },
  //   ],

  //   totalReviews: 70,
  //   introVideo: "https://youtu.be/_shA5Xwe8_4",
  // },
  // {
  //   name: "The Ultimate MERN Fullstack Course",
  //   img: "/assets/mern.png",
  //   dollarPrice: 500.49,
  //   nairaPrice: null,
  //   level: "Intermediate",
  //   category: "New",
  //   isLoved: false,
  //   rating: 4.5,
  //   noEnrolled: 12,
  //   field: "Programming",
  //   id: 10,
  //   desc: "A UI (User Interface) design deals with the application's graphical layout, which includes buttons, screen layout, animations, transitions, micro-interactions while UX (User Experience) design deals with how users interact with the system, how smooth and intuitive the experience is, to help users have a positive experience. In this course, we’ll teach you how to become a UI/UX Designer in 3 months and become ready to be an intern or start entry level jobs as a designer. To know more about UI/UX design, click here to read a detailed article on UI/UX design.",
  //   skills: [
  //     "Visual Design",
  //     "Wireframing & Prototyping",
  //     "Interaction Design",
  //     "User Research",
  //     "Mobile App & Responsive Web Design",
  //     "Userability Testing",
  //     "Figma",
  //     "Adobe XD",
  //   ],
  //   duration: 3,
  //   tutors: [
  //     {
  //       name: "Dominic Torredo",
  //       job: "Software Engineer @Altschool",
  //       email: "torredo@gmail.com",
  //       img: "/assets/tobi.png",
  //     },
  //     {
  //       name: "Ekundayo Musk",
  //       job: "Software Engineer @Twitter",
  //       email: "elonekundayomusk@gmail.com",
  //       img: "/assets/richard.png",
  //     },
  //   ],
  //   requirements: [
  //     "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
  //     "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
  //     "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
  //   ],
  //   syllabus: [
  //     {
  //       title: "Visual Design",
  //       number: 1,
  //       topics: [
  //         "Introduction to Design and Design Principles",
  //         "Style Guides and Design Systems",
  //         "Wireframing and Prototyping",
  //         "Mini project",
  //       ],
  //     },

  //     {
  //       title: "Visual Design",
  //       number: 2,
  //       topics: [
  //         "User Research and Analysis",
  //         "Style Guides and Design Systems",
  //         "Wireframing and Prototyping",
  //         "Mini project",
  //       ],
  //     },
  //     {
  //       title: "Web and Mobile App Design",
  //       number: 3,
  //       topics: [
  //         "Introduction to Design and Design Principles",
  //         "Style Guides and Design Systems",
  //         "Wireframing and Prototyping",
  //         "Mini project",
  //       ],
  //     },
  //     {
  //       title: "Project Phase ",
  //       number: 4,
  //       topics: [
  //         "Design an nft landing page",
  //         "Design an e-learning website",
  //         "Redesign twitter user dashboard",
  //         "Design an e-commerce website",
  //       ],
  //     },
  //   ],
  //   reviews: [
  //     {
  //       name: "Omotayo",
  //       post: "Alumni",
  //       review:
  //         "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
  //       likes: 50,
  //       comments: 51,
  //       img: "/assets/mide.png",
  //       daysAgo: 1,
  //     },
  //     {
  //       name: "Tolulope",
  //       post: "Student",
  //       review:
  //         "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
  //       likes: 70,
  //       comments: 151,
  //       img: "/assets/mike.png",
  //       daysAgo: 3,
  //     },
  //   ],

  //   totalReviews: 500,
  //   introVideo: "https://youtu.be/7CqJlxBYj-M",
  // },
  // {
  //   name: "Blockchain Engineering",
  //   img: "/assets/blockchain.png",
  //   dollarPrice: 500.49,
  //   nairaPrice: null,
  //   level: "Beginner",
  //   category: "Most Popular",
  //   isLoved: false,
  //   rating: 4.8,
  //   noEnrolled: 500,
  //   field: "Programming",
  //   id: 11,
  //   desc: "A UI (User Interface) design deals with the application's graphical layout, which includes buttons, screen layout, animations, transitions, micro-interactions while UX (User Experience) design deals with how users interact with the system, how smooth and intuitive the experience is, to help users have a positive experience. In this course, we’ll teach you how to become a UI/UX Designer in 3 months and become ready to be an intern or start entry level jobs as a designer. To know more about UI/UX design, click here to read a detailed article on UI/UX design.",
  //   skills: [
  //     "Visual Design",
  //     "Wireframing & Prototyping",
  //     "Interaction Design",
  //     "User Research",
  //     "Mobile App & Responsive Web Design",
  //     "Userability Testing",
  //     "Figma",
  //     "Adobe XD",
  //   ],
  //   duration: 3,
  //   tutors: [
  //     {
  //       name: "Dominic Torredo",
  //       job: "Software Engineer @Altschool",
  //       email: "torredo@gmail.com",
  //       img: "/assets/tobi.png",
  //     },
  //     {
  //       name: "Ekundayo Musk",
  //       job: "Software Engineer @Twitter",
  //       email: "elonekundayomusk@gmail.com",
  //       img: "/assets/richard.png",
  //     },
  //   ],
  //   requirements: [
  //     "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
  //     "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
  //     "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
  //   ],
  //   syllabus: [
  //     {
  //       title: "Visual Design",
  //       number: 1,
  //       topics: [
  //         "Introduction to Design and Design Principles",
  //         "Style Guides and Design Systems",
  //         "Wireframing and Prototyping",
  //         "Mini project",
  //       ],
  //     },

  //     {
  //       title: "Visual Design",
  //       number: 2,
  //       topics: [
  //         "User Research and Analysis",
  //         "Style Guides and Design Systems",
  //         "Wireframing and Prototyping",
  //         "Mini project",
  //       ],
  //     },
  //     {
  //       title: "Web and Mobile App Design",
  //       number: 3,
  //       topics: [
  //         "Introduction to Design and Design Principles",
  //         "Style Guides and Design Systems",
  //         "Wireframing and Prototyping",
  //         "Mini project",
  //       ],
  //     },
  //     {
  //       title: "Project Phase ",
  //       number: 4,
  //       topics: [
  //         "Design an nft landing page",
  //         "Design an e-learning website",
  //         "Redesign twitter user dashboard",
  //         "Design an e-commerce website",
  //       ],
  //     },
  //   ],
  //   reviews: [
  //     {
  //       name: "Omotayo",
  //       post: "Alumni",
  //       review:
  //         "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
  //       likes: 50,
  //       comments: 51,
  //       img: "/assets/tayo.png",
  //       daysAgo: 1,
  //     },
  //     {
  //       name: "Tolulope",
  //       post: "Student",
  //       review:
  //         "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
  //       likes: 70,
  //       comments: 151,
  //       img: "/assets/tayo.png",
  //       daysAgo: 3,
  //     },
  //   ],

  //   totalReviews: 1000,
  //   introVideo: "https://youtu.be/kHybf1aC-jE",
  // },
  // {
  //   name: "Tokenization",
  //   img: "/assets/blockchain.png",
  //   dollarPrice: 500.49,
  //   nairaPrice: null,
  //   level: "Beginner",
  //   category: "Most Popular",
  //   isLoved: false,
  //   rating: 4.9,
  //   noEnrolled: 500,
  //   field: "Finance",
  //   id: 12,
  //   desc: "A UI (User Interface) design deals with the application's graphical layout, which includes buttons, screen layout, animations, transitions, micro-interactions while UX (User Experience) design deals with how users interact with the system, how smooth and intuitive the experience is, to help users have a positive experience. In this course, we’ll teach you how to become a UI/UX Designer in 3 months and become ready to be an intern or start entry level jobs as a designer. To know more about UI/UX design, click here to read a detailed article on UI/UX design.",
  //   skills: [
  //     "Visual Design",
  //     "Wireframing & Prototyping",
  //     "Interaction Design",
  //     "User Research",
  //     "Mobile App & Responsive Web Design",
  //     "Userability Testing",
  //     "Figma",
  //     "Adobe XD",
  //   ],
  //   duration: 3,
  //   tutors: [
  //     {
  //       name: "Dominic Torredo",
  //       job: "Software Engineer @Altschool",
  //       email: "torredo@gmail.com",
  //       img: "/assets/tobi.png",
  //     },
  //     {
  //       name: "Ekundayo Musk",
  //       job: "Software Engineer @Twitter",
  //       email: "elonekundayomusk@gmail.com",
  //       img: "/assets/richard.png",
  //     },
  //   ],
  //   requirements: [
  //     "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
  //     "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
  //     "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
  //   ],
  //   syllabus: [
  //     {
  //       title: "Visual Design",
  //       number: 1,
  //       topics: [
  //         "Introduction to Design and Design Principles",
  //         "Style Guides and Design Systems",
  //         "Wireframing and Prototyping",
  //         "Mini project",
  //       ],
  //     },

  //     {
  //       title: "Visual Design",
  //       number: 2,
  //       topics: [
  //         "User Research and Analysis",
  //         "Style Guides and Design Systems",
  //         "Wireframing and Prototyping",
  //         "Mini project",
  //       ],
  //     },
  //     {
  //       title: "Web and Mobile App Design",
  //       number: 3,
  //       topics: [
  //         "Introduction to Design and Design Principles",
  //         "Style Guides and Design Systems",
  //         "Wireframing and Prototyping",
  //         "Mini project",
  //       ],
  //     },
  //     {
  //       title: "Project Phase ",
  //       number: 4,
  //       topics: [
  //         "Design an nft landing page",
  //         "Design an e-learning website",
  //         "Redesign twitter user dashboard",
  //         "Design an e-commerce website",
  //       ],
  //     },
  //   ],
  //   reviews: [
  //     {
  //       name: "Omotayo",
  //       post: "Alumni",
  //       review:
  //         "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
  //       likes: 50,
  //       comments: 51,
  //       img: "/assets/tayo.png",
  //       daysAgo: 1,
  //     },
  //     {
  //       name: "Tolulope",
  //       post: "Student",
  //       review:
  //         "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
  //       likes: 70,
  //       comments: 151,
  //       img: "/assets/tayo.png",
  //       daysAgo: 3,
  //     },
  //   ],

  //   totalReviews: 340,
  //   introVideo: "https://youtu.be/x9_DvOwiqM8",
  // },
  // {
  //   name: "Cyber Security",
  //   img: "/assets/cybersecurity.png",
  //   dollarPrice: 400.49,
  //   nairaPrice: null,
  //   level: "Intermediate",
  //   category: "New",
  //   isLoved: false,
  //   rating: 4.4,
  //   noEnrolled: 35,
  //   field: "Security",
  //   id: 13,
  //   desc: "A UI (User Interface) design deals with the application's graphical layout, which includes buttons, screen layout, animations, transitions, micro-interactions while UX (User Experience) design deals with how users interact with the system, how smooth and intuitive the experience is, to help users have a positive experience. In this course, we’ll teach you how to become a UI/UX Designer in 3 months and become ready to be an intern or start entry level jobs as a designer. To know more about UI/UX design, click here to read a detailed article on UI/UX design.",
  //   skills: [
  //     "Visual Design",
  //     "Wireframing & Prototyping",
  //     "Interaction Design",
  //     "User Research",
  //     "Mobile App & Responsive Web Design",
  //     "Userability Testing",
  //     "Figma",
  //     "Adobe XD",
  //   ],
  //   duration: 3,
  //   tutors: [
  //     {
  //       name: "Dominic Torredo",
  //       job: "Software Engineer @Altschool",
  //       email: "torredo@gmail.com",
  //       img: "/assets/tobi.png",
  //     },
  //     {
  //       name: "Ekundayo Musk",
  //       job: "Software Engineer @Twitter",
  //       email: "elonekundayomusk@gmail.com",
  //       img: "/assets/richard.png",
  //     },
  //   ],
  //   requirements: [
  //     "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
  //     "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
  //     "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
  //   ],
  //   syllabus: [
  //     {
  //       title: "Visual Design",
  //       number: 1,
  //       topics: [
  //         "Introduction to Design and Design Principles",
  //         "Style Guides and Design Systems",
  //         "Wireframing and Prototyping",
  //         "Mini project",
  //       ],
  //     },

  //     {
  //       title: "Visual Design",
  //       number: 2,
  //       topics: [
  //         "User Research and Analysis",
  //         "Style Guides and Design Systems",
  //         "Wireframing and Prototyping",
  //         "Mini project",
  //       ],
  //     },
  //     {
  //       title: "Web and Mobile App Design",
  //       number: 3,
  //       topics: [
  //         "Introduction to Design and Design Principles",
  //         "Style Guides and Design Systems",
  //         "Wireframing and Prototyping",
  //         "Mini project",
  //       ],
  //     },
  //     {
  //       title: "Project Phase ",
  //       number: 4,
  //       topics: [
  //         "Design an nft landing page",
  //         "Design an e-learning website",
  //         "Redesign twitter user dashboard",
  //         "Design an e-commerce website",
  //       ],
  //     },
  //   ],
  //   reviews: [
  //     {
  //       name: "Omotayo",
  //       post: "Alumni",
  //       review:
  //         "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
  //       likes: 50,
  //       comments: 51,
  //       img: "/assets/tayo.png",
  //       daysAgo: 1,
  //     },
  //     {
  //       name: "Tolulope",
  //       post: "Student",
  //       review:
  //         "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
  //       likes: 70,
  //       comments: 151,
  //       img: "/assets/tayo.png",
  //       daysAgo: 3,
  //     },
  //   ],

  //   totalReviews: 350,
  //   introVideo: "https://youtu.be/_DVVNOGYtmU",
  // },
  // {
  //   name: "Ethical Hacking 101",
  //   img: "/assets/hacking.jpg",
  //   dollarPrice: 200.49,
  //   nairaPrice: null,
  //   level: "Beginner",
  //   category: "New",
  //   isLoved: false,
  //   rating: 4.9,
  //   noEnrolled: 75,
  //   field: "Security",
  //   id: 14,
  //   desc: "A UI (User Interface) design deals with the application's graphical layout, which includes buttons, screen layout, animations, transitions, micro-interactions while UX (User Experience) design deals with how users interact with the system, how smooth and intuitive the experience is, to help users have a positive experience. In this course, we’ll teach you how to become a UI/UX Designer in 3 months and become ready to be an intern or start entry level jobs as a designer. To know more about UI/UX design, click here to read a detailed article on UI/UX design.",
  //   skills: [
  //     "Visual Design",
  //     "Wireframing & Prototyping",
  //     "Interaction Design",
  //     "User Research",
  //     "Mobile App & Responsive Web Design",
  //     "Userability Testing",
  //     "Figma",
  //     "Adobe XD",
  //   ],
  //   duration: 3,
  //   tutors: [
  //     {
  //       name: "Dominic Torredo",
  //       job: "Software Engineer @Altschool",
  //       email: "torredo@gmail.com",
  //       img: "/assets/tobi.png",
  //     },
  //     {
  //       name: "Ekundayo Musk",
  //       job: "Software Engineer @Twitter",
  //       email: "elonekundayomusk@gmail.com",
  //       img: "/assets/richard.png",
  //     },
  //   ],
  //   requirements: [
  //     "You don't need a background in user experience, design or coding to take this course. It is totally beginner friendly",
  //     "This is an in-depth course. Most of your classes will be 2 hours, 3 times a week.",
  //     "You’re required to have a laptop with a minimum of 4gb ram to take this course comfortably.",
  //   ],
  //   syllabus: [
  //     {
  //       title: "Visual Design",
  //       number: 1,
  //       topics: [
  //         "Introduction to Design and Design Principles",
  //         "Style Guides and Design Systems",
  //         "Wireframing and Prototyping",
  //         "Mini project",
  //       ],
  //     },

  //     {
  //       title: "Visual Design",
  //       number: 2,
  //       topics: [
  //         "User Research and Analysis",
  //         "Style Guides and Design Systems",
  //         "Wireframing and Prototyping",
  //         "Mini project",
  //       ],
  //     },
  //     {
  //       title: "Web and Mobile App Design",
  //       number: 3,
  //       topics: [
  //         "Introduction to Design and Design Principles",
  //         "Style Guides and Design Systems",
  //         "Wireframing and Prototyping",
  //         "Mini project",
  //       ],
  //     },
  //     {
  //       title: "Project Phase ",
  //       number: 4,
  //       topics: [
  //         "Design an nft landing page",
  //         "Design an e-learning website",
  //         "Redesign twitter user dashboard",
  //         "Design an e-commerce website",
  //       ],
  //     },
  //   ],
  //   reviews: [
  //     {
  //       name: "Omotayo",
  //       post: "Alumni",
  //       review:
  //         "This course is one of the best options you can get to begin your career journey as a UI/UX designer. I am grateful and excited that I chose this course to start with, and I would definitely recommend it to anyone. Thank you so much for putting this course together.",
  //       likes: 50,
  //       comments: 51,
  //       img: "/assets/tayo.png",
  //       daysAgo: 1,
  //     },
  //     {
  //       name: "Tolulope",
  //       post: "Student",
  //       review:
  //         "Extremely comprehensive course! My goal was to learn Figma, but you learn soo much more about the entire design process and even some web development basics. The instructors are doing a great job of showing their train fo thought and make it very easy to follow along with all Figma examples. Definitely worth it!",
  //       likes: 70,
  //       comments: 151,
  //       img: "/assets/tayo.png",
  //       daysAgo: 3,
  //     },
  //   ],

  //   totalReviews: 570,
  //   introVideo: "https://youtu.be/wrxicEWGcfI",
  // },
];

export const FiltersByTime: IFilterButton[] = [
  { filter: "Most Popular", isSelected: true },
  { filter: "New", isSelected: false },
];
export const FiltersByType: IFilterButton[] = [
  { filter: "All Courses", isSelected: true, filterByType: true },
  { filter: "Abacus", isSelected: false, filterByType: true },
  { filter: "Rubik's Cube", isSelected: false, filterByType: true },
  { filter: "Mid Brain Activation", isSelected: false, filterByType: true },
  { filter: "Right Brain Activation", isSelected: false, filterByType: true },
  { filter: "Academics Subjects", isSelected: false, filterByType: true },
];

export const Reasons: IReason[] = [
  {
    img: "/assets/one.png",
    head: "Regular Accessments",
    text: "We give our students real life accessments to help them improve their knowledge on core areas",
  },
  {
    img: "/assets/two.png",
    head: "On-site & Remote Learning",
    text: "We are fully an online learning platform but for special cases, we can go the extra mile to provide on-site service",
  },
  {
    img: "/assets/three.png",
    head: "Certificate",
    text: "On graduation, every student will be awarded our prestigious certificate of completion",
  },
  {
    img: "/assets/four.png",
    head: "Community",
    text: "We are an inclusive and diverse community, we do not discrimate any age group, gender, race and ethnic group",
  },
  {
    img: "/assets/five.png",
    head: "Job Opportunites",
    text: "We give insider recommendations to companies for our students and you gain access to our talent pool",
  },
];

export const Testimonies: ITestimony[] = [
  {
    id: null,
    img: "/assets/mide.png",
    name: "Omotosho Mide",
    position: "Alumni",
    isActive: false,
    comment:
      "Definitely one of the best places to learn. I can say that I’m very confident with my skills in Product Design ",
  },
  {
    id: null,
    img: "/assets/mike.png",
    name: "Micheal Ajala",
    position: "Alumni",
    isActive: true,
    comment:
      "I enjoyed each course from the first week. I got to practise with real world projects and this made me confident",
  },
  {
    id: null,
    img: "/assets/tayo.png",
    name: "Omotayo",
    position: "Student",
    isActive: false,
    comment:
      "Definitely one of the best places to learn. I can say that I’m very confident with my skills in Product Design",
  },
];

export const Faqs: IFaq[] = [
  {
    id: 1,
    question: "What courses does The Brain Connections offer?",
    showAnswer: true,
    answer:
     "We offer courses in Abacus, Vedic Maths, Rubik's Cube, Right Brain Development, Mid Brain Development, and Academic Subjects. These programs are designed to enhance cognitive skills, memory, concentration, and problem-solving abilities.",
  },
  {
    id: 2,
    question: "Who can join the classes?",
    showAnswer: false,
    answer:
      "Our classes are suitable for students of all ages, from young children to adults. Whether you're looking to improve basic math skills, enhance brain function, or develop creativity, we have courses for everyone.",
  },
  {
    id: 3,
    question: "How can I enrol in a course?",
    answer: "You can easily enrol through our website by filling out the registration form or by contacting us directly. Our team will guide you through the process and provide all the necessary details.",
    showAnswer: false,
  },
  {
    id: 4,
    question: "Do you offer online classes?",
    showAnswer: false,
    answer:
      "Yes, we offer both online and offline classes. Our online classes are designed to be interactive and effective, ensuring that students can learn from the comfort of their homes.",
  },
  {
    id: 5,
    showAnswer: false,
    question: "What are the benefits of learning Abacus or Vedic Maths?",
    answer:
      "Learning Abacus and Vedic Maths helps students improve mental calculation speed, concentration, and memory. These methods enhance logical thinking, and problem-solving, and boost confidence in math.",
  },
  {
    id: 6,
    showAnswer: false,
    question: "What is Mid Brain Development and how does it help?",
    answer:
      "Mid Brain Development helps activate the brain's sensory and cognitive functions, enhancing memory, focus, and mental agility. It also improves emotional control, intuition, and decision-making abilities.",
  },
  {
    id: 7,
    showAnswer: false,
    question: "Can Rubik's Cube training improve my child’s concentration?",
    answer:
      "Yes! Rubik’s Cube training sharpens problem-solving skills, boosts concentration, improves spatial reasoning, and enhances critical thinking abilities. It's a fun and effective way to engage young minds.",
  },
  {
    id: 8,
    showAnswer: false,
    question: "Do you provide teacher training programs?",
    answer:
      "Yes, we offer specialized teacher training programs in Abacus, Vedic Maths, Rubik’s Cube, Right Brain and Mid Brain Development. These programs empower educators with innovative techniques to enhance their teaching skills and student engagement.",
  },
  {
    id: 9,
    showAnswer: false,
    question: "How long does it take to see results?",
    answer:
      "The time required to see noticeable results depends on the course and individual progress. However, most students experience improvements in their cognitive abilities within a few weeks of consistent practice.",
  },
  {
    id: 10,
    showAnswer: false,
    question: "What makes The Brain Connections different from other learning centres?",
    answer:
      "At The Brain Connections, we provide a holistic approach to learning, combining cognitive skill development with academic subjects. Our courses are interactive, engaging, and designed to foster both mental agility and academic excellence in students.",
  },
];

export const TeamMembers: ITeamMember[] = [
  {
    name: "Dev. Tobi Jacobs",
    image: "/assets/tobi.png",
    post: "CEO",
    desc: "Tobi has built a reputation in the startup ecosystem",
  },
  {
    name: "Dev. Jude Tochy",
    image: "/assets/jude.jpg",
    post: "Head of Development",
    desc: "Jude has built a reputation in the dev community",
  },
  {
    name: "Dev. Micheal Ajala",
    image: "/assets/mike-team.png",
    post: "Head of Design",
    desc: "Michael has built a reputation in the design community",
  },
];

export const Contacts: IReachout[] = [
  {
    name: "Email",
    deet: "",
    note: "You can send us an email and we’ll get back to you.",
    svg: "email",
    link: "",
  },
  {
    name: "Call",
    deet: "",
    note: "",
    svg: "phone",
    link: "",
  },
  {
    name: "Visit",
    deet: "",
    note: "",
    svg: "location",
    link: "",
  },
];

export interface ITab {
  num: number;
  name: string;
  isSelected: boolean;
}

export const Tabs: ITab[] = [
  { num: 0, name: "OVERVIEW", isSelected: true },
  // { num: 1, name: "SYLLABUS", isSelected: false },
  // { num: 2, name: "REQUIREMENTS", isSelected: false },
  // { num: 3, name: "TUTORS", isSelected: false },
  // { num: 4, name: "REVIEWS", isSelected: false },
];

export interface IEnrolledCourse {
  courseId: number;
  isFree: boolean;
  isPaid: boolean;
  plan : IPlan;
}
export interface IUser {
  name: string;
  email: string;
  enrolledCourses: IEnrolledCourse[] | null;
}

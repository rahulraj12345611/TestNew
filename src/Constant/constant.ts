import { ITeamMember } from "@/components/Aboutpage/AboutPage";
import { IFilterButton } from "@/components/Button/FilterButton";
import { IReachout } from "@/components/Contactpage/Reachout";
import { ICourse, ICategory } from "@/components/CourseCard/CourseCard";
import { IReason } from "@/components/HomepageComp/Chooseus";
import { IFaq } from "@/components/HomepageComp/Faq";
import { ITestimony } from "@/components/HomepageComp/Testimonials";
import { IPlan } from "@/components/Payments/Payments";

export const AllCourses: ICourse[] = [

  // rubik's cube
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
    slug:"rubik-cube",
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
    slug:"rubik-cube",
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
  {
    name: "3x3 Rubik’s Cube",
    img: "/brain/right_barin.jpeg",
    dollarPrice: 305.99,
    nairaPrice: null,
    level: "Expert",
    category: "Most Popular",
    isLoved: false,
    rating: 4.8,
    noEnrolled: 490,
    field: "Rubik's Cube",
    slug:"rubik-cube",
    id: 8,
    desc: `The classic Rubik's Cube, with 3 squares on each side. It's the most popular and widely recognized.`,
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
    name: "5x5 Rubik’s Cube (Professor’s Cube)",
    img: "/brain/right_barin.jpeg",
    dollarPrice: 305.99,
    nairaPrice: null,
    level: "Expert",
    category: "Most Popular",
    isLoved: false,
    rating: 4.8,
    noEnrolled: 490,
    field: "Rubik's Cube",
    slug:"rubik-cube",
    id: 9,
    desc: `Even more challenging than the 4x4, this cube has 5 squares per side, with more pieces and complex algorithms to learn.`,
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
    name: "Pyraminx",
    img: "/brain/right_barin.jpeg",
    dollarPrice: 305.99,
    nairaPrice: null,
    level: "Expert",
    category: "Most Popular",
    isLoved: false,
    rating: 4.8,
    noEnrolled: 490,
    field: "Rubik's Cube",
    id: 10,
    slug:"rubik-cube",
    desc: `A pyramid-shaped puzzle, offering a different type of challenge while maintaining similar solving principles to the Rubik’s Cube.`,
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
    name: "Cylindrical Cube",
    img: "/brain/right_barin.jpeg",
    dollarPrice: 305.99,
    nairaPrice: null,
    level: "Expert",
    category: "Most Popular",
    isLoved: false,
    rating: 4.8,
    noEnrolled: 490,
    field: "Rubik's Cube",
    id: 11,
    slug:"rubik-cube",
    desc: `The Cylindrical Cube is a 3D puzzle that combines the challenge of a Rubik’s Cube with a cylindrical shape, requiring unique strategies to solve.`,
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
    ],
    reviews: [

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

export const AllCategory: ICategory[] = [
  { id: 2,name: "Abacus", isSelected: false, filterByType: true, img: "/brain/abacus.jpeg",Slug: '' },
  { id: 3,name: "Rubik's Cube", isSelected: false, filterByType: true, img: "/brain/rubik_cube.jpeg", Slug: '' },
  { id: 4,name: "Mid Brain Activation", isSelected: false, filterByType: true, img: "/brain/mid_brain.jpeg", Slug: '' },
  { id: 5,name: "Right Brain Activation", isSelected: false, filterByType: true, img: "/brain/right_barin.jpeg", Slug: '' },
  { id: 6,name: "Vedic Maths", isSelected: false, filterByType: true, img: "/brain/vedic_maths.jpeg", Slug: '' },
]

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
    img: "data:image/png;base64,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",
    head: "Holistic Brain Development",
    text: "We focus on building both the left and right hemispheres of the brain",
  },
  {
    img: "data:image/png;base64,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",
    head: "Expertly Designed Programs",
    text: "Crafted by specialists to ensure maximum engagement and effectiveness",
  },
  {
    img: "data:image/png;base64,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",
    head: "Certificate",
    text: "On graduation, every student will be awarded our prestigious certificate of completion",
  },
  {
    img: "data:image/png;base64,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",
    head: "Community",
    text: "We are an inclusive and diverse community, we do not discrimate any age group, gender, race and ethnic group",
  },
  {
    img: "data:image/jpeg;base64,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",
    head: "Proven Methods",
    text: "Empower your child with ancient techniques like Abacus and Vedic Maths, alongside modern innovations",
  },
  {
    img: "data:image/png;base64,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",
    head: "Fun & Interactive",
    text: "Learning here is not just educational but also incredibly enjoyable!",
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
    deet: "thebrainconnections06@gmail.com",
    note: "You can send us an email and we’ll get back to you.",
    svg: "email",
    link: " thebrainconnections06@gmail.com",
  },
  {
    name: "Call",
    deet: "+91 8076291411",
    note: "You can contact us on mobile and we’ll get back to you.",
    svg: "phone",
    link: "",
  },
  {
    name: "Visit",
    deet: "WZ- 283/281, Gali No. 9,Maddi Wali Gali, Vishnu Garden, New Delhi, 110018, India",
    note: "You can visit us at below address.",
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

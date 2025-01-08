import { FaqCompStyles, FaqStyles } from "@/styles/HomepageStyles/FaqStyles";
import { ActualPaddedSectionStyle } from "@/styles/HomepageStyles/Section";
import { FunctionComponent, useEffect, useState } from "react";
import SectionHead from "../SectionHead/SectionHead";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { FaqArrow } from "../Icons/Icons";
import { showFaqAnswer } from "@/redux/dataSlice";
import { AnimatePresence, motion } from "framer-motion";
import { faqAnswerVariants } from "@/Animations/LandingPageVariants";

export interface IFaq {
  id: number | null;
  question: string;
  answer: string;
  showAnswer: boolean;
}
// export const Faq: FunctionComponent = () => {
//   const { faqs } = useAppSelector((state: RootState) => state.data);
//   return (
//     <FaqStyles>
//       <ActualPaddedSectionStyle>
//         <SectionHead
//           bigtext="Frequently Asked Questions"
//           smalltext="Check out what some of our past and present students are saying"
//         />
//         <div className="faqs">
//           {faqs.map((ele, index) => (
//             <FaqComp
//               id={index}
//               question={ele.question}
//               answer={ele.answer}
//               key={index}
//               showAnswer={ele.showAnswer}
//             />
//           ))}
//         </div>
//       </ActualPaddedSectionStyle>
//     </FaqStyles>
//   );
// };

const Faq = () => {
  const { faqs } = useAppSelector((state: RootState) => state.data);

  let Faqs = [
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

  // const showFaqAnswer = (data: any) => {
  //   const toggled = Faqs.map((ele: any, index: any) => {
  //     if (data === index) {
  //       return { ...ele, showAnswer: !ele.showAnswer };
  //     } else {
  //       return { ...ele , showAnswer : false};
  //     }
  //   });
  //   Faqs = toggled;
  // }

  // const showFaqAnswer = (state, { payload }) => {
  //   const toggled = state.faqs.map((ele: any, index: any) => {
  //     if (payload === index) {
  //       return { ...ele, showAnswer: !ele.showAnswer };
  //     } else {
  //       return { ...ele , showAnswer : false};
  //     }
  //   });
  //   state.faqs = toggled;
  // }

  return (
    <FaqStyles>
      <ActualPaddedSectionStyle>
        <SectionHead
          bigtext="Frequently Asked Questions"
          smalltext="Check out what some of our past and present students are saying"
        />
        <div className="faqs">
          {faqs.map((ele, index) => (
            <FaqComp
              id={index}
              question={ele.question}
              answer={ele.answer}
              key={index}
              showAnswer={ele.showAnswer}
            />
          ))}
        </div>
      </ActualPaddedSectionStyle>
    </FaqStyles>
  );
};

export const FaqComp = (props: any) => {
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(props?.showAnswer);
  console.log(props?.showAnswer, 'showAnswer...')
  const toggleFaq = () => {
    dispatch(showFaqAnswer(props?.id));
    // setVisible(!props?.showAnswer)
  };
  // console.log(visible, 'visible...')
  // useEffect(() => {
  //   toggleFaq()
  // }, [visible])

  return (
    <FaqCompStyles onClick={toggleFaq} $showAnswer={props?.showAnswer}>
      <div className="question">
        <h4>{props?.question}</h4>
        <FaqArrow $showAnswer={props?.showAnswer} />
      </div>
      <AnimatePresence>
      {/* {visible && (
        <motion.div className="answer"
        variants={faqAnswerVariants}
        initial = "initial"
        animate = "final"
        exit= "exit"
        >
          <p>{props?.answer}</p>
        </motion.div>
      )} */}
      {props?.showAnswer && (
        <motion.div className="answer"
        variants={faqAnswerVariants}
        initial = "initial"
        animate = "final"
        exit= "exit"
        >
          <p>{props?.answer}</p>
        </motion.div>
      )}
      </AnimatePresence>
    </FaqCompStyles>
  );
};

export default Faq;

// export const FaqComp: FunctionComponent<IFaq> = ({
//   id,
//   question,
//   answer,
//   showAnswer,
// }) => {
//   const dispatch = useAppDispatch();
//   console.log(showAnswer, 'showAnswer...')
//   const toggleFaq = () => {
//     dispatch(showFaqAnswer(id));
//   };
//   return (
//     <FaqCompStyles onClick={toggleFaq} $showAnswer={showAnswer}>
//       <div className="question">
//         <h4>{question}</h4>
//         <FaqArrow $showAnswer={showAnswer} />
//       </div>
//       <AnimatePresence>
//       {showAnswer && (
//         <motion.div className="answer"
//         variants={faqAnswerVariants}
//         initial = "initial"
//         animate = "final"
//         exit= "exit"
//         >
//           <p>{answer}</p>
//         </motion.div>
//       )}
//       </AnimatePresence>
//     </FaqCompStyles>
//   );
// };

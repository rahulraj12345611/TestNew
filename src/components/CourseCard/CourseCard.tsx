  import {
    CourseCardStyles,
    EmojiButtonStyles,
  } from "@/styles/CourseStyles/CourseCard";
  import { DesktopMobile, TabOnly } from "@/styles/HeroStyles/Hero";
  import React, {
    Dispatch,
    FunctionComponent,
    MouseEvent,
    SetStateAction,
    useEffect,
    useRef,
    useState,
  } from "react";
  import Image from "next/image";
  import {
    BriefCase,
    EnrolledIcon,
    FilledHeart,
    OutlineHeart,
    RatingIcon,
  } from "../Icons/Icons";
  import { useAppDispatch, useAppSelector } from "@/redux/hook";
  import {
    setFilterCoursesBySearch,
    setFilterCoursesByType,
    setFilterSearchedCoursesByType,
    toggleLoved,
  } from "@/redux/dataSlice";
  import { motion } from "framer-motion";
  import { msgVariants } from "@/Animations/LandingPageVariants";
  import { useOutsideClick } from "./OutsideClick";
  import Link from "next/link";
  import { useRouter } from "next/router";
  import { RootState } from "@/redux/store";
  import Config from "../../../config.json"
  import * as CommonAction from "../../pages/api/actionreducer/action/Common.action"


  // I am gonna add two more attributes here and methods to update them in redux
  export interface ICourse {
    id : number|null;
    name: string;
    level: string;
    img: string;
    dollarPrice: number;
    duration: number;
    nairaPrice: number | null;
    category: string;
    isLoved: boolean;
    rating: number;
    noEnrolled: number;
    field: string;
    desc: string;
    skills: string[];
    syllabus : IModule[];
    requirements : string[];
    tutors : ITutor[];
    reviews : IReview[];
    totalReviews: number;
    introVideo : string;
    slug: String;
  }

  export interface ICategory {
    id : number|null;
    name: string;
    img: string;
    isSelected: boolean;
    filterByType: boolean;
    Slug: String;
  }

  export interface IModule{
    title: string;
    number : number|null;
    topics : string[];
  }
  export interface ITutor{
    img: string;
    name : string;
    job : string;
    email : string;
  }
  export interface IReview{
    img : string;
    post : string;
    name : string;
    review : string;
    likes : number;
    daysAgo : number;
    comments: number;
  }
  // export const CourseCard: FunctionComponent<ICourse> = ({
  //   name,
  //   id,
  //   level,
  //   img,
  //   dollarPrice,
  //   nairaPrice,
  //   category,
  //   isLoved,
  //   rating,
  //   noEnrolled,
  //   field,
  //   slug,
  // }) => {
  //   const [isheartHovered, setIsheartHovered] = useState(false);
  //   const router = useRouter();
  //   const showDetail = () => {
  //     // omor this worked like magic: for escaping symbols in urls
  //     // const path = "/courses/" + encodeURIComponent(name);
  //     const path = `/courses/${name}?cn=${id}`
  //     // const path = "/";
  //     // push the id
  //     router.push({
  //       pathname : path,
  //       query : {id: id}
  //     },path);
  //   };

  // // const getCourseDetail = async() => {
  // //   const resData = await dispatch(CommonAction.getCoursesDetail({id: id}))
  // //   if(resData?.status) {
  // //     setCourseDetail(resData?.data)
  // //   }
  // // }

  // // useEffect(() => {
  // //   getCourseDetail()
  // // }, [])

  //   // todo
  //   // 1. work on the redux state course.isenrolled, update it as payment is completed
  //   // 2. based on the updated value, display components
  //   // 3. work on the try for free
  //   console.log(img,name, 'imgage cousrse checkkk')
  //   return (
  //     <DesktopMobile>
  //       <CourseCardStyles>
  //         <TabOnly>
  //           <Image
  //             alt={name}
  //             src={`${Config.s3Path}${img}`}
  //             width={340}
  //             height={226}
  //             className="desktop img"
  //             onClick={showDetail}
  //           />
  //           <Image
  //             alt={name}
  //             src={`${Config.s3Path}${img}`}
  //             width={340}
  //             height={226}
  //             className="tab img"
  //             onClick={showDetail}
  //           />
  //           <Image
  //             alt={name}
  //             src={`${Config.s3Path}${img}`}
  //             width={164}
  //             height={105}
  //             className="mobile img"
  //             onClick={showDetail}
  //           />
  //         </TabOnly>
  //         <div className="content">
  //           <h4 onClick={showDetail}>{name}</h4>
  //           <div className="icons">
  //             <div className="i">
  //               <BriefCase />
  //               <span>{level}</span>
  //             </div>
  //             <div className="icons-inner">
  //               <div className="i">
  //                 <EnrolledIcon />
  //                 <span>{noEnrolled}</span>
  //               </div>
  //               <div className="i">
  //                 <RatingIcon />
  //                 <span>{rating}</span>
  //               </div>
  //             </div>
  //             <motion.div
  //               className="msg"
  //               variants={msgVariants}
  //               initial="initial"
  //               animate={isheartHovered ? "final" : "exit"}
  //             >
  //               <span>{isLoved ? "Added to Wishlist" : "Add to Wishlist"}</span>
  //             </motion.div>
  //           </div>
  //           <hr />
  //           <div className="content-inner">
  //             <div className="prices">
  //               <h4>Share</h4>
  //             </div>
  //             <FavEmojiButton
  //               isLoved={isLoved}
  //               name={name}
  //               isheartHovered={isheartHovered}
  //               setIsheartHovered={setIsheartHovered}
  //             />
  //           </div>
  //         </div>
  //       </CourseCardStyles>
  //     </DesktopMobile>
  //   );
  // };

  export interface IFavBtn {
    isLoved: boolean;
    name: string;
    isheartHovered: boolean;
    setIsheartHovered: Dispatch<SetStateAction<boolean>>;
  }
  export const FavEmojiButton: FunctionComponent<IFavBtn> = ({
    isLoved,
    name,
    isheartHovered,
    setIsheartHovered,
  }) => {
    const dispatch = useAppDispatch();
    const toggleFavorite = () => {
      // when a favorite is added, we update all other half states
      dispatch(toggleLoved(name));
      dispatch(setFilterCoursesByType());
      dispatch(setFilterCoursesBySearch());
      dispatch(setFilterSearchedCoursesByType());
    };
    const handleOnHover = (e: MouseEvent<HTMLButtonElement>) => {
      setIsheartHovered(true);
    };
    const handleNotOnHover = (e: MouseEvent<HTMLButtonElement>) => {
      setIsheartHovered(false);
    };
    // clicking outside the mobile to close the msg div because mouseLeave doesnt work on mobile
    const ref = useOutsideClick(() => {
      setIsheartHovered(false);
    });
    return (
      <EmojiButtonStyles
        onClick={toggleFavorite}
        onMouseOver={handleOnHover}
        onMouseLeave={handleNotOnHover}
        ref={ref}
      >
        {isLoved ? <FilledHeart /> : <OutlineHeart />}
      </EmojiButtonStyles>
    );
  };

  const CourseCard = (props: any) => {
    const [isheartHovered, setIsheartHovered] = useState(false);
    const router = useRouter();
    const showDetail = () => {
      // omor this worked like magic: for escaping symbols in urls
      // const path = "/courses/" + encodeURIComponent(name);
      const path = `/courses/${props?.name}?cn=${props?.id}`
      // const path = "/";
      // push the id
      router.push({
        pathname : path,
        query : {id: props?.id}
      },path);
    };
    const [courseDeail,setCourseDetail] = useState() as any;
    const dispatch = useAppDispatch();

  // const getCourseDetail = async() => {
  //   const resData = await dispatch(CommonAction.getCoursesDetail({id: id}))
  //   if(resData?.status) {
  //     setCourseDetail(resData?.data)
  //   }
  // }

  // useEffect(() => {
  //   getCourseDetail()
  // }, [])

    // todo
    // 1. work on the redux state course.isenrolled, update it as payment is completed
    // 2. based on the updated value, display components
    // 3. work on the try for free
    // console.log(img,name, 'imgage cousrse checkkk')
    return (
      <DesktopMobile>
        <CourseCardStyles>
          <TabOnly>
            <Image
              alt={props?.name}
              src={`${Config.s3Path}${props?.img}`}
              width={340}
              height={226}
              className="desktop img"
              onClick={showDetail}
            />
            <Image
              alt={props?.name}
              src={`${Config.s3Path}${props?.img}`}
              width={340}
              height={226}
              className="tab img"
              onClick={showDetail}
            />
            <Image
              alt={props?.name}
              src={`${Config.s3Path}${props?.img}`}
              width={164}
              height={105}
              className="mobile img"
              onClick={showDetail}
            />
          </TabOnly>
          <div className="content">
            <h4 onClick={showDetail}>{props?.name}</h4>
            <div className="icons">
              <div className="i">
                <BriefCase />
                <span>{props?.level}</span>
              </div>
              <div className="icons-inner">
                <div className="i">
                  <EnrolledIcon />
                  <span>{props?.noEnrolled}</span>
                </div>
                <div className="i">
                  <RatingIcon />
                  <span>{props?.rating}</span>
                </div>
              </div>
              <motion.div
                className="msg"
                variants={msgVariants}
                initial="initial"
                animate={isheartHovered ? "final" : "exit"}
              >
                <span>{props?.isLoved ? "Added to Wishlist" : "Add to Wishlist"}</span>
              </motion.div>
            </div>
            <hr />
            <div className="content-inner">
              <div className="prices">
                <h4>Share</h4>
              </div>
              <FavEmojiButton
                isLoved={props?.isLoved}
                name={props?.name}
                isheartHovered={isheartHovered}
                setIsheartHovered={setIsheartHovered}
              />
            </div>
          </div>
        </CourseCardStyles>
      </DesktopMobile>
    );
  };

  export default CourseCard;


import { CourseCardStyles } from "@/styles/CourseStyles/CourseCard";
import { FunctionComponent, useEffect, useState } from "react";
import ButtonGroup from "../Button/ButtonGroup";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { CourseCatalogStyles } from "@/styles/CoursepageStyles/Coursepage";
// import { CourseCard } from "../CourseCard/CourseCard";
import { convertToNaira } from "../Info/Wishlist";
import {
  resetFiltersByType,
  setFilterCoursesBySearch,
  setFilterCoursesByType,
} from "@/redux/dataSlice";
import { DetailH3Styles } from "@/styles/CoursepageStyles/CourseDetail";
import { ErrorMsg } from "./Error";
import * as CommonAction from "../../pages/api/actionreducer/action/Common.action";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const CourseCard = dynamic(() => import("../CourseCard/CourseCard"), {ssr: false});


const CourseCatalog: any = () => {
  const {
    // filtersByType,
    filteredByTypeCourses,
    allCourses,
    filteredBySearchCourses,
    filteredSearchCoursesByType,
    searchQuery,
    isSearching,
  } = useAppSelector((state: RootState) => state.data);
  const dispatch = useAppDispatch();
  const [lengthOfList, setLengthOfList] = useState(0);
  const [coursesList, setCoursesList] = useState([]) as any;
  const router = useRouter();
  const {courseCategory} = router.query;

  console.log(courseCategory, 'propsspsspsp33')
  const getCourses = async() => {
    if(courseCategory) {
      const resData = await dispatch(CommonAction.getCourses({Slug: courseCategory}))
      if(resData?.status) {
        setCoursesList(resData?.data)
      }
    }
  }

  useEffect(() => {
    getCourses()
  }, [router])

  useEffect(() => {
    if (isSearching) {
      dispatch(resetFiltersByType());
      dispatch(setFilterCoursesBySearch());
    } else {
      dispatch(setFilterCoursesByType());
    }
  }, [dispatch, isSearching, searchQuery]);

  useEffect(() => {
    if (isSearching && filteredSearchCoursesByType) {
      setLengthOfList(filteredSearchCoursesByType?.length);
    }
    if (!isSearching && filteredByTypeCourses) {
      setLengthOfList(filteredByTypeCourses?.length);
    }
  }, [
    isSearching,
    filteredSearchCoursesByType,
    filteredByTypeCourses,
    searchQuery,
  ]);
  // let currCourse = [] as any;
  // useEffect(() => {
  //   currCourse =  allCourses?.filter((item: any) => item.slug == "rubik-cube")
  // })
  // console.log(props?.catName,currCourse, 'props?.catNamecatNamecatName...')
  // console.log(allCourses, 'allCourses...nnnnnnnnnnnnnn')
  // const currCourse =  allCourses?.filter((item) => item.field == props?.catName)
  // const currCourse =  allCourses?.filter((item) => item.slug == "rubik-cube")

  // fix the course card arguments issue
  return (
    <CourseCatalogStyles>
      <div className="info">
      </div>
      <div className="group">
        {!isSearching &&
          coursesList?.map((ele: any, index: any) => (
            <CourseCard
              key={index}
              name={ele.product_name}
              level={ele.level}
              rating={ele.rating}
              dollarPrice={ele.price}
              field={ele.field}
              category={ele.category}
              isLoved={ele.isLoved}
              img={ele.image}
              nairaPrice={convertToNaira(ele.dollarPrice)}
              noEnrolled={ele.noEnrolled}
              id={ele.id}
              duration={ele.duration}
              desc={ele.desc}
              skills={ele.skills}
              syllabus={ele.syllabus}
              requirements={ele.requirements}
              tutors={ele.tutors}
              reviews={ele.reviews}
              totalReviews={ele.totalReviews}
              introVideo={ele.lecture_link}
              slug={ele.slug}
            />
          ))}
        {/* {isSearching &&
          filteredSearchCoursesByType?.map((ele, index) => (
            <CourseCard
              key={index}
              name={ele.name}
              level={ele.level}
              rating={ele.rating}
              dollarPrice={ele.dollarPrice}
              field={ele.field}
              category={ele.category}
              isLoved={ele.isLoved}
              img={ele.img}
              nairaPrice={convertToNaira(ele.dollarPrice)}
              noEnrolled={ele.noEnrolled}
              id={ele.id}
              duration={ele.duration}
              desc={ele.desc}
              skills={ele.skills}
              syllabus={ele.syllabus}
              requirements={ele.requirements}
              tutors={ele.tutors}
              reviews={ele.reviews}
              totalReviews={ele.totalReviews}
              introVideo={ele.introVideo}
              slug={ele.slug}
            />
          ))} */}
        {/* fix the zero element issue */}
        {/* {isSearching && filteredSearchCoursesByType?.length === 0 && (
          <ErrorMsg errormsg="No Match Found" />
        )} */}
      </div>
    </CourseCatalogStyles>
  );
};

export default CourseCatalog;

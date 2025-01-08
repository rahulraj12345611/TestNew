import { CourseCardStyles } from "@/styles/CourseStyles/CourseCard";
import { FunctionComponent, useEffect, useState } from "react";
import ButtonGroup from "../Button/ButtonGroup";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { CourseCatalogStyles } from "@/styles/CoursepageStyles/Coursepage";
import {  ICategory } from "../CourseCard/CourseCard";
import { convertToNaira } from "../Info/Wishlist";
import {
  resetFiltersByType,
  setFilterCoursesBySearch,
  setFilterCoursesByType,
  setFilterCategorysByType
} from "@/redux/dataSlice";
import { DetailH3Styles } from "@/styles/CoursepageStyles/CourseDetail";
import { ErrorMsg } from "./Error";
import { CategoryCard } from "../CategoryCard/CategoryCard";
import * as CommonAction from "../../pages/api/actionreducer/action/Common.action";
import CourseCard from "../CourseCard/CourseCard";

const CategoryCatalog: FunctionComponent = () => {
  const {
    filtersByType,
    filteredByTypeCourses,
    courseCategory,
    allCourses,
    filteredBySearchCourses,
    filteredSearchCoursesByType,
    searchQuery,
    isSearching,
  } = useAppSelector((state: RootState) => state.data);
  const dispatch = useAppDispatch();
  const [lengthOfList, setLengthOfList] = useState(0);
  const [courseCategoryList, setCourseCategoryList] = useState([]) as any;
  // console.log(allCourses, 'allCourses....')

  const getCourseCategory = async() => {
    const resData = await dispatch(CommonAction.getCategory())
    if(resData?.status) {
      setCourseCategoryList(resData?.data)
    }
  }

  useEffect(() => {
    getCourseCategory()
  }, [])

  console.log(courseCategoryList, 'courseCategory.....')


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
    courseCategory,
    filteredByTypeCourses,
    searchQuery,
  ]);
  console.log(courseCategory,'testing courseCategory testing...')
  // fix the course card arguments issue
  return (
    <CourseCatalogStyles>
      {/* <ButtonGroup filters={filtersByType} /> */}
      {/* <div className="info">
        {lengthOfList > 0 && (
          <p>
            There {lengthOfList > 1 ? "are " : "is "}
            <strong style={{color: "green"}}>
              {lengthOfList > 0 && lengthOfList}{" "}
              {lengthOfList > 1 ? "courses " : "course "}
            </strong>{" "}
            in this category
          </p>
        )}
      </div> */}
      <div className="group">
        {!isSearching &&
          courseCategoryList?.map((ele: any, index: any) => (
            // <CourseCard
            //   key={index}
            //   name={ele.name}
            //   level={ele.level}
            //   rating={ele.rating}
            //   dollarPrice={ele.dollarPrice}
            //   field={ele.field}
            //   category={ele.category}
            //   isLoved={ele.isLoved}
            //   img={ele.img}
            //   nairaPrice={convertToNaira(ele.dollarPrice)}
            //   noEnrolled={ele.noEnrolled}
            //   id={ele.id}
            //   duration={ele.duration}
            //   desc={ele.desc}
            //   skills={ele.skills}
            //   syllabus={ele.syllabus}
            //   requirements={ele.requirements}
            //   tutors={ele.tutors}
            //   reviews={ele.reviews}
            //   totalReviews={ele.totalReviews}
            //   introVideo={ele.introVideo}
            // />
            <CategoryCard
            key={index}
            name={ele.CatName}
            // level={ele.level}
            // rating={ele.rating}
            // dollarPrice={ele.dollarPrice}
            // field={ele.field}
            // category={ele.category}
            // isLoved={ele.isLoved}
            // img={ele.img}
            Slug={ele.Slug}
            img={ele.Image}
            // nairaPrice={convertToNaira(ele.dollarPrice)}
            // noEnrolled={ele.noEnrolled}
            id={ele.id}
            // duration={ele.duration}
            // desc={ele.desc}
            // skills={ele.skills}
            // syllabus={ele.syllabus}
            // requirements={ele.requirements}
            // tutors={ele.tutors}
            // reviews={ele.reviews}
            // totalReviews={ele.totalReviews}
            // introVideo={ele.introVideo}
          />
          ))}
        {isSearching &&
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
          ))}
        {/* fix the zero element issue */}
        {isSearching && filteredSearchCoursesByType?.length === 0 && (
          <ErrorMsg errormsg="No Match Found" />
        )}
      </div>
    </CourseCatalogStyles>
  );
};

export default CategoryCatalog;

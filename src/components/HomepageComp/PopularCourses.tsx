import React, { FunctionComponent, useEffect, useState } from "react";
import SectionHead from "../SectionHead/SectionHead";
import ButtonGroup from "../Button/ButtonGroup";
import { PaddedSectionStyle } from "@/styles/HomepageStyles/Section";
import { CoursesGroupStyle } from "@/styles/HeroStyles/coursesGroup";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { setFilteredByTimeCourses } from "@/redux/dataSlice";
// import { CourseCard } from "../CourseCard/CourseCard";
import { convertToNaira } from "../Info/Wishlist";
import { LinkStyle } from "@/styles/LinkStyles/Link";
import Link from "next/link";
import { CenterItemStyle } from "@/styles/HeroStyles/CenterItem";
import { PopularCoursesStyles } from "@/styles/HomepageStyles/PopularCourses";
import * as CommonAction from "../../pages/api/actionreducer/action/Common.action";
import CourseCard from "../CourseCard/CourseCard";

const PopularCourses = () => {
  const { filtersByTime, filteredByTimeCourses, allCourses } = useAppSelector(
    (state: RootState) => state.data
  );

  const [popularCourses, setPopularCourses] = useState([]) as any;

  console.log(filteredByTimeCourses, 'filteredByTimeCourses...')
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setFilteredByTimeCourses());
  }, [dispatch, allCourses]);

  const getPopularCourses = async() => {
    const resData = await dispatch(CommonAction.getpCourses())
    if(resData?.status) {
      setPopularCourses(resData?.data)
    }
  }

  useEffect(() => {
    getPopularCourses()
  }, [])

  return (
    <PopularCoursesStyles>
      <SectionHead
        bigtext="Our Popular Courses"
        smalltext="Check out some of the top industry leading courses we offer"
      />
      <div className="inner">
        <PaddedSectionStyle>
          <ButtonGroup filters={filtersByTime} />
          <CoursesGroupStyle>
            {popularCourses?.map((ele: any, index: any) => (
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
                noEnrolled={ele.users}
                id={ele.id}
                duration={ele.duration}
                desc={ele.pro_description}
                skills={ele.skills}
                syllabus={ele.syllabus}
                requirements={ele.requirements}
                tutors={ele.tutors}
                reviews={ele.users}
                totalReviews={ele.totalReviews}
                introVideo={ele.lecture_link}
                slug={ele.slug}
              />
            ))}
          </CoursesGroupStyle>
        </PaddedSectionStyle>
      </div>
      <CenterItemStyle>
        <div className="pad">
          <Link href={"/courses"}>
            <div className="a">
              <LinkStyle color="var(--green, #097969)">
                View all Courses
              </LinkStyle>
            </div>
          </Link>
        </div>
      </CenterItemStyle>
    </PopularCoursesStyles>
  );
};

export default PopularCourses;

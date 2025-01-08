import CourseCatalog from "@/components/Coursepage/CourseCatalog";
import { BigSectionHead } from "@/components/SectionHead/BigSectionHead";
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { MarginStyle } from "@/styles/CoursepageStyles/Coursepage";
import { CenterItemStyle } from "@/styles/HeroStyles/CenterItem";
import { ActualPaddedSectionStyle } from "@/styles/HomepageStyles/Section";
import Head from "next/head";
import { useRouter } from "next/router";

const Courses = () => {
  const { searchQuery } = useAppSelector((state: RootState) => state.data);  
  const router = useRouter();
  const queryParams = router.query;
  console.log(queryParams,searchQuery, 'queryParamsqueryParamsqueryParamsqueryParams6666')
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>The Brain Connections | Courses</title>
        <link rel="icon" href="/brain/brain_new_logo.png" />
      </Head>
      <CenterItemStyle>
        <BigSectionHead
          bigtext="Check out the courses we offer"
          smalltext="We offer a variety of courses that teach popular and in demand tech skills on the market today. "
        />
      </CenterItemStyle>
      <MarginStyle>
        <ActualPaddedSectionStyle>
          <CenterItemStyle>
            <h3>
              {searchQuery === null ? (
                `${queryParams.courseCategory} courses`
              ) : (
                <div className="sh">
                  <>Search results for </>
                  <span>&#34;{searchQuery}&#34;</span>
                </div>
              )}
            </h3>
          </CenterItemStyle>
          <CourseCatalog/>
        </ActualPaddedSectionStyle>
      </MarginStyle>
    </>
  );
};

export default Courses;

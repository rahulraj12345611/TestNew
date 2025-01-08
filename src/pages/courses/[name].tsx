import { ArrowRight } from "@/components/Icons/Icons";
import { DetailNavStyles } from "@/styles/CoursepageStyles/CourseDetail";
import { CourseDetailSectionStyle } from "@/styles/HomepageStyles/Section";
import { useRouter } from "next/router";
import Link from "next/link";
// import { CourseDetailComp } from "@/CourseDetailPage/CourseDetail";
import Head from "next/head";
import dynamic from "next/dynamic";
const CourseDetailComp = dynamic(() => import("../../CourseDetailPage/CourseDetail"), {ssr: false});

const CourseDetail = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>The Brain Connections | {router.query.name}</title>
        <link rel="icon" href="/brain/brain_new_logo.png" />
      </Head>
      <CourseDetailSectionStyle>
        <DetailNavStyles>
          <Link href="/courses">
            <p>Courses</p>
          </Link>
          <ArrowRight />
          <strong>{router.query.name}</strong>
        </DetailNavStyles>
        <CourseDetailComp />
      </CourseDetailSectionStyle>
    </>
  );
};

export default CourseDetail;

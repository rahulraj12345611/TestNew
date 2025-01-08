// import { config } from "process";
import { Dispatch } from "redux";
import Config from "../../../../../config.json";
export const MATCHMAKING = "MATCHMAKING";
export const BASICKUNDLI = "BASICKUNDLI";
export const KUNDLI = "KUNDLI";
export const DIVISIONALCHART = "DIVISIONALCHART";
export const DASHA = "DASHA";
export const HORODETAIL = "HORODETAIL"


export const submitContact = (data: any) => {
  return async (dispatch: Dispatch) => {
    const resdata = await fetch(`${Config.api}/common/contact_us`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: data,
      }),
    });
    const resData = await resdata.json();
    return resData;
  };
};

export const getCourses = (data: any) => {
  return async (dispatch: Dispatch) => {
    const resdata = await fetch(`${Config.api}/common/getCourses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Slug: data?.Slug,
      }),
    });
    const resData = await resdata.json();
    return resData;
  };
};

export const getpCourses = () => {
  return async (dispatch: Dispatch) => {
    const resdata = await fetch(`${Config.api}/common/getpCourses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      }),
    });
    const resData = await resdata.json();
    return resData;
  };
};

export const getCoursesDetail = (data: any) => {
  return async (dispatch: Dispatch) => {
    const resdata = await fetch(`${Config.api}/common/getCoursesDetail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: data?.id,
      }),
    });
    const resData = await resdata.json();
    return resData;
  };
};


export const getCategory = () => {
  return async (dispatch: Dispatch) => {
    const resdata = await fetch(`${Config.api}/common/getcourseCategory`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // data: data,
      }),
    });
    const resData = await resdata.json();
    return resData;
  };
};


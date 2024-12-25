import {
  ContactPageBtnStyles,
  ContactStyles,
  ErrorStyles,
  FormBtnStyles,
  FormLabelStyles,
  InputStyles,
  TextareaStyles,
} from "@/styles/ContactpageStyles/Contact";
import { ActualPaddedSectionStyle } from "@/styles/HomepageStyles/Section";
import { FunctionComponent, useEffect, useState } from "react";
import SectionHead from "../SectionHead/SectionHead";
import { DesktopMobile, TabOnly } from "@/styles/HeroStyles/Hero";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { setContactForm } from "@/redux/dataSlice";
import { Checked } from "../Icons/Icons";

export interface IContactForm {
  name: string;
  email: string;
  subject: string;
  msg: string;
}
export const ContactComp: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContactForm>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      msg: "",
    },
  });
  
  const [isContactFormSubmitted, setIsContactFormSubmitted] = useState(false);
  const dispatch = useAppDispatch();
  const handleContactForm = (data: IContactForm) => {
    // reset();
    // dispatch(setContactForm(data));
    // setIsContactFormSubmitted(true);
  };
  return (
    <ContactStyles>
      <SectionHead
        bigtext="Contact With Us"
        smalltext="👋 We're thrilled to have you on The Brain Connection! If you have any questions or feedback, we're all ears! Your thoughts are important to us!"
      />
      <ActualPaddedSectionStyle>
        <div className="main">
          <div className="img">
            <DesktopMobile>
              <TabOnly>
                <Image
                  alt="hero img"
                  src="/brain/contact_brain.jpg"
                  width={600}
                  height={750}
                  className="desktop"
                />
                <Image
                  alt="hero img"
                  src="/brain/contact_brain.jpg"
                  width={390}
                  height={700}
                  className="tab"
                />
              </TabOnly>
            </DesktopMobile>
          </div>
          <form onSubmit={handleSubmit(handleContactForm)}>
            <div className="inputs">
              <div className="form-ele">
                <FormLabelStyles>
                  <label htmlFor="name">Full Name</label>
                </FormLabelStyles>
                <InputStyles>
                  <input
                    type="text"
                    id=""
                    placeholder="Name..."
                    {...register("name", { required: "Name is required" })}
                  />
                </InputStyles>
                <ErrorStyles>{errors?.name && errors.name.message}</ErrorStyles>
              </div>
              <div className="form-ele">
                <FormLabelStyles>
                  <label htmlFor="name">Mobile</label>
                </FormLabelStyles>
                <InputStyles>
                  <input
                    type="text"
                    id=""
                    placeholder="Mobile..."
                    {...register("name", { required: "Mobile is required" })}
                  />
                </InputStyles>
                <ErrorStyles>{errors?.name && errors.name.message}</ErrorStyles>
              </div>
              <div className="form-ele">
                <FormLabelStyles>
                  <label htmlFor="email">Email Address</label>
                </FormLabelStyles>
                <InputStyles>
                  <input
                    type="email"
                    id=""
                    placeholder="Email..."
                    {...register("email", { required: "Email is required" })}
                  />
                </InputStyles>
                <ErrorStyles>
                  {errors?.email && errors.email.message}
                </ErrorStyles>
              </div>
              <div className="form-ele">
                <FormLabelStyles>
                  <label htmlFor="subject">Subject</label>
                </FormLabelStyles>
                <InputStyles>
                  <input
                    type="text"
                    id=""
                    placeholder="Subject"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                  />
                </InputStyles>
                <ErrorStyles>
                  {errors?.subject && errors.subject.message}
                </ErrorStyles>
              </div>
              <div className="form-ele">
                <FormLabelStyles>
                  <label htmlFor="msg">Message</label>
                </FormLabelStyles>
                <TextareaStyles>
                  <textarea
                    placeholder="Give a brief description"
                    {...register("msg", { required: "Message is required" })}
                  />
                </TextareaStyles>
                <ErrorStyles>{errors?.msg && errors.msg.message}</ErrorStyles>
              </div>
            </div>
            <div className="btn">
              <ContactPageBtnStyles disabled={isContactFormSubmitted} $submitted={isContactFormSubmitted}>
                {isContactFormSubmitted ? (
                  <>
                    <p>Sent</p> <Checked />
                  </>
                ) : (
                  "Send Message"
                )}
              </ContactPageBtnStyles>
            </div>
          </form>
        </div>
      </ActualPaddedSectionStyle>
    </ContactStyles>
  );
};

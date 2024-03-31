"use client";

import React, { FormEvent, useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Banner from "@/components/Banner/Banner";
import NavBar from "@/components/NavBar/NavBar";
import Title from "@/components/Title/Title";
import Footer from "@/components/Footer/Footer";

function Estimate() {
  const ref = useRef<HTMLFormElement>(null);

  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (ref.current) {
      try {
        emailjs.sendForm(
          process.env.NEXT_PUBLIC_NEXT_PUBLIC_MAIL_SERVER_KEY as string,
          process.env.NEXT_PUBLIC_MAIL_TEMPLATE_KEY as string,
          ref.current,
          process.env.NEXT_PUBLIC_MAIL_PRIVATE_KEY,
        );
        alert("소중한 의견 감사드립니다.");
      } catch (error) {
        alert("메시지 전송에 실패 했습니다.");
      }
    }
  };
  return (
    <div className="w-full">
      <div className="relative">
        <div className="mt-20 mb-60">
          <Banner bannerImage="about0.png" />
        </div>
        <div className="absolute bottom-[-20rem] max-sm:bottom-[-16.2rem] max-md:bottom-[-17.7rem] max-xl:bottom-[-19rem] right-0 left-0">
          <NavBar tab="CONTACT" />
          <div className="mt-28 mb-56">
            <Title title="CONTACT" content="견적문의" />
          </div>
        </div>
      </div>
      <div className="w-[70%] flex flex-row justify-between mx-auto max-sm:w-[80%]">
        <div className="w-1/2">
          <p className="text-[30px] max-sm:text-[10px] font-bold mb-14 max-md:text-headline2 max-xl:text-[25px]">
            궁금하신 점이 있으신가요?
          </p>
          <p className="mb-7 max-sm:mb-5 text-headline1 max-sm:text-[7.5px] max-md:text-[14px] max-xl:text-headline3">
            R.B.FILM은 어떤 종류의 프로젝트라도
            <br />
            처음부터 끝까지 내 영상을 제작한다는 마인드로 함께합니다.
          </p>
          <p className="text-headline1 max-sm:text-[8px] max-md:text-[14px] max-xl:text-headline3">
            한 번의 비즈니스가 아닌 지속적인 파트너로 함께 성장하기를 바랍니다.
          </p>
          <p className="text-headline1 max-sm:text-[8px] max-md:text-[14px] max-xl:text-headline3">
            좋은 인연이 되었으면 합니다.
          </p>
          <div>
            <form
              className="w-2/3 mt-24 max-sm:mt-12 max-md:w-full max-2xl:w-full"
              ref={ref}
              onSubmit={onSubmitForm}
            >
              <div className="">
                <div className="flex flex-row gap-1">
                  <p className="text-headline1 font-bold max-sm:text-[9px] max-md:text-[14px] max-xl:text-headline3">
                    업체(단체명) or 성함
                  </p>
                  <Image
                    className="max-md:w-2 max-md:h-5 max-sm:w-2 max-sm:pb-2"
                    src="/assets/images/essential.svg"
                    alt="필수사항"
                    width={13}
                    height={29}
                  />
                </div>
                <input
                  className="w-full h-10 border mb-7 border-white bg-black pl-2 max-sm:h-5 max-sm:text-[7px]"
                  type="text"
                />
              </div>
              <div>
                <div className="flex flex-row gap-1">
                  <p className="text-headline1 font-bold max-sm:text-[9px] max-md:text-[14px]  max-xl:text-headline3">
                    이메일
                  </p>
                  <Image
                    className="max-md:w-2 max-md:h-5  max-sm:w-2 max-sm:pb-2"
                    src="/assets/images/essential.svg"
                    alt="필수사항"
                    width={13}
                    height={29}
                  />
                </div>
                <input
                  className="w-full h-10 border mb-7 border-white bg-black pl-2 max-sm:h-5 max-sm:text-[7px]"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div>
                <div className="flex flex-row gap-1">
                  <p className="text-headline1 font-bold max-sm:text-[9px] max-md:text-[14px]  max-xl:text-headline3">
                    연락처
                  </p>
                  <Image
                    className="max-md:w-2 max-md:h-5  max-sm:w-2 max-sm:pb-2"
                    src="/assets/images/essential.svg"
                    alt="필수사항"
                    width={13}
                    height={29}
                  />
                </div>
                <input
                  className="w-full h-10 border mb-7 border-white bg-black pl-2 max-sm:h-5 max-sm:text-[7px]"
                  type="text"
                  name="phoneNumber"
                  required
                />
              </div>
              <div>
                <div className="flex flex-row gap-1">
                  <p className="text-headline1 font-bold max-sm:text-[9px] max-md:text-[14px]  max-xl:text-headline3">
                    제작 예산
                  </p>
                  <Image
                    className="max-md:w-2 max-md:h-5  max-sm:w-2 max-sm:pb-2"
                    src="/assets/images/essential.svg"
                    alt="필수사항"
                    width={13}
                    height={29}
                  />
                </div>
                <p className="text-gray font-medium text-[15px] max-sm:text-[6px] max-md:text-[10px]  max-xl:text-[12px]">
                  정해진 예산이 없다면 &quot;없음&quot;으로 기재해 주세요.
                </p>
                <input
                  className="w-full h-10 border mb-7 border-white bg-black pl-2 max-sm:h-5 max-sm:text-[7px]"
                  type="text"
                  name="money"
                  required
                />
              </div>
              <div>
                <p className="text-headline1 font-bold max-sm:text-[9px] max-md:text-[14px] max-xl:text-headline3">
                  레퍼런스 링크
                </p>
                <p className="text-gray font-medium text-[15px] max-sm:text-[6px]  max-md:text-[10px] max-xl:text-[12px]">
                  참고할 수 있는 영상 링크 or 타이틀을 알려주세요. 파일로 가지고
                  계신 경우 상단 메일로 보내주세요.
                </p>
                <input
                  className="w-full h-10 border mb-7 border-white bg-black pl-2 max-sm:h-5 max-sm:text-[7px]"
                  type="text"
                  name="referrence"
                />
              </div>
              <div>
                <div className="flex flex-row gap-1">
                  <p className="text-headline1 font-bold max-sm:text-[9px] max-md:text-[14px] max-xl:text-headline3">
                    문의 사항
                  </p>
                  <Image
                    className="max-md:w-2 max-md:h-5  max-sm:w-2 max-sm:pb-2"
                    src="/assets/images/essential.svg"
                    alt="필수사항"
                    width={13}
                    height={29}
                  />
                </div>
                <textarea
                  className="w-full h-52 mb-12 border border-white bg-black pl-2 max-sm:h-24 max-sm:text-[7px]"
                  name="message"
                  required
                />
              </div>
              <div className="flex flex-row justify-between">
                <div />
                <button
                  className="border w-24 h-11 max-md:w-16 max-md:h-8 max-sm:w-12 max-sm:h-5 max-sm:text-[6px] max-md:text-[12px]"
                  type="submit"
                  value="submit"
                >
                  등록하기
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-1/2 ml-20 max-2xl:flex max-2xl:flex-col max-2xl:justify-between">
          <Image
            className=""
            src="/assets/images/contact1.svg"
            width={729}
            height={540}
            alt="견적사진1"
          />
          <div className="flex flex-col justify-center items-center mb-20">
            <p className="text-headline1 mt-20 mb-6 max-sm:text-[8px] max-md:text-[16px]">
              Opening Time / Phone Number
            </p>
            <p className="text-headline3 max-sm:text-[7.5px] max-md:text-[14px]">
              Monday ~ Friday : 00am ~ 24pm
            </p>
            <p className="text-headline3 max-sm:text-[7.5px]  max-md:text-[14px]">
              Weekend : Online Consultation
            </p>
            <p className="text-headline3 max-sm:text-[7.5px]  max-md:text-[14px]">
              TEL:+82 10 7712 2492
            </p>
          </div>

          <Image
            src="/assets/images/contact2.svg"
            width={729}
            height={540}
            alt="견적사진2"
          />
        </div>
      </div>
      <div className="mt-[45rem] w-[80%] mx-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Estimate;

import Contactall from "@/component/common/contactall";
import Faq from "@/component/common/faq";
import GetUpdates from "@/component/common/getupdates";
import WhyChooseUs from "@/component/common/whychooseus";
import App_layout from "@/component/layout/app-layout";
import Image from "next/image";
import React from "react";

function FaqSection() {
  return (
    <div>
      <App_layout>
        {/* Hero Section with Background + Animated "FAQ" */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
          <Image
            src="/company/ga1.jpg"
            alt="FAQ Hero Background"
            layout="fill"
            objectFit="cover"
            className="object-cover mt-16"
            priority
          />

          {/* Animated FAQ Text */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <h1 className="faq-text text-white font-bold text-[50px] sm:text-[80px] md:text-[120px] tracking-wide text-center">
              FAQ
            </h1>
          </div>
        </div>

        {/* FAQ Content Section */}
        <Faq />
        <WhyChooseUs />
        <Contactall />
        <GetUpdates />

        {/* Scoped animation styling */}
        <style jsx>{`
          .faq-text {
            animation: faqFadeIn 2s ease-out, faqGlow 3s ease-in-out infinite;
          }

          @keyframes faqFadeIn {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes faqGlow {
            0%,
            100% {
              text-shadow:
                0 0 10px #fff,
                0 0 20px #fed42a,
                0 0 30px #f7d63c;
            }
            50% {
              text-shadow:
                0 0 20px #fff,
                0 0 30px #ffec76,
                0 0 40px #fed42a;
            }
          }
        `}</style>
      </App_layout>
    </div>
  );
}

export default FaqSection;

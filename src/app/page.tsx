import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="">
      <div className="flex flex-col laptop:flex-row max-w-screen-desktop mx-auto">
        <div className="relative laptop:h-screen w-full laptop:w-1/2 bg-dark-blue flex flex-col justify-between  px-5 tablet:px-8 laptop:px-12 pt-28 pb-10">
          <h2 className="text-white text-lg laptop:text-3xl desktop:text-3xl leading-[35px] laptop:leading-[50px] desktop:leading-[60px]">
            MRO Gulf (FZC) is undergoing an exciting transformation under new
            management and ownership. We are currently restructuring our
            operations to re-enter the aviation industry with a fresh
            perspective and a renewed brand identity. Our goal is to build on
            our legacy while innovating and adapting to meet the dynamic needs
            of the aviation sector. Stay tuned for updates as we embark on this
            new chapter, committed to excellence and growth in aviation
            services.
          </h2>
          <div className="flex space-x-10 justify-start  mt-10 laptop:mt-0 laptop:mb-10">
            <Link
              href="https://ga.linkedin.com/company/mro-gulf"
              target="_blank"
            >
              <FaLinkedin className="w-12 h-12 text-white" />
            </Link>
            <Link
              href="https://maps.app.goo.gl/S9jUTajnWFRN1PRZ8"
              target="_blank"
            >
              <ImLocation2 className="w-12 h-12 text-white" />
            </Link>
          </div>
        </div>

        <div className="laptop:h-screen w-full laptop:w-1/2 px-5 tablet:px-8 laptop:px-12 pt-10 laptop:pt-28 laptop:flex laptop:flex-col  pb-10">
          <div className="mb-8 laptop:mb-16 flex flex-col">
            <h3 className="text-gray-600 text-xl mb-2 font-semibold">
              Our company address:
            </h3>
            <p>
              SAIF Zone, Block “O4-004”, P.O. Box 8353, Sharjah , United Arab
              Emirates
            </p>
          </div>

          <div className="mb-8 laptop:mb-16 flex flex-col">
            <h3 className="text-gray-600 text-xl mb-2 font-semibold">
              Please be free to contact our team for any queries:{" "}
            </h3>
            <p>E-mail: assistant@mrogulf.com</p>
          </div>

          <div className="h-full flex justify-between items-end laptop:pb-10 mt-40 laptop:mt-0">
            <p className="text-sm">COPYRIGHT © 2024 MRO GULF</p>
            <Link href="/policy">
              <p className="text-sm">Privacy policy</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

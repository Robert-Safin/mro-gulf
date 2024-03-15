import Image from "next/image";
import Link from "next/link";

const Nav = async () => {
  return (
    <div className="w-full absolute top-0 bg-opacity-0 z-10 ">
      <div className=" max-w-screen-desktop  mx-auto flex items-center justify-between px-5 tablet:px-8 laptop:px-12 bg-white laptop:bg-opacity-0">
        <p className="text-black text-xl laptop:text-2xl laptop:text-white">
          Welcome to MRO Gulf
        </p>
        <Link href="/">
          <Image
            src="/no-bg.png"
            width={3000}
            height={3000}
            alt="logo"
            className="w-20 laptop:w-32 h-auto object-cover self-end"
          />
        </Link>
      </div>
    </div>
  );
};

export default Nav;

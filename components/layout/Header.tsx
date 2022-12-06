import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="shadow-md" id="mainMenu">
      <section className="bg-bodyBg">
        <div className="w-4/5 mx-auto grid grid-cols-6 items-center">
          <div className=" col-start-1 col-end-2">
            <Link href="/" passHref>
              <Image
                className="cursor-pointer"
                src="https://res.cloudinary.com/abdnahid/image/upload/v1669921572/yoga/Logo/dotlife_zxgdn9.png"
                width={200}
                height={100}
                style={{ objectFit: "cover", objectPosition: "left" }}
                alt="logo"
              />
            </Link>
          </div>
          <nav className="col-start-2 col-end-7 text-dark font-semibold text-lg">
            <ul className="flex space-x-2 items-center justify-end">
              <li className="hover:text-theme active:text-theme p-3 cursor-pointer">
                <Link href="/rooms">Home</Link>
              </li>
              <li className="hover:text-theme active:text-theme p-3 cursor-pointer">
                <Link href="/quizzes">Quizzes</Link>
              </li>
              <li className="hover:text-theme active:text-theme p-3 cursor-pointer">
                <Link href="/contact">classes</Link>
              </li>
              <li className="hover:text-theme active:text-theme p-3 cursor-pointer">
                <Link href="/news">courses</Link>
              </li>
              <li className="hover:text-theme active:text-theme p-3 cursor-pointer">
                <Link href="/news">Blog</Link>
              </li>
              <li>
                <button className="theme-btn">Book A Private Class</button>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;

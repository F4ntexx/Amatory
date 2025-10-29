import amatoryLogotype from "./assets/amatoryLogo.svg";
import questionImage from "./assets/question.svg";
import notificationImage from "./assets/notification.svg";
import worldImage from "./assets/world.svg";
import "./Index.css";
import HeaderIndex from "./components/HeaderIndex";
import ButtonsSignInUp from "./components/ButtonsSignInUp";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center gap-40 text-white" id="main">
        <HeaderIndex />
        <div className="flex justify-center  flex-col text-center gap-2 md:gap-5">
          <p className="text-3xl md:text-5xl font-semibold">
            Ignite sparks, feel <ul className="text-rose-700">Amatory</ul>
          </p>
          <ButtonsSignInUp />
        </div>
      </div>
      <div className="flex flex-col mt-90 gap-20 text-white">
        <div className="flex flex-col justify-center items-center gap-10">
          <p className="text-rose-700 text-2xl font-semibold">
            What is Amatory?
          </p>
          <p className="w-100 text-center">
            An online platform that connects people based on common interests,
            life stages and possibly missed opportunities.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 w-200 gap-5 ml-10">
            <div className="h-1 w-20 bg-rose-700"></div>
            <div className="h-1 w-20 bg-rose-700"></div>
            <div className="h-1 w-20 bg-rose-700"></div>
            <div className="text-rose-700 text-4xl font-bold">100T+</div>
            <div className="text-rose-700 text-4xl font-bold">1M+</div>
            <div className="text-rose-700 text-4xl font-bold">50T+</div>
            <div>daily coincidences</div>
            <div>users all over the world</div>
            <div>creating relationships</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-50 text-white">
        <p className="flex justify-center text-rose-700 text-2xl font-semibold">
          Where first love meets forevermore.
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 w-200 gap-1 md:gap-5 pl-5 ">
            <img
              src={amatoryLogotype}
              className="w-[50px]"
              loading="lazy"
              alt="heart Icon"
            ></img>
            <img
              src={questionImage}
              className="w-[25px]"
              loading="lazy"
              alt="Question Icon"
            ></img>
            <img
              src={notificationImage}
              className="w-[45px]"
              loading="lazy"
              alt="Notification Icon"
            ></img>
            <div className="text-xl font-bold">Registration Amatory</div>
            <div className="text-xl font-bold">FAQ</div>
            <div className="text-xl font-bold">Stay Updated</div>
            <div className="text-neutral-400 w-30 md:w-50">
              Join a community of like-minded individuals seeking meaningful
              relationships.
            </div>
            <div className="text-neutral-400 w-30 md:w-50">
              Get quick answers to common questions about our platform and
              services
            </div>
            <div className="text-neutral-400 w-30 md:w-50">
              Learn how to navigate the world of online dating with our
              insightful guides and articles.
            </div>
            <a href="/signIn" className="text-rose-700  font-bold">
              Sign in ›
            </a>
            <a href="/about" className="text-rose-700  font-bold">
              Get acquainted ›
            </a>
            <a href="/advice" className="text-rose-700  font-bold">
              Get early access ›
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col justify-center mt-50 py-20 text-white gap-3">
        <img
          src={worldImage}
          className="w-100 md:w-120"
          loading="lazy"
          alt="Map users using app"
        ></img>
        <div>
          <p className="flex text-center uppercase font-bold text-3xl">
            Trust fate, find amatory
          </p>
          <ButtonsSignInUp />
        </div>
      </div>
    </>
  );
}

export default App;

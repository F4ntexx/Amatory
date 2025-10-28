import HeaderIndex from "../components/HeaderIndex";
import imageRelationsheep from "../assets/imageRelationsheep.webp";
function About() {
  return (
    <>
      <div className="text-white bg-neutral-950 h-350">
        <HeaderIndex />
        <div className="flex justify-center text-center flex-col">
          <div className="flex justify-center items-center h-155">
            <p className="text-5xl font-bold">About us</p>
          </div>
          <div className="flex lg:flex-row flex-col bg-neutral-950 h-185 gap-10  justify-center">
            <div className="flex w-100 items-center justify-center">
              <p className="text-4xl">OUR MISSION</p>
            </div>
            <div className="flex items-center justify-center">
              <p className="flex  w-200 text-4xl text-center">
                To help people find a partner in the age of internet addiction,
                Amatory provides the opportunity to find a partner who is like
                you, with similar interests, which opens the possibility of not
                only relationships, but also friendships.
              </p>
            </div>
          </div>
          <div>
            <div>
              <img
                src={imageRelationsheep}
                alt=""
                className="w-screen h-screen object-center"
                loading="lazy"
              />
            </div>
            <p className="-my-100 text-4xl font-serif">
              Every person deserves to be loved just like that.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;

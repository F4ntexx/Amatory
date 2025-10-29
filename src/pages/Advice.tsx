import HeaderIndex from "../components/HeaderIndex";
import ImageLoveOne from "../assets/ImageLoveOne.webp";
import ImageLoveTwo from "../assets/ImageLoveTwo.webp";
import ImageLoveThree from "../assets/ImageLoveThree.webp";
import ImageLoveFour from "../assets/ImageLoveFour.webp";
import ImageLoveFive from "../assets/ImageLoveFive.webp";
function Advice() {
  return (
    <>
      <div className="bg-neutral-950">
        <div className="text-white">
          <HeaderIndex />
        </div>
        <div className="flex justify-center py-50">
          <div className="grid grid-cols-2 grid-rows-5 gap-5 md:gap-60 md:h-200 md:w-200 justify-center ">
            <div className="w-40 md:w-50">
              <img
                src={ImageLoveOne}
                alt="ImageLoveOne"
                loading="lazy"
                className="w-40 md:w-60"
              />
              <p className="text-cyan-400">To walk together is to go far</p>
            </div>
            <div className="col-start-2 row-start-2 w-40 md:w-60">
              <img
                src={ImageLoveTwo}
                alt="ImageLoveTwo"
                loading="lazy"
                className="w-40 md:w-50"
              />
              <p className="text-cyan-200">
                Together - on the ground and in the clouds
              </p>
            </div>
            <div className="row-start-3 w-40 md:w-60">
              <img
                src={ImageLoveThree}
                alt="ImageLoveThree"
                loading="lazy"
                className="w-40 md:w-60"
              />
              <p className="text-amber-200">
                Where there is love, there is warmth
              </p>
            </div>
            <div className="col-start-2 row-start-4 w-40 md:w-60">
              <img
                src={ImageLoveFour}
                alt="ImageLoveFour"
                loading="lazy"
                className="w-40 md:w-60"
              />
              <p className="text-amber-100">
                Where they cook with love, the food tastes better.
              </p>
            </div>
            <div className="row-start-5 w-40 md:w-60">
              <img
                src={ImageLoveFive}
                alt="ImageLoveFive"
                loading="lazy"
                className="w-40 md:w-60"
              />
              <p className="text-rose-100">
                Have fun together - even to the ends of the earth
              </p>
            </div>
          </div>
        </div>
        <div className="py-1 md:py-200">
          <p className="flex lg:gap-2 gap-1 justify-center lg:text-3xl text-l text-white">
            Remember that actions speak louder than
            <b className="text-rose-700">
              <br></br> words
            </b>
          </p>
        </div>
      </div>
    </>
  );
}
export default Advice;

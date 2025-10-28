import { Navbar } from "../components/Navbar";
import worldImage from "../assets/world.svg";
function PersonalAccount() {
  function handleLocation() {
    location.href = "/Profile";
  }
  return (
    <>
      <div className="flex flex-col gap-20 h-screen text-white">
        <Navbar />
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={worldImage} alt="" className="h-50 md:h-70" loading="lazy" />
          <div className="flex  flex-col text-center">
            <h1 className="text-lg">Dating in your pocket</h1>
            <h3 className="text-neutral-500 w-70 lg:w-200">
              Create your profile and start dating with the most convenient
              partner search system!
            </h3>
          </div>
          <button
            onClick={handleLocation}
            className="text-lg h-15 w-45 bg-rose-600 hover:bg-rose-700 hover:shadow-sm hover:shadow-rose-700 rounded-xl md:h-15 md:w-50"
          >
            Create quesionnaire
          </button>
        </div>
      </div>
    </>
  );
}

export default PersonalAccount;

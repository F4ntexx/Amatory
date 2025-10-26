import { Navbar } from "../components/Navbar";
export function Match() {
  let data = localStorage.getItem("userQuestionnnaire");
  let parseData = JSON.parse(data);
  return (
    <>
      <div className="text-white h-screen">
        <Navbar />
        <div className="flex flex-col items-center  bg-neutral-700 h-100 w-200">
          <div className="flex justify-center flex-col gap-5 pt-5">
            <div className="bg-neutral-800 h-10 w-50 pl-2">
              <p>
                {parseData.name} {parseData.surname}
              </p>
            </div>
            <div className="bg-neutral-800 h-10 w-50 pl-2">
              <p>{parseData.city}</p>
            </div>
            <div className="bg-neutral-800 h-10 w-50 pl-2">
              <p>{parseData.age}</p>
            </div>
            <div className="bg-neutral-800 h-10 w-50 pl-2">
              <p>{parseData.hobby}</p>
            </div>
            <div className="bg-neutral-800 h-10 w-50 pl-2">
              <p>{parseData.habits}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

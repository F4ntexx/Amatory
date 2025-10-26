import { ButtonsElements } from "../components/buttonsHobby";
import { HabitsElements } from "../components/habits";
import { AgeInput } from "../components/AgeInput";
import { CityInput } from "../components/CityInput";
import { useNavigate } from "react-router-dom";

export function Edits() {
  const navigate = useNavigate();

  function redirect() {
    navigate("/profile");
  }

  return (
    <>
      <div className=" h-screen text-white flex flex-col items-center gap-5">
        <div className="flex flex-col p-5 gap-5 bg-neutral-900 w-200 h-70">
          <p className="text-2xl">Select criteria</p>
          <div className="flex gap-5">
            <AgeInput />
            <CityInput />
          </div>
          <div className="flex gap-5">
            <ButtonsElements />
            <HabitsElements />
          </div>
          <button
            onClick={() => {
              redirect;
            }}
            className="w-50 h-10 bg-neutral-800 rounded-md border-2 border-rose-600 hover:border-rose-700 hover:bg-neutral-900"
          >
            Save Edit
          </button>
        </div>
      </div>
    </>
  );
}

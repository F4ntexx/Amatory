import { AgeInput } from "./AgeInput";
import { CityInput } from "./CityInput";
import { HabitsElements } from "./habits";
import {ButtonsElements} from "../components/buttonsHobby"
export function FormSetting() {
  return (
    <>
      <div className="h-300 bg-neutral-950 text-white">
        <form
          className="flex flex-col justify-center items-center gap-5"
          id="form"
        >
          <p className="text-2xl font-bold">Setting</p>
          <AgeInput/>
          <CityInput/>
          <ButtonsElements/>
          <HabitsElements/>
          <button className="px-12 py-3 bg-neutral-900 mt-80 rounded-md cursor-pointer hover:shadow-rose-600 shadow-xs">Submit</button>
        </form>
      </div>
    </>
  );
}

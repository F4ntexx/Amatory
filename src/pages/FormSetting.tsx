import { AgeInput } from "../components/AgeInput";
import { CityInput } from "../components/CityInput";
import { HabitsElements } from "../components/habits";
import { ButtonsElements } from "../components/buttonsHobby";
import axios from "axios";
import { Navbar } from "../components/Navbar";

export function FormSetting() {
  function handleSubmit(e: any) {
    e.preventDefault();
    const queryString = window.location.search;
    const searchParams = new URLSearchParams(queryString);
    axios
      .get(`http://localhost:4200/usersGroup?${searchParams.toString()}`)
      .then(function (response) {
        const data = response.data;
        console.log(data)
      });
  }

  return (
    <>
      <div className="h-screen bg-neutral-950 text-white" id="aa">
        <Navbar />
        <form
          className="flex flex-col justify-center items-center gap-5"
          id="form"
          onSubmit={handleSubmit}
        >
          <p className="text-2xl font-bold">Setting</p>
          <AgeInput />
          <CityInput />
          <ButtonsElements />
          <HabitsElements />
          <button
            className="w-40 h-10 bg-neutral-900  rounded-md cursor-pointer hover:shadow-rose-600 shadow-xs"
            onClick={() => {}}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

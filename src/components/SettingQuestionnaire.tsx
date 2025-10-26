import { useNavigate } from "react-router-dom";
export function SettingQuestionnaire() {
  let navigate = useNavigate();
  return (
    <div
      className="flex flex-col items-center  gap-5 text-white mt-15"
      id="main"
    >
      <p className="items-center text-center w-70 lg:w-150 text-lg lg:text-2xl">
        {" "}
        <span className="bg-rose-600 text-xl font-semibold lg:text-3xl">
          {" "}
          To love
        </span>{" "}
        is nothing. To be loved is something. But to love and be loved,{" "}
        <span className="bg-rose-600 text-xl font-semibold lg:text-3xl">
          {" "}
          that’s everything
        </span>
      </p>
      <button
        className="h-10 w-30 bg-rose-600 rounded-md"
        onClick={() => navigate("/formsetting")}
      >
        Get setting
      </button>
    </div>
  );
}

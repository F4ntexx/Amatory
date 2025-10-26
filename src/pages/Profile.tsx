import { Navbar } from "../components/Navbar";
import Greeting from "../components/fieldsProfile";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
export function Profile() {
  const navigate = useNavigate();

  function redirect() {
    navigate("/edits");
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:4200/api/users");
      return data;
    },
  });

  if (isError) {
    return (
      <>
        <div className="h-screen text-white ">
          <Navbar />
          <div className="flex justify-center items-center text-center  text-rose-600 text-5xl h-99">
            Sorry is getting data - error
          </div>
        </div>
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <div className="h-screen text-white">
          <Navbar />
          <div className="flex justify-center items-center text-center text-green-600 text-5xl h-99">
            Loading...
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="text-white">
        <Navbar />
      </div>
      <div className="h-400 bg-neutral-950 text-white px-5">
        <div className="flex flex-col md:gap-20 md:items-center md:justify-center pt-10 items-center">
          <div className="">
            <form className="flex flex-col gap-5">
              <div className="grid md:grid-cols-2 gap-5 grid-cols-1 ">
                <div className="flex items-center justify-center w-80">
                  <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-rose-300 border-dashed rounded-lg cursor-pointer bg-neutral-50 hover:bg-rose-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-rose-500 dark:text-rose-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-rose-500">
                        <span className="font-semibold">Click to upload</span>
                      </p>
                      <p className="text-xs text-rose-500 ">
                        SVG, PNG, JPG or GIF (MAX. 500x500px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
                <div className="flex flex-col justify-center gap-5">
                  <Greeting
                    name={data.name}
                    surname={data.surname}
                    email={data.email}
                  />
                  <button
                    className="bg-neutral-800 h-8 w-30 rounded-md hover:bg-rose-500"
                    onClick={redirect}
                  >Edit profile</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

import HeaderIndex from "../components/HeaderIndex";
import SignButton from "../components/SignButtons";
import { useForm } from "react-hook-form";
import ErrorMessage from "../components/ErrorMessage";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="text-white">
        <HeaderIndex />
        <form
          className="flex flex-col justify-center items-center gap-5"
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <p className="text-2xl font-bold">Sign Up</p>
          <input
            className="text-white font-semibold rounded-md py-3 text-center bg-neutral-800 focus:outline-2 outline-offset-2 focus:outline-solid"
            placeholder="Name"
            {...register("name", {
              required: "This is required",
              pattern: {
                value: /([a-zA-Z0-9_\s]+)/g,
                message: "Invalid name",
              },
            })}
          ></input>
          <ErrorMessage error={errors.name?.message} />
          <input
            className="text-white font-semibold rounded-md py-3 text-center bg-neutral-800 focus:outline-2 outline-offset-2 focus:outline-solid"
            placeholder="Surname"
            {...register("surname", {
              required: "This is required",
              pattern: {
                value: /([a-zA-Z0-9_\s]+)/g,
                message: "Invalid surname",
              },
            })}
          ></input>
          <ErrorMessage error={errors.surname?.message} />
          <input
            className="text-white font-semibold rounded-md py-3 text-center bg-neutral-800 focus:outline-2 outline-offset-2 focus:outline-solid"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "This is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a currect email ",
              },
            })}
          ></input>
          <ErrorMessage error={errors.email?.message} />
          <input
            className="text-white font-semibold rounded-md py-3 text-center bg-neutral-800 focus:outline-2 outline-offset-2 focus:outline-solidd"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "This is reqiored",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                message:
                  "The password must contain at least 8 characters: one line, one uppercase letter and one number.",
              },
            })}
          ></input>
          <ErrorMessage error={errors.password?.message} />
          <SignButton />
          <div className="flex gap-2 h-42">
            <p>Already have an acount ?</p>
            <a href="/signIn" className="text-rose-600">
              Sign In
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
export default SignUp;

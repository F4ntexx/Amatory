import HeaderIndex from "../components/HeaderIndex";
import SignButtons from "../components/SignButtons";
import ErrorMessage from "../components/ErrorMessage";
import { useForm } from "react-hook-form";

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className="text-white h-185">
        <HeaderIndex />
        <form
          className="flex flex-col justify-center items-center gap-5"
          id="form"
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <p className="text-2xl font-bold">Sign In</p>
          <input
            className="text-white font-semibold rounded-md py-3 text-center bg-neutral-800 focus:outline-2 outline-offset-2 focus:outline-solid"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "This is - required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a correct email",
              },
            })}
          ></input>
          <ErrorMessage error={errors.email?.message} />
          <input
            className="text-white font-semibold rounded-md py-3 text-center bg-neutral-800 focus:outline-2 outline-offset-2 focus:outline-solid"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "This is - required",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                message:
                  "The password must contain at least 8 characters: one line, one uppercase letter and one number.",
              },
            })}
          ></input>
          <ErrorMessage error={errors.password?.message} />
          <SignButtons />
          <div className="flex gap-2 h-42">
            <p>Not registered yet?</p>
            <a href="/signUp" className="text-rose-600">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn;

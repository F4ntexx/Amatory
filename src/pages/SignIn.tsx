import HeaderIndex from "../components/HeaderIndex";
import SignButtons from "../components/SignButtons";

function SignIn() {
  return (
    <>
      <div className="text-white h-185">
        <HeaderIndex />
        <form className="flex flex-col justify-center items-center gap-5">
          <p className="text-2xl font-bold">Sign In</p>
          <input
            className="text-rose-500 font-semibold rounded-md py-3 text-center bg-rose-50 focus:outline-2 outline-offset-2 focus:outline-solid"
            type="email"
            placeholder="Email"
          ></input>
          <input
            className="text-rose-500 font-semibold rounded-md py-3 text-center bg-rose-50 focus:outline-2 outline-offset-2 focus:outline-solid"
            type="password"
            placeholder="Password"
          ></input>
          <SignButtons />
          <div className="flex gap-2 h-42">
            <p>Not registered yet?</p>
            <a href="/signIn" className="text-rose-600">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn;

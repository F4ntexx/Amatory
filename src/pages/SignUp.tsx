import HeaderIndex from "../components/HeaderIndex";
import SignButtons from "../components/SignButtons"

function SignUp() {
  return (
    <>
      <div className="text-white">
        <HeaderIndex />
        <form className="flex flex-col justify-center items-center gap-5">
            <p className="text-2xl font-bold">Sign Up</p>
          <input
            className="text-rose-500 font-semibold rounded-md py-3 text-center bg-rose-50 focus:outline-2 outline-offset-2 focus:outline-solid"
            placeholder="Name"
          ></input>
          <input
            className="text-rose-500 font-semibold rounded-md py-3 text-center bg-rose-50 focus:outline-2 outline-offset-2 focus:outline-solid"
            placeholder="Surname"
          ></input>
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
          <input
            className="text-rose-500 font-semibold rounded-md py-3 text-center bg-rose-50 focus:outline-2 outline-offset-2 focus:outline-solid"
            placeholder="Confirm password"
          ></input>
          <SignButtons/>
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

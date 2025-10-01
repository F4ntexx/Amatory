function ButtonsSignInUp() {
  return (
    <div className="flex justify-center gap-5">
      <a
        href="/signUp"
        className=" px-10 py-1 rounded-md border-2 border-rose-700  hover:shadow-rose-700 shadow-sm"
      >
        Sign Up
      </a>
      <a
        href="/signIn"
        className=" px-10 py-1 rounded-md bg-rose-700 hover:bg-rose-800 hover:shadow-rose-800 shadow-sm"
      >
        Sign in
      </a>
    </div>
  );
}

export default ButtonsSignInUp;

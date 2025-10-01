function ButtonsSignInUp() {
  return (
    <div className="flex justify-center gap-5">
      <button
        type="submit"
        className=" px-10 py-1 rounded-md border-2 border-rose-700  hover:shadow-rose-700 shadow-sm"
      >
        Sign Up
      </button>
      <button
        type="submit"
        className=" px-10 py-1 rounded-md bg-rose-700 hover:bg-rose-800 hover:shadow-rose-800 shadow-sm"
      >
        Sign in
      </button>
    </div>
  );
}

export default ButtonsSignInUp;

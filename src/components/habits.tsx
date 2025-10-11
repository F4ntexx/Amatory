export function HabitsElements() {
  const habitsButtons = document.querySelectorAll(".habitsButton");
  const result = [];
  for (const element of habitsButtons) {
    result.push(element);
    element.addEventListener("click", (e) => {
      e.preventDefault();
      element.classList.add("border-rose-800", "bg-neutral-900");
      console.log(element.innerHTML);
    });
  }
  return (
    <>
      <div className="flex flex-col gap-5 mt-100">
        <h1>Habits</h1>
        <div className="grid grid-cols-2 gap-2 w-80 h-7">
          <button className="habitsButton   px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600">
            Balanced Diet
          </button>
          <button className="habitsButton   px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600">
            Maintaining Social Connections
          </button>
          <button className="habitsButton  px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600">
            Sufficient Sleep
          </button>
          <button className="habitsButton  px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600">
            Stress Management
          </button>
          <button className="habitsButton  px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600">
            Smoking
          </button>
          <button className="habitsButton  px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600">
            Excessive Alcohol Consumption
          </button>
          <button className="habitsButton   px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600">
            Sedentary Lifestyle
          </button>
          <button className="habitsButton  px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600">
            Compulsive Spending
          </button>
        </div>
      </div>
    </>
  );
}

export function HabitsElements() {
  const habitsButtons = document.querySelectorAll(".habitsButton");
  const handleButtonHabits: any = [];
  for (const element of habitsButtons) {
    let isButtonActive = false;

    element.addEventListener("click", (e) => {
      e.preventDefault();
      if (isButtonActive) {
        handleButtonHabits.pop(element);
        element.classList.remove("shadow-rose-100", "border-rose-900");
        isButtonActive = false;
      } else {
        element.classList.add(
          "px-2",
          "py-2",
          "rounded-xl",
          "shadow-rose-100",
          "border-2",
          "border-rose-900"
        );
        handleButtonHabits.push(element.id);
        isButtonActive = true;
      }
    });
  }
  return (
    <>
      <div className="flex flex-col gap-5 mt-100">
        <h1>Habits</h1>
        <div className="grid grid-cols-2 gap-2 w-80 h-7">
          <button
            className="habitsButton   px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600"
            id="balancedDiet"
          >
            Balanced Diet
          </button>
          <button
            className="habitsButton   px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600"
            id="maintainingSocialConnections"
          >
            Maintaining Social Connections
          </button>
          <button
            className="habitsButton  px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600"
            id="sufficientSleep"
          >
            Sufficient Sleep
          </button>
          <button
            className="habitsButton  px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600"
            id="stressManagement"
          >
            Stress Management
          </button>
          <button
            className="habitsButton  px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600"
            id="smoking"
          >
            Smoking
          </button>
          <button
            className="habitsButton  px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600"
            id="excessiveAlcoholConsumption"
          >
            Excessive Alcohol Consumption
          </button>
          <button
            className="habitsButton   px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600"
            id="sedentaryLifestyle"
          >
            Sedentary Lifestyle
          </button>
          <button
            className="habitsButton  px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600"
            id="compulsiveSpending"
          >
            Compulsive Spending
          </button>
        </div>
      </div>
    </>
  );
}

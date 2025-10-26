export function HabitsElements() {
  return (
    <>
      <div>
        <select
          name="habits"
          id="habits-select"
          className="text-white font-semibold rounded-md py-3 w-50 text-center bg-neutral-800 focus:outline-2 outline-offset-2 focus:outline-solid"
        >
          <option value=""> Select habits </option>
          <option value="Balanced Diet">Balanced Diet</option>
          <option value="Maintaining Social Connections">
            Maintaining Social Connections
          </option>
          <option value=" Sufficient Sleep"> Sufficient Sleep</option>
          <option value="Stress Management">Stress Management</option>
          <option value="Smoking">Smoking</option>
          <option value="Excessive Alcohol Consumption">
            Excessive Alcohol Consumption
          </option>
          <option value="Sedentary Lifestyle">Sedentary Lifestyle</option>
          <option value="Compulsive Spending">Compulsive Spending</option>
        </select>
      </div>
    </>
  );
}

export function ButtonsElements() {
  const hobbyButtons = document.querySelectorAll(".hobbyButton");
  const handleButtonHobby: any = [];
  for (const element of hobbyButtons) {
    let isButtonActive = false;
    element.addEventListener("click", (e) => {
      e.preventDefault();
      if (isButtonActive) {
        handleButtonHobby.pop(element.id);
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
        handleButtonHobby.push(element.id);
        isButtonActive = true;
      }
    });
  }
  return (
    <>
      <div className="flex flex-col gap-5">
        <h1>Hobby</h1>
        <div className="grid grid-cols-2 gap-2 w-80 h-7">
          <button
            className="hobbyButton   px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600"
            id="footbol"
          >
            footbol
          </button>
          <button
            className="hobbyButton   px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600"
            id="swimming"
          >
            swimming
          </button>
          <button
            className="hobbyButton   px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600"
            id="basketboll"
          >
            basketball
          </button>
          <button
            className="hobbyButton  px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600"
            id="knitting"
          >
            knitting
          </button>
          <button
            className="hobbyButton   px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600"
            id="embroidery"
          >
            embroidery
          </button>
          <button
            className="hobbyButton  px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600"
            id="modeling"
          >
            modeling
          </button>
          <button
            className="hobbyButton   px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600"
            id="reading"
          >
            reading
          </button>
          <button
            className="hobbyButton  px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600"
            id="cooks"
          >
            cooks
          </button>
          <button
            className="hobbyButton   px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600"
            id="drawind"
          >
            drawing
          </button>
          <button
            className="hobbyButton  px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600"
            id="photography"
          >
            photography
          </button>
          <button
            className="hobbyButton  px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600"
            id="dance"
          >
            dance
          </button>
          <button
            className="hobbyButton  px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600"
            id="camping"
          >
            camping
          </button>
          <button
            className="hobbyButton   px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600"
            id="singleCombat"
          >
            single combat
          </button>
          <button
            className="hobbyButton   px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600"
            id="plaingComputerGame"
          >
            plaing computer game
          </button>
          <button
            className="hobbyButton   px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600"
            id="singing"
          >
            singing
          </button>
          <button
            className="hobbyButton   px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600"
            id="otherSports"
          >
            other sports
          </button>
        </div>
      </div>
    </>
  );
}

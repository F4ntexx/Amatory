export function ButtonsElements() {
  const hobbyButtons = document.querySelectorAll(".hobbyButton");
  const result = [];
  for (const element of hobbyButtons) {
    result.push(element);
    element.addEventListener("click", (e) => {
      e.preventDefault();
      element.classList.add("border-rose-800", "bg-neutral-900");
      console.log(element.innerHTML);
    });
  }
  return (
    <>
      <div className="flex flex-col gap-5">
        <h1>Hobby</h1>
        <div className="grid grid-cols-2 gap-2 w-80 h-7">
          <button className="hobbyButton   px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600">
            footbol
          </button>
          <button className="hobbyButton   px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600">
            swimmming
          </button>
          <button className="hobbyButton   px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600">
            basketball
          </button>
          <button className="hobbyButton  px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600">
            knitting
          </button>
          <button className="hobbyButton   px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600">
            embroidery
          </button>
          <button className="hobbyButton  px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600">
            modeling
          </button>
          <button className="hobbyButton   px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600">
            reading
          </button>
          <button className="hobbyButton  px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600">
            cooks
          </button>
          <button className="hobbyButton   px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600">
            drawing
          </button>
          <button className="hobbyButton  px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600">
            photography
          </button>
          <button className="hobbyButton  px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600">
            dance
          </button>
          <button className="hobbyButton  px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600">
            camping
          </button>
          <button className="hobbyButton   px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600">
            single combat
          </button>
          <button className="hobbyButton   px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600">
            plaing computer game
          </button>
          <button className="hobbyButton   px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600">
            singing
          </button>
          <button className="hobbyButton   px-2 py-2 rounded-xl shadow-rose-800 border-2 border-rose-600">
            other sports
          </button>
        </div>
      </div>
    </>
  );
}

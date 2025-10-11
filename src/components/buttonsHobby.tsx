export function ButtonsElements() {
  const hobbyButtons = document.querySelectorAll(".hobbyButton");
  const result = [];
  for (const element of hobbyButtons) {
    result.push(element);
    element.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(element.innerHTML);
    });
  }
  return (
    <>
      <button className="hobbyButton bg-rose-600 px-2 py-2 rounded-xl shadow-rose-800">footbol</button>
      <button className="hobbyButton bg-rose-600 px-2 py-2 rounded-xl shadow-rose-800">swimmming</button>
      <button className="hobbyButton bg-rose-600 px-2 py-2 rounded-xl shadow-rose-800">basketball</button>
      <button className="hobbyButton bg-rose-600 px-2 py-2 rounded-xl shadow-rose-800">knitting</button>
      <button className="hobbyButton bg-rose-600 px-2 py-2 rounded-xl shadow-rose-800">embroidery</button>
      <button className="hobbyButton bg-rose-600 px-2 py-2 rounded-xl shadow-rose-800">modeling</button>
      <button className="hobbyButton bg-rose-600 px-2 py-2 rounded-xl shadow-rose-800">reading</button>
      <button className="hobbyButton bg-rose-600 px-2 py-2 rounded-xl shadow-rose-800">cooks</button>
      <button className="hobbyButton bg-rose-600 px-2 py-2 rounded-xl shadow-rose-800">drawing</button>
      <button className="hobbyButton bg-rose-600 px-2 py-2 rounded-xl shadow-rose-800">photography</button>
      <button className="hobbyButton bg-rose-600 px-2 py-2 rounded-xl shadow-rose-800">dance</button>
      <button className="hobbyButton bg-rose-600 px-2 py-2 rounded-xl shadow-rose-800">camping</button>
      <button className="hobbyButton bg-rose-600 px-2 py-2 rounded-xl shadow-rose-800">single combat</button>
      <button className="hobbyButton bg-rose-600 px-2 py-2 rounded-xl shadow-rose-800">plaing computer game</button>
      <button className="hobbyButton bg-rose-600 px-2 py-2 rounded-xl shadow-rose-800">singing</button>
      <button className="hobbyButton bg-rose-600 px-2 py-2 rounded-xl shadow-rose-800">other sports</button>
    </>
  );
}

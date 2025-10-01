import AmatoryLogotype from "/amatory/frontend/amatory-dating-website/src/assets/amatoryLogo.svg";

function HeaderIndex() {
  return (
    <header className="flex justify-center py-10">
      <nav className="flex gap-20">
        <a href="/" className="flex gap-2">
          <img src={AmatoryLogotype} className="w-[50px]"></img>
          <p className="flex text-rose-600 text-2xl font-semibold items-center">Amatory</p>
        </a>
        <ul className="flex flex-row-reverse space-x-4 space-x-reverse  gap-5 items-center">
          <li>
            <a href="/advice" className="hover:text-neutral-500">advice</a>
          </li>
          <li>
            <a href="/about" className="hover:text-neutral-500">about</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default HeaderIndex;

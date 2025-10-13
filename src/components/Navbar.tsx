import MenuIcon from "@mui/icons-material/Menu";
import logotype from "../assets/amatoryLogo.svg";
export function Navbar() {
  const navLink = document.getElementById("nav-links");
  function onToggleMenu() {
    navLink?.classList.toggle("top-[9%]");
  }
  return (
    <header>
      <nav className="flex justify-between items-center w-[90%] mx-auto pt-5">
        <div>
          <a href="/PersonalAccount">
            <img src={logotype} alt="" className="w-[50px]" />
          </a>
        </div>
        <div
          className="md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 bg-neutral-950"
          id="nav-links"
        >
          <ul className="flex flex-col md:flex-row md:items-center md:gap-[4vw] gap-8">
            <li>
              <a href="/Profile">Profile</a>
            </li>
            <li>
              <a href="/Achievements">Achievments</a>
            </li>
            <li>
              <a href="/Questionnaire">Questionnaire</a>
            </li>
            <li>
              <a href="/Match">Match</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6 md:hidden">
          <MenuIcon onClick={onToggleMenu} sx={{ fontSize: 25 }} />
        </div>
      </nav>
    </header>
  );
}

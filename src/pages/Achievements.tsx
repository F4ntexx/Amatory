import { Navbar } from "../components/Navbar";
import { AchievementElement } from "../components/AchievmentElement";
import blank from "../assets/blank.svg";
import heart from "../assets/heart.svg";
import heartArrow from "../assets/heartArrow.svg";
import heartSearch from "../assets/heartSearch.svg";
import heartShield from "../assets//heartShield.svg";
import heartTeam from "../assets/heartTeam.svg";
import heartTower from "../assets/heartTower.svg";
import heartUnlock from "../assets/heartUnlock.svg";
import heartWorld from "../assets/heartWorld.svg";

export function Achievements() {
  return (
    <>
      <div className="h-screen text-white">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2 py-30 gap-5">
          <div className="flex justify-center items-center text-2xl text-center">
            Use your in-app progress through achievements
          </div>
          <div className="flex justify-center md:w-90">
            <div className="grid grid-cols-2 gap-x-1  gap-y-1 md:grid-cols-3 md:gap-x-3">
              <AchievementElement
                id="LoveLetter" 
                title="Love Letter"
                image={blank}
              />
              <AchievementElement
                id="Heartfelt"
                title="Heartfelt"
                image={heart}
              />
              <AchievementElement
                id="StruckLove"
                title="Struck Love"
                image={heartArrow}
              />
              <AchievementElement
                id="LoveChat"
                title="Love Chat"
                image={heartSearch}
              />
              <AchievementElement
                id="HeartShield"
                title="Heart Shield"
                image={heartShield}
              />
              <AchievementElement
                id="GroupHug"
                title="Group Hug"
                image={heartTeam}
              />
              <AchievementElement
                id="LoveFortess"
                title="Love Fortress"
                image={heartTower}
              />
              <AchievementElement
                id="UnlockedHeart"
                title="Unlocked Heart"
                image={heartUnlock}
              />
              <AchievementElement
                id="GlobalLove"
                title="Global Love"
                image={heartWorld}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

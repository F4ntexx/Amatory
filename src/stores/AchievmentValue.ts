import { action, makeAutoObservable } from "mobx";

class Achievment {
  loveletter =  false;
  Heartfelt = false;
  StruckLove = false;
  LoveChat = false;
  HeartShield = false;
  GroupHug = false;
  LoveFortress = false;
  UnlockedHeart = false;
  GlobalLove = false;

  constructor() {
    makeAutoObservable(this);
  }

setloveletter = action(() => {
  this.loveletter = true;
});
}


export const AchievementValue = new Achievment()

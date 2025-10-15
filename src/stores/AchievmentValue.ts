import { makeAutoObservable } from "mobx";

class Store {
  loveletter = false;
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

  setlove () {
    this.loveletter = true;
    console.log(this.loveletter);
  };
}

export const AchievementValue = new Store();

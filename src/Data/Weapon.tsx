const neededFodder = [
    { SR: 4, SSR: 8, Baha: 40 },
    { SR: 8, SSR: 16, Baha: 80 },
    { SR: 12, SSR: 24, Baha: 120 },
    { SR: 16, SSR: 32, Baha: 160 },
    { SR: 20, SSR: 40, Baha: 200 },
    { SR: 24, SSR: 48, Baha: 240 },
    { SR: 28, SSR: 56, Baha: 280 },
    { SR: 32, SSR: 64, Baha: 320 },
    { SR: 36, SSR: 72, Baha: 360 },
    { SR: 40, SSR: 80, Baha: 400 },
    { SR: 44, SSR: 88, Baha: 440 },
    { SR: 48, SSR: 96, Baha: 480 },
    { SR: 52, SSR: 104, Baha: 520 },
    { SR: 56, SSR: 112, Baha: 560 },
    { SR: -1, SSR: 600, Baha: 1000 },
    { SR: -1, SSR: 640, Baha: 1080 },
    { SR: -1, SSR: 680, Baha: 1140 },
    { SR: -1, SSR: 720, Baha: 1200 },
    { SR: -1, SSR: 760, Baha: 1280 }
  ];
  
  export class Weapon {
    slvl: number = 1;
    rarity: number = 0; 
  
    constructor(rarity: number, slvl: number) {
      this.slvl = slvl;
      this.rarity = rarity;
    }
  
    // type: 0 = SR, 1 = SSR, 2 = Baha
    getPointNeeded = (type: number) => {
      const isBaha = type === 2;
  
      if (isBaha) {
        return neededFodder[this.slvl].Baha;
      } else {
        return neededFodder[this.slvl][type === 0 ? "SR" : "SSR"];
      }
    };
  
    getValue = () => {
      var value = this.rarity === 0 ? 4 : 40;

      return value * this.slvl;
    };

    // TODO: edit this method to support SR fodder too...
    // currently only for SSR fodder
    getSRFodder = () => {
        let totalSR: number = 0;
        for(var i = this.slvl; i > 1; i--) {
            // console.log(neededFodder[i-1]);
            totalSR += neededFodder[i-1]['SSR'] / 4;
        }

        return totalSR;
    }

    // TODO: this one too
    getFodderValue = () => {
      const sr = this.getSRFodder();
      return 40 + sr * 4;
    }
  
    toString = () => {
      let strTemp = "";
      switch (this.rarity) {
        case 0:
          strTemp += "SR";
          break;
        case 1:
          strTemp += "SSR";
          break;
        default:
          strTemp += "SSR";
          break;
      }
  
      return strTemp + "lvl " + this.slvl;
    }
  }
  
  export default Weapon;
  
export default class DonutCounter {
  constructor() {
    this.donutCount = 1;
    this.clickAmount = 1;
    this.autoClickPrice = 100;
    this.multiplier = 1;
    this.multiplierPrice = 10;
  }

  addOneDonut(donutCount, clickAmount) {
    this.donutCount += this.clickAmount * this.multiplier;
  }

  buyAutoClicker(donutCount, autoClickerPrice) {
    this.donutCount -= this.autoClickPrice;
    this.autoClickPrice = Math.round(this.autoClickPrice + this.autoClickPrice * 0.1
    );
  }

  buyMultiplier(donutCount, multiplierPrice, clickAmount, multiplier) {
    this.donutCount = Math.round(this.donutCount - this.multiplierPrice);
    this.multiplierPrice = Math.round(
      this.multiplierPrice + this.multiplierPrice * 0.1
    );
    this.multiplier = this.multiplier + this.multiplier * 0.2;
    console.log(this.multiplier);
  }
}

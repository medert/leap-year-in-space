class Year {
  constructor(year){
    this.year = year;
  }
  isLeapYear(){
    if (this.year % 4 !== 0){
      return false;
    } else if (this.year % 100 !== 0){
      return true;
    } else if (this.year % 400 !== 0){
      return false;
    } else {
      return true;
    }
  }
  printLeap(){

    this.findCentury();

    let i = this.year;
    for (this.year; this.year <= (i + 100); ++this.year ){
      if (this.isLeapYear()){
        console.log(this.year);
      }
    }
  }

  findCentury(){
    if (this.year <= 100){
      this.year = 0;
    } else {
      this.year = this.year - this.year % 100;
    }
  }
}

let currentYear = new Year(2017);

console.log(currentYear.isLeapYear());
console.log(currentYear.printLeap());

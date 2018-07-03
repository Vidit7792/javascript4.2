function Airplane (model,seatingCapacity,maxSpeed);{
    this.model=model;
    this.seatingCapacity=seatingCapacity;
    this.maxSpeed=maxSpeed;
    this.print=function print(){
        console.log("Model:"+ this.model);
        colsole.log("SeatingCapacity:" +this.seatingCapacity);
        console.log("Maximum Speed:"+ this.maxSpeed);
    }
}
var plane1 = new Airplane('AirIndia123',200,1200);
console.log(plane1.print());
var plane2 = new Airplane('AirIndia456',300,1500);
console.log(plane2.print());
var plane3 = new Airplane('AirIndia789',100,1300);
console.log(plane3.print());

plane1.seatingCapacity+=10;
plane2.seatingCapacity+=10;
plane3.seatingCapacity+=10;
console.log('seating capacity increased');
console.log(plane1.print());
console.log(plane2.print());
console.log(plane3.print());

delete plane1.maxSpeed;
delete plane2.maxSpeed;
delete plane3.maxSpeed;

console.log(plane1);
console.log(plane2);
console.log(plane3);

plane1.avgSpeed=600;
plane2.avgSpeed=600;
plane3.avgSpeed=600;

console.log(plane1);
console.log(plane2);
console.log(plane3);
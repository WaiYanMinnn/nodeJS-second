const rect =require('./rectangle.js');
function solveRect(l,w){
    console.log(`The give rectangle with the value of ${l} length and ${w} width`);
    if(l<=0 || w<=0){
        console.log (`Rectangle dimenssions must be greater than zero, Recieved: ${l}, ${w}`);

    }else {
        console.log(`The area of rectangle is : ${rect.area(l,w)} \n The parameter of rectangle is : ${rect.parameter(l,w)}`);

    }
}
solveRect(1,2);
solveRect(2,3);
solveRect(0,1);
solveRect(1,0);

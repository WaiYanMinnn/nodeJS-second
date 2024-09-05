const rect =require('./rectangle.js');
function solveRect(l,w){
    console.log(`The give rectangle with the value of ${l} length and ${w} width`);
    rect(l,w,(err,rectangle)=>{
        if(err){
            console.log('Error:',err.message);
        }
        else{
            console.log(`The area of the rectangle is ${rectangle.area()}`);
            console.log(`The parimeter of the rectangle is ${rectangle.parimeter()}`);

        }

    });
    console.log('This statement is log after the call to rect()');
}
solveRect(1,2);
solveRect(2,3);
solveRect(0,1);
solveRect(1,0);

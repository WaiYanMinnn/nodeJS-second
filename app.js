const rect ={
    area :(x,y)=> x*y,
    parameter: (x,y) => 2*(x+y)
};
function rectangle(l,w){
    console.log(`The give rectangle with the value of ${l} length and ${w} width`);
    if(l<=0 || w<=0){
        console.log (`Rectangle dimenssions must be greater than zero, Recieved: ${l}, ${w}`);

    }else {
        console.log(`The area of rectangle is : ${rect.area(l,w)} \n The parameter of rectangle is : ${rect.parameter(l,w)}`);

    }
}
rectangle(1,2);
rectangle(2,3);
rectangle(0,1);
rectangle(1,0);

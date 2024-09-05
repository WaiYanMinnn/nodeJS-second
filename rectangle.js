module.exports=(x,y,callback)=>{
    if(x<=0 || y<=0){
        callback(new Error(`Rectangle dimenssions must be greater than zero, Recieved: ${x}, ${y}`));
    }else {
        setTimeout(()=>
            callback(null,{
                parimeter:()=> 2* (x+y),
                area :()=> x*y
            }),2000);
    }
};

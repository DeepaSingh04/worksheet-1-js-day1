//error debug

function createIncremenet(){
    let res = [];
    for (let i=0; i<3; i++){
        res.push(()=>i);
    }
    return res;
}
const increment = createIncremenet();
console.log(increment[0]());
console.log(increment[1]());
console.log(increment[2]());


//
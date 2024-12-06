//error debug code

const obj = {
    name: "Javascript",
    getName: function(){
         return this.name; }
    };
    console.log(obj.getName());

//output-based question
   
const objWithBind  = {
    name: "Javascript",
    getName: function() {
        return this.name;
    },
    boundGetName: function() {
        return this.getName.bind(this)();
    }
};
console.log(objWithbind.boundGetName());


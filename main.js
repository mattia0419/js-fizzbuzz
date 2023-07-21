const numRipetitions = 100;
const list = document.getElementById("mylist");
for(let i = 1; i <= numRipetitions; i++){
    
    
    if(i % 5 == 0 && i % 3 == 0){
        list.innerHTML += `FizzBuss `
    }
    else if(i % 5 == 0){
        list.innerHTML += `Fizz `
    }
    else if(i % 3 == 0){
        list.innerHTML += `Buss `
    }
    
    list.innerHTML += `${i + " "}`
}
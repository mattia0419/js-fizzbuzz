const numRipetitions = 100;
const list = document.getElementById("mylist");

for(let i = 1; i <= numRipetitions; i++){
    const div_list = document.createElement("div")
    list.append(div_list)
    
    if(i % 5 == 0 && i % 3 == 0){
        div_list.innerHTML += `FizzBuzz `;
        div_list.classList.add("box");
        div_list.classList.add("bg-fizzbuzz");
    }
    else if(i % 5 == 0){
        div_list.innerHTML += `Fizz `;
        div_list.classList.add("box");
        div_list.classList.add("bg-fizz");
    }
    else if(i % 3 == 0){
        div_list.innerHTML += `Buzz `;
        div_list.classList.add("box");
        div_list.classList.add("bg-buzz");
    }
    
    else {
        div_list.innerHTML += `${i + " "}`;
        div_list.classList.add("box");
        div_list.classList.add("bg-normal")
    }
    
    console.log(div_list);
    
}
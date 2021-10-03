/* function myStuff(x){
    let tins = function(y){
        return x * y;
    }

    return tins

};

let proof = myStuff(5);
console.log(proof(10));
let results = myStuff(20);
console.log(results(10));

function newStuff(z, quot){
    return quot(z);
}

let newResults = newStuff(3, proof);
console.log(newResults); */


/*  let obj = {value:10};
console.log(obj);

function increase(obj){
    obj.value++;

};
increase(obj);
console.log(obj);  */

document.querySelector("#push").onclick = function
(){
    if(document.querySelector('#newtask input').
    value.length == 0){
        alert('Please Enter a Task')
    }
    else {
        document.querySelector('#tasks').innerHTML 
        += `
            <div class="task">
                <span id='taskname'>
                    ${document.querySelector 
                    ('#newtask input').value}
                </span>
                <button class="delete">
                <i class="far fa-trash-alt"></i>
                </button> 
            </div>
                    

        `;
        

        let current_tasks = document.querySelectorAll(".delete");
        for (let i = 0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        let tasks = document.querySelectorAll(".task");
        for (let i = 0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        // Clearing the input field after each entry

        document.querySelector("#newtask input").value = "";
    }
}

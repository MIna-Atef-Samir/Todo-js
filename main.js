let tbody = document.querySelector("#tbody");
let input = document.querySelector("#input");
let priority = document.querySelector("#priority");
let add = document.querySelector("#add");

let i = 0;
add.addEventListener('click', (e)=>{
    let oneTodo= document.createElement("tr")
    if(input.value && priority.value){

        oneTodo.innerHTML = `
        <td>${i+1}</td>
        <td>${input.value}</td>
        <td>${priority.value}</td>
        <td><div class = "btn btn-danger m-2" id="deletee">Delete</div>
        <div class = "btn btn-info m-2" id="done">Done</div></td>`
        tbody.append(oneTodo)
        i++
    }else{
        alert('Please add your Todo First and select the priority')
    }
    let deletee = oneTodo.querySelector("#deletee");
    let done = oneTodo.querySelector("#done");
    deletee.addEventListener("click", (e)=>{
        oneTodo.remove()
        console.log(e.target);
    });
    done.addEventListener("click", (f)=>{
        oneTodo.style.textDecoration="line-through"
        console.log(f.target.parentElement.parentElement);

    })
    input.value = ""
    priority.value = ""
})
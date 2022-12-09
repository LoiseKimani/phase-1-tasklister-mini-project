document.addEventListener("DOMContentLoaded", () => {
  
  let form = document.querySelector("form")
  form.addEventListener("submit", (event)=>{
      event.preventDefault()
      handleToDo(event.target.newTaskDescription.value)
      form.reset()
  } )
});

function handleToDo(todo){
 
  
 let li = document.createElement("li")
 

  document.getElementById("tasks").appendChild(li)
 
 
 btn.textContent= "Do it."

 btn.addEventListener("click", handleDelete)
 
 li.textContent = `${todo}`
 
 li.appendChild(buton)
  let btn = document.createElement("button") 

}

 function handleDelete(event){
  event.target.parentNode.remove()
 }
;

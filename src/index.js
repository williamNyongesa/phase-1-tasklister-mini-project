document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let input = document.getElementById("new-task-description");
    let list = document.getElementById("tasks");
    let listElements = document.createElement("li");
    listElements.innerText = input.value;

    // let deleteButton = document.createElement("button");
    // deleteButton.innerText = "Delete";
    // deleteButton.addEventListener("click", function () {
    //   list.removeChild(listElements);
    // });

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "DELETE"
    deleteButton.addEventListener("click",function(event){
      event.preventDefault();
      
      list.removeChild(listElements);
    })



    listElements.appendChild(deleteButton); // Add the delete button to the task item
    list.appendChild(listElements);
    input.value = ""; // Clear the input field after adding the task
  });
});

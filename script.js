let id = 1;

const addUser = () => {
  const messageDiv = document.getElementById("add-employee-message");
  messageDiv.innerHTML = "";
  const name = document.getElementById("name").value;
  const profession = document.getElementById("profession").value;
  const age = document.getElementById("age").value;
  if (!(name && profession && age)) {
    messageDiv.innerText =
      "Error : Please Make sure All the fields are filled before adding in an employee !";
    messageDiv.style.color = "#FF4343";
  } else {
    const employeesList = document.getElementById("employees-list");
    employeesList.innerHTML += `
        <div class="employee">
        <div class="details">
        <span>${id}.</span>
        <span>Name: ${name}</span>
        <span>Profession: ${profession}</span>
        <span>Age: ${age}</span>
        </div>
            <button onclick="deleteUser(event)">Delete user</button>
        </div>
    `;
    messageDiv.innerText = `Success : Employee Added!`;
    messageDiv.style.color = "#43FF78";
    id++;
  }
};

const deleteUser = (event) => {
    event.target.parentNode.remove();
}



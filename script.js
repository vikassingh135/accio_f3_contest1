let id = 1;

const users = [
  
];

const displayUsers = () => {
  const employeesList = document.getElementById("employees-list");
  employeesList.innerHTML = "";

  users.forEach((user, index) => {
    employeesList.innerHTML += `
        <div class="employee">
        <div class="details">
        <span>${user.id}.</span>
        <span>Name: ${user.name}</span>
        <span>Profession: ${user.profession}</span>
        <span>Age: ${user.age}</span>
        </div>
            <button onclick="deleteUser(${index})">Delete user</button>
        </div>
    `;
  });
};

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
    users.push({
      id: id,
      name: name,
      profession: profession,
      age: age,
    });
    displayUsers();
    messageDiv.innerText = `Success : Employee Added!`;
    messageDiv.style.color = "#43FF78";
    id++;
  }
};

const deleteUser = (index) => {
  users.splice(index, 1);
  displayUsers();
};


displayUsers();
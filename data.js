let users = [];

fetch('data.json')
  .then((res) => res.json())
  .then((data) => {
    users = data;
    displayuser();
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });

function displayuser() {
  const list = document.getElementById("userlist");
  list.innerHTML = "";

  users.forEach((user) => {
    let li = document.createElement("li");
    li.textContent = user.name;
    list.appendChild(li);
  });
}

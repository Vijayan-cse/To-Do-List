function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === "") {
      alert("Please enter a task!");
      return;
    }
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);
    document.getElementById("taskInput").value = "";
    var deleteBtn = document.createElement("span");
    deleteBtn.classList.add("delete");
    deleteBtn.innerHTML = " &#10060;";
    deleteBtn.onclick = function() {
      ul.removeChild(li);
    };
    li.appendChild(deleteBtn);
  }
  
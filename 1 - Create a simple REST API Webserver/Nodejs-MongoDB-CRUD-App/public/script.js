const apiUrl = "/api/v1/students";

// Fetch and display students
async function fetchStudents() {
  const response = await fetch(apiUrl);
  const students = await response.json();
  const tbody = document.querySelector("#students-table tbody");
  tbody.innerHTML = "";

  students.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.className}</td>
      <td>${student.age}</td>
      <td>
        <button onclick="editStudent('${student._id}')">Edit</button>
        <button onclick="deleteStudent('${student._id}')">Delete</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// Add or update student
async function saveStudent(event) {
  event.preventDefault();

  const id = document.querySelector("#student-id").value;
  const name = document.querySelector("#name").value;
  const className = document.querySelector("#className").value;
  const age = document.querySelector("#age").value;

  // Determine if it's a POST (add) or PUT (update)
  const method = id ? "PUT" : "POST";
  const url = id ? `${apiUrl}/${id}` : apiUrl;

  // Send the request
  const response = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, className, age }),
  });

  if (response.ok) {
    document.querySelector("#student-form").reset();
    document.querySelector("#student-id").value = ""; // Clear hidden id field
    fetchStudents(); // Refresh the table
  } else {
    const error = await response.json();
    alert(`Error: ${error.message}`);
  }
}

// Populate form for editing
async function editStudent(id) {
  const response = await fetch(`${apiUrl}/${id}`);
  const student = await response.json();

  // Populate the form fields
  document.querySelector("#student-id").value = student._id;
  document.querySelector("#name").value = student.name;
  document.querySelector("#className").value = student.className;
  document.querySelector("#age").value = student.age;
}

// Delete student
async function deleteStudent(id) {
  const response = await fetch(`${apiUrl}/${id}`, { method: "DELETE" });

  if (response.ok) {
    fetchStudents(); // Refresh the table
  } else {
    const error = await response.json();
    alert(`Error: ${error.message}`);
  }
}

// Attach event listener to the form
document.querySelector("#student-form").addEventListener("submit", saveStudent);

// Initial fetch of students
fetchStudents();

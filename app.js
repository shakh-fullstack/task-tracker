const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const div = document.getElementById("result");
const clearAllBtn = document.getElementById("clearAllBtn");
const count = document.getElementById("count");
const changeDisplayMode = document.querySelector("#modeBtn");

let taskCount = 0;

const colors = [
  "#ff4757",
  "#2ed573",
  "#1e90ff",
  "#ffa502",
  "#9b59b6",
  "#e84393",
];
function changeCountColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  count.style.color = randomColor;
}

function wholeSettings() {
  const inputValue = input.value;
  if (inputValue.trim() === "") {
    input.style.border = "2px solid red";
    return;
  }
  input.style.border = "";
  taskCount++;
  count.textContent = taskCount;
  changeCountColor();
  const p = document.createElement("p");
  p.textContent = inputValue;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Clear";
  deleteBtn.style.borderRadius = "5px";
  deleteBtn.addEventListener("click", () => {
    p.remove();
    taskCount--;
    count.textContent = taskCount;
    changeCountColor();
  });
  div.prepend(p);
  p.prepend(deleteBtn);
  input.value = "";
}

addBtn.addEventListener("click", () => {
  wholeSettings();
});

clearAllBtn.addEventListener("click", () => {
  clearAllBtn.disabled = true;
  clearAllBtn.textContent = "Deleting...";
  setTimeout(() => {
    div.innerHTML = "";
    taskCount = 0;
    count.textContent = taskCount;
    changeCountColor();
  }, 1500);

  setTimeout(() => {
    clearAllBtn.disabled = false;
    clearAllBtn.textContent = "Clear All";
  }, 2000);
});
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    wholeSettings();
  }
});

changeDisplayMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    changeDisplayMode.textContent = "☀️ Light mode";
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
  }
});

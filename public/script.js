const sunsetBtn = document.querySelector('.sunset-btn')

sunsetBtn.addEventListener('click', sunsetPath)

function sunsetPath() {
  console.log(1)
  location.href = "http://localhost:3000/sunsets";
}

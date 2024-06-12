function toggleContent(id) {
  var content = document.getElementById("Content-" + id);
  if (content.style.display === "none") {
    content.style.display = "block"; // Show the content
  } else {
    content.style.display = "none"; // Hide the content
  }
}

document.getElementById("Title-1").addEventListener("click", function () {
  toggleContent(1);
});

document.getElementById("Title-2").addEventListener("click", function () {
  toggleContent(2);
});

document.getElementById("Title-3").addEventListener("click", function () {
  toggleContent(3);
});

document.getElementById("Title-4").addEventListener("click", function () {
  toggleContent(4);
});

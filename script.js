function revealMessage() {
  document.getElementById("messageBox").style.display = "block";
}

function showSecret() {
  document.getElementById("secretText").innerText =
    "I choose you. Not just today, but in the plans I’m working towards.";
}

function openPhoto(img) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modalImg").src = img.src;
}

function closePhoto() {
  document.getElementById("modal").style.display = "none";
}

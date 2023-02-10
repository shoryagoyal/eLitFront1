const testLoginForm = document.querySelector("#testLoginForm");
const testLoginForm_button = document.querySelector("#testLoginForm_button");
console.log("hy");

testLoginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/test/login", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onload = function () {
    // testLoginForm.style.display = "none";
    // Grab elements, create settings, etc.
    var video = document.getElementById("video");

    // Get access to the camera!
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Not adding `{ audio: true }` since we only want video now
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
          video.src = window.URL.createObjectURL(stream);
          video.play();
        });
    }
  };
  xhr.send(
    JSON.stringify({
      name: "a",
      email: "a@a",
      testId: "a",
    })
  );
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("whisperForm");
  const input = document.getElementById("whisperInput");
  const confirmation = document.getElementById("confirmation");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const text = input.value.trim();
    if (text === "") return;

    fetch("/write", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "whisper=" + encodeURIComponent(text)
    })
    .then(response => response.text())
    .then(data => {
      confirmation.innerText = data;
      input.value = "";
    })
    .catch(() => {
      confirmation.innerText = "Something went wrong. Yèt couldn’t hear...";
    });
  });
});
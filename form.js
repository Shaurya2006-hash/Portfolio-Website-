
const form = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();


  if (name === "" || email === "" || message === "") {
    statusText.textContent = "❌ Please fill all the fields.";
    statusText.style.color = "#ff6b6b";
    return;
  }

  statusText.textContent = "✅ Message sent successfully!";
  statusText.style.color = "#00ffcc";
  let count = localStorage.getItem("contactCount");
  count = count ? Number(count) + 1 : 1;
  localStorage.setItem("contactCount", count);

  console.log("Total form submissions:", count);

  form.reset();
});


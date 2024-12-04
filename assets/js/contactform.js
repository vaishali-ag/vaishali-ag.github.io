
  document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    try {
      // Replace YOUR_WEB_APP_URL with the Web App URL from Apps Script
      const response = await fetch("https://script.google.com/macros/s/AKfycbx6xoRVsNbC_a7fPkT_3xZ481VQq9tC4xbqQECFgtV7X-AM0Z3s6STfQlHIV8L77po/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Form data saved to Google Sheet!");
        document.getElementById("contactForm").reset();
      } else {
        alert("Failed to save data.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred.");
    }
  });

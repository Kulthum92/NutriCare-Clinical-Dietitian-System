
const form = document.getElementById("appointmentForm");
const response = document.getElementById("response");

const API_URL = "https://nutricare-clinical-dietitian-system.onrender.com";

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const appointment = {
        name: form.elements["name"].value,
        email: form.elements["email"].value,
        date: form.elements["date"].value,
        service: form.elements["service"].value,
        message: form.elements["message"].value
    };

    response.textContent = "Submitting your appointment...";
    response.style.color = "blue";

    try {
        const result = await fetch(`${API_URL}/api/appointments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(appointment)
        });

        const data = await result.json();

        if (!result.ok) {
            throw new Error(data.message || "Failed to submit appointment.");
        }

        response.textContent = data.message;
        response.style.color = "green";

        form.reset();

    } catch (error) {
        response.textContent = "Error: " + error.message;
        response.style.color = "red";
    }
});

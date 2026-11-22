const form = document.getElementById("appointmentForm");
const response = document.getElementById("response");

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const appointment = {
        name: form.elements["name"].value,
        email: form.elements["email"].value,
        date: form.elements["date"].value,
        service: form.elements["service"].value,
        message: form.elements["message"].value
    };

    try {
        const result = await fetch("/api/appointments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(appointment)
        });

        const data = await result.json();

        if (!result.ok) {
            throw new Error(data.message);
        }

        response.textContent = data.message;
        response.style.color = "green";
        form.reset();

    } catch (error) {
        response.textContent = "Error: " + error.message;
        response.style.color = "red";
    }
});
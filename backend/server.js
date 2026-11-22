const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

const root = path.join(__dirname, "..");
const dataFile = path.join(__dirname, "appointments.json");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend files
app.use(express.static(root));

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(root, "index.html"));
});

// Get appointment requests
app.get("/api/appointments", (req, res) => {
    const appointments = fs.existsSync(dataFile)
        ? JSON.parse(fs.readFileSync(dataFile, "utf8"))
        : [];

    res.json(appointments);
});

// Save appointment
app.post("/api/appointments", (req, res) => {
    const { name, email, date, service, message } = req.body;

    if (!name || !email || !date || !service) {
        return res.status(400).json({
            message: "Please fill all required fields."
        });
    }

    const appointments = fs.existsSync(dataFile)
        ? JSON.parse(fs.readFileSync(dataFile, "utf8"))
        : [];

    const appointment = {
        id: Date.now(),
        name,
        email,
        date,
        service,
        message: message || ""
    };

    appointments.push(appointment);

    fs.writeFileSync(
        dataFile,
        JSON.stringify(appointments, null, 2)
    );

    res.status(201).json({
        message: "Appointment submitted successfully!"
    });
});

app.listen(PORT, () => {
    console.log(`NutriCare server running at http://localhost:${PORT}`);
});
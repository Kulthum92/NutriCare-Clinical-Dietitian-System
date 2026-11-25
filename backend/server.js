
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

const root = path.join(__dirname, "..");
const dataFile = path.join(__dirname, "appointments.json");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allow requests from the deployed frontend
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.sendStatus(204);
    }

    next();
});

// Serve frontend files
app.use(express.static(root));

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(root, "index.html"));
});

// Get all appointments
app.get("/api/appointments", (req, res) => {
    try {
        const appointments = fs.existsSync(dataFile)
            ? JSON.parse(fs.readFileSync(dataFile, "utf8"))
            : [];

        res.json(appointments);
    } catch (error) {
        res.status(500).json({
            message: "Unable to retrieve appointments."
        });
    }
});

// Save a new appointment
app.post("/api/appointments", (req, res) => {
    try {
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
            message: "Appointment submitted successfully!",
            appointment
        });
    } catch (error) {
        res.status(500).json({
            message: "Unable to save appointment."
        });
    }
});

// Health check
app.get("/health", (req, res) => {
    res.json({
        status: "OK",
        message: "NutriCare backend is running."
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`NutriCare server running on port ${PORT}`);
});

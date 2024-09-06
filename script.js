const express = require('express');
const app = express();
const port = 3000;

// Simulated bus location data
const busLocations = {
    "bus_123": {latitude: 28.6139, longitude: 77.2090},
    "bus_124": {latitude: 28.7041, longitude: 77.1025}
};

app.get('/location/:busId', (req, res) => {
    const busId = req.params.busId;
    if (busLocations[busId]) {
        res.json(busLocations[busId]);
    } else {
        res.status(404).json({error: "Bus not found"});
    }
});

app.listen(port, () => {
    console.log(`Bus tracking app listening on port ${port}`);
});

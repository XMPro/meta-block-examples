const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname , 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'test-harness.html'));
});

app.use((req,res) => {
    res.status(404);
    res.send(`<h1>Error 404: Resource not found</h1>`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

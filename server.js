const express = require('express');
const app = express();

// Hint: Code to support multipart/form-data goes here

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', message: "Yello"},
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', message: "Hola"}
];

// Your code goes here.


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
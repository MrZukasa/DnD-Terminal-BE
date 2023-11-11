const { default: axios } = require("axios");
const express = require("express");
const app = express();
const port = 3000;

app.get("/test", async (req, res) => {
    try {
        const response = await axios.get('https://www.dnd5eapi.co/api/')
        res.json(response.data)
    }
    catch (err) {
        console.log(err)
    }
})

// App listens to incoming requests here
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
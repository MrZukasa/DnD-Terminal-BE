import { default as axios } from "axios";
import { default as express, response } from "express";
import cors from 'cors';

const app = express();
app.use(cors());

// Level 0 API
app.get("/main", async (req, res) => {
    const response = await axios.get('https://www.dnd5eapi.co/api/')
    res.json(response.data)
})

// First Level API
app.get("/main/:category/", async (req, res) => {
    res.setTimeout(3000, async () => {
        const category = req.params.category;
        try {
            const response = await axios.get(`https://www.dnd5eapi.co/api/${category}`)
            res.json(response.json)
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' })
        }
        return
    })
})

// Second Level API
app.get("/main/:category/:subcategory", async (req, res) => {
    res.setTimeout(3000, async () => {
        const category = req.params.category;
        const subcategory = req.params.subcategory;
        try {
            const response = await axios.get(`https://www.dnd5eapi.co/api/${category}/${subcategory}`)
            res.json(response.data)
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' })
        }
        return
    })
})

app.listen(3000);
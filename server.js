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
    res.setTimeout(1000, () => {
        const category = req.params.category;
        axios.get(`https://www.dnd5eapi.co/api/${category}`)
            .then(response => res.json(response.data))
            .catch(() => res.json(response.data))
        return
    })
})

// Second Level API
app.get("/main/:category/:subcategory", async (req, res) => {
    res.setTimeout(1000, () => {
        const category = req.params.category;
        const subcategory = req.params.subcategory;
        if (subcategory) {
            axios.get(`https://www.dnd5eapi.co/api/${category}/${subcategory}`)
                .then(response => {
                    res.json(response.data)
                }).catch(() => res.json(response.data))
        }
        else
            axios.get(`https://www.dnd5eapi.co/api/${category}`)
        return res.json(response.data)
    })
})

app.listen(3000);
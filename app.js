const express = require("express");
const app = express();
const port = 3001;
const recipesRouters = require("./routers/posts");

app.use(express.static("public"));
app.use("/foods", recipesRouters);


app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(port, () => {
    console.log('server partito');
});
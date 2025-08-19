import express from "express"
import path from "path"
let app = express()
app.use(express.static(path.resolve("./public")))
app.listen(1234)
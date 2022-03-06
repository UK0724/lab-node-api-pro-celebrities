const express = require('express')
const app = express()
require('dotenv').config()
app.use(express.json())
const cors = require('cors')
app.use(cors({origin:'*'}));
const connectDB = require('./Config/db')
const { errorhadler } = require('./Middlewares/errorhandler')
connectDB()
app.use('/api/celabrity',require('./Routes/celabrityRoutes'))

app.use(errorhadler)
app.listen(5000,() => console.log(`server is runnning succesfully`))

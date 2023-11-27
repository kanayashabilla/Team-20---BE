import express from "express";
import db from "./config/database.js";
import userRoute from "./routes/userRoute.js";

const app = express();
const port = 3000;

app.use(express.json());

//Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use(userRoute);


//create connection
db.sync({alter: true})
.then(() => {console.log('Database connected')

//server port
app.listen(port, () => {
  console.log(`server is running on port ${port}`)
});

})
.catch(err => {
    console.log(`unable to connect db: ${err}`);
});

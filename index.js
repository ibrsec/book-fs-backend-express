

require('dotenv').config();
require('express-async-errors');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();
app.use(cors());
app.use(express.json());
const {syncBook} = require('./app/models/bookModels.js');
const sequelize = require('./app/config/db.js');

const dbConnect = async()=>{
    await syncBook();
    sequelize.authenticate()
    .then(()=>console.log('** DB Connect **'))
    .catch(()=>console.log('** DB NOT CONNECT **'));

}
dbConnect();


app.use('/api/book',require('./app/router/bookRouter.js'))



app.use(require('./app/middlewares/errorHandle.js'))
app.listen(PORT,()=>console.log('Server is running on : ' + PORT));
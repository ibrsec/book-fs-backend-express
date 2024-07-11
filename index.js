

require('dotenv').config();
require('express-async-errors');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow any origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow specific methods
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // Allow specific headers
    next();
  });

  

  
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
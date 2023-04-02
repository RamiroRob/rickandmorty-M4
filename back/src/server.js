const express = require('express');
const app = express();
const router = require('./routes');
const morgan = require('morgan');
const cors = require('cors');
const { conn } = require('./DB_connection');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/rickandmorty', router);


conn.sync({ force: true }).then(() => {
    app.listen(3001, () => {
        console.log('Server levantado en port 3001')
    });
})



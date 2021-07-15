const express = require('express');
const config = require('config');
const app = express();
const mongoose = require('mongoose');  

const PORT = config.get('port') || 5000

async function start() {
    try {
       await mongoose.connect(config.get('mongoUri'), {
           // Following 3 properties helps to good connection MongoDB //
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
       })
       app.listen(5000, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()


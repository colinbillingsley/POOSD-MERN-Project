const mongoose = require('mongoose');

mongoose.connect('your-mongo-uri', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.set('strictQuery', false); // Add this line to avoid warning
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conectado a Mongodb correctamente');
  }catch (error) {
    console.error('Error de conexión a Mongodb:', error);
    process.exit(1);
  }
};

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose;
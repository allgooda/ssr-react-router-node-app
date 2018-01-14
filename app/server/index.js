import app from './app';
import mongoose from 'mongoose'

const port = process.env.PORT || 8080;
const dbUri = 'mongodb://localhost/furniture';

mongoose.connect(dbUri);
mongoose.connection
  .once('open', () => console.log('DB CONNECTED'))
  .on('error', (error) => {
    console.warn('Warning', error);
  });

app.listen(port);
console.log(`Listening at http://localhost:${port}`);

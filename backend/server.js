import express from 'express';
import  mongoose  from 'mongoose';
import productRouter from './Routes/productroute.js';
import userroutes from './Routes/userroutes.js';
import dotenv from 'dotenv';
import path from "path"
import orderRouter from './Routes/orderRoutes.js';
import uploadRouter from './Routes/uplodRoute.js';
dotenv.config();

const app = express();
 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
});
// 
app.use('/api/uploads', uploadRouter);

app.use('/api/users', userroutes);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID||'sb');
});
app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

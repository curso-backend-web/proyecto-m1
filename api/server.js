import app from './app.js';
 


const PORT = process.env.PORT;   //4000;

app.listen(PORT, _=> console.log(`All good in port ${PORT}`));
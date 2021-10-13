import app from './app.js';

// localhost 4000

const PORT = process.env.PORT;  

app.listen(PORT, ()=> console.log(`All good in port ${PORT}`));
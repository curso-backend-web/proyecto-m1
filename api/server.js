import app from './app.js';

// const PORT = 3000;

app.listen(process.env.PORT || 3000, () => console.log(`listening on ${process.env.PORT}`));
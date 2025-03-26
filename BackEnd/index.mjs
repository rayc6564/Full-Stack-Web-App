import express from 'express';
import usersRouter from './user.mjs';

const app = express();
app.use(express.json());

app.use('/users', usersRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
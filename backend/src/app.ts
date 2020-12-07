import express from 'express';
import usersRouter from './routes/users';
import todosRouter from './routes/todos';

const app = express();

app.use('/users', usersRouter);
app.use('/todos', todosRouter);

export default app;

import express from 'express';

const router = express.Router();

router.route('/').get((req, res) => {
  res.json('Todos base route');
});

export default router;

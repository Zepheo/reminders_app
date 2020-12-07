import express from 'express';

const router = express.Router();

router.route('/').get((req, res) => {
  res.json('Users base route');
});

export default router;

import express from 'express';

const router = express.Router();

// rtas
router.get('/status', (req, res) => {
  res.status(200).json({ message: 'API is working fine!!' });
});

router.post('/data', (req, res) => {
  const data = req.body;
  res.status(201).json({ message: 'Data received successfully!!', data });
});

router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  res.status(200).json({ message: `Data with id ${id} updated!!`, updatedData });
});

router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Data with id ${id} deleted!!` });
});

export default router;

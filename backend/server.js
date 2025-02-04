const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample in-memory data for the API
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];

// GET / - Basic route to check if server is working
app.get('/', (req, res) => {
  res.send('Hello, DevOps World!');
});

// GET /api/items - Get all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// GET /api/items/:id - Get a specific item by ID
app.get('/api/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');
  res.json(item);
});

// POST /api/items - Create a new item
app.post('/api/items', (req, res) => {
  const item = {
    id: items.length + 1,
    name: req.body.name,
  };
  items.push(item);
  res.status(201).json(item);
});

// PUT /api/items/:id - Update an existing item by ID
app.put('/api/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');

  item.name = req.body.name;
  res.json(item);
});

// DELETE /api/items/:id - Delete an item by ID
app.delete('/api/items/:id', (req, res) => {
  const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
  if (itemIndex === -1) return res.status(404).send('Item not found');

  items.splice(itemIndex, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});

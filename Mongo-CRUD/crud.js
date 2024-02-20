const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const uuid = require('uuid');
const app = express();

app.use(express.json());

//vraqCNxMDPDJCWjf
// dbLocal

// Connect to MongoDB
mongoose.connect('mongodb+srv://dbLocal:vraqCNxMDPDJCWjf@ghost.m1gqrmu.mongodb.net/dbauth?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define a schema and model using Mongoose
const Schema = mongoose.Schema;
const userSchema = new Schema({
  _id: {
    type: String,
    default: uuid.v4
  },
  name: String,
  email: String
});

const Item = mongoose.model('users', userSchema);

app.use(express.static(path.join(__dirname + '/public')))

// Create an item
app.post('/items', async (req, res) => {
    console.log('Request')
  try {
    const newItem = new Item(req.body);
    
    const result = await newItem.save();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read all items
app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read an item by ID
app.get('/items/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an item by ID
app.put('/items/:id', async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an item by ID
app.delete('/items/:id', async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(deletedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

async function getAllItems() {
  const response = await fetch('/items');
  const items = await response.json();

  const itemList = document.getElementById('itemList');
  itemList.innerHTML = '<h2>Items:</h2>';

  if (items.length === 0) {
    itemList.innerHTML += '<p>No items found.</p>';
  } else {
    items.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.innerText = `ID: ${item._id}, Name: ${item.name}, Email: ${item.email}`;
      itemList.appendChild(itemDiv);
    });
  }
}


const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

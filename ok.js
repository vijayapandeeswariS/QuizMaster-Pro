const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/login')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a Mongoose schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },

});

const User = mongoose.model('userdetails', userSchema);

// Route to fetch and display data
app.get('/', async (req, res) => {
  try {
    const users = await User.find();
    // Create HTML to display users
    let a = `
      
      <body>
          <h1>User Data</h1>
          <table border="1">
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Email</th>
                  </tr>
              </thead>
              <tbody>`;
    
    users.forEach(user => {
      a += `
        <tr>
          <td>${user.name}</td>
          <td>${user.email}</td>
          </tr>`;
    });

    a += `
              </tbody>
          </table>
      </body>
      </html>`;
    
    res.send(a);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(2000)

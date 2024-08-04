const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (err) {
        process.exit(1);
    }
};
connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// tools/createAdmin.js (run this only once)
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import Admin from '../src/models/admin.js';

dotenv.config();
await mongoose.connect(process.env.MONGODB_URL);

const createAdmin = async () => {
  const email = 'admin@example.com';
  const password = 'Admin@123'; // choose strong password

  const hashedPassword = await bcrypt.hash(password, 10);

  const existing = await Admin.findOne({ email });
  if (existing) {
    console.log('Admin already exists');
  } else {
    await Admin.create({ email, password: hashedPassword });
    console.log('Admin created');
  }

  process.exit();
};

createAdmin();
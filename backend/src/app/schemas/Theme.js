import mongoose from 'mongoose';

const ThemeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Theme', ThemeSchema);

/*
id
nome
*/

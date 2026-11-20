import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const cached = global as typeof global & {
  mongoose?: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
};

if (!cached.mongoose) {
  cached.mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
  if (cached.mongoose && cached.mongoose.conn) return cached.mongoose.conn;

  if (!cached.mongoose || !cached.mongoose.promise) {
    const opts = { bufferCommands: false };
    const mongooseCache = cached.mongoose;
    mongooseCache!.promise = mongoose.connect(MONGODB_URI!, opts);
  }
  
  try {
    const mongooseCache = cached.mongoose!;
    mongooseCache.conn = await mongooseCache.promise!;
  } catch (e) {
    cached.mongoose!.promise = null;
    throw e;
  }

  return cached.mongoose!.conn;
}
// import mongoose from "mongoose";

// const MONGODB_URL = process.env.MONGODB_URL;

// if (!MONGODB_URL) {
//   throw new Error(
//     "Please define the MONGODB_URI environment variable inside .env.local"
//   );
// }

// let cached  = global.mongoose;

// if (!cached) {
//   cached  = global.mongoose = { con: null, promise: null };
// }

// const conntectDB = async () => {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   // If a connection does not exist, we check if a promise is already in progress. If a promise is already in progress, we wait for it to resolve to get the connection
//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
//       return mongoose;
//     });
//   }

//   try {
//     cached.conn = await cached.promise;
//     console.log("database connected")
//   } catch (e) {
//     cached.promise = null;
//     throw e;
//   }
//   return cached.conn;
// };

// export default conntectDB;

// export default dbConnect;

import mongoose from "mongoose";

const uri: any = process.env.MONGODB_URL;

const conntectDB = async () => {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.log("error while connection with database", error);
  }
};

export default conntectDB;

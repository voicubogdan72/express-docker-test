import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
// import { User } from "./entity/user.entity";
import { myDataSource } from "./app-data-source";
import mongoose from "mongoose";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 7777;

app.get("/", async (req: Request, res: Response) => {
  res.send("Without db");
  // mongoose
  //   .connect("mongodb://localhost:27017/example", {})
  //   .then(() => {
  //     console.log("Connected to MongoDB");
  //     res.send("Ok connected!");
  //   })
  //   .catch((error) => {
  //     console.error("Error connecting to MongoDB", error);
  //   });
  // try {
  //   const db = await mongoose.connect("mongodb://localhost:27017/example");
  //   if (db) {
  //     console.log(db);
  //     res.send("Ok2!!!!");
  //   } else {
  //     res.send("No db");
  //   }
  // } catch (error) {
  //   res.send({ msg: error });
  // }
  //   try {
  //     await myDataSource
  //       .initialize()
  //       .then(() => {
  //         console.log("Conected to db!!");
  //         res.send(`DB::!!! CONECTED `);
  //       })
  //       .catch((err) => {
  //         console.error("Error tot connect", err);
  //       });
  //   } catch (error) {
  //     console.error(error);
  //   }
});

app.get("/db", async (req: Request, res: Response) => {
  //   try {
  //     await myDataSource
  //       .initialize()
  //       .then(() => {
  //         console.log("Conected to db!!");
  //         res.send(`DB::!!! CONECTED `);
  //       })
  //       .catch((err) => {
  //         res.send("NO DB");
  //         console.error("Error tot connect", err);
  //       });
  //   } catch (error) {
  //     console.error(error);
  //   }
  res.send("OKKK!!!");
});

app.get("/test", (req: Request, res: Response) => {
  res.send("Test page");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
// import { User } from "./entity/user.entity";
import { myDataSource } from "./app-data-source";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 7777;

app.get("/", async (req: Request, res: Response) => {
  try {
    await myDataSource
      .initialize()
      .then(() => {
        console.log("Conected to db!!");
        res.send(`DB::!!! CONECTED `);
      })
      .catch((err) => {
        console.error("Error tot connect", err);
      });
  } catch (error) {
    console.error(error);
  }
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

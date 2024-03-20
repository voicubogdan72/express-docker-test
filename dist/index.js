"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// import { User } from "./entity/user.entity";
const app_data_source_1 = require("./app-data-source");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 7777;
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.get("/db", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield app_data_source_1.myDataSource
            .initialize()
            .then(() => {
            console.log("Conected to db!!");
            res.send(`DB::!!! CONECTED `);
        })
            .catch((err) => {
            console.error("Error tot connect", err);
        });
    }
    catch (error) {
        console.error(error);
    }
}));
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

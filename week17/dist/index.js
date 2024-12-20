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
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgClient = new pg_1.Client("postgresql://neondb_owner:AgOjZ17whIdn@ep-autumn-paper-a5ulbmf6.us-east-2.aws.neon.tech/neondb?sslmode=require");
pgClient.connect();
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    try {
        const insertQuery = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`;
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const response = yield pgClient.query(insertQuery, [
            name,
            email,
            hashedPassword,
        ]);
        res.status(201).json({ message: "signup successful" });
    }
    catch (error) {
        console.log(error);
    }
}));
app.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const result = yield pgClient.query(`SELECT * FROM users WHERE email = $1`, [email]);
        const user = result.rows[0];
        const hashedPassword = yield bcryptjs_1.default.compare(password, user.password);
        if (!hashedPassword) {
            return res.json("Invalid password");
        }
        res.status(201).json({
            message: "signin successful",
        });
    }
    catch (error) {
        console.log(error);
    }
}));
app.listen(3000, () => {
    console.log("App is listen on port 3000");
});

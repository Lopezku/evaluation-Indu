"use strict";
/** Express router providing user related routes
 * @module routers/users
 * @import express
 */
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import sanitizer from "sanitizer";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const port = 8070;
const host = "127.0.0.1";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
/**
 * Middlewares Public et Favicon
 */
app.use(express.static(path.join(dirname, "public")));
app.use(
  "/favicon.ico",
  express.static(path.join(dirname, "public", "images", "favicon.png"))
);
/**
 * @memberof /
 * @name /
 */
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(dirname) }, (err) => {
    if (err) throw new Error(err);
  });
});
/**
 * Route comment form.
 * @name post/comment
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
app.post("/comment", (req, res) => {
  const comment = req.body.message;
  const commentDef = sanitizer.sanitize(comment);
  if (commentDef !== `""`) {
    res.status(200).send(commentDef);
  } else {
    const commentWrong = comment.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    res
      .status(401)
      .send(
        `<h1>Script non autorisé</h1><p>Votre message :${commentWrong}</p>`
      );
  }
});

app.listen(port, host, () => {
  console.info(`Server started @ http://${host}:${port}.`);
});

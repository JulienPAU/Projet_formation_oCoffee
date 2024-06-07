const express = require("express");
require("dotenv").config();
const app = express();
const expressSession = require("express-session");

const router = require("./app/router");

app.set("view engine", "ejs");
app.set("views", "app/views");

const PORT = process.env.PORT || 3000;

app.use(express.static("./integrations"));

app.use(express.urlencoded({ extended: true }));

app.use(
  expressSession({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60, // ça fait une heure
    },
  })
);

// app.use((req, res, next) => {
//   console.log(req.body);
//   next();
// });
app.use(router);

app.use((req, res) => {
  console.error("404", req.path);
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

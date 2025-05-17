const { Router } = require("express");

const indexRouter = Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    messages: messages,
  });
});

indexRouter.get("/new", (req, res) => {
  res.render("form", {
    title: "Create a Message",
  });
});

indexRouter.post("/new", (req, res) => {
  const { user, text } = req.body;
  messages.push({
    text,
    user,
    added: new Date(),
  });
  res.redirect("/");
});

indexRouter.get("/message/:id", (req, res) => {
  const id = Number(req.params.id);
  res.render("message", {
    title: `Message #${id}`,
    message: messages[id],
  });
});

module.exports = indexRouter;

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let messages = [];

app.get("/api/messages", (req, res) => {
  res.json(messages);
});

app.post("/api/messages", (req, res) => {
  const { content, author } = req.body;

  const mewMsg = {
    id: Date.now().toString(),
    content,
    author,
  };

  messages.push(newMsg);
  res.status(201).json(newMsg);
});

// PUT(更新)
app.put("/api/messages/:id", (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  const msgIndex = messages.findIndex((msg) => msg.id === id);

  if (msgIndex === -1) {
    return res.status(404).json({ error: "找不到" });
  }

  messages[msgIndex] = {
    ...messages[msgIndex],
    content
  }

  res.status(200).json(messages[msgIndex])
});

// DELETE
app.delete("/api/messages/:id", (req, res) => {
  const { id } = req.params;
  const msgIndex = messages.findIndex((msg) => msg.id === id);

  if (msgIndex === -1) {
    return res.status(404).json({ error: "找不到" });
  }

  messages = messages.filter((msg) => msg.id !== id)
  res.status(204).json({ message: "成功刪除" })
});

app.listen(port, () => {
  console.log(`伺服器運行在 http://localhost:${port}`);
});

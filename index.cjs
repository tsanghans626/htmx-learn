const express = require("express");
var path = require("node:path");
var app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/blog", (req, res) => {
  res.send("Blog");
});

app.post("/clicked", (req, res) => {
  console.log("clicked from htmx");
  res.send("Blog");
});

app.put("/messages", (req, res) => {
  console.log("put messages from htmx");
  res.send("Put To Messages");
});
app.post("/mouse_entered", (req, res) => {
  console.log("post mouse_entered from htmx");
  res.send("[Here Mouse, Mouse!]");
});
app.get("/trigger_delay", (req, res) => {
  console.log("post trigger_delay from htmx");
  res.send(`<div>${JSON.stringify(req.query)}</div>`);
});
app.get("/clicked", (req, res) => {
  console.log("get clicked from htmx");
  res.send("Control Click Me");
});
app.get("/load", (req, res) => {
  console.log("get load from htmx");
  res.send("load（加载时触发，只触发一次）");
});
app.get("/revealed", (req, res) => {
  console.log("get revealed from htmx");
  res.send("revealed（进入视野时触发，只触发一次）");
});
app.get("/intersect", (req, res) => {
  console.log("get intersect from htmx");
  res.send("intersect（和revealed差不多）");
});
app.get("/news", (req, res) => {
  console.log("get polling from htmx");
  const now = new Date();
  res.send("news " + now.toLocaleTimeString());
});
app.get("/messages", (req, res) => {
  console.log("get load polling from htmx");
  const now = new Date();
  res.send(
    '<div hx-get="/messages" hx-trigger="load delay:1s" hx-swap="outerHTML">' +
      "news " +
      now.toLocaleTimeString() +
      "</div>"
  );
});
app.get("/click", (req, res) => {
  console.log("get click from htmx");
  res.send("Click Me!(triggered)");
});
app.get("/example", (req, res) => {
  console.log("morph swap from htmx");
  const now = new Date();
  res.send(`<div>example${now.toLocaleTimeString()}</div>`);
});
app.get("/transition", (req, res) => {
  console.log("transition from htmx");
  res.send("transition(triggered)");
});
app.get("/swap", (req, res) => {
  console.log("swap from htmx");
  res.send("swap(triggered)");
});
app.get("/settle", (req, res) => {
  console.log("settle from htmx");
  res.send("settle(triggered)");
});
app.get("/ignoreTitle", (req, res) => {
  console.log("ignoreTitle from htmx");
  res.send("<title>new title</title>" + "<span>ignoreTitle(triggered)</span>");
});
app.post("/store", (req, res) => {
  res.send("store(triggered)");
});
app.post("/validate", (req, res) => {
  res.send("validate(triggered)");
});
app.post("/example", (req, res) => {
  console.log("morph swap from htmx");
  const now = new Date();
  res.send(`<div>example${now.toLocaleTimeString()}</div>`);
});
app.listen(3000);
console.log("listening on port 3000");

import app from "./app";

const port = process.env.PORT || 3200;

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

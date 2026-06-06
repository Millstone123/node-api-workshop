import http from "node:http";

const port = Number(process.env.PORT || 8787);

const server = http.createServer((req, res) => {
  const chunks = [];
  req.on("data", (chunk) => chunks.push(chunk));
  req.on("end", () => {
    const body = Buffer.concat(chunks).toString("utf8");
    const record = {
      at: new Date().toISOString(),
      method: req.method,
      url: req.url,
      headers: req.headers,
      body
    };

    console.log(JSON.stringify(record, null, 2));
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ ok: true }));
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Local canary listener ready: http://127.0.0.1:${port}/collect`);
});

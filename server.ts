import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import fs from "fs";

async function startServer() {
  const app = express();
  const PORT = 3000;

  console.log("Starting server in mode:", process.env.NODE_ENV || 'development');

  app.use(express.json());

  // Lead Collection API
  app.post("/api/leads", (req, res) => {
    const lead = req.body;
    console.log("New Lead Received:", lead);
    res.status(201).json({ success: true });
  });

  const distPath = path.join(process.cwd(), 'dist');
  const indexHtmlExists = fs.existsSync(path.join(distPath, 'index.html'));

  // Vite middleware for development or if dist is missing
  if (process.env.NODE_ENV !== "production" || !indexHtmlExists) {
    console.log("Using Vite middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Serving static files from dist...");
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

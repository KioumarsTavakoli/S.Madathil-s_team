import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Determine the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 3000;
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Correct the order of req and res parameters
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

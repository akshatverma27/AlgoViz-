import express from 'express';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES Modules replacement for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// Create directories if they don't exist
const ensureDirectoryExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

['build', 'output', 'input'].forEach(dir => {
  ensureDirectoryExists(path.join(__dirname, dir));
});

// Create default input file
const inputFilePath = path.join(__dirname, 'input', 'huffman.txt');
if (!fs.existsSync(inputFilePath)) {
  fs.writeFileSync(inputFilePath, 'Graphicera');
}

const handleAlgorithm = (req, res, algorithm) => {
  const outputPath = path.join(__dirname, 'output', `${algorithm}.json`);
  const exePath = path.join(__dirname, 'build', 'algoviz_${algorithm}.exe');

  console.log(`Running ${algorithm} algorithm...`);

  // Compile command with Windows compatibility
  const compileCmd = `g++ -DHUFFMAN runner/main_${algorithm}.cpp algorithms/${algorithm}.cpp -I include -o "${exePath}" -std=c++17 -lstdc++fs`;

  exec(compileCmd, {
    cwd: __dirname,
    shell: true
  }, (compileError, compileStdout, compileStderr) => {
    if (compileError) {
      console.error('Compilation failed:', compileStderr);
      return res.status(500).json({
        error: 'Compilation failed',
        details: compileStderr.toString()
      });
    }

    // Execute command
    exec(`"${exePath}" ${algorithm}`, {
      cwd: __dirname,
      shell: true,
      timeout: 10000
    }, (execError, execStdout, execStderr) => {
      if (execError) {
        console.error('Execution failed:', execStderr || execError.message);
        return res.status(500).json({
          error: 'Execution failed',
          details: (execStderr || execError.message).toString()
        });
      }

      // Read and return output
      fs.readFile(outputPath, 'utf8', (err, data) => {
        if (err) {
          console.error('Output read failed:', err);
          return res.status(500).json({
            error: 'Output read failed',
            details: err.message
          });
        }

        try {
          const result = JSON.parse(data);
          res.json(result);
        } catch (parseError) {
          console.error('JSON parse failed:', parseError);
          res.status(500).json({
            error: 'Invalid output format',
            details: parseError.message
          });
        }
      });
    });
  });
};

// Endpoints
app.get('/huffman', (req, res) => handleAlgorithm(req, res, 'huffman'));
app.get('/kmp', (req, res) => handleAlgorithm(req, res, 'kmp'));
app.get('/rabin-karp', (req, res) => handleAlgorithm(req, res, 'rabin_karp'));
app.get('/naive', (req, res) => handleAlgorithm(req, res, 'naive'));

app.get('/', (req, res) => {
  res.send('AlgoViz Backend Server is running');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Available endpoints:`);
  console.log(`- Huffman: http://localhost:${PORT}/huffman`);
  console.log(`- KMP: http://localhost:${PORT}/kmp`);
  console.log(`- Rabin-Karp: http://localhost:${PORT}/rabin-karp`);
  console.log(`- Naive: http://localhost:${PORT}/naive`);
});
import express from 'express';
import { franc } from 'franc';
import langs from 'langs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/detect', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }
  
  const langCode = franc(text);
  if (langCode === 'und') {
    return res.json({ message: 'Could not determine the language.' });
  }
  
  const languageInfo = langs.where('3', langCode);
  res.json({
    code: langCode,
    language: languageInfo ? languageInfo.name : 'Unknown',
    text: text,
  });
});

app.listen(port, () => {
  console.log(`✨ Server running at http://localhost:${port}`);
});
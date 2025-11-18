import { copyFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distPath = join(__dirname, '..', 'dist');
const indexPath = join(distPath, 'index.html');
const notFoundPath = join(distPath, '404.html');

try {
  copyFileSync(indexPath, notFoundPath);
  console.log('✓ 404.html criado com sucesso');
} catch (error) {
  console.error('Erro ao criar 404.html:', error);
  process.exit(1);
}


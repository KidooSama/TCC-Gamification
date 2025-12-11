import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distPath = join(__dirname, '..', 'dist');
const indexPath = join(distPath, 'index.html');
const notFoundPath = join(distPath, '404.html');

try {
  // Lê o conteúdo do index.html
  const indexContent = readFileSync(indexPath, 'utf-8');
  
  // Adiciona script de redirecionamento no início do body para garantir que funcione
  const redirectScript = `
    <script>
      // Redireciona para index.html mantendo o path
      // GitHub Pages usa 404.html para redirecionar rotas não encontradas
      const path = window.location.pathname;
      const search = window.location.search;
      const hash = window.location.hash;
      
      // Remove '/404.html' ou '/404' do path se presente
      let cleanPath = path.replace(/\/404\.html?$/, '');
      if (!cleanPath.endsWith('/') && cleanPath !== '') {
        cleanPath = cleanPath.substring(0, cleanPath.lastIndexOf('/') + 1);
      }
      
      // Redireciona para index.html considerando o base path do GitHub Pages
      const basePath = '/TCC-Gamification/';
      const base = cleanPath || basePath;
      // Garante que o base path está incluído
      const targetPath = base.startsWith(basePath) ? base : basePath + (base === '/' ? '' : base.replace(/^\//, ''));
      window.location.replace(targetPath + 'index.html' + search + hash);
    </script>
  `;
  
  // Insere o script logo após a abertura do body
  const modifiedContent = indexContent.replace(
    '<body>',
    `<body>${redirectScript}`
  );
  
  // Escreve o arquivo 404.html
  writeFileSync(notFoundPath, modifiedContent, 'utf-8');
  console.log('✓ 404.html criado com sucesso');
} catch (error) {
  console.error('Erro ao criar 404.html:', error);
  process.exit(1);
}


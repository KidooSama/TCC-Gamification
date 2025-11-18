# Troubleshooting - Erro 404 no GitHub Pages

Se você está recebendo erro 404 ao acessar `https://kidoosama.github.io/TCC-Gamification/`, siga estes passos:

## 1. Verificar se o GitHub Pages está habilitado

1. Vá para o repositório no GitHub
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, certifique-se de que está selecionado **GitHub Actions**
5. Se não estiver, selecione e salve

## 2. Verificar se o workflow foi executado

1. Vá para a aba **Actions** no seu repositório
2. Verifique se há um workflow chamado "Deploy to GitHub Pages"
3. Se houver, clique nele e verifique se está com status ✅ (verde) ou ❌ (vermelho)
4. Se estiver vermelho, clique e veja qual foi o erro

## 3. Executar o workflow manualmente

Se o workflow não foi executado automaticamente:

1. Vá para **Actions** > **Deploy to GitHub Pages**
2. Clique em **Run workflow**
3. Selecione a branch **main**
4. Clique em **Run workflow**
5. Aguarde a conclusão

## 4. Verificar o base path

O base path deve ser `/TCC-Gamification/` (com barras no início e fim).

Para verificar se está correto:
1. Após o build, verifique o arquivo `dist/index.html`
2. Os caminhos dos assets devem começar com `/TCC-Gamification/`

## 5. Aguardar a propagação

Após o deploy bem-sucedido, pode levar alguns minutos para o site ficar disponível. Aguarde 5-10 minutos e tente acessar novamente.

## 6. Limpar cache do navegador

Às vezes o navegador pode estar mostrando uma versão antiga em cache:
- Pressione `Ctrl + Shift + R` (Windows/Linux) ou `Cmd + Shift + R` (Mac)
- Ou abra uma janela anônima/privada

## 7. Verificar a URL correta

Certifique-se de que está acessando a URL correta:
- ✅ Correto: `https://kidoosama.github.io/TCC-Gamification/`
- ❌ Errado: `https://kidoosama.github.io/TCC-Gamification` (sem barra no final)

## Se ainda não funcionar

1. Verifique os logs do workflow em **Actions**
2. Certifique-se de que todos os arquivos foram commitados e enviados para o GitHub
3. Tente fazer um novo commit para disparar o workflow novamente


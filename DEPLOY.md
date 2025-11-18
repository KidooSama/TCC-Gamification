# Guia de Deploy para GitHub Pages

Este projeto está configurado para fazer deploy automático no GitHub Pages.

## Configuração Inicial

1. **Crie o repositório no GitHub** (se ainda não criou)
   - Acesse https://github.com/new
   - Crie um novo repositório (ex: `TCC-Gamification`)

2. **Faça o push do código**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/TCC-Gamification.git
   git push -u origin main
   ```

3. **Habilite o GitHub Pages**
   - Vá em **Settings** > **Pages** no seu repositório
   - Em **Source**, selecione **GitHub Actions**
   - Salve as configurações

## Deploy Automático

O deploy acontece automaticamente quando você faz push para a branch `main`. O workflow do GitHub Actions irá:
- Instalar as dependências
- Fazer o build do projeto
- Fazer deploy no GitHub Pages

## URL do Site

Após o primeiro deploy, seu site estará disponível em:
```
https://SEU_USUARIO.github.io/TCC-Gamification/
```

**Nota:** Substitua `SEU_USUARIO` e `TCC-Gamification` pelo seu usuário do GitHub e nome do repositório.

## Deploy Manual

Se quiser fazer deploy manualmente, você pode:
1. Ir em **Actions** no seu repositório
2. Selecionar o workflow **Deploy to GitHub Pages**
3. Clicar em **Run workflow**

## Verificando o Deploy

Após fazer push, você pode acompanhar o progresso:
- Vá em **Actions** no seu repositório
- Clique no workflow em execução para ver os logs
- Quando concluído, o site estará disponível na URL acima


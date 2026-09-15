# Breno & Carla · 03.01.2027

Site do casamento. React + Vite + Tailwind, 100% estatico, publicado na
Cloudflare Pages.

- Producao: https://carlaebreno.pages.dev
- Preview de branch: `https://<branch>.carlaebreno.pages.dev`

## Rodando local

```bash
npm install
npm run dev
```

Outros comandos: `npm run build`, `npm run preview`, `npm run lint`.

## Deploy

O deploy e automatico via GitHub Actions (`.github/workflows/deploy.yml`):

| Evento | Resultado |
|---|---|
| push na `main` | deploy de **producao** em `carlaebreno.pages.dev` |
| pull request / push em outra branch | deploy de **preview** com URL propria |
| Actions → Deploy → Run workflow | deploy manual da branch escolhida |

O workflow roda `npm ci`, `npm run lint`, `npm run build` e envia a pasta `dist`
para a Cloudflare. Se o lint ou o build falhar, nada vai pro ar.

Para publicar da sua maquina, sem passar pelo CI: `npm run build && npm run deploy`.

---

## Configuracao inicial (feita uma vez)

> **Contexto de contas:** o projeto vive na conta Cloudflare da
> **carlacristina.work@gmail.com**. O acesso do Matheus e pelo login
> **matheusgobetti12@gmail.com**, que e membro Administrador dessa conta.
> Em todos os passos abaixo, use o seletor de conta no topo do dashboard para
> garantir que voce esta **na conta da Carla**, e nao na conta pessoal — os IDs
> e tokens sao por conta e nao se misturam.
>
> Se o login do Matheus ainda nao aparecer na conta da Carla, ela precisa
> convida-lo primeiro em **Manage Account → Members → Invite**, com o papel
> *Administrator*.

### 1. Criar o projeto na Cloudflare Pages

```bash
npx wrangler login                 # abre o navegador; entre com o login que tem acesso
npx wrangler pages project create carlaebreno --production-branch=main
```

Se o wrangler perguntar em qual conta criar, escolha a da Carla.

> ⚠️ **Nao use a opcao "Connect to Git" do dashboard.** Um projeto Pages ligado
> ao GitHub faz o proprio build e passa a recusar upload via `wrangler`, o que
> conflita com este pipeline. O projeto tem que ser do tipo *Direct Upload*, que
> e o que o comando acima cria.

O nome `carlaebreno` e global em toda a Cloudflare. Se estiver em uso, escolha
outro e troque nos tres lugares: `CF_PROJECT_NAME` no workflow, o script
`deploy` do `package.json` e o `homepage` do `package.json`.

### 2. Pegar o Account ID

No dashboard, com a conta da Carla selecionada, va em **Workers & Pages**. O
**Account ID** aparece na barra lateral direita. Ele tambem e o trecho de 32
caracteres na URL: `dash.cloudflare.com/<account-id>/...`

### 3. Criar o API token

**My Profile → API Tokens → Create Token → Create Custom Token**

- **Permissions:** `Account` · `Cloudflare Pages` · `Edit`
- **Account Resources:** `Include` · a conta da **Carla**
- **TTL:** deixe sem expiracao, ou marque no calendario para renovar antes

Copie o token na hora — a Cloudflare so mostra ele uma vez.

> O token herda as permissoes que voce tem na conta. Como Administrador, a opcao
> `Cloudflare Pages · Edit` aparece normalmente. Se ela nao aparecer, o papel do
> convite foi mais restrito que Administrator.

### 4. Cadastrar os secrets no GitHub

No repositorio `cah-rodrigues/Save-the-Date` (precisa de acesso de admin):
**Settings → Secrets and variables → Actions → New repository secret**

| Nome | Valor |
|---|---|
| `CLOUDFLARE_API_TOKEN` | o token do passo 3 |
| `CLOUDFLARE_ACCOUNT_ID` | o Account ID do passo 2 (conta da Carla) |

Os nomes precisam ser exatamente esses — o workflow procura por eles.

### 5. Primeiro deploy

Faca push na `main` (ou rode o workflow manualmente em **Actions → Deploy →
Run workflow**). Ao final, o resumo da execucao mostra a URL publicada.

## Dominio proprio

Quando quiserem trocar `carlaebreno.pages.dev` por um dominio de verdade:
**Workers & Pages → carlaebreno → Custom domains → Set up a domain**. O
pipeline nao muda — o `base` do Vite ja e `/` e serve em qualquer dominio.

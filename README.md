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

## Como o deploy funciona

O projeto na Cloudflare e ligado direto a este repositorio no GitHub. A cada
push, a **propria Cloudflare** clona o repo, roda o build e publica. Nao existe
workflow do GitHub Actions nem token guardado em lugar nenhum.

| Evento | Resultado |
|---|---|
| push na `main` | producao em `carlaebreno.pages.dev` |
| push em outra branch / PR | preview em `<branch>.carlaebreno.pages.dev` |

Se o `npm run lint` ou o `npm run build` falhar, o deploy nao acontece e o site
no ar continua sendo o da ultima versao que passou.

Para publicar da sua maquina sem passar por isso (emergencia):

```bash
npx wrangler login          # OAuth no navegador, sem token
npm run build && npm run deploy
```

---

## Configuracao inicial (feita uma vez)

> **Quem precisa fazer:** a dona da conta Cloudflare do projeto
> (**carlacristina.work@gmail.com**), que tambem e a dona do repositorio no
> GitHub (`cah-rodrigues`). Os dois passos abaixo exigem essa titularidade:
> ligar um GitHub App a um repositorio pessoal so o dono pode fazer, e o projeto
> precisa nascer dentro da conta Cloudflare certa.

### 1. Criar o projeto conectado ao GitHub

No dashboard da Cloudflare, **com a conta do projeto selecionada**:

**Workers & Pages → Create → Pages → Connect to Git**

Autorize o GitHub quando ele pedir e escolha o repositorio
`cah-rodrigues/Save-the-Date`.

> ⚠️ Um projeto Pages nasce *Connect to Git* ou *Direct Upload* e **nao da para
> converter depois**. Se ja existir um `carlaebreno` criado por engano via
> `wrangler pages project create`, apague antes de comecar — senao o nome fica
> ocupado e a conexao com o Git nao acontece.

### 2. Configuracao de build

| Campo | Valor |
|---|---|
| Project name | `carlaebreno` |
| Production branch | `main` |
| Framework preset | `Vite` |
| Build command | `npm run lint && npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |

### 3. Variavel de ambiente do build

Ainda na tela de configuracao, em **Environment variables**, adicione:

| Nome | Valor |
|---|---|
| `NODE_VERSION` | `24` |

Esse passo nao e opcional. O Vite 8 exige Node 20.19+ e o builder da Cloudflare
pode subir com uma versao mais antiga por padrao — o sintoma e um build que
quebra com erro de sintaxe ou de engine sem explicar o motivo.

### 4. Save and Deploy

O primeiro build roda na hora. Dos proximos pushes em diante e automatico.

O nome `carlaebreno` e global em toda a Cloudflare. Se estiver ocupado, escolha
outro e atualize o `homepage` e o script `deploy` do `package.json`.

## Dominio proprio

**Workers & Pages → carlaebreno → Custom domains → Set up a domain.** Nada no
codigo muda: o `base` do Vite ja e `/` e serve em qualquer dominio.

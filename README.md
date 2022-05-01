# Tipos de Pré Renderização do `NextJs`

## SPA (single page application)

- Cliente rico
- Processamento e lógica do lado do cliente
- Troca de `dados(json)` entre `frontend` e `backend`

![Spa](/src/assets/img/spa.png)

___

## SSR (server side rendering)

- Otimização de SEO
- Renderização do lado do servidor (conteúdo gerado no servidor)
- O HTML com conteúdo completo é disponibilizado na requisição a cada requisição (dinamicamente)

![Spa](/src/assets/img/ssr1.png)
![Spa](/src/assets/img/ssr2.png)

```js
export function getServerSideProps() {
  return {
    props: {
      numero: Math.random(),
    },
  };
}
```

___


## SSG (static site generation)

- Arquivos presentes fisicamente no servidor
- Realiza os processamentos que forem necessários e salva os arquivos em disco

![Spa](/src/assets/img/ssg.png)


```js
export async function getStaticProps() {
  const resp = await fetch("http://localhost:3000/api/produtos");
  const produtos = await resp.json();
  console.log("Estou rodando do lado do server...");
  exec("ls", (err, stdout, stderr) => {
    console.log(stdout);
  });

  return {
    props: {
      produtos,
    },
  };
}
```

___


const {exec} = require("child_process");

export default function Estatico(props) {
  console.log("Estou rodando do lado do client...");

  function renderizarProdutos() {
    return props.produtos.map((produto) => {
      return (
        <li key={produto.id}>
          Id: {produto.id}. Produto: {produto.nome}. Preço: {produto.preco}.
        </li>
      );
    });
  }
  return (
    <div>
      <h1>Componente Estático 3</h1>
      <ul>{renderizarProdutos()}</ul>
    </div>
  );
}

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

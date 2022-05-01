export default function Estatico(props) {
  return (
    <div>
      <h1>Componente Estático 2</h1>
      <h2>{props.numero}</h2>
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      numero: Math.random(),
      revalidate: 10,
    },
  };
}

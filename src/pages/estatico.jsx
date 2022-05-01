export default function Estatico(props) {
  return (
    <div>
      <h1>Componente Estático</h1>
      <h2>{props.p1}</h2>
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      p1: "Prop 1",
    },
  };
}

import styles from "./styles.module.css";

export default (props) => {
  return (
    <div>
      <h1 className={styles.title}>Componente Estático</h1>
      <h2 className={styles.subtitle}>
        Este conteúdo está sendo gerado de forma estática...
      </h2>
    </div>
  );
};

import styles from "./page.module.css";
import { Button } from "ui/Button";
import { Input } from "ui/Input";

export default function Home() {

  const nome = "Gustavo"

  return (
    <div className={styles.page}>
      <Button />
      <Input />

      meu nome é {nome}
    </div>
  );
}


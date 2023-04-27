import styles from "./Header.module.css"
import igniteLogo from "../assets/ignite-logo.svg";

export function Header() {
  return(
    <header className={styles.header}>
      <img src={igniteLogo} alt="logotipo Do Ignite"></img>
      
    </header>
  )
}

// chaves é quando a gente quer colocar uma variável js detro do css
import { Button, hello } from "common-ui";
import styles from "./App.module.scss";

function App() {
  const text = hello();

  return (
    <div className="App">
      <span className={styles.headline}>{text}</span>
      <Button />
    </div>
  );
}

export default App;

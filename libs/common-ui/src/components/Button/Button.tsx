import styles from "./Button.module.scss";

type ButtonProps = {
  caption: string;
};

export function Button({ caption }: ButtonProps) {
  return <button className={styles.button}>{caption}</button>;
}

import React from "react";
import styles from "../../styles/Home.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={styles.containerlayout}>{children}</div>;
}

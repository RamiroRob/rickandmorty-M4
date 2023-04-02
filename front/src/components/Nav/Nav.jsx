import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav({ onSearch }) {
  return (
    <div className={styles.nav}>
      <div className={styles.barra}>
        <Link to="/about">
          <div className={styles.items}>About</div>
        </Link>
        <Link to="/home">
          <div className={styles.items}>Home</div>
        </Link>
        <Link to="/favorites">
          <div className={styles.items}>Favorites</div>
        </Link>
      </div>
      <div className={styles.searchBar}>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
}

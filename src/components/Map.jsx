import React from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router";
export default function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      Map
      <h1>map</h1>
      <h2>
        position:{lat},{lng}
      </h2>
    </div>
  );
}

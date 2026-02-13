"use client";
import { useState } from "react";
import BillInput from "./BillInput";
import TipDisplay from "./TipDisplay";
import ResultBox from "./ResultBox";
import CalculateButton from "./CalculateButton";

export default function Page() {
  const [ez, setEz] = useState<number>(0);
  const [pp] = useState<number>(5);

  const [tt, setTt] = useState<number>(0);
  const [tipTotal, setTipTotal] = useState<number>(0);

  const firm = () => {
    const tipAmount = ez * (pp / 100);
    const total = ez + tipAmount;

    setTipTotal(tipAmount);
    setTt(total);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <BillInput ez={ez} setEz={setEz} />
        <TipDisplay percent={pp} />
        <ResultBox tipTotal={tipTotal} total={tt} />
        <CalculateButton firm={firm} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
  },
  card: {
    width: "450px",
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "25px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
  },
};

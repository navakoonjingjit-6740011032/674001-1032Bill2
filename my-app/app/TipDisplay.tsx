export default function TipDisplay({ percent }: any) {
  return (
    <div style={{ marginBottom: "25px" }}>
      <h3 style={{ fontWeight: "bold", marginBottom: "8px" }}>Tip</h3>
      <div style={styles.tipBox}>{percent}%</div>
    </div>
  );
}

const styles = {
  tipBox: {
    padding: "12px",
    borderRadius: "12px",
    backgroundColor: "#e0e7ff",
    textAlign: "center",
    fontWeight: "bold",
    color: "#4338ca",
  },
};

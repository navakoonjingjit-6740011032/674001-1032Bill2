export default function BillInput({ ez, setEz }: any) {
  return (
    <div style={{ marginBottom: "25px" }}>
      <h3 style={styles.label}>Bill</h3>
      <input
        style={styles.input}
        type="number"
        value={ez}
        onChange={(e) => setEz(Number(e.target.value))}
      />
    </div>
  );
}

const styles = {
  label: {
    fontWeight: "bold",
    marginBottom: "8px",
    color: "#444",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "12px",
    border: "2px solid #667eea",
    fontSize: "16px",
    outline: "none",
  },
};

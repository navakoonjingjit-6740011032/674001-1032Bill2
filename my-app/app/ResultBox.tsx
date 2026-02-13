export default function ResultBox({ tipTotal, total }: any) {
  return (
    <div style={{ marginBottom: "30px" }}>
      <div style={styles.row}>
        <span>Tip Total</span>
        <span style={styles.smallBox}>{tipTotal.toFixed(2)}</span>
      </div>

      <div style={styles.row}>
        <span>Bill Total</span>
        <span style={styles.bigBox}>{total.toFixed(2)}</span>
      </div>
    </div>
  );
}

const styles = {
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
    fontSize: "18px",
  },
  smallBox: {
    backgroundColor: "#d1fae5",
    padding: "8px 15px",
    borderRadius: "10px",
    fontWeight: "bold",
    color: "#065f46",
  },
  bigBox: {
    backgroundColor: "#c7d2fe",
    padding: "12px 20px",
    borderRadius: "12px",
    fontWeight: "bold",
    fontSize: "20px",
    color: "#3730a3",
  },
};

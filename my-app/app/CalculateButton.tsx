export default function CalculateButton({ firm }: any) {
    return (
      <button style={styles.button} onClick={firm}>
        Calculate
      </button>
    );
  }
  
  const styles = {
    button: {
      width: "100%",
      padding: "15px",
      borderRadius: "15px",
      border: "none",
      fontSize: "18px",
      fontWeight: "bold",
      color: "white",
      background: "linear-gradient(90deg, #667eea, #764ba2)",
      cursor: "pointer",
      transition: "0.3s",
    },
  };
  
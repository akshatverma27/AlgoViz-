// function Home() {
//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Welcome to AlgoViz</h1>
//       <p>Select an algorithm to visualize:</p>
//       <ul>
//         <li><a href="/kmp">KMP Algorithm</a></li>
//         <li><a href="/huffman">Huffman Coding</a></li>
//       </ul>
//     </div>
//   );
// }

// export default Home;


function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to AlgoViz</h1>
      <p style={styles.subtitle}>Choose an algorithm to visualize:</p>
      <div style={styles.cardContainer}>
        <a href="/kmp" style={styles.card}>
          <h2>KMP Algorithm</h2>
          <p>Pattern matching using the Knuth-Morris-Pratt algorithm</p>
        </a>
        <a href="/huffman" style={styles.card}>
          <h2>Huffman Coding</h2>
          <p>Text compression using frequency-based encoding</p>
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    textAlign: 'center',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '10px',
    fontFamily: 'Arial, sans-serif',
  },
  subtitle: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '30px',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap',
  },
  card: {
    width: '300px',
    padding: '25px',
    borderRadius: '10px',
    textDecoration: 'none',
    backgroundColor: '#f0f0f0',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    color: 'black',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
  },
};

export default Home;

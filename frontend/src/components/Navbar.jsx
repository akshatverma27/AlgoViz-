// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav style={{ padding: '10px', background: '#f0f0f0' }}>
//       <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
//       <Link to="/kmp" style={{ margin: '0 10px' }}>KMP</Link>
//       <Link to="/huffman" style={{ margin: '0 10px' }}>Huffman</Link>
//     </nav>
//   );
// }

// export default Navbar;
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>🔍 AlgoViz</div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/kmp" style={styles.link}>KMP</Link>
        <Link to="/huffman" style={styles.link}>Huffman</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#282c34',
    color: 'white',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  links: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'color 0.2s',
  }
};

export default Navbar;

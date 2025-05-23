// // // import { useState } from 'react';

// // // function Huffman() {
// // //   const [text, setText] = useState('');
// // //   const [frequency, setFrequency] = useState({});
// // //   const [error, setError] = useState('');
// // //   const [isVisualizing, setIsVisualizing] = useState(false);

// // //   // Calculate frequency of characters in the text input
// // //   const getFrequency = (str) => {
// // //     const freq = {};
// // //     for (const ch of str) {
// // //       freq[ch] = (freq[ch] || 0) + 1;
// // //     }
// // //     return freq;
// // //   };

// // //   const handleVisualize = () => {
// // //     if (!text.trim()) {
// // //       setError('Please enter some text to encode!');
// // //       setFrequency({});
// // //       setIsVisualizing(false);
// // //       return;
// // //     }
// // //     setError('');
// // //     setFrequency(getFrequency(text));
// // //     setIsVisualizing(true);
// // //   };

// // //   const resetVisualization = () => {
// // //     setText('');
// // //     setFrequency({});
// // //     setIsVisualizing(false);
// // //     setError('');
// // //   };

// // //   return (
// // //     <div style={{ 
// // //       padding: '2rem',
// // //       fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
// // //       maxWidth: '1200px',
// // //       margin: '0 auto',
// // //       color: '#2d3748'
// // //     }}>
// // //       <header style={{
// // //         textAlign: 'center',
// // //         marginBottom: '3rem',
// // //         paddingBottom: '1.5rem',
// // //         borderBottom: '1px solid #e2e8f0'
// // //       }}>
// // //         <h1 style={{
// // //           fontSize: '2.5rem',
// // //           fontWeight: '800',
// // //           color: '#1a365d',
// // //           marginBottom: '0.5rem',
// // //           background: 'linear-gradient(90deg, #4299e1, #667eea)',
// // //           WebkitBackgroundClip: 'text',
// // //           WebkitTextFillColor: 'transparent'
// // //         }}>
// // //           Huffman Coding Visualizer
// // //         </h1>
// // //         <p style={{
// // //           fontSize: '1.1rem',
// // //           color: '#4a5568',
// // //           maxWidth: '700px',
// // //           margin: '0 auto',
// // //           lineHeight: '1.6'
// // //         }}>
// // //           Visualize Huffman coding algorithm with character frequency analysis and binary tree construction
// // //         </p>
// // //       </header>

// // //       <div style={{
// // //         display: 'grid',
// // //         gridTemplateColumns: '1fr 1fr',
// // //         gap: '2rem',
// // //         marginBottom: '2rem'
// // //       }}>
// // //         <div>
// // //           <div style={{ marginBottom: '1.5rem' }}>
// // //             <label style={{ 
// // //               display: 'block',
// // //               fontWeight: '600',
// // //               marginBottom: '0.5rem',
// // //               color: '#2d3748'
// // //             }}>
// // //               Text to Encode
// // //             </label>
// // //             <textarea
// // //               value={text}
// // //               onChange={(e) => setText(e.target.value)}
// // //               rows={7}
// // //               style={{ 
// // //                 width: '100%',
// // //                 fontSize: '1rem',
// // //                 padding: '0.75rem',
// // //                 borderRadius: '0.5rem',
// // //                 border: '1px solid #cbd5e0',
// // //                 transition: 'all 0.2s',
// // //                 boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
// // //                 minHeight: '150px'
// // //               }}
// // //               placeholder="Enter the text you want to compress..."
// // //             />
// // //           </div>

// // //           <div style={{
// // //             display: 'flex',
// // //             gap: '1rem',
// // //             marginTop: '1.5rem'
// // //           }}>
// // //             <button
// // //               onClick={handleVisualize}
// // //               style={{
// // //                 backgroundColor: '#4299e1',
// // //                 color: 'white',
// // //                 padding: '0.75rem 1.5rem',
// // //                 border: 'none',
// // //                 borderRadius: '0.5rem',
// // //                 cursor: 'pointer',
// // //                 fontSize: '1rem',
// // //                 fontWeight: '600',
// // //                 transition: 'all 0.2s',
// // //                 boxShadow: '0 2px 5px rgba(66, 153, 225, 0.3)',
// // //                 ':hover': {
// // //                   backgroundColor: '#3182ce',
// // //                   transform: 'translateY(-1px)'
// // //                 }
// // //               }}
// // //             >
// // //               Visualize Huffman Coding
// // //             </button>

// // //             {isVisualizing && (
// // //               <button
// // //                 onClick={resetVisualization}
// // //                 style={{
// // //                   backgroundColor: '#e53e3e',
// // //                   color: 'white',
// // //                   padding: '0.75rem 1.5rem',
// // //                   border: 'none',
// // //                   borderRadius: '0.5rem',
// // //                   cursor: 'pointer',
// // //                   fontSize: '1rem',
// // //                   fontWeight: '600',
// // //                   transition: 'all 0.2s',
// // //                   boxShadow: '0 2px 5px rgba(229, 62, 62, 0.3)'
// // //                 }}
// // //               >
// // //                 Reset
// // //               </button>
// // //             )}
// // //           </div>

// // //           {error && (
// // //             <div style={{
// // //               marginTop: '1rem',
// // //               padding: '0.75rem',
// // //               backgroundColor: '#fff5f5',
// // //               borderLeft: '4px solid #f56565',
// // //               color: '#c53030',
// // //               borderRadius: '0.25rem'
// // //             }}>
// // //               {error}
// // //             </div>
// // //           )}
// // //         </div>

// // //         <div>
// // //           <div style={{
// // //             backgroundColor: '#f7fafc',
// // //             borderRadius: '0.75rem',
// // //             padding: '1.5rem',
// // //             boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
// // //             border: '1px solid #e2e8f0',
// // //             minHeight: '300px'
// // //           }}>
// // //             <h3 style={{
// // //               fontSize: '1.25rem',
// // //               fontWeight: '700',
// // //               marginBottom: '1rem',
// // //               color: '#2d3748',
// // //               display: 'flex',
// // //               alignItems: 'center',
// // //               gap: '0.5rem'
// // //             }}>
// // //               <span style={{
// // //                 display: 'inline-block',
// // //                 width: '24px',
// // //                 height: '24px',
// // //                 backgroundColor: '#4299e1',
// // //                 color: 'white',
// // //                 borderRadius: '50%',
// // //                 display: 'flex',
// // //                 alignItems: 'center',
// // //                 justifyContent: 'center',
// // //                 fontSize: '0.875rem'
// // //               }}>i</span>
// // //               Text Information
// // //             </h3>

// // //             {text.length > 0 ? (
// // //               <>
// // //                 <div style={{ marginBottom: '1.5rem' }}>
// // //                   <h4 style={{
// // //                     fontSize: '0.875rem',
// // //                     fontWeight: '600',
// // //                     color: '#4a5568',
// // //                     marginBottom: '0.5rem',
// // //                     textTransform: 'uppercase',
// // //                     letterSpacing: '0.05em'
// // //                   }}>
// // //                     Text Statistics
// // //                   </h4>
// // //                   <div style={{
// // //                     display: 'grid',
// // //                     gridTemplateColumns: '1fr 1fr',
// // //                     gap: '1rem'
// // //                   }}>
// // //                     <div style={{
// // //                       backgroundColor: '#ebf8ff',
// // //                       padding: '0.75rem',
// // //                       borderRadius: '0.5rem',
// // //                       textAlign: 'center'
// // //                     }}>
// // //                       <span style={{
// // //                         fontSize: '0.875rem',
// // //                         color: '#4a5568'
// // //                       }}>
// // //                         Characters
// // //                       </span>
// // //                       <div style={{
// // //                         fontSize: '1.5rem',
// // //                         fontWeight: '700',
// // //                         color: '#2b6cb0'
// // //                       }}>
// // //                         {text.length}
// // //                       </div>
// // //                     </div>
// // //                     <div style={{
// // //                       backgroundColor: '#ebf8ff',
// // //                       padding: '0.75rem',
// // //                       borderRadius: '0.5rem',
// // //                       textAlign: 'center'
// // //                     }}>
// // //                       <span style={{
// // //                         fontSize: '0.875rem',
// // //                         color: '#4a5568'
// // //                       }}>
// // //                         Unique Chars
// // //                       </span>
// // //                       <div style={{
// // //                         fontSize: '1.5rem',
// // //                         fontWeight: '700',
// // //                         color: '#2b6cb0'
// // //                       }}>
// // //                         {Object.keys(getFrequency(text)).length}
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {isVisualizing && (
// // //                   <div>
// // //                     <h4 style={{
// // //                       fontSize: '0.875rem',
// // //                       fontWeight: '600',
// // //                       color: '#4a5568',
// // //                       marginBottom: '0.5rem',
// // //                       textTransform: 'uppercase',
// // //                       letterSpacing: '0.05em'
// // //                     }}>
// // //                       Compression Potential
// // //                     </h4>
// // //                     <div style={{
// // //                       backgroundColor: '#f0fff4',
// // //                       padding: '0.75rem',
// // //                       borderRadius: '0.5rem',
// // //                       borderLeft: '4px solid '#48bb78'
// // //                     }}>
// // //                       <div style={{
// // //                         display: 'flex',
// // //                         justifyContent: 'space-between',
// // //                         marginBottom: '0.25rem'
// // //                       }}>
// // //                         <span style={{ color: '#4a5568' }}>Original size:</span>
// // //                         <span style={{ fontWeight: '600' }}>{text.length * 8} bits</span>
// // //                       </div>
// // //                       <div style={{
// // //                         display: 'flex',
// // //                         justifyContent: 'space-between'
// // //                       }}>
// // //                         <span style={{ color: '#4a5568' }}>Estimated compressed:</span>
// // //                         <span style={{ fontWeight: '600', color: '#2f855a' }}>
// // //                           ~{Math.round(text.length * 4.5)} bits
// // //                         </span>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 )}
// // //               </>
// // //             ) : (
// // //               <div style={{
// // //                 padding: '1.5rem',
// // //                 textAlign: 'center',
// // //                 color: '#a0aec0',
// // //                 fontStyle: 'italic'
// // //               }}>
// // //                 Enter text to see detailed information
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {isVisualizing && (
// // //         <div style={{
// // //           marginTop: '2rem',
// // //           backgroundColor: 'white',
// // //           borderRadius: '0.75rem',
// // //           padding: '2rem',
// // //           boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
// // //           border: '1px solid #e2e8f0'
// // //         }}>
// // //           <div style={{
// // //             display: 'flex',
// // //             justifyContent: 'space-between',
// // //             alignItems: 'center',
// // //             marginBottom: '1.5rem'
// // //           }}>
// // //             <h2 style={{
// // //               fontSize: '1.5rem',
// // //               fontWeight: '700',
// // //               color: '#1a365d'
// // //             }}>
// // //               Character Frequency Analysis
// // //             </h2>
// // //             <div style={{
// // //               backgroundColor: '#ebf8ff',
// // //               padding: '0.5rem 1rem',
// // //               borderRadius: '9999px',
// // //               fontSize: '0.875rem',
// // //               fontWeight: '600',
// // //               color: '#2b6cb0'
// // //             }}>
// // //               {Object.keys(frequency).length} unique characters
// // //             </div>
// // //           </div>

// // //           <div style={{
// // //             display: 'grid',
// // //             gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
// // //             gap: '1rem',
// // //             marginBottom: '2rem'
// // //           }}>
// // //             {Object.entries(frequency)
// // //               .sort((a, b) => b[1] - a[1])
// // //               .map(([char, count]) => (
// // //                 <div key={char} style={{
// // //                   backgroundColor: '#ebf8ff',
// // //                   padding: '1rem',
// // //                   borderRadius: '0.5rem',
// // //                   textAlign: 'center',
// // //                   transition: 'all 0.2s',
// // //                   ':hover': {
// // //                     transform: 'translateY(-2px)',
// // //                     boxShadow: '0 4px 6px rgba(66, 153, 225, 0.2)'
// // //                   }
// // //                 }}>
// // //                   <div style={{
// // //                     fontSize: '1.5rem',
// // //                     fontWeight: '700',
// // //                     color: '#2b6cb0',
// // //                     marginBottom: '0.5rem'
// // //                   }}>
// // //                     {char === ' ' ? '␣' : char}
// // //                   </div>
// // //                   <div style={{
// // //                     fontSize: '0.875rem',
// // //                     color: '#4a5568'
// // //                   }}>
// // //                     {count} occurrence{count !== 1 ? 's' : ''}
// // //                   </div>
// // //                   <div style={{
// // //                     marginTop: '0.5rem',
// // //                     fontSize: '0.75rem',
// // //                     color: '#718096'
// // //                   }}>
// // //                     {(count / text.length * 100).toFixed(1)}% of text
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //           </div>

// // //           <div style={{
// // //             backgroundColor: '#f8fafc',
// // //             padding: '1.5rem',
// // //             borderRadius: '0.5rem',
// // //             marginBottom: '2rem'
// // //           }}>
// // //             <h3 style={{
// // //               fontSize: '1.25rem',
// // //               fontWeight: '600',
// // //               marginBottom: '1rem',
// // //               color: '#2d3748'
// // //             }}>
// // //               Frequency Distribution
// // //             </h3>
// // //             <div style={{
// // //               height: '200px',
// // //               display: 'flex',
// // //               alignItems: 'flex-end',
// // //               gap: '4px',
// // //               borderBottom: '1px solid #cbd5e0',
// // //               paddingBottom: '1rem'
// // //             }}>
// // //               {Object.entries(frequency)
// // //                 .sort((a, b) => b[1] - a[1])
// // //                 .map(([char, count]) => (
// // //                   <div 
// // //                     key={char}
// // //                     style={{
// // //                       flex: '1',
// // //                       display: 'flex',
// // //                       flexDirection: 'column',
// // //                       alignItems: 'center'
// // //                     }}
// // //                   >
// // //                     <div 
// // //                       style={{
// // //                         width: '100%',
// // //                         backgroundColor: '#4299e1',
// // //                         height: `${(count / Math.max(...Object.values(frequency))) * 100}%`,
// // //                         borderRadius: '4px 4px 0 0',
// // //                         transition: 'height 0.5s ease'
// // //                       }}
// // //                     />
// // //                     <div style={{
// // //                       fontSize: '0.75rem',
// // //                       marginTop: '0.5rem',
// // //                       color: '#4a5568'
// // //                     }}>
// // //                       {char === ' ' ? '␣' : char}
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //             </div>
// // //           </div>

// // //           <div style={{
// // //             backgroundColor: '#f0fff4',
// // //             padding: '1.5rem',
// // //             borderRadius: '0.5rem',
// // //             borderLeft: '4px solid '#48bb78',
// // //             marginTop: '2rem'
// // //           }}>
// // //             <h3 style={{
// // //               fontSize: '1.25rem',
// // //               fontWeight: '600',
// // //               color: '#2f855a',
// // //               marginBottom: '0.5rem',
// // //               display: 'flex',
// // //               alignItems: 'center',
// // //               gap: '0.5rem'
// // //             }}>
// // //               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2f855a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
// // //                 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
// // //               </svg>
// // //               Next Steps
// // //             </h3>
// // //             <p style={{
// // //               margin: 0,
// // //               color: '#38a169',
// // //               lineHeight: '1.6'
// // //             }}>
// // //               With the character frequencies calculated, the next step is to build the Huffman tree by 
// // //               repeatedly combining the two least frequent nodes until only one node remains.
// // //             </p>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {isVisualizing && (
// // //         <div style={{
// // //           marginTop: '2rem',
// // //           backgroundColor: 'white',
// // //           borderRadius: '0.75rem',
// // //           padding: '2rem',
// // //           boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
// // //           border: '1px solid #e2e8f0'
// // //         }}>
// // //           <h2 style={{
// // //             fontSize: '1.5rem',
// // //             fontWeight: '700',
// // //             color: '#1a365d',
// // //             marginBottom: '1.5rem'
// // //           }}>
// // //             Huffman Tree Construction
// // //           </h2>

// // //           <div style={{
// // //             backgroundColor: '#f8fafc',
// // //             padding: '2rem',
// // //             borderRadius: '0.5rem',
// // //             minHeight: '300px',
// // //             display: 'flex',
// // //             alignItems: 'center',
// // //             justifyContent: 'center',
// // //             flexDirection: 'column'
// // //           }}>
// // //             <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#cbd5e0" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
// // //               <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
// // //               <line x1="3.27" y1="6.96" x2="12" y2="12.01"></line>
// // //               <line x1="12" y1="12.01" x2="20.73" y2="6.96"></line>
// // //               <line x1="12" y1="22.08" x2="12" y2="12"></line>
// // //             </svg>
// // //             <p style={{
// // //               marginTop: '1rem',
// // //               color: '#a0aec0',
// // //               fontStyle: 'italic',
// // //               textAlign: 'center'
// // //             }}>
// // //               Tree visualization will be implemented in the next iteration
// // //             </p>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default Huffman;


// // import { useState } from 'react';

// // function Huffman() {
// //   const [text, setText] = useState('');
// //   const [frequency, setFrequency] = useState({});
// //   const [error, setError] = useState('');

// //   // Calculate frequency of characters in the text input
// //   const getFrequency = (str) => {
// //     const freq = {};
// //     for (const ch of str) {
// //       freq[ch] = (freq[ch] || 0) + 1;
// //     }
// //     return freq;
// //   };

// //   const handleFrequency = () => {
// //     if (!text.trim()) {
// //       setError('Please enter some text!');
// //       setFrequency({});
// //       return;
// //     }
// //     setError('');
// //     setFrequency(getFrequency(text));
// //   };

// //   return (
// //     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
// //       <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
// //         Huffman Coding Visualizer
// //       </h2>

// //       <div style={{ marginBottom: '20px' }}>
// //         <label style={{ fontWeight: 'bold' }}>
// //           Enter text to encode:
// //           <br />
// //           <textarea
// //             value={text}
// //             onChange={(e) => setText(e.target.value)}
// //             rows={5}
// //             cols={60}
// //             placeholder="Enter text here..."
// //             style={{ fontSize: '16px', padding: '8px', borderRadius: '5px' }}
// //           />
// //         </label>
// //       </div>

// //       <button
// //         onClick={handleFrequency}
// //         style={{
// //           backgroundColor: '#007bff',
// //           color: 'white',
// //           padding: '12px 25px',
// //           border: 'none',
// //           borderRadius: '6px',
// //           cursor: 'pointer',
// //           fontSize: '16px',
// //         }}
// //       >
// //         Show Frequency Table
// //       </button>

// //       {error && (
// //         <p style={{ color: 'red', marginTop: '15px', fontWeight: 'bold' }}>
// //           {error}
// //         </p>
// //       )}

// //       {Object.keys(frequency).length > 0 && (
// //         <div
// //           style={{
// //             marginTop: '30px',
// //             maxWidth: '400px',
// //             border: '1px solid #ddd',
// //             borderRadius: '6px',
// //             padding: '10px',
// //             backgroundColor: '#f7f7f7',
// //             boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
// //           }}
// //         >
// //           <h4 style={{ marginBottom: '10px' }}>Frequency Table</h4>
// //           <table style={{ width: '100%', borderCollapse: 'collapse' }}>
// //             <thead>
// //               <tr>
// //                 <th
// //                   style={{
// //                     borderBottom: '1px solid #ccc',
// //                     textAlign: 'left',
// //                     paddingBottom: '6px',
// //                   }}
// //                 >
// //                   Character
// //                 </th>
// //                 <th
// //                   style={{
// //                     borderBottom: '1px solid #ccc',
// //                     textAlign: 'right',
// //                     paddingBottom: '6px',
// //                   }}
// //                 >
// //                   Count
// //                 </th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {Object.entries(frequency).map(([char, count]) => (
// //                 <tr key={char}>
// //                   <td
// //                     style={{
// //                       borderBottom: '1px solid #eee',
// //                       padding: '6px 0',
// //                       fontWeight: 'bold',
// //                     }}
// //                   >
// //                     {char === ' ' ? '(space)' : char}
// //                   </td>
// //                   <td
// //                     style={{
// //                       borderBottom: '1px solid #eee',
// //                       padding: '6px 0',
// //                       textAlign: 'right',
// //                     }}
// //                   >
// //                     {count}
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}

// //       {/* Placeholder for Huffman Tree or encoded output visualization */}
// //       <div
// //         style={{
// //           marginTop: '40px',
// //           minHeight: '150px',
// //           border: '1px solid #ccc',
// //           borderRadius: '6px',
// //           padding: '15px',
// //           backgroundColor: '#fff',
// //           textAlign: 'center',
// //           color: '#888',
// //           fontStyle: 'italic',
// //         }}
// //       >
// //         Visualization will appear here after integrating the backend.
// //       </div>
// //     </div>
// //   );
// // }

// // export default Huffman;
// import { useState } from 'react';

// function Huffman() {
//   const [text, setText] = useState('');
//   const [frequency, setFrequency] = useState({});
//   const [huffmanTree, setHuffmanTree] = useState(null);
//   const [huffmanCodes, setHuffmanCodes] = useState({});
//   const [encodedText, setEncodedText] = useState('');
//   const [error, setError] = useState('');

//   // Calculate frequency of characters in the text input
//   const getFrequency = (str) => {
//     const freq = {};
//     for (const ch of str) {
//       freq[ch] = (freq[ch] || 0) + 1;
//     }
//     return freq;
//   };

//   // Node class for Huffman Tree
//   class HuffmanNode {
//     constructor(char, freq, left = null, right = null) {
//       this.char = char;
//       this.freq = freq;
//       this.left = left;
//       this.right = right;
//     }
//   }

//   // Build Huffman Tree
//   const buildHuffmanTree = (freq) => {
//     const nodes = [];
//     for (const [char, count] of Object.entries(freq)) {
//       nodes.push(new HuffmanNode(char, count));
//     }

//     while (nodes.length > 1) {
//       nodes.sort((a, b) => a.freq - b.freq);
//       const left = nodes.shift();
//       const right = nodes.shift();
//       const merged = new HuffmanNode(null, left.freq + right.freq, left, right);
//       nodes.push(merged);
//     }

//     return nodes[0];
//   };

//   // Generate Huffman Codes
//   const generateCodes = (node, prefix = '', codes = {}) => {
//     if (node.char !== null) {
//       codes[node.char] = prefix;
//       return;
//     }
//     generateCodes(node.left, prefix + '0', codes);
//     generateCodes(node.right, prefix + '1', codes);
//     return codes;
//   };

//   // Encode text using Huffman codes
//   const encodeText = (text, codes) => {
//     return text.split('').map(char => codes[char]).join('');
//   };

//   const handleGenerate = () => {
//     if (!text.trim()) {
//       setError('Please enter some text!');
//       setFrequency({});
//       setHuffmanTree(null);
//       setHuffmanCodes({});
//       setEncodedText('');
//       return;
//     }
    
//     setError('');
//     const freq = getFrequency(text);
//     setFrequency(freq);
    
//     const tree = buildHuffmanTree(freq);
//     setHuffmanTree(tree);
    
//     const codes = generateCodes(tree);
//     setHuffmanCodes(codes);
    
//     const encoded = encodeText(text, codes);
//     setEncodedText(encoded);
//   };

//   // Render Huffman Tree visually
//   const renderTree = (node, level = 0) => {
//     if (!node) return null;
    
//     const indent = ' '.repeat(level * 4);
//     if (node.char !== null) {
//       return (
//         <div key={`${node.char}-${level}`} style={{ marginLeft: `${level * 20}px` }}>
//           {indent}Char: {node.char === ' ' ? '(space)' : node.char}, Freq: {node.freq}
//         </div>
//       );
//     }
    
//     return (
//       <div key={`node-${level}`}>
//         <div style={{ marginLeft: `${level * 20}px` }}>
//           {indent}Freq: {node.freq}
//         </div>
//         {renderTree(node.left, level + 1)}
//         {renderTree(node.right, level + 1)}
//       </div>
//     );
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
//       <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
//         Huffman Coding Visualizer
//       </h2>

//       <div style={{ marginBottom: '20px' }}>
//         <label style={{ fontWeight: 'bold' }}>
//           Enter text to encode:
//           <br />
//           <textarea
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             rows={5}
//             cols={60}
//             placeholder="Enter text here..."
//             style={{ 
//               fontSize: '16px', 
//               padding: '8px', 
//               borderRadius: '5px',
//               width: '100%',
//               boxSizing: 'border-box'
//             }}
//           />
//         </label>
//       </div>

//       <button
//         onClick={handleGenerate}
//         style={{
//           backgroundColor: '#007bff',
//           color: 'white',
//           padding: '12px 25px',
//           border: 'none',
//           borderRadius: '6px',
//           cursor: 'pointer',
//           fontSize: '16px',
//           marginBottom: '20px'
//         }}
//       >
//         Generate Huffman Coding
//       </button>

//       {error && (
//         <p style={{ color: 'red', marginTop: '15px', fontWeight: 'bold' }}>
//           {error}
//         </p>
//       )}

//       {Object.keys(frequency).length > 0 && (
//         <div
//           style={{
//             marginTop: '30px',
//             border: '1px solid #ddd',
//             borderRadius: '6px',
//             padding: '15px',
//             backgroundColor: '#f7f7f7',
//             boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
//           }}
//         >
//           <h3 style={{ marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
//             Frequency Table
//           </h3>
//           <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//             <thead>
//               <tr>
//                 <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left', padding: '8px' }}>
//                   Character
//                 </th>
//                 <th style={{ borderBottom: '1px solid #ccc', textAlign: 'right', padding: '8px' }}>
//                   Count
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {Object.entries(frequency).map(([char, count]) => (
//                 <tr key={char}>
//                   <td style={{ borderBottom: '1px solid #eee', padding: '8px', fontWeight: 'bold' }}>
//                     {char === ' ' ? '(space)' : char}
//                   </td>
//                   <td style={{ borderBottom: '1px solid #eee', padding: '8px', textAlign: 'right' }}>
//                     {count}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {huffmanTree && (
//         <div
//           style={{
//             marginTop: '30px',
//             border: '1px solid #ddd',
//             borderRadius: '6px',
//             padding: '15px',
//             backgroundColor: '#f7f7f7',
//             boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
//           }}
//         >
//           <h3 style={{ marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
//             Huffman Tree Structure
//           </h3>
//           <div style={{ fontFamily: 'monospace', whiteSpace: 'pre' }}>
//             {renderTree(huffmanTree)}
//           </div>
//         </div>
//       )}

//       {Object.keys(huffmanCodes).length > 0 && (
//         <div
//           style={{
//             marginTop: '30px',
//             border: '1px solid #ddd',
//             borderRadius: '6px',
//             padding: '15px',
//             backgroundColor: '#f7f7f7',
//             boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
//           }}
//         >
//           <h3 style={{ marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
//             Huffman Codes
//           </h3>
//           <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//             <thead>
//               <tr>
//                 <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left', padding: '8px' }}>
//                   Character
//                 </th>
//                 <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left', padding: '8px' }}>
//                   Code
//                 </th>
//                 <th style={{ borderBottom: '1px solid #ccc', textAlign: 'right', padding: '8px' }}>
//                   Code Length
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {Object.entries(huffmanCodes).map(([char, code]) => (
//                 <tr key={char}>
//                   <td style={{ borderBottom: '1px solid #eee', padding: '8px', fontWeight: 'bold' }}>
//                     {char === ' ' ? '(space)' : char}
//                   </td>
//                   <td style={{ borderBottom: '1px solid #eee', padding: '8px', fontFamily: 'monospace' }}>
//                     {code}
//                   </td>
//                   <td style={{ borderBottom: '1px solid #eee', padding: '8px', textAlign: 'right' }}>
//                     {code.length}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {encodedText && (
//         <div
//           style={{
//             marginTop: '30px',
//             border: '1px solid #ddd',
//             borderRadius: '6px',
//             padding: '15px',
//             backgroundColor: '#f7f7f7',
//             boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
//           }}
//         >
//           <h3 style={{ marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
//             Encoded Text
//           </h3>
//           <div style={{ 
//             backgroundColor: '#fff', 
//             padding: '15px', 
//             borderRadius: '5px',
//             overflowWrap: 'break-word',
//             fontFamily: 'monospace'
//           }}>
//             {encodedText}
//           </div>
//           <div style={{ marginTop: '10px', color: '#555' }}>
//             Original size: {text.length * 8} bits (assuming 8 bits per character)
//             <br />
//             Compressed size: {encodedText.length} bits
//             <br />
//             Compression ratio: {((encodedText.length / (text.length * 8)) * 100).toFixed(2)}%
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Huffman;








import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function HuffmanVisualizer() {
  const [text, setText] = useState('');
  const [frequency, setFrequency] = useState({});
  const [huffmanTree, setHuffmanTree] = useState(null);
  const [huffmanCodes, setHuffmanCodes] = useState({});
  const [encodedText, setEncodedText] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('visualization');
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [theme, setTheme] = useState('cyberpunk');

  const themes = {
    cyberpunk: {
      primary: '#ff2a6d',
      secondary: '#05d9e8',
      background: '#0d0221',
      text: '#d1f7ff',
      accent: '#f6019d'
    },
    forest: {
      primary: '#2a9d8f',
      secondary: '#e9c46a',
      background: '#264653',
      text: '#f8f9fa',
      accent: '#e76f51'
    },
    sunset: {
      primary: '#ff7b25',
      secondary: '#ffb563',
      background: '#2a2d34',
      text: '#faf3dd',
      accent: '#ff4e50'
    }
  };

  // Calculate frequency of characters in the text input
  const getFrequency = (str) => {
    const freq = {};
    for (const ch of str) {
      freq[ch] = (freq[ch] || 0) + 1;
    }
    return freq;
  };

  // Node class for Huffman Tree
  class HuffmanNode {
    constructor(char, freq, left = null, right = null) {
      this.char = char;
      this.freq = freq;
      this.left = left;
      this.right = right;
    }
  }

  // Build Huffman Tree with animation simulation
  const buildHuffmanTree = (freq) => {
    const nodes = [];
    for (const [char, count] of Object.entries(freq)) {
      nodes.push(new HuffmanNode(char, count));
    }

    while (nodes.length > 1) {
      nodes.sort((a, b) => a.freq - b.freq);
      const left = nodes.shift();
      const right = nodes.shift();
      const merged = new HuffmanNode(null, left.freq + right.freq, left, right);
      nodes.push(merged);
    }

    return nodes[0];
  };

  // Generate Huffman Codes
  const generateCodes = (node, prefix = '', codes = {}) => {
    if (node.char !== null) {
      codes[node.char] = prefix;
      return;
    }
    generateCodes(node.left, prefix + '0', codes);
    generateCodes(node.right, prefix + '1', codes);
    return codes;
  };

  // Encode text using Huffman codes
  const encodeText = (text, codes) => {
    return text.split('').map(char => codes[char]).join('');
  };

  const handleGenerate = () => {
    if (!text.trim()) {
      setError('Please enter some text!');
      setFrequency({});
      setHuffmanTree(null);
      setHuffmanCodes({});
      setEncodedText('');
      return;
    }
    
    setError('');
    const freq = getFrequency(text);
    setFrequency(freq);
    
    const tree = buildHuffmanTree(freq);
    setHuffmanTree(tree);
    
    const codes = generateCodes(tree);
    setHuffmanCodes(codes);
    
    const encoded = encodeText(text, codes);
    setEncodedText(encoded);
  };

  // Visual tree rendering with SVG
  const renderTreeSVG = (node, x = 400, y = 80, dx = 200, dy = 80, level = 0) => {
    if (!node) return null;
    
    const circleRadius = 30;
    const textOffset = node.char ? 0 : 10;
    
    return (
      <g key={`node-${x}-${y}`}>
        {/* Draw the node */}
        <circle
          cx={x}
          cy={y}
          r={circleRadius}
          fill={themes[theme].primary}
          stroke={themes[theme].accent}
          strokeWidth="2"
        />
        <text
          x={x}
          y={y + 5}
          textAnchor="middle"
          fill={themes[theme].text}
          fontSize="12"
          fontWeight="bold"
        >
          {node.char ? (node.char === ' ' ? '␣' : node.char) : node.freq}
        </text>
        
        {/* Draw connections to children */}
        {node.left && (
          <>
            <line
              x1={x}
              y1={y + circleRadius}
              x2={x - dx}
              y2={y + dy - circleRadius}
              stroke={themes[theme].secondary}
              strokeWidth="2"
            />
            <text
              x={x - dx/2}
              y={y + dy/2}
              textAnchor="middle"
              fill={themes[theme].accent}
              fontSize="10"
            >
              0
            </text>
            {renderTreeSVG(node.left, x - dx, y + dy, dx * 0.6, dy, level + 1)}
          </>
        )}
        
        {node.right && (
          <>
            <line
              x1={x}
              y1={y + circleRadius}
              x2={x + dx}
              y2={y + dy - circleRadius}
              stroke={themes[theme].secondary}
              strokeWidth="2"
            />
            <text
              x={x + dx/2}
              y={y + dy/2}
              textAnchor="middle"
              fill={themes[theme].accent}
              fontSize="10"
            >
              1
            </text>
            {renderTreeSVG(node.right, x + dx, y + dy, dx * 0.6, dy, level + 1)}
          </>
        )}
      </g>
    );
  };

  // Animated binary visualization
  const BinaryAnimation = ({ binary }) => {
    const [animatedBinary, setAnimatedBinary] = useState('');
    
    useEffect(() => {
      let current = '';
      let i = 0;
      
      const interval = setInterval(() => {
        if (i < binary.length) {
          current += binary[i];
          setAnimatedBinary(current);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 100 / animationSpeed);
      
      return () => clearInterval(interval);
    }, [binary, animationSpeed]);
    
    return (
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        gap: '4px',
        justifyContent: 'center'
      }}>
        {animatedBinary.split('').map((bit, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '4px',
              background: bit === '1' ? themes[theme].primary : themes[theme].secondary,
              color: themes[theme].text,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: 'bold'
            }}
          >
            {bit}
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div style={{ 
      padding: '20px',
      fontFamily: "'Inter', sans-serif",
      maxWidth: '1200px',
      margin: '0 auto',
      background: themes[theme].background,
      color: themes[theme].text,
      minHeight: '100vh'
    }}>
      <motion.h1 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ 
          textAlign: 'center', 
          marginBottom: '30px',
          color: themes[theme].primary,
          fontSize: '2.5rem',
          textShadow: `0 0 10px ${themes[theme].accent}`,
          fontWeight: '800',
          letterSpacing: '2px'
        }}
      >
        ✨ Huffman Code Wizard ✨
      </motion.h1>

      <div style={{ 
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          {Object.keys(themes).map(t => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              style={{
                background: themes[t].primary,
                color: themes[t].text,
                border: 'none',
                padding: '8px 12px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: 'bold',
                opacity: theme === t ? 1 : 0.7
              }}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label style={{ fontWeight: 'bold' }}>Speed:</label>
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.5"
            value={animationSpeed}
            onChange={(e) => setAnimationSpeed(e.target.value)}
            style={{ width: '100px' }}
          />
          <span>{animationSpeed}x</span>
        </div>
      </div>

      <div style={{ 
        background: `linear-gradient(145deg, ${themes[theme].background}, ${themes[theme].accent}20)`,
        borderRadius: '16px',
        padding: '25px',
        boxShadow: `0 8px 32px ${themes[theme].accent}20`,
        marginBottom: '30px'
      }}>
        <label style={{ 
          display: 'block',
          marginBottom: '15px',
          fontWeight: 'bold',
          fontSize: '1.2rem'
        }}>
          Enter your magical text:
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          placeholder="Type something amazing here..."
          style={{ 
            width: '100%',
            padding: '15px',
            borderRadius: '12px',
            border: `2px solid ${themes[theme].primary}`,
            background: themes[theme].background,
            color: themes[theme].text,
            fontSize: '16px',
            resize: 'vertical',
            outline: 'none',
            boxShadow: `0 0 0 4px ${themes[theme].primary}20`
          }}
        />
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGenerate}
          style={{
            background: `linear-gradient(45deg, ${themes[theme].primary}, ${themes[theme].accent})`,
            color: themes[theme].text,
            padding: '15px 30px',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            marginTop: '20px',
            display: 'block',
            width: '100%',
            boxShadow: `0 4px 15px ${themes[theme].primary}80`
          }}
        >
          🪄 Enchant Text with Huffman Magic 🪄
        </motion.button>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: themes[theme].accent,
            color: themes[theme].text,
            padding: '15px',
            borderRadius: '12px',
            marginBottom: '20px',
            fontWeight: 'bold'
          }}
        >
          {error}
        </motion.div>
      )}

      <div style={{ 
        display: 'flex',
        gap: '15px',
        marginBottom: '20px',
        borderBottom: `1px solid ${themes[theme].primary}50`,
        paddingBottom: '10px'
      }}>
        {['visualization', 'frequency', 'codes', 'results'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              background: activeTab === tab ? themes[theme].primary : 'transparent',
              color: themes[theme].text,
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              textTransform: 'capitalize',
              transition: 'all 0.3s'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'frequency' && Object.keys(frequency).length > 0 && (
            <div style={{ 
              background: `linear-gradient(145deg, ${themes[theme].background}, ${themes[theme].accent}20)`,
              borderRadius: '16px',
              padding: '25px',
              boxShadow: `0 8px 32px ${themes[theme].accent}20`,
              marginBottom: '30px'
            }}>
              <h3 style={{ 
                marginBottom: '20px',
                color: themes[theme].primary,
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>🔢 Character Frequency Analysis</span>
              </h3>
              
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                gap: '15px'
              }}>
                {Object.entries(frequency).map(([char, count]) => (
                  <motion.div 
                    key={char}
                    whileHover={{ scale: 1.05 }}
                    style={{
                      background: themes[theme].accent,
                      borderRadius: '12px',
                      padding: '15px',
                      textAlign: 'center',
                      boxShadow: `0 4px 8px ${themes[theme].primary}30`
                    }}
                  >
                    <div style={{ 
                      fontSize: '24px',
                      fontWeight: 'bold',
                      marginBottom: '5px'
                    }}>
                      {char === ' ' ? '␣' : char}
                    </div>
                    <div style={{ 
                      fontSize: '16px',
                      color: themes[theme].text
                    }}>
                      {count} occurrence{count !== 1 ? 's' : ''}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'codes' && Object.keys(huffmanCodes).length > 0 && (
            <div style={{ 
              background: `linear-gradient(145deg, ${themes[theme].background}, ${themes[theme].accent}20)`,
              borderRadius: '16px',
              padding: '25px',
              boxShadow: `0 8px 32px ${themes[theme].accent}20`,
              marginBottom: '30px'
            }}>
              <h3 style={{ 
                marginBottom: '20px',
                color: themes[theme].primary,
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>🔑 Huffman Code Dictionary</span>
              </h3>
              
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                gap: '15px'
              }}>
                {Object.entries(huffmanCodes).map(([char, code]) => (
                  <motion.div 
                    key={char}
                    whileHover={{ scale: 1.03 }}
                    style={{
                      background: themes[theme].background,
                      border: `2px solid ${themes[theme].primary}`,
                      borderRadius: '12px',
                      padding: '15px',
                      boxShadow: `0 4px 8px ${themes[theme].primary}20`
                    }}
                  >
                    <div style={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '10px'
                    }}>
                      <span style={{ 
                        fontWeight: 'bold',
                        fontSize: '20px'
                      }}>
                        {char === ' ' ? '␣' : char}
                      </span>
                      <span style={{ 
                        color: themes[theme].secondary,
                        fontWeight: 'bold'
                      }}>
                        {code.length} bit{code.length !== 1 ? 's' : ''}
                      </span>
                    </div>
                    <div style={{ 
                      fontFamily: 'monospace',
                      fontSize: '18px',
                      letterSpacing: '2px',
                      color: themes[theme].primary
                    }}>
                      {code}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'visualization' && huffmanTree && (
            <div style={{ 
              background: `linear-gradient(145deg, ${themes[theme].background}, ${themes[theme].accent}20)`,
              borderRadius: '16px',
              padding: '25px',
              boxShadow: `0 8px 32px ${themes[theme].accent}20`,
              marginBottom: '30px',
              overflowX: 'auto'
            }}>
              <h3 style={{ 
                marginBottom: '20px',
                color: themes[theme].primary,
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>🌳 Interactive Huffman Tree</span>
              </h3>
              
              <div style={{ 
                width: '100%',
                overflow: 'auto',
                padding: '20px 0'
              }}>
                <svg 
                  width="800" 
                  height="500" 
                  viewBox="0 0 800 500"
                  style={{ 
                    display: 'block',
                    margin: '0 auto',
                    background: themes[theme].background,
                    borderRadius: '12px'
                  }}
                >
                  {renderTreeSVG(huffmanTree)}
                </svg>
              </div>
              
              <div style={{
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'center',
                gap: '20px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: themes[theme].primary
                  }}></div>
                  <span>Node (Character/Frequency)</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <div style={{
                    width: '16px',
                    height: '2px',
                    background: themes[theme].secondary
                  }}></div>
                  <span>Connection (0/1)</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'results' && encodedText && (
            <div style={{ 
              background: `linear-gradient(145deg, ${themes[theme].background}, ${themes[theme].accent}20)`,
              borderRadius: '16px',
              padding: '25px',
              boxShadow: `0 8px 32px ${themes[theme].accent}20`
            }}>
              <h3 style={{ 
                marginBottom: '20px',
                color: themes[theme].primary,
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>🔮 Encoding Results</span>
              </h3>
              
              <div style={{ 
                background: themes[theme].background,
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '20px',
                border: `1px solid ${themes[theme].primary}50`
              }}>
                <h4 style={{ 
                  marginBottom: '15px',
                  color: themes[theme].secondary
                }}>
                  Binary Representation
                </h4>
                <BinaryAnimation binary={encodedText} />
              </div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
                marginTop: '30px'
              }}>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  style={{
                    background: themes[theme].accent,
                    borderRadius: '12px',
                    padding: '20px',
                    boxShadow: `0 4px 15px ${themes[theme].primary}30`
                  }}
                >
                  <div style={{ 
                    fontSize: '14px',
                    marginBottom: '5px',
                    opacity: 0.8
                  }}>
                    Original Size
                  </div>
                  <div style={{ 
                    fontSize: '24px',
                    fontWeight: 'bold'
                  }}>
                    {text.length * 8} bits
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  style={{
                    background: themes[theme].primary,
                    borderRadius: '12px',
                    padding: '20px',
                    boxShadow: `0 4px 15px ${themes[theme].primary}30`
                  }}
                >
                  <div style={{ 
                    fontSize: '14px',
                    marginBottom: '5px',
                    opacity: 0.8
                  }}>
                    Compressed Size
                  </div>
                  <div style={{ 
                    fontSize: '24px',
                    fontWeight: 'bold'
                  }}>
                    {encodedText.length} bits
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  style={{
                    background: themes[theme].secondary,
                    borderRadius: '12px',
                    padding: '20px',
                    boxShadow: `0 4px 15px ${themes[theme].primary}30`
                  }}
                >
                  <div style={{ 
                    fontSize: '14px',
                    marginBottom: '5px',
                    opacity: 0.8
                  }}>
                    Compression Ratio
                  </div>
                  <div style={{ 
                    fontSize: '24px',
                    fontWeight: 'bold'
                  }}>
                    {((encodedText.length / (text.length * 8)) * 100).toFixed(2)}%
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default HuffmanVisualizer;
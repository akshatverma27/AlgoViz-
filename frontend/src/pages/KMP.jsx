import { useState } from 'react';

function KMP() {
  const [text, setText] = useState('');
  const [pattern, setPattern] = useState('');
  const [lps, setLps] = useState([]);
  const [step, setStep] = useState(0);
  const [error, setError] = useState('');
  const [isVisualizing, setIsVisualizing] = useState(false);

  const computeLPSArray = (pat) => {
    const lpsArr = new Array(pat.length).fill(0);
    let len = 0;
    let i = 1;

    const steps = [];

    while (i < pat.length) {
      if (pat[i] === pat[len]) {
        len++;
        lpsArr[i] = len;
        steps.push({ 
          i, 
          len, 
          lps: [...lpsArr],
          description: `Match found at position ${i}: pattern[${i}] (${pat[i]}) == pattern[${len-1}] (${pat[len-1]}). Set LPS[${i}] = ${len}.`
        });
        i++;
      } else {
        if (len !== 0) {
          steps.push({ 
            i, 
            len, 
            lps: [...lpsArr],
            description: `Mismatch at position ${i}. Using LPS[${len-1}] (${lpsArr[len-1]}) to skip comparisons.`
          });
          len = lpsArr[len - 1];
        } else {
          lpsArr[i] = 0;
          steps.push({ 
            i, 
            len, 
            lps: [...lpsArr],
            description: `Mismatch at position ${i} with len=0. Set LPS[${i}] = 0 and move forward.`
          });
          i++;
        }
      }
    }
    return steps;
  };

  const getFrequency = (str) => {
    const freq = {};
    for (const ch of str) {
      freq[ch] = (freq[ch] || 0) + 1;
    }
    return freq;
  };

  const handleVisualize = () => {
    if (!pattern) {
      setError('Please enter a pattern!');
      return;
    }
    setError('');
    setIsVisualizing(true);
    const steps = computeLPSArray(pattern);
    setLps(steps);
    setStep(0);
  };

  const nextStep = () => {
    if (step < lps.length - 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const resetVisualization = () => {
    setIsVisualizing(false);
    setLps([]);
    setStep(0);
  };

  const frequency = getFrequency(pattern);

  return (
    <div style={{ 
      padding: '2rem',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      maxWidth: '1200px',
      margin: '0 auto',
      color: '#2d3748'
    }}>
      <header style={{
        textAlign: 'center',
        marginBottom: '3rem',
        paddingBottom: '1.5rem',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '800',
          color: '#1a365d',
          marginBottom: '0.5rem',
          background: 'linear-gradient(90deg, #4299e1, #667eea)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          KMP Algorithm Visualizer
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#4a5568',
          maxWidth: '700px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Visualize the Knuth-Morris-Pratt string matching algorithm with step-by-step explanations and interactive controls.
        </p>
      </header>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        <div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ 
              display: 'block',
              fontWeight: '600',
              marginBottom: '0.5rem',
              color: '#2d3748'
            }}>
              Text Input
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={5}
              style={{ 
                width: '100%',
                fontSize: '1rem',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid #cbd5e0',
                transition: 'all 0.2s',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                minHeight: '120px'
              }}
              placeholder="Enter the text to search through..."
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ 
              display: 'block',
              fontWeight: '600',
              marginBottom: '0.5rem',
              color: '#2d3748'
            }}>
              Pattern to Search
            </label>
            <input
              type="text"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              style={{
                width: '100%',
                fontSize: '1rem',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid #cbd5e0',
                transition: 'all 0.2s',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
              }}
              placeholder="Enter the pattern to search for..."
            />
          </div>

          <div style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '1.5rem'
          }}>
            <button
              onClick={handleVisualize}
              style={{
                backgroundColor: '#4299e1',
                color: 'white',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'all 0.2s',
                boxShadow: '0 2px 5px rgba(66, 153, 225, 0.3)',
                ':hover': {
                  backgroundColor: '#3182ce',
                  transform: 'translateY(-1px)'
                }
              }}
            >
              Visualize LPS
            </button>

            {isVisualizing && (
              <button
                onClick={resetVisualization}
                style={{
                  backgroundColor: '#e53e3e',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  border: 'none',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '600',
                  transition: 'all 0.2s',
                  boxShadow: '0 2px 5px rgba(229, 62, 62, 0.3)'
                }}
              >
                Reset
              </button>
            )}
          </div>

          {error && (
            <div style={{
              marginTop: '1rem',
              padding: '0.75rem',
              backgroundColor: '#fff5f5',
              borderLeft: '4px solid #f56565',
              color: '#c53030',
              borderRadius: '0.25rem'
            }}>
              {error}
            </div>
          )}
        </div>

        <div>
          <div style={{
            backgroundColor: '#f7fafc',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              marginBottom: '1rem',
              color: '#2d3748',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{
                display: 'inline-block',
                width: '24px',
                height: '24px',
                backgroundColor: '#4299e1',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem'
              }}>i</span>
              Pattern Information
            </h3>

            {pattern.length > 0 ? (
              <>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#4a5568',
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Character Frequency
                  </h4>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {Object.entries(frequency).map(([char, count]) => (
                      <div key={char} style={{
                        backgroundColor: '#ebf8ff',
                        padding: '0.5rem 0.75rem',
                        borderRadius: '0.375rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <span style={{
                          fontWeight: '700',
                          color: '#2b6cb0'
                        }}>
                          {char === ' ' ? '␣' : char}
                        </span>
                        <span style={{
                          fontSize: '0.75rem',
                          color: '#4a5568'
                        }}>
                          {count} {count === 1 ? 'time' : 'times'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 style={{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#4a5568',
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Pattern Length
                  </h4>
                  <div style={{
                    backgroundColor: '#ebf8ff',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    textAlign: 'center'
                  }}>
                    <span style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: '#2b6cb0'
                    }}>
                      {pattern.length}
                    </span>
                    <span style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      color: '#4a5568'
                    }}>
                      characters
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <div style={{
                padding: '1.5rem',
                textAlign: 'center',
                color: '#a0aec0',
                fontStyle: 'italic'
              }}>
                Enter a pattern to see detailed information
              </div>
            )}
          </div>
        </div>
      </div>

      {isVisualizing && (
        <div style={{
          marginTop: '2rem',
          backgroundColor: 'white',
          borderRadius: '0.75rem',
          padding: '2rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#1a365d'
            }}>
              LPS Array Construction
            </h2>
            <div style={{
              backgroundColor: '#ebf8ff',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: '600',
              color: '#2b6cb0'
            }}>
              Step {step + 1} of {lps.length}
            </div>
          </div>

          <div style={{
            marginBottom: '2rem',
            backgroundColor: '#f8fafc',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            borderLeft: '4px solid #4299e1'
          }}>
            <p style={{
              margin: 0,
              color: '#4a5568',
              lineHeight: '1.6'
            }}>
              {lps[step].description}
            </p>
          </div>

          <div style={{
            marginBottom: '2rem'
          }}>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#4a5568',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Pattern Visualization
            </h3>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.5rem',
              marginBottom: '1.5rem',
              flexWrap: 'wrap'
            }}>
              {pattern.split('').map((ch, idx) => (
                <div
                  key={idx}
                  style={{
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '0.375rem',
                    border: idx === lps[step].i ? '2px solid #48bb78' : '1px solid #cbd5e0',
                    backgroundColor: idx === lps[step].i ? '#f0fff4' : 'white',
                    position: 'relative',
                    transition: 'all 0.2s'
                  }}
                >
                  <span style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#2d3748'
                  }}>
                    {ch}
                  </span>
                  <span style={{
                    position: 'absolute',
                    bottom: '-20px',
                    fontSize: '0.75rem',
                    color: '#718096'
                  }}>
                    [{idx}]
                  </span>
                  {idx === lps[step].i && (
                    <span style={{
                      position: 'absolute',
                      top: '-25px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: '#48bb78',
                      backgroundColor: '#f0fff4',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '9999px',
                      border: '1px solid #48bb78'
                    }}>
                      Current (i)
                    </span>
                  )}
                </div>
              ))}
            </div>

            <h3 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#4a5568',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              LPS Array Values
            </h3>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.5rem',
              flexWrap: 'wrap'
            }}>
              {lps[step].lps.map((val, idx) => (
                <div
                  key={idx}
                  style={{
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '0.375rem',
                    border: idx === lps[step].len - 1 ? '2px solid #f56565' : '1px solid #cbd5e0',
                    backgroundColor: idx === lps[step].len - 1 ? '#fff5f5' : '#edf2f7',
                    position: 'relative',
                    transition: 'all 0.2s'
                  }}
                >
                  <span style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: idx === lps[step].len - 1 ? '#c53030' : '#2d3748'
                  }}>
                    {val}
                  </span>
                  <span style={{
                    position: 'absolute',
                    bottom: '-20px',
                    fontSize: '0.75rem',
                    color: '#718096'
                  }}>
                    [{idx}]
                  </span>
                  {idx === lps[step].len - 1 && (
                    <span style={{
                      position: 'absolute',
                      top: '-25px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: '#f56565',
                      backgroundColor: '#fff5f5',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '9999px',
                      border: '1px solid #f56565'
                    }}>
                      Current (len)
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '2rem'
          }}>
            <button
              onClick={prevStep}
              disabled={step === 0}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: step === 0 ? 'not-allowed' : 'pointer',
                backgroundColor: step === 0 ? '#e2e8f0' : '#4299e1',
                color: step === 0 ? '#a0aec0' : 'white',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                ':hover': {
                  backgroundColor: step === 0 ? '#e2e8f0' : '#3182ce'
                }
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              Previous
            </button>
            <button
              onClick={nextStep}
              disabled={step === lps.length - 1}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: step === lps.length - 1 ? 'not-allowed' : 'pointer',
                backgroundColor: step === lps.length - 1 ? '#e2e8f0' : '#4299e1',
                color: step === lps.length - 1 ? '#a0aec0' : 'white',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                ':hover': {
                  backgroundColor: step === lps.length - 1 ? '#e2e8f0' : '#3182ce'
                }
              }}
            >
              Next
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      )}

      {isVisualizing && lps.length > 0 && step === lps.length - 1 && (
        <div style={{
          marginTop: '2rem',
          backgroundColor: '#f0fff4',
          padding: '1.5rem',
          borderRadius: '0.5rem',
          borderLeft: '4px solid #48bb78'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#2f855a',
            marginBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2f855a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            LPS Array Complete!
          </h3>
          <p style={{
            margin: 0,
            color: '#38a169',
            lineHeight: '1.6'
          }}>
            The LPS (Longest Prefix Suffix) array has been successfully computed for your pattern. 
            You can now use this array in the KMP algorithm to efficiently search for the pattern in your text.
          </p>
        </div>
      )}
    </div>
  );
}

export default KMP;
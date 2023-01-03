import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import logo from './logo.ico';
import 'winbox/dist/css/winbox.min.css';
import 'winbox/dist/css/themes/modern.min.css'; // optional
import 'winbox/dist/css/themes/white.min.css'; // optional
import WinBox from 'react-winbox';

const demoJsxTxt = `
import React, {useEffect, useRef, useState} from 'react';
import logo from './logo.ico';
import 'winbox/dist/css/winbox.min.css';
import 'winbox/dist/css/themes/modern.min.css'; // optional
import 'winbox/dist/css/themes/white.min.css'; // optional
import WinBox from 'react-winbox';

const IconsTable = [{
  class: 'wb-gh',
  image: 'https://github.com/favicon.ico',
  click: () => {
    window.open('https://github.com/rickonono3/react-winbox', '_blank');
  },
}, {
  class: 'wb-logo',
  image: logo,
  click: () => alert('Hello!'),
}];

function App() {
  const ref = useRef();
  const [title, setTitle] = useState('Hello');
  const [top, setTop] = useState(30);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(250);
  const [bottom, setBottom] = useState(50);
  const [theme, setTheme] = useState('modern');
  const [icon, setIcon] = useState(logo);
  const [icons, setIcons] = useState([0]);
  const [noMin, setNoMin] = useState(false);
  const [noMax, setNoMax] = useState(false);
  const [noFull, setNoFull] = useState(false);
  const [noClose, setNoClose] = useState(false);
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [position, setPosition] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const refreshInfo = () => {
    setPosition(ref.current?.getPosition());
    setSize(ref.current?.getSize());
  };
  return (
    <div className="App">
      <WinBox noMove noResize noClose noFull noMax noMin noHeader width={500} height={150} x={0} y={0}>
        <div style={{userSelect: 'none'}}>
          <center><h3>Fixed window with <code>noHeader</code> and <code>noResize</code></h3></center>
          <center>Click here to blur another</center>
          <center>(listen <code>onblur</code> and <code>onfocus</code> to change some props dynamically)</center>
        </div>
      </WinBox>
      {open && (
        <WinBox
          ref={ref}
          title={title}
          icon={icon}
          noMin={noMin}
          noMax={noMax}
          noFull={noFull}
          noClose={noClose}
          width={Math.min(document.body.clientWidth, 700)}
          height={Math.min(document.body.clientHeight, 500)}
          x="center"
          y="center"
          top={top}
          right={right}
          bottom={bottom}
          left={left}
          hide={hide}
          className={theme ? theme : ''}
          onMaximize={refreshInfo}
          onMinimize={refreshInfo}
          onRestore={refreshInfo}
          onMove={refreshInfo}
          onResize={refreshInfo}
          onclose={() => {
            // destroying actions while \`onclose\` must be wrapped within \`setTimeout\`
            setTimeout(() => {
              setOpen(false);
              setPosition(0);
              setSize(0);
            });
          }}
          onfocus={() => setIsFocus(true)}
          onblur={() => setIsFocus(false)}
          customControls={icons.map(i => IconsTable[i])}
        >
          <div style={{padding: 10}}>
            <h3 style={{margin: 0}}>React Winbox Demo with Title "{title}"</h3>
            <hr />
            <DemoDoc />
          </div>
        </WinBox>
      )}
    </div>
  );
};

export default App;
`;
const demoCssTxt = `
.wb-gh,
.wb-logo {
  background-size: 20px;
}
`;

const IconsTable = [{
  class: 'wb-gh',
  image: 'https://github.com/favicon.ico',
  click: () => {
    window.open('https://github.com/rickonono3/react-winbox', '_blank');
  },
}, {
  class: 'wb-logo',
  image: logo,
  click: () => alert('Hello!'),
}];

function App() {
  const ref = useRef();
  const [title, setTitle] = useState('Hello');
  const [top, setTop] = useState(30);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(250);
  const [bottom, setBottom] = useState(50);
  const [theme, setTheme] = useState('modern');
  const [icon, setIcon] = useState(logo);
  const [icons, setIcons] = useState([0]);
  const [noMin, setNoMin] = useState(false);
  const [noMax, setNoMax] = useState(false);
  const [noFull, setNoFull] = useState(false);
  const [noClose, setNoClose] = useState(false);
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [position, setPosition] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const refreshInfo = () => {
    setPosition(ref.current?.getPosition());
    setSize(ref.current?.getSize());
  };
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 600);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{
          width: '100%',
          overflow: 'hidden',
          wordBreak: 'keep-all',
          whiteSpace: 'nowrap',
          color: 'gray',
        }}>
          React-Winbox&emsp;React-Winbox&emsp;React-Winbox&emsp;React-Winbox&emsp;React-Winbox&emsp;React-Winbox&emsp;React-Winbox&emsp;React-Winbox&emsp;React-Winbox&emsp;React-Winbox&emsp;React-Winbox&emsp;React-Winbox&emsp;React-Winbox&emsp;React-Winbox&emsp;React-Winbox&emsp;React-Winbox&emsp;React-Winbox&emsp;React-Winbox&emsp;React-Winbox&emsp;React-Winbox&emsp;React-Winbox&emsp;React-Winbox&emsp;
        </h3>
        <div style={{
          textAlign: 'left',
          fontSize: 16,
          position: 'absolute',
          bottom: 10,
          left: 3,
        }}>
          <li>Developed by <a target="_blank" href="https://github.com/rickonono3/react-winbox" rel="noreferrer">https://github.com/rickonono3/react-winbox</a></li>
          <li>Powered by <a target="_blank" href="https://github.com/nextapps-de/winbox" rel="noreferrer">https://github.com/nextapps-de/winbox</a></li>
        </div>
      </header>
      <main className="Toolbar">
        <div style={{
          display: 'flex',
        }}>
          <button style={{flex: 1}} onClick={() => {
            setOpen(!open);
            setIsFocus(true);
          }}>{open ? 'Close' : 'Open'}</button>
          <button style={{flex: 1}} onClick={() => {
            setHide(!hide);
          }}>{hide ? 'Show' : 'Hide'}</button>
        </div>
        <div>
          <div className="title">Status:</div>
          <table>
            <tbody>
              <tr><td width={80}> x</td><td>{position ? position.x : '-'}</td></tr>
              <tr><td> y</td><td>{position ? position.y : '-'}</td></tr>
              <tr><td> width</td><td>{size ? size.width : '-'}</td></tr>
              <tr><td> height</td><td>{size ? size.height : '-'}</td></tr>
              <tr><td> hidden</td><td>{open ? hide.toString() : '-'}</td></tr>
              <tr><td> focused</td><td>{open ? isFocus.toString() : '-'}</td></tr>
            </tbody>
          </table>
        </div>
        <div>
          <div className="title">Boundary:</div>
          <table>
            <tbody>
              <tr><td width={80}>top: </td><td><input type="number" step={1} value={top} onChange={e => setTop(e.target.value)} /></td></tr>
              <tr><td>right: </td><td><input type="number" step={1} value={right} onChange={e => setRight(e.target.value)} /></td></tr>
              <tr><td>bottom: </td><td><input type="number" step={1} value={bottom} onChange={e => setBottom(e.target.value)} /></td></tr>
              <tr><td>left: </td><td><input type="number" step={1} value={left} onChange={e => setLeft(e.target.value)} /></td></tr>
            </tbody>
          </table>
        </div>
        <div>
          <div className="title">Settings:</div>
          <table>
            <tbody>
              <tr><td>title: </td><td><input type="text" value={title} onChange={e => setTitle(e.target.value)} /></td></tr>
              <tr><td>icon: </td><td>
                <select value={icon} onChange={e => setIcon(e.target.value)}>
                  <option value="https://github.com/favicon.ico">Github</option>
                  <option value={logo}>React</option>
                </select>
              </td></tr>
              <tr><td width={80}>className: </td><td>
                <select value={theme} onChange={e => setTheme(e.target.value)}>
                  <option value="">default (no class)</option>
                  <option value="white">white</option>
                  <option value="modern">modern</option>
                </select>
              </td></tr>
              <tr>
                <td rowSpan={2} style={{verticalAlign: 'top'}}>controls: </td>
                <td>
                  <select value={JSON.stringify(icons)} onChange={e => setIcons(JSON.parse(e.target.value))}>
                    <option value={JSON.stringify([])}>0</option>
                    <option defaultChecked value={JSON.stringify([0])}>1</option>
                    <option value={JSON.stringify([0, 1])}>2</option>
                  </select>
                </td>
              </tr>
              <tr><td>
                <label><input type="checkbox" onChange={e => setNoMin(Boolean(e.target.checked))} /> noMin</label>
                <br />
                <label><input type="checkbox" onChange={e => setNoMax(Boolean(e.target.checked))} /> noMax</label>
                <br />
                <label><input type="checkbox" onChange={e => setNoFull(Boolean(e.target.checked))} /> noFull</label>
                <br />
                <label><input type="checkbox" onChange={e => setNoClose(Boolean(e.target.checked))} /> noClose</label>
              </td></tr>
            </tbody>
          </table>
        </div>
      </main>
      <WinBox noMove noResize noClose noFull noMax noMin noHeader width={500} height={150} x={0} y={0}>
        <div style={{userSelect: 'none'}}>
          <center><h3>Fixed window with <code>noHeader</code> and <code>noResize</code></h3></center>
          <center>Click here to blur another</center>
          <center>(listen <code>onblur</code> and <code>onfocus</code> to change some props dynamically)</center>
        </div>
      </WinBox>
      {open && (
        <WinBox
          ref={ref}
          title={title}
          icon={icon}
          noMin={noMin}
          noMax={noMax}
          noFull={noFull}
          noClose={noClose}
          width={Math.min(document.body.clientWidth, 700)}
          height={Math.min(document.body.clientHeight, 500)}
          x="center"
          y="center"
          top={top}
          right={right}
          bottom={bottom}
          left={left}
          hide={hide}
          className={theme ? theme : ''}
          onMaximize={refreshInfo}
          onMinimize={refreshInfo}
          onRestore={refreshInfo}
          onMove={refreshInfo}
          onResize={refreshInfo}
          onclose={() => {
            // state changing actions while `onclose` must be wrapped within `setTimeout`
            setTimeout(() => {
              setOpen(false);
              setPosition(0);
              setSize(0);
            });
          }}
          onfocus={() => setIsFocus(true)}
          onblur={() => setIsFocus(false)}
          customControls={icons.map(i => IconsTable[i])}
        >
          <div style={{padding: 10}}>
            <h3 style={{margin: 0}}>React Winbox Demo with Title "{title}"</h3>
            <hr />
            <DemoDoc />
          </div>
        </WinBox>
      )}
    </div>
  );
};

function DemoDoc() {
  const [tab, setTab] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      window.hljs.highlightAll();
    });
  }, []);
  return (
    <div>
      <div>
        {
          ['Demo JSX (Partial)', 'Demo CSS (Partial)'].map((label, index) => (
            <div style={{
              display: 'inline-block',
              padding: '10px 15px',
              marginTop: 5,
              fontWeight: index === tab ? 'bold' : 'normal',
              background: index === tab ? '#000' : '#0000',
              color: index === tab ? 'white' : '#999',
              borderWidth: 1,
              borderColor: index === tab ? '#999' : '#9999',
              borderStyle: 'solid',
              borderBottomWidth: 0,
              borderTopLeftRadius: 3,
              borderTopRightRadius: 3,
              cursor: 'pointer',
            }} onClick={() => setTab(index)}>{label}</div>
          ))
        }
      </div>
      <div style={{borderLeft: '1px solid #999'}}>
        <section id="demoJsxTxt" style={{
          display: tab === 0 ? 'block' : 'none',
        }}>
          <pre><code className="language-jsx">{demoJsxTxt.trim()}</code></pre>
        </section>
        <section id="demoCssTxt" style={{
          display: tab === 1 ? 'block' : 'none',
        }}>
          <pre><code className="language-css">{demoCssTxt.trim()}</code></pre>
        </section>
      </div>
    </div>
  );
}

export default App;
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="output">
          <p> 0</p>
        </div>
        <div className="input">
          <div className="section-button">
            <button className="operation" type="button">
              AC
            </button>
            <button className="operation" type="button">
              +/-
            </button>
            <button className="operation" type="button">
              %
            </button>
            <button className="operation colored" type="button">
              +
            </button>
          </div>
          <div className="section-button">
            <button className="operation" type="button">
              7
            </button>
            <button className="operation" type="button">
              8
            </button>
            <button className="operation" type="button">
              9
            </button>
            <button className="operation colored" type="button">
              x
            </button>
          </div>
          <div className="section-button">
            <button className="operation" type="button">
              4
            </button>
            <button className="operation" type="button">
              5
            </button>
            <button className="operation" type="button">
              6
            </button>
            <button className="operation colored" type="button">
              -
            </button>
          </div>

          <div className="section-button">
            <button className="operation" type="button">
              1
            </button>
            <button className="operation" type="button">
              2
            </button>
            <button className="operation" type="button">
              3
            </button>
            <button className="operation colored" type="button">
              ÷
            </button>
          </div>

          <div className="section-button">
            <button className="operation zero" type="button">
              0
            </button>
            <button className="operation" type="button">
              .
            </button>
            <button className="operation colored" type="button">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

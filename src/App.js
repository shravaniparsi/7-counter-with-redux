import './App.css';
import ButtonPreview from './components/buttonPreview/buttonPreview'
import ResultPreview from './components/resultPreview/resultPreview'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        counter with redux
      </header>
      <ButtonPreview></ButtonPreview>
      <ResultPreview></ResultPreview>
    </div>
  );
}

export default App;

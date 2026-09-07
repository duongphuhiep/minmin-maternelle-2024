import Card from './Card';

function App() {
  return (
    <div class="app">
      {Array.from({ length: 168 }, (_, index) => (
        <Card key={index} year={index<=62 ? 2026 : 2027} />
      ))}
    </div>
  );
}

export default App;

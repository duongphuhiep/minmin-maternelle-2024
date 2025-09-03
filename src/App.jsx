import Card from './Card';

function App() {
  return (
    <div class="app">
      {Array.from({ length: 168 }, (_, index) => (
        <Card key={index} year={index<=62 ? 2025 : 2026} />
      ))}
    </div>
  );
}

export default App;

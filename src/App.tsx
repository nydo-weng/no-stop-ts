import Home from '@/pages/Home';
function App() {
  return (
    <div className="h-screen w-screen bg-blue-100 border-2">
      app
      {
        <Home>
          <span className="h-32 w-32 bg-blue-200 block">children in Home</span>
        </Home>
      }
    </div>
  );
}

export default App;

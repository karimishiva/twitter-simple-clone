import Sidebar from './Sidebar';
import Feed from './Feed';
import './app.css';
import Widjets from './Widjest';
function App() {
  return (
    <div className="App">

      {/* sidebar */}
      <Sidebar />
      {/* feed */}
      <Feed />
      {/* widgets */}
      <Widjets />
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./component/Navbar";
import Talk from "./component/Talk";
import PricingScreen from "./PricingScreen";
function App() {
  return (
    <div className="App">
      {/* Features Page Component */}
      <Talk></Talk>
      {/* Features Page Component */}
      {/* FAQ Page Component */}
      <PricingScreen></PricingScreen>
      {/* FAQ Page Component */}
    </div>
  );
}

export default App;

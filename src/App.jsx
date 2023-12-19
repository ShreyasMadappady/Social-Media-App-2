import HeaderMain from "./components/header/HeaderMain";
import SideMain from "./components/sidebar/SideMain";

function App() {
  return (
    <div>
      <HeaderMain />
      <div className="px-40 pt-4">
        <SideMain />
      </div>
    </div>
  );
}

export default App;

import HeaderMain from "./components/header/HeaderMain";
import Posting from "./components/main/Posting";
import Posts from "./components/main/Posts";
import SideMain from "./components/sidebar/SideMain";
import MessageMain from "./components/messeges/MessageMain";

function App() {
  return (
    <div>
      <HeaderMain />
      <div className=" px-40 pt-4 flex justify-between">
        <div className=" w-[250px]">
          <SideMain />
        </div>
        <div className="w-[400px] flex flex-col gap-4 ">
          <Posting />
          <Posts /> <Posts />
        </div>
        <div className="w-[250px]">
          <MessageMain />
        </div>
      </div>
    </div>
  );
}

export default App;

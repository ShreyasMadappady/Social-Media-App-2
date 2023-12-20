import HeaderMain from "./components/header/HeaderMain";
import Posting from "./components/main/Posting";
import Posts from "./components/main/Posts";
import SideMain from "./components/sidebar/SideMain";
import MessageMain from "./components/messeges/MessageMain";
import RequestMain from "./components/requests/RequestMain";

function App() {
  return (
    <div className="h-screen">
      <HeaderMain />
      <div className=" px-40  flex justify-between pt-20 relative">
        <div className=" w-[250px]">
          <SideMain />
        </div>
        <div className="w-[400px] flex flex-col gap-4 absolute left-1/3 overflow-y-scroll h-full scrollbar-hide ">
          <Posting />
          <Posts /> <Posts />
        </div>
        <div className="w-[250px] absolute left-2/3 overflow-y-scroll h-full scrollbar-hide">
          <MessageMain />
          <RequestMain />
        </div>
      </div>
    </div>
  );
}

export default App;
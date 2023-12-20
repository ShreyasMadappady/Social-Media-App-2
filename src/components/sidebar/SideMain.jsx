import SideBottom from "./SideBottom";
import SideTop from "./SideTop";

function SideMain() {
  return (
    <div className="flex flex-col gap-3 ">
      <SideTop />
      <SideBottom />
    </div>
  );
}

export default SideMain;

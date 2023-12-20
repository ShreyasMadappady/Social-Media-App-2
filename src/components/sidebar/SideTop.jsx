import img1 from "../../images/images.png";

function SideTop() {
  return (
    <div className="flex gap-5 bg-white  px-6 py-4 rounded-2xl items-center ">
      <img className=" h-12 " src={img1} alt="" />
      <div>
        <h1 className="font-bold text-lg">Joshua Wells</h1>
        <h2 className="text-slate-400 font-normal">@joswells</h2>
      </div>
    </div>
  );
}

export default SideTop;

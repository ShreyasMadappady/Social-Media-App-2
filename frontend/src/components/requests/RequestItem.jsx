import img1 from "../../images/images.png";
function RequestItem() {
  return (
    <div className="bg-white p-3 rounded-xl flex flex-col gap-4 mb-3">
      <div className="flex gap-3 items-center">
        <img className="w-9 h-9 rounded-full" src={img1} alt="" />
        <div>
          <h1 className="text-sm  font-bold">Jerry Alvarez</h1>
          <h2 className="text-sm text-slate-400">8 mutual friends</h2>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm text-center">
          Accept
        </button>
        <button className="bg-slate-400  text-white px-4 py-2 rounded-full text-sm text-center">
          Decline
        </button>
      </div>
    </div>
  );
}

export default RequestItem;

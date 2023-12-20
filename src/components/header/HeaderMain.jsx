import img1 from "../../images/images.png";

function HeaderMain() {
  return (
    <div className="flex justify-between  px-40 py-4 bg-white">
      <h1 className="text-sky-600 text-2xl font-bold">
        Uni<span className="text-black">Verse</span>{" "}
      </h1>
      <input
        className="bg-slate-100 w-3/6 rounded-full px-6 text-white"
        type="text"
        placeholder="Search"
      />
      <div className="flex gap-5">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full ">
          Create
        </button>
        <img className="w-10 h-10" src={img1} alt="" />
      </div>
    </div>
  );
}

export default HeaderMain;

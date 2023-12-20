import RequestItem from "./RequestItem";

function RequestMain() {
  return (
    <div>
      <h1 className="py-4 font-bold text-slate-400 text-lg" >Requests</h1>
      <RequestItem /> <RequestItem /> <RequestItem /> 
    </div>
  );
}

export default RequestMain;

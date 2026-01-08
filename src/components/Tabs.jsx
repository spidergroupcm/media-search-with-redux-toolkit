import { useDispatch, useSelector } from "react-redux";
import { setActivetab } from "../redux/fetchers/searchClice";


const Tabs = () => {
  const tabs = ["photos", "videos", "gifs"]
  const dispatch = useDispatch()
  const state = useSelector((state)=>state.search.activeTab)
  return (
    <div className="flex gap-2">
    {
      tabs.map((item,i)=>{
        return <button className={`${(state===item?"bg-green-400":"bg-gray-400")} px-4 py-2 rounded border active:scale-75`} key={i}
        onClick={()=>{
          dispatch(setActivetab(item))
        }}
        >{item}</button>
      })
    }
    </div>
  );
};

export default Tabs;

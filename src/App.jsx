
import ResultGrid from "./components/ResultGrid";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";

const App = () => {
  return (
    <div className="p-3">


      <SearchBar/>
      <Tabs/>
      <ResultGrid/>




      {/* <button className="bg-yellow-500 px-4 py-2 font-bold ml-[px] mt-5" onClick={()=>{
        fetchPhoto('cat')
      }}>Fetch Data</button>

      <button className="bg-yellow-500 px-4 py-2 font-bold ml-[px] mt-5" onClick={()=>{
        fetchVideo('cat')
      }}>Fetch Video</button>

       <button className="bg-yellow-500 px-4 py-2 font-bold ml-[px] mt-5" onClick={()=>{
        fetchGif('cat')
      }}>Fetch GIF</button> */}


    </div>
  );
};

export default App;

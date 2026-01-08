import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/fetchers/searchClice";



const SearchBar = () => {
  const dispatch = useDispatch()

  const [searchValue, setSearchValue] = useState("")


   const submitHandler = (e) => {
    e.preventDefault()

    dispatch(setQuery(searchValue))
    console.log(searchValue)
    setSearchValue("")
   }
  return (


    <div>
      <form
      onSubmit={(e)=>{
        submitHandler(e)
      }}>
      <div className="flex justify-center items-center gap-3 p-5">
      <input
      required
      className=" w-full border-2 px-4 py-2 outline-none rounded text-xl"
      value={searchValue}
      type="text"
      onChange={(e)=>{
        setSearchValue(e.target.value)
      }}
      placeholder="Search here ......" />


      <button

      className=" active:scale-85 cursor-pointer hover:bg-green-400 border-2 rounded texl-xl px-4 py-2">
      Search
      </button>


      </div>
      </form>
    </div>
  );
};

export default SearchBar;

import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGifs } from "../api/mediaApi";
import { setActivetab,setResults,setQuery,setError,setLoading } from "../redux/fetchers/searchClice";
import { useEffect } from "react";

const ResultGrid = () => {
  const dispatch = useDispatch()

  const {query,activeTab,results,loading,error} = useSelector((state)=>state.search)



  useEffect(function(){
    const getData = async()=> {
    let data = []
    if(activeTab === "photos"){
           let response = await fetchPhotos(query)                    
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        
                    }))
                }
          //console.log(data)

    if(activeTab === "videos"){
              let response = await fetchVideos(query)
              data = response.videos.map((item)=>({
                id: item.id,
                type: 'video',
                title: item.user.name || "video",
                thumbnail: item.image,
                src: item.video_files,
              }))
             // console.log(data)
              
    }

     if(activeTab === "gifs"){
              let response = await fetchGifs(query)
              data = response.data.results.map((item)=>({
                
                id: item.id,
                type: 'gif',
                title: item.title || "gif",
                thumbnail: item.media_formats.tinygif,
                src: item.media_formats.gif.url,
              }))
        console.log(data)       
              
    }

 

    }
    

    getData()
  },[query,activeTab])

  return (
    <div>

     <button>Hello</button>
    </div>
  );
};

export default ResultGrid;

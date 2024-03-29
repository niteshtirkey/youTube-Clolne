import "./Recommended.css"
import { thumbnail1,thumbnail2,thumbnail3,thumbnail4,thumbnail5,thumbnail6,thumbnail7,thumbnail8 } from "../../assets"
import { useEffect, useState } from "react"
import { API_KEY, value_converter } from "../../data";
import { Link } from "react-router-dom";
const Recommended = ({categoryId}) => {
    const [apiData, setApiData] = useState([]);

    const fetchData=async()=>{
        const relatedVideo = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&${categoryId}=0&key=${API_KEY} `;
        await fetch(relatedVideo).then(res=>res.json()).then(data=>setApiData(data.items))
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div className="recommended">
        {apiData.map((item,index)=>{
            return (
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                    <div className="vid-info">
                        <h4>{item.snippet.title}</h4>
                        <p>{item.snippet.channelTitle}</p>
                        <p>{value_converter(item.statistics.viewCount)} views</p>
                    </div>
                </Link>
            );
        })}
    </div>
  )
}

export default Recommended
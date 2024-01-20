import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { API_VIDEOS, GOOGLE_API_KEY } from '../utils/constant';
import Shimmer from './Shimmer'; // Adjust the path as needed

const SuggestionPage = () => {
  const { suggestion } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await fetch(API_VIDEOS + 10 + "&q=" + searchParams.get("v"));
        const json = await data.json();
       
        setVideos(json.items);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [searchParams]);

  return (
    <div>
      <h2 className='ml-7 font-medium mb-5'>Videos for: {searchParams.get("v")}</h2>
      <ul className='flex flex-wrap gap-8 ml-7'>
        {loading ? (
          // Show shimmer effect while loading
          <Shimmer />
        ) : (
          // Render Video components when not loading
          videos.map((video) => (
            <li key={video.id.videoId}>
              <div className='border mb-6 rounded-lg shadow-lg w-[500px]'>
                <iframe
                  title={video.snippet.title}
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <p className='mb-5 p-2 h-[50px]'>{video.snippet.title}</p>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default SuggestionPage;

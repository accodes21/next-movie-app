import React from 'react';
import axios from "axios";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { img_300, noPicture } from "../config/config";

const handleDragStart = (e) => e.preventDefault();

const Carousel = ({media_type, id}) => {

  const [cast, setCast] = React.useState()

  const items = cast?.map((c) => (
    <div className="flex flex-col object-contain p-2">
      <img
      src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
      alt={c?.name}
      onDragStart={handleDragStart}
      className=""/>
      <b className="carousel_txt">{c?.name}</b>
    </div>
  ))
  
  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  const fetchCast = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.NEXT_BUILD_API_KEY}&language=en-US`)

    console.log(data)
    setCast(data.cast)
  }

  React.useEffect(() => {
    fetchCast()
    // eslint-disable-next-line
  }, []);

  return (
    <AliceCarousel autoPlay responsive={responsive} disableDotsControls infinite disableButtonsControls mouseTracking items={items} />
  );
}

export default Carousel;
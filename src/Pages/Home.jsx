import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import _ from "lodash";
import MusicCard from "../Components/MusicCard";
import { useState } from "react";
import CardsManager from "../Components/CardsManager";
import ArtistCard from "../Components/ArtistCard";
import PlaylistCard from "../Components/PlaylistCard";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  const [Musics, setMusics] = useState([
    {
      id: 22220,
      title: "Khanevadegi 2",
      musicImage: "https://i1.sndcdn.com/artworks-GZpwNAcCv1el-0-t500x500.png",
      genre: "Rock",
      singer: "Tentacion",
      year: 2021,
      album: "Noskhe",
    },
    {
      id: 22220,
      title: "Khanevadegi 2",
      musicImage: "https://i1.sndcdn.com/artworks-GZpwNAcCv1el-0-t500x500.png",
      genre: "Rock",
      singer: "Tentacion",
      year: 2021,
      album: "Noskhe",
    },
    {
      id: 22220,
      title: "Khanevadegi 2",
      musicImage: "https://i1.sndcdn.com/artworks-GZpwNAcCv1el-0-t500x500.png",
      genre: "Rock",
      singer: "Tentacion",
      year: 2021,
      album: "Noskhe",
    },
    {
      id: 22220,
      title: "Khanevadegi 2",
      musicImage: "https://i1.sndcdn.com/artworks-GZpwNAcCv1el-0-t500x500.png",
      genre: "Rock",
      singer: "Tentacion",
      year: 2021,
      album: "Noskhe",
    },
    {
      id: 22220,
      title: "Khanevadegi 2",
      musicImage: "https://i1.sndcdn.com/artworks-GZpwNAcCv1el-0-t500x500.png",
      genre: "Rock",
      singer: "Tentacion",
      year: 2021,
      album: "Noskhe",
    },
    {
      id: 22220,
      title: "Khanevadegi 2",
      musicImage: "https://i1.sndcdn.com/artworks-GZpwNAcCv1el-0-t500x500.png",
      genre: "Rock",
      singer: "Tentacion",
      year: 2021,
      album: "Noskhe",
    },
    {
      id: 22220,
      title: "Khanevadegi 2",
      musicImage: "https://i1.sndcdn.com/artworks-GZpwNAcCv1el-0-t500x500.png",
      genre: "Rock",
      singer: "Tentacion",
      year: 2021,
      album: "Noskhe",
    },
    {
      id: 22220,
      title: "Khanevadegi 2",
      musicImage: "https://i1.sndcdn.com/artworks-GZpwNAcCv1el-0-t500x500.png",
      genre: "Rock",
      singer: "Tentacion",
      year: 2021,
      album: "Noskhe",
    },
    {
      id: 22220,
      title: "Khanevadegi 2",
      musicImage: "https://i1.sndcdn.com/artworks-GZpwNAcCv1el-0-t500x500.png",
      genre: "Rock",
      singer: "Tentacion",
      year: 2021,
      album: "Noskhe",
    },
    {
      id: 22220,
      title: "Khanevadegi 2",
      musicImage: "https://i1.sndcdn.com/artworks-GZpwNAcCv1el-0-t500x500.png",
      genre: "Rock",
      singer: "Tentacion",
      year: 2021,
      album: "Noskhe",
    },
    {
      id: 22220,
      title: "Khanevadegi 2",
      musicImage: "https://i1.sndcdn.com/artworks-GZpwNAcCv1el-0-t500x500.png",
      genre: "Rock",
      singer: "Tentacion",
      year: 2021,
      album: "Noskhe",
    },
    {
      id: 22220,
      title: "Khanevadegi 2",
      musicImage: "https://i1.sndcdn.com/artworks-GZpwNAcCv1el-0-t500x500.png",
      genre: "Rock",
      singer: "Tentacion",
      year: 2021,
      album: "Noskhe",
    },
    {
      id: 22220,
      title: "Khanevadegi 2",
      musicImage: "https://i1.sndcdn.com/artworks-GZpwNAcCv1el-0-t500x500.png",
      genre: "Rock",
      singer: "Tentacion",
      year: 2021,
      album: "Noskhe",
    },
    {
      id: 22220,
      title: "Khanevadegi 2",
      musicImage: "https://i1.sndcdn.com/artworks-GZpwNAcCv1el-0-t500x500.png",
      genre: "Rock",
      singer: "Tentacion",
      year: 2021,
      album: "Noskhe",
    },
    {
      id: 22220,
      title: "Khanevadegi 2",
      musicImage: "https://i1.sndcdn.com/artworks-GZpwNAcCv1el-0-t500x500.png",
      genre: "Rock",
      singer: "Tentacion",
      year: 2021,
      album: "Noskhe",
    },
  ]);

  const [Artists, setArtists] = useState([
    {
      artistId: 2222,
      artistImage:
        "https://i1.sndcdn.com/artworks-dMwicWlgndWLL1el-yaQZvQ-t500x500.jpg",
      artistName: "Yas",
      artistSongsLength: 12,
    },
    {
      artistId: 2222,
      artistImage:
        "https://i1.sndcdn.com/artworks-dMwicWlgndWLL1el-yaQZvQ-t500x500.jpg",
      artistName: "Yas",
      artistSongsLength: 12,
    },
    {
      artistId: 2222,
      artistImage:
        "https://i1.sndcdn.com/artworks-dMwicWlgndWLL1el-yaQZvQ-t500x500.jpg",
      artistName: "Yas",
      artistSongsLength: 12,
    },
    {
      artistId: 2222,
      artistImage:
        "https://i1.sndcdn.com/artworks-dMwicWlgndWLL1el-yaQZvQ-t500x500.jpg",
      artistName: "Yas",
      artistSongsLength: 12,
    },
    {
      artistId: 2222,
      artistImage:
        "https://i1.sndcdn.com/artworks-dMwicWlgndWLL1el-yaQZvQ-t500x500.jpg",
      artistName: "Yas",
      artistSongsLength: 12,
    },
    {
      artistId: 2222,
      artistImage:
        "https://i1.sndcdn.com/artworks-dMwicWlgndWLL1el-yaQZvQ-t500x500.jpg",
      artistName: "Yas",
      artistSongsLength: 12,
    },
    {
      artistId: 2222,
      artistImage:
        "https://i1.sndcdn.com/artworks-dMwicWlgndWLL1el-yaQZvQ-t500x500.jpg",
      artistName: "Yas",
      artistSongsLength: 12,
    },
    {
      artistId: 2222,
      artistImage:
        "https://i1.sndcdn.com/artworks-dMwicWlgndWLL1el-yaQZvQ-t500x500.jpg",
      artistName: "Yas",
      artistSongsLength: 12,
    },
    {
      artistId: 2222,
      artistImage:
        "https://i1.sndcdn.com/artworks-dMwicWlgndWLL1el-yaQZvQ-t500x500.jpg",
      artistName: "Yas",
      artistSongsLength: 12,
    },
    {
      artistId: 2222,
      artistImage:
        "https://i1.sndcdn.com/artworks-dMwicWlgndWLL1el-yaQZvQ-t500x500.jpg",
      artistName: "Yas",
      artistSongsLength: 12,
    },
  ]);

  const [Playlists, setPlaylists] = useState([
    { playlistId: 22222, playlistName: "PlayList 1", numOfSongs: 14 },
    { playlistId: 22222, playlistName: "PlayList 1", numOfSongs: 14 },
    { playlistId: 22222, playlistName: "PlayList 1", numOfSongs: 14 },
  ]);
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-5 mt-3 h-48 overflow-hidden rounded-2xl px-5 sm:h-64 md:h-72 lg:h-[380px]"
      >
        <SwiperSlide>
          <div className="h-full w-full overflow-hidden rounded-2xl">
            <img
              src={require("./../Assets/Images/art-of-sound-banner.jfif")}
              alt=""
              className="h-full w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full overflow-hidden rounded-2xl">
            <img
              src={require("./../Assets/Images/art-of-sound-banner.jfif")}
              alt=""
              className="h-full w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full overflow-hidden rounded-2xl">
            <img
              src={require("./../Assets/Images/art-of-sound-banner.jfif")}
              alt=""
              className="h-full w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full overflow-hidden rounded-2xl">
            <img
              src={require("./../Assets/Images/art-of-sound-banner.jfif")}
              alt=""
              className="h-full w-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <CardsManager
        Component={MusicCard}
        comName={"MusicCard"}
        dataArray={Musics}
        title={"Trends"}
      />
      <CardsManager
        Component={ArtistCard}
        dataArray={Artists}
        comName={"ArtistCard"}
        title={"Artists"}
      />
      <CardsManager
        Component={PlaylistCard}
        dataArray={Playlists}
        comName={"PlayListCard"}
        title={"Playlists"}
      />
    </>
  );
};

export default Home;

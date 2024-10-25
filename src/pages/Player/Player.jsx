import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./Player.css";

import backArrow from "../../assets/icons/arrow_back.svg";

const Player = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTlhYmM0MjA0ODQ0ZjNkNDNlY2FiNjBjNmYzY2Y4NiIsIm5iZiI6MTcyOTY2NDM4MS41ODE5NjQsInN1YiI6IjY3MTg5M2MxMjY4NWNiNjU2M2MwNjkyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CaKIsJ-kHoBGafG_wA7zabxXDbNf3-6lS4N8RVKqRAA",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        const trailer = res.results.find((video) => video.type === "Trailer");
        if (trailer) {
          setApiData(trailer);
        } else {
          console.error("No trailer found");
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="player">
      <img
        src={backArrow}
        alt="Back Arrow"
        onClick={() => {
          navigate("/");
        }}
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="Trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      {/* <div className="playerInfo">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div> */}
    </div>
  );
};

export default Player;

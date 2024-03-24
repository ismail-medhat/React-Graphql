import React from "react";
import "./Character.css";
import { useCharacter } from "../hooks/useCharacter";
import { useParams } from "react-router";

function Character(props) {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);
  if (loading) return <div>spinner...</div>;
  if (error) return <div>Something want wrang</div>;
  return (
    <div className="character">
      <img src={data.character.image} width={750} height={750} />
      <div className="character-content">
        <h1>{data.character.name}</h1>
        <div className="character-episode">
          {data?.character?.episode?.map((episode) => {
            return (
              <div key={episode.id}>
                {episode.name} - <b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Character;

import React from "react";
import "./CharactersList.css";
import { useCharactersList } from "../hooks/useCharactersList";
import { Link } from "react-router-dom";

function CharactersList(props) {
  const { error, loading, data } = useCharactersList();
  if (loading) return <div>spinner...</div>;
  if (error) return <div>Something want wrang</div>;
  return (
    <div className="characterList">
      {data?.characters?.results?.map((character) => {
        return (
          <Link to={character.id} key={character.id}>
            <img src={character.image} />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}

export default CharactersList;

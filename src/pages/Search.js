import React, { useState } from "react";
import { useCharactersLocation } from "../hooks/useCharactersLocation";

export default function Search() {
  const [name, setName] = useState("");
  const { getLocations, error, loading, data } = useCharactersLocation(name);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}>Search</button>
      {loading && <div>spinner...</div>}
      {error && <div>Something want wrang</div>}
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            return <li>{character.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

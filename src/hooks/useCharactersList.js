import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const useCharactersList = () => {
  const { error, loading, data } = useQuery(GET_CHARACTERS);
  return { error, loading, data };
};

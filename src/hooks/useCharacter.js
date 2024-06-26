import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query GetCharachter($id: ID!) {
    character(id: $id) {
      id
      name
      gender
      image
      episode {
        id
        name
        episode
      }
    }
  }
`;

export const useCharacter = (id) => {
  const { error, loading, data } = useQuery(GET_CHARACTER, {
    variables: {
      id,
    },
  });
  return { error, loading, data };
};

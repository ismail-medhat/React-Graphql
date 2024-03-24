import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARACHTER_LOCATIONS = gql`
  query GetCharachterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export const useCharactersLocation = (name) => {
  const [getLocations, { error, loading, data }] = useLazyQuery(
    GET_CHARACHTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );
  return { getLocations, error, loading, data };
};

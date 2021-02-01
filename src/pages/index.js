import React from "react";
import { Link, graphql } from "gatsby";

export const query = graphql`
  query MyQuery {
    allContentfulLocation {
      edges {
        node {
          gatsbyPath(filePath: "/city/{contentfulLocation.countryName}")
          countryName
          nationality
        }
      }
    }
  }
`;
export default function Home({ data }) {
  return (
    <div>
      <h1>This is the heading!!!</h1>
      <ul>
        {data.allContentfulLocation.edges.map(({ node: country }) => (
          <li key={country.countryName}>
            Country :<Link to={country.gatsbyPath}> {country.countryName}</Link>
            - Nationality :{country.nationality}
          </li>
        ))}
      </ul>
    </div>
  );
}

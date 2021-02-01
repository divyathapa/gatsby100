import { graphql } from "gatsby";
import React from "react";

export const query = graphql`
  query($id: String = " ") {
    contentfulLocation(id: { eq: $id }) {
      countryName
      nationality
      locationMap {
        lat
        lon
      }
    }
  }
`;

export default function City({ data }) {
  return (
    <div>
      <h1>
        The country I travelled last was {data.contentfulLocation.countryName}.
      </h1>
      <h2>
        The languages they speak are {data.contentfulLocation.nationality}.
      </h2>
    </div>
  );
}

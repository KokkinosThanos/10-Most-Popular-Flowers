import React, { useState } from "react";
import { render } from 'react-dom';
import FlowersList from "../Components/FlowersList";
import FlowerModal from "../Components/FlowerModal";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import "./Flowers.css";

const client = new ApolloClient({
  uri: "http://localhost:602/graphql",
});

const FlowersArray = () => {

  const [flowers, setFlowers] = useState([]);
  const [selectedFlower, setSelectedFlower] = useState([]);
  console.log("selectedFlower: ", selectedFlower);

  client
    .query({
      query: gql`
        {
          flowers {
            id
            name
            description
            image
          }
        }
      `,
    })
    .then((result) => setFlowers(result.data.flowers));

  var i = 1;

  return (
    <React.Fragment>
      <div className="flowers-section">
        {flowers.map((flower) => (
          <FlowersList
            changeBackground={() =>
              setSelectedFlower([flower.name, flower.description, flower.image])
            }
            className={`flower flower${i++}`}
            key={flower.id}
            image={flower.image}
            name={flower.name}
            description={flower.description}
          />
        ))}
      </div>

      <FlowerModal selected={selectedFlower} />
      
    </React.Fragment>
  );
};

export default FlowersArray;

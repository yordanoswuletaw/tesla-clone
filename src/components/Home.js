import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        carProps={{
          title: "Model S",
          description: "Order Online for Touchless Delivery",
          backgroundImg: "model-s.jpg",
          leftBtnText: "Custom Order",
          rightBtnText: "Existing Inventory",
        }}
      />
      <Section
        carProps={{
          title: "Model Y",
          description: "Order Online for Touchless Delivery",
          backgroundImg: "model-y.jpg",
          leftBtnText: "Custom Order",
          rightBtnText: "Existing Inventory",
        }}
      />
      <Section
        carProps={{
          title: "Model 3",
          description: "Order Online for Touchless Delivery",
          backgroundImg: "model-3.jpg",
          leftBtnText: "Custom Order",
          rightBtnText: "Existing Inventory",
        }}
      />
      <Section
        carProps={{
          title: "Model X",
          description: "Order Online for Touchless Delivery",
          backgroundImg: "model-x.jpg",
          leftBtnText: "Custom Order",
          rightBtnText: "Existing Inventory",
        }}
      />
      <Section
        carProps={{
          title: "Lowest Cost Solar Panels in America",
          description: "Money-back guarantee",
          backgroundImg: "solar-panel.jpg",
          leftBtnText: "Order Now",
          rightBtnText: "Learn More",
        }}
      />
      <Section
        carProps={{
          title: "Solar for New Roofs",
          description: "Solar Roof Cost Less Than a new Roof Plus Solar Panels",
          backgroundImg: "solar-roof.jpg",
          leftBtnText: "Order Now",
          rightBtnText: "Learn More",
        }}
      />
      <Section
        carProps={{
          title: "Accessories",
          description: "",
          backgroundImg: "accessories.jpg",
          leftBtnText: "Shop Now",
        }}
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  overflow-x: hidden;
`;

export default Home;

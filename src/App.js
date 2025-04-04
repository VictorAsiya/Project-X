import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as SC from "./style";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <SC.Main>
      <SC.Section>
        <SC.Top>
          <SC.Title>Go Fare</SC.Title>
          <h3 style={{margin: "0", paddingTop: "10px", fontWeight: "700", fontSize: "25px"}}>Select Your View</h3>
          <p style={{margin: "0", paddingTop: "5px", color: "rgb(135, 126, 126)"}}>Choose how you want to access the Go Fare transport platform</p>
        </SC.Top>

        <SC.Middle>
          <SC.Container>
            <SC.Icon_Div>
              <FontAwesomeIcon icon="fa-regular fa-user" />
            </SC.Icon_Div>

            <h3 style={{margin: "0"}}>User</h3>
            <p style={{margin: "0", color: "rgb(135, 126, 126)"}}>
              Access transport fare updates and <br /> compare prices across
              Enugu
            </p>
            <SC.Button>Continue as User</SC.Button>
          </SC.Container>

          <SC.Container>
            <SC.Icon_Div>
              <FontAwesomeIcon icon="fa-regular fa-building" />
            </SC.Icon_Div>
            <h3 style={{margin: "0"}}>Company</h3>

            <p style={{margin: "0", color: "rgb(135, 126, 126)"}}>
              Access transport fare updates and <br /> compare prices across
              Enugu
            </p>
            <SC.Button>Continue as User</SC.Button>
          </SC.Container>

          <SC.Container>
            <SC.Icon_Div>
              <FontAwesomeIcon icon={faShieldAlt} />
            </SC.Icon_Div>

            <h3 style={{margin: "0"}}>Admin</h3>
            <p style={{margin: "0", color: "rgb(135, 126, 126)"}}>
              Access transport fare updates and <br /> compare prices across
              Enugu
            </p>
            <SC.Button>Continue as User</SC.Button>
          </SC.Container>
        </SC.Middle>

        <SC.Bottom>
          <p style={{margin: "0", color: "rgb(135, 126, 126)"}}>Go Fare - The transportation fare tracker for Enugu, Nigeria</p>
        </SC.Bottom>
      </SC.Section>

    </SC.Main>
  );
}

export default App;

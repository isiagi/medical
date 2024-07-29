import React from "react";
import InputSection from "./InputSection";
import Header from "./Header";

function HomeContact() {
  return (
    <div>
      <Header
        first="Talk To Us"
        middle="Any Questions?"
        last="We Are Here To Help."
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
          marginBottom: "4rem",
        }}
      >
        <InputSection
          color1={"#0067DA"}
          color2={"rgb(28, 28, 143)"}
          color3={"rgb(130, 129, 129)"}
          color4={"rgb(28, 28, 143)"}
        />
      </div>
    </div>
  );
}

export default HomeContact;

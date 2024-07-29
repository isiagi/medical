import React from "react";
import { GoGoal } from "react-icons/go";
import { GiSeedling } from "react-icons/gi";
import Header from "./Header";

function Mission() {
  return (
    <div>
      <Header
        first="Our Mission"
        middle="Core Values & Vision"
        last="Inspiring Change, Driving Success"
      />
      <div style={{ display: "grid", gap: "2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr)",
            gap: "2rem",
          }}
        >
          <div>
            <h3
              style={{
                color: "#293E8F",
                fontWeight: "400",
                fontSize: "1.8rem",
              }}
            >
              VISION
            </h3>
            <p
              style={{
                color: "rgb(130, 129, 129)",
                paddingTop: "1rem",
              }}
            >
              To provide high quality life impacting services to the customers
              we serve and earn a reputation of the most appreciated, valued,
              referred and respected Consultancy Company.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <GiSeedling style={{ fontSize: "200px", color: "#293E8F" }} />
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr)",
            gap: "2rem",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <GoGoal style={{ fontSize: "200px", color: "#E94E36" }} />
          </div>
          <div>
            <h3
              style={{
                color: "#E94E36",
                fontWeight: "400",
                fontSize: "1.8rem",
              }}
            >
              Mission
            </h3>
            <p
              style={{
                color: "rgb(130, 129, 129)",
                paddingTop: "1rem",
              }}
            >
              To be a competitive and reliable partner helping people feel
              confident & delivering on their success aspirations by rendering
              excellent services with honesty, ethics and unparalleled quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;

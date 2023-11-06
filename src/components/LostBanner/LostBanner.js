import React from "react";
import Banner from "../Banner";

function LostBanner({ solution }) {
  return (
    <Banner type="sad">
      <p>
        Sorry, the correct answer is <strong>{solution}</strong>.
      </p>
    </Banner>
  );
}

export default LostBanner;

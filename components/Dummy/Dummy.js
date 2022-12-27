import React from "react";

const Dummy = () => {
  return (
    <>
      {/* If We use global then that style will be appalied everywhere */}
      <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
      <p>DUMMY</p>
    </>
  );
};

export default Dummy;

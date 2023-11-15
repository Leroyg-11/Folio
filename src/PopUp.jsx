import React from "react";
import Popup from "reactjs-popup";

const CradPopUp = () => {
  // console.log(repo);
  return (
    <Popup
      trigger={<button className="nes-btn is-warning"> Plus d'infos </button>}
      modal
      nested
    >
      {(close) => (
        <div className="modal nes-container is-rounded ">
          <button className="close" onClick={close}>
            &times;
          </button>

          <div className="content ">
            salurjhksjdgh
            <br />
          </div>
        </div>
      )}
    </Popup>
  );
};

export default CradPopUp;

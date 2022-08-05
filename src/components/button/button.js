import React from "react";

function CusButton(props) {
  return (
    <div className={props?.classNameContainer}>
      <p>
        <a
          onClick={() => {
            console.log("123123123123");
          }}
          href={() => false}
          className={`btn btn-warning me-2 rounded-0 btn-block mt-4 ${props?.className}`}
          style={props?.btnStyle}
        >
          {props?.title ?? "Button Title"}
          {props?.classNameIcon && props?.classNameIcon}
        </a>
      </p>
    </div>
  );
}

export default CusButton;

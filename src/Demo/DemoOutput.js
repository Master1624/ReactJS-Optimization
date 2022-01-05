import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
	return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

// React.memo() is executed if there's a change in props
export default React.memo(DemoOutput);

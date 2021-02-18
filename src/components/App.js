import React, { useEffect, useState } from "react";
import "../styles/App.css";

// class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             renderBall: false,
//             posi : 0,
//             ballPosition: { left: "0px" }
//         };
//         this.renderChoice = this.renderBallOrButton.bind(this)
//         this.buttonClickHandler = this.buttonClickHandler.bind(this)
//     };

//     buttonClickHandler() {

//    }
//     renderBallOrButton() {
// 		if (this.state.renderBall) {
// 		    return <div className="ball" style={this.state.ballPosition}></div>
// 		} else {
// 		    return <button onClick={this.buttonClickHandler} >Click For One Ball</button>
// 		}
//     }

//     // bind ArrowRight keydown event
//     componentDidMount() {

//     }

//     render() {
//         return (
//             <div className="playground">
//                 {this.renderBallOrButton()}
//             </div>
//         )
//     }
// }

// export default App;
const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [posi, setPosi] = useState(0);
  const [ballPosition, setBallPosi] = useState({ left: 0, top: 0 });
  const buttonClickHandler = () => {
    setRenderBall(true);
  };
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 37:
          setBallPosi({
            left: ballPosition.left - 5,
            top: ballPosition.top,
          });
          break;
        case 38:
          setBallPosi({
            left: ballPosition.left,
            top: ballPosition.top - 5,
          });
          break;
        case 39:
          setBallPosi({
            left: ballPosition.left + 5,
            top: ballPosition.top,
          });
          break;
        case 40:
          setBallPosi({
            left: ballPosition.left,
            top: ballPosition.top + 5,
          });
      }
    });
  }, []);
  const renderBallOrButton = () => {
    if (renderBall) {
      return (
        <div
          className="ball"
          style={{
            left: ballPosition.left + "px",
            top: ballPosition.top + "px",
            position: "absolute",
          }}
        ></div>
      );
    }
    return <button onClick={buttonClickHandler}>Click For One Ball</button>;
  };
  return <div className="playground">{renderBallOrButton()}</div>;
};

export default App;

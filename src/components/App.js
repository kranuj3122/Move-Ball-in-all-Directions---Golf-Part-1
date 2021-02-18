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
//   const [ballPosition, setBallPosi] = useState({ left: 0 });

  const buttonClickHandler = () => {
    setRenderBall(true);
  };

  const eventHandler = (event) => {
    switch (event.keyCode) {
      case 39:
        setPosi((posi) => posi + 5);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", eventHandler);
  }, []);

  const renderBallOrButton = () => {
    if (renderBall) {
      return (
        <div
          className="ball"
          style={{
            left: posi + "px",
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

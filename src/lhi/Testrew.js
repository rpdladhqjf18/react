import React from "react";
import ReactDOM from "react-dom";
class Testrew extends React.Component{
    render(){
        return(
            <button onClick={(evt) => this.doAction("run!",evt)}>Action</button>
        )
    }
    doAction = (action, lastParamIsEventObject) =>{
        alert(this.props.def_action + "->" + action +" : " + lastParamIsEventObject.type);
    }
}
ReactDOM.render(<Testrew def_action = "walk"/>, document.getElementById("root"));


export default Testrew;
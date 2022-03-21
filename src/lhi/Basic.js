import React from "react";
import ReactDOM from "react-dom";
import './body.css';


const tag = "life cycle"
class Basic extends React.Component {
    //생성자로 class 생성시 호출
    constructor(props){
        console.log(tag +" : construcstor()");
        super(props);
        this.state = {gender : "man", age : props.age, tall:180};
    }
    //DOM에 html 내보냄 (필수)
    render(){
        console.log(tag + " : render()");
        return(
            <div>
                <p> My tall is {this.state.tall}</p>
                <p> My gender is {this.state.gender}</p>
                <p> My age is {this.state.age}</p>
                <span id="bf_age"></span>
                {footer}
            </div>
        )
    }
    //render 호출 전
    static getDerivedStateFromProps(props ,state){
        console.log(tag +": getDerivedStateFromProps()");
        return{
            age : state.age + 10
        }
    }
    //render 호출 후
    componentDidMount(){
        console.log(tag +" : componentDidMount")
        setTimeout(()=>{
            this.setState({age : this.state.age + 10})
        },1000);
    }
    //update 할지 말지 결정 true 면 실행 false면 실행안함
    shouldComponentUpdate(nextProps, nextState, nextContext){
        return true;
    }
    //변경 이전의 상태정보를 갖고있음 변경 후 실행
    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("bf_age").innerHTML = 'Before age is ' + prevState.age;
    }
   

}
class footer extends React.Component{
    render(){
        return <h2>hey! footer</h2>
    }
     //dom에서 element가 삭제될때 관련
    componentWillUnmount(){
        alert("footer will disppeared");
    }
}

ReactDOM.render(<Basic age={20} />, document.getElementById('root'))

export default Basic;
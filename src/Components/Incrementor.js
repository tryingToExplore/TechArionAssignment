import React from "react";


class Incrementor extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            count:43,
        }
    }
    

    
onclickIncrement(incre,decre) {
    const { count }= this.state;
    if(incre){
    this.setState({count: count + 3});
}
if(decre){
    this.setState({count: count - 3});
}
}


    render(){
        const { count }=this.state;
        return(
            <div className=" incre-container">
                <button onClick={() => this.onclickIncrement(false,true)}>-</button>
                    <span>{count}</span>
                    <button onClick={() => this.onclickIncrement(true,false)}>+</button>
            </div>
        )
    }
}

export default Incrementor;
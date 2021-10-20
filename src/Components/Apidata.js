import React from "react";
import axios from "axios";



class ApiData extends React.Component{

constructor(props) {
    super(props);
    this.state={
        apiData:[],
    }
}


componentDidMount(){
    axios.get('https://gorest.co.in/public/v1/todos').then((res)=>{
        console.log(res,"res")
        this.setState({apiData:res.data.data})
    })
}

renderApiData(){
    const{apiData}= this.state;
    const numberOfCards = 9;
    console.log(apiData,"Card");
        if (apiData && apiData.length){
            console.log("hello")
         const cardData = apiData.map((item) => {
             return(
            // <div  >
                <div className="item">
                <p>Id:- <span>{item.id}</span></p>
                <p>User Id:- <span>{item.user_id}</span></p>
                <p>Title:- <span>{item.title}</span></p>
                <p>Due on:- <span>{item.due_on}</span></p>
                <p>Status:- <span>{item.status}</span></p>
            </div>
            // </div>
             )
    });
    const displayCards = cardData.slice(0, numberOfCards)
    return displayCards
}
}




render(){
    const {apiData} = this.state;
    return(
        <div className="black-color">
            <div className="api-body-container">
                <div className="grid-container" >
                    {this.renderApiData()}
                </div>
            </div>
        </div>
    )
}

}

export default ApiData;


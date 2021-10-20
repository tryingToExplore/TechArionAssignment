import React from "react";
import axios from "axios";

class Post extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data:false,
        }
    }

postData(){
    axios.post("https://admin.srkprojects.com/web/api/client/v1/contact-us/",
    {name:'Vivek',
    email:"mannevivek21@gmail.com",
    message:"Post data in api"
}
    ).then((res) => {
        console.log(res.data,"res");
        this.setState({data:true})
    })
}

// renderMessage(){
//     const { data } = this.state;
//     if(data){
        
//     }
// }

    render(){
        const{ data} = this.state;
        console.log(data)
        return(
            <>
            <div onClick={() =>this.postData()}>
                Click here to post data
            </div>
            { data ? <p>Please open console to see data</p> : null}
            </>
        )
    }
    
}

export default Post;
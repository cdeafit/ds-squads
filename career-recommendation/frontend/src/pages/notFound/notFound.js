import React from "react"
import buho from '../../img/nofound.svg'

class NotFound extends React.Component {
    render(){
        return(
            <>
            <div>
            <img src={buho} draggable="false" alt=""/>
            </div>
            </>
        );
    }
}

export default NotFound
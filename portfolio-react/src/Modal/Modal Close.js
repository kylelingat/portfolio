import React, { Component } from 'react';
import InfoButton from '../Info Button/Info Button';

class ModalClose extends Component {
    constructor(props){
        super(props)
    }

    closeClickHandler = () => {

    }
    render(){
        return <span onClick={this.props.infoClickHandler} className="close">&times;</span>
    }
}

export default ModalClose
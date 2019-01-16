import React, { Component } from 'react';

class ModalClose extends Component {
    state = {
        modalOpen: true
      };
    
      closeClickHandler = () => {
        const doesntShow = this.state.modalOpen;
        this.setState({ modalOpen: !doesntShow });
      };
    render(){
        return <span onClick={this.closeClickHandler} className="close">&times;</span>
    }
}

export default ModalClose
import React from 'react';
import StatusForm from './StatusForm';
import { Alert } from 'react-bootstrap';
/* 
TODO: сдеать статусы собятия при наведении мыши передать форме
*/
class ProfileStatus  extends React.Component  {
  constructor(props){
    super(props)
    this.state = {
      flag: false
    }
  }
  active = e => this.setState({flag: true});
  
  diactive = e => this.setState({flag: false});

  putStatus = (e) => this.props.putStatus(e.status);

  render(){
    return(
        this.state.flag
          ?
              <StatusForm 
                onSubmit={this.putStatus}
                // onChange={this.onChangeStatus}
                // onMouseOut={e=>{this.diactive(e)}}
                initialValues={{status: this.props.status}}
              />
          
        : 
        <div>
          <Alert variant={'warning'} onMouseOver={e=>{this.active(e)}}>
              status: {this.props.status !== null? this.props.status: ''}  
          </Alert>
      </div> 
    )
  }
}
export default ProfileStatus;
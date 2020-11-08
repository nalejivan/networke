import React from 'react';
import s from './ProfileStatus.module.css';
import StatusForm from './StatusForm'

class ProfileStatus  extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      flag: false
    }
  }
  active = e => {
    this.setState({flag: true})
  }
  diactive = e => {
    this.setState({flag: false})
  }
  onChangeStatus = status => { this.props.setStatus(status) }

  add = (e) => {
    if(e.charCode === 13){
      this.props.putStatus(e.target.value)
    }
  }
  render(){
    return(
        this.state.flag
          ?
            <div className={s.status}>
              <StatusForm 
                onSubmit={this.onChangeStatus}
                onChange={this.onChangeStatus}
                initialValues={{status: this.props.status}}
                
              />
            {/* <input 
              onChange={e=>{this.onChangeStatus(e.target.value)}} 
              onMouseOut={e=>{this.diactive(e)}} 
              onKeyPress={this.add}
              type="text" value={this.props.status}/> */}
          </div> 
        : 
        <div>
        <span className={s.status} onMouseOver={e=>{this.active(e)}} >
          {this.props.status}
        </span>
      </div> 
    )
  }
}
export default ProfileStatus;
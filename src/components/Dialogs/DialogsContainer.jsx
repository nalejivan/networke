import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import React from 'react';
import { getDialogsItemsThunk, setMessageThunk } from '../../redux/reducers/dialogs_reducer';
import withRedirect from '../../hoc/withRedirect';
import { compose } from 'redux';
import DialogForm from './DialogForm'

class DialogsContainer extends React.Component {

  componentDidMount(){
    this.props.getDialogsItemsThunk();
  }

  addMessage = (e) => {
    if(e.message != null && e.message.length > 0){
      this.props.setMessageThunk('two', e.message);
    }
  }

  render(){
    return (
      <div>
      <Dialogs dialogs={this.props.dialogs} />
      <DialogForm onSubmit={this.addMessage}/>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return { dialogs: state.dialogs }
}
export default compose(
  connect(mapStateToProps, { getDialogsItemsThunk, setMessageThunk }),
  withRedirect
)(DialogsContainer);
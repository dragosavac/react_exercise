import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {

  render () {
    return (
    <div>
      <input
        type="text"
        autoFocus="true"
        className={classnames('form-control', styles.addFriendInput)}
        placeholder="Type the name of a friend to be added"
        value={this.state.name}
        onChange={this.handleNameChange.bind(this)}
       /> 
      <input
        type="text"
        className={classnames('form-control', styles.addFriendInput)}
        placeholder="Type gender of a friend to be added"
        value={this.state.gender}
        onChange={this.handleGenderChange.bind(this)}
       /> 
      <button onClick={this.handleSubmit.bind(this)}>Submit</button> 
      </div> 
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: '',
      gender: ''
    };
  }

  handleNameChange (e) {
    this.setState({ name: e.target.value.trim() });
  }

  handleGenderChange (e) {
    this.setState({ gender: e.target.value.trim()});
  }

  handleSubmit (e) {
      this.props.addFriend({name: this.state.name, gender: this.state.gender});
      this.setState({ name: '', gender: '' });
  }
}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput

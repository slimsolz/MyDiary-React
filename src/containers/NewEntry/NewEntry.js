import React, { Component } from 'react';
import EntryForm from '../../components/EntryForm/EntryForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newEntry } from '../../actions/entriesAction';

class NewEntry extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      story: '',
      category: '',
      image: 'life.jpg'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const entry = {
      title: this.state.title,
      story: this.state.story,
      category: this.state.category,
      image: this.state.image
    };

    this.props.newEntry(entry)
      .then(res => {
        this.props.history.push('/entries');
      });
  }

  render() {
    return (
      <EntryForm changed={this.handleChange} submit={this.handleSubmit}/>
    )
  }
}

NewEntry.propTypes = {
  newEntry: PropTypes.func.isRequired
}

export default connect(null, { newEntry })(NewEntry);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEntries, deleteEntry } from '../../actions/entriesAction';
import PropTypes from 'prop-types';

import EntryCard from '../../components/EntryCard';

class AllEntries extends Component {

  constructor() {
    super();

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchEntries();
  }

  handleDelete(e, id) {
    e.preventDefault();
    this.props.deleteEntry(id)
      .then(res => {
        this.props.history.push('/entries');
      });
  }

  render() {
    const entries = this.props.entries.length ?
      this.props .entries.map((entry, i) => (
        <EntryCard
          key={i}
          title={entry.title}
          story={(entry.story).substring(0, 60)}
          id={entry.id}
          delete={event => this.handleDelete(event, entry.id)}/>
      )) :
      (
        <div className="no_entry">
          <p id="no-entry">No Entry Yet .... Add An Entry</p>
        </div>
      );

    return (
      <div className="mainWrapper">
      <div className="wrapper inner-wrapper">
        <div className="row">
          <section className="col-12 mainentries">
            <div className="row">
              <div className="new_link col-12">
                <Link to="/new_entry" className="newLink">New Entry</Link>
              </div>
              <div className="" id="display">
                <p id="alert"></p>
              </div>
              <div id="content">
                { entries }
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    )
  }
}

AllEntries.propsTypes = {
  fetchEntries: PropTypes.func.isRequired,
  entries: PropTypes.array.isRequired,
  deleteEntry: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  entries: state.entries.entries
});

export default connect(mapStateToProps, { fetchEntries, deleteEntry })(AllEntries);

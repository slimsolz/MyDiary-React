import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEntry} from '../../actions/entriesAction';
import PropTypes from 'prop-types';


class ViewEntry extends Component {

  componentDidMount() {
    const { search } = this.props.location;
    const id = search ? search.split('=')[1] : '';

    this.props.fetchEntry(Number(id));
  }

  render() {
    return (
      <div>
        <div className="mainWrapper">
          <div className="wrapper inner-wrapper">
            <div className="row">
              <section className="col-12 mainentries">
                <div className="row">
                  <div className="new_link col-12">
                    <Link to="/entries" className="newLink">All Entries</Link>
                  </div>
                  <div className="" id="display">
                    <p id="alert"></p>
                  </div>
                  <div className="content col-12">
                    <div className="content-wrapper">
                      <h1>{this.props.entry.title}</h1>
                      <p>{this.props.entry.story}</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ViewEntry.propsTypes = {
  fetchEntry: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  entry: state.entries.entry
});

export default connect(mapStateToProps, { fetchEntry })(ViewEntry);

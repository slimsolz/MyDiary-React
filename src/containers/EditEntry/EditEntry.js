import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateEntry } from '../../actions/entriesAction';

class EditEntry extends Component {
  constructor() {
    super();

    this.state = {
      id: '',
      title: '',
      story: '',
      category: '',
      image: 'life.jpg'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { search } = this.props.location;
    const id = search ? search.split('=')[1] : '';
    this.setState({ id });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const id = Number(this.state.id);
    const entry = {
      title: this.state.title,
      story: this.state.story,
      category: this.state.category,
      image: this.state.image
    };

    this.props.updateEntry(id, entry)
    .then(res => {
      this.props.history.push('/entries');
    });
  }

  render() {
    return (
      <div className="mainWrapper">
        <div className="wrapper inner-wrapper">
          <div className="row">
            <section className="col-12 mainentries">
              <div className="row">
                <div className="new_link col-12">
                  <Link to="/entries">All Entries</Link>
                </div>
                <div className="" id="display">
                  <p id="alert"></p>
                </div>
                <div className="edit_form">
                  <h1 className="headin">Modify Entry</h1>
                  <form id="modify_form" role="form" onSubmit={this.handleSubmit}>
                    <div>
                      <label className="col-3">Title:</label>
                      <input
                        className="form-input col-8 "
                        type="text"
                        id="title"
                        name="title"
                        required
                        onChange={this.handleChange}/>
                    </div>
                    <div>
                      <label className="col-3">Category:</label>
                      <input
                        className="form-input col-8"
                        type="text"
                        id="category"
                        name="category"
                        onChange={this.handleChange} />
                    </div>
                    <div>
                      <label className="col-3">Story:</label>
                      <textarea
                        id="story"
                        name="story"
                        className="form-input col-8"
                        rows="5"
                        cols="6"
                        required
                        onChange={this.handleChange}>
                      </textarea>
                    </div>
                    <div>
                      <div className="col-3"></div>
                      <input
                        type="submit"
                        name="submit"
                        value="SAVE"
                        className="form-input col-9" />
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { updateEntry })(EditEntry);

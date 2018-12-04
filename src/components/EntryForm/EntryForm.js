import React from 'react';
import { Link } from 'react-router-dom';

const EntryForm = (props) => {
  return (
    <div className="mainWrapper">
      <div className=" wrapper inner-wrapper">
        <div className="row">
          <section className="col-12 mainentries">
            <div className="row">
              <div className="new_link col-12">
                <Link to="/entries">All Entries</Link>
              </div>
              <div className="" id="display">
                <p id="alert"></p>
              </div>
              <div className="new_form">
                <h1 className="headin">New Entry</h1>
                <form id="add_new_form" role="form" onSubmit={props.submit}>
                  <div>
                    <label className="col-3">Title:</label>
                    <input
                      className="form-input col-8"
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Title"
                      required
                      onChange={props.changed} />
                  </div>
                  <div>
                    <label className="col-3">Category:</label>
                    <input
                      className="form-input col-8"
                      type="text"
                      id="category"
                      name="category"
                      placeholder="Category"
                      onChange={props.changed}/>
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
                      onChange={props.changed}>
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

export default EntryForm;

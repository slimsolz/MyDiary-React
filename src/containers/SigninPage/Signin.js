import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin } from '../../actions/userAction';


class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };

   this.props.signin(user)
      .then((res) => {
        this.props.history.push('/entries');
      });
  }

  render() {
    return (
      <div className="main-wrapper">
      <div className="row">
        <div className="col-12">
          <article className="loginbox">
            <div className="logindiv">
              <h1>Login</h1>
            </div>
            <div className="loginform">
              <form onSubmit={this.onSubmit}>
                <div className="inputdiv col-12">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                    onChange={this.handleInputChange}
                    required />
                  <br/>
                  <label htmlFor="email">EMAIL ADDRESS</label>
                </div>
                <div className="inputdiv col-12">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter password"
                    onChange={this.handleInputChange}
                    required />
                  <br/>
                  <label htmlFor="password">PASSWORD</label>
                </div>
                <div className="inputdiv col-12">
                  <div className="passlnk col-12">
                    <input
                      type="submit"
                      name=""
                      value="Sign in" />
                  </div>
                </div>
              </form>
            </div>
          </article>
        </div>
      </div>
    </div>
    )
  }
}

export default connect(null, { signin })(Signin);

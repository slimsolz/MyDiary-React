import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/userAction';

class Signup extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      repassword: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    let newPassword = '';
    if (this.state.password === this.state.repassword) {
      newPassword = this.state.password;
    }
    const user = {
      email: this.state.email,
      password: newPassword
    };

   this.props.signup(user)
      .then((res) => {
        this.props.history.push('/entries');
      });
  }
  render() {
    return (
       <div className="main-wrapper">
        <div className="row">
          <div className="col-12">
            <div className="" id="display">
              <p id="alert"></p>
            </div>
            <article className="signinbox">
              <div className="logindiv">
                <h1>Sign Up</h1>
              </div>
              <div className="loginform">
                <form name="signup_form" id="signup_form" onSubmit={this.onSubmit}>
                  <div className="inputdiv col-12">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Email"
                      onChange={this.handleInputChange}
                      required />
                    <br />
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
                    <br />
                    <label htmlFor="password">PASSWORD</label>
                  </div>
                  <div className="inputdiv col-12">
                    <input
                      type="password"
                      name="repassword"
                      id="repassword"
                      placeholder="Re-Enter password"
                      onChange={this.handleInputChange}
                      required />
                    <br />
                    <label htmlFor="repassword">CONFIRM PASSWORD</label>
                  </div>
                  <div className="inputdiv col-12">
                    <div className="passlnk col-12">
                      <input
                        type="submit"
                        name="signup_btn"
                        id="signup_btn"
                        value="Sign Up" />
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

export default connect(null, { signup })(Signup);

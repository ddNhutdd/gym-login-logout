import React from "react";
import Home from "./component/home";
import Login from "./component/login";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: { email: '', password: '', isRemember: false },
      isLoggedIn: false
    };
  }

  renderContent = () => {
    return this.state.isLoggedIn ?
      <Home
        logoutHandle={this.logoutHandle}
      /> :
      <Login
        inputChangeHandle={this.inputChangeHandle}
        values={this.state.form}
        checkboxChangeHandle={this.checkboxChangeHandle}
        formSubmitHandle={this.formSubmitHandle}
      />
  }

  inputChangeHandle = (ev) => {
    const target = ev.target;
    this.setState({
      form: {
        ...this.state.form,
        [target.name]: target.value
      }
    })
  }

  checkboxChangeHandle = (ev) => {
    this.setState({
      form: {
        ...this.state.form,
        isRemember: ev.target.checked
      }
    })
  }

  formSubmitHandle = (ev) => {
    ev.preventDefault();
    if (!this.validateInput()) return;
    const remember = this.state.form.isRemember;
    if (remember) {
      this.setState({
        isLoggedIn: true
      })
    }
    else {
      this.setState({
        form: { email: '', password: '', isRemember: false },
        isLoggedIn: true
      })
    }
  }

  logoutHandle = () => this.setState({
    isLoggedIn: false
  })

  validateInput = () => {
    return this.state.form.email && this.state.form.password ? true : false;
  }

  render() {
    return <>{this.renderContent()}</>
  }
}

export default App

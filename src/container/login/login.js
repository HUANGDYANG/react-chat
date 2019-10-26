import React from "react";
import Logo from "../../component/logo/logo";
import { List, InputItem, WingBlank, WhiteSpace, Button } from "antd-mobile";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../redux/user.redux";
import JSFrom from "../../component/JS-form/JS-form.js";

@connect(
  state => state.user,
  { login }
)
@JSFrom
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.selfState = { selfTest: 22 };

    this.register = this.register.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  register() {
    this.props.history.push("/register");
  }
  handleLogin() {
    this.props.login(this.props.state);
  }

  render() {
    return (
      <div>
        {this.props.redirectTo && this.props.redirectTo != "/login" ? (
          <Redirect to={this.props.redirectTo} />
        ) : null}
        <Logo></Logo>
        {console.log(this.props.name)}
        {this.props.name}
        {this.props.state.test}
        {this.selfState.selfTest}
        <WingBlank>
          <List>
            {this.props.msg ? (
              <p className="error-msg">{this.props.msg}</p>
            ) : null}
            <InputItem onChange={v => this.props.handleChange("user", v)}>
              用户
            </InputItem>
            <WhiteSpace />
            <InputItem
              onChange={v => this.props.handleChange("pwd", v)}
              type="password"
            >
              密码
            </InputItem>
          </List>
          <WhiteSpace />
          <Button onClick={this.handleLogin} type="primary">
            登录
          </Button>
          <WhiteSpace />
          <Button onClick={this.register} type="primary">
            注册
          </Button>
        </WingBlank>
      </div>
    );
  }
}

export default Login;

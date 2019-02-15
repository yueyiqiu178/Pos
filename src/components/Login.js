import React from 'react';
import MyTop from './Top';

import ddl from './img/ddl.gif';
import ddla from './img/ddla.gif';
import ddlb from './img/ddlb.gif';

import cz from './img/cz.gif';
import cza from './img/cza.gif';
import czb from './img/czb.gif';

class Login extends React.Component {

    constructor() {
        super();
        this.state = { 
          loginSrc: ddl,
          resetSrc: cz,
          myindex : 1,
          uname : "",
          upwd : ""
      };

      this.doLogin = this.doLogin.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    doLogin(e){

        if(this.state.uname==""){
          alert("請輸入帳號");
          return;
        }


        if(this.state.upwd==""){
          alert("請輸入密碼");
          return;
        }

        alert("end");

    }


    handleChange(event) {

      var inputName = event.target.name;
      var inputValue = event.target.value;

      console.log("handleChange="+event.target.name);


      if(inputName=="uname")
        this.setState({uname: inputValue});
      if(inputName=="upwd")
        this.setState({upwd: inputValue});

    }


    render() {
        return (
          <div>
          <MyTop></MyTop>

          <div className="out">
          <div className="login_style">
            <center>

            <table>
              <tbody>
              <tr>
                <td>帳號:</td>
                <td><input type="text" id="uname" name="uname" value={this.state.uname} onChange={this.handleChange} /></td>
              </tr>
              <tr>
                <td>密&nbsp;碼:</td>
                <td><input type="password" id="upwd" name="upwd" value={this.state.upwd} onChange={this.handleChange} /></td>
              </tr>
              <tr>
                <td colSpan={2} align="center">
                <img border="0" style={{cursor:"pointer"}} src={this.state.loginSrc} id="lg" 
                    onMouseOver = {() => this.setState({ loginSrc: ddla })}
                    onMouseOut = {() => this.setState({ loginSrc: ddl })}
                    onMouseUp = {() => this.setState({ loginSrc: ddla })}       	
                    onMouseDown = {() => this.setState({ loginSrc: ddlb })}
                    onClick = {this.doLogin}
                                        />
                <img border="0" style={{cursor:"pointer"}} src={this.state.resetSrc} id="cz"
                    onMouseOver = {() => this.setState({ resetSrc: cza })}
                    onMouseOut = {() => this.setState({ resetSrc: cz })}
                    onMouseUp = {() => this.setState({ resetSrc: cza })}       	
                    onMouseDown = {() => this.setState({ resetSrc: czb })}
                    /></td>
              </tr>
              </tbody>
            </table>
        
          </center>
        </div>
        </div>

        </div>
        );
    }

}

export default Login;
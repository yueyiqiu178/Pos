import React from 'react';
import sy from './img/sy.gif';
import sya from './img/sya.gif';
import syb from './img/syb.gif';
import ReactDOM from 'react-dom';

import xgmm from './img/xgmm.gif';
import xgmma from './img/xgmma.gif';
import xgmmb from './img/xgmmb.gif';

import dl from './img/dl.gif';
import dla from './img/dla.gif';
import dlb from './img/dlb.gif';

import zx from './img/zx.gif';
import zxa from './img/zxa.gif';
import zxb from './img/zxb.gif';


class Top extends React.Component {


    constructor() {
        super();
        this.state = { a1Src: sy,
                        a2Src: xgmm,
                        a3Src: dl,
                        a4Src: zx
                    };
        
    }

    render() {
        return(
        <div>
        <center>
        <br/><h1 style={{color: "#DFC77F"}}><i>飛達商貿有限公司POS系統</i></h1>
        </center>
      <div styles="position:absolute;top:65px">

        <table align="right">
        <tbody>
          <tr align="right">
          
            <td><a href="index.jsp" target="bottom">
                <img border="0" src={this.state.a1Src} id="sy" ref = "a1"
                  onMouseOver = {() => this.setState({ a1Src: sya })}
                  onMouseOut = {() => this.setState({ a1Src: sy })}
                  onMouseUp = {() => this.setState({ a1Src: sya })}
                  onMouseDown = {() => this.setState({ a1Src: syb })} /></a></td>
            <td><a href="adminlogin.jsp" target="bottom">
                <img border="0" src={this.state.a3Src} id="dl"
                  onMouseOver = {() => this.setState({ a3Src: dla })}
                  onMouseOut = {() => this.setState({ a3Src: dl })}
                  onMouseUp = {() => this.setState({ a3Src: dla })}        	
                  onMouseDown = {() => this.setState({ a3Src: dlb })} /></a></td>
            <td><a href="changepwd.jsp" target="bottom">
                <img border="0" src={this.state.a2Src} id="xgmm"
                  onMouseOver = {() => this.setState({ a2Src: xgmma })}
                  onMouseOut = {() => this.setState({ a2Src: xgmm })}
                  onMouseUp = {() => this.setState({ a2Src: xgmma })} 
                  onMouseDown = {() => this.setState({ a2Src: xgmmb })} /></a></td>
            <td><a href="ManageServlet?action=logout" target="bottom">
                <img border="0" src={this.state.a4Src} id="zx"
                  onMouseOver = {() => this.setState({ a4Src: zxa })}
                  onMouseOut = {() => this.setState({ a4Src: zx })}
                  onMouseUp = {() => this.setState({ a4Src: zxa })}   	
                  onMouseDown = {() => this.setState({ a4Src: zxb })} /></a></td>
          </tr>
          </tbody>
        </table>

      </div>




      </div>   
        )
    }

}


export default Top;
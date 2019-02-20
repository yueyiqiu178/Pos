import React, { Component } from 'react';
import MyMenu from './Menu';
import './App.css';
import spzl from './img/spzl.gif';
import splb from './img/splb.gif';
import khzl from './img/khzl.gif';
import gyszl from './img/gyszl.gif';
import cgxx from './img/cgxx.gif';
import cgth from './img/cgth.gif';
import xsxx from './img/xsxx.gif';
import xsth from './img/xsth.gif';
import kctj from './img/kctj.gif';
import xtwh from './img/xtwh.gif';

class App extends Component {
  render() {
    return (
  
        /* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React,MMMMM
          </a>
        </header>
        <button >sss</button> */

<div className="row">
    <div class="col-sm-3">
    <MyMenu></MyMenu>
    </div>
    <div class="col-sm-9">
     

      <table width="80%" height="60%">
      	<tr align="center" height="100">
      	  <td><div class="block">
      	    <img src={spzl} onmouseover="border='1'" onmouseout="border='0'"/><p/>
      	    <a href="ManageServlet?action=search&key=&type=goodsinfo" 
      	    			target="mainFrame"><font>商品资料</font></a>
      	  </div></td>
      	  <td><div class="block">
      	    <img src={splb} onmouseover="border='1'" onmouseout="border='0'"/><p/>
      	    <a href="ManageServlet?action=search&key=&type=goodsclassinfo" 
      	    			target="mainFrame"><font>商品类别</font></a>
      	  </div></td>
      	  <td><div class="block">
      	    <img src={khzl} onmouseover="border='1'" onmouseout="border='0'"/><p/>
      	    <a href="ManageServlet?action=search&key=&type=consumerinfo"
      	    			target="mainFrame"><font>客户资料</font></a>
      	  </div></td>
      	  <td><div class="block">
      	    <img src={gyszl} onmouseover="border='1'" onmouseout="border='0'"/><p/>
      	    <a href="ManageServlet?action=search&key=&type=providerinfo"
      	    			target="mainFrame"><font>供应商资料</font></a>
      	  </div></td>
      	</tr>
      	<tr align="center" height="100">
      	  <td><div class="block">
      	    <img src={cgxx} onmouseover="border='1'" onmouseout="border='0'"/><p/>
      	    <a href="ManageServlet?action=search&key=&type=stockinfo"
      	    			target="mainFrame"><font>采购信息</font></a>
      	  </div></td>
      	  <td><div class="block">
      	    <img src={cgth} onmouseover="border='1'" onmouseout="border='0'"/><p/>
      	    <a href="ManageServlet?action=search&key=&type=providerback"
      	    			target="mainFrame"><font>采购退货</font></a>
      	  </div></td>
      	  <td><div class="block">
      	    <img src={xsxx} onmouseover="border='1'" onmouseout="border='0'"/><p/>
      	    <a href="ManageServlet?action=search&key=&type=sellinfo"
      	    			target="mainFrame"><font>销售信息</font></a>
      	  </div></td>
      	  <td><div class="block">
      	    <img src={xsth} onmouseover="border='1'" onmouseout="border='0'"/><p/>
      	    <a href="ManageServlet?action=search&key=&type=consumerback"
      	    			target="mainFrame"><font>销售退货</font></a>
      	  </div></td>      	
      	</tr>
      	<tr align="center" height="100">
      	  <td><div class="block">
      	    <img src={kctj} onmouseover="border='1'" onmouseout="border='0'"/><p/>
      	    <a href="statistic.jsp"><font>库存统计</font></a>
      	  </div></td>
      	  <td><div class="block">
      	    <img src={xtwh} onmouseover="border='1'" onmouseout="border='0'"/><p/>
      	    <a href="ManageServlet?action=search&key=&type=admininfo"
      	    			target="mainFrame"><font>系统维护</font></a>
      	  </div></td>
      	</tr>
      </table>


    </div>
  </div>


    );
  }
}

export default App;

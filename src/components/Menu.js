import React from 'react';
import fav from './img/fav.gif';
import pkg from './img/pkg-open.gif';

class Menu extends React.Component {
    render() {
      return (
        <table border="0">
        <tr><td>
             <a id="A" href="#" onclick="check(document.all.A,document.all.AA)"><img border="0" src={pkg}/></a><a href="#"><font>POS信息管理系統</font></a>
        </td></tr>
        <tr><td>        
          <table id="AA" border="0" styles="display:black">
            <tr><td>
                &nbsp;&nbsp;
              <a id="B" href="#" onclick="check(document.all.B,document.all.BB)"><img border="0" src={pkg} /></a><a href="#"><font>基本信息</font></a>
            </td></tr>
            <tr><td>
                <table id="BB" border="0" styles="display:black">
                  <tr><td>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img border="0" src={fav} /><a href="ManageServlet?action=search&key=&type=goodsinfo" target="mainFrame"><font>商品資料</font></a>
                  </td></tr>
                  <tr><td>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img border="0" src={fav}/><a href="ManageServlet?action=search&key=&type=goodsclassinfo" target="mainFrame"><font>商品類別</font></a>
                  </td></tr>
                  <tr><td>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img border="0" src={fav} /><a href="ManageServlet?action=search&key=&type=consumerinfo" target="mainFrame"><font>客戶資料</font></a>
                  </td></tr>
                  <tr><td>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img border="0" src={fav}/><a href="ManageServlet?action=search&key=&type=providerinfo" target="mainFrame"><font>供應商資料</font></a>
                  </td></tr>
                </table>
            </td></tr>
            <tr><td>
                &nbsp;&nbsp;
              <a id="C" href="#" onclick="check(document.all.C,document.all.CC)"><img border="0" src="img/pkg-open.gif"/></a><a href="#"><font>業務處理</font></a>
            </td></tr>
            <tr><td>
              <table id="CC" border="0" styles="display:black">
                  <tr><td>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a id="E" href="#" onclick="check(document.all.E,document.all.EE)"><img border="0" src="img/pkg-open.gif"/></a><a href="#"><font>商品采購</font></a>
                  </td></tr>
                  <tr><td>
                    <table id="EE" border="0" styles="display:black">
                        <tr><td>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <img border="0" src="img/fav.gif"/><a href="ManageServlet?action=search&key=&type=stockinfo" target="mainFrame"><font>采購信息</font></a>
                        </td></tr> 
                         <tr><td>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <img border="0" src="img/fav.gif"/><a href="ManageServlet?action=search&key=&type=providerback" target="mainFrame"><font>采購退貨</font></a>
                        </td></tr> 	  
                    </table>
                  </td></tr>
                  <tr><td>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a id="F" href="#" onclick="check(document.all.F,document.all.FF)"><img border="0" src="img/pkg-open.gif"/></a><a href="#"><font>商品銷售</font></a>
                  </td></tr>
                  <tr><td>
                    <table id="FF" border="0" styles="display:black">
                        <tr><td>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <img border="0" src="img/fav.gif"/><a href="ManageServlet?action=search&key=&type=sellinfo" target="mainFrame"><font>銷售信息</font></a>
                        </td></tr> 
                         <tr><td>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <img border="0" src="img/fav.gif"/><a href="ManageServlet?action=search&key=&type=consumerback" target="mainFrame"><font>銷售退貨</font></a>
                        </td></tr>   	  	  
                    </table>          	  
                  </td></tr>
              </table>
            </td></tr>
            <tr><td>
                &nbsp;&nbsp;
              <a id="D" href="#" onclick="check(document.all.D,document.all.DD)"><img border="0" src="img/pkg-open.gif"/></a><a href="#"><font>業務統計</font></a>
            </td></tr>
            <tr><td>
              <table id="DD" border="0" styles="display:black">
                  <tr><td>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img border="0" src="img/fav.gif"/><a href="statistic.jsp" target="mainFrame"><font>庫存統計</font></a>
                  </td></tr>
              </table>
            </td></tr>
            <tr><td>
              <table border="0">
                <tr><td>
                  &nbsp;&nbsp;&nbsp;&nbsp; 
                  <img border="0" src="img/fav.gif"/><a href="ManageServlet?action=search&key=&type=admininfo" target="mainFrame"><font>系統維護</font></a>
                </td></tr>
              </table>
            </td></tr>
          </table>
        </td></tr>
      </table>
      );
    }
  }
  
  export default Menu;
  
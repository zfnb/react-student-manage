import React, {useState} from 'react';
import {withRouter} from 'react-router-dom'
import {login} from "../../api/request";
import './login.css'

function StudentLogin(props) {
    const [loginInfo, setLoginInfo] = useState({
        account: "",
        password: ""
    })
    return (
        <div className="loginBox">
            <div className="login">
                <h2>登录</h2>
                <form>
                    <div className="item">
                        <span>账号:</span>
                        <input type="text"
                               value={loginInfo.account}
                               onChange={(e) => {
                                   setLoginInfo({
                                       ...loginInfo,
                                       account: e.target.value
                                   });
                               }}
                               placeholder="请输入账号" />
                    </div>
                    <div className="item">
                        <span>密码:</span>
                        <input type="password"
                               value={loginInfo.password}
                               onChange={(e) => {
                                   setLoginInfo({
                                       ...loginInfo,
                                       password: e.target.value
                                   });
                               }}
                               placeholder="请输入密码" />
                    </div>
                </form>
                <input type="button"
                       className=" btn login-btn"
                       value="登录"
                       onClick={() => {
                           login({
                               account: loginInfo.account,
                               password: loginInfo.password
                           }).then(res => {
                               if (res.data.status === 'success') {
                                   props.history.push('/home')
                               } else {
                                   alert(res.data.msg);
                               }
                           })
                       }}
                />
                <input type="button"
                       onClick={() => {
                           props.history.push('/register')
                       }}
                       className="btn register-btn" value="注册" />
            </div>
        </div>
    );
}

export default withRouter(StudentLogin);






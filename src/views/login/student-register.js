import React, {useState} from 'react';
import './register.css'
import logo from './left.png'
import {withRouter} from 'react-router-dom'
import {register} from '../../api/request'

function StudentRegister(props) {
    const [userInfo, setUserInfo] = useState({
        account: "",
        username: "",
        password: "",
        rePassword: ""
    });

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setUserInfo({
            ...userInfo,
            [name]: value
        })
    }

    return (
        <div className="register-box">
            <div className="register">
                <img className="logo"
                     onClick={() => {
                         props.history.push('/login');
                     }}
                     src={logo} alt="回退" />
                <h1>注册</h1>
                <form>
                    <div className="item">
                        <span>账号：</span>
                        <input type="text"
                               name='account'
                               onChange={handleChange}
                               placeholder="请输入账号"
                        />
                    </div>
                    <div className="item">
                        <span>用户名：</span>
                        <input type="text"
                               name='username'
                               onChange={handleChange}
                               placeholder="请输入用户名" />
                    </div>
                    <div className="item">
                        <span>密码：</span>
                        <input type="password"
                               name="password"
                               onChange={handleChange}
                               placeholder="请输入密码" />
                    </div>
                    <div className="item">
                        <span>确认密码：</span>
                        <input
                            type="password"
                            name="rePassword"
                            onChange={handleChange}
                            placeholder="确认密码" />
                    </div>
                </form>
                <input type="button"
                       className="btn"
                       onClick={() => {
                           register(userInfo).then(res => {
                               if (res.data.status === 'success') {
                                   alert(res.data.msg);
                                   props.history.replace('/login');
                               } else {
                                   alert(res.data.msg)
                               }
                           })
                       }}
                       value="注册" />
            </div>
        </div>
    );
}

export default withRouter(StudentRegister);
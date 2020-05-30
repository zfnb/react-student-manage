import React from 'react';
import {addStudent} from '../../api/request'
import {withRouter} from 'react-router-dom'

class StudentAdd extends React.Component {
    state = {
        name: "",
        sNo: "",
        sex: "",
        phone: "",
        address: "",
        email: "",
        birth: ""
    }

    validator(state) {
        if (state.phone.length !== 11) {
            alert("请输入十一位手机号");
            return false;
        }
        const reg = /^([a-zA-Z]|[0-9])(\w)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if (!reg.test(this.state.email)) {
            alert("邮箱格式不正确");
            return false;
        }
        return true;
    }

    render() {
        return (
            <div className="model-form">
                <div className="form-wrapper">
                    <div>
                        <label>
                            姓名： <input type="text"
                                       value={this.state.name}
                                       onChange={(e) => {
                                           this.setState({
                                               ...this.state,
                                               name: e.target.value
                                           })
                                       }}
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            学号： <input type="text"
                                       value={this.state.sNo}
                                       onChange={(e) => {
                                           const sNo = e.target.value.replace(/\D/g, '');
                                           this.setState({
                                               ...this.state,
                                               sNo
                                           })
                                       }}
                        />
                        </label>
                    </div>
                    <div>
                        <span>性别：</span>
                        <label>
                            <input type="radio" name='sex'
                                   onChange={(e) => {
                                       this.setState({
                                           ...this.state,
                                           sex: 0
                                       })
                                   }}
                                   checked={this.state.sex === 0} />男
                        </label>
                        <label>
                            <input type="radio" name='sex'
                                   onChange={(e) => {
                                       this.setState({
                                           ...this.state,
                                           sex: 1
                                       })
                                   }}
                                   checked={this.state.sex === 1} />女
                        </label>
                    </div>
                    <div>
                        <label>
                            邮箱： <input type="text"
                                       onChange={(e) => {
                                           this.setState({
                                               ...this.state,
                                               email: e.target.value
                                           })
                                       }}
                                       value={this.state.email} />
                        </label>
                    </div>
                    <div>
                        <label>
                            出生日期： <input type="text"
                                         onChange={(e) => {
                                             const birth = e.target.value.replace(/\D/g, '');
                                             this.setState({
                                                 ...this.state,
                                                 birth
                                             })
                                         }}
                                         value={this.state.birth} />
                        </label>
                    </div>
                    <div>
                        <label>
                            手机号： <input type="text"
                                        onChange={(e) => {
                                            const phone = e.target.value.replace(/\D/g, '');
                                            this.setState({
                                                ...this.state,
                                                phone
                                            })
                                        }}
                                        value={this.state.phone} />
                        </label>
                    </div>
                    <div>
                        <label>
                            地址： <input type="text"
                                       onChange={(e) => {
                                           this.setState({
                                               ...this.state,
                                               address: e.target.value
                                           })
                                       }}
                                       value={this.state.address} />
                        </label>
                    </div>
                    <div>
                        <button onClick={() => {
                            const result = this.validator(this.state);
                            if (result) {
                                addStudent({...this.state}).then(res => {
                                    if (res.msg === '添加成功') {
                                        alert(res.msg);
                                        this.props.history.push(`/home/studentList`);
                                    } else {
                                        alert(res.msg);
                                        return;
                                    }
                                })
                            }
                        }}>提交
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(StudentAdd);
import React from 'react';
import './model.css'
import {editStudent} from '../../api/request'

class EditStudent extends React.Component {
    state = {
        name: this.props.name,
        sNo: this.props.sNo,
        sex: this.props.sex,
        phone: this.props.phone,
        address: this.props.address,
        email: this.props.email,
        birth: this.props.birth
    }

    render() {
        return (
            <div className='model' onClick={(e) => {
                if (e.target.className === 'model') {
                    this.props.onHandleModel && this.props.onHandleModel();
                }
            }}>
                <div className='model-form'>
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
                                           disabled
                                           value={this.state.sNo}
                                           onChange={(e) => {
                                               this.setState({
                                                   ...this.state,
                                                   sNo: e.target.value
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
                                                 this.setState({
                                                     ...this.state,
                                                     birth: e.target.value
                                                 })
                                             }}
                                             value={this.state.birth} />
                            </label>
                        </div>
                        <div>
                            <label>
                                手机号： <input type="text"
                                            onChange={(e) => {
                                                this.setState({
                                                    ...this.state,
                                                    phone: e.target.value
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
                                console.log(this.state);
                                editStudent(this.state).then(() => {
                                    alert("修改成功");
                                    console.log(this.props);
                                    this.props.onHandleModel && this.props.onHandleModel();
                                    this.props.history.replace("/home/studentAdd")
                                    this.props.history.replace("/home/studentList")
                                })
                            }}>提交
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditStudent;
import React, {useEffect, useState} from 'react';
import EditStudent from "./EditStudent";
import './index.css'
import {deleteStudent, queryStudentByKey, queryStudentByPage} from '../../api/request'
import PageControl from "../../components/page/Pager";
import SearchStudent from "./SearchStudent";

function StudentList(props) {
    const [allStudent, setAllStudent] = useState([])
    const [model, setModel] = useState(false)
    const [item, setItem] = useState({})
    const [limit,] = useState(5)
    const [current, setCurrent] = useState(1)
    const [total, setTotal] = useState(0)
    const [panelNumber,] = useState(5)
    useEffect(() => {
        queryStudentByPage(current, limit).then(res => {
            setTotal(res.data.cont);
            setAllStudent([...res.data.findByPage]);
        });
    }, [current, limit])
    const tr = allStudent.map(item => <tr key={item.id}>
        <td>{item.sNo}</td>
        <td>{item.name}</td>
        <td>{item.sex === 0 ? "男" : "女"}</td>
        <td>{item.email}</td>
        <td>{new Date().getFullYear() - item.birth}</td>
        <td>{item.phone}</td>
        <td>{item.address}</td>
        <td>
            <input className='button edit' type='button'
                   onClick={() => {
                       setItem(item);
                       setModel(!model);
                   }}
                   value="修改" />
            <input className='button delete'
                   type='button' value="删除"
                   onClick={() => {
                       const result = window.confirm("操作无法逆转，确定删除吗？");
                       if (result) {
                           deleteStudent(item.sNo).then(res => {
                               alert(res.msg);
                               props.history.replace(`${props.match.path}/studentAdd`)
                               props.history.replace(`${props.match.path}/studentList`)
                           })
                       }
                   }}
            />
        </td>
    </tr>)

    return (
        <div className='student-list'>
            <SearchStudent onQueryStudentByKey={searchInfo => {
                if (!searchInfo.key) {
                    queryStudentByPage(current, limit).then(res => {
                        setTotal(res.data.cont);
                        setAllStudent([...res.data.findByPage]);
                    });
                } else {
                    queryStudentByKey({
                        search: searchInfo.key,
                        sex: searchInfo.sex,
                        page: current,
                        size: limit
                    }).then(res => {
                        setAllStudent(res.data.searchList);
                        setTotal(res.data.cont);
                    })
                }
            }} />
            <table>
                <thead>
                <tr>
                    <th>学号</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>邮箱</th>
                    <th>年龄</th>
                    <th>手机号</th>
                    <th>住址</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {tr}
                </tbody>
            </table>
            {model ? <EditStudent  onHandleModel={() => {
                setModel(!model);
            }} {...item} {...props} /> : null}
            <PageControl panelNumber={panelNumber}
                         limit={limit}
                         total={total}
                         current={current}
                         onPageChange={target => {
                             setCurrent(target);
                             //根据分页更新学生列表数据
                         }} />
        </div>
    );
}

export default StudentList;

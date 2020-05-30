import React, {useState} from 'react';
import './search.css'

function SearchStudent(props) {
    const [searchInfo, setSearchInfo] = useState({
        key:"",
        sex:-1
    })
    return (
        <div className='search-student'>
            <span className='title'>按关键字查找学生:</span>
            <input placeholder="请输入邮箱或者学生学号" type="text" value={searchInfo.key} onChange={(e) => {
                setSearchInfo({
                    ...searchInfo,
                    key: e.target.value
                })
            }} />
            <div className='search-main'>
                <label>
                    男
                    <input type="radio" name='sex'
                           onChange={() => {
                               // searchInfo.sex=0;
                               setSearchInfo({
                                   ...searchInfo,
                                   sex: 0
                               })
                           }}
                           checked={searchInfo.sex === 0} />
                </label>
                <label>
                    女
                    <input type="radio" name='sex'
                           onChange={() => {
                               // searchInfo.sex=0;
                               setSearchInfo({
                                   ...searchInfo,
                                   sex: 1
                               })
                           }}
                           checked={searchInfo.sex === 1} />
                </label>
                <label>
                    全部
                    <input type="radio"
                           name='sex'
                           onChange={() => {
                               // searchInfo.sex = -1;
                               setSearchInfo({
                                   ...searchInfo,
                                   sex: -1
                               })
                           }}
                           checked={searchInfo.sex === -1} />
                </label>
                <button className='search-btn' onClick={() => {

                    props.onQueryStudentByKey&&props.onQueryStudentByKey(searchInfo);
                }}>查找
                </button>
            </div>
        </div>
    );
}

export default SearchStudent;
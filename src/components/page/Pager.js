import React from "react";
import './pager.css'
/*
* 分页组件
* 属性
* 1：current:初始页码
* 2：total:总页码
* 3：limit:页容量，每页显示页码数
* 4：panelNumber:数字页码最多显示多少个
*/
export default function (props) {
    const pageNumber = getTotalPage();
    if (pageNumber === 0) {
        return null;
    }
    const minNumber = getMinNumber();
    const maxNumber = getMaxNumber(minNumber);
    let numberArr = [];
    for (let i = minNumber; i <= maxNumber; i++) {
        numberArr.push(<span onClick={() => {
            pageChange(i, props)
        }} key={i} className={props.current === i ? 'active item' : 'item'}>{i}</span>)
    }
    return (
        <>
            <span onClick={() => {
                pageChange(1, props)
            }}
                  className={props.current === 1 ? 'item disabled' : 'item'}>
                首页
            </span>
            <span onClick={() => pageChange(props.current - 1 < 1 ? 1 : props.current - 1, props)}
                  className={props.current === 1 ? 'item disabled' : 'item'}>
                上一页
            </span>
            {numberArr}
            <span onClick={() => pageChange(props.current + 1 > pageNumber ? props.current : props.current + 1, props)}
                  className={props.current === pageNumber ? 'item disabled' : 'item'}>
                下一页
            </span>
            <span onClick={() => pageChange(pageNumber, props)}
                  className={props.current === pageNumber ? 'item disabled' : 'item'}>尾页</span>
            <span>
                {props.current}
            </span>
            /
            <span>
                {pageNumber?pageNumber:null}
            </span>
        </>
    );

    //获取最小数字
    function getMinNumber() {
        let min = props.current - Math.floor(props.panelNumber / 2);
        if (min < 1) {
            min = 1;
        }
        return min;
    }

    //获取最大数字
    function getMaxNumber(minNumber) {
        let max = minNumber - 1 + props.panelNumber;
        if (max > pageNumber) {
            max = pageNumber;
        }
        return max;
    }

    function pageChange(target, props) {
        if (props.current === target) {
            return;
        } else {
            props.onPageChange && props.onPageChange(target);
        }
    }

    function getTotalPage() {
        return Math.ceil(props.total / props.limit);
    }
}

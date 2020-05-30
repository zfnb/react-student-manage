import React from 'react';
import {Redirect, Route} from 'react-router-dom'
import StudentList from "../../student-list/StudentList";
import StudentAdd from "../../student-add/StudentAdd";
import HeadLayout from "../../head/head-layout";
import FootLayout from "../../foot/foot-layout";
import LeftNav from "../left-nav/LeftNav";
import './index.css'
import {CSSTransition} from 'react-transition-group';
import 'animate.css'

function LeftMain(props) {
    return (
        <>
            <HeadLayout />
            <LeftNav {...props} />
            <div className="right-main">

                <Route exact path='/home/studentAdd'>
                    {({match}) => {
                        return <CSSTransition in={!!match}
                                              classNames={{
                                                  enter: "animate__animated fast animate__zoomInDown",
                                                  exit: "animate__animated fast animate__zoomOutDown",
                                              }}
                                              mountOnEnter={true}
                                              unmountOnExit={true}
                                              timeout={800}>
                            <StudentAdd {...props} />
                        </CSSTransition>
                    }}
                </Route>
                <Route exact path='/home/studentList'>
                    {({match}) => {
                        return <CSSTransition in={!!match}
                                              classNames={{
                                                  enter: "animate__animated fast animate__zoomInDown",
                                                  exit: "animate__animated fast animate__zoomOutDown",
                                              }}
                                              mountOnEnter={true}
                                              unmountOnExit={true}
                                              timeout={800}>
                            <StudentList {...props} />
                        </CSSTransition>
                    }}
                </Route>
                {/*<Route exact path={`${props.match.path}/studentAdd`} component={StudentAdd} />*/}
                {/*<Route exact path={`${props.match.path}/studentList`} component={StudentList} />*/}
                <Redirect to={`${props.match.path}/studentList`} />

            </div>
            {/* /.right-main */}
            <FootLayout />
        </>
    );
}

export default LeftMain;
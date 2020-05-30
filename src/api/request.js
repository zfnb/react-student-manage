import axios from 'axios';

axios.defaults.baseURL = "http://open.duyiedu.com"
// const appkey = 'BestLeaderJN_1569886865181'
const appkey = 'zf_yyy_1569734712113'

export function queryAllStudent() {
    return axios.get('/api/student/findAll', {
        params: {
            appkey
        }
    }).then(res => {
        return res.data;
    })
}

export function editStudent(paramsObj) {
    return axios.get('/api/student/updateStudent', {
        params: {
            appkey,
            ...paramsObj
        }
    }).then(res => {
        return res.data;
    })
}

export function deleteStudent(sNo) {
    return axios.get('/api/student/delBySno', {
        params: {
            appkey,
            sNo
        }
    }).then(res => {
        return res.data;
    })
}

export function addStudent(paramsObj) {
    return axios.get('/api/student/addStudent', {
        params: {
            appkey,
            ...paramsObj
        }
    }).then(res => {
        return res.data;
    })
}

export function queryStudentByPage(page, size) {
    return axios.get('/api/student/findByPage', {
        params: {
            appkey,
            page,
            size
        }
    }).then(res => {
        return res.data;
    })
}
export function queryStudentByKey({sex, search, page, size}) {
    return axios.get('/api/student/searchStudent', {
        params: {
            appkey,
            sex,
            search,
            page,
            size
        }
    }).then(res => {
        return res.data;
    })
}
export function register({account, username, password, rePassword}) {
    return axios({
        url:'/api/student/stuRegister',
        method: 'post',
        params: {
            appkey,
            account,
            username,
            password,
            rePassword
        },
    }).then(res => {
        return res
    })
}

export function login({account, password}) {
    return axios({
        url: '/api/student/stuLogin',
        method: 'post',
        params: {
            appkey,
            account,
            password,
        },
    }).then(res => {
        return res
    })
}
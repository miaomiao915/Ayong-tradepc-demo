import { nameSpace } from 'utils/index';

const ns = nameSpace('IncomeAn');

export const NOW_TIME = ns('NOW_TIME');
export const GET_PAGE = ns('GET_PAGE');
export const GET_DATA = ns('GET_DATA');
export const HANGLE_START = ns('HANGLE_START');
export const QUERY = ns('QUERY');
export const UPPAGET_CLICK = ns('UPPAGET_CLICK');
export const DOWNPAGE_CLICK = ns('DOWNPAGE_CLICK');

export function getT() { //获取当前时间
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    month = (month >= 10) ? month : ('0' + month);
    let day = time.getDate();
    day = (day >= 10) ? day : ('0' + day);
    let hour = time.getHours();
    let minute = time.getMinutes();
    minute = (minute >= 10) ? minute : ('0' + minute);
    let second = time.getSeconds();
    second = (second >= 10) ? second : ('0' + second);
    let retu = year + '-' + month + '-' + day + ' ' + hour + ': ' + minute + ': ' + second;
    // console.log(retu);
    return {
        type: NOW_TIME,
        data: { nowTime: retu }
    }
}
export function updateTime() { //更新时间
    return getT();
}
export function getPage(e) { //点击页条数
    let value = e.target.value; //条数
    return (dispatch, getState) => {
        let { newDataName, currentPage } = getState().IncomeAn;
        let dataName;
        let totalPage = 1;
        let current = 1;
        if (value === '页条数') {
            dataName = newDataName; //所有数据
        } else {
            if (newDataName.length === 0) {
                return;
            } else {
                totalPage = newDataName.length / (14 * value);
                dataName = sliceData(currentPage, value, newDataName);
            }
        }
        dispatch({
            type: GET_PAGE,
            data: {
                page: value,
                dataName: dataName,
                totalPage: totalPage,
                currentPage: current,
            }
        })
    }
}
export function getData() { //获取所有数据展示在页面
    return (dispatch, getState) => {
        let { allData } = getState().IncomeAn;
        let dataName = [];
        let comTime = [];
        allData.forEach(el => {
            Object.keys(el).map(k => {
                dataName.push(el[k]);
                if (k === 'create_time') {
                    comTime.push(el[k]);
                }
                return k;
            })
        });
        dispatch({
            type: GET_DATA,
            data: { dataName: dataName, comTime: comTime }
        })
    }
}
export function handleStart(e) {  //点击input框 onChange事件 
    let value = e.target.value;
    let name = e.target.name;
    return (dispatch, getState) => {
        let start; let end;
        let { dataStart, dataEnd } = getState().IncomeAn;
        if (name === 'start') {
            start = value;
            end = dataEnd;
        } else {
            start = dataStart;
            end = value;
        }
        dispatch({
            type: HANGLE_START,
            data: { dataStart: start, dataEnd: end } //时间范围显示
        })

    }
}
export function query() { //点击查询按钮
    return (dispatch, getState) => {
        let { dataStart, dataEnd, comTime, allData } = getState().IncomeAn;
        let selectedTime = [];
        let dataName = [];
        if (dataStart === '年-月-日' || dataEnd === '年-月-日') {
            window.alert('请输入完整的查询信息');
            return;
        } else {
            if (!compareTime(dataStart, dataEnd)) {
                window.alert('请输入正确的查询信息');
                return;
            } else {
                for (let i = 0; i < comTime.length; i++) {
                    if (compareTime(dataStart, comTime[i]) && compareTime2(comTime[i], dataEnd)) {
                        selectedTime.push(i); //这里是符合查询时间的index
                    }
                }
                selectedTime.forEach(el => {
                    Object.keys(allData[el]).map(k => {
                        dataName.push(allData[el][k]);
                        return k;
                    })
                })
            }
        }
        dispatch({
            type: QUERY,
            data: {
                selectedTime: selectedTime,
                dataName: dataName,
            }
        })
    }
}
function compareTime(t1, t2) {   //比较时间早晚
    let time1 = new Date(t1.replace(/-/g, '/'));
    let time2 = new Date(t2.replace(/-/g, '/'));
    if (time1 > time2) {
        return false;
    } else {
        return true;
    }
}
function compareTime2(t1, t2) { //比较时间早晚
    let time1 = new Date(t1.replace(/-/g, '/'));
    var time2 = new Date(t2.replace(/-/g, '/')).getTime() + 24 * 60 * 60 * 1000;
    var time3 = new Date(time2).toLocaleDateString();
    var time4 = new Date(time3);
    if (time1 >= time4) {
        return false;
    } else {
        return true;
    }
}
function sliceData(currentPage, page, newDataName) { //这是根据页数和页条数，显示当前数据的函数。
    let start = (currentPage - 1) * 14 * page;
    let end = start + (14 * page);
    let dataName = [];
    dataName = newDataName.slice(start, end);
    return dataName;
}
export function upPageClick() { //点击上一页
    return (dispatch, getState) => {
        let current;
        let dataName;
        let { currentPage, page, newDataName } = getState().IncomeAn;
        if (currentPage === 1) {
            return;
        } else {
            current = --currentPage; //页数-1
            dataName = sliceData(current, page, newDataName); //更新数据
        }
        dispatch({
            type: UPPAGET_CLICK,
            data: {
                currentPage: current,
                dataName: dataName,
            }
        })
    }
}
export function downPageClick() { //点击下一页
    return (dispatch, getState) => {
        let current;
        let dataName;
        let { currentPage, totalPage, page, newDataName } = getState().IncomeAn;
        if (currentPage < totalPage) {
            current = ++currentPage;
            dataName = sliceData(current, page, newDataName);
            dispatch({
                type: DOWNPAGE_CLICK,
                data: {
                    currentPage: current,
                    dataName: dataName,
                }
            })
        } else {
            return;
        }
    }
}
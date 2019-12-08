import { nameSpace } from 'utils/index';

const ns = nameSpace('Calculate');
export const CLICK_RES = ns('CLICK_RES');
export const LOGIC_CLICK = ns('LOGIC_CLICK');
export const CLICK_CLEAN = ns('CLICK_CLEAN');
export const MAX_OR_MIN = ns('MAX_OR_MIN');
export const PERCENT = ns('PERCENT');
export const NUM_CLICK = ns('NUM_CLICK');
export const LOGIC_CLICK_TIME = ns('LOGIC_CLICK_TIME');

export function clickRes() { //点击等于号
    return (dispatch, getState) => {
        let { inputNum, left, n } = getState().Calculate;
        let newInput;
        switch (n) {
            case 5:
                newInput = ((Number(left) * 10) / (Number(inputNum) * 10)) / 10 + '';
                break;
            case 6:
                newInput = ((Number(left) * 10) * (Number(inputNum) * 10)) / 100 + '';
                break;
            case 7:
                newInput = ((Number(left) * 10) - (Number(inputNum) * 10)) / 10 + '';
                break;
            case 8:
                newInput = ((Number(left) * 10) + (Number(inputNum) * 10)) / 10 + '';
                break;
            default:
                newInput = inputNum;
                break;
        }
        dispatch({
            type: CLICK_RES,
            data: { inputNum: newInput, clickEqual: 0, n: 0 }
        })
    }
}
export function clickResasync() { //点击等于后异步
    return (dispatch, getState) => {
        let { n, inputNum } = getState().Calculate;
        dispatch({ type: CLICK_RES, data: { clickEqual: 1, n: n, inputNum: inputNum } })
        setTimeout(() => {
            dispatch(clickRes())
        }, 1500);
    }
}
export function logicClick() { //点击加减乘除
    return (dispatch, getState) => {
        let { left } = getState().Calculate;
        dispatch({
            type: LOGIC_CLICK_TIME,
            data: { inputNum: left }
        })
    }
}
export function logicClickasync(e) { //点击加减乘除后闪一下
    let value = e.target.value;
    let n;
    return (dispatch, getState) => {
        let { inputNum } = getState().Calculate;
        n = value - 6;
        dispatch({
            type: LOGIC_CLICK,
            data: {
                left: inputNum,
                n: n,
                inputNum: '',
            }
        })
        setTimeout(() => {
            dispatch(logicClick())
        }, 100)
    }
}
export function clickClean() { //点击清除
    return {
        type: CLICK_CLEAN,
    }
}
export function maxOrMin() { //点击正负号
    return (dispatch, getState) => {
        let { inputNum } = getState().Calculate;
        dispatch({
            type: MAX_OR_MIN,
            data: { inputNum: (- Number(inputNum)) + '' }
        })
    }
}
export function percent() { //点击百分号
    return (dispatch, getState) => {
        let { inputNum } = getState().Calculate;
        dispatch({
            type: PERCENT,
            data: { inputNum: (Number(inputNum)) / 100 + '' }
        })
    }
}
export function numClick(e) { //点击数字
    let value = e.target.value;
    return (dispatch, getState) => {
        let { inputNum, n } = getState().Calculate;
        if (inputNum.includes('.') && value === '10') { //输入框有点 再次点击点
            return;
        } else {
            if (n !== 0) { //点击了加减运算时
                inputNum = value + '';
            } else {             //没有点击加减运算
                if (inputNum === '0') {   //输入框是0 点击了 点
                    if (value === '10') {
                        inputNum = inputNum.slice()
                        inputNum += '.';
                    } else if (value === '0') {  //输入框是0 点击了0
                        return;
                    }
                    else {//输入框是0 点击其他数字
                        inputNum = value + '';
                    }
                } else { //输入框不是0 点击其他数字时
                    inputNum += (value !== '10') ? value : '.';
                    // console.log(999)
                }
            }
        }
        dispatch({
            type: NUM_CLICK,
            data: { AC: 'C', inputNum: inputNum }
        })
    }
}
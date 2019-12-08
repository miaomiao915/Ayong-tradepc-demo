import { CLICK_RES, LOGIC_CLICK, CLICK_CLEAN, MAX_OR_MIN, PERCENT, NUM_CLICK, LOGIC_CLICK_TIME } from './action';
// import * as actions from './action';
// const { CLICK_RES, LOGIC_CLICK, LOGIC_CLICK_TIME, CLICK_CLEAN, MAX_OR_MIN, PERCENT, NUM_CLICK } = actions;

let defaCalculate = {
    clickEqual: 0,
    inputNum: '0',
    num: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', ''],
    AC: "AC",
    n: 0,
    logic: ['/', 'x', '-', '+'],
    left: '', //运算符左值
}
const defaultAction = { type: 'doNothing' };
let newState = {};
export default function reducerCal(state = defaCalculate, action = defaultAction) {
    newState = JSON.parse(JSON.stringify(state)); //对象的深拷贝
    switch (action.type) {
        case CLICK_RES: //点击等于号
            newState = {
                ...state,
                inputNum: action.data.inputNum,
                clickEqual: action.data.clickEqual,
                n: action.data.n,
            }
            return newState;
        case LOGIC_CLICK: //点击加减乘除
            newState = {
                ...state,
                n: action.data.n,
                left: action.data.left,
                inputNum: action.data.inputNum,
            }
            return newState;
        case LOGIC_CLICK_TIME:
            newState = {
                ...state,
                inputNum: action.data.inputNum,
            }
            return newState;
        case CLICK_CLEAN: //点击清除
            newState = {
                ...state,
                inputNum: '0',
                AC: 'AC',
            }
            return newState;
        case MAX_OR_MIN: //点击正负号
            newState = {
                ...state,
                inputNum: action.data.inputNum,
            }
            return newState;
        case PERCENT: //点击百分号
            newState = {
                ...state,
                inputNum: action.data.inputNum,
            }
            return newState;
        case NUM_CLICK:  //点击数字和点
            newState = {
                ...state,
                AC: action.data.AC,
                inputNum: action.data.inputNum,
            }
            return newState;

        default:
            return state;
    }
}

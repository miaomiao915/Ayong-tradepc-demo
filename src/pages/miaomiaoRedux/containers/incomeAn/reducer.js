import { NOW_TIME, GET_PAGE, GET_DATA, HANGLE_START, QUERY, UPPAGET_CLICK, DOWNPAGE_CLICK } from './action';
import data from './data/data.js';

let defaIncome = {
    fname: ['工号', '创建时间', '工资', 'openid', '名字', '类型', '用户级别', '部门', '订单数', '到期时间', '手机', '昵称', '账号', '密码'],
    dataName: [],
    dataStart: '年-月-日',
    dataEnd: '年-月-日',
    comTime: [],
    selectedTime: [],
    page: '页条数',
    pages: ['页条数', '5', '10'],
    currentPage: 1,
    totalPage: 1,
    allData: data,
    newDataName: []
}
const defaultAction = { type: 'doNothing' };
let newState = {};
export default function reducerIncome(state = defaIncome, action = defaultAction) {
    newState = JSON.parse(JSON.stringify(state)); //对象的深拷贝
    switch (action.type) {
        case NOW_TIME: //更新时间
            newState = {
                ...state,
                nowTime: action.data.nowTime,
            }
            return newState;
        case GET_PAGE: //点击页条数
            newState = {
                ...state,
                page: action.data.page,
                dataName: action.data.dataName,
                totalPage: action.data.totalPage,
                currentPage: action.data.currentPage
            }
            return newState;
        case GET_DATA: //获取数据
            newState = {
                ...state,
                dataName: action.data.dataName,
                comTime: action.data.comTime,
                newDataName: action.data.dataName,
            }
            return newState;
        case HANGLE_START: //选择时间
            newState = {
                ...state,
                dataStart: action.data.dataStart,
                dataEnd: action.data.dataEnd
            }
            return newState;
        case QUERY: //点击查询
            newState = {
                ...state,
                selectedTime: action.data.selectedTime,
                dataName: action.data.dataName,
            }
            return newState;
        case UPPAGET_CLICK: //点击上一页
            newState = {
                ...state,
                currentPage: action.data.currentPage,
                dataName: action.data.dataName,
            }
            return newState;
        case DOWNPAGE_CLICK: //点击下一页
            newState = {
                ...state,
                currentPage: action.data.currentPage,
                dataName: action.data.dataName,
            }
            return newState;
        default:
            return state;
    }
}

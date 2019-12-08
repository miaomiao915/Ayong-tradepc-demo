import React, { Component } from 'react';
// import jiantou from './img/jiantou.png';
import { bindActionCreators } from 'redux';
import * as actions from "./action";
import { connect } from "react-redux";
import './index.scss';


class IncomeAn extends Component {
    componentDidMount() {
        const { getT, getData } = this.props.actions;
        getT();
        getData();
    }
    render() {
        const { fname, dataName, dataStart, dataEnd, nowTime, currentPage, totalPage, page, pages } = this.props;
        const { getPage, handleStart, query, updateTime, upPageClick, downPageClick } = this.props.actions;
        return (
            <div className='box'>
                <div className="banner">
                    {/* <img src={planlet} alt="" /> */}
                    每天进步一点点，离目标更近一点点!
                    <span>苗苗</span>
                    <span className="exit">退出</span>
                </div>


                <div className="incomeAn">
                    <div className="second">
                        <div className="selectInfo">
                            <div className="trading">
                                {/* <img src={jiantou} alt="" /> */}
                                <select id="trading">
                                    <option className="交易">交易</option>
                                </select>
                            </div>
                            <div className="page">
                                {/* <img src={jiantou} alt="" /> */}
                                <select id="page" defaultValue={page} onChange={(e) => getPage(e)}>
                                    {
                                        pages.map((item, ind) => {
                                            return (
                                                <option key={ind}>{item}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <span>日期选择</span>
                            <input type="date" name='start' data-show={dataStart} value="" onChange={(e) => handleStart(e)} />&nbsp;-
                    <input type="date" name='end' data-show={dataEnd} value="" onChange={(e) => handleStart(e)} />
                            <button id="query" onClick={query}>查询</button>
                            <button id="upd" onClick={updateTime}>同步</button>
                            <span>交易上次手动同步时间：</span>
                            <span>{nowTime}</span>
                        </div>
                        <div className="infoName">
                            {
                                fname.map((item, ind) =>
                                    <div key={ind}>{item}</div>
                                )
                            }
                        </div>
                        <div className="info">
                            {
                                dataName.map((item, ind) =>
                                    <div key={ind}>{item}</div>
                                )
                            }
                        </div>
                        <div className="pageNum">
                            <span onClick={upPageClick}>上一页</span>
                            <span>{currentPage}</span>
                            <span>/</span>
                            <span>{totalPage}</span>
                            <span onClick={downPageClick}>下一页</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default connect(
    state => state.IncomeAn,
    dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(IncomeAn)

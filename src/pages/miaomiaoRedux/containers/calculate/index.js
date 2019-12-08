import React from 'react';
import { bindActionCreators } from 'redux';
import * as actions from './action';
import { connect } from "react-redux";
import './index.scss';


//下面是计算器组件
function Calculate(props) {
  const { clickEqual, inputNum, AC } = props;
  const { clickClean, maxOrMin, percent, logicClickasync, numClick, clickResasync } = props.actions;
  return (
    <div className="calculate">
      <div>
        <div className="image" id={clickEqual === 0 ? "noimage" : ""}>
          <div className="s1"></div>
          <div className="s2"></div>
          <div className="s3"></div>
          <div className="s4"></div>
          <div className="s5"></div>
          <div className="s6"></div>
          <div className="s7"></div>
          <div className="s8"></div>
          <div className="s9"></div>
          <div className="s10"></div>
          <div className="s11"></div>
          <div className="s12"></div>
        </div>
        <div className="top">{inputNum}</div>
        <div className="content">
          <button className="special clean" onClick={clickClean}>{AC}</button>
          <button className="special" onClick={maxOrMin}>+/-</button>
          <button className="special" onClick={percent}>%</button>
          <button className='yellow' value='11' onClick={(e) => logicClickasync(e)}>/</button>
          <button className='num' value='7' onClick={(e) => numClick(e)}>7</button>
          <button className='num' value='8' onClick={(e) => numClick(e)}>8</button>
          <button className='num' value='9' onClick={(e) => numClick(e)}>9</button>
          <button className='yellow' value='12' onClick={(e) => logicClickasync(e)}>x</button>
          <button className='num' value='4' onClick={(e) => numClick(e)}>4</button>
          <button className='num' value='5' onClick={(e) => numClick(e)}>5</button>
          <button className='num' value='6' onClick={(e) => numClick(e)}>6</button>
          <button className='yellow' value='13' onClick={(e) => logicClickasync(e)}>-</button>
          <button className='num' value='1' onClick={(e) => numClick(e)}>1</button>
          <button className='num' value='2' onClick={(e) => numClick(e)}>2</button>
          <button className='num' value='3' onClick={(e) => numClick(e)}>3</button>
          <button className='yellow' value='14' onClick={(e) => logicClickasync(e)}>+</button>
          <button className='num' value='0' onClick={(e) => numClick(e)}>0</button>
          <button className='num reborder' value='0' onClick={(e) => numClick(e)}></button>
          <button className='num' value='10' onClick={(e) => numClick(e)}>.</button>
          <button className="yellow res" onClick={clickResasync}>=</button>
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => state.Calculate,
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Calculate)

'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import createStoreWithMdware from './store/index';
import reducers from './reducers/index';
import App from 'components/app/index';

import Demo from './containers/demo/index'


/**
    @author Mothpro
    这是一个使用react技术搭建的redux演示页面
**/
const store = createStoreWithMdware(reducers);
ReactDom.render(
  <Provider store={store}>
    <App>
        <Demo/>
    </App>
  </Provider>,
  document.getElementById('container')
);

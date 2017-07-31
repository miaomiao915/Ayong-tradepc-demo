
//从./containers/index.js导入
import {Demo, Demo1, Demo2} from './containers/index';
import App from 'components/app/index';

const createRoutes = {
    path: '/',
    component: App,
    indexRoute: {component: Demo},
    childRoutes: [
        {path:'demo',component:Demo},
        {path:'demo1',component:Demo1},
        {path:'demo2',component:Demo2},
    ]
}
export default createRoutes

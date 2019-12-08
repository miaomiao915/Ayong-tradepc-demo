import App from 'components/app/index';
import { Calculate, IncomeAn } from './containers/index';

const createRoutes = {
    path: '/',
    component: App,
    indexRoute: { component: Calculate },
    childRoutes: [
        { path: 'calculate', component: Calculate },
        { path: 'incomeAn', component: IncomeAn },
    ],
};
export default createRoutes;

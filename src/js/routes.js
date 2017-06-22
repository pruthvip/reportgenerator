import Main from './components/containers/Main';
import ReportInput from './components/modules/ReportInput';
import GeneratedReport from './components/modules/GeneratedReport';

export default {
    path: '/',
    component: Main,
    indexRoute: {
        component: ReportInput
    },
    childRoutes: [
            {
                path: 'generatedReport',
                component: GeneratedReport
            }
        ]

};

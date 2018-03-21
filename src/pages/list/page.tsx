import React from 'react';
import router from 'umi/router';
import styles from './page.less';
import {MrEcharts} from '../../../pub/mr-echarts/echarts.component';
// import {EchartsComponent} from '../../lib/mr-echarts/mr-echarts.component';
// import {Hello} from '../../lib/hello/hello.component';
import {EchartsComponent} from 'masterrt/echarts/echarts.component';

export default () => (
    <div className={styles.normal}>
        <h2>List Page</h2>
        <div
            onClick={() => {
                router.goBack();
            }}
        >
            Back
        </div>

        <MrEcharts />
        <EchartsComponent />
    </div>
);

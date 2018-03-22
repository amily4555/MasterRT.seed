import React from 'react';
import router from 'umi/router';
import styles from './page.less';
import {MrEcharts} from '../../../pub/mr-echarts/echarts.component';

console.log(':::::::::');

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

    </div>
);

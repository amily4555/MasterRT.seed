import * as React from 'react';
import styles from '../assets/echarts.component.less';

export class MrEcharts extends React.Component<{}, {}> {
    constructor() {
        super(void 0);
    }

    render() {
        return <h1 className={styles.echartsBox}>Hello world</h1>;
    }
}

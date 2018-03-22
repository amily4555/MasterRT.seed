import * as React from 'react';

// import * as styles from '../assets/echarts.component.less';

declare var require: any;
const styles = require('../assets/echarts.component.less');

export class MrEcharts extends React.Component<{}, {}> {
    constructor() {
        super(void 0);
    }

    render() {
        return <div>
            <h1 className={styles.echartsBox}>Hello world</h1>
        </div>;
    }
}

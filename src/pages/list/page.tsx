import React from 'react';
import router from 'umi/router';
import styles from './page.less';
import {MrEcharts} from '../../../pub/mr-echarts/mr-echarts.component';
// import {MrEcharts} from 'masterrt';
// import {MrEcharts} from '../../lib/mr-echarts/mr-echarts.component';
// import {MrEcharts} from 'masterrt/mr-echarts/echarts.component';

console.log(':::::::::');

export default () => {
    let dataPie = [{
        value: 78499,
        name: 'A0'
    }, {
        value: 131536,
        name: 'A Entry'
    }, {
        value: 246050,
        name: 'A Main'
    }, {
        value: 284390,
        name: 'A Plus'
    }, {
        value: 394088,
        name: 'B'
    }, {
        value: 35022,
        name: 'C'
    }, {
        value: 316762,
        name: 'SUV'
    }, {
        value: 34069,
        name: 'MPV'
    }].sort((a, b) => a.value > b.value ? -1 : 1);

    return (

        <div className={styles.normal}>
            <h2>List Page</h2>
            <div
                onClick={() => {
                    router.goBack();
                }}
            >
                Back
            </div>

            <div style={{"height": 300}}>
                <MrEcharts

                    // 数据源
                    data={dataPie}

                    // ? sourceType // 数据源类型 => dataSet, dataSource
                    dataType={'dataSource'}

                    // ? dataModel // 数据处理类型 => group, single
                    dataModel={''}

                    // chartTypes // 图表类型以及衍生类型， // 如 pie::ring(饼图::环形), pie::rose(饼图::南丁格尔) // 如 bar::stack(柱形堆叠图), line:area(线x形::面积图)
                    chartTypes={'pie::ring::rose'}

                    // ? setting // 额外配置项 // 可使用options路径直接配置 // {'series[0].center': [0, 75%]}
                    setting={[
                        {'legend.show': true},
                        {'legend.orient': 'vertical'},
                        {'legend.right': '20%'}
                    ]}

                    // ? options 直接调用 // 图表的options配置，直接获得图表
                    options={null}

                    // ? theme // 图表的主体配色
                    theme={''}

                    // ? renderType, // 图表绘图类型 'svg', 'canvas'
                    renderType={'svg'}

                ></MrEcharts>
            </div>

        </div>
    );
}

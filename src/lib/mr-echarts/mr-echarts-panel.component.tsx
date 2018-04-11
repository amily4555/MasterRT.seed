import * as React from 'react';
import {MrEcharts, MrEchartsProps} from './mr-echarts.component';
import {MrPanel} from '../';
import _mrEchartServices from './mr-echarts.services';
import * as _ from 'lodash';
import * as mu from 'mzmu';
import {MrEchartsDataView} from './mr-echarts-dataView.component';
declare var require: any;
require('../assets/mr-echarts-panel.less');

interface MrEchartsPanelProps extends MrEchartsProps {
    style?: any;
    title?: string;
}

export class MrEchartsPanel extends React.Component<MrEchartsPanelProps, {}> {

    state = {
        fullScreen: false,
        xyExchange: false,
        xAxisShowAll: false,
        legendShow: false,
        dataView: false,
        setting: _mrEchartServices.serialize(this.props.setting)
    };

    // 缓存dataView数据
    _dataView: any;

    tools() {
        return (
            <div>
                <span onClick={this.fullScreen.bind(this)}>Full</span>
                <span onClick={this.toolSetFn.bind(this, 'xyExchange')}> - xyExchange</span>
                <span onClick={this.toolSetFn.bind(this, 'xAxisShowAll')}> - xAxisShowAll</span>
                <span onClick={this.toolSetFn.bind(this, 'legendShow')}> - legendShow</span>
                <span onClick={this.dataView.bind(this)}> - dataView</span>
            </div>
        );
    }

    toolSetFn(key: string, value?: any) {
        let status = this.state[key];
        let fnName = `@@${key}`;
        let {setting} = this.state;
        status = !status;

        if(status){
            setting.push({[fnName]: mu.ifnvl(value, true)});
        } else {
            _.remove(setting, (o) => {
                return _.keys(o)[0] === fnName;
            });
        }
        setting = _.clone(setting);
        this.setState({[key]: status, setting});
    };

    // 全屏显示
    fullScreen() {
        this.setState({
            fullScreen: !this.state.fullScreen
        })
    }

    // 查看DataView
    dataView() {
        this.setState({
            dataView: !this.state.dataView
        })
    }

    getResult(options, rst) {
        this._dataView = _.get(rst, 'data._dataView');
    }

    render() {

        const {title, style} = this.props;
        const {data, dataType, dataModel, chartTypes} = this.props;
        const {options, renderType, theme} = this.props;
        const {fullScreen, dataView, setting} = this.state;

        const echartsProps = {
            data,
            dataType,
            dataModel,
            chartTypes,
            setting,
            options,
            renderType,
            theme
        };

        return (<MrPanel title={title} extra={this.tools()} style={style}
                         className={[fullScreen ? 'ms-fullScreen' : '', 'ms-echarts-panel'].join(' ')}>

            { dataView ? <div><MrEchartsDataView data={this._dataView} /></div> : <MrEcharts {...echartsProps} result={this.getResult.bind(this)} /> }
        </MrPanel>);
    }

}

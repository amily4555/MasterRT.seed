import * as React from 'react';
import {MrEcharts, MrEchartsProps} from './mr-echarts.component';
import {MrPanel} from '../';

interface MrEchartsPanelProps extends MrEchartsProps{
    style?: any;
    title?: string;
}

export class MrEchartsPanel extends React.Component<MrEchartsPanelProps, {}> {

    state = {
        fullScreen: false
    };

    tools() {
        return <span onClick={this.fullScreen.bind(this)}>Full</span>;
    }

    fullScreen() {
        this.setState({
            fullScreen: !this.state.fullScreen
        })
    }

    render() {

        const {title, style} = this.props;
        const {data, dataType, dataModel, chartTypes, setting = {}} = this.props;
        const {options, renderType, theme} = this.props;

        console.debug(this);

        const {fullScreen} = this.state;

        const echartsProps = {data, dataType, dataModel, chartTypes, setting, options, renderType, theme};

        return (<MrPanel title={title} extra={this.tools()} style={style}
                         className={fullScreen ? 'ms-fullScreen' : ''}>
            <MrEcharts {...echartsProps} />
        </MrPanel>);
    }

}
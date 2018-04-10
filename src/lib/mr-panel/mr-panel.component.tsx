import * as React from 'react';
import {MrIf} from '../mr-if/mr-if.component';
declare var require: any;
require('./mr-panel.less');
import _sevr from '../common/mr.services';

interface MrPanelProps {
    style?: any;
    bodyStyle?: any;
    title?: string;
    extra?: any;
    className?: string;
}

export class MrPanel extends React.Component<MrPanelProps, {}> {


    render() {

        const {style, className = '', title = '', extra, bodyStyle} = this.props;
        const [_title, _subTitle] = title.split('::');

        return (<article style={style} className={_sevr.cls('ms-panel', ...className.split(' '))}>
            <header>
                <div className={_sevr.cls('ms-panel-header')}>
                    <span className={_sevr.cls('ms-panel-title')}>{_title}</span>
                    <MrIf condition={_subTitle}>
                        <small className={_sevr.cls('ms-panel-subTitle')}>{_subTitle}</small>
                    </MrIf>
                    <div className={_sevr.cls('ms-panel-headerExtra')}>{extra}</div>
                </div>
            </header>

            <section>
                <div style={bodyStyle} className={_sevr.cls('ms-panel-body')}>
                    {this.props.children}
                </div>
            </section>
        </article>);
    }
}
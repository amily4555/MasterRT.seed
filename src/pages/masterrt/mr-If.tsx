import * as  React from 'react';
import {MrPanel, MrIcon, MrIf} from 'masterrt';
import './masterrt.less';

import MrsCode from '../../components/MrsCode';

import JsxParser from 'react-jsx-parser';

interface MrsPanelProps {
}

export default class MrsPanel extends React.Component<MrsPanelProps, {}> {

    state: any = {
        showPanel: false
    };

    code: string = `
        <section>
            <MrIf condition={this.state.showPanel}>
                <MrPanel title="静夜思::李白">
                    床前明月光<br />
                    疑是地上霜<br />
                    举头望明月<br />
                    低头思故乡<br />
                </MrPanel>
            </MrIf>
            
            
        </section>
    `;



    render() {
        console.debug(this.state.showPanel);
        return (
            <article className="mrs-article mrs-MrFill">
                <header>MrPanel <small>一个集成的盒子</small></header>
                <ins>一个拥有标题，子标题，工具条的容器</ins>
                <main>
                    <JsxParser
                        components={{MrPanel, MrIcon}}
                        jsx={this.code}
                    ></JsxParser>
                </main>

                <details className="mt-16">
                    <summary>查看源码</summary>
                    <MrsCode code={(this.code)}></MrsCode>
                </details>

                <aside className="mt-16">
                    <h5>MrPanel</h5>
                    <table>
                        <tbody>
                            <tr>
                                <td>title?: string</td>
                                <td>标题，title::subTitle, 以'::'区分主从标题</td>
                            </tr>
                            <tr>
                                <td>extra?: ReactDOM</td>
                                <td>附加栏</td>
                            </tr>
                            <tr>
                                <td>border?: string</td>
                                <td>
                                    wrapper: 显示 panel border <br />
                                    title: 显示 title border-bottom <br />
                                    all: 同事显示 wrapper 跟 title 效果 <br />
                                </td>
                            </tr>
                            <tr>
                                <td>bodyStyle?: React.CSSProperties</td>
                                <td>负责panel body 样式</td>
                            </tr>
                        </tbody>
                    </table>
                </aside>
            </article>
        );

    }
}

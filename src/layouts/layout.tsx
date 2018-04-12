import React from 'react';
import {MrFill, MrCol} from 'masterrt';

interface MrsLayoutProps {
}

export default class MrsLayout extends React.Component<MrsLayoutProps, {}> {
    render() {
        return (
            <article>
                <header>MasterRT Seed</header>
                <main>
                    {this.props.children}
                </main>
                <footer>
                    <MrFill>
                        <MrCol>
                            <ol>
                                <li>
                                    <a href="https://github.com/amily4555/MasterRT.seed" target="_blank">Github</a>
                                </li>
                            </ol>
                        </MrCol>
                    </MrFill>
                </footer>
            </article>
        );
    }
}

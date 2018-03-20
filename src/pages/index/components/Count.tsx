import React from 'react';
import {connect} from 'dva';
import {Button} from 'antd';

function Count({dispatch, count, global}) {
    return (
        <div>
            <h2>{global.text}</h2>
            <div>Count: {count}</div>
            <br />
            <div>
                <Button
                    type="primary"
                    onClick={() => {
                        dispatch({type: 'count/increase'});
                    }}>
                    Increase
                </Button>
                <Button
                    type="ghost"
                    onClick={() => {
                        dispatch({type: 'count/decrease'});
                    }}>
                    Decrease
                </Button>
            </div>
        </div>
    );
}

export default connect(({count, global}) => ({count, global}))(Count);

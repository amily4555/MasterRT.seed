import * as mu from 'mzmu';
import * as _ from 'lodash';
import _colors from '../assets/theme.customed.js';
import CHART_PN_COLORS from './pn-colors';

// CHART_NAME 决定 legend
const CHART_NAME = 'name';
// CHART_X 决定 x 轴
const CHART_X = 'x';
// CHART_VALUE 决定y轴数据
// const CHART_VALUE = 'value';

const defOptions = {
    pie: {
        legend: {},
        tooltip: {},
        dataset: {},
        series: []
    },

    bar: {
        grid: {
            left: 20,
            right: 20,
            bottom: 20
        },
        legend: {},
        tooltip: {},
        yAxis: [{}],
        dataset: {},
        series: [],
        xAxis: [{type: 'category'}]
    },

    line: {
        grid: {
            left: 50,
            right: 20,
            bottom: 20
        },
        legend: {},
        tooltip: {},
        dataset: {},
        series: [],
        xAxis: [
            {
                type: 'category',
                boundaryGap: false
            }
        ],
        yAxis: [{type: 'value'}]
    },

    scatter: {
        grid: {
            bottom: 20,
            left: 40
        },
        tooltip: {},
        dataset: {},
        series: [],
        yAxis: [{type: 'value'}],
        xAxis: [{type: 'value'}]
    },

    treemap: {
        legend: {},
        tooltip: {},
        dataset: {},
        series: []
    },

    radar: {
        legend: {},
        tooltip: {},
        dataset: {},
        series: [],
        radar: {indicator: []}
    },

    wordCloud: {
        legend: {},
        tooltip: {},
        dataset: {},
        series: []
    },

    gauge: {
        legend: {},
        dataset: {},
        series: [],
        tooltip: {
            formatter: '{a} <br/>{b} = {c}%'
        }
    },

    map: {
        tooltip: {},
        visualMap: {
            min: 0,
            max: 200,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'],
            calculable: false,
            inRange: {
                color: ['#ffffff', _colors[0]]
            }
        },
        geo: {
            zoom: 1.2,
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#fbfbfb',
                    borderColor: '#b9b4b7'
                },
                emphasis: {
                    areaColor: _colors[1]
                }
            }
        },
        series: []
    }
};

const defDataModel = {
    pie: 'single',
    wordCloud: 'single'
    // scatter: 'single'
};

const defSubType = {
    bar: 'bar::stack',
    gauge: 'gauge::half',
    treemap: 'treemap::simple'
};

const subSetting = {
    // 不显示xy轴
    // 默认显示x轴名称
    '::noAxis': {
        'legend.show': false,
        'yAxis[0].axisLine.show': false,
        'yAxis[0].axisTick.show': false,
        'yAxis[0].axisLabel.show': false,
        'yAxis[0].splitArea.show': false,
        'yAxis[0].splitLine.show': false,
        'xAxis[0].axisLine.show': false,
        'xAxis[0].axisTick.show': false,
        'xAxis[0].splitArea.show': false,
        'xAxis[0].splitLine.show': false
    },

    // 是否堆叠显示
    '::stack': {
        '$$series[*].stack': 'one'
    },

    // 正负值 颜色配置
    '::pnColors': {
        '**$$series[*]': (obj, data) => {
            mu.run(CHART_PN_COLORS[data.name], (color) => {
                data = _.set(data, 'itemStyle.color', color);
            });
            return data;
        }
    },

    '::xyExchange': {
        'xAxis[0].type': 'value',
        'yAxis[0].type': 'category'
    },

    '::bg': {
        'series[1].type': 'bar',
        'series[1].zlevel': -2,
        'series[1].barGap': '-100%',
        'series[1].animation': false,
        'series[1].barCategoryGap': '40%',
        'series[1].itemStyle.normal.color': 'rgba(0, 0, 0, .05)',
        '**series[1].data': (obj: any) => {
            let _data = _.get(obj, 'series[0].data');
            let _max = _.maxBy(_data, (o: any) => o.value);

            return mu.map(_.get(obj, 'series[0].data'), (o: any) => {
                o.value = _max.value * 1.1;
                return o;
            });
        }
    },

    '::area': {
        '$$series[*].areaStyle.opacity': 0.1,
        '$$series[*].smooth': true,
        '$$series[*].smoothMonotone': true
    },

    '::tooltipFormatterPercent': {
        'tooltip.formatter': (obj) => {
            return `${obj.marker} ${obj.data.name}: ${mu.format(obj.data.value, '::1')}`;
        }
    },

    '::tooltipFormatterPercent2': {
        'tooltip.formatter': (obj) => {
            let x = obj.data.x ? obj.data.x + '<br />' : '';
            return `${x}${obj.marker} ${obj.data.name}: ${obj.data.value}%`;
        }
    },

    '::yAxisPercent': {
        '$$yAxis[*].axisLabel.formatter': '{value}%'
    },

    '::xAxisPercent': {
        '$$xAxis[*].axisLabel.formatter': '{value}%'
    },

    // 柱形阶梯瀑布图
    // 默认拾级上升
    '::ladder': {
        '**series': (obj) => {
            let _series = obj.series;
            let _data0 = mu.clone(_series[0]);
            let _d = _data0.data;
            _data0.name = 'ladder dark start';
            _.set(_data0, 'itemStyle.barBorderColor', 'rgba(0, 0, 0, 0)');
            _.set(_data0, 'itemStyle.color', 'rgba(0, 0, 0, 0)');
            _.set(_data0, 'itemStyle.emphasis.barBorderColor', 'rgba(0, 0, 0, 0)');
            _.set(_data0, 'itemStyle.emphasis.color', 'rgba(0, 0, 0, 0)');
            _.set(_data0, 'tooltip.show', false);
            _d = mu.map(_d, o => o.value);
            _d.unshift(0);
            _d.pop();
            mu.each(_d, (o, inx) => {
                _d[inx] = o + (_d[inx -1] || 0);
            });
            _data0.data = _d;
            _series.unshift(_data0);
            return obj.series;
        }
    },

    pie: {
        '$$series[*].center': ['50%', '55%']
    },

    // 饼图 => 环形
    'pie::ring': [
        {
            '$$series[*].radius': ['50%', '75%']
        }
    ],

    'pie::rose': [
        {'$$series[*].roseType': 'area'},
        {
            '$$series[*].radius': ['10%', '75%']
        },
        {'$$series[*].label.normal.show': true}
    ],

    'pie::ring::rose': [
        {'series[0].roseType': 'area'},
        {
            'series[0].radius': ['10%', '65%']
        },
        {'series[0].label.normal.show': false},
        // 'series[0].itemStyle.color': _colors[0],
        {'series[1].tooltip.show': false},
        {'series[1].type': 'pie'},
        {'series[1].hoverAnimation': false},
        {'series[1].zlevel': -2},
        {
            'series[1].radius': ['66%', '75%']
        },
        {
            'series[1].center': ['50%', '55%']
        },
        // 'series[1].itemStyle.color': '#CFD7D9'},
        {'series[1].itemStyle.borderWidth': 1},
        {'series[1].itemStyle.borderColor': '#fff'},
        {
            '**series[1].data': (obj) => {
                return mu.map(_.get(obj, 'series[0].data'), (o) => {
                    o.value = 1;
                    return o;
                });
            }
        },
        {'series[1].label.normal.show': true}
        // 'series[1].label.normal.position': 'inside'
    ],

    // 地图 => 中国地图
    'map::china': {
        'geo.map': 'china',
        'series[0].mapType': 'china',
        'series[0].geoIndex': 0,
        'series[0].name': '地域分布'
    },
    // 仪表盘: 半圆
    'gauge::half': {
        'grid.top': 0,
        'grid.left': 0,
        'grid.bottom': 0,
        'grid.right': 0,
        'series[0].axisTick.show': false,
        'series[0].axisLabel.show': false,
        'series[0].splitLine.show': false,
        'series[0].startAngle': 180,
        'series[0].endAngle': 0,
        'series[0].pointer.length': '60%',
        'series[0].pointer.width': 6,
        'series[0].detail': {formatter: '{value}%'}
    },

    'bar::pn': {
        'xAxis[0].max': 100,
        'xAxis[0].min': -100,
        'series[0].label.formatter': (rst) => {
            return `${rst.data._value || rst.data.value}%`;
        },
        'tooltip.formatter': (rst) => {
            return `${rst.data.name}: ${rst.data._value || rst.data.value}%`;
        },
        '**$$series[0].data[*]': (obj, data) => {
            data._value = data.value;
            data.value = -data.value;
            return data;
        }
    },

    'scatter::pop': {
        '$$series[*].symbol': 'circle',
        '$$series[*].symbolSize': 18,
        '$$series[*].label.show': false,
        '$$series[*].label.emphasis.show': true,
        '$$series[*].label.position': 'top',
        '$$series[*].label.formatter': (p) => p.name,
        '$$series[*].itemStyle': {
            color: '#BFC8CF',
            opacity: 0.6
        }
    },

    'treemap::simple': {
        '$$series[*].left': 0,
        '$$series[*].right': 0,
        '$$series[*].top': 0,
        '$$series[*].bottom': 0,
        '$$series[*].width': '100%',
        '$$series[*].height': '100%',
        '$$series[*].roam': false,
        '$$series[*].nodeClick': false,
        '$$series[*].breadcrumb.show': false,
        '$$series[*].itemStyle.borderWidth': 3,
        '$$series[*].itemStyle.borderColor': '#fff',
        '$$series[*].itemStyle.borderColorSaturation': 1
    },

    radar: {
        '$$series[*].name': ''
    },

    'radar::area': {
        'radar.splitArea.show': false,
        'radar.splitLine.lineStyle.color': 'rgba(155, 155, 155, .2)',
        'radar.axisLine.lineStyle.color': 'rgba(155, 155, 155, .2)',
        'radar.name.color': 'rgba(155, 155, 155, .8)',
        '$$series[*].areaStyle.normal.opacity': 0.3,
        '$$series[*].lineStyle.normal.opacity': 0.3,
        '$$series[*].symbol': 'none'
    },

    wordCloud: {
        '$$series[*].shape': 'circle',
        '$$series[*].sizeRange': [14, 42],
        '$$series[*].rotationRange': [-45, 90]
    },

    'wordCloud::random': {
        '$$series[*].textStyle.normal.color': () => {
            return _colors[mu.randomInt(0, 4)];
        }
    }
};

export default {
    CHART_THEME: 'customed',

    CHART_RENDER_TYPE: 'canvas',

    /**
     * 重写 _.set
     * @param obj
     * @param key
     * @param value
     * @return {*}
     */
    muSet(obj, key, value) {
        let _obj = mu.clone(obj);
        let _fn;

        // get 原数据
        if (typeof value === 'string' && /\$\$/.test(value)) {
            let _path = value.replace(/\$\$/, '');
            value = _.get(_obj, _path);
        }

        // 配置自定义函数
        if (/\*\*/.test(key) && typeof value === 'function') {
            key = key.replace(/\*\*/, '');
            _fn = value;
        }

        if (/\$\$/.test(key)) {
            let _path = key.replace(/\$\$/, '');
            let [p1, p2] = _path.split('[*]');
            p2 = p2.replace(/^\./, '');

            mu.each(_.get(obj, p1), (o, idx) => {
                value = _fn ? _fn(obj, o, idx) : value;
                if (p2) {
                    _.set(o, p2, value);
                } else {
                    _.set(obj, `${p1}[${idx}]`, value);
                }
            });
        } else {
            value = _fn ? _fn(obj) : value;
            _.set(obj, key, value);
        }

        return obj;
    },

    /**
     * 获得分组数中的最大最小值
     */
    maxmin(data, groupKey) {
        let _data = mu.groupArray(data, groupKey);
        return mu.map(_data, (o) => {
            return {
                max: _.maxBy(o, (oo: any) => parseFloat(oo.value)),
                min: _.minBy(o, (oo: any) => parseFloat(oo.value))
            };
        });
    },

    /**
     * 数据转换
     * @param data 数据来源
     * @param dataType 数据来源类型
     * @param dataModel 数据转换模型
     * @param setting 配置参数
     * @return {*}
     */
    transform(data, dataType = 'dataSource', dataModel = 'group', setting = {}) {
        let $data = mu.clone(data);

        let _data =
            dataModel === 'single'
                ? mu.map(
                      data,
                      (o) => {
                          return {
                              __key__: o[CHART_NAME],
                              __val__: o
                          };
                      },
                      {}
                  )
                : mu.groupArray(data, CHART_NAME);

        let _legend = mu.map(
            _data,
            (o, name) => {
                return {name};
            },
            []
        );

        let _series = mu.map(
            _legend,
            (legend) => {
                return _data[legend.name || legend];
            },
            []
        );

        let _x =
            dataModel === 'single'
                ? null
                : mu.map(
                      mu.groupArray(data, CHART_X),
                      (o, name) => {
                          return name;
                      },
                      []
                  );

        return {
            $data,
            _legend,
            _series,
            _x
        };
    },

    /**
     * 根据数据配置series
     * 以及将data注入series
     * @param options
     * @param dataModel
     * @param chartType
     * @param rst
     * @param setting
     */
    injectOptions(options, rst, chartType, dataModel, setting) {
        /**
         * legend
         */
        mu.run(rst._legend, (legend) => {
            switch (chartType) {
                case 'map':
                case 'gauge':
                case 'scatter':
                    break;
                default:
                    options = _.set(options, 'legend.data', rst._legend);
                    break;
            }
        });

        /**
         * x 轴配置
         */
        mu.run(rst._x, (x) => {
            switch (chartType) {
                case 'radar':
                    let _maxmin = this.maxmin(rst.$data, CHART_X);

                    options = _.set(
                        options,
                        'radar.indicator',
                        mu.map(x, (name) => {
                            let max_ = parseFloat(_.get(_maxmin[name], 'max.value'));
                            let min_ = parseFloat(_.get(_maxmin[name], 'min.value'));

                            if (max_ < min_) {
                                let tmp = [max_, min_];
                                max_ = tmp[1];
                                min_ = tmp[0];
                            }

                            let min = Math.ceil(min_ * (min_ > 0 ? 0.95 : 1.05));
                            let max = Math.ceil(max_ * (max_ > 0 ? 1.05 : 0.95));

                            console.debug(name, max, min, max_, min_);

                            return {
                                name,
                                max,
                                min
                            };
                        })
                    );
                    break;
                case 'map':
                    let max: any = _.maxBy(rst.$data, (o: any) => o.value) || {};
                    options = _.set(options, 'visualMap.max', max.value);
                    break;
                case 'gauge':
                case 'scatter':
                    break;
                default:
                    options = _.set(options, 'xAxis[0].data', x);
                    break;
            }
        });

        /**
         * series 设置
         * @type {*[]}
         */

        mu.run(
            dataModel === 'single',
            () => {
                options.series = [
                    {
                        type: chartType,
                        data: rst._series
                    }
                ];
            },
            () => {
                let data;

                switch (chartType) {
                    case 'map':
                        let dataMap = mu.map(
                            rst._series,
                            (o, name) => {
                                return {
                                    name: _.get(o, '[0].name'),
                                    value: (mu.map(o, (oo) => oo.value, []) || [])[0]
                                };
                            },
                            []
                        );

                        options.series = [
                            {
                                type: chartType,
                                name: _.get(dataMap, '[0].name'),
                                data: dataMap,
                                label: {
                                    normal: {
                                        show: true
                                    },
                                    emphasis: {
                                        show: true
                                    }
                                }
                            }
                        ];

                        break;
                    case 'radar':
                        data = mu.map(
                            rst._series,
                            (o, name) => {
                                return {
                                    name: _.get(o, '[0].name'),
                                    value: mu.map(o, (oo) => oo.value, [])
                                };
                            },
                            []
                        );

                        options.series = [
                            {
                                type: chartType,
                                name: _.get(data, '[0].name'),
                                data
                            }
                        ];

                        break;

                    case 'scatter':
                        data = mu.map(
                            rst._series,
                            (o, name) => {
                                return {
                                    name: _.get(o, '[0].name'),
                                    value: [o[0].value, o[0].x]
                                };
                            },
                            []
                        );

                        options.series = [
                            {
                                type: chartType,
                                name: _.get(data, '[0].name'),
                                data
                            }
                        ];

                        break;

                    default:
                        options.series = mu.map(rst._series, (o) => {
                            return {
                                type: chartType,
                                name: _.get(o, '[0].name'),
                                data: o
                            };
                        });

                        break;
                }
            }
        );

        return options;
    },

    /**
     * 获取完整的 setting 配置
     * @param chartTypes
     * @param setting
     * @return {*}
     */
    getSetting(chartTypes, setting) {
        chartTypes = defSubType[chartTypes] || chartTypes;

        let [_chartType, ..._subType] = chartTypes.split('::');

        /**
         * setting 配置的权重值
         * subSetting[chartType] < subSetting[sub] < subSetting[subGroup] < subSetting[subType] < setting
         * subType = chartType::sub...
         */
        let _setting = mu.extend({}, this.flatDataSetting(subSetting[_chartType]));

        mu.run(_subType, () => {
            mu.each(_subType, (sub) => {
                _setting = mu.extend(_setting, this.flatDataSetting(subSetting['::' + sub]));
            });

            mu.each(_subType, (sub) => {
                _setting = mu.extend(_setting, this.flatDataSetting(subSetting[`${_chartType}::${sub}`]));
            });

            _setting = mu.extend(_setting, this.flatDataSetting(subSetting[`${_chartType}::${_subType.join('::')}`]));
        });

        _setting = mu.extend(_setting, this.flatDataSetting(setting));

        return _setting;
    },

    /**
     * 处理返回数组化的setting数据
     * @param setting
     */
    flatDataSetting(setting) {
        if(mu.type(setting, 'array')){
            let _setting = {};
            mu.each(setting, (o) => {
                _setting = mu.extend(_setting, o);
            });
            return _setting;
        } else {
            return setting || {};
        }
    },

    /**
     * 根据配置项，重新设置options
     * @param options
     * @param setting
     * @param charType
     */
    reOptions(options, setting, charType) {
        mu.each(setting, (val, key) => {
            this.muSet(options, key, val);
        });

        // switch(charType) {
        //     case 'scatter':
        //
        //         mu.remove(options.xAxis[0], 'data');
        //
        //         break;
        // }

        return options;
    },

    /**
     * 获取 echarts options
     * @param data 数据来源
     * @param dataType 数据类型
     * @param dataModel 数据转换模型
     * @param chartTypes
     * @param setting
     * @return {*}
     */
    getOptions(data = [], dataType = 'dataSource', dataModel, chartTypes = 'line', setting = {}) {
        console.debug('~~~~', chartTypes);

        let [_chartType] = chartTypes.split('::');

        // 获得默认的数据转换模型
        let _dataModel = dataModel || defDataModel[_chartType] || 'group';

        // setting 配置最终以手动（component prop setting)为准
        let _setting = this.getSetting(chartTypes, setting);

        // 获得默认的 options 配置
        let _opts = mu.clone(defOptions[_chartType]);

        // 数据转换结果
        let _rst = this.transform(data, dataType, _dataModel);

        _opts = this.injectOptions(_opts, _rst, _chartType, _dataModel, _setting);

        _opts = this.reOptions(_opts, _setting, _chartType, _dataModel);

        return {
            options: _opts,
            data: _rst
        };
    }
};

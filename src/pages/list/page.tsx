import React from 'react';
import router from 'umi/router';
import styles from './page.less';
import {MrDownload, MrEcharts, MrRequest, MrResource} from '../../lib';
import Button from 'antd/lib/button/button';
// import {MrEcharts} from 'masterrt';

console.log(':::::::::');

export default () => {
    let dataPie = [
        {
            value: 78499,
            name: 'A0'
        },
        {
            value: 131536,
            name: 'A Entry'
        },
        {
            value: 246050,
            name: 'A Main'
        },
        {
            value: 284390,
            name: 'A Plus'
        },
        {
            value: 394088,
            name: 'B'
        },
        {
            value: 35022,
            name: 'C'
        },
        {
            value: 316762,
            name: 'SUV'
        },
        {
            value: 34069,
            name: 'MPV'
        }
    ].sort((a, b) => (a.value > b.value ? -1 : 1));

    let dataWordCloud = [
        {
            brand: 'Olay',
            en_word: 'OLAY',
            name: 'olay',
            value: 21636,
            word: 'olay'
        },
        {
            brand: 'Olay',
            en_word: '# Victoria Song #',
            name: '#宋茜#',
            value: 17169,
            word: '#宋茜#'
        },
        {brand: 'Olay', en_word: '@ Victoria Song', name: '@宋茜', value: 16802, word: '@宋茜'},
        {
            brand: 'Olay',
            en_word: 'Victoria Song # blood hip-hop group #',
            name: '#宋茜热血街舞团#',
            value: 15748,
            word: '#宋茜热血街舞团#'
        },
        {
            brand: 'Olay',
            en_word: '# Victoria Song endorsement silk Yun #',
            name: '#宋茜代言丝蕴#',
            value: 13799,
            word: '#宋茜代言丝蕴#'
        },
        {brand: 'Olay', en_word: '@olay', name: '@olay', value: 10696, word: '@olay'},
        {
            brand: 'Olay',
            en_word: 'Victoria Song # blood convener #',
            name: '#宋茜热血召集人#',
            value: 7788,
            word: '#宋茜热血召集人#'
        },
        {brand: 'Olay', en_word: 'Ankang', name: '安康', value: 6322, word: '安康'},
        {
            brand: 'Olay',
            en_word: 'Happy',
            name: '喜乐',
            value: 6322,
            word: '喜乐'
        },
        {
            brand: 'Olay',
            en_word: 'Victoria Song # Pippi #',
            name: '#宋茜关皮皮#',
            value: 6160,
            word: '#宋茜关皮皮#'
        },
        {
            brand: 'Olay',
            en_word: '# Victoria Song endorsement 100 # alcohol',
            name: '#宋茜代言百醇#',
            value: 5752,
            word: '#宋茜代言百醇#'
        },
        {
            brand: 'Olay',
            en_word: '# Victoria Song blasted into # plume',
            name: '#宋茜闻人羽#',
            value: 5738,
            word: '#宋茜闻人羽#'
        },
        {brand: 'Olay', en_word: 'White bottle', name: '小白瓶', value: 4715, word: '小白瓶'},
        {
            brand: 'Olay',
            en_word: 'OLAY',
            name: '玉兰油',
            value: 4064,
            word: '玉兰油'
        },
        {brand: 'Olay', en_word: 'Essence', name: '精华', value: 3524, word: '精华'},
        {
            brand: 'Olay',
            en_word: 'Skin and flesh',
            name: '肌肤',
            value: 3228,
            word: '肌肤'
        },
        {brand: 'Olay', en_word: 'Prox', name: 'prox', value: 3159, word: 'prox'},
        {
            brand: 'Olay',
            en_word: 'like',
            name: '喜欢',
            value: 2854,
            word: '喜欢'
        },
        {brand: 'Olay', en_word: 'Game', name: '游戏', value: 2845, word: '游戏'},
        {
            brand: 'Olay',
            en_word: 'Age',
            name: '年龄',
            value: 2432,
            word: '年龄'
        },
        {brand: 'Olay', en_word: 'Skin whitening', name: '美白', value: 2383, word: '美白'},
        {
            brand: 'Olay',
            en_word: '# without fear of age #',
            name: '#无惧年龄#',
            value: 2299,
            word: '#无惧年龄#'
        },
        {brand: 'Olay', en_word: 'Effect', name: '效果', value: 2184, word: '效果'},
        {
            brand: 'Olay',
            en_word: 'Cream',
            name: '面霜',
            value: 2052,
            word: '面霜'
        },
        {brand: 'Olay', en_word: 'product', name: '产品', value: 1864, word: '产品'},
        {
            brand: 'Olay',
            en_word: 'Love',
            name: '爱情',
            value: 1824,
            word: '爱情'
        },
        {brand: 'Olay', en_word: 'Good', name: '好用', value: 1749, word: '好用'},
        {
            brand: 'Olay',
            en_word: 'Girl student',
            name: '女生',
            value: 1695,
            word: '女生'
        },
        {brand: 'Olay', en_word: 'Moisture', name: '保湿', value: 1678, word: '保湿'},
        {
            brand: 'Olay',
            en_word: 'skin',
            name: '皮肤',
            value: 1589,
            word: '皮肤'
        },
        {brand: 'Olay', en_word: 'Bang Bang', name: '棒棒', value: 1485, word: '棒棒'},
        {
            brand: 'Olay',
            en_word: 'Facial mask',
            name: '面膜',
            value: 1483,
            word: '面膜'
        },
        {brand: 'Olay', en_word: 'I love you', name: '我爱你', value: 1366, word: '我爱你'},
        {
            brand: 'Olay',
            en_word: 'Zai',
            name: '崽崽',
            value: 1366,
            word: '崽崽'
        },
        {brand: 'Olay', en_word: 'Use', name: '使用', value: 1335, word: '使用'},
        {
            brand: 'Olay',
            en_word: 'Break up',
            name: '分手',
            value: 1255,
            word: '分手'
        },
        {brand: 'Olay', en_word: 'Cheek', name: '脸蛋子', value: 1239, word: '脸蛋子'},
        {
            brand: 'Olay',
            en_word: 'Fast thin',
            name: '快瘦',
            value: 1238,
            word: '快瘦'
        },
        {
            brand: 'Olay',
            en_word: '# fashion Victoria Song #',
            name: '#时尚演绎者宋茜#',
            value: 1218,
            word: '#时尚演绎者宋茜#'
        },
        {brand: 'Olay', en_word: 'Apple muscle', name: '苹果肌', value: 1170, word: '苹果肌'},
        {
            brand: 'Olay',
            en_word: 'Moist',
            name: '滋润',
            value: 1149,
            word: '滋润'
        },
        {brand: 'Olay', en_word: 'Break up', name: '分手吧', value: 1085, word: '分手吧'},
        {
            brand: 'Olay',
            en_word: 'Grow grass',
            name: '种草',
            value: 1055,
            word: '种草'
        },
        {brand: 'Olay', en_word: 'Eye cream', name: '眼霜', value: 1046, word: '眼霜'},
        {
            brand: 'Olay',
            en_word: 'nicotinamide',
            name: '烟酰胺',
            value: 1011,
            word: '烟酰胺'
        },
        {brand: 'Olay', en_word: 'Rest', name: '休息', value: 1009, word: '休息'},
        {
            brand: 'Olay',
            en_word: '@ Victoria Song daily Propaganda Group',
            name: '@宋茜日宣小组',
            value: 1006,
            word: '@宋茜日宣小组'
        },
        {brand: 'Olay', en_word: 'compromise', name: '妥协', value: 1005, word: '妥协'},
        {
            brand: 'Olay',
            en_word: 'Replenishment',
            name: '补水',
            value: 981,
            word: '补水'
        },
        {brand: 'Olay', en_word: 'Red bottle', name: '红瓶', value: 964, word: '红瓶'},
        {
            brand: 'Olay',
            en_word: 'Micro film',
            name: '微电影',
            value: 940,
            word: '微电影'
        },
        {brand: 'Olay', en_word: 'Light', name: '光感', value: 935, word: '光感'},
        {
            brand: 'Olay',
            en_word: 'Victoria Song # cocoon town # romance',
            name: '#宋茜茧镇奇缘#',
            value: 929,
            word: '#宋茜茧镇奇缘#'
        },
        {
            brand: 'Olay',
            en_word: 'Victoria Song # Chunxiao Du #',
            name: '#宋茜杜春晓#',
            value: 927,
            word: '#宋茜杜春晓#'
        },
        {brand: 'Olay', en_word: 'miss you', name: '想你', value: 918, word: '想你'},
        {
            brand: 'Olay',
            en_word: 'Love between brothers and sisters',
            name: '姐弟恋',
            value: 893,
            word: '姐弟恋'
        },
        {brand: 'Olay', en_word: 'Recommend', name: '推荐', value: 828, word: '推荐'},
        {
            brand: 'Olay',
            en_word: 'Schoolboy',
            name: '男生',
            value: 821,
            word: '男生'
        },
        {brand: 'Olay', en_word: 'happiness', name: '幸福', value: 808, word: '幸福'},
        {
            brand: 'Olay',
            en_word: 'Bright red',
            name: '大红',
            value: 807,
            word: '大红'
        },
        {brand: 'Olay', en_word: 'compact', name: '紧致', value: 789, word: '紧致'},
        {
            brand: 'Olay',
            en_word: 'Answer',
            name: '答案',
            value: 778,
            word: '答案'
        },
        {brand: 'Olay', en_word: 'vote', name: '投票', value: 777, word: '投票'},
        {
            brand: 'Olay',
            en_word: 'Young',
            name: '年轻',
            value: 777,
            word: '年轻'
        },
        {brand: 'Olay', en_word: 'hope', name: '希望', value: 751, word: '希望'},
        {
            brand: 'Olay',
            en_word: 'absorb',
            name: '吸收',
            value: 742,
            word: '吸收'
        },
        {brand: 'Olay', en_word: 'component', name: '成分', value: 730, word: '成分'},
        {
            brand: 'Olay',
            en_word: 'Face',
            name: '小脸',
            value: 719,
            word: '小脸'
        },
        {brand: 'Olay', en_word: 'Brave', name: '勇敢', value: 710, word: '勇敢'},
        {
            brand: 'Olay',
            en_word: 'Good',
            name: '好感',
            value: 708,
            word: '好感'
        },
        {brand: 'Olay', en_word: 'Insist', name: '坚持', value: 707, word: '坚持'},
        {
            brand: 'Olay',
            en_word: 'time',
            name: '时光',
            value: 706,
            word: '时光'
        },
        {brand: 'Olay', en_word: 'Pursuit', name: '追求', value: 698, word: '追求'},
        {
            brand: 'Olay',
            en_word: 'China',
            name: '中国',
            value: 692,
            word: '中国'
        },
        {brand: 'Olay', en_word: 'overwhelmed', name: '爆棚', value: 688, word: '爆棚'},
        {
            brand: 'Olay',
            en_word: 'texture',
            name: '质地',
            value: 681,
            word: '质地'
        },
        {brand: 'Olay', en_word: 'buy-back', name: '回购', value: 680, word: '回购'},
        {
            brand: 'Olay',
            en_word: 'Skin care',
            name: '护肤',
            value: 639,
            word: '护肤'
        },
        {brand: 'Olay', en_word: 'newborn', name: '新生', value: 633, word: '新生'},
        {
            brand: 'Olay',
            en_word: 'Moisturizing Cream',
            name: '滋润霜',
            value: 620,
            word: '滋润霜'
        },
        {
            brand: 'Olay',
            en_word: 'The whitening essence',
            name: '美白精华',
            value: 614,
            word: '美白精华'
        },
        {
            brand: 'Olay',
            en_word: '@prox Bo study poetry',
            name: '@prox博研诗',
            value: 607,
            word: '@prox博研诗'
        },
        {brand: 'Olay', en_word: 'Body Lotion', name: '润肤霜', value: 590, word: '润肤霜'},
        {
            brand: 'Olay',
            en_word: 'burden',
            name: '负担',
            value: 589,
            word: '负担'
        },
        {brand: 'Olay', en_word: 'Skin care products', name: '护肤品', value: 573, word: '护肤品'},
        {
            brand: 'Olay',
            en_word: 'Fine lines',
            name: '细纹',
            value: 519,
            word: '细纹'
        },
        {brand: 'Olay', en_word: 'Pale spot', name: '淡斑', value: 516, word: '淡斑'},
        {
            brand: 'Olay',
            en_word: 'no fear',
            name: '无惧',
            value: 506,
            word: '无惧'
        },
        {brand: 'Olay', en_word: 'Female sex', name: '女性', value: 481, word: '女性'},
        {
            brand: 'Olay',
            en_word: 'brand',
            name: '品牌',
            value: 473,
            word: '品牌'
        },
        {brand: 'Olay', en_word: 'Choice', name: '选择', value: 472, word: '选择'},
        {
            brand: 'Olay',
            en_word: 'India',
            name: '痘印',
            value: 468,
            word: '痘印'
        },
        {brand: 'Olay', en_word: 'Victoria Song', name: '宋茜', value: 467, word: '宋茜'},
        {
            brand: 'Olay',
            en_word: 'Advertisement',
            name: '广告',
            value: 462,
            word: '广告'
        },
        {brand: 'Olay', en_word: 'Skin colour', name: '肤色', value: 460, word: '肤色'},
        {
            brand: 'Olay',
            en_word: 'time',
            name: '时间',
            value: 454,
            word: '时间'
        },
        {brand: 'Olay', en_word: 'Come on', name: '加油', value: 443, word: '加油'},
        {
            brand: 'Olay',
            en_word: 'Sunscreen',
            name: '防晒',
            value: 426,
            word: '防晒'
        },
        {brand: 'Olay', en_word: 'Film', name: '电影', value: 406, word: '电影'},
        {
            brand: 'Olay',
            en_word: 'Phone',
            name: '打电话',
            value: 399,
            word: '打电话'
        },
        {brand: 'Olay', en_word: 'Story', name: '故事', value: 396, word: '故事'},
        {
            brand: 'Olay',
            en_word: 'attitude',
            name: '态度',
            value: 384,
            word: '态度'
        }
    ];

    let ladder = [
        {brand: 'Braun', date: '2017-12-16', name: 'Braun', value: 48, x: '2017-12-16'},
        {brand: 'Braun', date: '2017-12-17', name: 'Braun', value: 88, x: '2017-12-17'},
        {brand: 'Braun', date: '2017-12-18', name: 'Braun', value: 747, x: '2017-12-18'},
        {brand: 'Braun', date: '2017-12-19', name: 'Braun', value: 536, x: '2017-12-19'},
        {brand: 'Braun', date: '2017-12-20', name: 'Braun', value: 42, x: '2017-12-20'},
        {brand: 'Braun', date: '2017-12-21', name: 'Braun', value: 1147, x: '2017-12-21'},
        {brand: 'Braun', date: '2017-12-22', name: 'Braun', value: 347, x: '2017-12-22'},
        {brand: 'Braun', date: '2017-12-23', name: 'Braun', value: 64, x: '2017-12-23'},
        {brand: 'Braun', date: '2017-12-24', name: 'Braun', value: 72, x: '2017-12-24'},
        {brand: 'Braun', date: '2017-12-25', name: 'Braun', value: 62, x: '2017-12-25'},
        {brand: 'Braun', date: '2017-12-26', name: 'Braun', value: 78, x: '2017-12-26'},
        {brand: 'Braun', date: '2017-12-27', name: 'Braun', value: 88, x: '2017-12-27'},
        {brand: 'Braun', date: '2017-12-28', name: 'Braun', value: 43, x: '2017-12-28'},
        {brand: 'Braun', date: '2017-12-29', name: 'Braun', value: 45, x: '2017-12-29'},
        {brand: 'Braun', date: '2017-12-30', name: 'Braun', value: 308, x: '2017-12-30'},
        {brand: 'Braun', date: '2017-12-31', name: 'Braun', value: 728, x: '2017-12-31'},
        {brand: 'Braun', date: '2018-01-01', name: 'Braun', value: 157, x: '2018-01-01'},
        {brand: 'Braun', date: '2018-01-02', name: 'Braun', value: 130, x: '2018-01-02'}
    ];

    let R = MrResource.pool('./assets/{file}');

    let testAjax = () => {

        // MrRequest('./assets/baidu.xlsx', {
        //     headers: {
        //         responseType: 'blob'
        //     }
        // });

        R.download({
            file: 'baidu.xlsx',
            downloadName: '江山如此.xlsx'
        }, {
            headers: {
                responseType: 'blob'
            }
        });


        return 'aaa';
    };

    return (
        <div className={styles.normal}>
            <h2>List Page</h2>

            <div>
                <MrDownload url="http://localhost:8000/assets/b.txt">我要下载</MrDownload>
                http://localhost:8000/assets/b.txt
            </div>

            <div>
                <MrDownload url="http://localhost:8000/assets/baidu.xlsx">我要下载</MrDownload>
                http://localhost:8000/assets/baidu.xlsx
            </div>

            <div>
                <MrDownload url="http://localhost:8000/assets/bbs.svg">我要下载</MrDownload>
                http://localhost:8000/assets/bbs.svg
            </div>

            <div>
                <MrDownload url="http://localhost:8000/assets/bht.pdf">我要下载</MrDownload>
                http://localhost:8000/assets/bht.pdf
            </div>

            <div>
                <MrDownload url="http://localhost:8000/assets/gbk.rar">我要下载</MrDownload>
                http://localhost:8000/assets/gbk.rar
            </div>

            <div>
                <MrDownload url="http://localhost:8000/assets/icon.zip">我要下载</MrDownload>
                http://localhost:8000/assets/icon.zip
            </div>

            <div>
                <MrDownload url="http://localhost:8000/assets/olay.csv">我要下载</MrDownload>
                http://localhost:8000/assets/olay.csv
            </div>

            <div>
                <MrDownload url="http://localhost:8000/assets/王丹.docx">我要下载</MrDownload>
                http://localhost:8000/assets/王丹.docx
            </div>

            <div>
                <MrDownload url="http://localhost:8000/assets/林政.jpg">我要下载</MrDownload>
                http://localhost:8000/assets/林政.jpg
            </div>


            <Button onClick={testAjax.bind(this)}>Ajax</Button>


            <div
                onClick={() => {
                    router.goBack();
                }}
            >
                Back
            </div>

            <div style={{height: 300}}>
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
                    setting={[{'legend.show': true}, {'legend.orient': 'vertical'}, {'legend.right': '20%'}]}
                    // ? options 直接调用 // 图表的options配置，直接获得图表
                    options={null}
                    // ? theme // 图表的主体配色
                    theme={''}
                    // ? renderType, // 图表绘图类型 'svg', 'canvas'
                    renderType={'svg'}
                />
            </div>

            <section style={{height: 300}}>
                <h4>wordCloud</h4>
                <MrEcharts data={dataWordCloud} chartTypes={'wordCloud::random'} />
            </section>

            <section style={{height: 300}}>
                <h4>bar::stack</h4>
                <MrEcharts
                    data={ladder} // no use stack // {bar::stack=false}
                    chartTypes={'bar::stack::ladder'}
                />
            </section>
        </div>
    );
};

import {resolve} from 'path';

export default {
    proxy: {
        '/services': {
            target: 'http://58.215.174.164:16800/',
            changeOrigin: true,
            pathRewrite: {'^/services': ''}
        }
    },
    alias: {
        components: resolve(__dirname, './components')
    },
    theme: {
        'primary-color': '#307fff'
    },
    disableCSSModules: true

};

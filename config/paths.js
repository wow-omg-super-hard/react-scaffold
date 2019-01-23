var path = require('path');

// 入口文件路径
export const ENTRANCE_FILE = path.resolve(__dirname, '..', 'app', 'index.js');

// 输出文件目录路径
export const OUTPUT_DIR = path.resolve(__dirname, '..', 'build');

// 页面组件路径
export const PAGE_COM = path.resolve(__dirname, '..', 'pages');

// 布局组件路径
export const LAYOUT_COM = path.resolve(__dirname, '..', 'layouts');

// UI组件路径
export const UI_COM = path.resolve(__dirname, '..', 'components');

// 业务组件路径
export const HOC_COM = path.resolve(__dirname, '..', 'hocs');

// 功能函数目录
export const UTIL_DIR = path.resolve(__dirname, '..', 'utils');

// 全局样式目录
export const STYLE_DIR = path.resolve(__dirname, '..', 'styles');

// 全局静态资源目录
export const ASSERT_DIR = path.resolve(__dirname, '..', 'asserts');
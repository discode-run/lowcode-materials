import Taro, { Current } from '@tarojs/taro';
import { objectToQuery } from './data';
import { $preload } from './storage';
let router = {
    baseUrl: '/pages/app',
    syncMap: {
        pages: [],
        subPages: [],
        subPageUrls: [],
    }
};
export const loadSyncMap = function (config) {
    router = config;
};
export const createRoute = (fileName) => {
    var _a;
    const query = ((_a = Current.router) === null || _a === void 0 ? void 0 : _a.params) || {};
    const params = $preload('PAGE_PARAMS_' + fileName) || {};
    return function () {
        return {
            query,
            params,
        };
    };
};
export const navigateBack = Taro.navigateBack;
export const navigateTo = (pageName, { query = {}, params } = {}) => {
    if (params)
        $preload('PAGE_PARAMS_' + pageName, params);
    let baseUrl = '';
    if (router.syncMap.pages.includes(pageName)) {
        baseUrl = router.baseUrl;
    }
    else if (router.syncMap.subPages.includes(pageName)) {
        baseUrl = router.syncMap.subPageUrls[0].split('/')[0];
    }
    if (baseUrl && baseUrl.slice(0, 1) !== '/')
        baseUrl = '/' + baseUrl;
    const url = baseUrl ? `${baseUrl}/${pageName}/index${Object.keys(query).length > 0 ? '?' : ''}${objectToQuery(query, false)}` : pageName;
    Taro.navigateTo({
        url,
    });
};
export const redirectTo = (pageName, { query = {}, params } = {}) => {
    if (params)
        $preload('PAGE_PARAMS_' + pageName, params);
    let baseUrl = '';
    if (router.syncMap.pages.includes(pageName)) {
        baseUrl = router.baseUrl;
    }
    else if (router.syncMap.subPages.includes(pageName)) {
        baseUrl = router.syncMap.subPageUrls[0].split('/')[0];
    }
    if (baseUrl && baseUrl.slice(0, 1) !== '/')
        baseUrl = '/' + baseUrl;
    const url = baseUrl ? `${baseUrl}/${pageName}/index${Object.keys(query).length > 0 ? '?' : ''}${objectToQuery(query, false)}` : pageName;
    Taro.redirectTo({
        url,
    });
};
//# sourceMappingURL=navigation.js.map
import Taro, { Current } from '@tarojs/taro';
import { objectToQuery } from './data';
import { NavigationOption } from './navigation.type';
import { $preload } from './storage';

let router = {
  baseUrl: '/pages/app',
  syncMap: {
    pages: [] as string[],
    subPages: [] as string[],
    subPageUrls: [] as string[],
  }
}
export const loadSyncMap = function(config: typeof router) {
  router = config;
}

export const createRoute = (fileName: string) => {
  const query = Current.router?.params || {};
  const params = $preload('PAGE_PARAMS_' + fileName) || {};
  return function () {
    return {
      query,
      params,
    };
  };
};
export const navigateBack = Taro.navigateBack;
export const navigateTo = (pageName: string, { query = {}, params }: NavigationOption = {}) => {
  if (params) $preload('PAGE_PARAMS_' + pageName, params);
  let baseUrl = '';
  if (router.syncMap.pages.includes(pageName)) {
    baseUrl = router.baseUrl;
  } else if (router.syncMap.subPages.includes(pageName)) {
    baseUrl = router.syncMap.subPageUrls[0].split('/')[0];
  }
  if (baseUrl && baseUrl.slice(0, 1) !== '/') baseUrl = '/' + baseUrl;
  const url = baseUrl ? `${baseUrl}/${pageName}/index${Object.keys(query).length > 0 ? '?' : ''}${objectToQuery(query, false)}` : pageName;
  Taro.navigateTo({
    url,
  });
};
export const redirectTo = (pageName: string, { query = {}, params }: NavigationOption = {}) => {
  if (params) $preload('PAGE_PARAMS_' + pageName, params);
  let baseUrl = '';
  if (router.syncMap.pages.includes(pageName)) {
    baseUrl = router.baseUrl;
  } else if (router.syncMap.subPages.includes(pageName)) {
    baseUrl = router.syncMap.subPageUrls[0].split('/')[0];
  }
  if (baseUrl && baseUrl.slice(0, 1) !== '/') baseUrl = '/' + baseUrl;
  const url = baseUrl ? `${baseUrl}/${pageName}/index${Object.keys(query).length > 0 ? '?' : ''}${objectToQuery(query, false)}` : pageName;
  Taro.redirectTo({
    url,
  });
};

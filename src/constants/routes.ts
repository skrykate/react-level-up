import { _APP_HOST } from './main';

export const _APP_ROUTE_NAMES = {
    home: '/',
};

export const _APP_ROUTE_HOME = _APP_HOST || _APP_ROUTE_NAMES.home;

export const _APP_ROUTE_POST = (postId: string) => {
    return `${_APP_HOST}/posts/${postId}`;
};

// @flow

export const SET_LOCALE = 'SET_LOCALE';

export function setLocale(lang: string) {
    return {
        type: SET_LOCALE,
        lang
    }
}
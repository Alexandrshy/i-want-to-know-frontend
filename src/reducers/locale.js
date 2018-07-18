// @flow

import { SET_LOCALE } from '../actions';

type State = { lang: string};
type Action = { type: 'SET_LOCALE', lang: string }

function locale(state: State = { lang: 'en' }, action: Action): State {
    switch(action.type) {
        case SET_LOCALE: 
            return { lang: action.lang } 

        default: return state;
    }
}

export default locale;
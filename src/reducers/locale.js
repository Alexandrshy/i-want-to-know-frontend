// @flow

import { SET_LOCALE } from '../actions';

type State = { lang: string};
type Action = { type: '' }

function locale(state: State = { lang: 'en' }, action: Action = { type: '' }): State {
    switch(action.type) {
        case SET_LOCALE: 
            return { lang: action.lang } 

        default: return state;
    }
}

export default locale;
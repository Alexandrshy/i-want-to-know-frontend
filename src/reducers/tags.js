// @flow

type State = [];
type Action = { type: '' }

function tags(state: State = [], action: Action = { type: '' }): State {
    switch(action.type) {    
        default: return state;
    }
}

export default tags;
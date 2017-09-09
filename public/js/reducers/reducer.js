import BusinessModule from './BusinessModule';

function mfReducer(state, action) {
    let newState;
    switch(action.type) {
        case 'SEARCH_BUSINESS':
            let items = BusinessModule.searchBusiness(state.get('business_list'), action.search_term);
            return state.set('items', items);
        break;
    }
    return state
}

export default mfReducer;

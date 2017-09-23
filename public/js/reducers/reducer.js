import BusinessModule from './BusinessModule';

function mfReducer(state, action) {
    let newState, items;
    switch(action.type) {
        case 'SEARCH_BUSINESS':
            items = BusinessModule.searchBusiness(state.get('business_list'), action.search_term);
            return state.set('items', items);
        break;
        case 'SEARCH_BUSINESS_BY_ID':
            items = BusinessModule.searchBusinessById(state.get('business_list'), action.ids);
            return state.set('items', items);
        break;
    }
    return state
}

export default mfReducer;

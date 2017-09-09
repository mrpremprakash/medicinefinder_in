const SEARCH_BUSINESS = 'SEARCH_BUSINESS';

export function searchBusiness(value) {
    return {
        type: SEARCH_BUSINESS,
        search_term: value
    }
}

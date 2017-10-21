const SEARCH_BUSINESS = 'SEARCH_BUSINESS';
const SEARCH_BUSINESS_BY_ID = 'SEARCH_BUSINESS_BY_ID';

export function searchBusiness(value) {
    return {
        type: SEARCH_BUSINESS,
        search_term: value
    }
}
export function searchBusinessById(ids) {
    return {
        type: SEARCH_BUSINESS_BY_ID,
        ids: ids
    }
}

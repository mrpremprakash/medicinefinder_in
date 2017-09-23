const BusinessModule = {
    searchBusiness: function(items, search_term) {
        return items.filter(function(item) {
            return (item.address.toLowerCase().indexOf(search_term.toLowerCase()) == -1) ? false: true;
        });
    },
    searchBusinessById: function(items, ids) {
        let new_items = [];
        for(let i = 0; i < ids.length; i++) {
            new_items.push(items[i]);
        }
        return new_items;
    }
}

export default BusinessModule;

const BusinessModule = {
    searchBusiness: function(items, search_term) {
        return items.filter(function(item) {
            return (item.address.toLowerCase().indexOf(search_term.toLowerCase()) == -1) ? false: true;
        });
    }
}

export default BusinessModule;

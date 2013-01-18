/// <reference path="../Scripts/knockout-2.2.1.debug.js" />


$(function () {
    var product = {
        id: 1001,
        itemNumber: "TYA1001",
        model: "Totyoa",
        salePrice: "20000"
    };

    $("#itemnumber").text(product.id);
    $("#model").val(product.model);
    $("#saleprice").val(product.salePrice);
    //KNOCKOUT BINDING
    var productKO = {
        id: 1001,
        itemNumber: ko.observable("TYA1001"),
        model: ko.observable("Totyoa"),
        salePrice: ko.observable("20000")
    };

    ko.applyBindings(productKO);

});
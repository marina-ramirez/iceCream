$.getJSON("./json/data.json", function (data) {
    $("#title").html(data.header);
    $("#tagline").html(data.tagline);
    $("#aboutPar").html(data.about);

    var popUp = $("<div></div>");
    var popFlavor = $("<h2></h2>");
    var popCost=$("<h3></h3>");
    var popDetails=$("<h3></h3>");
    popUp.addClass("popUp");
    popUp.append(popFlavor, popCost, popDetails);
    popUp.hide();
    popUp.click(function () {
        $(this).hide();
    });

    $("body").append(popUp);

    $.each(data.flavors, function (idx, data) {
        var prod=$("<div></div>");
        prod.addClass("product");
        prod.html("<img src='"+data.image+"'/>");

        prod.click(function () {
            popUp.show();
            popFlavor.html("Name: "+ data.name);
            popCost.html("Price: "+data.price);
            popDetails.html("Details: "+data.details)
        });

        $(".iceCreamDisplay").append(prod);
    })
});
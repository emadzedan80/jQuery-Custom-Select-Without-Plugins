$(document).ready(function () {



    /* Select Group 1 input Jquery without Plugins */
    $(".select-group-1 select").each(function () {
        //No need to touch the css because it is done once for all same language
        var mySelect = $(this);
        var numberOfOptions = $(this).children("option").length;

        mySelect.addClass("select-hidden");
        mySelect.wrap('<div class="select"></div>');
        mySelect.after('<div class="select-styled"></div>');

        var styledSelect = mySelect.next("div.select-styled");
        styledSelect.text(mySelect.children("option").eq(0).text());

        var list = $("<ul />", {
            class: "select-options"
        }).insertAfter(styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $("<li />", {
                text: mySelect.children("option").eq(i).text(),
                rel: mySelect.children("option").eq(i).val()
            }).appendTo(list);
        }

        var listItems = list.children("li");
        //on load
        styledSelect.addClass("down-arrow");
        styledSelect.click(function (e) {
            e.stopPropagation();
            $("div.select-styled.active").each(function () {
                $(this).removeClass("active").next("ul.select-options").hide();
            });
            $(this).toggleClass("active").toggleClass("up-arrow").next("ul.select-options").toggle();
            //We (Must) set this if we are using multiple lists, where if open the other we close the current (and you do condition as much as there is selects in the same page)
            if ($(".select-group-1 .select-styled").hasClass("active")) {
                $(".select-group-2 .select-styled").removeClass("active");
                $(".select-group-2 .select-options").hide();
            }
        });

        listItems.click(function () {
            styledSelect.text($(this).text()).removeClass("active").removeClass("up-arrow");
            mySelect.val($(this).attr("rel"));
            mySelect.hide();
            console.log("Value Selected From Select Group 1: " + mySelect.val() + " You Can Use AJAX Or Store This Value In A Hidden Input Feild Value attribute And isset($_Get[hidden-filed-name-attribute]) On Submit");
        });

        styledSelect.click(function (e) {
            $(this).toggleClass("active");
        });

        $(document).click(function () {
            styledSelect.removeClass("active").removeClass("up-arrow");
            list.hide();
        });
    });
    /* End of Select Group 1 input Jquery without Plugins */

    /* Select Group 2 input Jquery without Plugins */
    $(".select-group-2 select").each(function () {
        //No need to touch the css because it is done once for all same language
        var mySelect = $(this);
        var numberOfOptions = $(this).children("option").length;

        mySelect.addClass("select-hidden");
        mySelect.wrap('<div class="select"></div>');
        mySelect.after('<div class="select-styled"></div>');

        var styledSelect = mySelect.next("div.select-styled");
        styledSelect.text(mySelect.children("option").eq(0).text());

        var list = $("<ul />", {
            class: "select-options"
        }).insertAfter(styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $("<li />", {
                text: mySelect.children("option").eq(i).text(),
                rel: mySelect.children("option").eq(i).val()
            }).appendTo(list);
        }

        var listItems = list.children("li");
        //on load
        styledSelect.addClass("down-arrow");
        styledSelect.click(function (e) {
            e.stopPropagation();
            $("div.select-styled.active").each(function () {
                $(this).removeClass("active").next("ul.select-options").hide();
            });
            $(this).toggleClass("active").toggleClass("up-arrow").next("ul.select-options").toggle();
            //We (Must) set this if we are using multiple lists, where if open the other we close the current (and you do condition as much as there is selects in the same page)
            if ($(".select-group-2 .select-styled").hasClass("active")) {
                $(".select-group-1 .select-styled").removeClass("active");
                $(".select-group-1 .select-options").hide();
            }
        });

        listItems.click(function () {
            styledSelect.text($(this).text()).removeClass("active").removeClass("up-arrow");
            mySelect.val($(this).attr("rel"));
            console.log("Value Selected From Select Group 2: " + mySelect.val() + " You Can Use AJAX Or Store This Value In A Hidden Input Feild Value attribute And isset($_Get[hidden-filed-name-attribute]) On Submit");
        });

        styledSelect.click(function (e) {
            $(this).toggleClass("active");
        });

        $(document).click(function () {
            styledSelect.removeClass("active").removeClass("up-arrow");
            list.hide();
        });
    });
    /* End of Select Group 2 input Jquery without Plugins */

});
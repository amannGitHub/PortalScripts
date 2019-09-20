function showAds() {
    $("#lblshowhide").html('Show Ads');

    //hide ads
    $("#adpanel").hide();

    window.adsShown = false;

    //show show ads button
    $("#uparrow").show();


    //hide hide ads button
    $("#downarrow").hide();
}
function hideAds() {
    //show ads
    $("#adpanel").show();

    $("#lblshowhide").html('Hide Ads');


    window.adsShown = true;


    //show hide ads button
    $("#downarrow").show();

    //hide show ads button
    $("#uparrow").hide();
}
function Search() {

    //remove css to show error
    $("#txtsearch").removeClass("boarderror");

    //ensure we have a search string
    if ($("#txtsearch").val().length < 1) {
        //add css to show error
        $("#txtsearch").addClass("boarderror");

        return;
    }
    else {

    }

    $("#dashboardsli").removeClass("usa-current active");

    //hide no result labels
    $("#reportsnoresults").hide();
    $("#dashboardnoresults").hide();

    var data = { SearchValue: $("#txtsearch").val() }
    $.ajax({
        url: "/api/Search",
        data: data,
        type: "Get",
        success: function (data) {

            //clear search box after content is returned
            $("#txtsearch").val("");

            $("#searchpane").show();
            $("#dashboardpane").hide();
            $("#reportspane").hide();
            $("#favoritespane").hide();
            $("#knowledgebasepane").hide();
            $("#supprtpane").hide();
            $("#authorizationspane").hide();

            //show all search tabs
            $("#s1").show();
            $("#s2").show();
            $("#s3").show();
            $("#s4").show();
            $("#s5").show();
            $("#s6").show();
            $("#s7").show();
            $("#s8").show();
            $("#s9").show();
            $("#s10").show();
            $("#s11").show();
            $("#s12").show();
            $("#s13").show();
            $("#s14").show();
            $("#s15").show();
            $("#s16").show();
            $("#s17").show();
            $("#s18").show();

            //show all tabs under dashbaords
            $("#r11j").show();
            $("#r12j").show();
            $("#r13j").show();
            $("#r14j").show();
            $("#r12jshared").show();

            //update html for reports
            $("#currentwahtmls").html(data[0].CurrentWAHtml);
            $("#datasourceshtmls").html(data[0].DataSourcesHtml);
            $("#exitsurveyhtmls").html(data[0].ExitSurveyHtml);
            $("#generaldashboardshtmls").html(data[0].GeneralDashboardsHtml);
            $("#historicalwahtmls").html(data[0].HistoricalWAHtml);
            $("#managerreportshtmls").html(data[0].ManagerReportsHtml);
            $("#marketingdashboardshtmls").html(data[0].MarketingDashboardsHtml);
            $("#md715htmls").html(data[0].MD715Html);
            $("#modelshtmls").html(data[0].ModelsReportsHtml);
            $("#piireportshtmls").html(data[0].PIIReportsHtml);
            $("#sf113reportsuitehtmls").html(data[0].SF113ReportSuiteHtml);
            $("#shareddatasetshtmls").html(data[0].SharedDatasetsHtml);
            $("#sharedlibraryhtmls").html(data[0].SharedLibraryHtml);
            $("#systemadminhtmls").html(data[0].SystemAdminHtml);
            $("#tlmshtmls").html(data[0].TLMSHtml);
            $("#userutilitieshtmls").html(data[0].UserUtilitiesHtml);
            $("#md715htmlssl2012").html(data[0].Sharelibrary2012Html);
            $("#md715htmlssl2016").html(data[0].Sharelibrary2016Html);


            //update html
            $("#piihtmlj").html(data[0].SearchDashBoardModel.PIIHtml);
            $("#standardhtmlj").html(data[0].SearchDashBoardModel.StandardHtml);
            $("#systemadminhtmlj").html(data[0].SearchDashBoardModel.SystemAdminHtml);
            $("#userutilitieshtmlj").html(data[0].SearchDashBoardModel.UserUtilitiesHtml);
            $("#sharedhtmljshared").html(data[0].SearchDashBoardModel.SharedLibraryHtml);

            //hide tabs with no data
            if (data[0].SearchDashBoardModel.SharedLibraryHtml.length < 1) {
                $("#r12jshared").hide();
            }
            if (data[0].SearchDashBoardModel.PIIHtml.length < 1) {
                $("#r11j").hide();
            }
            if (data[0].SearchDashBoardModel.StandardHtml.length < 1) {
                $("#r12j").hide();
            }
            if (data[0].SearchDashBoardModel.SystemAdminHtml.length < 1) {
                $("#r13j").hide();
            }
            if (data[0].SearchDashBoardModel.UserUtilitiesHtml.length < 1) {
                $("#r14j").hide();
            }

            //update manage html
            $("#ModalMangeDynamicSearchDashboards").html(data[0].SearchDashBoardModel.AllManageHtml);

            //update manage html for reports
            $("#ModalMangeDynamicReportsSearch").html("<div style='height:50px;'></div>" + data[0].AllManageHtml);


            //update html for dashboards
            //$("#DashboardSearchResults").html("<div style='height:50px;'></div>" + data[0].SearchDashBoardHtml);

            //update local content search section
            $("#LocalContentResults").html(data[0].LocalSearchHtml);


            //open modal
            // $("#opensearchdialog").click();

            //$("#SearchDialog").closest('.ui-dialog-content').dialog('open');
            var theDialog = $("#SearchDialog").dialog();


            //$("#SearchDialog").dialog({
            //    open: function () {
            //        $(this).closest(".ui-dialog")
            //        .find(".ui-dialog-titlebar-close")
            //        .removeClass("ui-dialog-titlebar-close")
            //        .html("<span class='ui-button-icon-primary ui-icon ui-icon-closethick'></span>");
            //    }
            //});

            theDialog.dialog("open");

            //$('<div>dialog content</div>').dialog({
            //    title: 'Title',
            //    open: function () {
            //        var closeBtn = $('.ui-dialog-titlebar-close');
            //        closeBtn.append('<span class="ui-button-icon-primary ui-icon ui-icon-closethick"></span><span class="ui-button-text">close</span>');
            //    }
            //});

            //var bootstrapButton = $.fn.button.noConflict(); // return $.fn.button to previously assigned value
            //$.fn.bootstrapBtn = bootstrapButton;

            //check if any search contents are empty then hide there tab
            if (data[0].CurrentWAHtml.length < 1) {
                $("#s1").hide();
            }
            if (data[0].DataSourcesHtml.length < 1) {
                $("#s2").hide();
            }
            if (data[0].ExitSurveyHtml.length < 1) {
                $("#s3").hide();
            }
            if (data[0].GeneralDashboardsHtml.length < 1) {
                $("#s4").hide();
            }
            if (data[0].HistoricalWAHtml.length < 1) {
                $("#s5").hide();
            }
            if (data[0].ManagerReportsHtml.length < 1) {
                $("#s6").hide();
            }
            if (data[0].MarketingDashboardsHtml.length < 1) {
                $("#s7").hide();
            }
            if (data[0].MD715Html.length < 1) {
                $("#s8").hide();
            }
            if (data[0].ModelsReportsHtml.length < 1) {
                $("#s9").hide();
            }
            if (data[0].PIIReportsHtml.length < 1) {
                $("#s10").hide();
            }
            if (data[0].SF113ReportSuiteHtml.length < 1) {
                $("#s11").hide();
            }
            if (data[0].SharedDatasetsHtml.length < 1) {
                $("#s12").hide();
            }
            if (data[0].SharedLibraryHtml.length < 1) {
                $("#s13").hide();
            }
            if (data[0].SystemAdminHtml.length < 1) {
                $("#s14").hide();
            }
            if (data[0].TLMSHtml.length < 1) {
                $("#s15").hide();
            }
            if (data[0].UserUtilitiesHtml.length < 1) {
                $("#s16").hide();
            }
            if (data[0].Sharelibrary2012Html.length < 1) {
                $("#s17").hide();
            }
            if (data[0].Sharelibrary2016Html.length < 1) {
                $("#s18").hide();
            }


            //dictate no results

            //show no results in reports page
            if (data[0].CurrentWAHtml.length < 1)
                if (data[0].DataSourcesHtml.length < 1)
                    if (data[0].ExitSurveyHtml.length < 1)
                        if (data[0].GeneralDashboardsHtml.length < 1)
                            if (data[0].HistoricalWAHtml.length < 1)
                                if (data[0].ManagerReportsHtml.length < 1)
                                    if (data[0].MarketingDashboardsHtml.length < 1)
                                        if (data[0].MD715Html.length < 1)
                                            if (data[0].ModelsReportsHtml.length < 1)
                                                if (data[0].PIIReportsHtml.length < 1)
                                                    if (data[0].SF113ReportSuiteHtml.length < 1)
                                                        if (data[0].SharedDatasetsHtml.length < 1)
                                                            if (data[0].SharedLibraryHtml.length < 1)
                                                                if (data[0].SystemAdminHtml.length < 1)
                                                                    if (data[0].TLMSHtml.length < 1)
                                                                        if (data[0].UserUtilitiesHtml.length < 1)
                                                                            if (data[0].Sharelibrary2012Html.length < 1)
                                                                                if (data[0].Sharelibrary2016Html.length < 1) {

                                                                                    $("#reportsnoresults").show();




                                                                                }


            //show no results in dasahboard pane
            if (data[0].SearchDashBoardModel.SharedLibraryHtml.length < 1)
                if (data[0].SearchDashBoardModel.PIIHtml.length < 1)
                    if (data[0].SearchDashBoardModel.StandardHtml.length < 1)
                        if (data[0].SearchDashBoardModel.SystemAdminHtml.length < 1)
                            if (data[0].SearchDashBoardModel.UserUtilitiesHtml.length < 1) {

                                $("#dashboardnoresults").show();
                            }


            //alert(data[0].LocalSearchHtml);

            //show no results in local content pane
            if (data[0].LocalSearchHtml == "<ul></ul>") {
                $("#LocalContentResults").html(' <div id="localnoresults" style="">No results to display</div>')


            }
        }

    });

}// end search


function GetReportsList() {
    //show all tabs under reports
    $("#r1").show();
    $("#r2").show();
    $("#r3").show();
    $("#r4").show();
    $("#r5").show();
    $("#r6").show();
    $("#r7").show();
    $("#r8").show();
    $("#r9").show();

    //get report list
    $.ajax({
        url: "/Api/Report",
        type: "Get",
        success: function (data) {

            //update html
            $("#currentwahtml").html(data[0].CurrentWAHtml);
            $("#datasourceshtml").html(data[0].DataSourcesHtml);
            $("#exitsurveyhtml").html(data[0].ExitSurveyHtml);
            $("#generaldashboardshtml").html(data[0].GeneralDashboardsHtml);
            $("#historicalwahtml").html(data[0].HistoricalWAHtml);
            $("#managerreportshtml").html(data[0].ManagerReportsHtml);
            $("#marketingdashboardshtml").html(data[0].MarketingDashboardsHtml);
            $("#md715html").html(data[0].MD715Html);
            $("#modelshtml").html(data[0].ModelsReportsHtml);
            $("#piireportshtml").html(data[0].PIIReportsHtml);
            $("#sf113reportsuitehtml").html(data[0].SF113ReportSuiteHtml);
            $("#shareddatasetshtml").html(data[0].SharedDatasetsHtml);
            $("#sharedlibraryhtml").html(data[0].SharedLibraryHtml);
            $("#systemadminhtml").html(data[0].SystemAdminHtml);
            $("#tlmshtml").html(data[0].TLMSHtml);
            $("#userutilitieshtml").html(data[0].UserUtilitiesHtml);




            if (data[0].SharedLibraryHtml.length < 1)
                $("#cardsharedlibraryreports").hide();

            //update manage html
            $("#ModalMangeDynamicReports").html(data[0].AllManageHtml);

            //hide tabs with no data
            if (data[0].CurrentWAHtml.length < 1) {
                $("#r1").hide();
            }
            if (data[0].ExitSurveyHtml.length < 1) {
                $("#r2").hide();
            }
            if (data[0].HistoricalWAHtml.length < 1) {
                $("#r3").hide();
            }
            if (data[0].ManagerReportsHtml.length < 1) {
                $("#r4").hide();
            }
            if (data[0].MD715Html.length < 1) {
                $("#r5").hide();
            }
            if (data[0].PIIReportsHtml.length < 1) {
                $("#r6").hide();
            }
            if (data[0].SF113ReportSuiteHtml.length < 1) {
                $("#r7").hide();
            }
            if (data[0].TLMSHtml.length < 1) {
                $("#r8").hide();
            }
            if (data[0].UserUtilitiesHtml.length < 1) {
                $("#r9").hide();
            }

        }
    });

}//function GetReportsList() {


function GetIsGatewayUser() {
    $.ajax({
        url: "/api/GatewayUser",
        type: "Get",
        success: function (data) {
            if (data == false) {

                $("#dashgateway").hide();
                $("#dashgateway").css("display", "none");
            }
            else {
                $("#dashgateway").show();
                 
            }

        }
    });
}


function GetDashboardList() {

    //show all tabs under dashbaords
    $("#r11e").show();
    $("#r12e").show();
    $("#r13e").show();
    $("#r14e").show();


    //get dashboard list
    $.ajax({
        //url: "/Dashboard/GetDashboardList",
        //type: "Post",
        url: "/api/Dashboard",
        type: "Get",
        success: function (data) {

            //update html
            $("#piihtmle").html(data[0].PIIHtml);
            $("#standardhtmle").html(data[0].StandardHtml);
            $("#systemadminhtmle").html(data[0].SystemAdminHtml);
            $("#userutilitieshtmle").html(data[0].UserUtilitiesHtml);

            if (data[0].SharedLibraryDashboardHtml.trim().length < 1) {
                $("#r15e").hide();
            }

            //hide tabs with no data
            if (data[0].PIIHtml.length < 1) {
                $("#r11e").hide();
            }
            if (data[0].StandardHtml.length < 1) {
                $("#r12e").hide();
            }
            if (data[0].SystemAdminHtml.length < 1) {
                $("#r13e").hide();
            }
            if (data[0].UserUtilitiesHtml.length < 1) {
                $("#r14e").hide();
            }

            //update manage modal html
            $("#ModalMangeDynamic").html(data[0].AllManageHtml);


        }

    });
}



function GotoPage(btn) {
    if ($(btn).attr("cachelink").length > 0) {
        window.open($(btn).attr("cachelink"));
    }


}

function GoHome() {
    document.location.href = "/Home";
}
function Logout() {

    document.location.href = " /Account/LogOff";
}

function UpdateAds() {
    //var position = $("#underlearnmore").offset();
    //$(".carousel-indicators").css({ top: position.top, left:position.left, position: 'absolute' });
    //$(".carousel-indicators").appendTo($("#underlearnmore"));

    setInterval(function () {

        $("#searchicon").show();

        if ($("#litem1").hasClass("active")) {

            //update description/learn more button
            $("#subtitle").html($("#litem1description").html());
            $("#btnlearnmore").attr("cachelink", $("#litem1src").html());
            $("#txttitle").text($("#litem1title").html().replace("&amp;", ""));
        }

        if ($("#litem2").hasClass("active")) {


            //update description/learn more button
            $("#subtitle").html($("#litem2description").html());
            $("#btnlearnmore").attr("cachelink", $("#litem2src").html());
            $("#txttitle").text($("#litem2title").html().replace("&amp;", ""));

        }

        if ($("#litem3").hasClass("active")) {


            //update description/learn more button
            $("#subtitle").html($("#litem3description").html());
            $("#btnlearnmore").attr("cachelink", $("#litem3src").html());
            $("#txttitle").text($("#litem3title").html().replace("&amp;", ""));

        }

        //position search icon inside textbox
        var position = $("#txtsearch").offset();
        $("#searchicon").css({ top: position.top - 64, left: position.left + 150, position: 'absolute' });
        //$(".carousel-indicators").appendTo($("#underlearnmore"));

    }, 1000)
}


function GetUser() {

    //gets the username and level
    $.ajax({
        url: "/api/User",
        type: "Get",
        success: function (data) {

            //hide tabs based on level 1 is org lead and 2 is admin
            //if not org lead or admin hide authorizations tab
            if (data[1] == "0" && data[2] == "0") {
                //hide account management tab
                $("#navigationauthselection").hide();
                $("#navigationauthselection").css("display", "none");

            }
            else {

                //hide account management tab
                $("#navigationauthselection").show();
                //$("#navigationauthselection").css("display", "none");
            }

            var username = data[0].split("|");
            var agency = username[1].split("(");

            //update user's name
            $("#username").html(username[0]);
            $("#txtagency").html(agency[0]);
            //$("#txtagencyunder").html("(" + agency[1]).css("font-weight","bold");

        }

    });
}
 

function GetFevsMenuItemViewable() {
    //determines is new menu item is visible or not
    $.ajax({
        url: "/api/FEVSMenuItemViewable",
        type: "Get",
        success: function (data) {

            //hide tabs based on level 1 is org lead and 2 is admin
            //if not org lead or admin hide authorizations tab
            if (data == 0) {

                //hide new tab
                $("#navigationnewtabitem").hide();
                $("#navigationnewtabitem").css("display", "none");

            }
            else {

                //show new tab
                $("#navigationnewtabitem").show();

            }


        }

    });
}




function GetLogo() {

    $.ajax({
        url: "/api/Logo",
        type: "Get",
        success: function (data) {

            //set src of image to path
            $("#imglogo").prop("src", data.toString());
        }

    });

}


function ToggleMenu(option) {

    if (option) {


        $("#menuaside").prependTo("#contentpanel");
        $("#navigationauthselection").addClass("toggleborder");
        $("#lisupport").addClass("toggleborder");
        $("#liknowledgebase").addClass("toggleborder");
        $("#lifavorites").addClass("toggleborder");
        $("#lireport").addClass("toggleborder");
        $("#lidashboard").addClass("toggleborder");
        $("#imagelogocontainer").addClass("toggleborder");
        $("#mainwrapperpanel").addClass("toggleborder");

        window.navigationnormal = false;
    }
    else {

        $("#menuaside").appendTo("#menuasidecontainer");
        $("#navigationauthselection").removeClass("toggleborder");
        $("#lisupport").removeClass("toggleborder");
        $("#liknowledgebase").removeClass("toggleborder");
        $("#lifavorites").removeClass("toggleborder");
        $("#lireport").removeClass("toggleborder");
        $("#lidashboard").removeClass("toggleborder");
        $("#imagelogocontainer").removeClass("toggleborder");
        $("#mainwrapperpanel").removeClass("toggleborder");
        window.navigationnormal = true;

    }

}

window.adsShown = true;

function toggleAds() {
    $("#searchicon").hide();

    if (window.adsShown == true) {
        showAds();

    }
    else {

        hideAds();
    }
}


function RemoveFromFavoritesDasboard(control) {
    // document.location.href = "/Home/Main";

    $.ajax({
        //url: "/Favorites/RemoveFromFavoritesDashboard",
        //type: "Post",
        url: "/api/ManageDashboardFavorites",
        type: "Get",
        data: { Id: $(control).prop("id"), isFavorite: false },
        success: function (data) {

            //update controls icon to add from favofites
            $(control).removeClass('fa-heart');
            $(control).addClass('fa-heart-o');
            $(control).prop('title', 'Add to My Favorites');
            control.outerHTML = control.outerHTML.replace("RemoveFromFavoritesDasboard(this);", "AddtoFavoritesDashboard(this);");

            //show all tabs under dashbaords
            $("#r11z").show();
            $("#r12z").show();
            $("#r13z").show();
            $("#r14z").show();

            //get dashboard list for favorites
            $.ajax({
                //url: "/Favorites/GetDashboardListFavorites",
                //type: "Post",
                url: "/api/FavoritesDashboard",
                success: function (data) {

                    //update html
                    $("#piihtmlz").html(data[0].PIIHtml);
                    $("#standardhtmlz").html(data[0].StandardHtml);
                    $("#systemadminhtmlz").html(data[0].SystemAdminHtml);
                    $("#userutilitieshtmlz").html(data[0].UserUtilitiesHtml);

                    //hide tabs with no data
                    if (data[0].PIIHtml.length < 1) {
                        $("#r11z").hide();
                    }
                    if (data[0].StandardHtml.length < 1) {
                        $("#r12z").hide();
                    }
                    if (data[0].SystemAdminHtml.length < 1) {
                        $("#r13z").hide();
                    }
                    if (data[0].UserUtilitiesHtml.length < 1) {
                        $("#r14z").hide();
                    }

                    //update manage html
                    $("#ModalMangeDynamicFavoritesDashboards").html(data[0].AllManageHtml);
                }

            });

            //show all tabs under dashbaords
            $("#r11e").show();
            $("#r12e").show();
            $("#r13e").show();
            $("#r14e").show();


            //get dashboard list
            $.ajax({
                url: "/api/Dashboard",
                type: "Get",
                success: function (data) {

                    //update html
                    $("#piihtmle").html(data[0].PIIHtml);
                    $("#standardhtmle").html(data[0].StandardHtml);
                    $("#systemadminhtmle").html(data[0].SystemAdminHtml);
                    $("#userutilitieshtmle").html(data[0].UserUtilitiesHtml);

                    //hide tabs with no data
                    if (data[0].PIIHtml.length < 1) {
                        $("#r11e").hide();
                    }
                    if (data[0].StandardHtml.length < 1) {
                        $("#r12e").hide();
                    }
                    if (data[0].SystemAdminHtml.length < 1) {
                        $("#r13e").hide();
                    }
                    if (data[0].UserUtilitiesHtml.length < 1) {
                        $("#r14e").hide();
                    }

                    //update manage modal html
                    $("#ModalMangeDynamic").html(data[0].AllManageHtml);


                }

            });



        }

    });


}

 

function AddtoFavoritesDashboard(control) {
    // document.location.href = "/Home/Main";

    $.ajax({
        //url: "/Favorites/AddtoFavoritesDashboard",
        //type: "Post",
        //data: { DashboardId: $(control).prop("id") },
        url: "/api/ManageDashboardFavorites",
        type: "Get",
        data: { Id: $(control).prop("id"), isFavorite: true },
        success: function (data) {

            //update controls icon to remove from favofites
            $(control).removeClass('fa-heart-o');
            $(control).addClass('fa-heart');
            $(control).prop('title', 'Remove from My Favorites');
            control.outerHTML = control.outerHTML.replace("AddtoFavoritesDashboard(this);", "RemoveFromFavoritesDasboard(this);");

            //show all tabs under dashbaords
            $("#r11z").show();
            $("#r12z").show();
            $("#r13z").show();
            $("#r14z").show();

            //get dashboard list for favorites
            $.ajax({
                //url: "/Favorites/GetDashboardListFavorites",
                //type: "Post",
                url: "/api/FavoritesDashboard",
                type: "Get",
                success: function (data) {

                    //update html
                    $("#piihtmlz").html(data[0].PIIHtml);
                    $("#standardhtmlz").html(data[0].StandardHtml);
                    $("#systemadminhtmlz").html(data[0].SystemAdminHtml);
                    $("#userutilitieshtmlz").html(data[0].UserUtilitiesHtml);

                    //hide tabs with no data
                    if (data[0].PIIHtml.length < 1) {
                        $("#r11z").hide();
                    }
                    if (data[0].StandardHtml.length < 1) {
                        $("#r12z").hide();
                    }
                    if (data[0].SystemAdminHtml.length < 1) {
                        $("#r13z").hide();
                    }
                    if (data[0].UserUtilitiesHtml.length < 1) {
                        $("#r14z").hide();
                    }

                    //update manage html
                    $("#ModalMangeDynamicFavoritesDashboards").html(data[0].AllManageHtml);
                }

            });

            //show all tabs under dashbaords
            $("#r11e").show();
            $("#r12e").show();
            $("#r13e").show();
            $("#r14e").show();


            //get dashboard list
            $.ajax({
                url: "/api/Dashboard",  // /Dashboard/GetDashboardList",
                type: "Get",
                success: function (data) {

                    //update html
                    $("#piihtmle").html(data[0].PIIHtml);
                    $("#standardhtmle").html(data[0].StandardHtml);
                    $("#systemadminhtmle").html(data[0].SystemAdminHtml);
                    $("#userutilitieshtmle").html(data[0].UserUtilitiesHtml);

                    //hide tabs with no data
                    if (data[0].PIIHtml.length < 1) {
                        $("#r11e").hide();
                    }
                    if (data[0].StandardHtml.length < 1) {
                        $("#r12e").hide();
                    }
                    if (data[0].SystemAdminHtml.length < 1) {
                        $("#r13e").hide();
                    }
                    if (data[0].UserUtilitiesHtml.length < 1) {
                        $("#r14e").hide();
                    }

                    //update manage modal html
                    $("#ModalMangeDynamic").html(data[0].AllManageHtml);
                }
            });
        }
    });


}

//get the logo path for the logged in user
//$.ajax({
//    url: "/Home/GetAds",
//    type: "Post",
//    success: function (data) {

//        //set src of image to path
//        $("#innercarousel").html(data);

//        UpdateAds();

//    }
//});



//$(document).ready(function () {

//    //check window size initially
//    if ($(window).width() < 1008) {
//        //$("#collapsemenubutton").show();
//        ToggleMenu(true);
//    }
//    else {
//        //$("#collapsemenubutton").hide();
//        ToggleMenu(false);
//    }

//    $(window).resize(function () {

//        if ($(window).width() < 1008) {
//            //$("#collapsemenubutton").show();
//            ToggleMenu(true);
//        }
//        else {
//            //$("#collapsemenubutton").hide();
//            ToggleMenu(false);
//        }

//    });




//    $("#dashboardpane").show();

//    $("#accordionadashboard").accordion();
//    $("#accordionreports").accordion();
//    $("#accordionfavorites").accordion();

//    $("#txtsearch").on('keyup', function (e) {
//        if (e.keyCode == 13) {
//            Search();
//        }
//    });


//    var position = $("#txtsearch").offset();
//    $("#searchicon").css({ top: position.top - 64, left: position.left + 150, position: 'absolute' });


//    //get the logo path for the logged in user
//    ////get the logo path for the logged in user

//    GetDashboardList();

//    GetLogo();

//    UpdateAds();


//    GetUser();

//    GetFevsMenuItemViewable();


//    GetReportsList();
//    GetFavoritesList();

//    //initiate tab strip
//    //$("#tabstrip").tabs();
//    //$("#tab-container").easytabs();

//});

function GetFavoritesList() {
    //show all tabs under dashbaords
    $("#r11z").show();
    $("#r12z").show();
    $("#r13z").show();
    $("#r14z").show();
    $("#r15z").show();

    //get dashboard list for favorites
    $.ajax({
        //url: "/Favorites/GetDashboardListFavorites",
        //type: "Post",
        url: "/api/FavoritesDashboard",
        type: "Get",
        success: function (data) {

            //update html
            $("#piihtmz").html(data[0].PIIHtml);
            $("#standardhtmlz").html(data[0].StandardHtml);
            $("#systemadminhtmlz").html(data[0].SystemAdminHtml);
            $("#userutilitieshtmlz").html(data[0].UserUtilitiesHtml);
            $("#sharedlibraryhtmlz").html(data[0].SharedLibraryDashboardHtml);

            //hide tabs with no data
            if (data[0].PIIHtml.length < 1) {
                $("#r11z").hide();
            }
            if (data[0].StandardHtml.length < 1) {
                $("#r12z").hide();
            }
            if (data[0].SystemAdminHtml.length < 1) {
                $("#r13z").hide();
            }
            if (data[0].UserUtilitiesHtml.length < 1) {
                $("#r14z").hide();
            }
            if (data[0].SharedLibraryDashboardHtml.length < 1) {
                $("#r15z").hide();
            }

            //update manage html
            $("#ModalMangeDynamicFavoritesDashboards").html(data[0].AllManageHtml);
        }

    });

    //show all reports under favorites
    $("#f1").show();
    $("#f2").show();
    $("#f3").show();
    $("#f4").show();
    $("#f5").show();
    $("#f6").show();
    $("#f7").show();
    $("#f8").show();
    $("#f9").show();
    $("#f10").show();
    $("#f11").show();


    //get report list for favorites
    $.ajax({
        //url: "/Favorites/GetReportListFavorites",
        //type: "Post",
        url: "/api/FavoritesReport",
        type: "Get",
        success: function (data) {

            //update html for reports
            $("#currentwahtmlf").html(data[0].CurrentWAHtml);
            $("#datasourceshtmlf").html(data[0].DataSourcesHtml);
            $("#exitsurveyhtmlf").html(data[0].ExitSurveyHtml);
            $("#generaldashboardshtmlf").html(data[0].GeneralDashboardsHtml);
            $("#historicalwahtmlf").html(data[0].HistoricalWAHtml);
            $("#managerreportshtmlf").html(data[0].ManagerReportsHtml);
            $("#marketingdashboardshtmlf").html(data[0].MarketingDashboardsHtml);
            $("#md715htmlf").html(data[0].MD715Html);
            $("#modelshtmlf").html(data[0].ModelsReportsHtml);
            $("#piireportshtmlf").html(data[0].PIIReportsHtml);
            $("#sf113reportsuitehtmlf").html(data[0].SF113ReportSuiteHtml);
            $("#shareddatasetshtmlf").html(data[0].SharedDatasetsHtml);
            $("#sharedlibraryhtmlf").html(data[0].SharedLibraryHtml);
            $("#systemadminhtmlf").html(data[0].SystemAdminHtml);
            $("#tlmshtmlf").html(data[0].TLMSHtml);
            $("#userutilitieshtmlf").html(data[0].UserUtilitiesHtml);
            $("#userutilitieshtmlfsl2012").html(data[0].Sharelibrary2012Html);
            $("#userutilitieshtmlfsl2016").html(data[0].Sharelibrary2016Html);

            //update manage html
            $("#ModalMangeDynamicFavoritesReports").html(data[0].AllManageHtml);

            //check if any search contents are empty then hide there tab
            if (data[0].CurrentWAHtml.length < 1) {
                $("#f1").hide();
            }
            if (data[0].ExitSurveyHtml.length < 1) {
                $("#f2").hide();
            }
            if (data[0].HistoricalWAHtml.length < 1) {
                $("#f3").hide();
            }
            if (data[0].ManagerReportsHtml.length < 1) {
                $("#f4").hide();
            }
            if (data[0].MD715Html.length < 1) {
                $("#f5").hide();
            }
            if (data[0].PIIReportsHtml.length < 1) {
                $("#f6").hide();
            }
            if (data[0].SF113ReportSuiteHtml.length < 1) {
                $("#f7").hide();
            }
            if (data[0].SharedDatasetsHtml.length < 1) {
                $("#f8").hide();
            }
            if (data[0].TLMSHtml.length < 1) {
                $("#f9").hide();
            }
            if (data[0].UserUtilitiesHtml.length < 1) {
                $("#f10").hide();
            }
            if (data[0].Sharelibrary2016Html.length < 1) {
                $("#f11").hide();
            }

        }

    });
}

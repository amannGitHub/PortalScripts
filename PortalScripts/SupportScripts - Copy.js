function GoHome() {
    document.location.href = "/Home";
}
function Logout() {

    document.location.href = " /Account/LogOff";
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

window.adsShown = true;

function toggleAds() {
    $("#searchicon").hide();

    if (window.adsShown == true) {
        showAds();

    }
    else {

        hideAds();
        window.adsShown == false
    }
}


function HideAdsIfOpen() {
 

    $("#lblshowhide").html('Show Ads');

    //hide ads
    $("#adpanel").hide();

    //window.adsShown = false;

    //show show ads button
    $("#uparrow").show();


    //hide hide ads button
    $("#downarrow").hide();
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
                $("#navigationfevsitem").hide();
                $("#navigationfevsitem").css("display", "none");

            }
            else {

                //show new tab
                $("#navigationfevsitem").show();

            }


        }

    });
}

function GetIsAdmin() {
    //determines is new menu item is visible or not
    $.ajax({
        url: "/api/isadmin",
        type: "Get",
        success: function (data) {
            if (data != true) {

                //hide new tab
                $("#navigationauthselection").hide();
                $("#navigationauthselection").css("display", "none");

            }
            else {

                //show new tab
                $("#navigationauthselection").show();

            }


        }

    });
}

function CheckUserAccess() {
 
    $.ajax({
        url: "/api/DataUserAccessChecks",
        type: "Get",
        success: function (data) {
            if (data != true) {
             }
            else {
                              
            }
        }
    });
}

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

function GetFavoritesDashboard() 
{
//    //show all tabs under dashbaords
    //$("#r11z").show();
    //$("#r12z").show();
    //$("#r13z").show();
    //$("#r14z").show();
    //$("#r15z").show();

    //get dashboard list for favorites
    $.ajax({
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
            if (data[0].PIIHtml.length > 0) {
                $("#r11z").show();
            }
            if (data[0].StandardHtml.length > 0) {
                $("#r12z").show();
            }
            if (data[0].SystemAdminHtml.length > 0) {
                $("#r13z").show();
            }
            if (data[0].UserUtilitiesHtml.length > 0) {
                $("#r14z").show();
            }
            if (data[0].SharedLibraryDashboardHtml.length > 0) {
                $("#r15z").show();
            }

            //update manage html
            $("#ModalMangeDynamicFavoritesDashboards").html(data[0].AllManageHtml);
        }

    });

    //show all reports under favorites

}

function GetFavoritesReport() {

    $("#f1").hide();
    $("#f2").hide();
    $("#f3").hide();
    $("#f4").hide();
    $("#f5").hide();
    $("#f6").hide();
    $("#f7").hide();
    $("#f8").hide();
    $("#f9").hide();
    $("#f10").hide();
    $("#f11").hide();

        //get report list for favorites
    $.ajax({
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
            if (data[0].CurrentWAHtml.length >0 ) {
                $("#f1").show();
            }
            if (data[0].ExitSurveyHtml.length > 0) {
                $("#f2").show();
            }
            if (data[0].HistoricalWAHtml.length > 0) {
                $("#f3").show();
            }
            if (data[0].ManagerReportsHtml.length > 0) {
                $("#f4").show();
            }
            if (data[0].MD715Html.length > 0) {
                $("#f5").show();
            }
            if (data[0].PIIReportsHtml.length > 0) {
                $("#f6").show();
            }
            if (data[0].SF113ReportSuiteHtml.length > 0) {
                $("#f7").show();
            }
            if (data[0].SharedDatasetsHtml.length > 0) {
                $("#f8").show();
            }
            if (data[0].TLMSHtml.length > 0) {
                $("#f9").show();
            }
            if (data[0].UserUtilitiesHtml.length > 0) {
                $("#f10").show();
            }
            if (data[0].Sharelibrary2016Html.length > 0) {
                $("#f11").show();
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

//execute get
GetFevsMenuItemViewable();
GetLogo();
GetUser();
UpdateAds();
GetIsAdmin();
GetIsGatewayUser();
GetDashboardList();
GetReportsList();
//GetFavoritesList();

GetFavoritesDashboard();
GetFavoritesReport();

function showdashboards() {

    $("#dashboardpane").show();
    $("#reportspane").hide();
    $("#favoritespane").hide();
    $("#knowledgebasepane").hide();
    $("#supprtpane").hide();
    $("#authorizationspane").hide();
    $("#newtabitempane").hide();
    $("#searchpane").hide();
    HideAdsIfOpen();
}

function showreports() {

    $("#dashboardpane").hide();
    $("#reportspane").show();
    $("#favoritespane").hide();
    $("#knowledgebasepane").hide();
    $("#supprtpane").hide();
    $("#authorizationspane").hide();
    $("#searchpane").hide();
    $("#newtabitempane").hide();
    $("#dashboardsli").removeClass("usa-current active");
    document.getElementsByClassName('usa-grid-full flush bg-grey')[0].style.display = 'block';
    document.getElementsByClassName('usa-grid-full flush bg-white')[0].style.display = 'block';
    HideAdsIfOpen();
}

function showfavorites() {
    HideAdsIfOpen();
    $("#dashboardpane").hide();
    $("#reportspane").hide();
    $("#favoritespane").show();
    $("#knowledgebasepane").hide();
    $("#supprtpane").hide();
    $("#authorizationspane").hide();
    $("#searchpane").hide();
    $("#newtabitempane").hide();
    $("#dashboardsli").removeClass("usa-current active");
    document.getElementsByClassName('usa-grid-full flush bg-grey')[0].style.display = 'block';
    document.getElementsByClassName('usa-grid-full flush bg-white')[0].style.display = 'block';
    HideAdsIfOpen();
}

function showknowledgebase() {
    HideAdsIfOpen();
    $("#dashboardpane").hide();
    $("#reportspane").hide();
    $("#favoritespane").hide();
    $("#knowledgebasepane").show();
    $("#supprtpane").hide();
    $("#authorizationspane").hide();
    $("#searchpane").hide();
    $("#newtabitempane").hide();
    $("#dashboardsli").removeClass("usa-current active");
    document.getElementsByClassName('usa-grid-full flush bg-grey')[0].style.display = 'block';
    document.getElementsByClassName('usa-grid-full flush bg-white')[0].style.display = 'block';
    HideAdsIfOpen();
}

function showsupport() {
    HideAdsIfOpen();
    $("#dashboardpane").hide();
    $("#reportspane").hide();
    $("#favoritespane").hide();
    $("#knowledgebasepane").hide();
    $("#supprtpane").show();
    $("#authorizationspane").hide();
    $("#searchpane").hide();
    $("#newtabitempane").hide();
    $("#dashboardsli").removeClass("usa-current active");
    document.getElementsByClassName('usa-grid-full flush bg-grey')[0].style.display = 'block';
    document.getElementsByClassName('usa-grid-full flush bg-white')[0].style.display = 'block';
    HideAdsIfOpen();
}



function showauthorizations() {
    HideAdsIfOpen();
    $("#dashboardpane").hide();
    $("#reportspane").hide();
    $("#favoritespane").hide();
    $("#knowledgebasepane").hide();
    $("#supprtpane").hide();
    $("#authorizationspane").show();
    $("#searchpane").hide();
    $("#newtabitempane").hide();
    $("#dashboardsli").removeClass("usa-current active");
    document.getElementsByClassName('usa-grid-full flush bg-grey')[0].style.display = 'block';
    document.getElementsByClassName('usa-grid-full flush bg-white')[0].style.display = 'block';
    HideAdsIfOpen();
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
            //$("#r11z").show();
           // $("#r12z").show();
           // $("#r13z").show();
           // $("#r14z").show();

            //get dashboard list for favorites
            GetFavoritesDashboard();
            //$.ajax({
            //    //url: "/Favorites/GetDashboardListFavorites",
            //    //type: "Post",
            //    url: "/api/FavoritesDashboard",
            //    success: function (data) {

            //        //update html
            //        $("#piihtmlz").html(data[0].PIIHtml);
            //        $("#standardhtmlz").html(data[0].StandardHtml);
            //        $("#systemadminhtmlz").html(data[0].SystemAdminHtml);
            //        $("#userutilitieshtmlz").html(data[0].UserUtilitiesHtml);

            //        //hide tabs with no data
            //        if (data[0].PIIHtml.length >0 ) {
            //            $("#r11z").show();
            //        }
            //        if (data[0].StandardHtml.length >0) {
            //            $("#r12z").show();
            //        }
            //        if (data[0].SystemAdminHtml.length > 0 ) {
            //            $("#r13z").show();
            //        }
            //        if (data[0].UserUtilitiesHtml.length > 0) {
            //            $("#r14z").show();
            //        }

            //        //update manage html
            //        $("#ModalMangeDynamicFavoritesDashboards").html(data[0].AllManageHtml);
            //    }

            //});

            //show all tabs under dashbaords
           // $("#r11e").show();
           // $("#r12e").show();
            //$("#r13e").show();
           // $("#r14e").show();


            //get dashboard list
            GetDashboardList();
            //$.ajax({
            //    url: "/api/Dashboard",
            //    type: "Get",
            //    success: function (data) {

            //        //update html
            //        $("#piihtmle").html(data[0].PIIHtml);
            //        $("#standardhtmle").html(data[0].StandardHtml);
            //        $("#systemadminhtmle").html(data[0].SystemAdminHtml);
            //        $("#userutilitieshtmle").html(data[0].UserUtilitiesHtml);

            //        //hide tabs with no data
            //        if (data[0].PIIHtml.length > 0) {
            //            $("#r11e").show();
            //        }
            //        if (data[0].StandardHtml.length > 0) {
            //            $("#r12e").show();
            //        }
            //        if (data[0].SystemAdminHtml.length > 0) {
            //            $("#r13e").show();
            //        }
            //        if (data[0].UserUtilitiesHtml.length > 0) {
            //            $("#r14e").show();
            //        }

            //        //update manage modal html
            //        $("#ModalMangeDynamic").html(data[0].AllManageHtml);


            //    }

            //});



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
            //$("#r11z").show();
           // $("#r12z").show();
           // $("#r13z").show();
           // $("#r14z").show();

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
                    if (data[0].PIIHtml.length > 0) {
                        $("#r11z").show();
                    }
                    if (data[0].StandardHtml.length > 0) {
                        $("#r12z").show();
                    }
                    if (data[0].SystemAdminHtml.length > 0) {
                        $("#r13z").show();
                    }
                    if (data[0].UserUtilitiesHtml.length > 0) {
                        $("#r14z").show();
                    }

                    //update manage html
                    $("#ModalMangeDynamicFavoritesDashboards").html(data[0].AllManageHtml);
                }

            });

            //show all tabs under dashbaords
           // $("#r11e").show();
           // $("#r12e").show();
            //$("#r13e").show();
            //$("#r14e").show();


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
                    if (data[0].PIIHtml.length > 0) {
                        $("#r11e").show();
                    }
                    if (data[0].StandardHtml.length > 0) {
                        $("#r12e").show();
                    }
                    if (data[0].SystemAdminHtml.length > 0) {
                        $("#r13e").show();
                    }
                    if (data[0].UserUtilitiesHtml.length > 0) {
                        $("#r14e").show();
                    }

                    //update manage modal html
                    $("#ModalMangeDynamic").html(data[0].AllManageHtml);
                }
            });
        }
    });


}



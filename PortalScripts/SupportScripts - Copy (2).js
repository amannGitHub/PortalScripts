
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

var learnMoreLink;
function LearnMore() {
    document.location.href = learnMoreLink;

}



//function GetNews() {
//    //$("#c-indicators").append('<li id="litem1" data-target="#myCarousel" data-slide-to="0" class="active"></li>');
//    //$("#c-indicators").append('<li id="litem2" data-target="#myCarousel" data-slide-to="1"></li>');
//    //$("#c-indicators").append(' <li id="litem3" data-target="#myCarousel" data-slide-to="2"></li>');

//    var newsText = 'Data Insight places emphasis on the type of questions that leaders ask, and focuses on proactively providing answers. Data Driven reports and dashboards that build insight and confidence in making complex workforce decisions.';
//    //jQuery('<div/>', {
//    //    id: 'litem1description',
//    //    style: 'display:none;',
//    //    html: newsText
//    //}).appendTo("#myCarousel");
 
//    //$("#txttitle").text("TEST");
//    //$("#subtitle").html(newsText);
//    //$("#txttitle").text("TEST");
//   // alert("News")
//   // alert(newsText);
//    //<div id='litem1description' style='display:none;'>Data Insight places emphasis on the type of questions that leaders ask, and focuses on proactively providing answers. Data Driven reports and dashboards that build insight and confidence in making complex workforce decisions.</div>
//    //    <div id='litem1src' style='display:none;'>/ads/documents/ad_datadriveninsight.html</div>
//    //    <div style='display:none;' id='litem1title'> Data Driven Insight </div>

//    //    <div id='litem2description' style='display:none;'>
//    //        Reliable data is delivered through a secured portal – Data Insight for on-demand business intelligence access to Human Capital information.  Capabilities also include subscription-based and data-triggered delivery methods.
//    //                                    </div>
//    //    <div id='litem2src' style='display:none;'>/ads/documents/ad_reliabledataandsecureaccess.html</div>
//    //    <div style='display:none;' id='litem2title'> Reliable Data and Secure Access </div>

//    //    <div id='litem3description' style='display:none;'>
//    //        With active and engaged data stewards, Workforce Analytics system is supported by a Data Dictionary that describes over 830 of the most-used human capital data items – an Authoritative Source of Information!
//    //                                    </div>


//    //    <div id='litem3src' style='display:none;'> /ads/documents/ad_humancapitaldatagovernance.html</div>
//    //    <div style='display:none;' id='litem3title'> Human Capital Data Governance </div>

//    //jQuery('<div/>', {
//    //    class: "carousel-item active", 
//    //    html:
//    //        '<div style="color:white;" class="carousel-description">Data Driven Insight</div> '
//    //            + ' <a href="/ads/documents/ad_datadriveninsight.html" target="_blank">'
//    //                + '<div style="height:100%;width:auto">'
//    //                + '<img id="couralid0" class="d-block img-fluid" src="/ads/images/ad_datadriveninsight.png" alt="Data Driven Insight" style="border-radius:10px">'
//    //                + '</div>'
//    //            + '</a>'
//    //       +'</div>'
         

//    //}).appendTo("#innercarousel");
 

//    //$("#btnlearnmore").attr("cachelink", $("#litem1src").html());
//    //$("#txttitle").text($("#litem1title").html().replace("&amp;", ""));
//    //learnMoreLink = $("#litem1src").html();


//    //<div class="carousel-item active">
//      //  <div style="color:white;" class="carousel-description">Data Driven Insight</div>
//      //  <a href="/ads/documents/ad_datadriveninsight.html" target="_blank">

//      //      <div style="height:100%;width:auto">
//      //          <img id="couralid0" class="d-block img-fluid" src="/ads/images/ad_datadriveninsight.png" alt="Data Driven Insight" style="border-radius:10px">
//      //                                              </div>

//      //                                          </a>
//      //                                      </div>
//      //  <div class="carousel-item">
//      //      <div style="color:white;" class="carousel-description">Data Driven Insight</div>
//      //      <a href="/ads/documents/ad_reliabledataandsecureaccess.html" target="_blank">

//      //          <div style="height:100%;width:auto">
//      //              <img id="couralid0" class="d-block img-fluid" src="/ads/images/ad_reliabledataandsecureaccess.png" alt="Data Driven Insight" style="border-radius:10px">
//      //                                              </div>

//      //                                          </a>
//      //                                      </div>
//      //      <div class="carousel-item">
//      //          <div style="color:white;" class="carousel-description">Data Driven Insight</div>
//      //          <a href="/ads/documents/ad_humancapitaldatagovernance.html" target="_blank">

//      //              <div style="height:100%;width:auto">
//      //                  <img id="couralid0" class="d-block img-fluid" src="/ads/images/ad_humancapitaldatagovernance.png" alt="Data Driven Insight" style="border-radius:10px">
//      //                                              </div>

//      //                                          </a>
//      //                                      </div> 

//}



function GetNews() {
    $.ajax({
        url: "/api/news",
        dataType: 'json',
        type: "Get",
        success: function (data) {
            var len = data.length;
            if (len > 0) {
                $("txttitle").text(data[0].NewsTitle);
                $("#btnlearnmore").attr("cachelink", date[0].NewsDocumentPath);
                $("#subtitle").html(data[0].NewsBody);
            }


        }
    } );

}
function UpdateAds() {
    var position = $("#underlearnmore").offset();
    //$(".carousel-indicators").css({ top: position.top, left:position.left, position: 'absolute' });
    //$(".carousel-indicators").appendTo($("#underlearnmore"));

    setInterval(function () {

        $("#searchicon").show();

        if ($("#litem1").hasClass("active")) {

            //update description/learn more button
            $("#subtitle").html($("#litem1description").html());
            $("#btnlearnmore").attr("cachelink", $("#litem1src").html());
            $("#txttitle").text($("#litem1title").html().replace("&amp;", ""));
            learnMoreLink = $("#litem1src").html();
        }

        if ($("#litem2").hasClass("active")) {


            //update description/learn more button
            $("#subtitle").html($("#litem2description").html());
            $("#btnlearnmore").attr("cachelink", $("#litem2src").html());
            $("#txttitle").text($("#litem2title").html().replace("&amp;", ""));
            learnMoreLink = $("#litem2src").html();
        }

        if ($("#litem3").hasClass("active")) {


            //update description/learn more button
            $("#subtitle").html($("#litem3description").html());
            $("#btnlearnmore").attr("cachelink", $("#litem3src").html());
            $("#txttitle").text($("#litem3title").html().replace("&amp;", ""));
            learnMoreLink = $("#litem3src").html();
        }

        //position search icon inside textbox
        var position = $("#txtsearch").offset();
        $("#searchicon").css({ top: position.top - 64, left: position.left + 150, position: 'absolute' });
        //$(".carousel-indicators").appendTo($("#underlearnmore"));

    }, 1000)
}

function showAds() {
    $("#lblshowhide").html('Show News');

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

    $("#lblshowhide").html('Hide News' );


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
 

    $("#lblshowhide").html('Show News');

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

var isOrgLead = false;
var isAdmin = false;
function GetIsAdmin() {
    //determines is new menu item is visible or not
    $.ajax({
        url: "/api/isadmin",
        type: "Get",
        success: function (data) {
            if (data != true) {
            }
            else {
                isAdmin = true; 
            }


        }

    });//end isadmin ajax call

    $.ajax({
        url: "/api/isOrgLead",
        type: "Get",
        success: function (data) {
            if (data != true) {
            }
            else {
                isOrgLead = true;
            }
        }

    });//end isorglead ajax call

    if (isAdmin || isOrgLead) {
        $("#navigationauthselection").show();
    }
    else {
        $("#navigationauthselection").hide();
        $("#navigationauthselection").css("display", "none");
    }
 
}

var IsReportHomeFolderAccessGranted = false;
function UserHasReportHomeFolder() {

    $.ajax({
        url: '/api/UserHasReportHomeFolder',
        type: "Get", 
        success: function(data) {
            IsReportHomeFolderAccessGranted = data;
        }
    });
}

function CheckUserAccess() {
    //run user access checks in background
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

            //update  
            if (isAdmin) {
                $("#systemadminhtmlz").html(data[0].SystemAdminHtml);
            }
           
            //hide tabs with no data
            if (data[0].PIIHtml.length == 0) {
                $("#r11z").hide();
            }
            else {
                $("#piihtmz").html(data[0].PIIHtml);
                $("#r11z").show();
            }
            if (data[0].StandardHtml.length == 0) {
                $("#r12z").hide();
            }
            else {
                $("#standardhtmlz").html(data[0].StandardHtml);
                $("#r12z").show();
            }
            if (data[0].SystemAdminHtml.length == 0) {
                $("#r13z").hide();
            }
            else {
                $("#r13z").show();

            }
            if (data[0].UserUtilitiesHtml.length == 0) {
                $("#r14z").hide();
            }
            else {
                $("#r14z").show();
                $("#userutilitieshtmlz").html(data[0].UserUtilitiesHtml);
            }
            if (data[0].SharedLibraryDashboardHtml.length == 0) {
                $("#r15z").hide();
            }
            else {
                $("#sharedlibraryhtmlz").html(data[0].SharedLibraryDashboardHtml);
                $("#r15z").show();
            }

            //update manage html
            $("#ModalMangeDynamicFavoritesDashboards").html(data[0].AllManageHtml);
        }

    });
}

function GetFavoritesReport() {

   
   
    //$("#f3").show();
    //$("#f4").show();
    //$("#f5").show();
    //$("#f6").show();
    //$("#f7").show();
    //$("#f8").show();
    //$("#f9").show();
    //$("#f10").show();
    //$("#f11").show();

        //get report list for favorites
    $.ajax({
        url: "/api/FavoritesReport",
        type: "Get",
        success: function (data) {

            //update html for reports
            
            $("#datasourceshtmlf").html(data[0].DataSourcesHtml);
           
            $("#generaldashboardshtmlf").html(data[0].GeneralDashboardsHtml);
            
            $("#managerreportshtmlf").html(data[0].ManagerReportsHtml);
            $("#marketingdashboardshtmlf").html(data[0].MarketingDashboardsHtml);

            $("#modelshtmlf").html(data[0].ModelsReportsHtml);

          
            $("#shareddatasetshtmlf").html(data[0].SharedDatasetsHtml);
            $("#sharedlibraryhtmlf").html(data[0].SharedLibraryHtml);
            $("#systemadminhtmlf").html(data[0].SystemAdminHtml);
            
            $("#userutilitieshtmlf").html(data[0].UserUtilitiesHtml);
            
           

            //update manage html
            $("#ModalMangeDynamicFavoritesReports").html(data[0].AllManageHtml);

            //check if any search contents are empty then hide there tab
            if (data[0].CurrentWAHtml.length == 0) {
                $("#f1").hide();
            }
            else {
                $("#currentwahtmlf").html(data[0].CurrentWAHtml);
                $("#f1").show();
            }
            if (data[0].ExitSurveyHtml.length == 0) {
                $("#f2").hide();
            } else {
                $("#exitsurveyhtmlf").html(data[0].ExitSurveyHtml);
                $("#f2").show();
            }
            if (data[0].HistoricalWAHtml.length == 0) {
                $("#f3").hide();
            }
            else {
                $("#historicalwahtmlf").html(data[0].HistoricalWAHtml);
                $("#f3").show();
            }
            if (data[0].ManagerReportsHtml.length == 0) {
                $("#f4").hide();
            }
            else {
                $("#f4").show();
            }
            if (data[0].MD715Html.length == 0) {
                $("#f5").hide();
            }
            else {
                $("#md715htmlf").html(data[0].MD715Html);
                $("#f5").show();
            }
            if (data[0].PIIReportsHtml.length == 0) {
                $("#f6").hide();
            }
            else {
                $("#piireportshtmlf").html(data[0].PIIReportsHtml);
                $("#f6").show();
            }
            if (data[0].SF113ReportSuiteHtml.length == 0) {
                $("#f7").hide();
            }
            else {
                $("#sf113reportsuitehtmlf").html(data[0].SF113ReportSuiteHtml);
                $("#f7").show();
            }
            if (data[0].SharedDatasetsHtml.length == 0) {
                $("#f8").hide();
            }
            else {
                $("#f8").show();
            }
            if (data[0].TLMSHtml.length == 0) {
                $("#f9").hide();
            }
            else {
                $("#tlmshtmlf").html(data[0].TLMSHtml);
                $("#f9").show();
            }
            if (data[0].UserUtilitiesHtml.length == 0) {
                $("#f10").hide();
            }
            else {
                $("#userutilitieshtmlfsl2016").html(data[0].Sharelibrary2016Html);
                $("#f10").show();
            }
            if (data[0].Sharelibrary2016Html.length == 0) {
                $("#f11").hide();
            }
            else {
                $("#userutilitieshtmlfsl2012").html(data[0].Sharelibrary2012Html);
                $("#f11").show();
            }

        }

    });



}


function GetDashboardList() {

    //show all tabs under dashbaords
    //$("#r11e").show();
    //$("#r12e").show();
    //$("#r13e").show();
    //$("#r14e").show();


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
            } else {
                $("#r11e").show();
            }
            if (data[0].StandardHtml.length < 1) {
                $("#r12e").hide();
            }
            else {
                $("#r12e").show();
            }
            if (data[0].SystemAdminHtml.length < 1) {
                $("#r13e").hide();
            }
            else {
                $("#r13e").show();
            }
            if (data[0].UserUtilitiesHtml.length < 1) {
                $("#r14e").hide();
            }
            else {
                $("#r14e").show();
            }
            //update manage modal html
            $("#ModalMangeDynamic").html(data[0].AllManageHtml);


        }

    });
}

function GetReportsList() {
    //show all tabs under reports
    //$("#r1").show();
    //$("#r2").show();
    //$("#r3").show();
    //$("#r4").show();
    //$("#r5").show();
    //$("#r6").show();
    //$("#r7").show();
    //$("#r8").show();
    //$("#r9").show();

    //get report list
    $.ajax({
        url: "/Api/Report",
        type: "Get",
        success: function (data) {

            //update html
            
            $("#datasourceshtml").html(data[0].DataSourcesHtml);
            
            $("#generaldashboardshtml").html(data[0].GeneralDashboardsHtml);
           
            
            $("#marketingdashboardshtml").html(data[0].MarketingDashboardsHtml);

            $("#modelshtml").html(data[0].ModelsReportsHtml);

            
            $("#shareddatasetshtml").html(data[0].SharedDatasetsHtml);
            $("#sharedlibraryhtml").html(data[0].SharedLibraryHtml);
            $("#systemadminhtml").html(data[0].SystemAdminHtml);
           
            




            if (data[0].SharedLibraryHtml.length < 1)
                $("#cardsharedlibraryreports").hide();

            //update manage html
            $("#ModalMangeDynamicReports").html(data[0].AllManageHtml);

            //hide tabs with no data
            if (data[0].CurrentWAHtml.length < 1) {
                $("#r1").hide();
            }
            else {
                $("#currentwahtml").html(data[0].CurrentWAHtml);
                $("#r1").show();
            }
            if (data[0].ExitSurveyHtml.length < 1) {
                $("#r2").hide();
            }
            else {
                $("#exitsurveyhtml").html(data[0].ExitSurveyHtml);
                $("#r2").show();

            }
            if (data[0].HistoricalWAHtml.length < 1) {
                $("#r3").hide();
            }
            else {
                $("#historicalwahtml").html(data[0].HistoricalWAHtml);
                $("#r3").show();
            }
            if (data[0].ManagerReportsHtml.length < 1) {
                $("#r4").hide();
            }
            else {
                $("#managerreportshtml").html(data[0].ManagerReportsHtml);
                $("#r4").show();
            }
            if (data[0].MD715Html.length < 1) {
                $("#r5").hide();
            }
            else {
                $("#md715html").html(data[0].MD715Html);
                $("#r5").show();
            }
            if (data[0].PIIReportsHtml.length < 1) {
                $("#r6").hide();
            }
            else {
                $("#piireportshtml").html(data[0].PIIReportsHtml);
                $("#r6").show();
            }
            if (data[0].SF113ReportSuiteHtml.length < 1) {
                $("#r7").hide();
            }
            else {
                $("#sf113reportsuitehtml").html(data[0].SF113ReportSuiteHtml);
                $("#r7").show();
            }
            if (data[0].TLMSHtml.length < 1) {
                $("#r8").hide();
            }
            else {
                $("#tlmshtml").html(data[0].TLMSHtml);
                $("#r8").show();
            }
            if (data[0].UserUtilitiesHtml.length < 1) {
                $("#r9").hide();
            }
            else {
                $("#userutilitieshtml").html(data[0].UserUtilitiesHtml);
                $("#r9").show();
            }

        }
    });

}//function GetReportsList() {



function showdashboards() {
    GetIsGatewayUser();
    GetDashboardList();
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
    GetReportsList();
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
  //  GetFavoritesDashboard();
   // GetFavoritesReport();
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
 
        }

    });

    GetFavoritesDashboard();

    GetDashboardList();

}


 


function AddtoFavoritesDashboard(control) {
    $.ajax({
        url: "/api/ManageDashboardFavorites",
        type: "Get",
        data: { Id: $(control).prop("id"), isFavorite: true },
        success: function (data) {

            //update controls icon to remove from favofites
            $(control).removeClass('fa-heart-o');
            $(control).addClass('fa-heart');
            $(control).prop('title', 'Remove from My Favorites');
            control.outerHTML = control.outerHTML.replace("AddtoFavoritesDashboard(this);", "RemoveFromFavoritesDasboard(this);");

        }
    });

    GetFavoritesDashboard();
    GetDashboardList();
}



function RemoveFromFavoritesReport(control) {
    // document.location.href = "/Home/Main";

    $.ajax({
        url: "/api/ManageReportFavorites",
        type: "Get",
        data: { Id: $(control).prop("id"), isFavorite: false },
        success: function (data) {

            //update controls icon to add from favofites
            $(control).removeClass('fa-heart');
            $(control).addClass('fa-heart-o');
            $(control).prop('title', 'Add to My Favorites');
            control.outerHTML = control.outerHTML.replace("RemoveFromFavoritesReport(this);", "AddtoFavoritesReport(this);");


             
        }

    });
    
    GetFavoritesReport();
    GetReportsList();


}


function AddtoFavoritesReport(control) {
    // document.location.href = "/Home/Main";

    $.ajax({
        url: "/api/ManageReportFavorites",
        type: "Get",
        data: { Id: $(control).prop("id"), isFavorite: true },
        success: function (data) {

            //update controls icon to add from favofites
            $(control).removeClass('fa-heart');
            $(control).addClass('fa-heart-o');
            $(control).prop('title', 'Add to My Favorites');
            control.outerHTML = control.outerHTML.replace("RemoveFromFavoritesDasboard(this);", "AddtoFavoritesDashboard(this);");



        }

    });
   
    GetFavoritesReport();
    GetReportsList();

}




//execute get
GetFevsMenuItemViewable();
GetLogo();
GetUser();
UpdateAds();
GetIsAdmin();
GetIsGatewayUser();
UserHasReportHomeFolder();

GetDashboardList();
if (IsReportHomeFolderAccessGranted) {
    GetReportsList();
}

//GetFavoritesList();

GetFavoritesDashboard();
GetFavoritesReport();
CheckUserAccess();  //make sure user has access to folders!  Not part of login process.

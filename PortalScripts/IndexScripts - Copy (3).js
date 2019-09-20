function GetActiveNews() {
    //alert(newsData.length);

    for (i = 0; i < newsData.length; i++) {
        var itemId = "#clitem" + i;
        //alert(itemId);
        if ($(itemId).hasClass("active")) {
            console.log(itemId);
            learnMoreLink = newsData[i].NewsDocumentPath;
            $("#txttitle").html(newsData[i].NewsTitle);
            $("#subtitle").html(newsData[i].NewsBody);
            $("#btnlearnmore").attr(newsData[i].NewsBody);
        }
    }
}
function Logout() {
    document.location.href = "/account/logoff";
}
var newsData;
var learnMoreLink = "";

var isOrgLead = false;
var isAdmin = false;

var IsReportHomeFolderAccessGranted = false;

function GetUserData() {
    $.ajax({
        url: "/api/Logo",
        type: "Get",
        success: function (data) {

            //set src of image to path
            $("#imglogo").prop("src", data.toString());
        }

    });

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
    $.ajax({
        url: "/api/news",
        dataType: 'json',
        type: "Get",
        success: function (data) {
            var len = data.length;
            newsData = data;

            var carouselText = "";
            Olhtml = "";
            Olhtml += '\n' + '<li id="clitem0" data-target="#myCarousel" data-slide-to="0" class="active"></li>' + '\n';

            for (i = 0; i < len; i++) {
                classText = "";

                if (i == 0) {
                    classText = '<div class="item active">';

                }
                else {
                    classText = '<div class="item">';
                    Olhtml += ' <li id="clitem' + i + '" data-target="#myCarousel" data-slide-to="' + i + '"></li>' + '\n';

                }

                carouselText +=
                    classText
                    + '<div style="color:white;" class="carousel-description">' + data[i].NewsTitle + '</div>' + '\n'
                    + '<a href=' + data[i].NewsDocumentPath + ' target="_blank">' + '\n'
                    + '<div style="height:100%;width:auto">' + '\n'
                    + '<img id="couralid' + i + '"' + ' class="d-block img-fluid" src=' + data[i].NewsImagePath + ' style="border-radius:10px">' + '</div>' + '\n'

                    + '</a>' + '\n'
                    + '</div>' + '\n';
            }//end for
            //carouselText += --add back in if desired.
            //    '\n <a class="left carousel-control" href="#myCarousel" data-slide="prev"> \n'
            //    + '\n <span class="glyphicon glyphicon-chevron-left"   ></span >\n'
            //    + '\n <span class="sr-only" > Previous</span >\n'
            //    + '\n </a>\n'
            //    + '\n  <a class="right carousel-control"   href="#myCarousel" data-slide="next">\n'
            //    + '\n      <span class="glyphicon glyphicon-chevron-right"   ></span>\n'
            //    + '\n      <span class="sr-only">Next</span>\n'
            //    + '\n  </a> \n';
            $('#InnerCarousel').html('\n' + carouselText);
            $("#carouselIndicators").html(Olhtml);

            //$("#txttitle").html(data[0].NewsTitle);
            //$("#subtitle").html(data[0].NewsBody);
            //learnMoreLink = data[0].NewsDocumentPath;
            GetActiveNews();

        } //end data
    });//end AJAX /api/news

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


            if (isAdmin || isOrgLead) {
                $("#navigationauthselection").show();
            }
            else {
                $("#navigationauthselection").hide();
                $("#navigationauthselection").css("display", "none");
            }
        }

    });//end isorglead ajax call


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


    $.ajax({
        url: '/api/UserHasReportHomeFolder',
        type: "Get",
        success: function (data) {
            IsReportHomeFolderAccessGranted = data;
        }
    });
}

 
 

 


function LearnMore() {
    if (learnMoreLink == "" || learnMoreLink == null) {
        document.location.href = "/home";
    } else {

        document.location.href = learnMoreLink;
    }

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

    $("#lblshowhide").html('Hide News');


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


function RemoveFromFavoritesReport(control) {
    //update controls icon to add from favofites
    $(control).removeClass('fa-heart');
    $(control).addClass('fa-heart-o');
    $(control).prop('title', 'Add to Favorites');
    control.outerHTML = control.outerHTML.replace("RemoveFromFavoritesReport(this);", "AddToFavoritesReport(this);");
    
    $.ajax({
        url: "/api/ManageReportFavorites",
        type: "Get",
        data: { Id: $(control).prop("id"), isFavorite: false },
        success: function (data) {
        }

    });

 
}


function RemoveFromFavoritesDashboard(control) {
    //update controls icon to add from favofites
    $(control).removeClass('fa-heart');
    $(control).addClass('fa-heart-o');
    $(control).prop('title', 'Add to Favorites');
    control.outerHTML = control.outerHTML.replace("RemoveFromFavoritesDashboard(this);", "AddToFavoritesDashboard(this);");

    $.ajax({
        url: "/api/ManageDashboardFavorites",
        type: "Get",
        data: { Id: $(control).prop("id"), isFavorite: false },
        success: function (data) {
        }

    });


}
 
function AddToFavoritesDashboard(control) {
    $(control).removeClass('fa-heart-o');
    $(control).addClass('fa-heart');
    $(control).prop('title', 'Remove From My Favorites');
    control.outerHTML = control.outerHTML.replace("AddToFavoritesDashboard(this);", "RemoveFromFavoritesDashboard(this);");

    $.ajax({
        url: "/api/ManageDashboardFavorites",
        type: "Get",
        data: { Id: $(control).prop("id"), isFavorite: true },
        success: function (data) {
        }

    });

}

function AddToFavoritesReport(control) {
    $(control).removeClass('fa-heart-o');
    $(control).addClass('fa-heart');
    $(control).prop('title', 'Remove From My Favorites');
    control.outerHTML = control.outerHTML.replace("AddToFavoritesReport(this);","RemoveFromFavoritesReport(this);");

    $.ajax({
        url: "/api/ManageReportFavorites",
        type: "Get",
        data: { Id: $(control).prop("id"), isFavorite: true },
        success: function (data) {
        }

    });

}



function GetSearchResults() {
    var inputText = $("#SearchInputText").val();
    if (inputText == "" || inputText == " " || inputText.length<2) {
        $("#invalidSearchResult").show();
        $("#rSearchHeader").hide();
        $("#dSearchHeader").hide();
    }

 
    else {
        GetDashboardSearchList();
        GetReportSearchList();
        $("#invalidSearchResult").hide();
        $("#rSearchHeader").show();
        $("#dSearchHeader").show();
        $("#searchDashboardsAccordion").show();
    }

}
function makeItemCard(data) {
    var reportItemHtml =
        '<li class="list-group-item">'

        + '    <a href="' + data.ItemPath + '" target="_blank"><i class="fa fa-newspaper-o fa-1x text-info" aria-hidden="true"></i>&nbsp;' + data.ItemName + '</a>'
            + '    <a href="' + data.ItemPath + '" target="_blank" class="fa fa-1x text-success fa-external-link pull-right" data-toggle="tooltip" data-placement="top" title="Open in a new Window"></a>'
        + '    <i class="fa ' + data.favIcon + ' fa-1x text-danger pull-right" id="' + data.ItemId + '" onclick="' + data.WhatToDoWhenClicked + '" style="padding-right:5px;cursor:pointer;" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="' + data.FavText + '"></i>'
        + '    <i class="fa fa-cog fa-1x text-muted pull-right" style="padding-right:5px;cursor:pointer;" aria-hidden="true" data-toggle="modal" data-target="#' + data.manageModalId + '" title="Manage / Subscribe this Report"></i>'
        + '</li> \n'
    return reportItemHtml;
}


 



function getDashGatewayDiv() {
   return ' <div class="card" id="dashgateway">'
        + '\n     <div class="card-header" role="tab" id="NewReportButton">'
        + '\n         <button type="button" class="btn btn-link collapsed" data-target="#collapseDashGateway" data-toggle="collapse" area-controls="collapseReportGateway" aria-expanded="true">'
        + '\n             Create New Dashboard'
        + '\n                               </button>'
        + '\n      </div>'
        + '\n       <div id="collapseDashGateway" class="collapse" role="tabpanel" aria-labelledby="heading4">'
        + '\n          <div id="createnewdashboardshtmlf">'
        + '\n               <ul class="list-group list-group-flush">'
        + '\n                  <li class="list-group-item list-group-item-info">'
        + '\n                       Analytics Gateway'
        + '\n                                      </li>'
        + '\n                   <li class="list-group-item">'
        + '\n                       <a href="/home/AnalyticsGateway"><i class="fa fa-newspaper-o fa-1x text-info" aria-hidden="true"></i>&nbsp;Enter Analytics Gateway</a>'
        + '\n                      <p></p>'
        + '\n                   </li>'

        + '\n               </ul>'
        + '\n           </div>'
        + '\n       </div>'

        + '\n </div> '

}

 

function getCatNoSpaces(data) {

    var catNoSpaces = data.replace(' ', '');
    if (data == 'Shared Data Sets') {
        catNoSpaces = 'SharedDataSets'
    }
    if (data == 'SF-113 Report Suite') {
        catNoSpaces = 'SF113ReportSuite'
    }
    if (data == 'SystemAdmin') {
        catNoSpaces = 'SystemAdmin'
    }
    catNoSpaces = catNoSpaces.replace('-', '');
    catNoSpaces = catNoSpaces.replace(/\s/g, '');
    return catNoSpaces;
}
$.extend({
    distinct: function (anArray) {
        var result = [];
        $.each(anArray, function (i, v) {
            if ($.inArray(v, result) == -1) result.push(v);
        });
        return result;
    }
});

function makeReportFavsAccordion(cat) {
    catNoSpaces = getCatNoSpaces(cat);
    return ' <div class="card" id="' + catNoSpaces + "card" + '">'
        + '\n <div class="card-header" role="tab" id="' + catNoSpaces + "Header" + '"' + '>'
        + '\n   <button type="button" class="btn btn-link collapsed" data-target="#collapseFavReport' + catNoSpaces + '"' + 'data-toggle="collapse" area-controls="' + "collapse" + catNoSpaces + '"' + 'aria-expanded="true">'
        + cat
        + '\n </button>'
        + '\n </div >'
        + '\n       <div id="collapseFavReport' + catNoSpaces + '"' + ' class="collapse" role="tabpanel" aria-labelledby="heading4">'
        + '\n          <div id="' + catNoSpaces + 'shtmlf">'
        + '\n               <ul id="' + catNoSpaces + 'FavUl' + '" class="list-group list-group-flush">'
        + '\n                  <li class="list-group-item list-group-item-info">'
        + '\n                       ' + cat
        + '\n                 </li>'
        + '\n               </ul>'
        + '\n           </div>'
        + '\n       </div>'
        + '</div >';
}

function makeDashboardFavsAccordion(cat) {
    catNoSpaces = getCatNoSpaces(cat);
    return ' <div class="card" id="' + catNoSpaces + "card" + '">'
        + '\n <div class="card-header" role="tab" id="' + catNoSpaces + "Header" + '"' + '>'
        + '\n   <button type="button" class="btn btn-link collapsed" data-target="#collapseFavDashs' + catNoSpaces + '"' + 'data-toggle="collapse" area-controls="' + "collapse" + catNoSpaces + '"' + 'aria-expanded="true">'
        + cat
        + '\n </button>'
        + '\n </div >'
        + '\n       <div id="collapseFavDashs' + catNoSpaces + '"' + ' class="collapse" role="tabpanel" aria-labelledby="heading4">'
        + '\n          <div id="' + catNoSpaces + 'shtmlf">'
        + '\n               <ul id="' + catNoSpaces + 'DashFavUl' + '" class="list-group list-group-flush">'
        + '\n                  <li class="list-group-item list-group-item-info">'
        + '\n                       ' + cat
        + '\n                 </li>'
        + '\n               </ul>'
        + '\n           </div>'
        + '\n       </div>'
        + '</div >';
}

function makeReportSearchAccordion(cat) {
    catNoSpaces = getCatNoSpaces(cat);
    return ' <div class="card" id="' + catNoSpaces + "card" + '">'
        + '\n <div class="card-header" role="tab" id="' + catNoSpaces + "Header" + '"' + '>'
        + '\n   <button type="button" class="btn btn-link collapsed" data-target="#collapseSearchReports' + catNoSpaces + '"' + 'data-toggle="collapse" area-controls="' + "collapse" + catNoSpaces + '"' + 'aria-expanded="true">'
        + cat
        + '\n </button>'
        + '\n </div >'
        + '\n       <div id="collapseSearchReports' + catNoSpaces + '"' + ' class="collapse" role="tabpanel" aria-labelledby="heading4">'
        + '\n          <div id="' + catNoSpaces + 'shtmlf">'
        + '\n               <ul id="' + catNoSpaces + 'ReportSearchUl' + '" class="list-group list-group-flush">'
        + '\n                  <li class="list-group-item list-group-item-info">'
        + '\n                       ' + cat
        + '\n                 </li>'
        + '\n               </ul>'
        + '\n           </div>'
        + '\n       </div>'
        + '</div >';
}

function makeDashboardSearchAccordion(cat) {
    catNoSpaces = getCatNoSpaces(cat);
    return ' <div class="card" id="' + catNoSpaces + "card" + '">'
        + '\n <div class="card-header" role="tab" id="' + catNoSpaces + "Header" + '"' + '>'
        + '\n   <button type="button" class="btn btn-link collapsed" data-target="#collapseSearchDashs' + catNoSpaces + '"' + 'data-toggle="collapse" area-controls="' + "collapse" + catNoSpaces + '"' + 'aria-expanded="true">'
        + cat
        + '\n </button>'
        + '\n </div >'
        + '\n       <div id="collapseSearchDashs' + catNoSpaces + '"' + ' class="collapse" role="tabpanel" aria-labelledby="heading4">'
        + '\n          <div id="' + catNoSpaces + 'shtmlf">'
        + '\n               <ul id="' + catNoSpaces + 'DashSearchUl' + '" class="list-group list-group-flush">'
        + '\n                  <li class="list-group-item list-group-item-info">'
        + '\n                       ' + cat
        + '\n                 </li>'
        + '\n               </ul>'
        + '\n           </div>'
        + '\n       </div>'
        + '</div >';
}
 
function makeDashboardAccordion(cat) {
    catNoSpaces = getCatNoSpaces(cat);
    return ' <div class="card" id="' + catNoSpaces + "card" + '">'
        + '\n <div class="card-header" role="tab" id="' + catNoSpaces + "Header" + '"' + '>'
        //+ '\n <h5 class="mb-0"> '
        + '\n   <button type="button" class="accordionButton" data-target="#collapse' + catNoSpaces + '"' + 'data-toggle="collapse" area-controls="' + "collapse" + catNoSpaces + '"' + 'aria-expanded="true">'
        + cat
        + '\n </button>'
        //+ '\n </h5> '
        + '\n </div >'
        + '\n       <div id="collapse' + catNoSpaces + '"' + ' class="collapse" role="tabpanel" aria-labelledby="heading4">'
        + '\n          <div id="' + catNoSpaces + 'shtmlf">'
        + '\n               <ul id="' + catNoSpaces + 'Ul' + '" class="list-group list-group-flush">'
        + '\n                  <li class="list-group-item list-group-item-info">'
        + '\n                       ' + cat
        + '\n                 </li>'
        + '\n <li class="list-group-item">'

        + ' \n   <a href="' + '/dashboards/browse/' + cat + '" target="_blank"><i class="fa fa-newspaper-o fa-1x text-info"  ></i>&nbsp;' + 'Browse ' + cat + '</a>'

        + '\n </li> \n'
        + '\n               </ul>'
        + '\n           </div>'
        + '\n       </div>'
        + '</div >';
}

function makeReportAccordion(cat) {
    catNoSpaces = getCatNoSpaces(cat);
    return ' <div class="card" id="' + catNoSpaces + "card" + '">'
        + '\n <div class="card-header" role="tab" id="' + catNoSpaces + "Header" + '"' + '>'
        + '\n   <button type="button" class="btn btn-link collapsed" data-target="#collapse' + catNoSpaces + '"' + 'data-toggle="collapse" area-controls="' + "collapse" + catNoSpaces + '"' + 'aria-expanded="true">'
        + cat
        + '\n </button>'
        + '\n </div >'
        + '\n       <div id="collapse' + catNoSpaces + '"' + ' class="collapse" role="tabpanel" aria-labelledby="heading4">'
        + '\n          <div id="' + catNoSpaces + 'shtmlf">'
        + '\n               <ul id="' + catNoSpaces + 'Ul' + '" class="list-group list-group-flush">'
        + '\n                  <li class="list-group-item list-group-item-info">'
        + '\n                       ' + cat
        + '\n                 </li>'
        + '\n <li class="list-group-item">'

        + ' \n   <a href="' + '/reports/browse/' + cat + '" target="_blank"><i class="fa fa-newspaper-o fa-1x text-info"  ></i>&nbsp;' + 'Browse ' + cat + '</a>'

        + '\n </li> \n'
        + '\n               </ul>'
        + '\n           </div>'
        + '\n       </div>'
        + '</div >';
}

function makeDashboardModal(data) {
    var modalHtml =
        '\n <div class="modal fade" id="' + data.manageModalId + '" tabindex="-1" role="dialog" aria-labelledby="' + data.ModalLabel + '"  >' +
        '\n     <div class="modal-dialog" role="document">' +
        '\n       <div class="modal-content">' +
        '\n            <div class="modal-header">' +
        '\n               <button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '\n                   <span aria-hidden="true">&times;</span>' +
        '\n               </button>' +
        '\n               <br />' +
        '\n               <br />' +
        '\n               <h5 class="modal-title" id="' + data.ModalLabel + '">Options & Info</h5>' +
        '\n              <div class="modal-title">' + data.ItemDescription + '</div>' +
        '\n         </div>' +
        '\n          <div class="modal-body">' +
        '\n               <div class="list-group">' +
        '\n                   <a id="' + data.HumanCapitalLastDataRefresh + '" href="#" class="list-group-item list-group-item-action list-group-item-primary"></a> ' +
        '\n                <a href="' + data.ItemManagelink + '" class="list-group-item list-group-item-action list-group-item-success" target="_blank">Manage / Subscribe this Dashboard</a>' +
        '\n                <br />' +
        '\n                <a id="' + data.HumanCapitalCardLastModifiedBy + '" href="#" class="list-group-item list-group-item-action list-group-item-info" style="cursor:default;">Last Modified By: ' + data.LastModifiedBy + '</a>' +
        '\n                <br />' +
        '\n                <a id="' + data.HumanCapitalCardLastViewed + '" href="#" class="list-group-item list-group-item-action list-group-item-warning" style="cursor:default;">You last viewed this dashboard on ' + data.ItemLastViewed + '</a>' +
        '\n                <br />' +

        '\n            </div>' +
        '\n        </div>' +
        '\n        <div class="modal-footer">' +
        '\n            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
        '\n       </div>' +
        '\n   </div>' +
        '\n </div>' +
        '\n</div>';
    return modalHtml;

}
function GetDashboardList() {
    var ReportGatewayDiv = getDashGatewayDiv();
    $.ajax({
        url: "/api/Dashboard",
        type: "Get",
        success: function (data) {
            arr1 = $.map(data, function (p) { return p.ItemParentFolder });
            myCats = $.distinct(arr1);
            var ReportCatsHtml = "";
            for (i = 0; i < myCats.length; i++) {
                var catNoSpaces = getCatNoSpaces(myCats[i]);
                var catsUrlAdd = myCats[i].replace(' ', '%20');

                ReportCatsHtml += makeDashboardAccordion(myCats[i]);


            }//end forloop
            $("#accordionDashboards").html(ReportGatewayDiv + ReportCatsHtml);
            var modalHtml = "";
            for (var i = 0; i < data.length; i++) {
 
                var reportItemHtml = makeItemCard(data[i]);

                var ulName = '#' + data[i].catNoSpaces + 'Ul';
 
                $(ulName).html($(ulName).html() + reportItemHtml);

                modalHtml += makeDashboardModal(data[i]);
            }
            $("#ModalMangeDynamicDashboards").html($("#ModalMangeDynamicDashboards").html() + modalHtml);
        }//end success

    });//end ajax


}
 

function MakeReportModal(catData) {
    var modalHtml =

        '\n <div class="modal fade" id="' + catData.manageModalId + '" tabindex="-1" role="dialog" aria-labelledby="' + catData.ModalLabel + '"  >' +
        '\n     <div class="modal-dialog" role="document">' +
        '\n       <div class="modal-content">' +
        '\n            <div class="modal-header">' +
        '\n               <button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '\n                   <span aria-hidden="true">&times;</span>' +
        '\n               </button>' +
        '\n               <br />' +
        '\n               <br />' +
        '\n               <h5 class="modal-title" id="' + catData.ModalLabel + '">Options & Info</h5>' +
        '\n              <div class="modal-title">' + catData.ItemDescription + '</div>' +
        '\n         </div>' +
        '\n          <div class="modal-body">' +
        '\n               <div class="list-group">' +
        '\n                   <a id="' + catData.HumanCapitalLastDataRefresh + '" href="#" class="list-group-item list-group-item-action list-group-item-primary"></a> ' +
        '\n                <a href="' + catData.ItemManagelink + '" class="list-group-item list-group-item-action list-group-item-success" target="_blank">Manage / Subscribe this Report</a>' +
        '\n                <br />' +
        '\n                <a href="/reports/manage/subscriptions/browse" class="list-group-item list-group-item-action list-group-item-success" style="background-color:lightsalmon !important;" target="_blank">View All My Subscriptions</a>' +
        '\n                <br />' +
        '\n                <a id="' + catData.HumanCapitalCardLastModifiedBy + '" href="#" class="list-group-item list-group-item-action list-group-item-info" style="cursor:default;">Last Modified By: ' + catData.LastModifiedBy + '</a>' +
        '\n                <br />' +
        '\n                <a id="' + catData.HumanCapitalCardLastViewed + '" href="#" class="list-group-item list-group-item-action list-group-item-warning" style="cursor:default;">You last viewed this report on' + catData.ItemLastViewed + '</a>' +
        '\n                <br />' +
        '\n                <a href="#" class="list-group-item list-group-item-action list-group-item-danger" style="cursor:default;">' +
        '\n' + catData.DeliveryStatus +
        '\n                  </a>' +
        '\n            </div>' +
        '\n        </div>' +
        '\n        <div class="modal-footer">' +
        '\n            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
        '\n       </div>' +
        '\n   </div>' +
        '\n </div>' +
        '\n</div>';

    return modalHtml;
}
function catNoSpaces(catWithSpaces) {
    var catNoSpaces = catWithSpaces.replace(' ', '');
    if (catWithSpaces == 'Shared Data Sets') {
        catNoSpaces = 'SharedDataSets'
    }
    if (catWithSpaces == 'SF-113 Report Suite') {
        catNoSpaces = 'SF113ReportSuite'
    }
    catNoSpaces = catNoSpaces.replace('-', '');
    return catNoSpaces;
}

function getReportGatewayDiv() {
    var ReportGatewayDiv =
        ' <div class="card" id="ReportGateway1">'
        + '\n     <div class="card-header" role="tab" id="NewReportButton">'
        + '\n         <button type="button" class="btn btn-link collapsed" data-target="#collapseReportGateway" data-toggle="collapse" area-controls="collapseReportGateway" aria-expanded="true">'
        + '\n             Create New Report'
        + '\n                               </button>'
        + '\n      </div>'
        + '\n       <div id="collapseReportGateway" class="collapse" role="tabpanel" aria-labelledby="heading4">'
        + '\n          <div id="createnewdashboardshtmlf">'
        + '\n               <ul class="list-group list-group-flush">'
        + '\n                  <li class="list-group-item list-group-item-info">'
        + '\n                       Analytics Gateway'
        + '\n                                      </li>'
        + '\n                   <li class="list-group-item">'
        + '\n                       <a href="/home/AnalyticsGateway"><i class="fa fa-newspaper-o fa-1x text-info" aria-hidden="true"></i>&nbsp;Enter Analytics Gateway</a>'
        + '\n                      <p></p>'
        + '\n                   </li>'

        + '\n               </ul>'
        + '\n           </div>'
        + '\n       </div>'

        + '\n </div> '
    return ReportGatewayDiv;
}

function GetReportsList() {
 
   ReportGatewayDiv = getReportGatewayDiv();
    $.ajax({
        url: "/api/Report",
        type: "Get",
        success: function (data) {
            arr1 = $.map(data, function (p) { return p.ItemParentFolder });
            myCats = $.distinct(arr1);
            myCats.push("Shared Library");
            myCats.sort();
            var ReportCatsHtml = "";
            for (i = 0; i < myCats.length; i++) {
                var catNoSpaces = getCatNoSpaces(myCats[i]);
                var catsUrlAdd = myCats[i].replace(' ', '%20');

                ReportCatsHtml += makeReportAccordion(myCats[i]);


            }//end forloop
            $("#accordionReports").html(ReportGatewayDiv + ReportCatsHtml);
            var modalHtml = "";
            for (var i = 0; i < data.length; i++) {

                var reportItemHtml = makeItemCard(data[i]);

                var ulName = '#' + data[i].catNoSpaces + 'Ul';

                $(ulName).html($(ulName).html() + reportItemHtml);

                modalHtml += MakeReportModal(data[i]);
            }
            $("#ModalMangeDynamicReports").html($("#ModalMangeDynamicReports").html() + modalHtml);
        }//end success

    });//end ajax

}

function GetReportFavoritesList() {
 
    $.ajax({
        url: "/api/FavoritesReport",
        type: "Get",
        success: function (data) {
            arr1 = $.map(data, function (p) { return p.ItemParentFolder });
            myCats = $.distinct(arr1);
            var ReportCatsHtml = "";
            for (i = 0; i < myCats.length; i++) {
                var catNoSpaces = getCatNoSpaces(myCats[i]);
                var catsUrlAdd = myCats[i].replace(' ', '%20');

                ReportCatsHtml += makeReportFavsAccordion(myCats[i]);


            }//end forloop
            $("#favReportsAccordion").html(ReportCatsHtml);
            var modalHtml = "";
            for (var i = 0; i < data.length; i++) {

                var reportItemHtml = makeItemCard(data[i]);

                var ulName = '#' + data[i].catNoSpaces + 'FavUl';

                $(ulName).html($(ulName).html() + reportItemHtml);

                modalHtml += MakeReportModal(data[i]);
            }
            $("#ModalMangeDynamicFavoritesReports").html($("#ModalMangeDynamicFavoritesReports").html() + modalHtml);
        }//end success

    });//end ajax

}
 
function GetDashboardFavoritesList() {

    $.ajax({
        url: "/api/FavoritesDashboard",
        type: "Get",
        success: function (data) {
            arr1 = $.map(data, function (p) { return p.ItemParentFolder });
            myCats = $.distinct(arr1);
            var ReportCatsHtml = "";
            for (i = 0; i < myCats.length; i++) {
                var catNoSpaces = getCatNoSpaces(myCats[i]);
                var catsUrlAdd = myCats[i].replace(' ', '%20');

                ReportCatsHtml += makeDashboardFavsAccordion(myCats[i]);


            }//end forloop
            $("#favDashboardsAccordion").html(ReportCatsHtml);
            var modalHtml = "";
            for (var i = 0; i < data.length; i++) {

                var reportItemHtml = makeItemCard(data[i]);

                var ulName = '#' + data[i].catNoSpaces + 'DashFavUl';

                $(ulName).html($(ulName).html() + reportItemHtml);

                modalHtml += makeDashboardModal(data[i]);
            }
            $("#ModalMangeDynamicFavoritesDashboards").html($("#ModalMangeDynamicFavoritesDashboards").html() + modalHtml);
        }//end success

    });//end ajax
 
}


function GetReportSearchList() {
    $.ajax({
        url: "/api/ReportSearch",
        type: "Get",
        data: { SearchText: $("#SearchInputText").val() },
        success: function (data) {
            arr1 = $.map(data, function (p) { return p.ItemParentFolder });
            myCats = $.distinct(arr1);
            var ReportCatsHtml = "";
            for (i = 0; i < myCats.length; i++) {
                var catNoSpaces = getCatNoSpaces(myCats[i]);
                var catsUrlAdd = myCats[i].replace(' ', '%20');

                ReportCatsHtml += makeReportSearchAccordion(myCats[i]);

            }//end forloop
            $("#searchReportsAccordion").html(ReportCatsHtml);
            var modalHtml = "";
            for (var i = 0; i < data.length; i++) {

                var reportItemHtml = makeItemCard(data[i]);

                var ulName = '#' + data[i].catNoSpaces + 'ReportSearchUl';

                $(ulName).html($(ulName).html() + reportItemHtml);

                modalHtml += MakeReportModal(data[i]);
            }
            $("#ModalMangeDynamicReportsSearch").html($("#ModalMangeDynamicReportsSearch").html() + modalHtml);
        }//end success
        

    });
   
}

function GetDashboardSearchList() {
    $.ajax({
        url: "/api/DashboardSearch",
        type: "Get",
        data: { SearchText: $("#SearchInputText").val() },
        success: function (data) {
            arr1 = $.map(data, function (p) { return p.ItemParentFolder });
            myCats = $.distinct(arr1);
            var ReportCatsHtml = "";
            for (i = 0; i < myCats.length; i++) {
                var catNoSpaces = getCatNoSpaces(myCats[i]);
                var catsUrlAdd = myCats[i].replace(' ', '%20');

                ReportCatsHtml += makeDashboardSearchAccordion(myCats[i]);

            }//end forloop
            $("#searchDashboardsAccordion").html(ReportCatsHtml);
            var modalHtml = "";
            for (var i = 0; i < data.length; i++) {

                var reportItemHtml = makeItemCard(data[i]);

                var ulName = '#' + data[i].catNoSpaces + 'DashSearchUl';

                $(ulName).html($(ulName).html() + reportItemHtml);

                modalHtml += MakeDashboardModal(data[i]);
            }
            $("#ModalMangeDynamicSearchDashboards").html($("#ModalMangeDynamicSearchDashboards").html() + modalHtml);
        }//end success


    });

}


function showdashboards() {
    GetDashboardList();
    GetIsGatewayUser();
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
    
    $("#loadingContentPane").show();
   // GetReportsList();
 
    $("#loadingContentPane").hide();
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
    GetDashboardFavoritesList();
    GetReportFavoritesList();
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

function Search() {
    HideAdsIfOpen();
    $("#dashboardpane").hide();
    $("#reportspane").hide();
    $("#favoritespane").hide();
    $("#knowledgebasepane").hide();
    $("#supprtpane").hide();
    $("#authorizationspane").hide();
    GetSearchResults();
    $("#searchpane").show();
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



 

///Call startup scripts here
//GetLogo();
 
GetUserData();
GetDashboardList();
$("#dashboardpane").show();
GetReportsList();
//GetDashboardList();
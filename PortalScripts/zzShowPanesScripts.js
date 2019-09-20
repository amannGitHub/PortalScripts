

function showdashboards() {
    //GetIsGatewayUser();

    $("#dashpane").show();
    $("#reportspane").hide();
    $("#favoritespane").hide();
    $("#knowledgebasepane").hide();
    $("#supprtpane").hide();
    $("#authorizationspane").hide();
    $("#newtabitempane").hide();
    $("#searchpane").hide();
    document.getElementsByClassName('usa-grid-full flush bg-grey')[0].style.display = 'block';
    document.getElementsByClassName('usa-grid-full flush bg-white')[0].style.display = 'block';
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
}

function showfavorites() {

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
}

function showknowledgebase() {

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
}

function showsupport() {
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
}



function showauthorizations() {
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
}

function shownewtabitem() {
    $("#dashboardpane").hide();
    $("#reportspane").hide();
    $("#favoritespane").hide();
    $("#knowledgebasepane").hide();
    $("#supprtpane").hide();
    $("#newtabitempane").show();
    $("#authorizationspane").hide();
    $("#searchpane").hide();
    $("#dashboardsli").removeClass("usa-current active");
    document.getElementsByClassName('usa-grid-full flush bg-grey')[0].style.display = 'none';
    document.getElementsByClassName('usa-grid-full flush bg-white')[0].style.display = 'none';
}

function CheckUserFolderAccess() {
    $.ajax({
        url: "/api/DataUserAccessChecks", 
        type: "Get", 
        success: function (data) {
            
        }
    });
}
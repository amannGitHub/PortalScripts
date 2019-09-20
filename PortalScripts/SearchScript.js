function Search() {
    HideAdsIfOpen();
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

}
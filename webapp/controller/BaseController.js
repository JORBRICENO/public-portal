sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent",
    "sap/ui/core/ValueState"
],function(Controller, History, UIComponent, ValueState){

    "use strict";

    return Controller.extend("portal.controller.BaseController",{

        getRouter: function () {
            return UIComponent.getRouterFor(this);
        },

        getModel: function (sName) {
            return this.getView().getModel(sName);
        },

        setModel: function (oModel, sName) {
            return this.getView().setModel(oModel, sName);
        },

        getResourceBundle: function () {
            return this.getOwnerComponent().getModel("i18n").getResourceBundle();
        },

        onNavLaunchpad: function () {
            this.getRouter().navTo("launchpad");
        },

        onNavBack: function () {
            var oHistory, sPreviousHash;
            
            oHistory = History.getInstance();
            sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash === undefined) {
                window.history.go(-1);
            } else {
                this.getRouter().navTo("launchpad",{},true);
            }
        },

        attachValidation: function (oView) {
            oView.attachValidationSuccess(function(oEvent){
                oEvent.getParameter("element").setValueState(ValueState.None);
            });
            oView.attachValidationError(function(oEvent){
                oEvent.getParameter("element").setValueState(ValueState.Error);
            });
        }

    });
});
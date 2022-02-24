sap.ui.define([
	"portal/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("portal.controller.sharedblocks.Portal", {

        onInit: function () {
            
        },

		onNavVacancies: function () {
			this.getRouter().navTo("portalMaster");
		}
	});
});
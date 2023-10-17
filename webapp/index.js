sap.ui.define([   //module define garcha
    'sap/ui/core/mvc/XMLView',       //yesle chai Text wala module use garyo
], function(XMLView) {
    'use strict';           //use strict bhaneko ECMAScript le enforce gareko rule for error handling re
    // new Text({
    //     text: "Hello UI5!"      //new object text banayo 
    // }).placeAt("content");      //yeslai HTML file ko id="content" ja cha tya place garyo

    XMLView.create({
        viewName:"sap.ui.demo.walkthrough.view.App"
    }).then(function(oView){
        oView.placeAt("content")
    })
});
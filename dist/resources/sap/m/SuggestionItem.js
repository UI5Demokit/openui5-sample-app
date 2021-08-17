/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Item","sap/ui/core/IconPool"],function(e,t,i){"use strict";var s=t.extend("sap.m.SuggestionItem",{metadata:{library:"sap.m",properties:{icon:{type:"string",group:"Appearance",defaultValue:""},enabled:{type:"boolean",group:"Misc",defaultValue:true,visibility:"hidden"},description:{type:"string",group:"Data",defaultValue:""}}}});i.insertFontFaceStyle();function n(e,t,i){var s;if(t){s=t.toUpperCase().indexOf(i.toUpperCase());if(s>-1){e.text(t.slice(0,s));e.openStart("b").openEnd();e.text(t.slice(s,s+i.length));e.close("b");t=t.substring(s+i.length)}e.text(t)}}s.prototype.render=function(e,t,i,s){var a=t.getText(),o=t.getIcon(),r="",p=t.getDescription(),c=t.getParent(),l=c&&c.getSuggestionItems&&c.getSuggestionItems()||[],u=l.indexOf(t),i=i||"";e.openStart("li",t).class("sapMSuLI").class("sapMSelectListItem").class("sapMSelectListItemBase").class("sapMSelectListItemBaseHoverable");e.accessibilityState({role:"option",posinset:u+1,setsize:l.length,selected:s});if(s){e.class("sapMSelectListItemBaseSelected");if(c){c.$("I").attr("aria-activedescendant",t.getId())}}e.openEnd();if(o){e.icon(o,"sapMSuggestionItemIcon")}if(a){n(e,a,i);r=" "}if(p){e.text(r);e.openStart("i").openEnd();n(e,p,i);e.close("i")}e.close("li")};s.prototype.getSuggestionText=function(){return this.getText()};s.prototype.invalidate=function(){return undefined};return s});
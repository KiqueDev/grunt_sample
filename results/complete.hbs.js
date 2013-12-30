this["JST"] = this["JST"] || {};

this["JST"]["src/templates/other.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<center>\r\n	<div class=\"sample\">\r\n\r\n	</div>\r\n</center>";
  });

this["JST"]["src/templates/sample.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<center>\r\n	<span class=\"resultTitle\"><b></b></span>\r\n	<br>\r\n	<span class=\"resultSpecialist\"><i>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.results)),stack1 == null || stack1 === false ? stack1 : stack1.lib_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</i></span>\r\n\r\n	<div class=\"sample\">\r\n\r\n	</div>\r\n</center>";
  return buffer;
  });
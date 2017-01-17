!function(b){var a=function(d,c){this.options=b.extend({},b.fn.combobox.defaults,c);this.$source=b(d);this.$container=this.setup();this.$element=this.$container.find("input[type=text]");this.$target=this.$container.find("input[type=hidden]");this.$button=this.$container.find(".dropdown-toggle");this.$menu=b(this.options.menu).appendTo("body");this.template=this.options.template||this.template;this.matcher=this.options.matcher||this.matcher;this.sorter=this.options.sorter||this.sorter;this.highlighter=this.options.highlighter||this.highlighter;this.shown=false;this.selected=false;this.refresh();this.transferAttributes();this.listen()};a.prototype={constructor:a,setup:function(){var c=b(this.template());this.$source.before(c);this.$source.hide();return c},disable:function(){this.$element.prop("disabled",true);this.$button.attr("disabled",true);this.disabled=true;this.$container.addClass("combobox-disabled")},enable:function(){this.$element.prop("disabled",false);this.$button.attr("disabled",false);this.disabled=false;this.$container.removeClass("combobox-disabled")},parse:function(){var e=this,g={},f=[],d=false,c="";this.$source.find("option").each(function(){var h=b(this);if(h.val()===""){e.options.placeholder=h.text();return}g[h.text()]=h.val();f.push(h.text());if(h.prop("selected")){d=h.text();c=h.val()}});this.map=g;if(d){this.$element.val(d);this.$target.val(c);this.$container.addClass("combobox-selected");this.selected=true}return f},transferAttributes:function(){this.options.placeholder=this.$source.attr("data-placeholder")||this.options.placeholder;this.$element.attr("placeholder",this.options.placeholder);this.$target.prop("name",this.$source.prop("name"));this.$target.val(this.$source.val());this.$source.removeAttr("name");this.$element.attr("required",this.$source.attr("required"));this.$element.attr("rel",this.$source.attr("rel"));this.$element.attr("title",this.$source.attr("title"));this.$element.attr("class",this.$source.attr("class"));this.$element.attr("tabindex",this.$source.attr("tabindex"));this.$source.removeAttr("tabindex");if(this.$source.attr("disabled")!==undefined){this.disable()}},select:function(){var c=this.$menu.find(".active").attr("data-value");this.$element.val(this.updater(c)).trigger("change");this.$target.val(this.map[c]).trigger("change");this.$source.val(this.map[c]).trigger("change");this.$container.addClass("combobox-selected");this.selected=true;return this.hide()},updater:function(c){return c},show:function(){var c=b.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});this.$menu.insertAfter(this.$element).css({top:c.top+c.height,left:c.left}).show();b(".dropdown-menu").on("mousedown",b.proxy(this.scrollSafety,this));this.shown=true;return this},hide:function(){this.$menu.hide();b(".dropdown-menu").off("mousedown",b.proxy(this.scrollSafety,this));this.$element.on("blur",b.proxy(this.blur,this));this.shown=false;return this},lookup:function(c){this.query=this.$element.val();return this.process(this.source)},process:function(c){var d=this;c=b.grep(c,function(e){return d.matcher(e)});c=this.sorter(c);if(!c.length){return this.shown?this.hide():this}return this.render(c.slice(0,this.options.items)).show()},template:function(){if(this.options.bsVersion=="2"){return'<div class="combobox-container"><input type="hidden" /> <div class="input-append"> <input type="text" autocomplete="off" /> <span class="add-on dropdown-toggle" data-dropdown="dropdown"> <span class="caret"/> <i class="icon-remove"/> </span> </div> </div>'}else{return'<div class="combobox-container"> <input type="hidden" /> <div class="input-group"> <input type="text" autocomplete="off" /> <span class="input-group-addon dropdown-toggle" data-dropdown="dropdown"> <span class="caret" /> <span class="glyphicon glyphicon-remove" /> </span> </div> </div>'}},matcher:function(c){return ~c.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(e){var f=[],d=[],c=[],g;while(g=e.shift()){if(!g.toLowerCase().indexOf(this.query.toLowerCase())){f.push(g)}else{if(~g.indexOf(this.query)){d.push(g)}else{c.push(g)}}}return f.concat(d,c)},highlighter:function(c){var d=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return c.replace(new RegExp("("+d+")","ig"),function(e,f){return"<strong>"+f+"</strong>"})},render:function(c){var d=this;c=b(c).map(function(e,f){e=b(d.options.item).attr("data-value",f);e.find("a").html(d.highlighter(f));return e[0]});c.first().addClass("active");this.$menu.html(c);return this},next:function(d){var e=this.$menu.find(".active").removeClass("active"),c=e.next();if(!c.length){c=b(this.$menu.find("li")[0])}c.addClass("active")},prev:function(d){var e=this.$menu.find(".active").removeClass("active"),c=e.prev();if(!c.length){c=this.$menu.find("li").last()}c.addClass("active")},toggle:function(){if(!this.disabled){if(this.$container.hasClass("combobox-selected")){this.clearTarget();this.triggerChange();this.clearElement()}else{if(this.shown){this.hide()}else{this.clearElement();this.lookup()}}}},scrollSafety:function(c){if(c.target.tagName=="UL"){this.$element.off("blur")}},clearElement:function(){this.$element.val("").focus()},clearTarget:function(){this.$source.val("");this.$target.val("");this.$container.removeClass("combobox-selected");this.selected=false},triggerChange:function(){this.$source.trigger("change")},refresh:function(){this.source=this.parse();this.options.items=this.source.length},listen:function(){this.$element.on("focus",b.proxy(this.focus,this)).on("blur",b.proxy(this.blur,this)).on("keypress",b.proxy(this.keypress,this)).on("keyup",b.proxy(this.keyup,this));if(this.eventSupported("keydown")){this.$element.on("keydown",b.proxy(this.keydown,this))}this.$menu.on("click",b.proxy(this.click,this)).on("mouseenter","li",b.proxy(this.mouseenter,this)).on("mouseleave","li",b.proxy(this.mouseleave,this));this.$button.on("click",b.proxy(this.toggle,this))},eventSupported:function(c){var d=c in this.$element;if(!d){this.$element.setAttribute(c,"return;");d=typeof this.$element[c]==="function"}return d},move:function(c){if(!this.shown){return}switch(c.keyCode){case 9:case 13:case 27:c.preventDefault();break;case 38:c.preventDefault();this.prev();break;case 40:c.preventDefault();this.next();break}c.stopPropagation()},keydown:function(c){this.suppressKeyPressRepeat=~b.inArray(c.keyCode,[40,38,9,13,27]);this.move(c)},keypress:function(c){if(this.suppressKeyPressRepeat){return}this.move(c)},keyup:function(c){switch(c.keyCode){case 40:case 39:case 38:case 37:case 36:case 35:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown){return}this.select();break;case 27:if(!this.shown){return}this.hide();break;default:this.clearTarget();this.lookup()}c.stopPropagation();c.preventDefault()},focus:function(c){this.focused=true},blur:function(d){var c=this;this.focused=false;var f=this.$element.val();if(!this.selected&&f!==""){this.$element.val("");this.$source.val("").trigger("change");this.$target.val("").trigger("change")}if(!this.mousedover&&this.shown){setTimeout(function(){c.hide()},200)}},click:function(c){c.stopPropagation();c.preventDefault();this.select();this.$element.focus()},mouseenter:function(c){this.mousedover=true;this.$menu.find(".active").removeClass("active");b(c.currentTarget).addClass("active")},mouseleave:function(c){this.mousedover=false}};b.fn.combobox=function(c){return this.each(function(){var f=b(this),e=f.data("combobox"),d=typeof c=="object"&&c;if(!e){f.data("combobox",(e=new a(this,d)))}if(typeof c=="string"){e[c]()}})};b.fn.combobox.defaults={bsVersion:"3",menu:'<ul class="typeahead typeahead-long dropdown-menu"></ul>',item:'<li><a href="#"></a></li>'};b.fn.combobox.Constructor=a}(window.jQuery);
(function(){var a=function(){};a.prototype.search_initialised=false;a.prototype.add_children=function(d,b){var c=this;$.ajax({url:APP_PATH+"tree",data:{uri:d},dataType:"json",type:"GET",beforeSend:function(){b.append(AS.renderTemplate("template_record_tree_loading"))},success:function(e){b.empty();if(e==null||e.direct_children.length==0){b.replaceWith(AS.renderTemplate("template_record_tree_empty"));return}if(!c.search_initialised){c.init_search(b)}$(e.direct_children).each(function(f,i){var g=AS.renderTemplate("template_record_tree_node",i);var h=$("<li>").text(i.title);b.append(g)})}})};a.prototype.init_search=function(b){var d=b.closest("#components");if(!d.data("show-search")){return}this.search_initialised=true;var c=$("#componentsTab",d);var e=$("#components_search_results",d);c.removeClass("hide");$("a",c).click(function(f){f.preventDefault();$(this).tab("show")});$("form",d).ajaxForm({type:"GET",success:function(g,f,h){e.html(g)}});e.on("click",".pagination a, .sort-by-action .dropdown-menu a",function(f){f.preventDefault();f.stopPropagation();e.load($(this).attr("href"))})};$(document).ready(function(){$(".record-tree").each(function(c,d){var d=$(d);var b=new a();b.add_children(d.data("root-uri"),d);d.on("click",".record-tree-node-toggle",function(g){g.stopPropagation();g.preventDefault();var f=$(this).closest("li");var e=f.find(".record-sub-tree:first");if(f.hasClass("loaded")){if(e.is(":visible")){f.addClass("expanded").removeClass("expanded")}else{f.removeClass("expanded").addClass("expanded")}e.toggle()}else{b.add_children(f.data("uri"),e);f.addClass("loaded").addClass("expanded")}})})})}());
/***************************************************
	  SELECT MENU ON SMALL DEVICES
***************************************************/
jQuery(document).ready(function($){
								
	var $menu_select = $("<select />");	
	$("<option />", {"selected": "selected", "value": "", "text": "Site Navigation"}).appendTo($menu_select);
	$menu_select.appendTo(".nav-container");

	$(".nav-container ul li a").each(function(){
		var menu_url = $(this).attr("href");
		var menu_text = $(this).text();
		if ($(this).parents("li").length == 2) { menu_text = '- ' + menu_text; }
		if ($(this).parents("li").length == 3) { menu_text = "-- " + menu_text; }
		if ($(this).parents("li").length > 3) { menu_text = "--- " + menu_text; }
		$("<option />", {"value": menu_url, "text": menu_text}).appendTo($menu_select)
	})
	
	field_id = ".nav-container select";
	$(field_id).change(function()
	{
	   value = $(this).attr('value');
	   window.location = value;
		//go
		
	});
})







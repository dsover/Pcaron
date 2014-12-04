	function clk(id){
		$('#content').fadeOut(250,function(){
			var sections = ["home","bio","work","resume","contact","gallery","links"];				
			sections.forEach(function(section){
				var sectionDiv = section+"Div";
				var sectionSelector = section+"li";
				switcher(sectionDiv,sectionSelector,section,id);
			});
		});
		$('#content').fadeIn(350);
	}
	function workContentSwitcher(id){
		$('#workContent').fadeOut(250,function(){
			var sections = ["overview","atlanta","miami","london","detroit"];	
			sections.forEach(function(section){
				var sectionDiv = section+"Div";
				var sectionSelector = section+"btn";
				switcher(sectionDiv,sectionSelector,section,id);
			});
		});
		$('#workContent').fadeIn(350);
	}
	function galleryContentSwitcher(id){
		$('#workContent').fadeOut(250,function(){
			var sections = ["video","photos"];	
			sections.forEach(function(section){
				var sectionDiv = section+"Div";
				var sectionSelector = section+"btn";
				switcher(sectionDiv,sectionSelector,section,id);
			});
		});
		$('#workContent').fadeIn(350);
	}
	
	
	function switcher(sectionDiv,sectionSelector,section,id){
		if(!(id == section)){
			$("#"+sectionSelector).removeClass("active");
			$("#"+sectionDiv).removeClass("activeDiv");
			$("#"+sectionDiv).addClass("inactiveDiv");
		}
		if(id == section){
			$("#"+sectionSelector).addClass("active");
			$("#"+sectionDiv).removeClass("inactiveDiv");
			$("#"+sectionDiv).addClass("activeDiv");
		}
	}

$( document ).ready(function() {

		/*$( "#dialog" ).dialog({
	    	appendTo:document.body,
	    	draggable: false,
	    	modal: true,
	    	autoOpen: false,
	        resizable: true,
	        width:function(){return $(window).width() * 0.95;},//set the width to 80% of the current window size
	        height:'auto',
	        close: function(event, ui) { $('#wrap').show(); },
	        open: function(event, ui) { $('.ui-widget-overlay').bind('click', function(){ $("#dialog").dialog('close'); }); }

	    });*/

	    var data = [
                    {
                      image:'https://lh3.googleusercontent.com/5YLqEomUFdAspuqjs-Uk-Om4m_GRhf8R8tfvEuvJMaqUUrt6tLTLkIcR4gAzPax3MVyhZB9BnhFzAMhs_XIbUyBz43IlSbTBfFYKHd2DBo5IAy_fdMUEg5ezxKhXAgtzlUrLyTooMpi0G9XBdHAeDFdxCNYTwuRhp7yfwdEuu6AUNYuQpyTQcPZs4VYD11H-e5q0o8oEm2j0C9oKZVkjasaTw3Xky7rcEdzddN7QDfdUq7kdmHOnp4RANuksZsBnuNKLumDooW34oeSZIO4-RihbCGMxQUav8akK0yzK0PDeU07cvRWiTmkLVKvYAJPh7uCkrWvmwy14YCqdRATwLkmZ6jWc9ijrL_y-f6qdlAU-XFEZutERZyi4dnWSNPBew90ihztEF3n4zwe_ZvL3ySIsOHP1l0lWm3_7i8__1qHkseY2aawjEAmyGcw1gLpijw--X2-VMzOHaKhYutWP4_8dZ4wPMvXpczlfIV6_v5U5JDBcmEpYFLBldGbP2uJsPx2jqs_W1HYLwJF51Ij02mcI3XwHQpJnrNPMOxMXTbTdh1T4M6Sv171dIN0AheFpn4R3BLNZkg6hIRyRy2yq1e20ELxOCyyn_trI1_1xVyU8kq5mdL1o=w600-h450-no',
                        title:'My Title2',
                      description:'My Description',
                      link:'https://lh3.googleusercontent.com/5YLqEomUFdAspuqjs-Uk-Om4m_GRhf8R8tfvEuvJMaqUUrt6tLTLkIcR4gAzPax3MVyhZB9BnhFzAMhs_XIbUyBz43IlSbTBfFYKHd2DBo5IAy_fdMUEg5ezxKhXAgtzlUrLyTooMpi0G9XBdHAeDFdxCNYTwuRhp7yfwdEuu6AUNYuQpyTQcPZs4VYD11H-e5q0o8oEm2j0C9oKZVkjasaTw3Xky7rcEdzddN7QDfdUq7kdmHOnp4RANuksZsBnuNKLumDooW34oeSZIO4-RihbCGMxQUav8akK0yzK0PDeU07cvRWiTmkLVKvYAJPh7uCkrWvmwy14YCqdRATwLkmZ6jWc9ijrL_y-f6qdlAU-XFEZutERZyi4dnWSNPBew90ihztEF3n4zwe_ZvL3ySIsOHP1l0lWm3_7i8__1qHkseY2aawjEAmyGcw1gLpijw--X2-VMzOHaKhYutWP4_8dZ4wPMvXpczlfIV6_v5U5JDBcmEpYFLBldGbP2uJsPx2jqs_W1HYLwJF51Ij02mcI3XwHQpJnrNPMOxMXTbTdh1T4M6Sv171dIN0AheFpn4R3BLNZkg6hIRyRy2yq1e20ELxOCyyn_trI1_1xVyU8kq5mdL1o=w600-h450-no',
                    },
                    {
                      image:'https://lh3.googleusercontent.com/bUinwqZynkz9yZbwH413XQIOfMQhhu2CJSslB1utx5pdba2NtgDhnmUKPq5dXmhPHGN_6ID9rp5N1ieDn_Go9GZG6pvOaoxaJjGjogLRReiV980y1mgcMLWOAh9X5nbR9c-QLaSdZZQbKZGR8qzJVqzxmLVM7m1X1SnjjD9JdiiZkJJIOnTqhuJbNYaol85ixPu-Qd8jT_HxRpCZgqayJK5aaMsKhtbC_GevhZVVUKah9hVUujxTnjF6ltGxyspeR5Vqdq6yoXy9ZaV_57jLUaLHS1a2_zADO0_3iySVM7lHPkZOR91PKBIwcXAWVbT_ZE3fTk6D61cfZe66A7m_ri_HH2_ZKsyxMRDw85tdKebvib3_gVAi8wO8qlwOMxMT5D-FLpJnWaIEAboLzj8ChFtZHxYdc_rHxDKqv4RZ7BfCOtMRMZS0askX_ur4zN-lbFZvTZL9DU_25httbsVmm81r63EMTJLzjhy8OSHrKtifNyozx4_p-bdOViLfVlSae4NwZjBpyOTQwKdiZuXv57jafLK32KXUur7ARux3J_n1f9NpiY0IEhoINoRt3o8tWnPn1LED_EUzgQ2aQHLIgPNgB_arb82AA11SHXJ5U3J1-2hZALdT=w720-h960-no',
                        title:'My Title2',
                      description:'My Description',
                      link:'https://lh3.googleusercontent.com/bUinwqZynkz9yZbwH413XQIOfMQhhu2CJSslB1utx5pdba2NtgDhnmUKPq5dXmhPHGN_6ID9rp5N1ieDn_Go9GZG6pvOaoxaJjGjogLRReiV980y1mgcMLWOAh9X5nbR9c-QLaSdZZQbKZGR8qzJVqzxmLVM7m1X1SnjjD9JdiiZkJJIOnTqhuJbNYaol85ixPu-Qd8jT_HxRpCZgqayJK5aaMsKhtbC_GevhZVVUKah9hVUujxTnjF6ltGxyspeR5Vqdq6yoXy9ZaV_57jLUaLHS1a2_zADO0_3iySVM7lHPkZOR91PKBIwcXAWVbT_ZE3fTk6D61cfZe66A7m_ri_HH2_ZKsyxMRDw85tdKebvib3_gVAi8wO8qlwOMxMT5D-FLpJnWaIEAboLzj8ChFtZHxYdc_rHxDKqv4RZ7BfCOtMRMZS0askX_ur4zN-lbFZvTZL9DU_25httbsVmm81r63EMTJLzjhy8OSHrKtifNyozx4_p-bdOViLfVlSae4NwZjBpyOTQwKdiZuXv57jafLK32KXUur7ARux3J_n1f9NpiY0IEhoINoRt3o8tWnPn1LED_EUzgQ2aQHLIgPNgB_arb82AA11SHXJ5U3J1-2hZALdT=w720-h960-no',
                    },
                    {
                      image:'https://lh3.googleusercontent.com/aKSWmYgAN6TTV-uDHzJ0yo-Mq19kwMCj1xEegydBM3c6niOdS_J_DhM9AnxdBrC7Acz6zZbtsrha-8YiR_a2GCT0FW9boOlEUCK5TydzgrqVINTk_OrmXUPV9-bv_hdOH3F5ufsa11T4ejgNnikQtJ3TRXU6Sj0To5tT1aP0_ByAI0Bv2MtqmrMfU-xdruScBsADburBwi2Xg82nTpZwDEa8uQFY0-DkqXMBrXFawZ4Gs75j2ye4za0JkM93xszKyh-UPbZDICFz7pQ4itH09UdcFqhogjhcy27lPh6cgarjRyTVRAL67KiCDi4SbTha6Aeu0vtFyRR6wYvhREx8BD9Hn32GAwBpZgqfErZQSyesgL_hyMSlfdpoTXKZe08g_1IgiLKTgEoP4980lok19728Lh80Cxj47qVdFVY_KXUb0AhTK5EAk9MbtvT-ivHWSvrJH7D1ezSftdfB90NMz1EXYq-kR6wNCiwYPU_8fff2s_4bfhRaC9nU4xl-2vG-F6xx0x2W6e4DNiexVxa1H1edsUvxGTEI2xMKVMd1QHz10WOc3YbCbiuEqzKqBYnjxuytKrcMaWhXKupS_0g0WAc5XGl7Rp8t1z_hswgF8eRl2EskqUB7=w2994-h1371-no',
                        title:'My Title2',
                      description:'My Description',
                      link:'https://lh3.googleusercontent.com/aKSWmYgAN6TTV-uDHzJ0yo-Mq19kwMCj1xEegydBM3c6niOdS_J_DhM9AnxdBrC7Acz6zZbtsrha-8YiR_a2GCT0FW9boOlEUCK5TydzgrqVINTk_OrmXUPV9-bv_hdOH3F5ufsa11T4ejgNnikQtJ3TRXU6Sj0To5tT1aP0_ByAI0Bv2MtqmrMfU-xdruScBsADburBwi2Xg82nTpZwDEa8uQFY0-DkqXMBrXFawZ4Gs75j2ye4za0JkM93xszKyh-UPbZDICFz7pQ4itH09UdcFqhogjhcy27lPh6cgarjRyTVRAL67KiCDi4SbTha6Aeu0vtFyRR6wYvhREx8BD9Hn32GAwBpZgqfErZQSyesgL_hyMSlfdpoTXKZe08g_1IgiLKTgEoP4980lok19728Lh80Cxj47qVdFVY_KXUb0AhTK5EAk9MbtvT-ivHWSvrJH7D1ezSftdfB90NMz1EXYq-kR6wNCiwYPU_8fff2s_4bfhRaC9nU4xl-2vG-F6xx0x2W6e4DNiexVxa1H1edsUvxGTEI2xMKVMd1QHz10WOc3YbCbiuEqzKqBYnjxuytKrcMaWhXKupS_0g0WAc5XGl7Rp8t1z_hswgF8eRl2EskqUB7=w2994-h1371-no',
                    },
                    {
                      image:'https://lh3.googleusercontent.com/sVTsuyr_u0P445FWsRIVxLGdtI_EA48hTd6Cctzr_WUVxt3FYYnxk_43yHrU-r8WvuaAzCkGhKNkpSLRwwcCQtFujGf4Kw3Glf70WTuyKy-yHBfUWscNpfOvhE5-uZJvYe-v4eaKxvdsZgCZrQWUuqgDPWyDvGVFkzXTLIzJ7tmdDLBtmUZDwf3XPYCLBn3NQE3l1joaXh5TrI52E8hodRi_Bk-a2kqMd1-IeatOFe0SIrmNzesBl597tNmxGfe-O7_IDDPO9w3v82MP8llWUxnRNYaZlhL3Si6qP3luqPSOnxIkAp2Gsia-yHozs88ALjxD1hRHwdUNcUdWDk6zzqm0KZy0oBqrMjlUcQBpFSJR9NcLg7XBKudqybfM-V8oKsvppLXxGJNWrZj51lmDGP3mhgd5jOIWlvxAUx4gWGC2tcItOZ1ArinHv5tlwPJlE4d5ir5DsyFObCBtSrf6-Of3yNAjPGDtphLrs6osleePa1JYFLCPSAl6MlR9etUSqnAfGoUny_Kr_0UD2vLn8ojww21Mx-Ek1eqFK-Id2F-1HTEQwoWB8Ryp1kRjPm9-2JqG5yiUG_ns5bP1teQfpSEquu3Zqa7B30VxNQFDndDoipKkgBbY=w2436-h1826-no',
                        title:'My Title2',
                      description:'My Description',
                      link:'https://lh3.googleusercontent.com/sVTsuyr_u0P445FWsRIVxLGdtI_EA48hTd6Cctzr_WUVxt3FYYnxk_43yHrU-r8WvuaAzCkGhKNkpSLRwwcCQtFujGf4Kw3Glf70WTuyKy-yHBfUWscNpfOvhE5-uZJvYe-v4eaKxvdsZgCZrQWUuqgDPWyDvGVFkzXTLIzJ7tmdDLBtmUZDwf3XPYCLBn3NQE3l1joaXh5TrI52E8hodRi_Bk-a2kqMd1-IeatOFe0SIrmNzesBl597tNmxGfe-O7_IDDPO9w3v82MP8llWUxnRNYaZlhL3Si6qP3luqPSOnxIkAp2Gsia-yHozs88ALjxD1hRHwdUNcUdWDk6zzqm0KZy0oBqrMjlUcQBpFSJR9NcLg7XBKudqybfM-V8oKsvppLXxGJNWrZj51lmDGP3mhgd5jOIWlvxAUx4gWGC2tcItOZ1ArinHv5tlwPJlE4d5ir5DsyFObCBtSrf6-Of3yNAjPGDtphLrs6osleePa1JYFLCPSAl6MlR9etUSqnAfGoUny_Kr_0UD2vLn8ojww21Mx-Ek1eqFK-Id2F-1HTEQwoWB8Ryp1kRjPm9-2JqG5yiUG_ns5bP1teQfpSEquu3Zqa7B30VxNQFDndDoipKkgBbY=w2436-h1826-no',
                    },
                    {
		                	image:'https://lh6.googleusercontent.com/-fMK4wMrgwAc/VOap-6-20TI/AAAAAAAAAnc/JhABnVmJtKc/w2048-h1378-no/Detroit1988.jpeg',
		                    title:'My Title2',
		                	description:'My Description',
		                	link:'https://lh6.googleusercontent.com/-fMK4wMrgwAc/VOap-6-20TI/AAAAAAAAAnc/JhABnVmJtKc/w2048-h1378-no/Detroit1988.jpeg',
		                },
		                {
		                	image:'https://lh6.googleusercontent.com/-J1AotcB0ncU/VOaqA6ujQ_I/AAAAAAAAAn4/JJpNwy0MrE4/w1958-h1378-no/Sunset.jpeg',
		                	title:'My Title',
		                	description:'My Description',
		                	link:'https://lh6.googleusercontent.com/-J1AotcB0ncU/VOaqA6ujQ_I/AAAAAAAAAn4/JJpNwy0MrE4/w1958-h1378-no/Sunset.jpeg',
		                },
		                {
		                	image:'https://lh3.googleusercontent.com/-sdJEPpr7Q7w/VOaqA7VbJ2I/AAAAAAAAAn8/aro73FP_nwg/w2066-h1378-no/MichHighSchool.jpeg',
		                	title:'My Title',
		                	description:'My Description',
		                	link:'https://lh3.googleusercontent.com/-sdJEPpr7Q7w/VOaqA7VbJ2I/AAAAAAAAAn8/aro73FP_nwg/w2066-h1378-no/MichHighSchool.jpeg',
		                },
		                {
		                	image:'https://lh3.googleusercontent.com/-eT3xipDUm6s/VOaqAws_B_I/AAAAAAAAAoM/rwNxA3_WSKc/w1966-h1378-no/PortAuPrince.jpeg',
		                	title:'My Title',
		                	description:'My Description',
		                	link:'https://lh3.googleusercontent.com/-eT3xipDUm6s/VOaqAws_B_I/AAAAAAAAAoM/rwNxA3_WSKc/w1966-h1378-no/PortAuPrince.jpeg',
		                },
		                {
		                	image:'https://lh5.googleusercontent.com/-RMklxKGY1js/VOap-388p3I/AAAAAAAAAnk/57g7TmjNFtM/w2056-h1378-no/Finals.jpeg',
		                	title:'My Title',
		                	description:'My Description',
		                	link:'https://lh5.googleusercontent.com/-RMklxKGY1js/VOap-388p3I/AAAAAAAAAnk/57g7TmjNFtM/w2056-h1378-no/Finals.jpeg',
		                },
		                {
		                	image:'https://lh6.googleusercontent.com/-5uPu75twnng/VOap-80sHGI/AAAAAAAAAoQ/V6IDhkTwb9k/w1940-h1378-no/HSBasketball.jpeg',
		                	title:'My Title',
		                	description:'My Description',
		                	link:'https://lh6.googleusercontent.com/-5uPu75twnng/VOap-80sHGI/AAAAAAAAAoQ/V6IDhkTwb9k/w1940-h1378-no/HSBasketball.jpeg',
		                },
		                {
		                	image:'https://lh4.googleusercontent.com/-JxjBIo6TKI4/VOaieqcXiMI/AAAAAAAAAmo/BcTWrzIq7Vk/w1940-h1378-no/withSkeeHartAndDarrelJohnson.jpeg',
		                	title:'My Title',
		                	description:'My Description',
		                	link:'https://lh4.googleusercontent.com/-JxjBIo6TKI4/VOaieqcXiMI/AAAAAAAAAmo/BcTWrzIq7Vk/w1940-h1378-no/withSkeeHartAndDarrelJohnson.jpeg',
		                },
		                {
		                	image:'https://lh3.googleusercontent.com/-nIlusrjiXbk/VOaieXAXPEI/AAAAAAAAAnA/AI2mPm229hI/w1948-h1378-no/paulmid90s.jpg',
		                	title:'My Title',
		                	description:'My Description',
		                	link:'https://lh3.googleusercontent.com/-nIlusrjiXbk/VOaieXAXPEI/AAAAAAAAAnA/AI2mPm229hI/w1948-h1378-no/paulmid90s.jpg',
		                },
		                {
		                	image:'https://lh3.googleusercontent.com/-kGRifcc41E8/VOaieGXsrYI/AAAAAAAAAmk/h6hqJoTqGPI/w1034-h1378-no/paulcnn.jpg',
		                	title:'My Title',
		                	description:'My Description',
		                	link:'https://lh3.googleusercontent.com/-kGRifcc41E8/VOaieGXsrYI/AAAAAAAAAmk/h6hqJoTqGPI/w1034-h1378-no/paulcnn.jpg',
		                },
		                {
		                	image:'https://lh4.googleusercontent.com/-Qe9P-XKAQRo/VOaid8QaCOI/AAAAAAAAAmc/1YsPykRwa0A/w1030-h1378-no/newsRoomWithKevinConlonAndBrianCarberry.jpeg',
		                	title:'My Title',
		                	description:'My Description',
		                	link:'https://lh4.googleusercontent.com/-Qe9P-XKAQRo/VOaid8QaCOI/AAAAAAAAAmc/1YsPykRwa0A/w1030-h1378-no/newsRoomWithKevinConlonAndBrianCarberry.jpeg',
		                },
		                {
		                	image:'https://lh3.googleusercontent.com/-hUrsvrG7hVw/VOaidRdymII/AAAAAAAAAmI/yhmdoMw4TS0/w970-h688-no/inHaitiWithSkeeHartAndDarrel.jpeg',
		                	title:'My Title',
		                	description:'My Description',
		                	link:'https://lh3.googleusercontent.com/-hUrsvrG7hVw/VOaidRdymII/AAAAAAAAAmI/yhmdoMw4TS0/w970-h688-no/inHaitiWithSkeeHartAndDarrel.jpeg',
		                },
		                {
		                	image:'https://lh3.googleusercontent.com/-SydkVFlJ_O0/VOaic_b6HQI/AAAAAAAAAl8/SYUZ9tsxKjM/w1388-h992-no/TWA800Crash.jpg',
		                	title:'My Title',
		                	description:'My Description',
		                	link:'https://lh3.googleusercontent.com/-SydkVFlJ_O0/VOaic_b6HQI/AAAAAAAAAl8/SYUZ9tsxKjM/w1388-h992-no/TWA800Crash.jpg',
		                },
		                {
		                	image:'https://lh4.googleusercontent.com/-mEV4QFiswco/VOaic_HGLQI/AAAAAAAAAl4/UXuzzPjx08Y/w1180-h962-no/Scan_20141118%2B%282%29.jpg',
		                	title:'My Title',
		                	description:'My Description',
		                	link:'https://lh5.googleusercontent.com/-cnzaaNpMX3I/VOaicnGd8xI/AAAAAAAAAls/hngZ046Jj0U/w1186-h804-no/HaitianSituation.jpg',
		                },
		                {
		                	image:'https://lh5.googleusercontent.com/-cnzaaNpMX3I/VOaicnGd8xI/AAAAAAAAAls/hngZ046Jj0U/w1186-h804-no/HaitianSituation.jpg',
		                	title:'My Title',
		                	description:'My Description',
		                	link:'https://lh5.googleusercontent.com/-cnzaaNpMX3I/VOaicnGd8xI/AAAAAAAAAls/hngZ046Jj0U/w1186-h804-no/HaitianSituation.jpg',
		                },
		                {
		                	image:'https://lh4.googleusercontent.com/-0mKW6R4uvRg/VOaidsAW__I/AAAAAAAAAmQ/JTXqmCTpfVY/w1024-h1378-no/michiganAndTrumbull.jpeg',
		                	title:'My Title',
		                	description:'My Description',
		                	link:'https://lh4.googleusercontent.com/-0mKW6R4uvRg/VOaidsAW__I/AAAAAAAAAmQ/JTXqmCTpfVY/w1024-h1378-no/michiganAndTrumbull.jpeg',
		                },
		                {
		                	image:'https://lh3.googleusercontent.com/-jm5PvpqNP-g/VOaidRu59vI/AAAAAAAAAmY/bWjxfGH-zoo/w1838-h1378-no/Tiger%2BStadium%2B003.jpg',
		                	title:'My Title',
		                	description:'My Description',
		                	link:'https://lh3.googleusercontent.com/-jm5PvpqNP-g/VOaidRu59vI/AAAAAAAAAmY/bWjxfGH-zoo/w1838-h1378-no/Tiger%2BStadium%2B003.jpg',
		                },
	                ]
	 /*   $( "#opener" ).click(function() {
	      $( "#dialog" ).dialog( "open" );
		    Galleria.loadTheme('./js/galleria-1.4.2/themes/classic/galleria.classic.min.js');
		    Galleria.configure({
		        transition: 'fade',
		    });
		    Galleria.run('.galleria',{dataSource: data});
		 });*/
	    Galleria.loadTheme('./js/galleria-1.4.2/themes/classic/galleria.classic.min.js');
	    Galleria.configure({
	        transition: 'fade',
	        wait:true,
	        width:function(){return $(window).width() * 0.95;},//set the width to 80% of the current window size

	    });
	    Galleria.run('.galleria',{dataSource: data});

});
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

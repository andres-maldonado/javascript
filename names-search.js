	// Top SCRIPT Diccionario & Search
	$('button#diccionario').click(function(){
		if($(this).hasClass('open')==true){
			$(this).removeClass('open');
			$('#dictBlock').css('display','none');
		}
		else{
			$(this).addClass('open');
			$('#dictBlock').css('display','block');
		}
	});
	$('div#dictBlock button').click(function(){
		var data = $(this).attr('data-href');
		var myDictUrl = String(URL+'/diccionario/'+data+'/');
		var myWindowDict = window.open(myDictUrl, "myWindowDict", "width=800,height=600");
	});
	function roleoCausasStart(){
		var aDict1 = [{{dict1.keywords|safe}}];
		var aDict2 = [{{dict2.keywords|safe}}];
		var aDict3 = [{{dict3.keywords|safe}}];
		var aDict4 = [{{dict4.keywords|safe}}];
		var i,j,k,l = 0;
		var val1 = aDict1[0];
		var val2 = aDict2[0];
		var val3 = aDict3[0];
		var val4 = aDict4[0];
		if(val2==undefined){
			aDict2 = ['supercalifragilisticoespialidoso'];
			val2 = 'supercalifragilisticoespialidoso';
		}
		var aDict1 = [{{dict1.keywords|safe}}];
		var bigDict = String(val1+'+'+val2+'&APE_Paterno='+val3+'&APE_Materno='+val4);
		for (i=0; i < aDict1.length; i++){
			var val1 = aDict1[i];
			var searchVar = val1+'+'+val2+'&APE_Paterno='+val3+'&APE_Materno='+val4;
			searchVar = String(searchVar);
			var number = parseInt(bigDict.indexOf(searchVar));
			if(number==-1){
				bigDict = String(bigDict+','+val1+'+'+val2+'&APE_Paterno='+val3+'&APE_Materno='+val4);
			}
			var aDict2 = [{{dict2.keywords|safe}}];
			if(aDict2==''){
				aDict2 = ['supercalifragilisticoespialidoso'];
				val2 = 'supercalifragilisticoespialidoso';
			}
			for (var j = 0; j < aDict2.length; j++){
				var val2 = aDict2[j];
				if(val2==undefined){
					aDict2 = ['supercalifragilisticoespialidoso'];
					val2 = 'supercalifragilisticoespialidoso';
				}
				var searchVar = val1+'+'+val2+'&APE_Paterno='+val3+'&APE_Materno='+val4;
				searchVar = String(searchVar);
				var number = parseInt(bigDict.indexOf(searchVar));
				if(number==-1){
					bigDict = String(bigDict+','+val1+'+'+val2+'&APE_Paterno='+val3+'&APE_Materno='+val4);
				}
				var aDict3 = [{{dict3.keywords|safe}}];
				for (var k = 0; k < aDict3.length; k++){
					var val3 = aDict3[k];
					var searchVar = val1+'+'+val2+'&APE_Paterno='+val3+'&APE_Materno='+val4;
					searchVar = String(searchVar);
					var number = parseInt(bigDict.indexOf(searchVar));
					if(number==-1){
						bigDict = String(bigDict+','+val1+'+'+val2+'&APE_Paterno='+val3+'&APE_Materno='+val4);
					}
					var aDict4 = [{{dict4.keywords|safe}}];
					for (var l = 0; l < aDict4.length; l++){
						var val4 = aDict4[l];
						var searchVar = val1+'+'+val2+'&APE_Paterno='+val3+'&APE_Materno='+val4;
						searchVar = String(searchVar);
						var number = parseInt(bigDict.indexOf(searchVar));
						if(number==-1){
							bigDict = String(bigDict+','+val1+'+'+val2+'&APE_Paterno='+val3+'&APE_Materno='+val4);
						};
					};
				};
			};
		};
		// CONVERT HEX http://gias720.dis.ulpgc.es/Gias/Cursos/Tutorial_html/formtab.htm
		bigDict = bigDict.replace(/Á/g,'%C1');
		bigDict = bigDict.replace(/É/g,'%C9');
		bigDict = bigDict.replace(/Í/g,'%CD');
		bigDict = bigDict.replace(/Ó/g,'%D3');
		bigDict = bigDict.replace(/Ú/g,'%DA');
		bigDict = bigDict.replace(/Ñ/g,'%D1');
		if(bigDict.indexOf('+supercalifragilisticoespialidoso')==-1){
			//
		}else{
			var count = (bigDict.match(/supercalifragilisticoespialidoso/g) || []).length;
			for (var i = 0; i < count; i++){
				bigDict = bigDict.replace('+supercalifragilisticoespialidoso','');
			}
		};

define(['pipAPI', 'https://baranan.github.io/minno-tasks/quiat8.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Chinese', //Will appear in the data and in the default feedback message.
			title : {
				media : {word : 'Chinese'}, //Name of the category presented in the task.
				css : {color:'#00B317','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
		{word: 'Shi Ting'},
			{word: 'Jia Ying'},
			{word: 'Hui Min'},
			{word: 'Kai Li'},
			{word: 'Li Ying'},
			{word: 'Mei Xin'},
			{word: 'Li Xuan'},
			{word: 'Wan Qi'},
			{word: 'Xin Hui'},
			{word: 'En Ci'}
			],
			//Stimulus css (style)
			stimulusCss : {color:'#00B317','font-size':'2.3em'}
		},	
		category2 : {
			name : 'Non-Chinese', //Will appear in the data and in the default feedback message.
			title : {
				media : {word : 'Non-Chinese'}, //Name of the category presented in the task.
				css : {color:'#00B317','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
		{word: 'Siti'},
			{word: 'Syafiqah'},
			{word: 'Fatimah'},
			{word: 'Aisha'},
			{word: 'Sharifah'},
			{word: 'Shiva'},
			{word: 'Poojaa'},
			{word: 'Devi'},
			{word: 'Priya'},
			{word: 'Shantini'}
			],
			//Stimulus css (style)
			stimulusCss : {color:'#00B317','font-size':'2.3em'}
		},
		attribute1 : {
			name : 'Foreign',
			title : {
				media : {word : 'Foreign'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
    	{image : 'Foreign1.jpg'}, 
    		{image : 'Foreign2.jpg'}, 
    		{image : 'Foreign3.jpg'},
    		{image : 'Foreign4.jpg'},
    		{image : 'Foreign5.jpg'},
    		{image : 'Foreign6.jpg'},
    		{image : 'Foreign7.jpg'},
    		{image : 'Foreign8.jpg'},
    		{image : 'Foreign9.jpg'},
    		{image : 'Foreign10.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :{
			name : 'Singaporean', //Will appear in the data.
			title : {
				media : {word : 'Singaporean'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    	{image : 'SG1.jpg'}, 
    		{image : 'SG2.jpg'},
    		{image : 'SG3.jpg'}, 
    		{image : 'SG4.jpg'}, 
    		{image : 'SG5.jpg'}, 
    		{image : 'SG6.jpg'}, 
    		{image : 'SG7.jpg'}, 
     		{image : 'SG8.jpg'}, 
    		{image : 'SG9.jpg'}, 
    		{image : 'SG10.jpg'}			
    		], 
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		instAttributePractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Put a left finger on the <b>E</b> key for items that belong to the category <font color="#0000ff">leftAttribute.</font>' +
				'<br/>Put a right finger on the <b>I</b> key for items that belong to the category <font color="#0000ff">rightAttribute</font>.<br/><br/>' +
				'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
				'Press the other key to continue.<br/>' +
				'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>'+
				'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',
		instAttributePracticeTouch: [
				'<div>',
					'<p align="center">',
						'<u>Part blockNum of nBlocks</u>',
					'</p>',
					'<p align="left" style="margin-left:5px">',
						'<br/>',
						'Put a left finger over the the <b>left</b> green area for items that belong to the category <font color="#0000ff">leftAttribute</font>.<br/>',
						'Put a right finger over the <b>right</b> green area for items that belong to the category <font color="#0000ff">rightAttribute</font>.<br/>',
						'Items will appear one at a time.<br/>',
						'<br/>',
						'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. Touch the other side. <u>Go as fast as you can</u> while being accurate.',
					'</p>',
					'<p align="center">Touch the <b>lower </b> green area to start.</p>',
				'</div>'
			].join('\n'),

		instCategoriesPractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Put a left finger on the <b>E</b> key for items that belong to the category <font color="#00B317">leftCategory</font>. ' +
				'<br/>Put a right finger on the <b>I</b> key for items that belong to the category <font color="#00B317">rightCategory</font>.<br/>' +
				'Items will appear one at a time.<br/><br/>' +
				'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
				'Press the other key to continue.<br/>' +
				'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>'+
				'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',
		instCategoriesPracticeTouch: [
				'<div>',
					'<p align="center">',
						'<u>Part blockNum of nBlocks</u>',
					'</p>',
					'<p align="left" style="margin-left:5px">',
						'<br/>',
						'Put a left finger over the <b>left</b> green area for items that belong to the category <font color="#00B317">leftCategory</font>.<br/>',
						'Put a right finger over the <b>right</b> green area for items that belong to the category <font color="#00B317">rightCategory</font>.<br/>',
						'Items will appear one at a time.<br/>',
						'<br/>',
						'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. Touch the other side. <u>Go as fast as you can</u> while being accurate.',
					'</p>',
					'<p align="center">Touch the <b>lower </b> green area to start.</p>',
				'</div>'
			].join('\n'),

		instFirstCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Use the <b>E</b> key for <font color="#00B317">leftCategory</font> and for <font color="#0000ff">leftAttribute</font>.<br/>' +
				'Use the <b>I</b> key for <font color="#00B317">rightCategory</font> and for  <font color="#0000ff">rightAttribute</font>.<br/>' +
				'Each item belongs to only one category.<br/><br/>' +
				'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
				'Press the other key to continue.<br/>' + 
				'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>' +
				'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',
		instFirstCombinedTouch:[
				'<div>',
					'<p align="center">',
						'<u>Part blockNum of nBlocks</u>',
					'</p>',
					'<br/>',
					'<br/>',
					'<p align="left" style="margin-left:5px">',
						'Put a left finger over the <b>left</b> green area for <font color="#00B317">leftCategory</font> items and for <font color="#0000ff">leftAttribute</font>.</br>',
						'Put a right finger over the <b>right</b> green area for <font color="#00B317">rightCategory</font> items and for <font color="#0000ff">rightAttribute</font>.</br>',
							'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. Touch the other side. <u>Go as fast as you can</u> while being accurate.</br>',
						'</p>',
						'<p align="center">Touch the <b>lower </b> green area to start.</p>',
				'</div>'
			].join('\n'),

		instSecondCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'This is the same as the previous part.<br/>' +
				'Use the <b>E</b> key for <font color="#00B317">leftCategory</font> and for <font color="#0000ff">leftAttribute</font>.<br/>' +
				'Use the <b>I</b> key for <font color="#00B317">rightCategory</font> and for  <font color="#0000ff">rightAttribute</font>.<br/>' +
				'Each item belongs to only one category.<br/><br/>' +
				'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>' +
				'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',
		instSecondCombinedTouch:[
				'<div>',
					'<p align="center"><u>Part blockNum of nBlocks</u></p>',
					'<br/>',
					'<br/>',

					'<p align="left" style="margin-left:5px">',
						'Put a left finger over the <b>left</b> green area for <font color="#00B317">leftCategory</font> items and for <font color="#0000ff">leftAttribute</font>.<br/>',
						'Put a right finger over the <b>right</b> green area for <font color="#00B317">rightCategory</font> items and for <font color="#0000ff">rightAttribute</font>.<br/>',
						'<br/>',
						'<u>Go as fast as you can</u> while being accurate.<br/>',
					'</p>',
					'<p align="center">Touch the <b>lower </b> green area to start.</p>',
				'</div>'
			].join('\n'),

		instSwitchCategories : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'<b>Watch out, the labels have changed position!</b><br/>' +
				'Use the left finger on the <b>E</b> key for <font color="#00B317">leftCategory</font>.<br/>' +
				'Use the right finger on the <b>I</b> key for <font color="#00B317">rightCategory</font>.<br/><br/>' +
				'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>' +
				'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',
		instSwitchCategoriesTouch: [
				'<div>',
					'<p align="center">',
						'<u>Part blockNum of nBlocks</u>',
					'</p>',
					'<p align="left" style="margin-left:5px">',
						'<br/>',
						'Watch out, the labels have changed position!<br/>',
							'Put a left finger over the <b>left</b> green area for <font color="#00B317">leftCategory</font> items.<br/>',
							'Put a right finger over the <b>right</b> green area for <font color="#00B317">rightCategory</font> items.<br/>',
							'Items will appear one at a time.',
							'<br/>',
							'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. Touch the other side. <u>Go as fast as you can</u> while being accurate.<br/>',
						'</p>',
						'<p align="center">Touch the <b>lower </b> green area to start.</p>',
				'</div>'
			].join('\n'),

		instThirdCombined : 'instFirstCombined', //this means that we're going to use the instFirstCombined property for the third combined block as well. You can change that.
		instFourthCombined : 'instSecondCombined', //this means that we're going to use the instSecondCombined property for the fourth combined block as well. You can change that.
		instThirdCombinedTouch : 'instFirstCombined', //this means that we're going to use the instFirstCombined property for the third combined block as well. You can change that.
		instFourthCombinedTouch : 'instSecondCombined', //this means that we're going to use the instSecondCombined property for the fourth combined block as well. You can change that.
	

		base_url : {//Where are your images at?
			image : 'https://asherlee119.github.io/asherlee119/'
		} 
	});
});
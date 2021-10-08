define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'Chinese', //Will appear in the data.
		    title : {
		      media : {word : 'Chinese'}, //Name of the category presented in the task.
		      css : {color:'#336600','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
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
		    css : {color:'#336600','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'Bad', //Attribute label
			title : {
				media : {word : 'Bad'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Angry'},
				{word: 'Brutal'},
				{word: 'Destroy'},
				{word: 'Disgusting'},
				{word: 'Dislike'},
				{word: 'Horrible'},
				{word: 'Painful'},
				{word: 'Revolting'},
				{word: 'Tragic'},
				{word: 'Ugly'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#0000FF','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'Good', //Attribute label
			title : {
				media : {word : 'Good'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Paradise'},
				{word: 'Beautiful'},
				{word: 'Cheerful'},
				{word: 'Friendly'},
				{word: 'Splendid'},
				{word: 'Glad'},
				{word: 'Happy'},
				{word: 'Laughter'},
				{word: 'Superb'},
				{word: 'Loving'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#0000FF','font-size':'3em'}
			},
		trialsByBlock : 
			[//Each object in this array defines a block
				{
					instHTML : '', //Empty means we will create the inst from the instTemplate variable further below. 
					block : 1, //The block variable is not used later, but could help the user. 
					//In each block, we can include a number of mini-blocks, to reduce repetition of same group/response.
					miniBlocks : 1, //Set to 1 if don't need mini blocks. 0 will break the task.
					singleAttTrials : 10, //Number of trials of the attribute that does not share key with the category (in a mini block).
					sharedAttTrials : 10, //Number of trials of the attribute that shares key with the category (in a mini block).
					categoryTrials : 0 // Number of trials of the category (in a mini-block). If 0, the label does not appear.
					//Note: if no category trials, then attribute1, the one on the left, is considered the single attribute.
				}, 
				{ 
					instHTML : '', 
					block : 2, 
					miniBlocks : 1, 
					singleAttTrials : 10, 
					sharedAttTrials : 7, 
					categoryTrials : 7
				}, 
				{ 
					instHTML : '', 
					block : 3, 
					miniBlocks : 3, 
					singleAttTrials : 10, 
					sharedAttTrials : 7, 
					categoryTrials : 7
				}, 
				{ 
					instHTML : '', 
					block : 4, 
					miniBlocks : 1, 
					singleAttTrials : 10, 
					sharedAttTrials : 7, 
					categoryTrials : 7
				}, 
				{ 
					instHTML : '', 
					block : 5, 
					miniBlocks : 3, 
					singleAttTrials : 10, 
					sharedAttTrials : 7, 
					categoryTrials : 7
				}
			],
		instTemplatePractice : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks</u><br/><br/></p>' + 
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Put a left finger on the <b>E</b> key for items that belong to the category ' + 
				'<font color="#0000FF">attribute1</font>.<br/>' + 
				'Put a right finger on the <b>I</b> key for items that belong to the category ' + 
				'<font color="#0000FF">attribute2</font>.<br/>' + 
				'Items will appear one at a time.<br/><br/>' + 
				'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' + 
				'Press the other key to continue.<br/><br/>' + 
				'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>', 
		instTemplateCategoryRight : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' + 
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Put a left finger on the <b>E</b> key for items that belong to the category ' + 
				'<font color="#0000FF">attribute1</font>.<br/>' + 
				'Put a right finger on the <b>I</b> key for items that belong to the category ' + 
				'<font color="#0000FF">attribute2</font> ' +
				'and for items that belong to the category <font color="#336600">thecategory</font>.<br/>' + 
				'Items will appear one at a time.<br/><br/>' + 
				'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' + 
				'Press the other key to continue.<br/><br/>' + 
				'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>', 
		instTemplateCategoryLeft : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' + 
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Put a left finger on the <b>E</b> key for items that belong to the category ' + 
				'<font color="#0000FF">attribute1</font> ' +
				'and for items that belong to the category <font color="#336600">thecategory</font>.<br/>' + 
				'Put a right finger on the <b>I</b> key for items that belong to the category ' + 
				'<font color="#0000FF">attribute2</font>.<br/>' + 
				'Items will appear one at a time.<br/><br/>' + 
				'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' + 
				'Press the other key to continue.<br/><br/>' + 
				'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>', 
  base_url : {//Where are your images at?
    image : 'https://baranan.github.io/minno-tasks/images/'
  }}
  );
  });
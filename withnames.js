define(['pipAPI', 'https://baranan.github.io/minno-tasks/quiat8.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Chinese', //Will appear in the data and in the default feedback message.
			title : {
				media : {word : 'Chinese'}, //Name of the category presented in the task.
				css : {color:'#336600','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
		{word: 'Jia Hui'},
			{word: 'Jia Ying'},
			{word: 'Jia Yi'},
			{word: 'Xin Yi'},
			{word: 'Jia Min'},
			{word: 'Hui Min'},
			{word: 'Xin Hui'},
			{word: 'Li Xuan'},
			{word: 'Shi Ting'},
			{word: 'Hui Ting'}
			],
			//Stimulus css (style)
			stimulusCss : {color:'#336600','font-size':'2.3em'}
		},	
		category2 : {
			name : 'Malay', //Will appear in the data and in the default feedback message.
			title : {
				media : {word : 'Malay'}, //Name of the category presented in the task.
				css : {color:'#336600','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
		{word: 'Siti'},
			{word: 'Syafiqah'},
			{word: 'Fatimah'},
			{word: 'Aisha'},
			{word: 'Nadia'},
			{word: 'Sharifah'},
			{word: 'Nabilah'},
			{word: 'Nazira'},
			{word: 'Nurin'},
			{word: 'Fatin'}
			],
			//Stimulus css (style)
			stimulusCss : {color:'#336600','font-size':'2.3em'}
		},
		attribute1 : {
			name : 'Black people',
			title : {
				media : {word : 'Black people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'black1.jpg'}, 
    			{image : 'black2.jpg'}, 
    			{image : 'black3.jpg'}, 
    			{image : 'black4.jpg'}, 
    			{image : 'black5.jpg'}, 
    			{image : 'black6.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		category2 :{
			name : 'White people', //Will appear in the data.
			title : {
				media : {word : 'White people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'yf1.jpg'}, 
    			{image : 'yf4.jpg'}, 
    			{image : 'yf5.jpg'}, 
    			{image : 'ym2.jpg'}, 
    			{image : 'ym3.jpg'}, 
    			{image : 'ym5.jpg'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		} 
	});
});
// My Scripts
$(document).foundation();

// go Motal!
$('#myModal').foundation('reveal', 'open');
// changing  welcome Quote
// Changing BlockQuote and Header Img
		var limit = 3;
		var numRand = Math.floor(Math.random()*limit);

		
		// store names of CSS classes
		var bg0 = 'bg0';
		var bg1 = 'bg1';
		var bg2 = 'bg2';

		//welcome messages
		var msg0 = '"The beautiful thing about learning is noboy can take it away from you" - B.B King';
		var msg1 = '"Education is the most powerful weapon which you can use to change the world" - B.B King';
		var msg2 = '"Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young" -B.B King';


		// concatenate 'bg' plus number between 0-to-2
		$('header div').addClass('bg' + numRand);
		$('blockquote').text( eval('msg' + numRand) );
	

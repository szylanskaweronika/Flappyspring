var game = new Phaser.Game(400, 500);

var mainState = {
	preload: function(){
		//wrzucanie pliku z obrazkami i audio


	},

	create: function(){
		//ustawianie na miejscu obiektów, które mają się pojawić po starcie gry 

	},

	upload: function(){
		//co ma sie zmieniać w czasie 

	},
};

game.state.add('main', mainState);
game.state.start('main');

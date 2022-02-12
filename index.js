const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const alphabet = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()_+,./;|<>?';

const fontSize = 16;
const columns = canvas.width / fontSize;

const Chars = [];

for( let x = 0; x < columns; x++ ) {
	Chars[x] = Math.floor(Math.random()*columns);
}

const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);
	
	context.fillStyle = '#0F0';
	context.font = fontSize + 'px monospace';

	for(let i = 0; i < Chars.length; i++) {
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		context.fillText(text, i*fontSize, Chars[i]*fontSize);
		
		if(Chars[i]*fontSize > canvas.height && Math.random() > 0.975){
			Chars[i] = 0;
        }
		Chars[i]++;
	}
};

setInterval(draw, 50);

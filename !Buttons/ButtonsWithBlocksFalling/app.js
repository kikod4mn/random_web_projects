document.addEventListener('DOMContentLoaded', () => {
	const buttonElements   = document.querySelectorAll('.button__fire');
	const canvas           = document.getElementById('canvas1');
	const ctx              = canvas.getContext('2d');
	let buttonMeasurements = [];
	let particlesArray     = [];
	let activeButton       = -1;
	
	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight;
	
	function measureButtons() {
		buttonMeasurements = [];
		buttonElements.forEach(button => {
			buttonMeasurements.push(button.getBoundingClientRect());
		});
	}
	
	function handleParticles() {
		for (let i = 0; i < particlesArray.length; i++) {
			for (let y = i; y < particlesArray.length; y++) {
				let distanceX   = particlesArray[i].x - particlesArray[y].x;
				let distanceY   = particlesArray[i].y - particlesArray[y].y;
				let distance    = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
				let opacity     = particlesArray[i].size / 80 + particlesArray[y].size / 80;
				ctx.strokeStyle = `rgba(255,255,255,${ opacity })`;
				if (distance < 80) {
					ctx.beginPath();
					ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
					ctx.lineTo(particlesArray[y].x, particlesArray[y].y);
					ctx.stroke();
				}
			}
			particlesArray[i].update();
			particlesArray[i].draw();
			if (particlesArray[i].size <= 1) {
				particlesArray.splice(i, 1);
				i--;
			}
		}
	}
	
	function createParticle() {
		if (activeButton > -1) {
			let size = Math.random() * 40 + 10;
			let x    = Math.random() * (buttonMeasurements[activeButton].width - size * 2) + buttonMeasurements[activeButton].x + size;
			let y    = buttonMeasurements[activeButton].y + 40;
			particlesArray.push(new Particle(x, y, size));
		}
	}
	
	function animateParticles() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		createParticle();
		handleParticles();
		requestAnimationFrame(animateParticles);
	}
	
	buttonElements.forEach(button => {
		button.addEventListener('mouseenter', () => {
			activeButton = button.dataset.number;
		});
		button.addEventListener('mouseleave', () => {
			activeButton = -1;
		});
	});
	
	class Particle {
		x;
		y;
		size;
		weight;
		directionX;
		
		constructor(x, y, size) {
			this.x          = x;
			this.y          = y;
			this.size       = size;
			this.weight     = Math.random() * 1.5 + 1.5;
			this.directionX = Math.random() * 2;
		}
		
		update() {
			this.y += this.weight;
			if (this.size >= 0.3) this.size -= 0.2;
		}
		
		draw() {
			ctx.fillStyle = '#ffffff';
			ctx.fillRect(this.x, this.y, this.size, this.size);
		}
	}
	
	measureButtons();
	animateParticles();
	
	window.addEventListener('resize', () => {
		canvas.width  = window.innerWidth;
		canvas.height = window.innerHeight;
		measureButtons();
	});
});
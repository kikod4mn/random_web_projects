document.addEventListener('DOMContentLoaded', () => {
	const canvas                 = document.getElementById('canvas--001');
	const ctx                    = canvas.getContext('2d');
	let drawing                  = false;
	canvas.width                 = window.innerWidth;
	canvas.height                = window.innerHeight;
	ctx.lineWidth                = 0.2;
	ctx.globalCompositeOperation = 'source-over';
	
	class Root {
		x;
		y;
		speedX;
		speedY;
		maxSize;
		size;
		sizeVelocity;
		angleX;
		angleXVelocity;
		angleY;
		angleYVelocity;
		lightness;
		
		constructor(x, y) {
			this.x              = x;
			this.y              = y;
			this.speedX         = Math.random() * 4 - 2;
			this.speedY         = Math.random() * 4 - 2;
			this.maxSize        = Math.random() * 7 + 5;
			this.size           = Math.random() + 2;
			this.sizeVelocity   = Math.random() * 0.2 + 0.05;
			this.angleX         = Math.random() * 6.2;
			this.angleXVelocity = Math.random() * 0.6 - 0.3;
			this.angleY         = Math.random() * 6.2;
			this.angleYVelocity = Math.random() * 0.6 - 0.3;
			this.lightness      = 10;
		}
		
		update() {
			
			this.x += this.speedX + Math.sin(this.angleX);
			this.y += this.speedY + Math.sin(this.angleY);
			this.size += this.sizeVelocity;
			this.angleX += this.angleXVelocity;
			this.angleY += this.angleYVelocity;
			if (this.lightness < 70) {
				this.lightness += 0.25;
			}
			if (this.size < this.maxSize) {
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
				ctx.fillStyle = `hsl(140,100%,${ this.lightness }%)`;
				ctx.fill();
				ctx.stroke();
				requestAnimationFrame(this.update.bind(this));
			} else {
				const flower = new Flower(this.x, this.y, this.size);
				flower.grow();
			}
		}
	}
	
	class Flower {
		x;
		y;
		size;
		sizeVelocity;
		maxSize;
		image;
		frameSize = 100;
		frameY;
		frameX;
		willFlower;
		
		constructor(x, y, size) {
			this.x            = x;
			this.y            = y;
			this.size         = size;
			this.sizeVelocity = Math.random() * 0.2 + 0.8;
			this.maxSize      = this.size + Math.random() * 120;
			this.image        = new Image();
			this.image.src    = 'flowers.png';
			this.frameY       = Math.floor(Math.random() * 3);
			this.frameX       = Math.floor(Math.random() * 3);
			this.size > 10 ? this.willFlower = true : this.willFlower = false;
			this.angle         = 0;
			this.angleVelocity = Math.random() * 0.05 - 0.025;
		}
		
		grow() {
			if (this.size < this.maxSize && this.willFlower === true) {
				this.size += this.sizeVelocity;
				this.angle += this.angleVelocity;
				ctx.save();
				ctx.translate(this.x, this.y);
				ctx.rotate(this.angle);
				ctx.drawImage(
					this.image,
					this.frameX * this.frameSize,
					this.frameY * this.frameSize,
					this.frameSize,
					this.frameSize,
					0 - this.size / 2,
					0 - this.size / 2,
					this.size,
					this.size,
				);
				ctx.restore();
				requestAnimationFrame(this.grow.bind(this));
			}
		}
	}
	
	window.addEventListener('mousemove', evt => {
		if (drawing === true) {
			for (let i = 0; i < 3; i++) {
				const root = new Root(evt.x, evt.y);
				root.update();
			}
		}
	});
	window.addEventListener('mousedown', evt => {
		for (let i = 0; i < 30; i++) {
			const root = new Root(evt.x, evt.y);
			root.update();
		}
		drawing = true;
	});
	window.addEventListener('mouseup', () => drawing = false);
});
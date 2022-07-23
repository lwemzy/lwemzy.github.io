'use strict';

window.onload = function () {
	let animationIntervalId;
	const DEFAULT_ANIMATION_INTERVAL_MS = 250;
	const TURBO_ANIMATION_INTERVAL_MS = 50;

	document
		.getElementById('animation')
		.addEventListener('change', displayAnimation);
	document
		.getElementById('fontsize')
		.addEventListener('change', changeFontSize);
	document.getElementById('start').addEventListener('click', startAnimation);
	document.getElementById('stop').addEventListener('click', stopAnimation);
	document.getElementById('turbo').addEventListener('change', function () {
		console.log('animation has started');
		if (document.getElementById('start').hasAttribute('disabled')) {
			clearInterval(animationIntervalId);
			const animation = document.getElementById('animation').value;
			const timeout = this.checked
				? TURBO_ANIMATION_INTERVAL_MS
				: DEFAULT_ANIMATION_INTERVAL_MS;
			animationIntervalId = createAnimationInterval(animation, timeout);
		}
	});

	function displayAnimation() {
		const animation = document.getElementById('animation').value;
		document.getElementById('text-area').value = ANIMATIONS[animation];
	}

	function changeFontSize() {
		document.getElementById('text-area').style.fontSize =
			document.getElementById('fontsize').value;
	}

	function startAnimation() {
		document.getElementById('start').disabled = true;
		document.getElementById('stop').disabled = false;
		document.getElementById('animation').disabled = true;
		clearInterval(animationIntervalId);

		const animation = document.getElementById('animation').value;
		const isTurbo = document.getElementById('turbo').checked;
		const timeout = isTurbo
			? TURBO_ANIMATION_INTERVAL_MS
			: DEFAULT_ANIMATION_INTERVAL_MS;
		animationIntervalId = createAnimationInterval(animation, timeout);
	}

	const createAnimationInterval = (animation, timeout) => {
		const frames = ANIMATIONS[animation].split('=====');
		let loopIndex = -1;
		return setInterval(function () {
			++loopIndex;
			if (loopIndex >= frames.length) {
				loopIndex = 0;
			}
			document.getElementById('text-area').value = frames[loopIndex];
		}, timeout);
	};

	function stopAnimation() {
		document.getElementById('stop').disabled = true;
		document.getElementById('start').disabled = false;
		document.getElementById('animation').disabled = false;
		clearInterval(animationIntervalId);
	}
};

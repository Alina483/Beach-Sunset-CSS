const scene = document.querySelector(".sunset");
cd
scene.addEventListener("pointermove", (event) => {
	const x = event.clientX / window.innerWidth - 0.5;
	const y = event.clientY / window.innerHeight - 0.5;

	scene.style.setProperty("--pointer-x", x);
	scene.style.setProperty("--pointer-y", y);

	document.querySelector(".sun").style.marginLeft = `${x * 12}px`;
	document.querySelector(".boat").style.marginLeft = `${x * -8}px`;
	document.querySelector(".palm").style.marginLeft = `${x * -5}px`;
});

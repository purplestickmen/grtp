const stage1 = document.getElementById('stage1');
const stage2a = document.getElementById('stage2a');
const stage2b = document.getElementById('stage2b');
const stage3 = document.getElementById('stage3');
const stage4 = document.getElementById('stage4');
const stage5 = document.getElementById('stage5');
const stage6 = document.getElementById('stage6');

const stage1_panel = document.getElementById('stage1_panel');
const stage2a_panel = document.getElementById('stage2a_panel');
const stage2b_panel = document.getElementById('stage2b_panel');
const stage3_panel = document.getElementById('stage3_panel');
const stage4_panel = document.getElementById('stage4_panel');
const stage5_panel = document.getElementById('stage5_panel');
const stage6_panel = document.getElementById('stage6_panel');

stage1.addEventListener('focus', () => {
	stage1_panel.classList.add("overlay-show");
	stage2a_panel.classList.remove("overlay-show");
	stage2b_panel.classList.remove("overlay-show");
	stage3_panel.classList.remove("overlay-show");
	stage4_panel.classList.remove("overlay-show");
	stage5_panel.classList.remove("overlay-show");
	stage6_panel.classList.remove("overlay-show");
});
stage2a.addEventListener('focus', () => {
	stage1_panel.classList.remove("overlay-show");
	stage2a_panel.classList.add("overlay-show");
	stage2b_panel.classList.remove("overlay-show");
	stage3_panel.classList.remove("overlay-show");
	stage4_panel.classList.remove("overlay-show");
	stage5_panel.classList.remove("overlay-show");
	stage6_panel.classList.remove("overlay-show");
});
stage2b.addEventListener('focus', () => {
	stage1_panel.classList.remove("overlay-show");
	stage2a_panel.classList.remove("overlay-show");
	stage2b_panel.classList.add("overlay-show");
	stage3_panel.classList.remove("overlay-show");
	stage4_panel.classList.remove("overlay-show");
	stage5_panel.classList.remove("overlay-show");
	stage6_panel.classList.remove("overlay-show");
});
stage3.addEventListener('focus', () => {
	stage1_panel.classList.remove("overlay-show");
	stage2a_panel.classList.remove("overlay-show");
	stage2b_panel.classList.remove("overlay-show");
	stage3_panel.classList.add("overlay-show");
	stage4_panel.classList.remove("overlay-show");
	stage5_panel.classList.remove("overlay-show");
	stage6_panel.classList.remove("overlay-show");
});
stage4.addEventListener('focus', () => {
	stage1_panel.classList.remove("overlay-show");
	stage2a_panel.classList.remove("overlay-show");
	stage2b_panel.classList.remove("overlay-show");
	stage3_panel.classList.remove("overlay-show");
	stage4_panel.classList.add("overlay-show");
	stage5_panel.classList.remove("overlay-show");
	stage6_panel.classList.remove("overlay-show");
});
stage5.addEventListener('focus', () => {
	stage1_panel.classList.remove("overlay-show");
	stage2a_panel.classList.remove("overlay-show");
	stage2b_panel.classList.remove("overlay-show");
	stage3_panel.classList.remove("overlay-show");
	stage4_panel.classList.remove("overlay-show");
	stage5_panel.classList.add("overlay-show");
	stage6_panel.classList.remove("overlay-show");
});
stage6.addEventListener('focus', () => {
	stage1_panel.classList.remove("overlay-show");
	stage2a_panel.classList.remove("overlay-show");
	stage2b_panel.classList.remove("overlay-show");
	stage3_panel.classList.remove("overlay-show");
	stage4_panel.classList.remove("overlay-show");
	stage5_panel.classList.remove("overlay-show");
	stage6_panel.classList.add("overlay-show");
});

;

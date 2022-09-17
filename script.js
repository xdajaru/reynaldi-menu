const res = [
	{
		id: "1",
		menu: "greeting",
		parent: "",
	},
	{
		id: "11",
		menu: "produk",
		parent: "1",
	},
	{
		id: "111",
		menu: "simpanan",
		parent: "11",
	},
	{
		id: "1111",
		menu: "giro",
		parent: "111",
	},
	{
		id: "1112",
		menu: "tabungan",
		parent: "111",
	},
	{
		id: "112",
		menu: "pinjaman",
		parent: "11",
	},
	{
		id: "12",
		menu: "promo",
		parent: "1",
	},
];

const resUpdate = res.map((el) => {
	return {
		id: el.id,
		menu: el.menu,
		parent: el.parent,
		level: el.id.split("").length,
	};
});

console.log(resUpdate);

const div = document.querySelector(".listMenu");
const listLevel = [];

resUpdate.forEach((el) => {
	if (!listLevel.includes(el.level)) {
		listLevel.push(el.level);
	}
});

listLevel.forEach((el) => {
	div.insertAdjacentHTML("afterbegin", `<ul class=level${el}></ul>`);
});

const addLi = function (level, data) {
	const ul = document.querySelector(`.level${level}`);

	ul.insertAdjacentHTML("afterbegin", `<li>${data}</li>`);
};

resUpdate.forEach((el) => {
	addLi(el.level, el.menu);
});

const lv2 = document.querySelector(".level2");
document.querySelector(".level1").append(lv2);

const maxLev = Math.max(...listLevel);

for (i = 1; i <= maxLev; i++) {
	if (i + 1 > maxLev) {
		break;
	}
	let parent = document.querySelector(`.level${i}`);
	let child = document.querySelector(`.level${i + 1}`);

	parent.append(child);
}

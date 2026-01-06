// Oson Masalalr
// 1-masala
const odamlar = {
  Anvar: 18,
  Jamila: 20,
  Mirza: 19,
};
console.log("Talabalar soni:", Object.keys(odamlar).length);

// 2-masala
let mahsulotlar = {
  olma: 3000,
  banan: 4000,
  nok: 2000,
};

console.log(
  "Narxlar yig'indisi:",
  Object.values(mahsulotlar).reduce((acc, number) => acc + number, 0)
);

// 3-masala
let jadval = {
  dushanba: "Matematika",
  seshanba: "Matematika",
  chorshanba: "Matematika",
  payshanba: "Matematika",
};
console.log(Object.keys(jadval));

// 4-masala
let shaxs = {
  ism: "Anvar",
  yosh: 25,
};
Object.freeze(shaxs);
shaxs.ism = "Asadbek";
console.log(shaxs);

// 5-masala
let vazifalar = {
  uy_ishi: true,
  dastur_yaratish: false,
  sport: true,
};
let bajarilgan = Object.values(vazifalar).filter((val) => val === true);
let bajarilmagan = Object.values(vazifalar).filter((val) => val === false);
console.log("Tugatilgan:", bajarilgan.length);
console.log("Tugatilmagan:", bajarilmagan.length);

// O'rta Topshiriqlar
// 6-masala
let mahsulotlar2 = {
  olma: 3000,
  nok: 4000,
  banan: 2000,
};
const mahsulotlar2f = Object.entries(mahsulotlar2).filter(
  ([str, number]) => number > 3000
);
console.log(mahsulotlar2f);

// 7-masala
let sinf = {
  Ahmad: 15,
  Murod: -3,
  Javohir: 17,
};

const sinfF = Object.entries(sinf).reduce((acc, [str, num]) => {
  if (num > 0) {
    acc.push([str, num]);
  }
  return acc;
});
console.log(sinfF);

// 8-masala
let bankHisobi = { balans: 500000 };
Object.defineProperty(bankHisobi, "pinCode", {
  value: 1234,
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(bankHisobi);
console.log(bankHisobi.pinCode);

// 9-masala
class toliqIsm {
  constructor(ism, familiya) {
    (this.ism = ism), (this.familiya = familiya);
    console.log(ism, familiya);
  }
}

let a = new toliqIsm("Asadbek", "Shodiyev");

// 10-masala
let arr10 = [10, 20, 30];
let arr10Summ = arr10.reduce((acc, num) => acc + num, 0);
console.log(arr10Summ);

// 11-masala
let mahsulotlar11 = {
  olma: 3000,
  nok: 2000,
};
function mahsulotniChiqar() {
  return this.olma;
}
let bind = mahsulotniChiqar.bind(mahsulotlar11);
console.log("Mahsulot narxi:", bind());

// 12-masala
let narxlar = [500, 1000, 1500];
function narxlarSumm(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}
let summ = narxlarSumm.apply(null, [narxlar]);
console.log("Yig'indi", summ);

// 13-masala
let savdo = {
  olma: 100,
  nok: 150,
  banan: 80,
};

savdo.foyda = function () {
  let qiymatlar = Object.values(this);
  let summ = qiymatlar.reduce((acc, num) => acc + num, 0);
  return summ;
};

console.log("Foyda", savdo.foyda());

// 14-masala
let sinf14 = {
  oquvchilar: 25,
  oqituvchi: 1,
};
Object.seal(sinf14);
sinf14.oquvchilar = 35;
console.log(sinf14);

// 15-masala
let shaxs15 = { ism: "Olim", yosh: 25, salomlash };
function salomlash() {
  console.log("Salom, men", this.ism + "man !");
}
shaxs15.salomlash();

// 16-masala
class Odam {
  constructor(ism, age) {
    this.ism = ism;
    this.age = age;
  }

  gapir() {
    console.log(this.ism + " gapir");
  }
}
let Ahror = new Odam("Ahror", 24);
Ahror.gapir();

// 17-masala
let katalog = {
  texnika: {
    komp: 5000,
    printer: 3000,
  },
  oziq_ovqat: {
    non: 1000,
    gruch: 5000,
  },
};

console.log(
  "Texnika:",
  Object.values(katalog.texnika).reduce((acc, num) => acc + num, 0)
);
console.log(
  "Oziq ovqat:",
  Object.values(katalog.oziq_ovqat).reduce((acc, num) => acc + num, 0)
);


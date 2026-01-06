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

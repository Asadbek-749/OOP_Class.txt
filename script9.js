// 1-masala
function createValidator(pass) {
  return function (soz) {
    return soz === pass;
  };
}
let tekshir = createValidator("sirliParol");
console.log(tekshir("sirliParol"));
console.log(tekshir("sirParol"));

// 2-masala
function createLimitedCall(fn, limit) {
  let count = 0;
  return function () {
    count++;
    if (count <= limit) {
      fn();
    } else {
      console.log("Limit tugadi");
    }
  };
}
let salomBer = createLimitedCall(() => console.log("Salom !"), 3);
salomBer();
salomBer();
salomBer();
salomBer();
salomBer();

// 3-masala
function createAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      console.log("Balans:", balance);
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log("Balans:", balance);
      } else {
        console.log("Yetarli mablag' yo'q");
      }
    },
  };
}

let account = createAccount(1000);

account.deposit(500);
account.withdraw(200);
account.withdraw(2000);

// 4-masala
function createSentence() {
  let count = [];
  return {
    add(soz2) {
      count.push(soz2);
      console.log(count.join(" "));
    },
  };
}
let soz = createSentence();
soz.add("Salom");
soz.add("Asadbek");
soz.add("Qalaysan");

// 5-masala
function guessGame(secretNumber) {
  let number = secretNumber;
  let count = 0;
  return {
    tahminiySon(num2) {
      if (num2 > number) {
        count++;
        console.log("Kitirilgan son sirli sondan katta !");
      } else if (num2 < number) {
        count++;
        console.log("Kitirilgan son sirli sondan kichik !");
      } else {
        console.log("Son Topildi :)");
        count++;
      }
      console.log("Urunishlar soni:", count);
    },
  };
}
let sirliSon = guessGame(35);
sirliSon.tahminiySon(15);
sirliSon.tahminiySon(35);

// 6-masala
function arithmeticMean() {
  let sum = 0;
  let count = 0;
  //   let arr = [];
  return {
    add(number) {
      sum += number;
      count++;
      console.log("Sonlarni o'rta arifmetigi:", sum / count);
      // 2-usul
      //   arr.push(number);
      //   console.log(
      //     "Sonlarni o'rta arifmetigi:",
      //     arr.reduce((acc, num) => acc + num / arr.length, 0)
      //   );
    },
  };
}
let sonlar = arithmeticMean();
sonlar.add(12);
sonlar.add(10);

// 10-masala
function multiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

console.log(multiply(5)(2)(2));

function selamVer(isim: string) {
  return "Merhaba " + isim;
}

let mesaj = selamVer("Yılmaz");

console.log(mesaj);
//----------------------

let sayi: number; // değişken tipini belitmek için : koyup yazarız.
sayi = 10;
sayi = 10.4;

//----------------

let sehir: string;
sehir = "Antalya";
sehir = "Ankara";

//-----------------

let dogruMu: boolean = true;
dogruMu = true;
dogruMu = false;

//-----------------

let sayilar: number[] = [1, 2, 3]; // Number tipinde array
let sayilar2: Array<number> = [1, 2, 3];

//----------------

let dizi: [number, string] = [2, "Ankara"]; // Dizi içinde hem string hem number olsun istediğim zaman

//-----------------

enum Renk {
  Kirmizi = 1,
  Siyah,
  Mavi
} // =1 dediğiiz için index 1 den başlar gibi düşünebilirsin

let renk: Renk = Renk.Kirmizi; // Tipi Renk olsun gibi.
console.log(renk); // çıktı 1

//----------------

let deger: any = "Ankara"; // any ile emin olmadıgımız durumlarda kullanırız bu veri tipini yani. Sonradan number veya obje aslında üm veri tiplerini de atayabiliriz.
deger = 2;
deger = {};

//-----------------

let deger2: void = undefined;

function selamVer2(): void {
  // yani burda void ile diyoruz ki bir şey döndürmek istemiyorum. Return kullanamazsın yani
  console.log("Merhaba");
}

//-----------------

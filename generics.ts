// Bir veri tabanına bağlanıyoruz bir apiye msela . Api bize bir data veriyor. Gelen datayı hangi formatta istiyoruz. Generic ile tip güvenliği.

function deger(x: number): number {
  return x;
}

function deger2(x: string): string {
  return x;
}
let sayi = deger(10);
console.log(sayi);

let sehir = deger2("Antalya");
console.log(sehir);

function deger3<T>(x: T): T {
  // Tipi kendim belirleyecem
  return x;
}

let sayi3 = deger3<number>(55); // Yani çalışacağım tip numberdır dedık.
let isim = deger3<string>("Yılmaz");
console.log(sayi3, isim);

//--------
//Class yapısında Generic kullanma


class GenericClass<T> {
  degisken: T;
  fonksiyon(parametre: T): T {
    return parametre;
  }
}

let sinif = new GenericClass<number>()
sinif.fonksiyon(2)
sinif.degisken=4
function topla(x, y) {
  return x + y;
}

function topla2(x: number, y: number): number {
  return x + y;
}

let topla3 = function(x: number, y: number = 22): number {
  // burada y'ye default deger olarak 22 verdik.
  return x + y;
};

let topla4 = function(x: number, y?: number): number {
  // burada y? dersek y deerını vermeyebılırız ama ıf kosulu ıle kontrol etmezsek number+undefined olacagından snuc NaN (Not a number ) çıkar.
  // Ayrıca ? kısım hep en son degerde olmalı
  if (y === undefined) {
    return x;
  } else {
    return x + y;
  }
};
console.log(topla(5, 10));
console.log(topla("Ankara", 10));
console.log(topla2(5, 10));
console.log(topla3(3, 10));
console.log(topla4(3, 4));

//--------------

// Rest Parametresi

function davetEt(ilkDavetli: string, ...digerleri: string[]): string {
  return ilkDavetli + " " + digerleri.join(" ");
}

console.log(davetEt("Yılmaz", "Özlem", "Metin"));

// üç nokta kaç kişi oldugu belli degıl. Join de digelerini aralarında bosluk bırakarak ekle dedık yukarda ki işlem.

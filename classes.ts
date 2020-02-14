// Normal Class yapısından farkı constructor içinde tanımladıgımız degerlerı dışardada tanımlamamız gerkıyor .
//Çünkü veri tipine göre yazıyoruz typescriptte.

class Ev {
  odaSayisi: number;
  pencereSayisi: number;
  kat: number;

  constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
    this.odaSayisi = odaSayisi;
    this.pencereSayisi = pencereSayisi;
    this.kat = kat;
  }

  yemekYe() {
    console.log(this.kat + ".kattaki evde yemek yendi");
  }
}

const ev = new Ev(6, 10, 8);

ev.yemekYe();
console.log(ev.kat);

// Inheritance-- Kalıtım

class Kisi {
  private isim: string; // private sadece tanımlandıgı class ıcınde gecerli.
                        //Ama kalıtım yaptıgı dıger class'larda da kullanılamaz bunun ıcın ıse protected kullanırız.

  protected soyIsim: string;

  public tcNumarasi: number; // publi ile de class'ların dısında da kullanablırız.
  kaydet() {
    console.log("Kişi Kaydedildi");
  }
}

class Musteri extends Kisi {
  satısYap() {
    console.log("Satış Yapıldı");
  }
}

class Personel extends Kisi {
  maasOde() {
    console.log("Maaş Ödendi");
  }
}

let musteri = new Musteri();
musteri.kaydet();
musteri.satısYap();

let personel = new Personel();
personel.kaydet();
personel.maasOde();

let kisi = new Kisi();
kisi.kaydet();

// get-set

class Kisi2 {

    private _isim :string

    get isim() : string {
        return "Sayın " + this._isim;
    }

    set isim(ad:string) {
        this._isim=ad;
    }
}

const kisi2= new Kisi2();
kisi2.isim="Yılmaz";
console.log(kisi2.isim);

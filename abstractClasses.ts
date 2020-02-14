/*
    Ortak olan ve olmayan sınıfları belirlemek için kullanılır.
    Sınıftır fakat tek başlarına kullanılmazlar.
    Inheritance yöntemiyle yani miras verildiklerinde anlamlı olurlar. 
    Abstract classlarda tanımlanmış ve tanımlamadığımız operasyonlar tanımlarız.
    Miras alan sınıf tanımlanan operasyonu aynen kullanır. Tanımlanmamış operasyonları kendi kullanımına göre düzenler.
*/

abstract class Database {
  constructor() {}

  Ekle(): void {
    console.log("Kayıt Edildi.");
  } //Tamamlanmış

  abstract Duzenle(): void;
}

class MSSQL extends Database {
  Duzenle(): void {
    console.log("MSSQL Düzenleme İşlemi Yapıldı");
  }
}

class Nodejs extends Database {
  Duzenle(): void {
    console.log("NODEJS Düzenleme İşlemi Yapıldı");
  }
}

let database: Database;

database = new MSSQL();
database.Duzenle();
database = new Nodejs();
database.Duzenle();

/*
    abstract olarak işaretlediğimiz Duzenle metodunu tanımlamıyoruz ki miras alan sınıf kendine göre düzenlesin. MSSQL sınıfı kalıtım aldı ve duzenle metodunu kendine göre tanımladı. Aynı şekilde başka bir veritabanı kalıtım aldığında Oluşturacak. Ekleme işlemi hepsi için ortak.
*/

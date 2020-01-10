// Abstract class lardan farklı olarak sadece tanımlanmamış imzaları barındırır.

interface Product {
  id: number;
  name: string;
  unitPrice: number;
}
// Yukarıda ki yapıyı class ilede yapabilirdik. Ama class ile yaparsak tüm degerleri vermemize gerek kalmaz. Interface tum degerlerın verılmesı gereken durumlarda kullanırız.

function save(product: Product) {
  console.log(product.name + "kaydedildi");
}

save({ id: 1, name: "Laptop", unitPrice: 5500 });

interface PersonService {
  save();
}
class CustomerService implements PersonService {
  save() {
    console.log(
      "Abstract larda kalıtım vermek için extends idi. Interfacelerde implements."
    );
  }
}

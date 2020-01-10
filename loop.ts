
let sehirler = ["Antalya","Ankara","İstanbul", "İzmir"]

// Birinci kullanım
for(let i in sehirler) {
    console.log(i)
}

// Bu kullanımda index numaralı çıktı verir.

// ikinci kullanım
for(let i of sehirler) {
    console.log(i)
}

// Bu kullanımda ise data'lar gelir. Yani Antalya Ankara..
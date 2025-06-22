/**
 * Menentukan bilangan ganjil dan genap
 * 
 * Buatlah program untuk menentukan input bilangan apakah ganjil atau genap. Gunakan if-else dan function yang mengembalikan hasil "ganjil"/"genap"
 */

function checkOddEven() {
    if(typeof number !== "number"){
            return "invalid input"
        }
        if(number % 2 === 0){
            return "genap"
        } else{
            return "ganjil"
        }
}

console.log(checkOddEven(5),"Line 18 (soal 1)"); // ganjil
console.log(checkOddEven(2),"Line 19 (soal 1)"); // genap
console.log(checkOddEven("enam"),"Line 20 (soal 1)"); // invalid input



/**
 * Menentukan usia dewasa
 * 
 * Buat sebuah program yang meminta usia seseorang, lalu gunakan if-else untuk menampilkan apakah seseorang tersebut sudah dewasa (>=18 tahun) atau belum. Gunakan if-else dan function yang mengembalikan string
 */

function checkMature() {
    if(typeof umur !== "number" || umur < 0){
        return "invalid input"
    }
    if(umur >= 18){
        return "Dewasa"
    } else{
        return "Belum dewasa"
    }
}

console.log(checkMature(18),"Line 41 (soal 2)"); // Dewasa
console.log(checkMature(17),"Line 42 (soal 2)"); // Belum dewasa
console.log(checkMature("enam"),"Line 43 (soal 2)"); // invalid input
console.log(checkMature(-1),"Line 44 (soal 2)"); // invalid input



/**
 * Menentukan score student
 * 
 * Buat program yang mengubah nilai angka ke dalam nilai huruf (A, B, C, D, E) berdasarkan rentang berikut:
 * 90 - 100: A
 * 80 - 89: B
 * 70 - 79: C
 * 60 - 69: D
 * < 60: E
 * Gunakan if-else dan function yang mengembalikan string
 */

function scoreReport() {
    if(typeof nilai !== "number" || nilai < 0 || nilai > 100) {
        return "invalid input"
    }
    if(nilai >= 90){
        return "A"
    } else if(nilai >= 80){
        return "B"
    } else if(nilai >= 70){
        return "C"
    } else if(nilai >= 60){
        return "D"
    } else{
        return "E"
    }
}

console.log(scoreReport(90),"Line 77 (soal 3)"); // A
console.log(scoreReport(89),"Line 78 (soal 3)"); // B
console.log(scoreReport(75),"Line 79 (soal 3)"); // C
console.log(scoreReport(59),"Line 80 (soal 3)"); // E
console.log(scoreReport(101),"Line 81 (soal 3)"); // invalid input
console.log(scoreReport(-1),"Line 82 (soal 3)"); // invalid input
console.log(scoreReport("sembilan puluh"),"Line 83 (soal 3)"); // invalid input



/**
 * Menampilkan Bilangan Ganjil dari 1 sampai 20
 * 
 * Buat program yang menampilkan semua bilangan ganjil dari 1 sampai 20 menggunakan for loop
 */

function loopCheckOddEven() {
    if (typeof number !== "number") {
        console.log("invalid input")
        return
    }
    for (let index = 1; index <= number; index++) {
        if (index % 2 !== 0) {
            console.log(`${index} => Bilangan Ganjil`)
        } else {
            console.log(`${index} => Bilangan Genap`)
        }
    }
    console.log("Line 105 (soal 4)")
}

loopCheckOddEven(5)
// 1 => Bilangan Ganjil
// 2 => Bilangan Genap
// 3 => Bilangan Ganjil
// 4 => Bilangan Genap
// 5 => Bilangan Ganjil
loopCheckOddEven("lima") // invalid input



/**
 * Menghitung Total Jumlah Angka
 * 
 * Buat program yang menjumlahkan semua angka dari 1 sampai dengan 100 menggunakan loop. Gunakan function yang mengirimkan value hasil penjumlahan tersebut
 */

function totalValue(inputNumber) {
    if (typeof inputNumber !== "number") {
        return "invalid input"
    }
    let totalNumber = 0
    for (let index = 1; index <= inputNumber; index++) {
        totalNumber = totalNumber + index
    }
    return totalNumber

}

console.log(totalValue(100),"Line 136 (soal 5)"); // 5050
console.log(totalValue("empat"),"Line 137 (soal 5)"); // invalid input



/**
 * Menghitung huruf vokal
 * 
 * Buat program yang menerima sebuah string, lalu hitung berapa banyak huruf vokal (a, e, i, o, u) di dalam string tersebut. Gunakan function untuk mengembalikan value total jumlah huruf vocal
 */

function checkVowels() {
    const vokal = ["a", "e", "i", "o", "u"]
    const inputChar = hurufVokal.toLowerCase().split('')
    let totalHuruf = 0
    for (let i = 0; i < hurufVokal.length; i++) {
        for (let j = 0; j < vokal.length; j++) {
            if(inputChar[i] === vokal[j]){
                totalHuruf++
            }
        }
    }
    return totalHuruf
}

console.log(checkVowels("I Love JavaScript"),"Line 161 (soal 6)"); // 6
console.log(checkVowels("mie ayam"),"Line 162 (soal 6)"); //4



/**
 * Cek karakter vokal atau konsonan
 * 
 * Buatlah sebuah fungsi untuk memeriksa apakah sebuah karakter adalah vokal atau konsonan
 * 
 * Langkah:
 * 1. Buat sebuah fungsi bernama checkVowelConsonant.
 * 2. Fungsi tersebut harus menerima satu parameter, contoh nama parameternya "char".
 * 3. Gunakan pernyataan if, else if, dan else untuk memeriksa apakah char adalah vokal atau konsonan.
 * 4. Anggap bahwa input selalu berupa SATU KARAKTER HURUF.
 * 5. RETURN string "Vokal" atau "Konsonan" sesuai dengan nilai char.
 */

function checkVowelConsonant(char) {
    // code di scope ini yaa
    let inputChar = char.toLowerCase()
    if (inputChar === 'a') {
        return "Vokal"
    } else if (inputChar === 'e') {
        return "Vokal"
    } else if (inputChar === 'i') {
        return "Vokal"
    } else if (inputChar === 'o') {
        return "Vokal"
    } else if (inputChar === 'u') {
        return "Vokal"
    } else {
        return "Konsonan"
    }
}

console.log(checkVowelConsonant('A'),"Line 197 (soal 7)"); // Output: "Vokal"
console.log(checkVowelConsonant('b'),"Line 198 (soal 7)"); // Output: "Konsonan"
console.log(checkVowelConsonant('a'),"Line 199 (soal 7)"); // Output: "Vokal"



/**
 * Menentukan kelayakan Voting
 * 
 * Buatlah sebuah fungsi JavaScript yang memeriksa apakah seseorang memenuhi syarat untuk memberikan suara dalam pemilihan berdasarkan usia.
 * 
 * Langkah:
 * 1. Buat sebuah fungsi bernama canVote.
 * 2. Fungsi tersebut harus menerima satu parameter age.
 * 3. Gunakan pernyataan if dan else untuk memeriksa apakah age lebih besar atau sama dengan 18.
 * 4. RETURN tipe data BOOLEAN, true jika age >= 18, dan false jika tidak.
 */

function canVote(age) {
    // code di scope ini yaa
    if (age >= 18) {
        return true
    } else {
        return false
    }
}

console.log(canVote(20),"Line 224 (soal 8)"); // true
console.log(canVote(17),"Line 225 (soal 8)"); // false




/**
 * Menentukan Hari dalam Seminggu
 * 
 * Buatlah sebuah fungsi JavaScript yang menerima angka dan mengembalikan nama hari dalam seminggu.
 * 
 * Langkah:
 * 1. Buat sebuah fungsi bernama getDayName.
 * 2. Fungsi tersebut harus menerima satu parameter dayNumber (1 sampai 7).
 * 3. Gunakan pernyataan if, else if, dan else untuk mengembalikan nama hari dalam seminggu:
 *      a. 1: "Senin"
 *      b. 2: "Selasa"
 *      c. 3: "Rabu"
 *      d. 4: "Kamis"
 *      e. 5: "Jumat"
 *      f. 6: "Sabtu"
 *      g. 7: "Minggu"
 * 4. RETURN "Nomor hari tidak valid" jika dayNumber tidak berada dalam rentang 1 sampai 7.
 */

function getDayName(dayNumber) {
    // code disini
    if (dayNumber > 7) {
        return "Nomor hari tidak valid"
    }
    if (dayNumber === 1) {
        return "Senin"
    } else if (dayNumber === 2) {
        return "Selasa"
    } else if (dayNumber === 3) {
        return "Rabu"
    } else if (dayNumber === 4) {
        return "Kamis"
    } else if (dayNumber === 5) {
        return "Jumat"
    } else if (dayNumber === 6) {
        return "Sabtu"
    } else if (dayNumber === 7) {
        return "Minggu"
    }
}

console.log(getDayName(1),"Line 271 (soal 9)"); // Output: "Senin"
console.log(getDayName(5),"Line 272 (soal 9)"); // Output: "Jumat"
console.log(getDayName(8),"Line 273 (soal 9)"); // Output: "Nomor hari tidak valid"




/**
 * Membalikkan Array
 * 
 * Buatlah sebuah fungsi JavaScript yang membalikkan urutan elemen dalam sebuah array menggunakan loop.
 * 
 * Langkah: 
 * 1. Buat sebuah fungsi bernama reverseArray.
 * 2. Fungsi tersebut harus menerima satu parameter berupa array arr.
 * 3. Boleh menggunakan built in function, setelah itu dicoba mengunakan loop untuk membalikkan urutan elemen dalam array tersebut.
 * 4. RETURN array yang telah dibalik.
 */

function reverseArray(arr) {
    // code disini yaa
    let revArr = []
    for (let index = arr.length - 1; index >= 0 ; index--) {
        revArr.push(arr[index])
    }
    return revArr
}

console.log(reverseArray([1, 2, 3, 4, 5]),"Line 299 (soal 10)"); // Output: [5, 4, 3, 2, 1]
console.log(reverseArray(['a', 'b', 'c']),"Line 300 (soal 10)"); // Output: ['c', 'b', 'a']



/**
 * Buat function untuk mengecek apakah input tersebut palindrome, return true jika palindrome, dan jika tidak palindrome maka return false
 * 
 */

const isPalindrome = (inputUser) => {
    const inputArr = inputUser.toLowerCase().split(' ')
    if (inputArr.length == 1) {
        const char = inputArr[0].split('')
        let revArr = []
        for (let index = char.length - 1; index >= 0 ; index--) {
            revArr.push(char[index])
        }
        let revWord
        for (let index = 0; index < revArr.length; index++) {
            if (index == 0) {
                revWord = revArr[index]
            } else {
                revWord = revWord + revArr[index]
            }
        }
        if(inputUser === revWord){
            return true
        } else{
            return false
        }
    } else {
        const char = inputArr[1].split('')
        let revArr = []
        for (let index = char.length - 1; index >= 0 ; index--) {
            revArr.push(char[index])
        }
        let revWord
        for (let index = 0; index < revArr.length; index++) {
            if (index == 0) {
                revWord = revArr[index]
            } else {
                revWord = revWord + revArr[index]
            }
        }
        if(inputArr[0] === revWord){
            return true
        } else {
            return false
        }
    }
}

console.log(isPalindrome("kasur rusak"),"Line 352 (soal 11)"); // true
console.log(isPalindrome("kodok"),"Line 353 (soal 11)"); // true
console.log(isPalindrome("makan malam"),"Line 354 (soal 11)"); // false
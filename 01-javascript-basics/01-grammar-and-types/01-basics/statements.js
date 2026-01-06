/**
 * Basics & Statements
 *
 * Tujuan:
 * - Memahami apa itu statement di JavaScript
 * - Memahami kapan semicolon wajib & kapan ASI bekerja
 *
 * Challenge:
 * 1. Tulis 5 statement satu baris TANPA semicolon
 * 2. Gabungkan 3 statement dalam satu baris → bikin error → perbaiki
 * 3. Buat contoh Automatic Semicolon Insertion (ASI) yang BERBAHAYA
 * 4. Jenis-jenis statement di JavaScript
 *
 * Test Case Wajib:
 * function testASI() {
 *   return
 *   {
 *     ok: true
 *   }
 * }
 *
 * console.log(testASI());
 *
 * TODO (WAJIB DIJELASKAN DI KOMENTAR):
 * - Apa output testASI()
 * - Kenapa return di atas bikin bug
 * - Hubungannya dengan ASI
 */

// ===== 1. Tulis 5 statement satu baris TANPA semicolon =====
let profesi = "frontend developer"
const isStudent = false
let born = 2003
let city = "Bandung"
const country = "Indonesia"

// ===== 2. Gabungkan 3 statement dalam satu baris =====
// let masterDegree = false const job = "frontend developer" let speakEnglish = true 
let masterDegree = false; const job = "frontend developer"; let speakEnglish = true;

// ===== 3. Buat contoh Automatic Semicolon Insertion (ASI) yang BERBAHAYA =====
function testASI() {
  return
  {
    ok: true
  }
}

console.log(testASI())

// yang benarnya:
function testASI() {
  return {
    ok: true
  }
}

// ===== 4. Jenis-jenis statement di JavaScript =====
// Variable declaration (simpan data ke variabel)
let nama = "Vina"
const age = 22

// Assignment statement (memberi / mengubah nilai variabel)
let number
number = 22

// Expression statement (menghasilkan nilai / melakukan aksi)
let b = 10
let a = b + 22
console.log(a)

// Control flow statement (kondisi / perulangan)
if (number === 5) { 
  console.log("sama dengan 5")
} else {
  console.log("tidak sama dengan 5")
}

// Function declaration (membuat fungsi yang bisa dipakai ulang)
function greet(name) {
  return "Hello " + name
}
console.log(greet("Vina"))

// Return statement (mengembalikan nilai dari fungsi)
function add(x, y) {
  return x + y
}
console.log(add(2, 3))

// Throw statement (membuat error sendiri)
function checkAge(age) {
  if (age < 18) {
    throw new Error("Age must be 18 or older")
  }
}

// Try-catch statement (menangani error supaya program tidak crash)
try {
  checkAge(16)
} catch (error) {
  console.log("Error ditangkap:", error.message)
}

// Break & Continue (mengontrol loop)
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  if (i % 2 === 0) continue;
  console.log("Loop value:", i)
}

/**
 * JAWABAN TODO:
 * - Apa output testASI(): { ok: true }
 * - Kenapa return di atas bikin bug: Karena return menghentikan eksekusi fungsi, sehingga kode setelahnya tidak dieksekusi.
 * - Hubungannya dengan ASI: Karena ASI memasukkan semicolon otomatis setelah baris kode, yang membuat bug.
 */
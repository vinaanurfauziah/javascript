/**
 * Variable Scope Deep Dive
 *
 * Tujuan:
 * - Memahami jenis-jenis scope di JavaScript
 * - Memahami perbedaan:
 *   - global scope
 *   - function scope
 *   - block scope
 * - Memahami kenapa `var` sering bikin bug
 *
 * Jenis Scope yang HARUS kamu buktikan dengan kode:
 * 1. Global scope
 * 2. Function scope
 * 3. Block scope (let & const)
 *
 * ============================
 * GLOBAL vs FUNCTION SCOPE
 * ============================
 *
 * Challenge:
 * - Buat variable global
 * - Akses dari function
 * - Bandingkan dengan variable function scope
 *
 * ============================
 * BLOCK SCOPE
 * ============================
 *
 * Challenge:
 * - Gunakan if / for / while
 * - Bandingkan var vs let
 *
 * ============================
 * LOOP TRAP (REAL WORLD BUG)
 * ============================
 *
 * Challenge:
 * - Gunakan for-loop + setTimeout
 * - Bandingkan var vs let
 *
 * Test Case Wajib:
 *
 * for (var i = 0; i < 3; i++) {
 *   setTimeout(() => {
 *     console.log("var i:", i);
 *   }, 100);
 * }
 *
 * for (let j = 0; j < 3; j++) {
 *   setTimeout(() => {
 *     console.log("let j:", j);
 *   }, 100);
 * }
 *
 * TODO (WAJIB DIJELASKAN):
 * - Kenapa output var = 3 3 3
 * - Kenapa output let = 0 1 2
 * - Kenapa ini sering jadi bug di production
 */

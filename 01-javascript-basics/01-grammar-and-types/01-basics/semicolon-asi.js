/**
 * Semicolon & ASI Hell
 *
 * Tujuan:
 * - Memahami kasus nyata bug akibat ASI
 * - Memahami cara JavaScript melakukan parsing statement
 *
 * Challenge:
 * Buat 3 contoh bug ASI:
 * 1. return
 * 2. baris diawali dengan ( atau [
 * 3. chaining method
 *
 * Test Case:
 * const a = 1
 * const b = 2
 *
 * const result = a
 * (b + 1)
 *
 * console.log(result);
 *
 * TODO:
 * - Jelaskan output result
 * - Jelaskan kenapa JS menganggap ini valid secara sintaks
 * - Jelaskan kenapa best practice: selalu pakai semicolon
 */

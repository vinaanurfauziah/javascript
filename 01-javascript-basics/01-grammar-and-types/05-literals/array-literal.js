/**
 * Array Literal Edge Case
 *
 * Tujuan:
 * - Memahami empty slot vs undefined
 *
 * Challenge:
 * const a = [1, , 3]
 * const b = [undefined, undefined, undefined]
 *
 * Test:
 * a.map(x => 1)
 * b.map(x => 1)
 *
 * TODO:
 * - Kenapa hasilnya beda
 * - Dampaknya ke map, forEach, JSON.stringify
 */

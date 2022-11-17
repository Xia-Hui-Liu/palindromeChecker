const assert = require("assert");
const isPalindrome = require("./isPalindrome");

describe("isPalindrome", () => {
    it("return nll", () => {
        const input = '';
        const expected = null; ;
        const result = isPalindrome(input);
        assert.equal(result, expected);
    })

    it("return false", () => {
        const input = 1;
        const expected = false ;
        const result = isPalindrome(input);
        assert.equal(result, expected);
    })

    it("return true", () => {
        const input = '11';
        const expected = true;
        const result = isPalindrome(input);
        assert.equal(result, expected);
    })

    it("return false", () => {
        const input = '112231032211';
        const expected = false;
        const result = isPalindrome(input);
        assert.equal(result, expected);
    })
})
class Identicon {
    constructor(color) {
        this.color = color || 'green';
        this.grid = [];
        this.randomize();
        this.icon = this.#render();
    }
    randomize() {
        for(let i = 0; i < 5; i++) {
            this.grid[i] = this.#generateRow();
        }
        this.icon = this.#render();
        return this.icon;
    }
    #render() {
        let inner = '';
        for(let i = 0; i < 5; i++) {
            for(let j = 0; j < 5; j++) {
                if(this.grid[i][j]) {
                    inner += `<rect x='${j * 4}' y='${i * 4}' width='4' height='4' ry='0' fill='${this.color}'/>`;
                }
            }
        }
        return `<svg width='24' height='24' version='1.1' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>${inner}</svg>`;
    }
    #generateRow() {
        let arr = [];
        for (let i = 0; i < 3; i++) {
            arr.push(Math.random() >= 0.5);
        }
        for (let i = arr.length - 2; i >= 0; i--) {
            arr.push(arr[i]);
        }
        return arr;
    }
}
/*
    * Export the Identicon class so that it can be used in other files by using require().
    * Remove the line below if you don't want to use this file with Node.js or as a commonJS module.
*/
module.exports = Identicon;
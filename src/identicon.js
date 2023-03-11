class Identicon {
    constructor(color, backgroundColor) {
        this.color = color || 'green'; // color of the icon
        this.backgroundColor = backgroundColor || "transparent"; // background color
        this.grid = []; // internal representation of the icon
        this.randomize(); // generate a random icon when the class is instantiated
    }
    randomize() {
        for(let i = 0; i < 5; i++) {
            this.grid[i] = this.#generateRow();
        }
        
        //check if the icon is not empty
        let elements = 0;
        for(let i = 0; i < this.grid.length; i++) {
            for(let j = 0; j < this.grid[i].length; j++) {
                if(this.grid[i][j] === true) {
                    elements++;
                }
            }
        }
        if(elements < 5) { // if the icon has less than 5 elements, generate a new one
            return this.randomize();
        }
        else{
            return this.render();
        }
    }
    render() {
        let inner = '';
        for(let i = 0; i < 5; i++) {
            for(let j = 0; j < 5; j++) {
                let a = i + 0.4;
                let b = j + 0.4;
                if(this.grid[i][j]) {
                    inner += `<rect x='${b * 8}' y='${a * 8}' width='8' height='8' ry='0' fill='${this.color}'/>`;
                }
                else{
                    inner += `<rect x='${b * 8}' y='${a * 8}' width='8' height='8' ry='0' fill='${this.backgroundColor}'/>`;
                }
            }
        }
        return `<svg width='48' height='48' version='1.1' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'>${inner}</svg>`;
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
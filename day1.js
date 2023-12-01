let str = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

str = str.split("\n")
    .map((line) => {
        line = line.split("")
            .filter(char => !char.search(new RegExp("[0-9]")));
        return line.filter((char, i) => i == 0 || i == line.length - 1)
    })
    .map(elem => {
        if (elem.length == 1) elem.push(elem[0]);
        return elem;
    }).reduce((res,elem)=>{
        return res+~~elem.join("");
    },0)

console.log(str)
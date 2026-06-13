let data = ['macbook', 'samsung', 'canon', 'ikea', 'iphone'];
let counter = data.length - 1;
for (let e in data) {
    console.log(counter)
    console.log(data[counter]);      // Print in reverse order
    counter--;
}
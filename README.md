1- Catch

sb say pehlay new promise say promise create kia 
setTimeout() ke andar reject() call kiya gaya hai taake 1 second baad Promise reject ho.
.catch() ka use rejected Promise ke error ko handle karne ke liye kiya gaya hai.
Promise.race() ka use sab se pehlay settle honay wale Promise ko identify karne ke liye kiya gaya hai.

2- Second Parameter of then

.then() ke second parameter ko rejection handle karne ke liye use kiya gaya hai.
Pehla parameter success ke liye aur doosra parameter error ke liye use hota hai.
Is example mein Promise reject hone par second callback execute hota hai.
Promise.race() ka use sab se pehlay settle honay wale Promise ko identify karne ke liye kiya gaya hai.

3- try/catch in async

sb say pehlay new promise say promise create kia or wo pending state mei h
async function ke andar await ka use Promise ka result wait karne ke liye kiya gaya hai.
Rejected Promise ki wajah se error catch block mein receive hota hai.
Is example se async/await ke saath error handling samajhne mein help milti hai.
Promise.race() ka use sab se pehlay settle honay wale Promise ko identify karne ke liye kiya gaya hai.

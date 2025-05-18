// ----- LET - VAR - CONST -------
let x = 10;
if (true) {
    let x = 5;      // Biến x = 5 chỉ tồn tại trong khối này
    console.log(x); // Output: 5
}
console.log(x);     // Output: 10

    // Không thể gán lại giá trị cho const
const y = 15;
// y = 20;             // Lỗi

// ----- ARROW FUNCTIONS (Hàm mũi tên) ------
const myfunction = (a, b) => {
    // Khối lệnh
    return a + b;
}

    // hàm mũi tên khi có giá trị trả về
const add = (a, b) => a + b

    // Hàm thông thường
function add2(a, b) {
    return a + b;
}

// --------- TEMPLATE LITERALS --------
    //  Cách sử dụng cơ bản: Sử dụng ${} để nhúng biến hoặc biểu thức thức vào chuỗi
const name = 'The Chuong';
const age = 14;
const message = `Chúc mừng ${name} đã ${age} tuổi!`;
console.log(message);       // Output: Chúc mừng The Chuong đã 14 tuổi!


    // Nhúng biểu thức toán học
const a = 5;
const b = 10;
const result = `Tổng của ${a} và ${b} là ${a + b}`;
console.log(result);       // Output: Tổng của 5 và 10 là 15

    // Bài tập thực hành
const product = 'Laptop';
const price = 1500;
const vat = 0.1;       // 10% VAT
const total = price + (price * vat);

const bill = `Sản phẩm: ${product}
Giá: $${price}
Thuế: ${vat * 100}%
Tổng thanh toán: $${total}`

console.log(bill)

// ---- Ôn tập về mảng ----
let fruits = ['apple', 'banana']

// push() - thêm phần tử vào cuối ds
fruits.push('cherry')
console.log(fruits)       // Output: ['apple', 'banana', 'cherry']

// pop() - xóa phần tử bằng index
fruits.pop(1);
console.log(fruits);       // Output: ['apple', 'cherry']

// map() - duyệt và biến đổi từng phần tử
const numbers = [1, 2, 3, 4, 5];
const double = numbers.map(x => x * 2);
console.log(double);       // Output: [2, 4, 6, 8, 10]

// filter() - Lọc phần tử theo điều kiện
const even = numbers.filter(x => x % 2 == 0);
console.log(even);       // Output: [2, 4]

// find() - Tìm phần tử đầu tiên thỏa mãn điều kiện
const firstEven = numbers.find(x => x % 2 == 0);
console.log(firstEven);       // Output: 2

// Bài toán thực tế
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 700 }
];
// Yêu cầu:
// 1. Dùng map() để lấy ra tên các sản phẩm.
const productNames = products.map(product => product.name);
console.log("Tên sản phẩm:", productNames);

// 2. Dùng filter() để lấy sản phẩm giá trên 600.
const expensiveProducts = products.filter(product => product.price > 600);
console.log("Sản phẩm đắt:", expensiveProducts);

// 3. Dùng find() để tìm sản phẩm có tên là "Phone".
const phoneProduct = products.find(product => product.name === "Phone");
console.log("Tìm thấy:", phoneProduct);
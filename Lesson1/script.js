// DOM: cập nhật nội dung HTML
document.getElementById("message").innerHTML = 'Minh Anh đeo tai nghe';

// DOM: cập nhật CSS
const paragraph = document.getElementById("message");
paragraph.style.backgroundColor = 'lightblue'

// Cú pháp cơ bản của fetch
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())  // Chuyển đổi response thành JSON
//   .then(data => console.log(data))    // Xử lý dữ liệu
    .then(data => {
        // Áp dụng DOM để lấy phần tử chứa danh sách
        const postList = document.getElementById('postList');

        // Hiển thị mỗi bài viết trong danh sách
        data.forEach(post => {
            const listItem = document.createElement('li');
            listItem.textContent = `Title: ${post.title}`;
            postList.appendChild(listItem);
        })
    })
  .catch(error => console.error('Lỗi:', error));  // Bắt lỗi
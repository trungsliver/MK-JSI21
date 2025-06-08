// Import các module cần thiết từ Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Cấu hình Firebase - thông tin kết nối đến project của bạn
const firebaseConfig = {

};

// Khởi tạo Firebase và Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Lấy reference đến nút thêm sản phẩm
const addBtn = document.getElementById("addBtn");

// Xử lý sự kiện khi click nút thêm
addBtn.onclick = async () => {
  // Lấy giá trị từ input tên sản phẩm và file ảnh
  const name = document.getElementById("productName").value;
  const file = document.getElementById("productImage").files[0];

  // Kiểm tra nếu chưa nhập tên hoặc chưa chọn ảnh
  if (!name || !file) return alert("Nhập tên và chọn ảnh!");

  // Tạo FormData để gửi file lên Cloudinary
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "jsi21_upload"); // Thay thế bằng tên preset bạn đã tạo

  try {
    // Gửi request upload ảnh lên Cloudinary
    const res = await fetch("https://api.cloudinary.com/v1_1/dxhn2bknj/image/upload", {
      method: "POST",
      body: formData
    });
    
    // Kiểm tra nếu upload thất bại
    if (!res.ok) {
      const errorData = await res.json();
      console.error('Chi tiết lỗi Cloudinary:', errorData);
      throw new Error(`Lỗi upload ảnh: ${errorData.error?.message || 'Không xác định'}`);
    }
    
    // Lấy URL ảnh từ response của Cloudinary
    const data = await res.json();
    const imageUrl = data.secure_url;

    // Kiểm tra nếu không nhận được URL ảnh
    if (!imageUrl) {
      throw new Error('Không nhận được URL ảnh từ Cloudinary');
    }

    try {
      // Lưu thông tin sản phẩm vào Firestore
      await addDoc(collection(db, "products"), {
        name,
        image: imageUrl
      });
      alert("Đã thêm sản phẩm thành công!");
      // Cập nhật lại danh sách sản phẩm
      renderProducts();
    } catch (firebaseError) {
      console.error('Lỗi Firebase:', firebaseError);
      alert('Lỗi khi lưu vào Firebase: ' + firebaseError.message);
    }
  } catch (error) {
    console.error('Lỗi:', error);
    alert('Có lỗi xảy ra: ' + error.message);
  }
};

// Hàm hiển thị danh sách sản phẩm
async function renderProducts() {
  // Lấy reference đến div chứa danh sách sản phẩm
  const productList = document.getElementById("productList");
  // Xóa nội dung cũ
  productList.innerHTML = "";
  // Lấy tất cả sản phẩm từ Firestore
  const querySnapshot = await getDocs(collection(db, "products"));
  // Duyệt qua từng sản phẩm và tạo HTML
  querySnapshot.forEach(doc => {
    const { name, image } = doc.data();
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<img src="${image}" /><span>${name}</span>`;
    productList.appendChild(div);
  });
}

// Hiển thị danh sách sản phẩm khi trang được tải
renderProducts();

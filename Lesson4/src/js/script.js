
// Khởi tạo Firebase và cấu hình persistence
try {
    // Khởi tạo ứng dụng Firebase với cấu hình đã định nghĩa
    const app = firebase.initializeApp(firebaseConfig);
    // Cấu hình persistence là LOCAL - lưu trữ thông tin đăng nhập locally
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
            console.log("Firebase persistence set to LOCAL");
        })
        .catch((error) => {
            console.error("Firebase persistence error:", error);
        });
    console.log("Firebase initialized successfully");
} catch (error) {
    console.error("Firebase initialization error:", error);
}

// Lấy các phần tử DOM từ HTML để thao tác
const loginForm = document.getElementById('login'); // Form đăng nhập
const registerForm = document.getElementById('register'); // Form đăng ký
const loginFormContainer = document.getElementById('loginForm'); // Container chứa form đăng nhập
const registerFormContainer = document.getElementById('registerForm'); // Container chứa form đăng ký
const userInfo = document.getElementById('userInfo'); // Phần hiển thị thông tin người dùng
const userEmail = document.getElementById('userEmail'); // Phần hiển thị email người dùng
const logoutBtn = document.getElementById('logoutBtn'); // Nút đăng xuất
const showRegisterLink = document.getElementById('showRegister'); // Link chuyển đến form đăng ký
const showLoginLink = document.getElementById('showLogin'); // Link chuyển đến form đăng nhập

// Xử lý chuyển đổi giữa form đăng nhập và đăng ký
showRegisterLink.addEventListener('click', (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của link
    loginFormContainer.style.display = 'none'; // Ẩn form đăng nhập
    registerFormContainer.style.display = 'block'; // Hiển thị form đăng ký
});

showLoginLink.addEventListener('click', (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của link
    registerFormContainer.style.display = 'none'; // Ẩn form đăng ký
    loginFormContainer.style.display = 'block'; // Hiển thị form đăng nhập
});

// Xử lý đăng ký tài khoản mới
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form
    const email = document.getElementById('registerEmail').value; // Lấy giá trị email từ form
    const password = document.getElementById('registerPassword').value; // Lấy giá trị mật khẩu từ form

    // Kiểm tra độ dài mật khẩu (tối thiểu 6 ký tự)
    if (password.length < 6) {
        alert('Mật khẩu phải có ít nhất 6 ký tự');
        return;
    }

    try {
        // Tạo tài khoản mới thông qua Firebase Authentication
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log('User registered successfully:', userCredential.user.email);
        registerForm.reset(); // Reset form sau khi đăng ký thành công
    } catch (error) {
        console.error('Registration error:', error);
        alert(error.message); // Hiển thị thông báo lỗi cho người dùng
    }
});

// Xử lý đăng nhập
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form
    const email = document.getElementById('loginEmail').value; // Lấy giá trị email từ form
    const password = document.getElementById('loginPassword').value; // Lấy giá trị mật khẩu từ form

    try {
        // Đăng nhập thông qua Firebase Authentication
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log('User logged in successfully:', userCredential.user.email);
        loginForm.reset(); // Reset form sau khi đăng nhập thành công
    } catch (error) {
        console.error('Login error:', error);
        alert(error.message); // Hiển thị thông báo lỗi cho người dùng
    }
});

// Xử lý đăng xuất
logoutBtn.addEventListener('click', async () => {
    try {
        await firebase.auth().signOut(); // Đăng xuất khỏi Firebase
        console.log('User logged out successfully');
    } catch (error) {
        console.error('Logout error:', error);
        alert(error.message); // Hiển thị thông báo lỗi cho người dùng
    }
});

// Theo dõi trạng thái đăng nhập của người dùng
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // Người dùng đã đăng nhập
        console.log('User is signed in:', user.email);
        loginFormContainer.style.display = 'none'; // Ẩn form đăng nhập
        registerFormContainer.style.display = 'none'; // Ẩn form đăng ký
        userInfo.style.display = 'block'; // Hiển thị thông tin người dùng
        userEmail.textContent = user.email; // Hiển thị email người dùng
    } else {
        // Người dùng đã đăng xuất
        console.log('User is signed out');
        loginFormContainer.style.display = 'block'; // Hiển thị form đăng nhập
        registerFormContainer.style.display = 'none'; // Ẩn form đăng ký
        userInfo.style.display = 'none'; // Ẩn thông tin người dùng
    }
}); 
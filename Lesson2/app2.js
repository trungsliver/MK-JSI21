/*
Bài tập thực hành xử lý dữ liệu điểm của một lớp.
Dưới đây là dữ liệu điểm tổng kết của 10 bạn học sinh ngẫu nhiên trong lớp.

Yêu cầu đề bài: 
1. Lọc danh sách 3 học sinh đạt điểm TBHK cao nhất
2. Tìm học sinh đạt điểm TBHK thấp nhất 
3. Tính điểm trung bình HK của toàn bộ 10 bạn học sinh trong lớp. 
4. In ra tên các học sinh đạt danh hiệu học lực: Giỏi - Khá - Trung Bình
5. Lọc danh sách học sinh có số điểm TBHK >= 7 (chỉ cần hiển thị tên).
*/

const students = [
  {
    name: "An",
    scores: {
      Toan: { score: 7.4, evaluation: "Đ" },
      NguVan: { score: 8.9, evaluation: "Đ" },
      NgoaiNgu: { score: 8.5, evaluation: "Đ" },
      VatLy: { score: 9.0, evaluation: "Đ" },
      HoaHoc: { score: 3.9, evaluation: "KĐ" },
      SinhHoc: { score: 5.0, evaluation: "Đ" },
      LichSu: { score: 8.3, evaluation: "Đ" },
      DiaLy: { score: 9.4, evaluation: "Đ" },
      GDCD: { score: 6.6, evaluation: "Đ" },
    },
  },
  {
    name: "Binh",
    scores: {
      Toan: { score: 3.4, evaluation: "KĐ" },
      NguVan: { score: 5.9, evaluation: "Đ" },
      NgoaiNgu: { score: 5.4, evaluation: "Đ" },
      VatLy: { score: 7.4, evaluation: "Đ" },
      HoaHoc: { score: 9.3, evaluation: "Đ" },
      SinhHoc: { score: 8.6, evaluation: "Đ" },
      LichSu: { score: 5.2, evaluation: "Đ" },
      DiaLy: { score: 7.1, evaluation: "Đ" },
      GDCD: { score: 6.7, evaluation: "Đ" },
    },
  },
  {
    name: "Chi",
    scores: {
      Toan: { score: 5.5, evaluation: "Đ" },
      NguVan: { score: 3.7, evaluation: "KĐ" },
      NgoaiNgu: { score: 3.9, evaluation: "KĐ" },
      VatLy: { score: 8.1, evaluation: "Đ" },
      HoaHoc: { score: 7.4, evaluation: "Đ" },
      SinhHoc: { score: 7.6, evaluation: "Đ" },
      LichSu: { score: 3.9, evaluation: "KĐ" },
      DiaLy: { score: 8.4, evaluation: "Đ" },
      GDCD: { score: 5.2, evaluation: "Đ" },
    },
  },
  {
    name: "Dung",
    scores: {
      Toan: { score: 9.1, evaluation: "Đ" },
      NguVan: { score: 5.5, evaluation: "Đ" },
      NgoaiNgu: { score: 4.4, evaluation: "KĐ" },
      VatLy: { score: 4.6, evaluation: "KĐ" },
      HoaHoc: { score: 6.4, evaluation: "Đ" },
      SinhHoc: { score: 3.2, evaluation: "KĐ" },
      LichSu: { score: 6.3, evaluation: "Đ" },
      DiaLy: { score: 9.4, evaluation: "Đ" },
      GDCD: { score: 8.7, evaluation: "Đ" },
    },
  },
  {
    name: "Em",
    scores: {
      Toan: { score: 7.1, evaluation: "Đ" },
      NguVan: { score: 9.2, evaluation: "Đ" },
      NgoaiNgu: { score: 8.7, evaluation: "Đ" },
      VatLy: { score: 4.4, evaluation: "KĐ" },
      HoaHoc: { score: 6.4, evaluation: "Đ" },
      SinhHoc: { score: 3.0, evaluation: "KĐ" },
      LichSu: { score: 5.0, evaluation: "Đ" },
      DiaLy: { score: 9.8, evaluation: "Đ" },
      GDCD: { score: 7.0, evaluation: "Đ" },
    },
  },
  {
    name: "Phuc",
    scores: {
      Toan: { score: 5.5, evaluation: "Đ" },
      NguVan: { score: 4.7, evaluation: "KĐ" },
      NgoaiNgu: { score: 4.2, evaluation: "KĐ" },
      VatLy: { score: 6.5, evaluation: "Đ" },
      HoaHoc: { score: 3.5, evaluation: "KĐ" },
      SinhHoc: { score: 8.1, evaluation: "Đ" },
      LichSu: { score: 6.4, evaluation: "Đ" },
      DiaLy: { score: 7.0, evaluation: "Đ" },
      GDCD: { score: 8.0, evaluation: "Đ" },
    },
  },
  {
    name: "Giau",
    scores: {
      Toan: { score: 5.8, evaluation: "Đ" },
      NguVan: { score: 6.3, evaluation: "Đ" },
      NgoaiNgu: { score: 3.1, evaluation: "KĐ" },
      VatLy: { score: 9.0, evaluation: "Đ" },
      HoaHoc: { score: 7.4, evaluation: "Đ" },
      SinhHoc: { score: 7.7, evaluation: "Đ" },
      LichSu: { score: 5.5, evaluation: "Đ" },
      DiaLy: { score: 5.3, evaluation: "Đ" },
      GDCD: { score: 5.6, evaluation: "Đ" },
    },
  },
  {
    name: "Hieu",
    scores: {
      Toan: { score: 6.9, evaluation: "Đ" },
      NguVan: { score: 7.7, evaluation: "Đ" },
      NgoaiNgu: { score: 6.3, evaluation: "Đ" },
      VatLy: { score: 3.7, evaluation: "KĐ" },
      HoaHoc: { score: 6.8, evaluation: "Đ" },
      SinhHoc: { score: 6.3, evaluation: "Đ" },
      LichSu: { score: 3.5, evaluation: "KĐ" },
      DiaLy: { score: 7.9, evaluation: "Đ" },
      GDCD: { score: 9.6, evaluation: "Đ" },
    },
  },
  {
    name: "Hoang",
    scores: {
      Toan: { score: 5.5, evaluation: "Đ" },
      NguVan: { score: 7.3, evaluation: "Đ" },
      NgoaiNgu: { score: 7.0, evaluation: "Đ" },
      VatLy: { score: 5.8, evaluation: "Đ" },
      HoaHoc: { score: 7.5, evaluation: "Đ" },
      SinhHoc: { score: 5.2, evaluation: "Đ" },
      LichSu: { score: 7.6, evaluation: "Đ" },
      DiaLy: { score: 3.8, evaluation: "KĐ" },
      GDCD: { score: 9.9, evaluation: "Đ" },
    },
  },
  {
    name: "Khanh",
    scores: {
      Toan: { score: 7.0, evaluation: "Đ" },
      NguVan: { score: 3.7, evaluation: "KĐ" },
      NgoaiNgu: { score: 10.0, evaluation: "Đ" },
      VatLy: { score: 7.7, evaluation: "Đ" },
      HoaHoc: { score: 9.0, evaluation: "Đ" },
      SinhHoc: { score: 4.6, evaluation: "KĐ" },
      LichSu: { score: 6.4, evaluation: "Đ" },
      DiaLy: { score: 6.6, evaluation: "Đ" },
      GDCD: { score: 5.9, evaluation: "Đ" },
    },
  },
];

// 1. Lọc danh sách 3 học sinh đạt điểm TBHK cao nhất

// 2. Tìm học sinh đạt điểm TBHK thấp nhất

// Sắp xếp học sinh theo điểm trung bình tăng dần và lấy học sinh đầu tiên (thấp nhất)

// 3. Tính điểm trung bình HK của toàn bộ 10 bạn học sinh trong lớp.

// 4. In ra tên các học sinh đạt danh hiệu học lực: Giỏi - Khá - Trung Bình
  
// 5. Lọc danh sách học sinh có số điểm TBHK >= 7 (chỉ cần hiển thị tên).

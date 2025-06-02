# 🟢 Duolingo Clone App

Một ứng dụng clone Duolingo được xây dựng bằng **Next.js**, **React**, **Drizzle ORM**, **PostgreSQL**, **Stripe**, và **Tailwind CSS**, theo hướng dẫn từ video của [Code With Antonio](https://www.youtube.com/watch?v=dP75Khfy4s4).

---

## 🚀 Tính năng

- ✅ Xác thực người dùng với **NextAuth**
- ✅ Học ngôn ngữ qua các bài kiểm tra đơn giản
- ✅ Giao diện người dùng hiện đại với **Shadcn UI**
- ✅ Hệ thống điểm kinh nghiệm (XP) và cấp độ
- ✅ Thanh toán nâng cấp tài khoản qua **Stripe**
- ✅ Quản lý dữ liệu với **Drizzle ORM** và **PostgreSQL**
- ✅ Triển khai dễ dàng với **Vercel** hoặc tự host

---

## 🧱 Công nghệ sử dụng

- **Next.js 14 (App Router)**
- **React 18**
- **Tailwind CSS**
- **Shadcn UI**
- **TypeScript**
- **NextAuth (Authentication)**
- **Drizzle ORM + PostgreSQL (Database)**
- **Stripe (Payments)**

---

# 🛠️ Cài đặt và chạy dự án

```bash
# 1. Clone repository
git clone https://github.com/your-username/duolingo-clone.git
cd duolingo-clone

# 2. Cài đặt các dependencies
npm install

# 3. Thiết lập biến môi trường
cp .env.example .env
# → Cập nhật các giá trị .env cho DATABASE_URL, STRIPE_SECRET_KEY, NEXTAUTH_SECRET, v.v.

# 4. Khởi tạo và migrate database
npx drizzle-kit push

# 5. Khởi động dự án
npm run dev


# Thành viên nhóm

#- Phù Ngọc Hào - [GitHub](https://github.com/PhuNgocHao)
#- Nguyễn Quốc Khải - [GitHub](https://github.com/nguyenquockhai-gif)
#- Tạ Đăng Quang  - [GitHub](https://github.com/QuangTN205)
#- Trần Gia Huy  - [GitHub](https://github.com/TranGiaHuy2)


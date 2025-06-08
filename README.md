# 🦉🟢 Duolingo Clone App 📚

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

## ‼️ Thư mục dự án

```bash
lingo-clone/
  |- actions/
    |- challenge-progress.ts
    |- user-progress.ts
    |- user-subscription.ts
  |- app/
    |-- (main)/
        |--- courses/
        |--- leaderboard/
        |--- learn/
        |--- quests/
        |--- shop/
        |--- layout.tsx
    |-- (marketing)/
        |--- footer.tsx
        |--- header.tsx
        |--- layout.tsx
        |--- page.tsx
    |-- admin/
        |--- challenge/
        |--- challengeOption/
        |--- course/
        |--- lesson/
        |--- unit/
        |--- app.tsx
        |--- page.tsx
    |-- api/
        |--- challengeOptions/
        |--- challenges/
        |--- courses/
        |--- lessons/
        |--- units/
        |--- webhooks/stripe/
    |-- lesson/
        |--- [lessonId]/
        |--- card.tsx
        |--- challenge.tsx
        |--- footer.tsx
        |--- header.tsx
        |--- layout.tsx
        |--- page.tsx
        |--- question-bubble.tsx
        |--- quiz.tsx
        |--- result-card.tsx
    |-- apple-icon.png
    |-- favicon.ico
    |-- globals.css
    |-- icon1.png
    |-- icon2.png
    |-- layout.tsx
  |- components/
    |-- modals/
    |-- ui/
    |-- feed-wrapper.tsx
    |-- mobile-wrapper.tsx
    |-- mobile-sidebar.tsx
    |-- promo.tsx
    |-- quests.tsx
    |-- sidebar-item.tsx
    |-- sidebar.tsx
    |-- sticky-wrapper.tsx
    |-- user-progress.tsx
  |- config/
    |-- index.ts
  |- db/
    |-- drizzle.ts
    |-- queries.ts
    |-- schema.ts
  |- lib/
    |-- admin.ts
    |-- stripe.ts
    |-- utils.ts
  |- public/
  |- scripts/
    |-- prod.ts
    |-- reset.ts
    |-- seed.ts
  |- store/
    |-- use-exit-modal.ts
    |-- use-hearts-modal.ts
    |-- use-practice-modal.ts
  |- types/
    |-- canvas.ts
  |- .env
  |- .env.example
  |- .eslintrc.js
  |- .gitignore
  |- .prettierrc.json
  |- components.json
  |- constants.ts
  |- drizzle.config.ts
  |- environment.d.ts
  |- middleware.ts
  |- next.config.mjs
  |- package-lock.json
  |- package.json
  |- postcss.config.js
  |- tailwind.config.ts
  |- tsconfig.json
```

---

## 🛠️ Cài đặt và chạy dự án

```bash
# 1. Clone repository
git clone https://github.com/PhuNgocHao/Nhom_12/tree/main/lingo-clone.git
cd lingo-clone

# 2. Cài đặt các dependencies
npm install

# 3. Thiết lập biến môi trường
cp .env.example .env
# → Cập nhật các giá trị .env cho DATABASE_URL, STRIPE_SECRET_KEY, NEXTAUTH_SECRET, v.v.

# 4. Khởi tạo và migrate database
npx drizzle-kit push

# 5. Khởi động dự án
npm run dev
```

## Thành viên nhóm

### - Phù Ngọc Hào - [GitHub](https://github.com/PhuNgocHao)
### - Nguyễn Quốc Khải - [GitHub](https://github.com/nguyenquockhai-gif)
### - Tạ Đăng Quang  - [GitHub](https://github.com/QuangTN205)
### - Trần Gia Huy  - [GitHub](https://github.com/TranGiaHuy2)


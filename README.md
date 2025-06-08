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

## 🧰 Hướng dẫn bắt đầu

1. Đảm bảo rằng Git và NodeJS đã được cài đặt.
2. Clone (sao chép) repository này về máy tính của bạn.
3. Tạo file .env trong thư mục gốc (root directory).
4. Nội dung của file .env:
```env
# .env

# disabled next.js telemetry
NEXT_TELEMETRY_DISABLED=1

# clerk auth keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# neon db uri
DATABASE_URL="postgresql://<user>:<password>@<host>:<post>/lingo?sslmode=require"

# stripe api key and webhook
STRIPE_API_SECRET_KEY=""
STRIPE_WEBHOOK_SECRET=""

# public app url
NEXT_PUBLIC_APP_URL=http://localhost:3000

# clerk admin user id(s) separated by comma and space (, )
CLERK_ADMIN_IDS="user_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
# or CLERK_ADMIN_IDS="user_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx, user_xxxxxxxxxxxxxxxxxxxxxx" for multiple admins.

```
5. Lấy khóa xác thực từ Clerk

Nguồn: Trang quản trị hoặc trang cài đặt của Clerk

Thao tác:

Đăng nhập vào tài khoản Clerk của bạn.

Điều hướng đến bảng điều khiển (dashboard) hoặc trang cài đặt.

Tìm phần liên quan đến các khóa xác thực.

Sao chép NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY và CLERK_SECRET_KEY được cung cấp trong phần này.

6. Lấy URI kết nối cơ sở dữ liệu Neon

Nguồn: Nhà cung cấp cơ sở dữ liệu (ví dụ: Neon, PostgreSQL)

Thao tác:

Truy cập nền tảng hoặc bảng cấu hình của nhà cung cấp cơ sở dữ liệu.

Xác định thông tin kết nối cơ sở dữ liệu.

Thay thế các giá trị <user>, <password>, <host>, và <port> trong URI bằng thông tin đăng nhập thực tế của bạn.

Đảm bảo thêm ?sslmode=require vào cuối URI để kích hoạt chế độ SSL.

7. Lấy khóa API và Webhook Secret từ Stripe

Nguồn: Bảng điều khiển Stripe

Thao tác:

Đăng nhập vào tài khoản Stripe của bạn.

Truy cập bảng điều khiển hoặc phần cài đặt API.

Tìm phần liên quan đến API Keys và Webhook Secrets.

Sao chép STRIPE_API_SECRET_KEY và STRIPE_WEBHOOK_SECRET.

8. Chỉ định URL công khai của ứng dụng

Thao tác:

Thay thế http://localhost:3000 bằng URL của ứng dụng đã được triển khai thực tế.

9. Xác định các User ID của Admin từ Clerk

Nguồn: Bảng điều khiển hoặc trang cài đặt của Clerk

Thao tác:

Đăng nhập vào tài khoản Clerk của bạn.

Truy cập bảng điều khiển hoặc trang cài đặt.

Tìm phần liên quan đến Admin User IDs.

Sao chép các User ID được cung cấp, đảm bảo rằng chúng được phân cách bằng dấu phẩy và khoảng trắng.

10. Lưu và bảo mật

Lưu các thay đổi vào file .env.

11. Cài đặt các dependencies của project bằng lệnh

bash

npm install --legacy-peer-deps
hoặc

bash

yarn install --legacy-peer-deps
12. Chạy script seed dữ liệu

Trong cùng terminal, chạy lệnh sau để đẩy dữ liệu vào cơ sở dữ liệu:

bash

npm run db:push && npm run db:prod
Lệnh này sử dụng npm để chạy file TypeScript (scripts/prod.ts) và ghi dữ liệu thử thách vào cơ sở dữ liệu.

13. Kiểm tra dữ liệu trong cơ sở dữ liệu

Sau khi script hoàn tất, kiểm tra lại cơ sở dữ liệu để xác minh dữ liệu thử thách đã được thêm thành công.

14. Ứng dụng đã được cấu hình đầy đủ 👍

Bây giờ bạn có thể bắt đầu sử dụng ứng dụng với một trong hai lệnh:

bash

npm run dev
hoặc

bash

yarn dev

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


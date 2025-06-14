<h1 align="center">Feedback Management System</h1>
This project is a React + TypeScript + Vite application for a Feedback Management System. It features authentication (mocked), feedback submission, admin management, and a modern UI using Tailwind CSS.

## Backend and Frontend Links
- **Frontend GitHub Repository:** [Feedback Management System Frontend](https://github.com/SandaruwanWeerawardhana/Feedback-Management-System-frontend)
- **Backend GitHub Repository:** [Feedback Management System Backend](https://github.com/SandaruwanWeerawardhana/Feedback-Management-System-backend.git)

## Features
- User authentication (login/register) with mock API
- Feedback form and submission
- Admin dashboard for managing feedback
- Responsive, modern UI with Tailwind CSS
- React Router for navigation
- **Animated authentication page background**
- **Form validation and user feedback**
- **Mock API integration for authentication**

## Folder Structure
```
client/
  feedback system/
    ├── public/
    │   └── vite.svg
    ├── src/
    │   ├── api/
    │   │   ├── authApi.ts
    │   │   └── feedbackApi.ts
    │   ├── components/
    │   │   ├── FeedbackForm.tsx
    │   │   ├── Footer.tsx
    │   │   ├── Navbar.tsx
    │   │   └── StarRating.tsx
    │   ├── pages/
    │   │   ├── AdminPage.tsx
    │   │   ├── AuthPages.tsx
    │   │   ├── EditFeedbackPage.tsx
    │   │   ├── FeedbackFormPage.tsx
    │   │   └── HomePage.tsx
    │   ├── App.tsx
    │   ├── index.css
    │   ├── main.tsx
    │   └── vite-env.d.ts
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── README.md
    ├── tailwind.config.js
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

## Mock Authentication API
Authentication is handled by a mock API in `src/api/authApi.ts`. There are no real backend endpoints; all authentication is simulated in the frontend for development/demo purposes.

- **Login:**
  - Email: `user@example.com`
  - Password: `password`
  - Any other credentials will fail.
- **Register:**
  - Any email except `user@example.com` will succeed.
  - Registering with `user@example.com` will return an error (already registered).

To connect to a real backend, replace the logic in `src/api/authApi.ts` with actual HTTP requests (e.g., using `fetch` or `axios`).

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   ```
3. **Open the app:**
   Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure
- `src/pages/` – Main pages (Auth, Home, Admin, etc.)
- `src/components/` – Reusable UI components
- `src/api/` – Mock API logic
- `src/index.css` – Tailwind CSS setup

## SceenShot
![s1](https://github.com/user-attachments/assets/d9c23b65-f041-43e6-9a69-d168a0650b94)
![s2](https://github.com/user-attachments/assets/4bc987f7-8529-4879-8a8c-8eba90e8ef32)
![s3](https://github.com/user-attachments/assets/5b5910d3-5d29-4642-915c-0e31aa592c2c)

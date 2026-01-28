# 🍽️ RateMyPlate - Dish Polling System

A modern, responsive React application that allows food enthusiasts to login, rank their favorite dishes, and see real-time poll results.

**Live Demo:** https://dish-poll-seven.vercel.app/auth/login
**Repository:** https://github.com/Vjkjouhari/dish-poll

-------------------------------------------------------------------

## 🚀 Features

### 🔐 Authentication

- **Static User Access:** Login using one of the 5 predefined chef/foodie accounts.
- **JWT Simulation:** Securely stores a mock JWT token in `localStorage` to persist sessions.
- **Protected Routes:** Prevents unauthenticated users from accessing the voting dashboard.

### 🗳️ Voting System (Tab 1)

- **Live Data:** Fetches dish data from the Syook API.
- **Unique Ranking:** Users can select their top 3 dishes.
- **Dynamic Logic:** If a user assigns a rank (1, 2, or 3) to a new dish, any previous dish holding that rank is automatically displaced.
- **Points Mapping:** - Rank 1 = 30 Points
  - Rank 2 = 20 Points
  - Rank 3 = 10 Points

### 📊 Results Dashboard (Tab 2)

- **Leaderboard:** Dishes are displayed in descending order based on total points.
- **User Insight:** Your personal selections are highlighted with a "Selected" badge and a distinctive UI to see where your favorites stand.

----------------------------------------------------------

## 🛠️ Tech Stack

- **Framework:** React 18 (with Vite)
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI (Card, Button, Tabs, Badge, Input)
- **Routing:** React Router DOM v6
- **Forms:** React Hook Form + Zod (Validation)
- **Icons:** Lucide React

----------------------------------------------------------

## 📦 Installation & Setup

Follow these steps to run the project locally:

1. **Clone the repository:**
   git clone https://github.com/Vjkjouhari/dish-poll.git

2. **Install dependencies:**

npm install

3. **Run the development server:**

npm run dev

4. **Build for production:**

npm run build

---------------------------------------------------------------

## 🔑 Test Credentials

You can use any of the following accounts to log in:

| Username        | Password      |
| --------------- | ------------- |
| `chef_alex`     | `password123` |
| `foodie_jane`   | `password123` |
| `gourmet_bob`   | `password123` |
| `sous_chef_sam` | `password123` |
| `critic_mia`    | `password123` |

---

## 🌐 Deployment Note (Vercel)

This project includes a `vercel.json` file to handle **Client-Side Routing**. This ensures that refreshing the page on the hosted URL does not result in a 404 error by redirecting all requests to `index.html`.

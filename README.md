# 🎬 Movie Watchlist Manager

A React-based Movie Watchlist app where users can add movies, track watched status, filter the list, and view live statistics.

This project was built as part of a Week 2 React assignment, focusing on core React fundamentals such as state, events, lists, keys, conditional rendering, and derived state.

---

## ✨ Features

### Add Movies
- Enter a movie title
- Select a genre
- Add a country of origin

### Watch Status
- Mark movies as watched or unwatched
- Visual status badges for clarity

### Filtering
- View All, Watched, or Unwatched movies

### Movie Management
- Delete movies from the list
- Toggle watched status with one click

### Live Summary (Derived State)
- Total movies
- Watched movies count
- Unwatched movies count
- 🎉 Celebration message when all movies are watched

### Styled UI
- Dark theme inspired layout
- Genre and country color badges
- Responsive grid layout

---

## 📸 Screenshot

![Movie Watchlist Screenshot](screenshot.PNG)

---

## 🛠️ Built With
- React
- JavaScript (ES6+)
- CSS (custom styling, gradients, badges)

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/movie-watchlist.git
cd movie-watchlist

# Install dependencies
npm install

# Start the development server
npm start

# Open your browser at:
http://localhost:3000
```
---
## 📋 How to Use, Technical Notes & License

1. Enter a movie title, select a genre, and optionally add a country.
2. Click **Add Movie** to add it to the watchlist.
3. Use filter buttons to switch between All, Watched, or Unwatched movies.
4. Toggle watched status or delete movies as needed.
5. View live stats in the summary section.

---

### 📌 Technical Notes

- Each movie has a unique ID generated with `crypto.randomUUID()`.
- Movie lists are rendered using `.map()` with proper `key` props.
- Derived state (counts and filtered list) is computed during render—no extra state for totals or filtered lists.
- Conditional rendering handles:
  - Empty list: “No movies found. Add one!”
  - All watched: “🎉 You watched everything!”

---

### 📄 License

This project is for educational purposes and learning only.

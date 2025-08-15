
# React News Application

A responsive React.js application that fetches and displays the latest news using the [NewsAPI](https://newsapi.org/).

## Features
- Browse top headlines from multiple categories (technology, sports, health, etc.)
- Search news by keywords
- Responsive UI for mobile and desktop
- Displays article title, source, description, and link

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/news-app.git
cd news-app
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Get API Key

* Create a free account on [NewsAPI](https://newsapi.org/)
* Copy your API key

### 4. Add Environment Variables

Create a `.env` file in the project root:

```
REACT_APP_NEWS_API_KEY=your_api_key_here
```

### 5. Run the Application

```bash
npm start
```

The app will run at [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
```

Builds the app into the `build` folder, optimized for deployment.

## Technologies Used

* React.js
* CSS / Tailwind (for styling)
* NewsAPI


---

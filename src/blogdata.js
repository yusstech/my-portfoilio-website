export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    excerpt: "Learn how to set up a new React project with TypeScript and understand the basics of type-safe development.",
    content: `TypeScript has become an essential tool in modern React development. In this comprehensive guide, we'll explore how to set up a new React project with TypeScript and dive into the fundamentals of type-safe development.

First, let's create a new React project with TypeScript support:

\`\`\`bash
npx create-react-app my-app --template typescript
\`\`\`

TypeScript brings several advantages to React development:

1. **Type Safety**: Catch errors during development rather than runtime
2. **Better IDE Support**: Enhanced autocomplete and refactoring capabilities
3. **Improved Maintainability**: Self-documenting code with explicit types
4. **Enhanced Component Props**: Clear interface definitions for component properties

Here's a simple example of a typed React component:

\`\`\`typescript
interface UserProps {
  name: string;
  age: number;
  email?: string;
}

const UserProfile: React.FC<UserProps> = ({ name, age, email }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      {email && <p>Email: {email}</p>}
    </div>
  );
};
\`\`\`

By following TypeScript best practices in your React projects, you'll create more robust and maintainable applications.`,
    author: "Yusuf Muhammed",
    date: "2024-03-15",
    readTime: "5 min read",
    image: "/assets/images/blog/react-typescript.jpg",
    tags: ["React", "TypeScript", "Web Development"]
  },
  {
    id: 2,
    title: "Building Scalable APIs with Node.js",
    excerpt: "Discover best practices for creating robust and scalable backend services using Node.js and Express.",
    content: `When building modern web applications, having a well-structured API is crucial. In this article, we'll explore best practices for creating scalable and maintainable APIs using Node.js and Express.

Key aspects we'll cover:

1. **Project Structure**
Organize your code effectively:

\`\`\`javascript
/src
  /controllers
  /models
  /routes
  /middleware
  /utils
  /config
\`\`\`

2. **Error Handling**
Implement centralized error handling:

\`\`\`javascript
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = \`\${statusCode}\`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;
  }
}

const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  });
};
\`\`\`

3. **Authentication & Authorization**
Implement secure user authentication:

\`\`\`javascript
const jwt = require('jsonwebtoken');

const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};
\`\`\`

4. **Database Integration**
Use proper database abstraction and models:

\`\`\`javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
\`\`\`

Remember to implement proper logging, monitoring, and documentation for your API.`,
    author: "Yusuf Muhammed",
    date: "2024-03-10",
    readTime: "8 min read",
    image: "/assets/images/blog/nodejs-api.jpg",
    tags: ["Node.js", "API", "Backend"]
  },
  {
    id: 3,
    title: "Mastering CSS Grid Layout",
    excerpt: "A comprehensive guide to using CSS Grid for creating complex and responsive layouts.",
    content: `CSS Grid has revolutionized the way we approach web layouts. This powerful layout system allows us to create complex, responsive designs with minimal effort. Let's explore its key features and best practices.

1. **Grid Basics**
Define a basic grid:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
\`\`\`

2. **Responsive Layouts**
Create responsive layouts without media queries:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
\`\`\`

3. **Grid Areas**
Name grid areas for easier layout:

\`\`\`css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
\`\`\`

4. **Advanced Techniques**
Overlap elements and create complex layouts:

\`\`\`css
.item {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  z-index: 1;
}
\`\`\`

CSS Grid makes it easy to create magazine-style layouts, photo galleries, and complex web applications.`,
    author: "Yusuf Muhammed",
    date: "2024-03-05",
    readTime: "6 min read",
    image: "/assets/images/blog/css-grid.jpg",
    tags: ["CSS", "Web Design", "Frontend"]
  },
  {
    id: 4,
    title: "Introduction to Docker for Developers",
    excerpt: "Learn how to containerize your applications and streamline your development workflow with Docker.",
    content: `Docker has become an indispensable tool in modern software development. This guide will help you understand Docker's core concepts and how to use it effectively in your development workflow.

1. **Basic Concepts**
- Containers
- Images
- Dockerfile
- Docker Compose

2. **Creating a Dockerfile**
Here's a basic example:

\`\`\`dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

3. **Docker Compose**
Define multi-container applications:

\`\`\`yaml
version: '3'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
  db:
    image: mongo:latest
    volumes:
      - mongodb_data:/data/db

volumes:
  mongodb_data:
\`\`\`

4. **Best Practices**
- Use multi-stage builds
- Optimize layer caching
- Implement health checks
- Use .dockerignore

5. **Common Commands**
\`\`\`bash
# Build an image
docker build -t myapp .

# Run a container
docker run -p 3000:3000 myapp

# View logs
docker logs container_id

# Stop container
docker stop container_id
\`\`\`

Docker simplifies deployment and ensures consistency across different environments.`,
    author: "Yusuf Muhammed",
    date: "2024-03-01",
    readTime: "7 min read",
    image: "/assets/images/blog/docker-intro.jpg",
    tags: ["Docker", "DevOps", "Containers"]
  },
  {
    id: 5,
    title: "State Management with Redux Toolkit",
    excerpt: "Simplify your Redux code and manage application state more effectively with Redux Toolkit.",
    content: `Redux Toolkit has simplified the way we handle state management in React applications. Let's explore how to use it effectively and understand its key features.

1. **Setting Up Redux Toolkit**
First, install the necessary packages:

\`\`\`bash
npm install @reduxjs/toolkit react-redux
\`\`\`

2. **Creating a Store**
\`\`\`javascript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
\`\`\`

3. **Creating a Slice**
\`\`\`javascript
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
\`\`\`

4. **Using in Components**
\`\`\`javascript
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}
\`\`\`

5. **Async Actions with createAsyncThunk**
\`\`\`javascript
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId) => {
    const response = await fetch(\`/api/users/\${userId}\`);
    return response.json();
  }
);
\`\`\`

Redux Toolkit significantly reduces boilerplate code and provides powerful tools for state management.`,
    author: "Yusuf Muhammed",
    date: "2024-02-25",
    readTime: "10 min read",
    image: "/assets/images/blog/redux-toolkit.jpg",
    tags: ["Redux", "React", "State Management"]
  }
]; 
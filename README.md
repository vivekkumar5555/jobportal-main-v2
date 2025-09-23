# JobPortal - Modern Job Search Platform

A full-stack job portal application built with React, Node.js, and MongoDB. This platform allows job seekers to search for jobs, apply for positions, and manage their profiles, while recruiters can post jobs, manage companies, and review applications.

## 🚀 Features

### For Job Seekers
- **Job Search & Discovery**: Advanced search functionality with filters
- **User Registration & Authentication**: Secure signup/login system
- **Profile Management**: Create and update professional profiles
- **Job Applications**: Apply for jobs with one-click functionality
- **Application Tracking**: View applied jobs and their status
- **Browse Jobs**: Explore jobs by category, location, and company

### For Recruiters
- **Company Management**: Create and manage company profiles
- **Job Posting**: Post new job opportunities
- **Application Management**: Review and manage job applications
- **Analytics Dashboard**: Track job performance and applications

### Technical Features
- **Responsive Design**: Mobile-first approach with tablet and desktop support
- **Modern UI/UX**: Built with Tailwind CSS and Radix UI components
- **Real-time Updates**: Dynamic content updates using Redux
- **File Upload**: Cloudinary integration for image handling
- **Security**: JWT-based authentication with protected routes
- **Performance**: Optimized with lazy loading and code splitting

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcryptjs** - Password hashing
- **Multer** - File upload handling
- **Cloudinary** - Cloud-based image storage
- **CORS** - Cross-origin resource sharing

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Cloudinary account (for image uploads)

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the backend directory:
   ```env
   PORT=8000
   MONGODB_URI=mongodb://localhost:27017/jobportal
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   FRONTEND_URL=http://localhost:5173
   ```

4. **Start the backend server**
   ```bash
   npm run dev
   ```

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the frontend directory:
   ```env
   VITE_BACKEND_URL=http://localhost:8000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🚀 Running the Application

1. **Start MongoDB** (if using local instance)
   ```bash
   mongod
   ```

2. **Start Backend Server**
   ```bash
   cd backend && npm run dev
   ```

3. **Start Frontend Server**
   ```bash
   cd frontend && npm run dev
   ```

4. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:8000

## 📁 Project Structure

```
jobportal-main/
├── backend/
│   ├── controllers/          # Route controllers
│   ├── middlewares/          # Custom middleware
│   ├── models/              # Database models
│   ├── routes/              # API routes
│   ├── utils/               # Utility functions
│   └── index.js             # Server entry point
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── admin/       # Admin-specific components
│   │   │   ├── auth/        # Authentication components
│   │   │   ├── shared/      # Shared components
│   │   │   └── ui/          # UI component library
│   │   ├── hooks/           # Custom React hooks
│   │   ├── redux/           # Redux store and slices
│   │   ├── utils/           # Utility functions
│   │   └── lib/             # Library configurations
│   └── public/              # Static assets
└── README.md
```

## 🔧 Available Scripts

### Backend Scripts
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 UI Components

The application uses a custom UI component library built on Radix UI primitives with Tailwind CSS styling:

- **Button** - Customizable button component
- **Input** - Form input component
- **Dialog** - Modal dialog component
- **Avatar** - User avatar component
- **Badge** - Status badge component
- **Table** - Data table component
- **Select** - Dropdown select component

## 📱 Responsive Design

The application is fully responsive with mobile-first design:

- **Mobile (< 768px)**: Optimized for smartphones
- **Tablet (768px - 1024px)**: Adapted for tablet devices
- **Desktop (> 1024px)**: Full desktop experience

## 🔐 Authentication & Authorization

- **JWT-based Authentication**: Secure token-based authentication
- **Role-based Access Control**: Different permissions for students and recruiters
- **Protected Routes**: Route protection for admin features
- **Session Management**: Persistent login state with Redux

## 📊 API Endpoints

### User Routes
- `POST /api/user/signup` - User registration
- `POST /api/user/login` - User login
- `GET /api/user/logout` - User logout
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/update` - Update user profile

### Job Routes
- `GET /api/job/all` - Get all jobs
- `POST /api/job/create` - Create new job (recruiter only)
- `GET /api/job/:id` - Get job by ID
- `PUT /api/job/:id` - Update job (recruiter only)
- `DELETE /api/job/:id` - Delete job (recruiter only)

### Application Routes
- `POST /api/application/create` - Apply for job
- `GET /api/application/my-applications` - Get user's applications
- `GET /api/application/job/:id` - Get job applications (recruiter only)

### Company Routes
- `GET /api/company/all` - Get all companies
- `POST /api/company/create` - Create company (recruiter only)
- `GET /api/company/:id` - Get company by ID
- `PUT /api/company/:id` - Update company (recruiter only)

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting platform
3. Configure environment variables

### Backend Deployment (Railway/Heroku)
1. Configure production environment variables
2. Set up MongoDB Atlas for production database
3. Deploy using your preferred platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- **Your Name** - *Initial work* - [YourGitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Radix UI for accessible component primitives
- MongoDB for the flexible database solution

## 📞 Support

If you have any questions or need help with the setup, please create an issue in the repository or contact the development team.

---

**Happy Job Hunting! 🎯**

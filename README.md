# Car Dealership Full Stack Application

A comprehensive full-stack web application for car dealerships with microservices architecture, featuring dealer management, car inventory, review system, and sentiment analysis.

## 🚗 Project Overview

This application demonstrates a complete full-stack development project with multiple microservices, showcasing modern web development practices including React frontend, Django backend, Node.js microservices, and MongoDB database integration.

## 🏗️ Architecture

For a detailed technical architecture overview, see [ARCHITECTURE.md](./ARCHITECTURE.md).

### Frontend
- **React.js** with Bootstrap styling
- **Components**: Dealers, Reviews, Login/Register, Car Inventory Search
- **Features**: Responsive design, real-time data fetching, user authentication

### Backend Services
- **Django** - Main backend with REST APIs
- **Node.js/Express** - Car inventory microservice
- **Flask** - Sentiment analysis microservice
- **MongoDB** - Database for dealers, reviews, and car inventory

### Microservices
1. **Car Inventory Service** (Node.js/Express)
   - MongoDB integration with Mongoose
   - RESTful APIs for car CRUD operations
   - Filtering by make, model, year, mileage, price
   - Port: 3050

2. **Sentiment Analysis Service** (Flask)
   - NLTK VADER sentiment analysis
   - Real-time review sentiment processing
   - Local deployment (replacing IBM Cloud Code Engine)
   - Port: 5000

## 🛠️ Technologies Used

### Frontend
- React.js 18.x
- Bootstrap 5.x
- CSS3 with custom styling
- React Router for navigation

### Backend
- Django 5.2.4
- Django REST Framework
- Python 3.11

### Microservices
- Node.js 18.x
- Express.js 4.18.2
- Flask (Python)
- NLTK (Natural Language Processing)

### Database
- MongoDB 6.x
- Mongoose ODM
- Docker containerization

### Development Tools
- Docker Desktop
- Git & GitHub
- IBM Skills Network IDE
- VS Code (local development)

## 📁 Project Structure

```
xrwvm-fullstack_developer_capstone/
├── server/
│   ├── djangoapp/           # Django backend
│   │   ├── microservices/   # Sentiment analysis service
│   │   ├── restapis.py      # REST API endpoints
│   │   └── views.py         # Django views
│   ├── frontend/            # React frontend
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Dealers/ # Dealer components
│   │   │   │   ├── Header/  # Header component
│   │   │   │   ├── Login/   # Authentication
│   │   │   │   └── Register/
│   │   │   └── App.js       # Main React app
│   │   └── package.json
│   ├── carsInventory/       # Car inventory microservice
│   │   ├── app.js          # Express server
│   │   ├── inventory.js    # MongoDB schema
│   │   └── package.json
│   ├── database/           # Database service
│   │   ├── app.js         # Node.js backend
│   │   ├── data/          # JSON data files
│   │   └── package.json
│   └── manage.py          # Django management
├── venv/                  # Python virtual environment
├── ARCHITECTURE.md        # Detailed technical architecture overview
└── README.md             # This file
```

## 🚀 Features

### Core Functionality
- **Dealer Management**: Browse dealers by state, view dealer details
- **Review System**: Post and view dealer reviews with sentiment analysis
- **Car Inventory**: Search and filter cars by various criteria
- **User Authentication**: Login/Register system with session management
- **Real-time Sentiment Analysis**: Analyze review sentiments using NLTK

### Advanced Features
- **Microservices Architecture**: Independent services for different functionalities
- **RESTful APIs**: Complete API suite for all operations
- **Responsive Design**: Mobile-friendly interface
- **Data Filtering**: Advanced search and filter capabilities
- **Error Handling**: Comprehensive error handling across all services

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18.x or higher
- Python 3.11 or higher
- Docker Desktop
- MongoDB (via Docker)

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mubeen-Baloch/xrwvm-fullstack_developer_capstone.git
   cd xrwvm-fullstack_developer_capstone
   ```

2. **Start MongoDB (Docker)**
   ```bash
   docker run -d -p 27017:27017 --name mongodb mongo:latest
   ```

3. **Setup Django Backend**
   ```bash
   cd server
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   python manage.py runserver
   ```

4. **Setup Car Inventory Microservice**
   ```bash
   cd server/carsInventory
   npm install
   node run build
   ```

5. **Setup Sentiment Analysis Microservice**
   ```bash
   cd server/djangoapp/microservices
   pip install flask nltk
   python app.py
   ```

6. **Setup React Frontend**
   ```bash
   cd server/frontend
   npm install
   npm run build
   ```

7. **Setup Database Service**
   ```bash
   cd server/database
   npm install
   node run build
   ```

## 🌐 API Endpoints

### Django Backend
- `GET /djangoapp/dealers` - Get all dealers
- `GET /djangoapp/dealer/{id}` - Get dealer details
- `GET /djangoapp/reviews/dealer/{id}` - Get dealer reviews
- `POST /djangoapp/postreview/{id}` - Post a review

### Car Inventory Service
- `GET /cars/{dealer_id}` - Get cars by dealer
- `GET /carsbymake/{dealer_id}/{make}` - Filter by make
- `GET /carsbymodel/{dealer_id}/{model}` - Filter by model
- `GET /carsbyyear/{dealer_id}/{year}` - Filter by year
- `GET /carsbymaxmileage/{dealer_id}/{mileage}` - Filter by mileage
- `GET /carsbyprice/{dealer_id}/{price}` - Filter by price

### Sentiment Analysis Service
- `POST /analyze` - Analyze review sentiment

## 🎯 Key Learning Outcomes

### Technical Skills
- **Full-Stack Development**: Complete application from frontend to database
- **Microservices Architecture**: Independent service design and implementation
- **API Development**: RESTful API design and implementation
- **Database Design**: MongoDB schema design and relationships
- **Containerization**: Docker setup and deployment
- **Version Control**: Git workflow and collaboration

### Development Practices
- **Agile Development**: Iterative development with continuous improvement
- **Error Handling**: Comprehensive error management across services
- **Code Organization**: Clean, maintainable code structure
- **Documentation**: Complete project documentation
- **Testing**: Manual testing and debugging

## 🚧 Challenges & Solutions

### IBM Cloud Deployment Issues
- **Challenge**: IBM Cloud Code Engine deployment restrictions
- **Solution**: Implemented local sentiment analysis service using Flask and NLTK

### MongoDB Connection Issues
- **Challenge**: Docker container connectivity problems
- **Solution**: Proper Docker networking and connection string configuration

### Microservices Integration
- **Challenge**: Coordinating multiple services and APIs
- **Solution**: Standardized API design and comprehensive error handling

## 📊 Project Statistics

- **Lines of Code**: ~5,000+ lines across all services
- **API Endpoints**: 15+ RESTful endpoints
- **React Components**: 8+ reusable components
- **Database Collections**: 3 (dealers, reviews, cars)
- **Microservices**: 3 independent services
- **Development Time**: 6+ weeks of iterative development

## 🎉 Demo Features

### User Journey
1. **Landing Page**: Browse dealers by state
2. **Dealer Details**: View dealer information and reviews
3. **Car Inventory**: Search and filter cars by various criteria
4. **Review System**: Post reviews with sentiment analysis
5. **User Authentication**: Secure login/register functionality

### Technical Highlights
- **Real-time Sentiment Analysis**: Instant review sentiment processing
- **Advanced Filtering**: Multi-criteria car search functionality
- **Responsive Design**: Mobile-friendly interface
- **Microservices Communication**: Seamless service integration
- **Error Handling**: Graceful error management

## 🔮 Future Enhancements

- **User Dashboard**: Personalized user experience
- **Advanced Analytics**: Dealer performance metrics
- **Payment Integration**: Online payment processing
- **Mobile App**: React Native mobile application
- **Cloud Deployment**: AWS/Azure production deployment
- **CI/CD Pipeline**: Automated testing and deployment

## 📝 License

This project is part of the IBM Full Stack Software Developer Professional Certificate program.

## 👨‍💻 Author

**Mubeen Baloch**
- GitHub: [Mubeen-Baloch](https://github.com/Mubeen-Baloch)
- Project: Car Dealership Full Stack Application
- Course: IBM Full Stack Software Developer Professional Certificate

---

*This project demonstrates comprehensive full-stack development skills with modern web technologies and microservices architecture.* 

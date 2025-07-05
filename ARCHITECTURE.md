# Car Dealership Application Architecture

This document provides a detailed technical overview of the Car Dealership Full Stack Application's architecture, including system design, data flow, and technology stack.

## 🏗️ System Architecture Overview

```
CAR DEALERSHIP FULL STACK APPLICATION ARCHITECTURE
================================================================================

┌───────────────────────────────────────────────────────────────────────────────────┐
│                           FRONTEND (React.js)                                     │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐   │
│  │   Landing Page  │  │  Dealer Details │  │  Car Inventory  │  │   Reviews   │   │
│  │   (Dealers.jsx) │  │   (Dealer.jsx)  │  │ (SearchCars.jsx)│  │(PostReview) │   │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  └─────────────┘   │
│           │                     │                     │                     │     │
│           └─────────────────────┼─────────────────────┼─────────────────────┘     │
│                                 │                     │                           │
└─────────────────────────────────┼─────────────────────┼───────────────────────────┘
                                  │                     │
                                  ▼                     ▼
┌───────────────────────────────────────────────────────────────────────────────────┐
│                           DJANGO BACKEND                                          │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐   │
│  │   REST APIs     │  │   Views.py      │  │  restapis.py    │  │   URLs.py   │   │
│  │   (Port 8000)   │  │                 │  │                 │  │             │   │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  └─────────────┘   │
│           │                     │                     │                     │     │
│           └─────────────────────┼─────────────────────┼─────────────────────┘     │
│                                 │                     │                           │
└─────────────────────────────────┼─────────────────────┼───────────────────────────┘
                                  │                     │
                                  ▼                     ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                        MICROSERVICES ARCHITECTURE                               │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐    │
│  │                    CAR INVENTORY SERVICE                                │    │
│  │                    (Node.js/Express - Port 3050)                        │    │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │    │
│  │  │   app.js    │  │ inventory.js│  │  MongoDB    │  │   package   │     │    │
│  │  │ (Express)   │  │ (Mongoose)  │  │ Connection  │  │   .json     │     │    │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘     │    │
│  │           │                                                             │    │
│  │           ▼                                                             │    │
│  │  ┌─────────────────────────────────────────────────────────────────┐    │    │
│  │  │                    API ENDPOINTS                                │    │    │
│  │  │  • /cars/{dealer_id}                                            │    │    │
│  │  │  • /carsbymake/{dealer_id}/{make}                               │    │    │
│  │  │  • /carsbymodel/{dealer_id}/{model}                             │    │    │
│  │  │  • /carsbyyear/{dealer_id}/{year}                               │    │    │
│  │  │  • /carsbymaxmileage/{dealer_id}/{mileage}                      │    │    │
│  │  │  • /carsbyprice/{dealer_id}/{price}                             │    │    │
│  │  └─────────────────────────────────────────────────────────────────┘    │    │
│  └─────────────────────────────────────────────────────────────────────────┘    │
│                                    │                                            │
│                                    ▼                                            │
│  ┌─────────────────────────────────────────────────────────────────────────┐    │
│  │                    SENTIMENT ANALYSIS SERVICE                           │    │
│  │                    (Flask - Port 5000)                                  │    │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │    │
│  │  │   app.py    │  │   NLTK      │  │  VADER      │  │  Flask      │     │    │
│  │  │  (Flask)    │  │ (Natural    │  │ Sentiment   │  │  Server     │     │    │
│  │  │             │  │ Language)   │  │ Analysis    │  │             │     │    │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘     │    │
│  │           │                                                             │    │
│  │           ▼                                                             │    │
│  │  ┌─────────────────────────────────────────────────────────────────┐    │    │
│  │  │                    API ENDPOINTS                                │    │    │
│  │  │  • POST /analyze (Review sentiment analysis)                    │    │    │
│  │  └─────────────────────────────────────────────────────────────────┘    │    │
│  └─────────────────────────────────────────────────────────────────────────┘    │
│                                    │                                            │
│                                    ▼                                            │
│  ┌─────────────────────────────────────────────────────────────────────────┐    │
│  │                    DATABASE SERVICE                                     │    │
│  │                    (Node.js/Express - Port 3000)                        │    │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │    │
│  │  │   app.js    │  │ dealership.js│  │  review.js  │  │  package   │     │    │
│  │  │ (Express)   │  │ (Mongoose)  │  │ (Mongoose)  │  │  .json      │     │    │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘     │    │
│  │           │                                                             │    │
│  │           ▼                                                             │    │
│  │  ┌─────────────────────────────────────────────────────────────────┐    │    │
│  │  │                    API ENDPOINTS                                │    │    │
│  │  │  • /dealers (Get all dealers)                                   │    │    │
│  │  │  • /dealer/{id} (Get dealer details)                            │    │    │
│  │  │  • /reviews/dealer/{id} (Get dealer reviews)                    │    │    │
│  │  │  • /postreview/{id} (Post a review)                             │    │    │
│  │  └─────────────────────────────────────────────────────────────────┘    │    │
│  └─────────────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           MONGODB DATABASE                                      │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐ │
│  │   Dealers       │  │   Reviews       │  │   Cars          │  │  Database   │ │
│  │   Collection    │  │   Collection    │  │   Collection    │  │  (Docker)   │ │
│  │                 │  │                 │  │                 │  │             │ │
│  │ • dealer_id     │  │ • review_id     │  │ • car_id        │  │  Port:      │ │
│  │ • full_name     │  │ • dealer_id     │  │ • dealer_id     │  │  27017      │ │
│  │ • city          │  │ • name          │  │ • make          │  │             │ │
│  │ • state         │  │ • review        │  │ • model         │  │             │ │
│  │ • address       │  │ • sentiment     │  │ • bodyType      │  │             │ │
│  │ • zip           │  │ • car_make      │  │ • year          │  │             │ │
│  │                 │  │ • car_model     │  │ • mileage       │  │             │ │
│  │                 │  │ • car_year      │  │ • price         │  │             │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  └─────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```


## 🛠️ Technology Stack by Layer

### Frontend Layer
- **React.js 18.x** - Component-based UI framework
- **Bootstrap 5.x** - Responsive CSS framework
- **React Router** - Client-side routing
- **JavaScript ES6+** - Modern JavaScript features

### Backend Layer
- **Django 5.2.4** - Python web framework
- **Django REST Framework** - API development
- **Python 3.11** - Backend programming language

### Microservices Layer
- **Node.js 18.x** - JavaScript runtime
- **Express.js 4.18.2** - Web application framework
- **Flask** - Python microframework
- **NLTK** - Natural Language Processing
- **VADER** - Sentiment analysis algorithm

### Database Layer
- **MongoDB 6.x** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Docker** - Containerization platform

## 📊 Service Communication

### API Endpoints Overview

#### Django Backend (Port 8000)
```
GET  /djangoapp/dealers              # Get all dealers
GET  /djangoapp/dealer/{id}          # Get dealer details
GET  /djangoapp/reviews/dealer/{id}  # Get dealer reviews
POST /djangoapp/postreview/{id}      # Post a review
```

#### Car Inventory Service (Port 3050)
```
GET  /cars/{dealer_id}                    # Get cars by dealer
GET  /carsbymake/{dealer_id}/{make}       # Filter by make
GET  /carsbymodel/{dealer_id}/{model}     # Filter by model
GET  /carsbyyear/{dealer_id}/{year}       # Filter by year
GET  /carsbymaxmileage/{dealer_id}/{mileage} # Filter by mileage
GET  /carsbyprice/{dealer_id}/{price}     # Filter by price
```

#### Sentiment Analysis Service (Port 5000)
```
POST /analyze                            # Analyze review sentiment
```

#### Database Service (Port 3000)
```
GET  /dealers                            # Get all dealers
GET  /dealer/{id}                        # Get dealer details
GET  /reviews/dealer/{id}                # Get dealer reviews
POST /postreview/{id}                    # Post a review
```

## 🔐 Security & Performance Features

### Authentication & Authorization
- **Session Management** - User session handling
- **CSRF Protection** - Cross-site request forgery prevention
- **Input Validation** - Data sanitization and validation
- **Error Handling** - Comprehensive error management

```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐
│ Authentication  │  │ Error Handling  │  │ CORS Support    │  │ Validation  │
│                 │  │                 │  │                 │  │             │
│ • Session Mgmt  │  │ • Try-Catch     │  │ • Cross-Origin  │  │ • Input     │
│ • Login/Logout  │  │ • Error Msgs    │  │ • API Access    │  │ • Data      │
│ • User Auth     │  │ • Graceful      │  │ • Security      │  │ • Schema    │
│ • CSRF Tokens   │  │ • Fallbacks     │  │ • Headers       │  │ • Types     │
└─────────────────┘  └─────────────────┘  └─────────────────┘  └─────────────┘
```

### Performance Optimizations
- **CORS Support** - Cross-origin resource sharing
- **Database Indexing** - Optimized query performance
- **Caching Strategies** - Response caching for better performance
- **Load Balancing** - Distributed service architecture

## 🚀 Deployment Architecture

### Development Environment
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           DEVELOPMENT ENVIRONMENT                               │
│                                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌──────────────┐            │
│  │   React     │  │   Django    │  │  Micro-     │  │  MongoDB     │            │
│  │  (Port 3000)│  │  (Port 8000)│  │  services   │  │  (Port 27017)│            │
│  │             │  │             │  │  (Ports     │  │              │            │
│  │             │  │             │  │  5000, 3050)│  │              │            │
│  └─────────────┘  └─────────────┘  └─────────────┘  └──────────────┘            │
│           │               │               │               │                     │
│           └───────────────┼───────────────┼───────────────┘                     │
│                           │               │                                     │
│                           ▼               ▼                                     │
│  ┌─────────────────────────────────────────────────────────────────────────┐    │
│  │                    IBM SKILLS NETWORK IDE                               │    │
│  │                    (Cloud Development Environment)                      │    │
│  └─────────────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Production Considerations
- **Container Orchestration** - Docker Compose for local, Kubernetes for production
- **Load Balancing** - Multiple service instances
- **Database Clustering** - MongoDB replica sets
- **Monitoring** - Application performance monitoring
- **Logging** - Centralized logging system

## 📈 Scalability Features

### Horizontal Scaling
- **Microservices Architecture** - Independent service scaling
- **Stateless Services** - Easy replication and load balancing
- **Database Sharding** - Distributed data storage
- **API Gateway** - Centralized request routing

### Vertical Scaling
- **Resource Optimization** - Efficient memory and CPU usage
- **Database Optimization** - Indexed queries and connection pooling
- **Caching Layers** - Redis for session and data caching

## 🔧 Development Workflow

### Code Organization
```
server/
├── djangoapp/           # Django backend application
│   ├── microservices/   # Sentiment analysis service
│   ├── restapis.py      # REST API endpoints
│   └── views.py         # Django view functions
├── frontend/            # React frontend application
│   ├── src/
│   │   ├── components/  # React components
│   │   └── App.js       # Main application
│   └── package.json
├── carsInventory/       # Car inventory microservice
│   ├── app.js          # Express server
│   ├── inventory.js    # MongoDB schema
│   └── package.json
├── database/           # Database service
│   ├── app.js         # Node.js backend
│   ├── data/          # JSON data files
│   └── package.json
└── manage.py          # Django management
```

### Version Control Strategy
- **Feature Branches** - Isolated development
- **Code Reviews** - Quality assurance
- **Automated Testing** - Continuous integration
- **Documentation** - Comprehensive project docs

## 🎯 Key Architectural Decisions

### Why Microservices?
- **Scalability** - Independent service scaling
- **Maintainability** - Isolated codebases
- **Technology Diversity** - Best tool for each service
- **Team Productivity** - Parallel development

### Why MongoDB?
- **Flexible Schema** - Easy data model evolution
- **JSON-like Documents** - Natural data representation
- **Horizontal Scaling** - Built-in sharding
- **Rich Query Language** - Complex data queries

### Why React + Django?
- **Separation of Concerns** - Frontend/Backend independence
- **RESTful APIs** - Standardized communication
- **Component Reusability** - Modular UI development
- **SEO Friendly** - Server-side rendering capabilities

---

*This architecture demonstrates modern full-stack development practices with microservices, containerization, and scalable design patterns.* 

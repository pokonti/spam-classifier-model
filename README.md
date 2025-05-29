
# Spam Email Classifier

This is a very easy machine learning project that classifies emails as **Spam** or **Not Spam (Ham)** using a simple interface and backend.

## 🔧 Technologies Used
- **Python (scikit-learn)** – for training a Naive Bayes model
- **FastAPI** – lightweight API for serving predictions
- **React** – user-friendly frontend interface

## Features
- Fast and easy setup
- Spam detection with `MultinomialNB`
- Real-time email prediction form
- Red text for spam, green for ham

## Docker
1. Pull backend and frontend images
```
docker pull antay/spam-backend
docker pull antay/spam-frontend
```
2. Create a docker-compose.yml 
```
version: '3.8'

services:
  backend:
    image: antay/spam-backend:latest
    ports:
      - "8000:8000"

  frontend:
    image: antay/spam-frontend:latest
    ports:
      - "5173:80"
    depends_on:
      - backend

```
3. Run the app
```
docker-compose up
```
4. Open in browser

- Frontend: http://localhost:5173
- Backend API: http://localhost:8000/docs


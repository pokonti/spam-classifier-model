from fastapi import FastAPI
from schemas import EmailInput
import joblib
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("models/spam_classifier.pkl")
vectorizer = joblib.load("models/vectorizer.pkl")

@app.post("/predict")
def predict_spam(input_data: EmailInput):
    vect_text = vectorizer.transform([input_data.text])
    prediction = model.predict(vect_text)[0]
    label = "spam" if prediction == 1 else "ham"
    return {"label": label}

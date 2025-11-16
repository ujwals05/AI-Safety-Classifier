from fastapi import APIRouter
from pydantic import BaseModel
from models.classifier import analyze_text

router = APIRouter()

class TextRequest(BaseModel):
    text: str

@router.post("/classify")
def classify_text(req: TextRequest):
    result = analyze_text(req.text)
    return {"result": result}

@router.get("/")
def home():
    return {"message": "AI Safety Classifier API is running"}


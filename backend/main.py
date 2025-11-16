from fastapi import FastAPI
from routers.classify import router as classify_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="AI Safety Classifier API",
    description="Classifies harmful, toxic or unsafe content.",
    version="1.0"
)

# Allowed frontend origins
origins = [
    "http://localhost:5173",  # Vite React
    "http://localhost:3000",  # Create React App
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,       # Which domains can call API
    allow_credentials=True,
    allow_methods=["*"],         # GET, POST, PUT, DELETE...
    allow_headers=["*"],         # Authorization, Content-Type...
)

# Home Route
@app.get("/")
def home():
    return {"message": "AI Safety Classifier API is running!"}

# API Routes
app.include_router(classify_router, prefix="/api")

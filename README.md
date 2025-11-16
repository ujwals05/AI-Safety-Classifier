# AI Safety classifier

A lightweight AI-powered web application that detects and classifies unsafe text content such as toxicity, hate speech, harassment, and harmful language.
The project is built with a FastAPI backend and a React + Tailwind CSS frontend, providing a simple UI where users can paste any text and instantly receive a safety analysis.

# Features

- Classifies text as safe or unsafe
- Uses a machine-learning safety model(Pre-trained)
- Fast and minimal backend using FastAPI
- Simple and clean UI built with React + Tailwind CSS
- Single API endpoint: /classify
- No database — fully stateless
- No authentication required

# Project Structure

```
ai-safety-classifier/
│
├── backend/
│   ├── main.py
│   ├── model.py
│   ├── requirements.txt
│   ├── venv/
│   └── __pycache__/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── tailwind.config.js
│
└── README.md

```

# Tech Stack

**Frontend**

- React JS
- Tailwind CSS

**Backend**

- FastAPI
- Uvicorn (ASGI server)
- Python (venv environment)

# Installation

**Clone the repository**

```
git clone https://github.com/ujwals05/AI-Safety-Classifier
cd AI-Safety-Classifier
```

# Backend Set-up

_Create and activate virtual environment_

```
python -m venv venv
source venv/bin/activate      # Mac/Linux
venv\Scripts\activate         # Windows
```

_Install dependencies_

```
pip install -r requirements.txt
```

_Start FastAPI server_

```
uvicorn main:app --reload
```

**Server starts running on the localhost**

# Frontend set-up

_Install dependencies_

```
npm install
```

_Start frontend_

```
npm install
```

_Frontend runs at_

```
http://localhost:5173
```

from transformers import pipeline

print("Loading model...")

classifier = pipeline(
    "text-classification",
    model="unitary/toxic-bert",
    top_k=None
)

def analyze_text(text: str):
    result = classifier(text)
    return result

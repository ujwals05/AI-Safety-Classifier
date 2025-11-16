import { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const classifyText = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/classify", {
        text,
      });
      console.log(res)
      setResult(res.data.result);
    } catch (err) {
      console.error(err);
      alert("Error analyzing text.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        🛡️ AI Safety Classifier
      </h1>

      {/* Input Box */}
      <div className="max-w-2xl mx-auto bg-white p-5 rounded-xl shadow">
        <textarea
          className="w-full border p-3 rounded-lg focus:outline-none h-40"
          placeholder="Paste your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={classifyText}
          className="mt-4 w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Analyzing..." : "Analyze Text"}
        </button>
      </div>

      {/* Result Section */}
      {result && (
        <div className="max-w-2xl mx-auto mt-6 p-5 bg-white rounded-xl shadow">
          <h2 className="text-xl font-bold mb-3">🔍 Result</h2>

          {result[0].map((item) => (
            <div
              key={item.label}
              className="border p-3 rounded-lg mb-2 flex justify-between"
            >
              <span className="font-semibold">{item.label}</span>
              <span className="text-gray-600">
                {(item.score * 100).toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

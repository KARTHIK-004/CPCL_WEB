import { Pen } from "lucide-react";
import React, { useState } from "react";

function SuggestionBox() {
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Suggestion submitted:", suggestion);
    setSuggestion("");
    alert("Thank you for your suggestion!");
  };
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-8">
      <div className="flex items-center mb-4">
        <Pen className="h-8 w-8 text-blue-600 mr-3" />
        <h2 className="text-2xl font-bold ">SUGGESTION BOX</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          id="suggestion"
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          rows="4"
          placeholder="Share your ideas for improvement..."
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Submit Suggestion
        </button>
      </form>
    </div>
  );
}

export default SuggestionBox;

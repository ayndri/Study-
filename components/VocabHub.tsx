"use client";

import { useState } from "react";
import Flashcards from "@/components/Flashcards";
import VocabQuiz from "@/components/VocabQuiz";

export default function VocabHub() {
  const [tab, setTab] = useState<"card" | "quiz">("card");
  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        <button className={"btn sm " + (tab === "card" ? "gold" : "ghost")} onClick={() => setTab("card")}>
          ▤ Flashcard
        </button>
        <button className={"btn sm " + (tab === "quiz" ? "gold" : "ghost")} onClick={() => setTab("quiz")}>
          ✎ Kuis (SRS)
        </button>
      </div>
      {tab === "card" ? <Flashcards /> : <VocabQuiz />}
    </div>
  );
}

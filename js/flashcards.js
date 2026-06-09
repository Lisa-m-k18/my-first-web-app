async function fetchFlashcards() {
  try {
    const response = await fetch("/api/flashcards");
    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}
export async function setupFlashcards() {
  // 暗記カード機能に必要な処理を作成してください
  const flashcardsList = getElementById("flashcards-list");

  async function LeadFlashcards() {
    const wordList = await fetchFlashcards();
    renderFlashcards(wordList);
  }
  async function renderFlashcards(wordList) {
    flashcardsList.innerHTML = "";
    wordList.forEach((word) => {
      const flashcard = `
      <div class="flashcard">
        <div class="flashcard-content">
          <p class="flashcard-title">${word.word}</p>
          <div class="flashcard-icons">
            <button data-toggel="${word.id}" class="flashcard-meaning">
              <span class="ri-eye-line"></span>
            <button>
          </div>
        </div>
        <div data-meaning="${word.id}" class="hidden">
          <p class="flashcard-toggle">${word.meaning}</p>
        </div>
      </div>
      `;
      flashcardsList.innerHTML += flashcard;
    });
  }
}

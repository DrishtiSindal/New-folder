const inputText = document.getElementById('inputText');
const sourceLang = document.getElementById('sourceLang');
const targetLang = document.getElementById('targetLang');
const translatedText = document.getElementById('translatedText');

inputText.addEventListener('input', () => {
    const text = inputText.value;
    const source = sourceLang.value;
    const target = targetLang.value;
    // Call translation API
    translateText(text, source, target)
        .then((translation) => {
            translatedText.textContent = translation;
        })
        .catch((error) => {
            console.error('Translation error:', error);
            translatedText.textContent = 'Translation error. Please try again later.';
        });
});

async function translateText(text, source, target) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const url = https://google-translate1.p.rapidapi.com/language/translate/v2;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': apiKey,
        },
        body: JSON.stringify({
            q: text,
            source: source,
            target: target,
        }),
    });

    const data = await response.json();
    return data.data.translations[0].translatedText;
}
// JavaScript Algorithm to analyze a sentence

function analyzeSentence(sentence) {
    // Initialize counters
    let charCount = 0;
    let wordCount = 0;
    let vowelCount = 0;

    const vowels = 'aeiouAEIOU';
    let inWord = false;

    // Loop through each character except the last point (.)
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        // Count characters excluding the final point
        if (char !== '.') {
            charCount++;
        }

        // Check if the character is a vowel
        if (vowels.includes(char)) {
            vowelCount++;
        }

        // Count words based on space and not already being inside a word
        if (char !== ' ' && !inWord) {
            wordCount++;
            inWord = true;
        } else if (char === ' ') {
            inWord = false;
        }
    }

    // Output the results
    console.log('Number of characters:', charCount);
    console.log('Number of words:', wordCount);
    console.log('Number of vowels:', vowelCount);
}

// Example usage
const sentence = "This is an example sentence.";
analyzeSentence(sentence);
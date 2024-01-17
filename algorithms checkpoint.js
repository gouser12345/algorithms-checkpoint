function analyzeSentence(sentence) {
    // Initialize counters
    let lengthCounter = 0;
    let wordCounter = 0;
    let vowelCounter = 0;

    // Iterate through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        // Increment length counter for each character
        lengthCounter++;

        // Check if the character is a space to identify words
        if (sentence[i] === ' ') {
            wordCounter++;
        }

        // Check if the character is a vowel (considering both uppercase and lowercase)
        if (['a', 'e', 'i', 'o', 'u'].includes(sentence[i].toLowerCase())) {
            vowelCounter++;
        }
    }

    // Increment word counter by 1 to account for the last word
    wordCounter++;

    // Output the results
    console.log("Length of the sentence:", lengthCounter);
    console.log("Number of words in the sentence:", wordCounter);
    console.log("Number of vowels in the sentence:", vowelCounter);
}

// Example usage:
const sentence = prompt("Enter a sentence (ending with a period): ");
analyzeSentence(sentence);

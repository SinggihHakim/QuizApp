
# 🧠 QuizApp

Welcome to **QuizApp**! This is a simple, responsive, and interactive web-based quiz game built using **HTML**, **CSS**, and **Vanilla JavaScript**. It allows users to test their knowledge on various topics with instant feedback and score tracking.

<div align="center">
  <img src="https://placehold.co/600x400?text=Quiz+App+Preview" alt="Quiz App Screenshot" width="80%">
</div>

## 📖 Overview

The goal of this project is to demonstrate DOM manipulation and logic handling in JavaScript. Users are presented with a series of multiple-choice questions. The app tracks correct answers and displays a final score upon completion.

## ✨ Key Features

* **Dynamic Question Rendering:** Questions are loaded via JavaScript, making it easy to add or modify the quiz content.
* **Interactive Interface:**
    * Select an option to see immediate visual feedback.
    * Clean and modern UI with hover effects.
* **Score Tracking:** Calculates and displays the total score at the end of the quiz.
* **Responsive Design:** Optimized for both desktop and mobile screens.
* **Restart Functionality:** easily replay the quiz to improve your score.

## 🛠️ Technologies Used

* **HTML5:** (`index.html`) Structure of the quiz container and elements.
* **CSS3:** (`style.css`) Custom styling, layout, and animations.
* **JavaScript (ES6):** (`index.js`) Game logic, state management, and DOM updates.

## 📂 Project Structure

```text
QuizApp/
├── index.html            # Main HTML file
├── style.css             # Stylesheet for the UI
├── index.js              # Application logic (Questions & Event Listeners)
└── README.md             # Project documentation

```

## 🚀 How to Run

1. **Clone the repository:**
```bash
git clone [https://github.com/singgihhakim/quizapp.git](https://github.com/singgihhakim/quizapp.git)

```


2. **Navigate to the folder:**
```bash
cd quizapp

```


3. **Launch the App:**
* Simply double-click `index.html` to open it in your web browser.
* For a better development experience, use the "Live Server" extension in VS Code.



## 📝 How to Add More Questions

You can easily expand the quiz by editing the `index.js` file. Look for the array containing the question objects (usually named `questions` or `quizData`) and add new entries following this format:

```javascript
{
    question: "Your new question here?",
    answers: [
        { text: "Option 1", correct: false },
        { text: "Option 2", correct: true },
        { text: "Option 3", correct: false },
        { text: "Option 4", correct: false }
    ]
}

```

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the UI, add new features (like a timer or categories), or fix bugs:

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request.

---

<div align="center">
<p>Created by Singgih Hakim</p>
</div>

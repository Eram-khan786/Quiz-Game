
const questions = [
    {
      que: "Which of the following is a markup language",
      a: "HTML",
      b: "CSS",
      c: "Javascript",
      d: "Python",
      correct: "a"
    },
    {
      que: "The full form of CSS is:",
      a: "Cascading Style Sheets",
      b: "Color and Style Sheets",
      c: "Coloured Special Sheets",
      d: "None of the above",
      correct: "a"
    },
    {
      que: "How can we change the background color of an element?",
      a: "Background color",
      b: "color",
      c: "Both A and B",
      d: "None of the above",
      correct: "a"
    },
    {
      que:" Which HTML tag is used to declare internal CSS?",
      a:"<style>",
      b:"<Link>",
      c:"<script>",
      d:"<None of the above",
      correct:"a"
    },
    {
      que:" How can we select an element with a specific ID in CSS?",
      a:"#",
      b:"*",
      c:".",
      d:"None of the above",
      correct:"a"
    },
    {
      que:"Can negative values be allowed in padding property?",
      a:"Yes",
      b:"No",
      c:"Depends on the property",
      d:"None of the above",
      correct:"b"
    },
    {
      que:"The CSS property used to specify the transparency of an element is?",
      a:"opacity",
      b:"visibility",
      c:"filter",
      d:"None of the above",
      correct:"a"
    },
    {
      que:"How can we specify the spacing between each letter in a text in CSS?",
      a:"alpha-spacing",
      b:"letter-spacing",
      c:"character-spacing",
      d:"None of the above",
      correct:"b"
    },
    {
      que:"Which of the following are valid ways to represent a color in CSS?",
      a:"A valid name",
      b:"RGB values",
      c:"HEX values",
      d:"All of the above",
      correct:"d"
    },
    {
      que:"Which of the following is the correct way to select all h1 headers in a div element?",
      a:"div h1",
      b:"div-h1",
      c:"h1",
      d:"None of the above"
    }
  ];
  
  let index = 0;
  const total = questions.length;
  let right = 0;
  let wrong = 0;
  let data = null;
  
  const quesBox = document.getElementById("QuesBox");
  const optionInputs = document.querySelectorAll(".options");
  
  const loadQuestion = () => {
    if (index === total) {
      return endQuiz();
    } else {
      reset();
    }
  
    data = questions[index];
    quesBox.innerHTML = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
  };
  
  const submitQuiz = () => {
    const ans = getAnswer();
    if (ans === data.correct) {
      right++;
    } else {
      wrong++;
    }
    index++;
    loadQuestion();
  };
  
  const getAnswer = () => {
    let answer;
    optionInputs.forEach((input) => {
      if (input.checked) {
        answer = input.value;
      }
    });
    return answer;
};
  
  const reset = () => {
    optionInputs.forEach((input) => {
      input.checked = false;
    });
  };
  
  const endQuiz = () => {
    const boxDiv = document.querySelector(".box");
    boxDiv.innerHTML = `
      <h3>Thank you For Playing The Quiz</h3>
      <h2>${right}/${total}</h2> are correct`;
};
  
loadQuestion();
  
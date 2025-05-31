document.addEventListener("DOMContentLoaded", function () {
  class Fortune {
    constructor(fortuneList) {
      this.text = fortuneList[Math.floor(Math.random() * fortuneList.length)];
      this.goodLuckNumbers = [];
      this.drawGoodLuckNumbers();
    }

    drawGoodLuckNumbers() {
      let maxDraws = 3,
        draws = maxDraws,
        maxNumber = 50,
        numberCapacity = [];

      // Fill number pool
      while (maxNumber > 0) {
        numberCapacity.unshift(maxNumber);
        maxNumber--;
      }

      // Draw random numbers
      while (draws > 0) {
        let drawn = Math.floor(Math.random() * numberCapacity.length);
        this.goodLuckNumbers.push(numberCapacity[drawn]);
        numberCapacity.splice(drawn, 1);
        draws--;
      }
    }
  }

  var fcBtn = document.querySelector("button"),
    fortuneText = document.querySelector(".fc-fortune-text"),
    fortuneGoodLuckNumbers = document.querySelector(".fc-lucky-numbers span"),
    fortuneList = [
      "Hope you have an excellent day filled with many wonders.",
      "You have an ability to sense and become a higher authority.",
      "Great time to be in high school before summer 2025 arrives.",
      "Hot girl summer or hot boy summer!",
      "Don't look back on the past; keep moving forward and be the newer version of yourself.",
      "Master Oogway would be proud of you.",
      "You're very lucky to be upon the earth and walking around.",
      "Hello, Mr. Alvarado, keep clicking.",
      "You will forget the horrendous things you did.",
      "The future looks amazing. You will have an excellent evening.",
      "You have the capability to learn from mistakes. You’ll learn a lot today.",
      "You have a lot of potential to become a pro and wealthy.",
      "Can't wait for you to pass the semester this year!",
      "You will hear the most excellent news tomorrow morning.",
      "There was a phone call for you saying to leave your ex and move on.",
    ],
    fortune = new Fortune(fortuneList);

  function getFortune() {
    fortune = new Fortune(fortuneList);
    fortuneText.innerHTML = fortune.text;
    fortuneGoodLuckNumbers.innerHTML = fortune.goodLuckNumbers.join(", ");
  }

  function nextState() {
    let elClass = this.classList,
      spawned = "spawned",
      opened = "opened";

    // Open cookie
    if (elClass.contains(spawned)) {
      elClass.remove(spawned);
      elClass.add(opened);
    } else {
      // New cookie
      elClass.remove(opened);
      elClass.add(spawned);
      getFortune();
    }
  }

  getFortune();

  // Ensure the button exists before adding the event listener
  if (fcBtn) {
    fcBtn.addEventListener("click", nextState);
  } else {
    console.error("Button not found in the DOM.");
  }
});


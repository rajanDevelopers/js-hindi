const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
// console.log(buttons);
// console.log(body);

buttons.forEach(function (button) {
  //   console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target.id);

    // if (e.target.id === "gray") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "yellow") {
    //   body.style.backgroundColor = e.target.id;
    // }

    // if (e.target.id === "white") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "purple") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "blue") {
    //   body.style.backgroundColor = e.target.id;
    // }

    // Using Switch Case

    switch (e.target.id) {
      case "gray":
        body.style.backgroundColor = e.target.id;
        break;

      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;

      case "white":
        body.style.backgroundColor = e.target.id;
        break;

      case "purple":
        body.style.backgroundColor = e.target.id;
        break;

      case "blue":
        body.style.backgroundColor = e.target.id;
        break;

      default:
        body.style.backgroundColor = "orange";
        break;
    }
  });
});

// Create a function to initialize the feedback widget
function initFeedbackWidget() {
  // Create a container for the feedback widget
  var container = document.createElement("div");
  container.id = "feedback-widget-container";
  container.style.position = "fixed";
  container.style.bottom = "20px";
  container.style.right = "20px";
  container.style.zIndex = "1000";
  container.style.background = "white";
  container.style.padding = "10px";
  container.style.border = "1px solid #ccc";
  container.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";

  // Create the feedback input field
  var feedbackInput = document.createElement("input");
  feedbackInput.type = "text";
  feedbackInput.placeholder = "Enter your feedback";
  feedbackInput.style.width = "200px";

  // Create the submit button
  var submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.style.marginLeft = "10px";
  submitButton.onclick = function () {
    var feedbackText = feedbackInput.value;
    // You can send the feedback data to your server or perform any desired action here
    alert("Feedback submitted: " + feedbackText);
  };

  // Append the input and button to the container
  container.appendChild(feedbackInput);
  container.appendChild(submitButton);

  // Append the container to the body
  document.body.appendChild(container);
}

// Call the initFeedbackWidget function to initialize the widget
initFeedbackWidget();

vnscript(`
// Get the ball element
    const ballElement = document.getElementById('ball');
    let ballX = 200; // Ball's initial X position
    let ballY = 200; // Ball's initial Y position
    let ballXDirection = 2; // Ball's horizontal direction (1 for right, -1 for left)
    let ballYDirection = 1; // Ball's vertical direction (1 for down, -1 for up)

    // Handle keyboard events
    window.addEventListener('keydown', (event) => {
      if (event.keyCode === 37) { // Left arrow key
        ballXDirection = -1;
      } else if (event.keyCode === 39) { // Right arrow key
        ballXDirection = 1;
      }
    });

    // Update the ball's position every 10 milliseconds
    setInterval(() => {
      // Update ball's X position
      ballX += ballXDirection;

      // Check if ball hits the left or right edge of the window
      if (ballX < 0 || ballX > window.innerWidth - 50) {
        ballXDirection *= -1; // Reverse the ball's horizontal direction
      }

      // Update ball's Y position
      ballY += ballYDirection;

      // Check if ball hits the top or bottom edge of the window
      if (ballY < 0 || ballY > window.innerHeight - 50) {
        ballYDirection *= -1; // Reverse the ball's vertical direction
      }

      // Apply the updated position to the ball element
      ballElement.style.left = ballX + 'px';
      ballElement.style.top = ballY + 'px';
    }, 10);



    const ball2Element = document.getElementById('ball2');
    let ball2X = 500; // Ball's initial X position
    let ball2Y = 400; // Ball's initial Y position
    let ball2XDirection = 2; // Ball's horizontal direction (1 for right, -1 for left)
    let ball2YDirection = 1; // Ball's vertical direction (1 for down, -1 for up)

    // Handle keyboard events
    window.addEventListener('keydown', (event) => {
      if (event.keyCode === 37) { // Left arrow key
        ball2XDirection = -1;
      } else if (event.keyCode === 39) { // Right arrow key
        ball2XDirection = 1;
      }
    });

    // Update the ball's position every 10 milliseconds
    setInterval(() => {
      // Update ball's X position
      ball2X += ball2XDirection;

      // Check if ball hits the left or right edge of the window
      if (ball2X < 0 || ball2X > window.innerWidth - 50) {
        ball2XDirection *= -1; // Reverse the ball's horizontal direction
      }

      // Update ball's Y position
      ball2Y += ball2YDirection;

      // Check if ball hits the top or bottom edge of the window
      if (ball2Y < 0 || ball2Y > window.innerHeight - 50) {
        ball2YDirection *= -1; // Reverse the ball's vertical direction
      }

      // Apply the updated position to the ball element
      ball2Element.style.left = ball2X + 'px';
      ball2Element.style.top = ball2Y + 'px';
    }, 10);



    const ball3Element = document.getElementById('ball3');
    let ball3X = 300; // Ball's initial X position
    let ball3Y = 300; // Ball's initial Y position
    let ball3XDirection = 2; // Ball's horizontal direction (1 for right, -1 for left)
    let ball3YDirection = 1; // Ball's vertical direction (1 for down, -1 for up)

    // Handle keyboard events
    window.addEventListener('keydown', (event) => {
      if (event.keyCode === 37) { // Left arrow key
        ball3XDirection = -1;
      } else if (event.keyCode === 39) { // Right arrow key
        ball3XDirection = 1;
      }
    });

    // Update the ball's position every 10 milliseconds
    setInterval(() => {
      // Update ball's X position
      ball3X += ball3XDirection;

      // Check if ball hits the left or right edge of the window
      if (ball3X < 0 || ballX > window.innerWidth - 50) {
        ball3XDirection *= -1; // Reverse the ball's horizontal direction
      }

      // Update ball's Y position
      ball3Y += ball3YDirection;

      // Check if ball hits the top or bottom edge of the window
      if (ball3Y < 0 || ball3Y > window.innerHeight - 50) {
        ball3YDirection *= -1; // Reverse the ball's vertical direction
      }

      // Apply the updated position to the ball element
      ball3Element.style.left = ball3X + 'px';
      ball3Element.style.top = ball3Y + 'px';
    }, 10);
`)
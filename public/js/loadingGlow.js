function loadContent() {
    // Show the loading button
    const loadingButton = document.getElementById('loadingButton');
    // loadingButton.style.display = 'inline-block';
  
    // Simulate content loading with a timeout
    setTimeout(() => {
      // Hide the loading button and show the content
      loadingButton.style.display = 'none';
      document.getElementById('content').style.display = 'block';
    }, 4000); // Simulate a 2-second loading time
  }
  
  // Call the function to start loading content
  loadContent();
  
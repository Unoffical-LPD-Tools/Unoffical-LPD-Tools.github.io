pipButton.addEventListener('click', async () => {
    // Open a Picture-in-Picture window.
    console.log("Trying to open timer in PIP")
    const pipWindow = await documentPictureInPicture.requestWindow();
    const newDiv = document.createElement('div');
              newDiv.innerHTML =  
              `<style>body{background: #1e1f22;margin: 0;overflow: hidden;}</style><iframe id="frame" src="timer.html" style="border: 0; width: 100vw; height: 100vw" scrolling="no"></iframe>`;
    
    // Set the new window to newDiv
    pipWindow.document.body.append(newDiv);
  });
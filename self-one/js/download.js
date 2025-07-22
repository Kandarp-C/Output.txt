 // Download button logic
    function downloadImage() {
      const dataURL = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "cmd-text-on-image.png";
      link.click();
    }
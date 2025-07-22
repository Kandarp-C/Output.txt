 const canvas = document.getElementById("textImageCanvas");
    const ctx = canvas.getContext("2d");

    // Load the base image (CMD background or screenshot)
    const image = new Image();
    image.src = "cmd_base_images/cmd_base.png"; // 🔁 Your actual image file path

    image.onload = function () {
      // Set canvas size to match the image
      canvas.width = image.width;
      canvas.height = image.height;

      // Draw the image first
      ctx.drawImage(image, 0, 0);

      // === Text settings ===
      ctx.font = "20px 'Cascadia Mono', 'Consolas', monospace";
      ctx.fillStyle = "#CCCCCC"; // CMD grey text
      ctx.textAlign = "left";
      ctx.textBaseline = "top";

      // Multiline text
      const lines = [
        "This text was inserted in html and the text below it", 
        "Microsoft Windows [Version 10.0.26100.4652]",
        "(c) Microsoft Corporation. All rights reserved.",
        "",
        "C:\\Users\\kandarp>_" // Simulated prompt
      ];

      const x = 10; // X offset
      let y = 60;   // Starting Y offset
      const lineHeight = 30; // Line spacing

      // Draw each line
      lines.forEach(line => {
        ctx.fillText(line, x, y);
        y += lineHeight;
      });
    };
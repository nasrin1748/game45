  // Get the canvas element and its context
        var canvas = document.getElementById("myCanvas");
        var context = canvas.getContext("2d");

        // Create a new image object
        var img = new Image();
        img.src = 'Untitled.png'; // Specify the path to your image

        // Variables to store the mouse position
        var mouseX = 0;
        var mouseY = 0;

        // Event listener to track mouse movement
        canvas.addEventListener('mousemove', function(event) {
            mouseX = event.offsetX;
            mouseY = event.offsetY;
            drawTorchEffect();
        });

        // Function to draw the torch effect
        function drawTorchEffect() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.globalCompositeOperation = 'source-over';
            context.drawImage(img, 0, 0, canvas.width, canvas.height);

            context.globalCompositeOperation = 'destination-in';

            var gradient = context.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 100);
            gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

            context.fillStyle = gradient;
            context.fillRect(0, 0, canvas.width, canvas.height);
        }

        // Draw the image on the canvas once it has loaded
        img.onload = function() {
            drawTorchEffect();
        };

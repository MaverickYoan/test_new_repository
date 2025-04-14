// Wait for the HTML document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Get the button element by its ID
    const infoButton = document.getElementById('infoButton');
    // Get the image element
    const packImage = document.getElementById('packImage');

    // Check if the button exists
    if (infoButton) {
        // Add an event listener for the 'click' event
        infoButton.addEventListener('click', function() {
            // Log a message to the browser's developer console
            console.log("------------------------------");
            console.log("YO! TEK2OUF STARTER PACK Info:");
            console.log("Image Source:", packImage.src);
            console.log("Vibe: Rétro 1999, Contestataire, Underground Free Party");
            console.log("Contenu: Alien, Surface Pro 7, Cables, Mic, Réplique 9mm, Subwoofer");
            console.log("Lieu: Forêt supernaturelle hantée");
            console.log("------------------------------");

            // Optional: Alert message (can be annoying, console is better)
            // alert("Check the console (F12) for more details!");
        });
    } else {
        console.error("Error: Button with ID 'infoButton' not found.");
    }

    // Example: Log image source on load (or error)
    if (packImage) {
        packImage.onload = () => {
            console.log("Pack image loaded successfully:", packImage.src);
        };
        packImage.onerror = () => {
            console.error("Error loading pack image. Check the 'src' attribute in index.html and the filename:", packImage.src);
            // You could replace the src with a default "not found" image here
            // packImage.src = 'image_not_found.png';
        };
        // If the image is already cached, onload might not fire, so check complete status
        if (packImage.complete && packImage.naturalWidth > 0) {
             console.log("Pack image was already loaded (possibly cached):", packImage.src);
        } else if (packImage.complete) {
             console.error("Error loading pack image (already complete but failed). Check the 'src' attribute in index.html and the filename:", packImage.src);
        }
    } else {
         console.error("Error: Image with ID 'packImage' not found.");
    }

}); // End of DOMContentLoaded
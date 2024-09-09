---
layout: page
title: About
permalink: /about/
---
# Arhaan Memon: A Rising Star in Tech and Sports

Ever met someone who can seamlessly balance their passion for sports and cutting-edge technology? Meet **Arhaan Memon**, a 10th grader with a love for **basketball** and a keen interest in **computer science** and **data analytics**. Whether he's on the court or coding the next big app, Arhaan is always striving for excellence.

![Basketball Action](../images/arhaan-bball.jpg)

With an eye on the future, Arhaan’s combination of athletic drive and technical prowess makes him stand out. As a player for his high school basketball team, he’s learned discipline and teamwork, both of which he applies to his coding projects. Arhaan dreams of merging his love for sports and tech to revolutionize the game through data analytics. [Learn more about how data analytics is transforming sports](https://www.analyticsvidhya.com/blog/2021/10/data-analytics-in-sports-how-it-is-changing-the-game/).

Curious about how technology is changing the future of basketball? Read this article on [emerging tech in sports](https://www.nba.com/news/how-technology-is-changing-the-future-of-basketball) to see how Arhaan’s vision might shape the game.

<style>
    /* Style looks pretty compact, trace grid-container and grid-item in the code */
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Dynamic columns */
        gap: 10px;
    }
    .grid-item {
        text-align: center;
    }
    .grid-item img {
        width: 100%;
        height: 100px; /* Fixed height for uniformity */
        object-fit: contain; /* Ensure the image fits within the fixed height */
    }
    .grid-item p {
        margin: 5px 0; /* Add some margin for spacing */
    }
</style>

<!-- This grid_container class is for the CSS styling, the id is for JavaScript connection -->

# Places I Like
<div class="grid-container" id="grid_container">
    <!-- content will be added here by JavaScript -->
</div>

# My journey so far....
<div id="gallery-container" style="text-align: center;">
  <img id="gallery-image" src="../images/galary/image1.jpg" alt="Image Gallery" style="width: 400px; height: auto;">
  <br>
  <button id="prev-btn">Previous</button>
  <button id="next-btn">Next</button>
</div>

# Star Performances

<iframe width="560" height="315" src="https://www.youtube.com/embed/H-LcQApiDPs?si=Fs4qNbc2NrPilHFV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



<script>
    // 1. Make a connection to the HTML container defined in the HTML div
    var container = document.getElementById("grid_container"); // This container connects to the HTML div

    // 2. Define a JavaScript object for our http source and our data rows for the Living in the World grid
    var http_source = "https://upload.wikimedia.org/wikipedia/commons/";
    var living_in_the_world = [
        {"flag": "b/bb/Panorama_de_San_Diego.jpg", "reason": "This is where I roll!", "description": "San Diego - Live Here"},
        {"flag": "3/3a/Full_Denver_skyline.jpg", "reason": "Love going there!", "description": "Denver - My cousins live here"},
        {"flag": "8/86/The_Arch_of_Cabo_San_Lucas.jpg", "reason": "Lots of fun!", "description": "Cabo, San Lucas - Vacationing"},
        {"flag": "7/73/Taj_Mahal_Palace_Hotel.jpg", "reason" : "Great Food!", "description": "Mumbai - Parents Childhood"},
    ]; 
    
    // 3a. Consider how to update style count for size of container
    // The grid-template-columns has been defined as dynamic with auto-fill and minmax

    // 3b. Build grid items inside of our container for each row of data
    for (const location of living_in_the_world) {
        // Create a "div" with "class grid-item" for each row
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";  // This class name connects the gridItem to the CSS style elements
        // Add "img" HTML tag for the flag
        var img = document.createElement("img");
        img.src = http_source + location.flag; // concatenate the source and flag
        img.alt = location.flag + " Flag"; // add alt text for accessibility

        // Add "p" HTML tag for the description
        var description = document.createElement("p");
        description.textContent = location.description; // extract the description

        // Add "p" HTML tag for the greeting
        var reason = document.createElement("p");
        reason.textContent = location.reason;  // extract the greeting

        // Append img and p HTML tags to the grid item DIV
        gridItem.appendChild(img);
        gridItem.appendChild(description);
        gridItem.appendChild(reason);

        // Append the grid item DIV to the container DIV
        container.appendChild(gridItem);
    }
</script>

<script>
    // Array of image filenames located in the 'images' directory
    const imageFilenames = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg"

    ];

    let currentIndex = 0;  // To keep track of the currently displayed image

    // Reference to the gallery image element
    const galleryImage = document.getElementById('gallery-image');

    // Function to update the displayed image
    function updateImage() {
        galleryImage.src = `../images/galary/${imageFilenames[currentIndex]}`;
        galleryImage.alt = imageFilenames[currentIndex];
    }

    // Event listeners for the buttons
    document.getElementById('prev-btn').addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : imageFilenames.length - 1;
        updateImage();
    });

    document.getElementById('next-btn').addEventListener('click', function() {
        currentIndex = (currentIndex < imageFilenames.length - 1) ? currentIndex + 1 : 0;
        updateImage();
    });
</script>


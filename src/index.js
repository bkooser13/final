<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>ART 330 - Final Website_Samantha Zimmerman</title>

    <!-- STEP 2 ADD THE LINK TO THE FONT YOU WANT TO USE FROM GOOGLE FONTS  -->
    <link
      <link
      href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
      rel="stylesheet"
    />
    />

    <!-- STEP 1 ADD YOUR STYLESHEET -->
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <!-- STEP 3 ADD YOUR SKELETON -->
    <!-- note: an 'id' can only be used once on a page (it is unique) -->
    <div id="main">
      <!-- STEP 4 ADD YOUR MAIN ILLUSTRATION -->
      <div class="hero">
        <!-- <img src="/img/Weather-09.png" alt="happy sun"> -->
        <img src="/img/Crown.png" alt="Crown" />
      </div>

      <!-- SETP 5 ADD YOUR STORY -->
      <div class="story">
        <!-- note: put each paragraph in a 'p' tag -->
        <p>
          Princess Pearl, a strong and independent girl, must save her kingdom.
          The surrounding territories have started to rebel. Life as she knows
          it had started to crumble around her. Will she fight for what she
          knows, or allow others to choose her path?
        </p>
      </div>
      <div class="three_choices">
        <!-- STEP 6 ADD YOUR CHOICES -->
        <!-- note: a 'class' can be used mulitple times -->
        <div class="choice">
          <!-- NOTE: THESE CAN BE IMAGES OR TEXT BUT MUST BE IN 'A' TAGS -->
          <!-- the 'href' is the location the viewer will be taken to when they click on the image or text -->
          <a href="/Marraige.html">
            <img src="/img/Wedding Ring.png" alt="wedding ring" />
          </a>
        </div>
        <div class="choice">
          <a href="/Fight.html">
            <img src="/img/Swords.png" alt="swords" />
          </a>
        </div>
        <div class="choice">
          <a href="/Help.html">
            <img src="/img/Other kingdom.png" alt="castle" />
          </a>
        </div>
      </div>
    </div>
    <script src="/script.js"></script>
  </body>
</html>
 
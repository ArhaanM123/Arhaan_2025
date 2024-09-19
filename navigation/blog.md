---
layout: blogs 
title: Blogs
search_exclude: true
permalink: /blogs/
---
<link rel="stylesheet" href="{{ '/assets/css/main.css' | relative_url }}">

<button onclick="toggleTheme()">Change Theme</button>

<script>
  function toggleTheme() {
    const body = document.body;

    // If the current theme is blue, switch to red
    if (body.classList.contains('blue-theme')) {
      body.classList.remove('blue-theme');
      body.classList.add('red-theme');
    } else {
      // Otherwise, switch to blue
      body.classList.remove('red-theme');
      body.classList.add('blue-theme');
    }
  }

  // Set initial theme
  document.body.classList.add('blue-theme');  // Default theme
</script>
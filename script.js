function searchFunction() {
    let value = document.getElementById("searchBox").value.toLowerCase();
    let result = document.getElementById("result");
    let recDiv = document.getElementById("recommendations");
  
    recDiv.innerHTML = "";
  
    if (value.trim() === "") {
      alert("Please enter something to search!");
      return;
    }
  
    // 🌊 BEACH
    if (value.includes("beach")) {
      result.innerText = "Beach recommendations:";
  
      recDiv.innerHTML = `
        <div class="recommendation-grid">
  
          <div class="rec-card">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400">
            <p>Maldives Beach</p>
          </div>
  
          <div class="rec-card">
            <img src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400">
            <p>Bali Beach</p>
          </div>
  
        </div>
      `;
    }
  
    // 🛕 TEMPLE
    else if (value.includes("temple")) {
      result.innerText = "Temple recommendations:";
  
      recDiv.innerHTML = `
        <div class="recommendation-grid">
  
          <div class="rec-card">
            <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400">
            <p>Golden Temple</p>
          </div>
  
          <div class="rec-card">
            <img src="https://images.unsplash.com/photo-1548013146-72479768bada?w=400">
            <p>Ancient Temple</p>
          </div>
  
        </div>
      `;
    }
  
    // 🌍 COUNTRY (NEW FEATURE ADDED)
    else if (value.includes("country")) {
      result.innerText = "Country recommendations:";
  
      recDiv.innerHTML = `
        <div class="recommendation-grid">
  
          <div class="rec-card">
            <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400">
            <p>France</p>
          </div>
  
          <div class="rec-card">
            <img src="https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb?w=400">
            <p>Japan</p>
          </div>
  
        </div>
      `;
    }
  
    else {
      result.innerText = "No results found for: " + value;
    }
  
    alert("Search completed: " + value);
  }
  
  function clearFunction() {
    document.getElementById("searchBox").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("recommendations").innerHTML = "";
  }
  
  /* CONTACT FORM ALERT */
  document.getElementById("contactForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
  });
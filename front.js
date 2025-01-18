// Function to show notes for each year
function showYearNotes(year) {
    const notesContent = document.getElementById('year-notes');
    notesContent.innerHTML = ''; // Clear previous content
  
    let content = '';
  
    // Dynamically populate content based on selected year
    if (year === 1) {
      content = `
        <div class="note">
          <h3>Year 1 Notes</h3>
          <p>Maths - Integration, Derivatives</p>
          <p>Physics - Mechanics, Thermodynamics</p>
        </div>
        <div class="note">
          <h3>Year 1 Notes - Continued</h3>
          <p>Chemistry - Organic Chemistry</p>
        </div>
      `;
    } else if (year === 2) {
      content = `
        <div class="note">
          <h3>Year 2 Notes</h3>
          <p>Computer Science - Data Structures</p>
          <p>Electronics - Circuit Theory</p>
        </div>
        <div class="note">
          <h3>Year 2 Notes - Continued</h3>
          <p>Mathematics - Linear Algebra</p>
        </div>
      `;
    } else if (year === 3) {
      content = `
        <div class="note">
          <h3>Year 3 Notes</h3>
          <p>Software Engineering - Agile Methodologies</p>
          <p>Electrical Engineering - Power Systems</p>
        </div>
        <div class="note">
          <h3>Year 3 Notes - Continued</h3>
          <p>Advanced Computer Networks</p>
        </div>
      `;
    }
  
    notesContent.innerHTML = content;
  }
  
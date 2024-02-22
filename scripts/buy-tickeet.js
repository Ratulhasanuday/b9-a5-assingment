function buyButtonClick(){
    const mainSection=document.getElementById('main-content')
    mainSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });  
}

const maxSelections = 4;
let selectedCount = 0;

// Get all site elements
const sites = document.querySelectorAll('#site');
const tableBody = document.getElementById('table-body');
const siteTotalButton = document.getElementById('site-total');

// Initialize total seats left
let seatsLeft = 40;

// Update the initial count in the button
siteTotalButton.querySelector('p').textContent = `${seatsLeft} Seats left`;

// Attach click event listener to each site
for (let i = 0; i < sites.length; i++) {
  sites[i].addEventListener('click', function(event) {
    const clickedSite = event.target;

    // Check if maximum selections reached
    if (selectedCount < maxSelections || clickedSite.classList.contains('selected')) {
      // Toggle the selection state
      if (!clickedSite.classList.contains('selected')) {
        // Select the site
        clickedSite.classList.add('selected');
        selectedCount++;
        // Decrement available seats
        seatsLeft--;
      } else {
        // Deselect the site
        clickedSite.classList.remove('selected');
        selectedCount--;
        // Increment available seats
        seatsLeft++;
      }

      // Update the count in the button
      siteTotalButton.querySelector('p').textContent = `${seatsLeft} Seats left`;

      // Change background color based on selection
      for (let j = 0; j < sites.length; j++) {
        if (sites[j].classList.contains('selected')) {
          sites[j].style.backgroundColor = 'green';
        } else {
          sites[j].style.backgroundColor = '';
        }
      }

      // Update table
      updateTable();
    } else {
      // Max selections reached, show message or handle accordingly
      alert("You can only select a maximum of 4 sites.");
    }
  });
}

function updateTable() {
  // Clear existing table rows
  tableBody.innerHTML = '';

  // Create rows for selected sites
  for (let i = 0; i < sites.length; i++) {
    const site = sites[i];
    if (site.classList.contains('selected')) {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${site.textContent}</td>
        <td>Economy</td>
        <td>550</td>
      `;
      tableBody.appendChild(newRow);
    }
  }
}

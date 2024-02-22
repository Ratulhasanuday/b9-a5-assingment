function buyButtonClick(){
    const mainSection=document.getElementById('main-content')
    mainSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });  
}



// const maxSelections = 4;
// let selectedCount = 0;

// const sites = document.querySelectorAll('#site');

// for (let i = 0; i < sites.length; i++) {
//   sites[i].addEventListener('click', function(event) {
//     const clickedSite=event.target;
//     if (!clickedSite.classList.contains('selected')) {
//       // If not selected, check if max selections reached
//       if (selectedCount < maxSelections) {
//         // Select the site
//         clickedSite.classList.add('selected');
//         selectedCount++;
//       }
//     } else {
//       // Deselect the site
//       clickedSite.classList.remove('selected');
//       selectedCount--;
//     }

    // Apply background color based on selection state

//   });
// }

const maxSelections = 4;
let selectedCount = 0;

// Get all site elements
const sites = document.querySelectorAll('#site');
const tableBody = document.getElementById('table-body');

// Attach click event listener to each site
for (let i = 0; i < sites.length; i++) {
  sites[i].addEventListener('click', function() {
    // Check if maximum selections reached
    if (selectedCount < maxSelections) {
      // Toggle the selection state
      if (!this.classList.contains('selected')) {
        // Select the site
        this.classList.add('selected');
        selectedCount++;

        // Create a new row in the table body
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
          <td>${this.textContent}</td>
          <td>Economy</td>
          <td>550</td>
        `;
        tableBody.appendChild(newRow);
      } else {
        // Deselect the site
        this.classList.remove('selected');
        selectedCount--;
        for (let j = 0; j < sites.length; j++) {
          if (sites[j].classList.contains('selected')) {
            sites[j].style.backgroundColor = 'green';
          } else {
            sites[j].style.backgroundColor = '';
          }
        }
        // Remove the corresponding row from the table body
        const rows = tableBody.getElementsByTagName('tr');
        for (let j = 0; j < rows.length; j++) {
          if (rows[j].getElementsByTagName('td')[0].textContent === this.textContent) {
            tableBody.removeChild(rows[j]);
            break;
          }
        }
      }
    } else {
      // Max selections reached, show message or handle accordingly
      alert("You can only select a maximum of 4 sites.");
    }
  });
}

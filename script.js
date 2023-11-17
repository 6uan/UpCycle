// DARK MODE LOGIC

document.addEventListener('DOMContentLoaded', (event) => {
  let isDarkMode = false; // Initially, dark mode is off
  let isMotion = true; // Initially, site has motion

  // Select the dark mode button, motion, and icons
  const toggleDarkmodeButton = document.getElementById('darkmodeButton');
  const toggleMotionButton = document.getElementById('motionButton');
  const moonIcon = document.getElementById('moonIcon');
  const sunIcon = document.getElementById('sunIcon');

  const lightImg = document.getElementById('light_img');
  const darkImg = document.getElementById('dark_img');


  const onIconDark = document.getElementById('onIconDark');
  const onIconLight = document.getElementById('onIconLight');
  const offIconDark = document.getElementById('offIconDark');
  const offIconLight = document.getElementById('offIconLight');  
  
 function toggleIcons() {
  // Light mode, motion on
  if (!isDarkMode && isMotion) {
    moonIcon.style.display = 'inline-block';
    sunIcon.style.display = 'none';
    lightImg.style.display = 'inline-block';
    darkImg.style.display = 'none';
    onIconDark.style.display = 'inline-block';
    onIconLight.style.display = 'none';
    offIconDark.style.display = 'none';
    offIconLight.style.display = 'none';
  } 
  // Light mode, motion off
  else if (!isDarkMode && !isMotion) {
    moonIcon.style.display = 'inline-block';
    sunIcon.style.display = 'none';
    lightImg.style.display = 'inline-block';
    darkImg.style.display = 'none';
    onIconDark.style.display = 'none';
    onIconLight.style.display = 'none';
    offIconDark.style.display = 'inline-block';
    offIconLight.style.display = 'none';
  } 
  // Dark mode, motion on
  else if (isDarkMode && isMotion) {
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'inline-block';
    lightImg.style.display = 'none';
    darkImg.style.display = 'inline-block';
    onIconDark.style.display = 'none';
    onIconLight.style.display = 'inline-block';
    offIconDark.style.display = 'none';
    offIconLight.style.display = 'none';
  } 
  // Dark mode, motion off
  else if (isDarkMode && !isMotion) {
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'inline-block';
    lightImg.style.display = 'none';
    darkImg.style.display = 'inline-block';
    onIconDark.style.display = 'none';
    onIconLight.style.display = 'none';
    offIconDark.style.display = 'none';
    offIconLight.style.display = 'inline-block';
  }
}

  // Event listener for the darkmode click
  toggleDarkmodeButton.addEventListener('click', () => {
    isDarkMode = !isDarkMode; // Toggle the state of isDarkMode
    document.body.classList.toggle('dark-mode'); // Toggle the .dark-mode class
    toggleIcons(); // Call the function to toggle icons
  });


  // Event listener for motion
  toggleMotionButton.addEventListener('click', () => {
    isMotion = !isMotion; // Toggle the state of isMotion

    if(!isMotion){
      console.log("no motion");
    } else {
      console.log("motion")
    }

    document.body.classList.toggle('motion-toggle'); // Toggle the .dark-mode class
    toggleIcons(); // Call the function to toggle icons
  });

  // Call toggleIcons initially if needed
  toggleIcons();
});


// PETITION FORM LOGIC

document.addEventListener('DOMContentLoaded', () => {
  const signatureList = document.getElementById('signatureList');
  const signatureCount = document.getElementById('signatureCount');
  let numberOfSignatures = 0;

  document.getElementById('petitionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    let form = this; // 'this' refers to the form element
    let elements = form.elements;
    let formIsValid = true;
    let nameInputValue = ''; // Initialize variable to store the name

    for (let i = 0; i < elements.length; i++) {
      let input = elements[i];
      if (input.type !== "submit" && input.type !== "button") { // Exclude buttons and submit inputs
        if (input.value.trim() === "" && input.name !== "comments") { // Since comments are optional
          // Add error class if the field is required and empty
          input.classList.add('error');
          formIsValid = false;
        } else {
          // Remove error class from inputs that are not empty
          input.classList.remove('error');
          if (input.name === 'name') { // Capture the name input value
            nameInputValue = input.value.trim();
          }
        }
      }
    }

    if (formIsValid && nameInputValue) {
      numberOfSignatures++;
      signatureCount.textContent = `Total Signatures: ${numberOfSignatures}`;

      let listItem = document.createElement('li');
      listItem.textContent = nameInputValue; // Use the captured name value
      signatureList.appendChild(listItem);

      form.reset(); // Reset the form for the next input
    }
  });
});

// CLOSING SIDENAV

document.addEventListener('DOMContentLoaded', (event) => {
  var sidenav = document.getElementsByClassName("sidenav")[0];
  var body = document.getElementsByTagName("body")[0];

  // Set initial width style to match the CSS and avoid the need for a double click
  sidenav.style.width = '200px';
  body.style.marginLeft = '200px';
});

function toggleSidenav() {
  var sidenav = document.getElementsByClassName("sidenav")[0];
  var body = document.getElementsByTagName("body")[0];

  if (sidenav.style.width === '200px') {
    sidenav.style.width = '0';
    body.style.marginLeft= '0';
  } else {
    sidenav.style.width = '200px';
    body.style.marginLeft = '200px';
  }
}


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


  toggleMotionButton.addEventListener('click', () => {
    isMotion = !isMotion; // Toggle the state of isMotion
  
    // Log the motion state to the console
    if (!isMotion) {
      console.log("Motion: OFF");
      // Select all elements with the 'revealable' class and remove it
      document.querySelectorAll('.revealable').forEach(el => {
        el.classList.remove('revealable');
        // Optionally, add a marker class to know which elements to add 'revealable' back to
        el.classList.add('was-revealable');
      });
    } else {
      console.log("Motion: ON");
      // Select all elements with the 'was-revealable' class and add 'revealable' back
      document.querySelectorAll('.was-revealable').forEach(el => {
        el.classList.add('revealable');
        // Remove the marker class as it's no longer needed
        el.classList.remove('was-revealable');
      });
    }
  
    // Toggle the 'motion-toggle' class on the body, depending on the isMotion state
    document.body.classList.toggle('motion-toggle', isMotion);
  
    // Call the function to update the icons
    toggleIcons();
  });
  

  // Call toggleIcons initially if needed
  toggleIcons();
});


document.addEventListener('DOMContentLoaded', () => {
  const signatureList = document.getElementById('signatureList');
  const signatureCount = document.getElementById('signatureCount');
  const modal = document.getElementById('thanks-modal');
  const modalContent = document.getElementById('thanks-modal-content');
  const closeModalButton = document.getElementById('close-modal'); // Get the close button
  let numberOfSignatures = 0;

  function validateForm() {
    let person = {
      name: document.getElementById('nameInput').value.trim(),
      email: document.getElementById('emailInput').value.trim(),
      comments: document.getElementById('commentInput').value.trim(),
    };

    // Simple form validation check
    if (person.name && person.email.includes('@')) {
      return person;
    } else {
      console.error('Form is invalid');
      return null;
    }
  }

  function addSignature(person) {
    numberOfSignatures++;
    signatureCount.textContent = `Total Signatures: ${numberOfSignatures}`;
    let listItem = document.createElement('li');
    listItem.textContent = `🖊️ ${person.name} supports this cause.`;
    signatureList.appendChild(listItem);
  }

  function toggleModal(person) {
    modalContent.textContent = `Thank you for your support, ${person.name}!`;
    modal.style.display = 'flex'; // Show the modal
    console.log("Adding Flex!")
    closeModalButton.classList.remove('hidden'); // Make the close button visible

    // Set a timeout to hide the modal after 4 seconds
    let timeoutId = setTimeout(() => {
      closeModal();
    }, 40000);

    // Close modal button event
    closeModalButton.onclick = () => {
      closeModal();
      clearTimeout(timeoutId); // Prevent the timeout from hiding the modal again
    };
  }

  function closeModal() {
    modal.style.display = 'none';
    closeModalButton.classList.add('hidden'); // Re-hide the close button
  }

  document.getElementById('petitionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    let person = validateForm(); // Validate the form and get the person object
    if (person) {
      addSignature(person);
      toggleModal(person);
      this.reset(); // Reset the form for the next input
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


// Motion Logic

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
};

let revealableContainers = document.querySelectorAll('.revealable');

function reveal() {
  let windowHeight = window.innerHeight;
  for (let i = 0; i < revealableContainers.length; i++) {
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
      console.log('Adding active to:', revealableContainers[i]);
    } else {
      revealableContainers[i].classList.remove('active');
      console.log('Removing active from:', revealableContainers[i]);
    }
  }
}

window.addEventListener('scroll', reveal);



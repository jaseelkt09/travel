
// Function to handle radio button content change
function handleRadioClick(contentClass) {
  // Hided all content divs
  document.querySelectorAll('.content').forEach(function (content) {
    content.classList.remove('active');
  });

  // Removed 'checked' attribute from the option1 radio button
  document.getElementById('option1').removeAttribute('checked');

  // Showed the selected content div
  document.querySelectorAll('.' + contentClass).forEach(function (content) {
    content.classList.add('active');
  });
}


// Function to handle sub tabs
function handleColorClick(clickedBox) {
  // Removed 'active' class from all color boxes
  document.querySelectorAll('.sub_tab2').forEach(function (box) {
    box.classList.remove('active');
  });
  // Added 'active' class to the clicked color box
  clickedBox.classList.add('active');
}



// Function to handle bottom action button on tab change
document.addEventListener('DOMContentLoaded', function () {
  // tab links
  var tabLinks = document.querySelectorAll('#pills-tab .nav_link_custom');
  // Added click event listeners to each tab link
  tabLinks.forEach(function (tabLink) {
    tabLink.addEventListener('click', function (e) {
      e.preventDefault();
      // Hided the .main_action div when clicking on pills-tickets-tab
      if (this.id === 'pills-tickets-tab') {
        document.querySelector('.main_action').style.display = 'none';
      } else {
        document.querySelector('.main_action').style.display = 'block';
      }
      // Showed the corresponding tab content
      var targetTabId = this.getAttribute('data-bs-target').substring(1);
      var targetTabContent = document.getElementById(targetTabId);
      var activeTabContent = document.querySelector('.tab-content .tab-pane.active');
      activeTabContent.classList.remove('active');
      targetTabContent.classList.add('active');
    });
  });
});



// Function to handle dropdown change
function changeContent(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  var selectedOption = dropdown.value;
  // Hided all option-content divs for the specific dropdown
  var optionContents = document.querySelectorAll('.option-content.' + dropdownId);
  optionContents.forEach(function(content) {
    content.classList.remove('active');
  });

  // Showed the selected option-content div for the specific dropdown
  var selectedContent = document.querySelector('.option-content.' + selectedOption + '.' + dropdownId);
  if (selectedContent) {
    selectedContent.classList.add('active');
  }
}


// Function to handle radio button content change
function handleRadioClick(contentClass) {
  // Hided all content divs within the active parent tab
  var activeTabContent = document.querySelector('.tab-pane.fade.show.active');
  activeTabContent.querySelectorAll('.content').forEach(function (content) {
    content.classList.remove('active');
  });

  // Showed the selected content div within the active parent tab
  activeTabContent.querySelectorAll('.' + contentClass).forEach(function (content) {
    content.classList.add('active');
  });
}

// Function to handle sub tabs
function handleColorClick(clickedBox) {
  // Get the active tab content
  var activeTabContent = document.querySelector('.tab-pane.fade.show.active');

  // Removed 'active' class from all color boxes within the active tab
  activeTabContent.querySelectorAll('.sub_tab2').forEach(function (box) {
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

// Select2 on the select element
  $(document).ready(function () {
    $('.select-city').select2({
      dropdownPosition: 'below'
    });
  });

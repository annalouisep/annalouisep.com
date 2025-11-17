function openSection(evt, sectionName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "focus"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("focus", "background");
    }
  
    // Show the current tab, and add an "focus" class to the button that opened the tab
     document.getElementById(sectionName).style.display = "block";
     evt.currentTarget.className = "tablinks focus";
       // If on a small screen, auto-close the hamburger menu for a cleaner UX
       try {
         if (window && window.innerWidth && window.innerWidth <= 760) {
           var tb = document.getElementById('main-tabs');
           var btn = document.getElementById('tab-toggle');
           if (tb && tb.classList.contains('open')) {
             tb.classList.remove('open');
           }
           if (btn) btn.setAttribute('aria-expanded', 'false');
         }
       } catch (e) { /* ignore */ }
   }

  function toggleTabs() {
    var tb = document.getElementById('main-tabs');
    var btn = document.getElementById('tab-toggle');
    if (!tb) return;
    var isOpen = tb.classList.toggle('open');
    // Let CSS handle showing/hiding; only update aria state
    if (btn) btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

// Ensure toggle works even if inline handler doesn't fire.
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('tab-toggle');
  if (btn) {
    btn.addEventListener('click', function (e) {
      // call the same toggle function
      toggleTabs();
    });
  }
});

  // Auto-close the tab menu on mobile after selecting a tab
  // This keeps the UX tidy: when a tab button is clicked, hide the hamburger menu if it's open.
  document.addEventListener('click', function (e) {
    var target = e.target;
    if (!target) return;
    if (target.classList && target.classList.contains('tablinks')) {
      // close via helper to keep behavior consistent
      closeTabs();
    }
  });

// Ensure mobile menu auto-closes when selecting a tab via keyboard (Enter/Space)
document.addEventListener('keydown', function (e) {
  if ((e.key === 'Enter' || e.key === ' ') && document.activeElement && document.activeElement.classList && document.activeElement.classList.contains('tablinks')) {
    closeTabs();
  }
});

// Helper to close the mobile tab list and update accessibility attributes
function closeTabs() {
  try {
    var tb = document.getElementById('main-tabs');
    var btn = document.getElementById('tab-toggle');
    if (tb && tb.classList.contains('open')) tb.classList.remove('open');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  } catch (e) { /* ignore */ }
}


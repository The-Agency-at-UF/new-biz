import './App.css';
import './bar.css';

// examples used:
// Scroll Bar: https://codepen.io/DevSkyler/details/QWqOdmp
// Navigation Menu: https://www.youtube.com/watch?v=kp0LctdmwzE&t=638s


window.addEventListener('scroll', function() {
  // function for the progress bar
  const progressBar = document.getElementById("progressbar");
  progressBar.style.height = 100 + "%";
  
  window.onscroll = () => {
    const scroll = document.documentElement.scrollTop;
    const height =document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scroll / height) * 100;
  
    if (scrolled <= 1) {
      progressBar.style.height = 100 + "%";
    } 
    else if (scrolled >= 2 && scrolled <= 100) {
      progressBar.style.height = (100-scrolled) + "%";
    }
    console.log(100-scrolled);
  }
  
  // function for the menu
  var sections = document.querySelectorAll('div[id^="section"]');
  sections.forEach(function(section) {
    var rect = section.getBoundingClientRect();
    
    if (rect.top >= 0 && rect.top <= window.innerHeight) {
      var activeSection = document.querySelector('.menu li.active');
      if (activeSection) {
        activeSection.classList.remove('active');
      }

      var menuItem = document.querySelector('.menu li a[href="#' + section.id + '"]');
      if (menuItem) {
        menuItem.parentElement.classList.add('active');
      }
    }
  });
});


function App() {
  return (
    <div>
      <div className="progress-container">
        <div id="progressbar" className="progress-bar"></div>
      </div>
      <div className="menu">
        <ul>
          <li className="active"><a href="#section1">Home</a></li>
          <li><a href="#section2">About</a></li>
          <li><a href="#section3">Our Team</a></li>
          <li><a href="#section4">Case 1</a></li>
          <li><a href="#section5">Case 2</a></li>
          <li><a href="#section6">Case 3</a></li>
          <li><a href="#section7">End</a></li>
        </ul>
      </div>
      <div id="section1">
        <h1>The Agency</h1>
      </div>
      <div id="section2">
        <h1>About</h1>
      </div>
      <div id="section3">
        <h1>Our Clients?</h1>
      </div>
      <div id="section4">
        <h1>Case 1</h1>
      </div>
      <div id="section5">
        <h1>Case 2</h1>
      </div>
      <div id="section6">
        <h1>Case 3</h1>
      </div>
      <div id="section7">
        <h1>End</h1>
      </div>
    </div>
  );
}

export default App;

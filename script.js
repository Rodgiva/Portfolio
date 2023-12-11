let scrollElements = document.getElementsByClassName("scroll");

function openContact() {
    document.getElementsByClassName("contact-filter")[0].style.visibility = "visible";
    document.body.style.overflow = "hidden";
  
    document.body.addEventListener("click", (e) => {
       console.log(e.target.classList.value);
    if ( e.target.classList.value == "contact-filter" && e.target.classList.value != "" ) {
        document.getElementsByClassName("contact-filter")[0].style.visibility = "hidden";
        document.body.style.overflow = "visible";
    }
  });
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // const elemToAnimate = entry.target.
    })
})

/*

Array.prototype.forEach.call(scrollElements, element => {
  // element.style.opacity = 0
})

const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return ( elementTop <= ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100)));
  };
  

// const elementInView = (el, scrollOffset = 0) => {
//   const elementTop = el.getBoundingClientRect().top;
//   return ( elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset) );

// };
*/
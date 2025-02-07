function isLandscape() {
  btn_explore.addEventListener('click', () => {
    explore();
  });

  function explore() {
    gate_topLeft.classList.remove('animated-top-left-gate-opening');
    gate_bottomRight.classList.remove('animated-bottom-right-gate-opening');
    welcome_section.classList.add('pop-out')
    gateAnimation(1);

    setTimeout(() => {
      main_section.classList.remove('hidden');
      welcome_section.classList.add('hidden');

      startAnimation(main_section, 'pop-in');
      startAnimation(document.getElementById('card-1-container'), 'slide-card-left');
      startAnimation(document.getElementById('card-3-container'), 'slide-card-right')

      renderPage(currentPage);
      setTimeout(() => {
        main_section.classList.remove('pop-in')
      }, 500);
    }, 500);
  }

  prev_page_btn.addEventListener("click", () => {
    currentPage--;
    startAnimation(main_section, 'refresh-popup')
    gateAnimation(3);
    setTimeout(() => {
      renderPage(currentPage);
    }, 500);
  });

  next_page_btn.addEventListener("click", () => {
    currentPage++;
    startAnimation(main_section, 'refresh-popup')
    gateAnimation(2);
    setTimeout(() => {
      renderPage(currentPage);
    }, 500)


  });



  let currentPage = 1;
  const itemsPerPage = 3;

  function renderPage(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;

    if (currentPage * itemsPerPage < dataset.topics.length) {
      next_page_btn.classList.remove('hidden')
    } else {
      next_page_btn.classList.add('hidden')
    }

    if (currentPage > 1) {
      prev_page_btn.classList.remove('hidden')
    } else {
      prev_page_btn.classList.add('hidden')
    }

    const topicsToDisplay = dataset.topics.slice(startIndex, endIndex);

    if (!topicsToDisplay[0]) {
      document.getElementById('img-card-1').classList.add('hidden');
      document.getElementById('btn-card-1').classList.add('hidden');
    } else {
      document.getElementById('img-card-1').classList.remove('hidden');
      document.getElementById('btn-card-1').classList.remove('hidden');
      document.getElementById('img-card-1').src = topicsToDisplay[0].imageUrl;
      document.getElementById('btn-card-1').textContent = topicsToDisplay[0].name;
      document.getElementById('btn-card-1').addEventListener('click', () => {
      openCard(topicsToDisplay, 0)
      });
    }

    if (!topicsToDisplay[1]) {
      document.getElementById('img-card-2').classList.add('hidden');
      document.getElementById('btn-card-2').classList.add('hidden');
    } else {
      document.getElementById('img-card-2').classList.remove('hidden');
      document.getElementById('btn-card-2').classList.remove('hidden');
      document.getElementById('img-card-2').src = topicsToDisplay[1].imageUrl;
      document.getElementById('btn-card-2').textContent = topicsToDisplay[1].name;
      document.getElementById('btn-card-2').addEventListener('click', () => {
      openCard(topicsToDisplay, 1)
      });
    }

    if (!topicsToDisplay[2]) {
      document.getElementById('img-card-3').classList.add('hidden');
      document.getElementById('btn-card-3').classList.add('hidden');
    } else {
      document.getElementById('img-card-3').classList.remove('hidden');
      document.getElementById('btn-card-3').classList.remove('hidden');
      document.getElementById('img-card-3').src = topicsToDisplay[2].imageUrl;
      document.getElementById('btn-card-3').textContent = topicsToDisplay[2].name;
      document.getElementById('btn-card-3').addEventListener('click', () => {
      openCard(topicsToDisplay, 2)
      });
    }
  }

  function openCard(topicsToDisplay, index) {
    document.getElementById('item-title').textContent = topicsToDisplay[index].name;
    document.getElementById('item-desc').innerHTML = topicsToDisplay[index].description;
    document.getElementById('item-img').src = topicsToDisplay[index].imageUrl;
    prev_page_btn.classList.add('hidden');
    next_page_btn.classList.add('hidden');
    document.getElementById('arrow-left-card-open').classList.remove('hidden');
    // document.getElementById('arrow-right-card-open').classList.remove('hidden');
    gateAnimation(4);
    startAnimation(main_section, "refresh-popup")
    setTimeout(() => {
      document.getElementById('choose-topic').classList.add('hidden');
      document.getElementById('card-open').classList.remove('hidden');
    }, 500);
  }

  function openTopics(index) { 
    gateAnimation(4);
    startAnimation(main_section, "refresh-popup")

    prev_page_btn.classList.remove('hidden');

    document.getElementById('arrow-left-card-open').classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('choose-topic').classList.add('hidden');
      document.getElementById('choose-subject').classList.remove('hidden');
    }, 500);



    dataset.topics[index].subject.forEach(data => {
      console.log(data.subjectName);
      const subjectContainer = document.getElementById('subject-container');      
      const subject = document.createElement('button');
      subject.className = 'text-base font-bold text-black-900 rounded-2xl border-4 border-blue-900 text-center py-5 w-4/5 transition-all duration-100 opacity-30 hover:opacity-100 hover:w-full hover:scale-105';
      subject.innerHTML = data.subjectName;
      subjectContainer.append(subject);
      subjectContainer.scrollTop = 0;
      subjectContainer.style.scrollBehavior = "smooth";

      // Options for the observer (rootMargin for custom fade-in distance)
      const options = {
        root: subjectContainer, // The scrollable container
        rootMargin: '0px',
        threshold: 0.8 // Trigger the fade effect when 10% of the element is in view
      };

      // Callback function to handle visibility changes
      const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Element is in the view
            entry.target.style.transition = 'opacity 0.5s ease-out';
            entry.target.style.opacity = '0.3';
          } else {
            entry.target.style.transition = 'opacity 0.5s ease-out';
            entry.target.style.opacity = '0';
          }
        });
      }, options);

      // Observe the element
      // fadeObserver.observe(subject);

    });
  }

  document.getElementById('arrow-left-card-open').addEventListener('click', () => {
    document.getElementById('arrow-left-card-open').classList.add('hidden');
    document.getElementById('arrow-right-card-open').classList.add('hidden');
    startAnimation(main_section, "refresh-popup")
    renderPage(currentPage);
    gateAnimation(5);
    setTimeout(() => {
      document.getElementById('card-open').classList.add('hidden');
      document.getElementById('choose-topic').classList.remove('hidden');
    }, 500);
  });

  document.getElementById('arrow-right-card-open').addEventListener('click', () => {
    document.getElementById('arrow-left-card-open').classList.add('hidden');
    document.getElementById('arrow-right-card-open').classList.add('hidden');
    startAnimation(main_section, "refresh-popup");
    gateAnimation(1);

    setTimeout(() => {
      // document.getElementById('prototype-show').classList.remove('hidden');
      document.getElementById('card-open').classList.add('hidden');
    }, 500);
  });

}



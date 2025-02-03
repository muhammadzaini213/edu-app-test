const btn_explore = document.getElementById('explore-btn');
const card_chooser = document.getElementById('card-chooser');

const dataset = {
  "topics": [
    { "id": 1, 
      "name": "Gamedev", 
      "imageUrl": "ic-gamedev.png", 
      "description": "Pernah kepikiran bikin game tapi tidak tahu darimana mulai belajarnya?<br>Tenang aja, di Informatika kalian bakal dibekali pengetahuan dasar logika yang tentu saja bakal membantu kamu memciptakan game impianmu mulai dari pemprograman hingga desain lanjutannya!"
    },

    { "id": 2, 
      "name": "IOT", 
      "imageUrl": "ic-iot.png", 
      "description": "Jurusan Informatika bukan hanya soal perangkat lunak, dalam IOT (Internet Of Things) kalian juga belajar tentang perangkat keras yang dapat di program menjadi perangkat pintar, memiliki teknologi deteksi sensor yang bahkan dapat dihubungkan dengan internet."
    },

    { "id": 3, 
      "name": "CyberSecurity", 
      "imageUrl": "ic-cybersec.png", 
      "description": "Penasaran bagaimana keamanan siber bekerja, atau pernah dengan berita peretasan oleh hacker seperti Bjirka?<br> Kita mungkin tidak belajar cara melakukan kejahatan siber seperti membocorkan data, tapi sebaliknya, kita akan belajar cara melindungi suatu data dalam dunia siber. "
    },

    { "id": 4, 
      "name": "WebDev", 
      "imageUrl": "ic-webdev.png", 
      "description": "Siapa yang ingin tahu bagaimana caranya buat website?<br>Pakai Blackbox AI, ChatGPT, Copilot? Bisa jadi<br>Sayangnya kalau terlalu bergantung dengan AI berarti kita tidak berkembang sama sekali, kan? Jadi di Informatika kita akan belajar cara membuat web yang menarik, dibantu AI tidak masalah, tidak paham itu baru masalah!<br><br>Catatan: Web ini buatnya dibantu AI juga kok."
    },

    { "id": 5, 
      "name": "ML", 
      "imageUrl": "ic-ai.png", 
      "description": "Tahun 2025 eranya AI, bahkan mungkin dari kita banyak yang pakai AI untuk kerjain tugas dari sekolah atau kampus, tapi pernah tidak sesekali kalian memikirkan caranya AI bekerja, apa mereka punya kesadaran? Jawabannya untuk sekarang, adalah Machine Learning atau Mesin yang dapat belajar. Simpelnya AI hanyalah mesin yang telah dilatih/diajari dengan data tertentu untuk menghasilkan hal yang optimal untuk situasi yang diketahui.<br>"
    },

    { "id": 6, 
      "name": "Data Science", 
      "imageUrl": "ic-data-science.png", 
      "description": "Era digital eranya data, lalu bagaimana bila data itu sangat banyak dan perlu dikelola dengan baik?<br>Informatika juga akan memberikan kita acuan untuk mengelola data dengan baik serta mendapat insight untuk mengambil keputusan berdasarkan data yang kita miliki."
    }
  ]
};

function handleOrientationChange() {
  if (window.matchMedia("(orientation: landscape)").matches) {
    isLandscape();
  } else {
    isPotrait();
  }
}

handleOrientationChange();

window.addEventListener("orientationchange", handleOrientationChange);
window.addEventListener("resize", handleOrientationChange);

function isLandscape() {
  btn_explore.addEventListener('click', () => {
    explore();
  });

  function explore() {
    document.getElementById('gate-left').classList.remove('animated-box-left');
    document.getElementById('gate-right').classList.remove('animated-box-right');
    document.getElementById('gate-left').classList.add('animated-gate-left');
    document.getElementById('gate-right').classList.add('animated-gate-right');
  
    document.getElementById('welcome-logo').classList.add('pop-out')

    setTimeout(() => {
      document.getElementById('card-chooser').classList.remove('hidden');
      document.getElementById('welcome-logo').classList.add('hidden');
      startAnimation('card-chooser', 'pop-in');
      startAnimation('card-1-container', 'slide-card-left');
      startAnimation('card-3-container', 'slide-card-right')
      renderPage(currentPage);

      setTimeout(() => {
        card_chooser.classList.remove('pop-in')
      }, 500);
    }, 500);
  }

  const prev_page_btn = document.getElementById('arrow-left');
  const next_page_btn = document.getElementById('arrow-right');

  prev_page_btn.addEventListener("click", () => {
    currentPage--;
    startAnimation('card-chooser', 'refresh-popup')
    gateAnimation();
    prev_page_btn.classList.add('fade-out');
    setTimeout(() => {
      renderPage(currentPage);
      prev_page_btn.classList.remove('fade-out');
    }, 500);
  });

  next_page_btn.addEventListener("click", () => {
    currentPage++;
    startAnimation('card-chooser', 'refresh-popup')
    gateAnimation();
    next_page_btn.classList.add('fade-out');
    setTimeout(() => {
      renderPage(currentPage);
      next_page_btn.classList.remove('fade-out');
    }, 500)
  });



  let currentPage = 1;
  const itemsPerPage = 3;

  function renderPage(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;

    if (currentPage * itemsPerPage < dataset.topics.length) {
      next_page_btn.classList.remove('hidden')
      startAnimation('arrow-right', 'fade-in')
    } else {
      next_page_btn.classList.add('hidden')
    }

    if (currentPage > 1) {
      prev_page_btn.classList.remove('hidden')
      startAnimation('arrow-left', 'fade-in')
    } else {
      prev_page_btn.classList.add('hidden')
    }

    const topicsToDisplay = dataset.topics.slice(startIndex, endIndex);

    if (topicsToDisplay[0]) {
      document.getElementById('img-card-1').src = topicsToDisplay[0].imageUrl;
      document.getElementById('btn-card-1').textContent = topicsToDisplay[0].name;
      document.getElementById('btn-card-1').addEventListener('click', () => {
        openCard(topicsToDisplay, 0)
      });
    }

    if (topicsToDisplay[1]) {
      document.getElementById('img-card-2').src = topicsToDisplay[1].imageUrl;
      document.getElementById('btn-card-2').textContent = topicsToDisplay[1].name;
      document.getElementById('btn-card-2').addEventListener('click', () => {
        openCard(topicsToDisplay, 1)
      });
    }

    if (topicsToDisplay[2]) {
      document.getElementById('img-card-3').src = topicsToDisplay[2].imageUrl;
      document.getElementById('btn-card-3').textContent = topicsToDisplay[2].name;
      document.getElementById('btn-card-3').addEventListener('click', () => {
      openCard(topicsToDisplay, 2)
      });
    }
  }

  function openCard (topicsToDisplay, index) {
    document.getElementById('item-title').textContent = topicsToDisplay[index].name;
    document.getElementById('item-desc').innerHTML = topicsToDisplay[index].description;
    document.getElementById('item-img').src = topicsToDisplay[index].imageUrl;
    prev_page_btn.classList.add('hidden');
    next_page_btn.classList.add('hidden');
    gateAnimation();
    startAnimation("card-chooser", "refresh-popup")
    setTimeout(() => {
      document.getElementById('arrow-left-card-open').classList.remove('hidden');
      document.getElementById('arrow-right-card-open').classList.remove('hidden');    
      document.getElementById('card-choose').classList.add('hidden');
      document.getElementById('card-open').classList.remove('hidden');
    }, 500);
  }

  document.getElementById('arrow-left-card-open').addEventListener('click', () => {
    document.getElementById('arrow-left-card-open').classList.add('hidden');
    document.getElementById('arrow-right-card-open').classList.add('hidden');
    startAnimation("card-chooser", "refresh-popup")
    renderPage(currentPage);
    gateAnimation();
    setTimeout(() => {
      document.getElementById('card-open').classList.add('hidden');
      document.getElementById('card-choose').classList.remove('hidden');
    }, 500);
  });

  document.getElementById('arrow-right-card-open').addEventListener('click', () => {
    document.getElementById('arrow-left-card-open').classList.add('hidden');
    document.getElementById('arrow-right-card-open').classList.add('hidden');
    startAnimation("card-chooser", "refresh-popup");
    gateAnimation();

    setTimeout(() => {
      // document.getElementById('prototype-show').classList.remove('hidden');
      document.getElementById('card-open').classList.add('hidden');
    }, 500);
  })



  function gateAnimation() {
    startAnimation('gate-left', 'animated-gate-left');
    startAnimation('gate-right', 'animated-gate-right');
  }


  function startAnimation(elementId, animationClass) {
    const element = document.getElementById(elementId);

    if (element && element.classList.contains(animationClass)) {
      element.classList.remove(animationClass);
      void element.offsetWidth;
    }

    element.classList.add(animationClass);
  }
}


function gateAnimation() {
  startAnimation('gate-left', 'animated-gate-left');
  startAnimation('gate-right', 'animated-gate-right');
}


function startAnimation(elementId, animationClass) {
  const element = document.getElementById(elementId);

  if (element && element.classList.contains(animationClass)) {
    element.classList.remove(animationClass);
    void element.offsetWidth;
  }

  element.classList.add(animationClass);
}

function isPotrait() {
  btn_explore.addEventListener('click', () => {
    explore();
  });

  function explore() {
    document.getElementById('gate-left').classList.remove('animated-box-left');
    document.getElementById('gate-right').classList.remove('animated-box-right');
    document.getElementById('gate-left').classList.add('animated-gate-left');
    document.getElementById('gate-right').classList.add('animated-gate-right');
  
    document.getElementById('welcome-logo').classList.add('pop-out')

    setTimeout(() => {
      document.getElementById('welcome-logo').classList.add('hidden');
      document.getElementById('card-chooser-potrait').classList.remove('hidden');
      renderPage();

      setTimeout(() => {
        card_chooser.classList.remove('pop-in')
      }, 500);
    }, 500);
  }

  function renderPage() {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = ''; // Clear previous cards
  
    dataset.topics.forEach((data) => {
      // Create card structure
      const cardDiv = document.createElement('div');
      cardDiv.className = 'p-8 w-80 h-96 rounded-2xl text-center bg-white';
  
      const img = document.createElement('img');
      img.src = data.imageUrl;
      img.alt = `${data.id} image`;
      img.className = 'mx-auto mb-10 w-40 h-40 rounded-lg';
  
      const button = document.createElement('button');
      button.textContent = data.name;
      button.className = 'mt-10 px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-700 font-bold';
      button.addEventListener('click', () => {
        startAnimation('card-chooser-potrait', 'refresh-popup')
        gateAnimation();

        setTimeout(() => {
          document.getElementById('choose-menu').classList.add('hidden');
          document.getElementById('card-open-potrait').classList.remove('hidden');
          document.getElementById('item-title-potrait').innerHTML = data.name;
          document.getElementById('item-desc-potrait').innerHTML = data.description;
          document.getElementById('item-img-potrait').src = data.imageUrl;
          document.getElementById('arrow-left-exit-card').classList.remove('hidden');
        }, 500);

      });
      cardDiv.appendChild(img);
      cardDiv.appendChild(button);
      cardContainer.appendChild(cardDiv);

      document.getElementById('arrow-left-exit-card').addEventListener('click', () => {
        gateAnimation();
        startAnimation('card-chooser-potrait', 'refresh-popup')
        document.getElementById('arrow-left-exit-card').classList.add('hidden');

        setTimeout(() => {
          document.getElementById('choose-menu').classList.remove('hidden');
          document.getElementById('card-open-potrait').classList.add('hidden');
        }, 500);
      });

    });
  }
}
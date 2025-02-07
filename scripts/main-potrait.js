function isPotrait() {
    btn_explore.addEventListener('click', () => {
        explore();
    });

    function explore() {
        gate_topLeft.classList.remove('animated-top-left-gate-opening');
        gate_bottomRight.classList.remove('animated-bottom-right-gate-opening');
        gateAnimation(1);

        welcome_section.classList.add('pop-out')

        setTimeout(() => {
            welcome_section.classList.add('hidden');
            main_section_potrait.classList.remove('hidden');
            renderPage();

            setTimeout(() => {
                main_section.classList.remove('pop-in')
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
                startAnimation(main_section_potrait, 'refresh-popup')
                gateAnimation(4);

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
                gateAnimation(5);
                startAnimation(main_section_potrait, 'refresh-popup')
                document.getElementById('arrow-left-exit-card').classList.add('hidden');

                setTimeout(() => {
                    document.getElementById('choose-menu').classList.remove('hidden');
                    document.getElementById('card-open-potrait').classList.add('hidden');
                }, 500);
            });

        });
    }
}
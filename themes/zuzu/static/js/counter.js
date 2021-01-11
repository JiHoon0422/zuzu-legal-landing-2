// function runAnimtion() {
//     anime({
//         targets: '.counter-1',
//         textContent: [0, 42],
//         round: 1,
//         easing: 'linear',
//         duration: 1000
//     });

//     anime({
//         targets: '.counter-2',
//         textContent: [0, 77],
//         round: 1,
//         easing: 'linear',
//         duration: 1000
//     });

//     anime({
//         targets: '.counter-3',
//         textContent: [0, 1632],
//         round: 1,
//         easing: 'linear',
//         duration: 4000
//     });
// }

// const observer = new IntersectionObserver(
//     entries => {
//         entries.forEach(entry => {
//             if (entry.intersectionRatio >= 0.7) {
//                 runAnimtion();
//                 observer.disconnect();
//             }
//         });
//     },
//     {
//         threshold: .7
//     }
// );

// observer.observe(document.querySelector('.target-section'));


function countup(el, target) {
    let data = { count: 0 };
    anime({
        targets: data,
        count: [0, target],
        duration: 2500,
        round: 1,
        delay: 200,
        easing: 'easeOutCubic',
        update() {
            el.innerText = data.count.toLocaleString();
        }
    });
}

function makeCountup(el) {
    const text = el.textContent;
    const target = parseInt(text, 10);

    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                countup(el, target);
                io.unobserve(entry.target);
            }
        });
    });

    io.observe(el);
}

const els = document.querySelectorAll('[data-countup]');

els.forEach(makeCountup);
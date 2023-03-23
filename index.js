const net = new brain.NeuralNetwork();

net.train(trainingData)

const p = document.querySelector('.px')
const px = []
for (let i = 0; i < 10; i++) {
    for (let o = 0; o < 10; o++) {
        const clone = p.cloneNode(true)
        px.push(clone)
        draw_area.appendChild(clone)
    }
}

let m_down = false
draw_area.addEventListener('mousedown', () => { m_down = true })
window.addEventListener('mouseup', () => { m_down = false })

let a = []
px.forEach(e => {
    e.addEventListener('mousemove', () => {
        if (m_down) {
            e.style.background = 'black'
            e.mark = true
            px.forEach(i => {
                if (i.mark) {
                    a[px.indexOf(e)] = 1
                } else {
                    a[px.indexOf(i)] = 0
                }
            });
            // const r = net.run(a)
            const r = brain.likely(a, net);
            console.log(r);
            // console.log(Math.round(r.cub), Math.round(r.line));
            // console.log(a);
            // a = []
        }
    })
});





// net.train([{
//     input: a,
//     output: {
//         a: 1
//     }
// },
// {
//     input: b,
//     output: {
//         b: 1
//     }
// },
// {
//     input: c,
//     output: {
//         c: 1
//     }
// }
// ]);

// /**
//  * Predict the letter A, even with a pixel off.
//  */
// const result = brain.likely(character(
//     '.#####.' +
//     '#.....#' +
//     '#.....#' +
//     '###...#' +
//     '#.....#' +
//     '#.....#' +
//     '#.....#'
// ), net);


// console.log(result); // 'a'

// function character(string) {
//     return string
//         .trim()
//         .split('')
//         .map(integer);
// }

// function integer(character) {
//     if ('#' === character) return 1;
//     return 0;
// }
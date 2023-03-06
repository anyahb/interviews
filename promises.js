// const p1 = new Promise((res, rej) => {
//     console.log(1)
//     rej(2)
// })
//
// console.log(3)
//
// setTimeout(() => {
//     console.log(4)
// }, 0)
//
// const p2 = new Promise((res, rej) => {
//     console.log(5)
//     res(8)
// })
//
// const p3 = () => {
//     console.log(6)
// }
//
// p1.then((res) => {
//     console.log(res)
// }).catch((e) => {
//     console.log(e)
// })
//
// p2.then((res) => {
//     console.log(res)
// }).catch((e) => {
//     console.log(e)
// })

// console.log(7)

const p1 = new Promise((res, rej) => {
    rej(1)
})
p1.then((res) => {
    console.log(res)
}).catch((e) => {
    console.log(e)
})

const p2 = new Promise((res, rej) => {
    rej(2)
})

p2.then((res) => {
    console.log(res)
}).catch((e) => {
    console.log(e)
})


const p3 = new Promise((res, rej) => {
    res(3)
})

p3.then((res) => {
    console.log(res)
}).catch((e) => {
    console.log(e)
})
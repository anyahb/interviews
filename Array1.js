// const fetch1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res([1,3,4])
//     }, 2000)
// })
//
//
// const addNumbers = (arr) => {
//     let total = 0
//     arr.forEach((i) => {
//         total = total + i
//     })
//     return total
// }
//
//
// fetch1.then((res) => {
//    console.log(addNumbers(res))
// }).catch((e) => {
//     console.log(e)
// })


//homework

//find the sum of id if id > 9

// const addNumbers = (arr) => {
//     let total = 0
//     arr.forEach((i) => {
//         if (i.id > 9){
//             total = total + i.id
//         }
//     })
//     return total
// }
//
// const fetch2 = fetch("https://reqres.in/api/users?page=2")
// fetch2.then((res) => {
//   return res.json()
// }).then((res) => {
//     console.log(addNumbers(res.data))
// }).catch((err) => {
//     console.log(err)
// })

//display the array that includes the name Tobias
//
// const findTobias = (arr) => {
//     let newArr = []
//     let tobiasObj = ""
//     arr.forEach((i) => {
//         if (i.first_name === "Tobias"){
//            tobiasObj = i
//         }
//     })
//     newArr.push(tobiasObj)
//     return newArr
// }
//
// const fetch2 = fetch("https://reqres.in/api/users?page=2")
// fetch2.then((res) => {
//   return res.json()
// }).then((res) => {
//     console.log(findTobias(res.data))
// }).catch((err) => {
//     console.log(err)
// })

//display the array that includes the name Tobias or George

// const findTobiasGeorge = (arr) => {
//     let newArr = []
//     let tobiasObj = ""
//     let georgeObj = ""
//     arr.forEach((i) => {
//         if (i.first_name === "Tobias"){
//            tobiasObj = i
//         }
//         if (i.first_name === "George"){
//             georgeObj = i
//         }
//     })
//     newArr.push(tobiasObj,georgeObj)
//     return newArr
// }
//
// const fetch2 = fetch("https://reqres.in/api/users?page=2")
// fetch2.then((res) => {
//   return res.json()
// }).then((res) => {
//     console.log(findTobiasGeorge(res.data))
// }).catch((err) => {
//     console.log(err)
// })


//find the sum of id, where id > 9 and the first_name === "Byron"

// const findIdSum = (arr) => {
//     let total = 0
//     arr.forEach((i) => {
//         if (i.first_name === "Byron" && i.id > 9){
//             total = total + i.id
//         }
//     })
//     return total
// }
//
// const fetch2 = fetch("https://reqres.in/api/users?page=2")
// fetch2.then((res) => {
//   return res.json()
// }).then((res) => {
//     console.log(findIdSum(res.data))
// }).catch((err) => {
//     console.log(err)
// })
















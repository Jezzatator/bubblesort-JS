// bubblesort 

let numbers = [2, 54, 7, 38, 22, 13, 19, 45, 31, 77, 98, 5, 12, 28, 81, 26, 72, 4, 20, 42]
let numbers2 = [2, 54, 7, 38, 22, 13, 19, 45, 31, 77, 98, 5, 12, 28, 81, 26, 72, 4, 20, 42]
 console.log(numbers)
function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
  
        for (var j = 0; j < (arr.length - i - 1); j++) {
  

            if (arr[j] > arr[j + 1]) {
  

                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr)
    return arr
}
console.log(numbers)
let numbersSorted = bubbleSort(numbers)

function createDico(arr1, arr2) {
var dico = {};
dico[arr1] = arr2
return dico
}

var testDico = createDico(numbers, numbers2, testDico)
console.log(testDico)
console.log(testDico[5])


document.body.innerHTML += '<h2> Le tableau trié est : ' + bubbleSort(numbers) + ' </h2>'
document.body.innerHTML += '<h3> Le tableau non-trié était : ' + numbers2 + ' </h3>'

for (let k in testDico) {
document.getElementById("Dico").innerHTML+="<tr><td>"+k+"</tr><td>"+testDico[k]+"</tr></td>"
}
// 1

// напишите функцию которая принимает в себя строку состоящую из нескольких слов

// (например «lorem ipsum dolor»), а на выходе

// возвращает строку состоящую из длин каждого слова

// БЫЛО: “Ну здравствуй дивный мир”



// СТАЛО: “2  10  6  3”


// const getStrToNum = (str) => {
//     let result = str.split(" ");
//     let result2 =  " " ;

//     for(i = 0; i < result.length; i++){
//         result2 = result2 + result[i].length   }

//     return result2

    
    
// }
const getStrToNum = (str) => {
        let arr = str.split(" ")
        return arr.reduce((acc,rec) => { 
            return acc + rec.length
        }, ``)
    }


console.log(getStrToNum('Ну здравствуй дивный мир'));

  





// 2

// напишите функцию которая принимает в себя имя, возраст, пол и на их основе возвращает

// объект. При этом необходимо провести валидацию (проверку), если возраст менее

// 18 лет, то вместо объекта вернуть строку «Не подходит по возрасту»

// const getObj = (name, age, gd) => {
//     let obj = {};
//     obj.name = name
//     obj.age = age
//     obj.gd = gd

//     if(obj.age < 18){
//         obj.age = "Не подходит по возрасту"
//     }

//     return obj


// }

// console.log(getObj("beknur", 15, 'men'));



// // Для решения надо отправить github репозиторий 
// import { useState } from 'react'

import { useState } from 'react'

// function Test() {
//   // Data
//   const [name, setName] = useState('')

//   // render
//   return <p>{name}</p>
// }
// export default Test

// import { useState } from 'react'

// function ReplaceName() {
//   let names = ['Ada', 'Alisa', 'Amelia', 'Azele']
//   const [name, setName] = useState('')

//   return (
//     <ul>
//       {names.map((element) => (
//         <li>{element}</li>
//       ))}
//     </ul>
//   )
// }

// export default ReplaceName

// // import { useState } from 'react'

// function RenderFromObj() {
//   let names = [
//     { firstname: 'Bob', lastname: 'Brown' },
//     { firstname: 'Billy', lastname: 'Blue' },
//   ]
//   const [name, setName] = useState('')

//   return (
//     <ul>
//       {names.map((element, index) => (
//         <li key={index}>
//           {element.firstname} - {element.lastname}
//         </li>
//       ))}
//     </ul>
//   )
// }

// export default RenderFromObj

// export default function TrafficLight() {
//   let color = 'green'
//   function getColor() {
//     return color
//   }
//   return <span>The color is:{getColor()}</span>
// }

// Collect Value
// Change the following form,
// so that when typing in the input field,
// a getValue function is called and
// the value of the input is passed to the function.

// export default function Test() {
//   function getValue(e) {
//     console.log(e.target.value)
//   }
//   return (
//     <form>
//       <input type="text" onKeyUp={(e) => getValue(e)} />
//       <button>Send</button>
//     </form>
//   )
// }

// Custom Options
// The following select element retrieves the selected option as a roman number.
// Update the form, so that, while keeping the roman number visible to the user, it retrieves the corresponding ordinal number.

// let ordinal = {
//   I: '1st',
//   II: '2nd',
//   III: '3rd',
//   IV: '4th',
//   V: '5th'
// }

// function get

// <select onChange={e => }>
//   <option>I</option>
//   <option>II</option>
//   <option>III</option>
//   <option>IV</option>
//   <option>V</option>
// </select>

let data = [
  {
    title: 'JS tutorisdals',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js',
      },
      {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js',
      },
    ],
  },
  {
    title: 'JS tutorials',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js',
      },
      {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js',
      },
    ],
  },
  {
    title: 'JS tutorials',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js',
      },
      {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js',
      },
    ],
  },
  {
    title: 'JS tutoriaaaals',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js',
      },
      {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js',
      },
    ],
  },
]
// Search Function
// 1. In the App component,
// create a search function
// that takes a string parameter
// then returns an array from the data array that contains only results where the string parameter can be found
// in either the title, description or url of the element.
// Test the function with a variety of strings.
// 2.  Create a results array with useState and set its initial value to an empty array.
// 3. Replace data.map() in your JSX with results.map() (also change the results count).
// The page should now display no results and the counter should say 0 results.
// 4. In the search function, instead of returning the filtered array, use the filtered array to update the content of the results array.

// export default function Search(str) {
//   // const [results, setResults] = useState([])
//   let filteredData = data.filter((e) => typeof e == 'string')
//   return filteredData
//   // let array = str.split('')
// }
// console.log(Search())

// export default function RetrieveNum(e) {
//   const [retrieveNum, setRetrieveNum] = useState()
//   return (
//     <select onChange={(e) => setRetrieveNum(console.log(e.target.value))}>
//       <option value="1st">I</option>
//       <option value="2nd">II</option>
//       <option value="3rd">III</option>
//       <option value="4th">IV</option>
//       <option value="5th">V</option>
//     </select>
//   )
// }

// export default function searchFlights(str) {
//     return (
//     <form onsubmit="searchFlights(event, this)">
//       <input type="text" name="from" />
//       <input type="text" name="to" />
//       <button>Search</button>
//     </form>
//     )
// }

// Pass the Prop
// The component receives a function setItem in the props,
// use it in the <select> element on change and pass the selected value as a parameter.

// export default function Select(setItem) {
//   const [selectItem, setSelectItem] = useState('')

//   return (
//     <select onChange={(e) => setSelectItem(e.target.value)}>
//       <option>1</option>
//       <option>2</option>
//     </select>
//   )
// }

export default function Select(e) {
  const [selectedValue, setSelectedValue] = useState('')
  selectedValue = e.target.value

  return (
    <select onChange={(e) => setSelectedValue(e.target.value)}>
      <option>1</option>
      <option>2</option>
    </select>
  )
}

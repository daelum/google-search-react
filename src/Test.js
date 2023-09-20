// import { useState } from 'react'

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

// import { useState } from 'react'

function RenderFromObj() {
  let names = [
    { firstname: 'Bob', lastname: 'Brown' },
    { firstname: 'Billy', lastname: 'Blue' },
  ]
  const [name, setName] = useState('')

  return (
    <ul>
      {names.map((element, index) => (
        <li key={index}>
          {element.firstname} - {element.lastname}
        </li>
      ))}
    </ul>
  )
}

export default RenderFromObj

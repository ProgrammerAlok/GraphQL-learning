// import { useState } from 'react'
import './App.css'
import { useQuery, gql } from '@apollo/client'

function App() {
  const query = gql`
    query GetAllTodos {
      getTodos {
        title
        id
      }
    }
  `

  const { data, loading } = useQuery(query)

  console.log(data)

  return (
    <div>
      coming
    </div>
  )
}

export default App

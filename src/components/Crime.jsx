import React from 'react'

export default function Crime(props) {
  return (
    <div>
      <p>id: {props.crime.id}</p>
      <p>category: {props.crime.category}</p>
    </div>
  )
}

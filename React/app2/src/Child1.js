import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from "axios"
function Child1({ word, value }) {
  const { id } = useParams()
  const[res,setRes]=useState("")
  console.log(id)
  async function getData() {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
    console.log(data)
    setRes(data)
  }
  useEffect(() => {
    getData()
  },[])
  return (
      <div>
          <p>Child1</p>
          <p>{word}</p>
      <p>{value}</p>
      <Link to={"/"}>Go to App</Link>
      <p>{res.title}</p>
      <p>{res.body }</p>
    </div>
  )
}

export default Child1
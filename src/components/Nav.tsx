import React from 'react';
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/WorkPost">WorkPost</Link>
      <Link to="/WorkResult">WorkResult</Link>
    </>
  )
}
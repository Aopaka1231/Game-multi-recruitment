import { Button } from '@mui/material'
import React from 'react'

export default function logout() {

    const logout = () => {
        localStorage.removeItem("username")
    }

  return (
    <Button onClick={logout} href="./home">logoutします</Button>
  )
}
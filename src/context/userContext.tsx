"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"

type User = {
  name: string
  email: string
  image: string
  role: string
}

type UserContextType = {
  user: User
  updateUser: (updates: Partial<User>) => void
}

const defaultUser: User = {
  name: "",
  email: "",
  image: "",
  role: "",
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const revalidate = 60
export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(defaultUser)

  useEffect(() => {

    const defaultSanityData = async () => {
      const defaultUser = await fetch("/api/getUser", {
        method: "POST",
        credentials: "include"
      }).then((res) => res.json())
      console.log(defaultUser)
      setUser(defaultUser)
    }

    defaultSanityData()
  }, [])

  const updateUser = (updates: Partial<User>) => {
    setUser((prevUser) => ({ ...prevUser, ...updates }))
    // Here you would typically send the updates to your API
  }

  return <UserContext.Provider value={{ user, updateUser }}>{children}</UserContext.Provider>
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}

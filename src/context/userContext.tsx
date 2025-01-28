"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"

type User = {
  name: string
  email: string
  avatar: string
  role: string
}

type UserContextType = {
  user: User
  updateUser: (updates: Partial<User>) => void
}

const defaultUser: User = {
  name: "John Doe",
  email: "john@example.com",
  avatar: "/placeholder.svg",
  role: "User",
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(defaultUser)

  useEffect(() => {
    // Here you would typically fetch the user data from an API
    // For now, we'll just use the default user
    setUser(defaultUser)
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


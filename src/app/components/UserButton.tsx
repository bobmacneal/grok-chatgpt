"use client"

import { LogIn, LogOut } from "lucide-react"
import { signIn, signOut, useSession } from "next-auth/react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function getFirstTwoCapitalLetters(str?: string | null) {
  const match = (str || "").match(/[A-Z]/g)
  return match ? match.slice(0, 2).join("") : "GT"
}

export default function UserButton() {
  const { data: session, status } = useSession()

  return (
    <div>
      {status === "authenticated" && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className='cursor-pointer'>
              <AvatarImage src={session?.user?.image!} />
              <AvatarFallback>
                {getFirstTwoCapitalLetters(session?.user?.name)}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              className='cursor-pointer'
              onClick={() => {
                signOut().then()
              }}
            >
              <LogOut className='mr-2 size-4' /> Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      {status === "unauthenticated" && (
        <Button variant='ghost' onClick={() => signIn()}>
          <LogIn className='mr-2 size-4' /> Log In
        </Button>
      )}
    </div>
  )
}

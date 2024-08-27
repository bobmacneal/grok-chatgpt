"use client"

import { LogIn, LogOut } from "lucide-react"
import { useSession } from "next-auth/react"

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

export default function UserButton({
  onSignIn,
  onSignOut,
}: {
  onSignIn: () => Promise<void>
  onSignOut: () => Promise<void>
}) {
  const { data: session, status } = useSession()

  return (
    <div>
      {status === "authenticated" && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src={session?.user?.image!} />
              <AvatarFallback>
                {getFirstTwoCapitalLetters(session?.user?.name)}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() => {
                onSignOut().then()
              }}
            >
              <LogOut className='mr-2 size-4' /> Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      {status === "unauthenticated" && (
        <Button variant='ghost' onClick={() => onSignIn()}>
          <LogIn className='mr-2 size-4' /> Log In
        </Button>
      )}
    </div>
  )
}

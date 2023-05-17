import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function Logout() {
    const {data: session} = useSession()
    const router = useRouter()

    console.log(session)


    if (session) {
      return (
        <div>
            <p>Signed in as {session.user.email}</p>
            <Link href='/user_landing'>
              <button onClick={() => signOut()} >
                Sign Out
              </button>
            </Link>
        </div>
      )
    }
  

    return (
        <div>
        <button onClick={() => signOut()}>Sign out</button>
        </div>
    )
}
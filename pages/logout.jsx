import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Logout() {
    const {data: session} = useSession()
    const router = useRouter()

    console.log(session)


    if (session) {
      return (
        <div>
            <p>Signed in as {session.user.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
        </div>
      )
    }
  

    return (
        <div>
        <button onClick={() => signOut()}>Sign out</button>
        </div>
    )
}
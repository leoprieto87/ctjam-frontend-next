import Link from "next/link";

const patternButton = "my-2 py-3 px-6 rounded-xl text-center w-full"

export function ButtonRegister() {
    return (
        <Link className={`bg-blueActions text-white ${patternButton}`} href="/register">Cadastrar</Link>
    )
}

export function ButtonSignIn() {
    return (
        <Link className={`text-blueActions border-2 border-sky-700 ${patternButton}`} href="/signIn">Entrar</Link>
    )
}

export function ButtonGoToJam() {
    return (
        <Link className={`bg-blueActions text-white ${patternButton}`} href="/signin">Encontrar uma Jam</Link>
    )
}
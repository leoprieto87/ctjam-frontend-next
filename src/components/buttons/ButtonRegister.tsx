import Link from "next/link";

const patternButton = "my-2 py-3 px-6 rounded-xl text-center w-full"

export function ButtonRegister() {
    return (
        <Link className={`bg-sky-700 ${patternButton}`} href="/cadastro">Cadastrar</Link>
    )
}

export function ButtonSignIn() {
    return (
        <Link className={`border-2 border-sky-700 ${patternButton}`} href="/signin">Entrar</Link>
    )
}
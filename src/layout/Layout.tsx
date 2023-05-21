import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

type Props = {
    children: React.ReactNode,
    title: string
}

function Layout({ children, title }: Props): React.JSX.Element {
    return (
        <div className="flex flex-col pt-24 px-10 bg-slate-900 w-full">
            <Header />
            <main className="min-h-screen pt-10">
                <h1 className="text-2xl text-slate-400 font-bold">{title?? 'Acá va el título'}</h1>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
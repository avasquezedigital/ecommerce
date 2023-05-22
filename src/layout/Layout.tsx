import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

type Props = {
    children: React.ReactNode,
    title?: string,
    description?: string
}

function Layout({ children, title, description }: Props): React.JSX.Element {
    return (
        <div className="relative flex flex-col pt-24 pb-48 px-10 bg-slate-900 w-full">
            <Header />
            <main className="min-h-screen w-full lg:w-3/5 lg:mx-auto pt-10">
                <div className="hero bg-slate-950/30 p-10 rounded-2xl">
                    <h1 className="text-2xl text-gray-400 font-semibold mb-4">{title ?? 'Acá va el título'}</h1>
                    <p className="text-sm font-light text-slate text-slate-500">{description ?? 'Duis in dolore aliquip aute culpa sit mollit id laborum ex. Laborum occaecat duis occaecat amet aute cillum ut. Esse consectetur anim ullamco incididunt occaecat eiusmod adipisicing proident culpa ea culpa occaecat. Officia tempor cillum magna ex dolore dolore occaecat minim velit consequat voluptate.'}</p>
                </div>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
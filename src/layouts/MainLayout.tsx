import type { ReactNode } from "react"

interface MainLayoutProps {
    children: ReactNode
}

function MainLayout({children}: MainLayoutProps) {
    return (
        <div className="px-75 py-8">
            {children}
        </div>
    )
}

export default MainLayout;

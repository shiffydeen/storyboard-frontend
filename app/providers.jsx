'use client'

import { ThemeProvider } from "next-themes";
import { SidebarProvider } from "./context/SidebarContext";


export function Providers({children}) {
    return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>       
        <SidebarProvider>
            {children}
        </SidebarProvider> 
    </ThemeProvider>)
}


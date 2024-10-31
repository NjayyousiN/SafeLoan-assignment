import Image from "next/image";
import logo from "/public/svgs/logo.svg";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

import {
    Home,
    Notebook,
    GraduationCap,
    Bell,
    Menu,
    UserRound,
    Sun,
    Moon,
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <header
            className={
                "py-4 shadow-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white dark:from-blue-900 dark:to-blue-950 dark:text-white"
            } 
        >
            <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
                <Image
                    src={logo}
                    alt="EduConnect"
                    width={250}
                    height={250}
                    className="text-blue-900"
                    style={{ filter: "brightness(0.8)" }}
                />
                <nav className="hidden lg:flex space-x-2">
                    <Button variant="ghost" className="text-md">
                        <Home className="mr-1 h-4 w-4" />
                        Home
                    </Button>
                    <Button variant="ghost" className="text-md">
                        <Notebook className="mr-1 h-4 w-4" />
                        Courses
                    </Button>
                    <Button variant="ghost" className="text-md">
                        <UserRound className="mr-1 h-4 w-4" />
                        Teachers
                    </Button>
                    <Button variant="ghost" className="text-md">
                        <GraduationCap className="mr-1 h-4 w-4" />
                        Resources
                    </Button>
                    <Button variant="ghost" className="text-md">
                        <Bell className="mr-1 h-4 w-4" />
                        Notifications
                    </Button>
                    <Button
                        onClick={toggleDarkMode}
                        variant="ghost"
                        size="icon"
                        className={`${darkMode && "text-yellow-400"}`}
                    >
                        {darkMode ? (
                            <Sun className="h-[1.2rem] w-[1.2rem]" />
                        ) : (
                            <Moon className="h-[1.2rem] w-[1.2rem]" />
                        )}
                    </Button>
                </nav>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className="lg:hidden">
                        <Button variant="ghost">
                            <Menu size={24} />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        align="end"
                        className={`w-56 ${
                            darkMode ? "bg-gray-800 text-white" : "bg-white"
                        }`}
                    >
                        <DropdownMenuItem
                            className={`hover:bg-blue-100 text-md ${
                                darkMode ? "hover:bg-gray-700" : ""
                            }`}
                        >
                            <Home className="mr-2 h-4 w-4" />
                            <span>Home</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className={`hover:bg-blue-100 text-md ${
                                darkMode ? "hover:bg-gray-700" : ""
                            }`}
                        >
                            <Notebook className="mr-2 h-4 w-4" />
                            <span>Courses</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className={`hover:bg-blue-100 text-md ${
                                darkMode ? "hover:bg-gray-700" : ""
                            }`}
                        >
                            <UserRound className="mr-2 h-4 w-4" />
                            <span>Teachers</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className={`hover:bg-blue-100 text-md ${
                                darkMode ? "hover:bg-gray-700" : ""
                            }`}
                        >
                            <GraduationCap className="mr-2 h-4 w-4" />
                            <span>Resources</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className={`hover:bg-blue-100 text-md ${
                                darkMode ? "hover:bg-gray-700" : ""
                            }`}
                        >
                            <Bell className="mr-2 h-4 w-4" />
                            <span>Notifications</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}

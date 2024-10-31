import Image from "next/image";
import logo from "/public/svgs/logo.svg";
import { Button } from "@/components/ui/button";
import {
    Home,
    Notebook,
    GraduationCap,
    Bell,
    Menu,
    UserRound,
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 shadow-lg">
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
                </nav>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className="lg:hidden">
                        <Button variant="ghost">
                            <Menu size={24} />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 bg-white">
                        <DropdownMenuItem className="hover:bg-blue-100 text-md">
                            <Home className="mr-2 h-4 w-4" />
                            <span>Home</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-blue-100 text-md">
                            <Notebook className="mr-2 h-4 w-4" />
                            <span>Courses</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-blue-100 text-md">
                            <UserRound className="mr-2 h-4 w-4" />
                            <span>Teachers</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-blue-100 text-md">
                            <GraduationCap className="mr-2 h-4 w-4" />
                            <span>Resources</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-blue-100 text-md">
                            <Bell className="mr-2 h-4 w-4" />
                            <span>Notifications</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}

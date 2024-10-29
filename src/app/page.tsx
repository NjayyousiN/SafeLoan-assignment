"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Book,
    UserRound,
    BookDown,
    ChevronRightCircleIcon,
    Home,
    Notebook,
    GraduationCap,
    Bell,
    Menu,
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

// Define the structure for a teacher
interface Teacher {
    id: number;
    name: string;
    subject: string;
    description: string;
    imageSrc: string;
}

// Sample data for teachers
const teachers: Teacher[] = [
    {
        id: 1,
        name: "Dr. Jane Smith",
        subject: "Mathematics",
        description:
            "Specializes in advanced calculus and linear algebra.",
        imageSrc: "/SafeLoan-assignment/images/mathematics.jpg",
    },
    {
        id: 2,
        name: "Prof. John Doe",
        subject: "Literature",
        description: "Expert in 20th century American literature.",
        imageSrc: "/SafeLoan-assignment/images/literature.jpg",
    },
    {
        id: 3,
        name: "Ms. Emily Brown",
        subject: "Computer Science",
        description: "Focuses on web development and algorithms.",
        imageSrc: "/SafeLoan-assignment/images/cs.jpg",
    },
    {
        id: 4,
        name: "Mr. Michael Lee",
        subject: "Physics",
        description: "Specializes in quantum mechanics and relativity.",
        imageSrc: "/SafeLoan-assignment/images/physics.jpg",
    },
    {
        id: 5,
        name: "Dr. Sarah Johnson",
        subject: "Biology",
        description: "Expert in molecular biology and genetics.",
        imageSrc: "/SafeLoan-assignment/images/biology.jpg",
    },
    {
        id: 6,
        name: "Mr. David Wilson",
        subject: "History",
        description:
            "Specializes in ancient civilizations and world history.",
        imageSrc: "/SafeLoan-assignment/images/history.jpg",
    },
];

export default function TeachersInfoCards() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-primary text-primary-foreground py-4">
                <div className="container mx-auto flex flex-wrap justify-between items-center px-2">
                    <h1 className="text-2xl font-bold">EduConnect</h1>
                    <nav className="hidden lg:flex space-x-2">
                        <Button
                            variant="ghost"
                            className="text-primary-foreground"
                        >
                            <Home className="mr-2 h-4 w-4" />
                            Home
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-primary-foreground"
                        >
                            <Notebook className="mr-2 h-4 w-4" />
                            Courses
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-primary-foreground"
                        >
                            <UserRound className="mr-2 h-4 w-4" />
                            Teachers
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-primary-foreground"
                        >
                            <GraduationCap className="mr-2 h-4 w-4" />
                            Resources
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-primary-foreground"
                        >
                            <Bell className="mr-2 h-4 w-4" />
                            Notifications
                        </Button>
                    </nav>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild className="lg:hidden">
                            <Button
                                variant="ghost"
                                className="text-primary-foreground"
                            >
                                <Menu className="h-6 w-6" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuItem>
                                <Home className="mr-2 h-4 w-4" />
                                <span>Home</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Notebook className="mr-2 h-4 w-4" />
                                <span>Courses</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <UserRound className="mr-2 h-4 w-4" />
                                <span>Teachers</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <GraduationCap className="mr-2 h-4 w-4" />
                                <span>Resources</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Bell className="mr-2 h-4 w-4" />
                                <span>Notifications</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
            <main className="flex-grow">
                <div className="container mx-auto py-8 px-2">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        Book Classes with Our Teachers
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {teachers.map((teacher) => (
                            <Card
                                key={teacher.id}
                                className="flex flex-col transition-transform transform sm:hover:scale-105 ease-in-out duration-200 border-primary-foreground"
                            >
                                <CardHeader>
                                    <CardTitle className="flex gap-1 items-center text-lg">
                                        <UserRound size={22} />
                                        {teacher.name}
                                    </CardTitle>
                                    <CardDescription className="flex gap-1 items-center">
                                        <Book size={20} />
                                        {teacher.subject}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col">
                                    <div className="relative w-full aspect-[16/9] mb-4">
                                        <Image
                                            src={teacher.imageSrc}
                                            alt={`${teacher.name}'s portrait`}
                                            fill
                                            className="mx-auto mb-4 rounded-md"
                                        />
                                    </div>
                                    <div className="flex gap-2 items-center mt-auto">
                                        <ChevronRightCircleIcon size={19} />
                                        <p>{teacher.description}</p>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full flex gap-1 items-center">
                                        <BookDown size={22} />
                                        Book Class
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>
            <footer className="bg-primary text-primary-foreground py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 EduConnect. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

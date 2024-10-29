import Image from "next/image";
import { Button } from "@/components/ui/button";
import WordFadeIn from "@/components/ui/word-fade-in";
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
        description: "Specializes in advanced calculus and linear algebra.",
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
        description: "Specializes in ancient civilizations and world history.",
        imageSrc: "/SafeLoan-assignment/images/history.jpg",
    },
];

export default function TeachersInfoCards() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-black">
            <header className="bg-gradient-to-r from-blue-900 to-black text-white py-4 shadow-lg">
                <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
                    <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                        EduConnect
                    </h1>
                    <nav className="hidden lg:flex space-x-2">
                        <Button
                            variant="ghost"
                            className="text-white hover:bg-white/10"
                        >
                            <Home className="mr-2 h-4 w-4" />
                            Home
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-white hover:bg-white/10"
                        >
                            <Notebook className="mr-2 h-4 w-4" />
                            Courses
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-white hover:bg-white/10"
                        >
                            <UserRound className="mr-2 h-4 w-4" />
                            Teachers
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-white hover:bg-white/10"
                        >
                            <GraduationCap className="mr-2 h-4 w-4" />
                            Resources
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-white hover:bg-white/10"
                        >
                            <Bell className="mr-2 h-4 w-4" />
                            Notifications
                        </Button>
                    </nav>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild className="lg:hidden">
                            <Button
                                variant="ghost"
                                className="text-white hover:bg-white/10"
                            >
                                <Menu className="h-6 w-6" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align="end"
                            className="w-56 bg-gray-900 text-white"
                        >
                            <DropdownMenuItem className="hover:bg-gray-800">
                                <Home className="mr-2 h-4 w-4" />
                                <span>Home</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-gray-800">
                                <Notebook className="mr-2 h-4 w-4" />
                                <span>Courses</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-gray-800">
                                <UserRound className="mr-2 h-4 w-4" />
                                <span>Teachers</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-gray-800">
                                <GraduationCap className="mr-2 h-4 w-4" />
                                <span>Resources</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-gray-800">
                                <Bell className="mr-2 h-4 w-4" />
                                <span>Notifications</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
            <main className="flex-grow">
                <div className="container mx-auto py-12 px-4">
                    <WordFadeIn words="Book Classes with Our Expert Teachers" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teachers.map((teacher) => (
                            <Card
                                key={teacher.id}
                                className="flex flex-col transition-all transform sm:hover:scale-105 ease-in-out duration-300 border-none shadow-lg hover:shadow-2xl bg-gray-900 text-white"
                            >
                                <CardHeader className="pb-2">
                                    <CardTitle className="flex gap-2 items-center text-xl text-blue-400">
                                        <UserRound size={24} />
                                        {teacher.name}
                                    </CardTitle>
                                    <CardDescription className="flex gap-1 items-center text-gray-300">
                                        <Book size={18} />
                                        {teacher.subject}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col p-4">
                                    <div className="relative w-full aspect-[16/9] mb-4 overflow-hidden rounded-lg">
                                        <Image
                                            src={teacher.imageSrc}
                                            alt={`${teacher.name}'s portrait`}
                                            fill
                                            className="object-cover transition-transform duration-300 hover:scale-110"
                                        />
                                    </div>
                                    <div className="flex gap-2 items-start mt-auto text-gray-300">
                                        <ChevronRightCircleIcon
                                            size={20}
                                            className="text-blue-400 mt-1"
                                        />
                                        <p>{teacher.description}</p>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full flex gap-2 items-center bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white transition-all duration-300">
                                        <BookDown size={20} />
                                        Book Class
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>
            <footer className="bg-gradient-to-r from-blue-900 to-black text-white py-6">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 EduConnect. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

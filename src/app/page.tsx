"use client";

import { useState } from "react";
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
} from "lucide-react";
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
} from "@/components/ui/collapsible";
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
    briefDescription: string;
    about: string;
    imageSrc: string;
}

// Sample data for teachers
const teachers: Teacher[] = [
    {
        id: 1,
        name: "Dr. Jane Smith",
        subject: "Mathematics",
        briefDescription:
            "Specializes in advanced calculus and linear algebra.",
        about: "Dr. Jane Smith is a renowned mathematician with over 15 years of teaching experience. She holds a Ph.D. in Pure Mathematics from MIT and has published numerous papers on complex analysis and differential geometry. Her teaching approach combines rigorous theoretical foundations with practical applications, making even the most challenging mathematical concepts accessible to students. Dr. Smith is particularly passionate about fostering logical thinking and problem-solving skills in her students, preparing them not just for exams but for real-world challenges where mathematical thinking is crucial.",
        imageSrc: "/images/mathematics.jpg",
    },
    {
        id: 2,
        name: "Prof. John Doe",
        subject: "Literature",
        briefDescription: "Expert in 20th century American literature.",
        about: "Prof. John Doe is a leading scholar of 20th-century American literature, with a focus on the works of F. Scott Fitzgerald and Ernest Hemingway. He holds a Ph.D. in English Literature from Yale University and has published several acclaimed books on modernist fiction. Prof. Doe's classes are known for their engaging discussions and insightful analysis of literary texts, helping students develop a deeper appreciation for the complexities of the human experience as portrayed in literature.",
        imageSrc: "/images/literature.jpg",
    },
    {
        id: 3,
        name: "Ms. Emily Brown",
        subject: "Computer Science",
        briefDescription: "Focuses on web development and algorithms.",
        about: "Ms. Emily Brown is a seasoned computer scientist with expertise in web development and algorithms. She has a Master's degree in Computer Science from Stanford University and has worked as a software engineer at leading tech companies. Ms. Brown is passionate about teaching and is known for her clear explanations and hands-on coding exercises that help students build practical skills in programming and problem-solving. Her classes cover a wide range of topics, from front-end web development to data structures and algorithms",
        imageSrc: "/images/cs.jpg",
    },
    {
        id: 4,
        name: "Mr. Michael Lee",
        subject: "Physics",
        briefDescription: "Specializes in quantum mechanics and relativity.",
        about: "Mr. Michael Lee is a dedicated physics teacher with a deep understanding of quantum mechanics and relativity. He holds a Master's degree in Physics from Caltech and has conducted research in theoretical physics. Mr. Lee's classes are known for their interactive demonstrations and thought experiments that bring complex physical concepts to life. He is committed to helping students develop a strong intuition for the laws of nature and a passion for scientific",
        imageSrc: "/images/physics.jpg",
    },
    {
        id: 5,
        name: "Dr. Sarah Johnson",
        subject: "Biology",
        briefDescription: "Expert in molecular biology and genetics.",
        about: "Dr. Sarah Johnson is a distinguished biologist with a Ph.D. in Molecular Biology from Harvard University. She has over 10 years of experience in teaching and research, focusing on genetic engineering and cellular biology. Dr. Johnson's classes are highly interactive, incorporating the latest research and technological advancements in the field. She is dedicated to inspiring students to explore the wonders of life at the molecular level and to pursue careers in biological sciences.",
        imageSrc: "/images/biology.jpg",
    },
    {
        id: 6,
        name: "Mr. David Wilson",
        subject: "History",
        briefDescription:
            "Specializes in ancient civilizations and world history.",
        about: "Mr. David Wilson is a passionate historian with a Master's degree in History from the University of Cambridge. He has extensive knowledge of ancient civilizations, including Egypt, Greece, and Rome, as well as a broad understanding of world history. Mr. Wilson's classes are known for their engaging storytelling and critical analysis of historical events, helping students to understand the complexities of the past and its impact on the present. He encourages students to think critically about historical sources and to develop a nuanced understanding of historical narratives.",
        imageSrc: "/images/history.jpg",
    },
];

export default function TeachersInfoCards() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-primary text-primary-foreground py-4">
                <div className="container mx-auto flex flex-wrap justify-between items-center">
                    <h1 className="text-2xl font-bold">EduConnect</h1>
                    <nav className="flex space-x-2">
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
                </div>
            </header>

            <main className="flex-grow">
                <div className="container mx-auto py-8">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        Book Classes with Our Teachers
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {teachers.map((teacher) => (
                            <Card
                                key={teacher.id}
                                className="flex flex-col transition-transform transform hover:scale-105 ease-in-out duration-200 border-primary-foreground"
                            >
                                <CardHeader>
                                    <CardTitle className="flex gap-1 items-center">
                                        <UserRound size={22} />
                                        {teacher.name}
                                    </CardTitle>
                                    <CardDescription className="flex gap-1 items-center">
                                        <Book size={20} />
                                        {teacher.subject}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col">
                                    <div className="w-full h-5/6">
                                        <Image
                                            src={teacher.imageSrc}
                                            alt={`${teacher.name}'s portrait`}
                                            width={400}
                                            height={200}
                                            objectFit="fill"
                                            className="mx-auto mb-4 rounded-md"
                                        />
                                    </div>
                                    <div className="flex gap-2 items-center mt-auto">
                                        <ChevronRightCircleIcon size={19} />
                                        <p>{teacher.briefDescription}</p>
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
        </div>
    );
}

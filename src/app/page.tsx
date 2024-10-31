"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import WordFadeIn from "@/components/ui/word-fade-in";
import BlurFade from "@/components/ui/blur-fade";
import Header from "@/components/header";
import {
    Book,
    UserRound,
    BookDown,
    Clock,
    LogOut,
    Sun,
    Moon,
} from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Course {
    id: number;
    courseName: string;
    instructorName: string;
    subject: string;
    imageSrc: string;
    timing: string;
    sectionSize: number;
    enrolledStudents: number;
    isRegistered: boolean;
}

const initialCourses: Course[] = [
    {
        id: 1,
        courseName: "Linear Algebra",
        instructorName: "Dr. Jane Smith",
        subject: "Mathematics",
        imageSrc: "/SafeLoan-assignment/images/mathematics.jpg",
        timing: "Mon & Wed, 10:00 AM - 11:30 AM",
        sectionSize: 30,
        enrolledStudents: 29,
        isRegistered: false,
    },
    {
        id: 2,
        courseName: "20th Century American Literature",
        instructorName: "Prof. John Doe",
        subject: "Literature",
        imageSrc: "/SafeLoan-assignment/images/literature.jpg",
        timing: "Tue & Thu, 1:00 PM - 2:30 PM",
        sectionSize: 25,
        enrolledStudents: 20,
        isRegistered: false,
    },
    {
        id: 3,
        courseName: "Web Development and Algorithms",
        instructorName: "Ms. Emily Brown",
        subject: "Computer Science",
        imageSrc: "/SafeLoan-assignment/images/cs.jpg",
        timing: "Mon, Wed & Fri, 3:00 PM - 4:30 PM",
        sectionSize: 20,
        enrolledStudents: 20,
        isRegistered: false,
    },
    {
        id: 4,
        courseName: "Quantum Mechanics and Relativity",
        instructorName: "Mr. Michael Lee",
        subject: "Physics",
        imageSrc: "/SafeLoan-assignment/images/physics.jpg",
        timing: "Tue & Thu, 9:00 AM - 10:30 AM",
        sectionSize: 15,
        enrolledStudents: 10,
        isRegistered: false,
    },
    {
        id: 5,
        courseName: "Molecular Biology and Genetics",
        instructorName: "Dr. Sarah Johnson",
        subject: "Biology",
        imageSrc: "/SafeLoan-assignment/images/biology.jpg",
        timing: "Mon & Wed, 11:00 AM - 12:30 PM",
        sectionSize: 25,
        enrolledStudents: 22,
        isRegistered: false,
    },
    {
        id: 6,
        courseName: "Islamic History and Culture",
        instructorName: "Mr. David Wilson",
        subject: "History",
        imageSrc: "/SafeLoan-assignment/images/history.jpg",
        timing: "Sun, 2:00 PM - 3:30 PM",
        sectionSize: 30,
        enrolledStudents: 28,
        isRegistered: false,
    },
];

export default function CourseInfoCards() {
    const [courses, setCourses] = useState(initialCourses);

    const handleBookClass = (courseId: number) => {
        setCourses((prevCourses) =>
            prevCourses.map((course) =>
                course.id === courseId &&
                course.enrolledStudents < course.sectionSize &&
                !course.isRegistered
                    ? {
                          ...course,
                          enrolledStudents: course.enrolledStudents + 1,
                          isRegistered: true,
                      }
                    : course
            )
        );
    };

    const handleUnregister = (courseId: number) => {
        setCourses((prevCourses) =>
            prevCourses.map((course) =>
                course.id === courseId && course.isRegistered
                    ? {
                          ...course,
                          enrolledStudents: course.enrolledStudents - 1,
                          isRegistered: false,
                      }
                    : course
            )
        );
    };

    return (
        <div className="flex flex-col min-h-screen dark:bg-gray-900 bg-white">
            <Header />
            <main className="flex-grow dark:bg-gray-800 bg-gray-50">
                <div className="container mx-auto py-12 px-4">
                    <div className="flex justify-between items-center mb-8">
                        <WordFadeIn
                            words="Book Classes with Our Expert Teachers"
                            className="font-bold text-transparent bg-clip-text bg-gradient-to-r dark:from-blue-200 dark:to-blue-500 from-blue-500 to-blue-700"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course, idx) => (
                            <BlurFade key={idx} delay={0.4 + idx * 0.05}>
                                <Card
                                    key={course.id}
                                    className="flex flex-col dark:bg-gray-700 dark:text-white bg-blue-50"
                                >
                                    <CardHeader className="pb-2">
                                        <CardTitle className="flex gap-2 items-center text-xl dark:text-blue-400 text-blue-600">
                                            <UserRound size={18} />
                                            {course.instructorName}
                                        </CardTitle>
                                        <CardDescription className="flex gap-1 text-sm font-semibold items-center dark:text-gray-400 text-gray-600">
                                            <Book size={22} />
                                            {course.subject}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow flex flex-col p-4">
                                        <div className="relative w-full aspect-[16/9] mb-4 overflow-hidden rounded-lg">
                                            <Image
                                                src={course.imageSrc}
                                                alt={`${course.courseName} image`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2 items-start mt-auto dark:text-gray-300 text-gray-700 font-semibold">
                                            <p>{course.courseName}</p>
                                            <div className="flex gap-1 items-center">
                                                <Clock size={18} />
                                                <p>{course.timing}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex flex-col gap-2">
                                        <div className="w-full flex items-center justify-between">
                                            <span className="text-sm dark:text-gray-400 text-gray-600">
                                                {course.enrolledStudents}/
                                                {course.sectionSize} Enrolled
                                            </span>
                                        </div>
                                        <Progress
                                            value={
                                                (course.enrolledStudents /
                                                    course.sectionSize) *
                                                100
                                            }
                                            className="w-full h-2 dark:bg-gray-700 bg-gray-200"
                                        />
                                        {course.isRegistered ? (
                                            <Button
                                                className="w-full flex gap-2 items-center bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white transition-all duration-300"
                                                onClick={() =>
                                                    handleUnregister(course.id)
                                                }
                                            >
                                                <LogOut size={20} />
                                                Withdraw
                                            </Button>
                                        ) : (
                                            <Button
                                                className="w-full flex gap-2 items-center dark:bg-gradient-to-r dark:from-blue-600 dark:to-blue-800 dark:hover:from-blue-700 dark:hover:to-blue-900 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white transition-all duration-300"
                                                disabled={
                                                    course.enrolledStudents >=
                                                    course.sectionSize
                                                }
                                                onClick={() =>
                                                    handleBookClass(course.id)
                                                }
                                            >
                                                {course.enrolledStudents >=
                                                course.sectionSize ? (
                                                    <>
                                                        <BookDown size={20} />
                                                        Class Full
                                                    </>
                                                ) : (
                                                    <>
                                                        <BookDown size={20} />
                                                        Book Class
                                                    </>
                                                )}
                                            </Button>
                                        )}
                                    </CardFooter>
                                </Card>
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </main>
            <footer className="dark:from-blue-900 dark:to-blue-950 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6">
                <div className="container mx-auto text-center text-lg">
                    <p>&copy; 2024 EduConnect. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

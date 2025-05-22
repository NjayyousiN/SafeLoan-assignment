"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import WordFadeIn from "@/components/ui/word-fade-in";
import BlurFade from "@/components/ui/blur-fade";
import Header from "@/components/header";
import { Book, UserRound, BookDown, Clock, LogOut } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ApiCourse {
  field: string;
  subject: string;
  class_timing: string;
  instructor_name: string;
  id: number;
  no_of_registered_students: number;
  course_pic: string;
}

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

const transformApiCourse = (apiCourse: ApiCourse): Course => ({
  id: apiCourse.id,
  courseName: apiCourse.subject,
  instructorName: apiCourse.instructor_name,
  subject: apiCourse.field,
  imageSrc: `https://safeloan-db.onrender.com/courses/images/${apiCourse.course_pic
    .split("/")
    .pop()}`,
  timing: apiCourse.class_timing,
  sectionSize: 30,
  enrolledStudents: apiCourse.no_of_registered_students,
  isRegistered: false,
});

async function fetchCourses(): Promise<Course[]> {
  const response = await fetch(`https://safeloan-db.onrender.com/courses`);
  console.log("Response:", response);
  if (!response.ok) throw new Error("Failed to fetch courses");
  const data: ApiCourse[] = await response.json();
  return data.map(transformApiCourse);
}

async function updateCourse(courseId: number, registeredStudents: number) {
  const response = await fetch(
    `https://safeloan-db.onrender.com/courses/${courseId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        no_of_registered_students: registeredStudents,
      }),
    }
  );

  if (!response.ok) throw new Error("Failed to update course");
  return response.json();
}

export default function CourseInfoCards() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCourses()
      .then(setCourses)
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  const handleBookClass = async (courseId: number) => {
    try {
      const course = courses.find((c) => c.id === courseId);
      if (!course) return;

      const newEnrolledStudents = course.enrolledStudents + 1;
      await updateCourse(courseId, newEnrolledStudents);

      setCourses((prevCourses) =>
        prevCourses.map((course) =>
          course.id === courseId &&
          course.enrolledStudents < course.sectionSize &&
          !course.isRegistered
            ? {
                ...course,
                enrolledStudents: newEnrolledStudents,
                isRegistered: true,
              }
            : course
        )
      );
    } catch (error) {
      console.error("Failed to book class:", error);
    }
  };

  const handleUnregister = async (courseId: number) => {
    try {
      const course = courses.find((c) => c.id === courseId);
      if (!course) return;

      const newEnrolledStudents = course.enrolledStudents - 1;
      await updateCourse(courseId, newEnrolledStudents);

      setCourses((prevCourses) =>
        prevCourses.map((course) =>
          course.id === courseId && course.isRegistered
            ? {
                ...course,
                enrolledStudents: newEnrolledStudents,
                isRegistered: false,
              }
            : course
        )
      );
    } catch (error) {
      console.error("Failed to unregister:", error);
      // Optionally show error to user
    }
  };

  if (isLoading)
    return (
      <div className="flex flex-col min-h-screen dark:bg-gray-900 bg-white">
        <Header />
        <main className="flex-grow dark:bg-gray-800 bg-gray-50">
          <div className="container mx-auto py-12 px-4">
            <div className="flex justify-between items-center mb-8">
              <div className="h-8 w-96 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 animate-pulse" />
                      <div className="h-4 w-32 bg-gray-200 dark:bg-gray-600 rounded animate-pulse" />
                    </div>
                    <div className="w-full aspect-[16/9] bg-gray-200 dark:bg-gray-600 rounded-lg mb-4 animate-pulse" />
                    <div className="space-y-3">
                      <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-600 rounded animate-pulse" />
                      <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-600 rounded animate-pulse" />
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="h-2 w-full bg-gray-200 dark:bg-gray-600 rounded animate-pulse" />
                      <div className="h-10 w-full bg-gray-200 dark:bg-gray-600 rounded animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  if (error) return <div>Error: {error}</div>;

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
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/fallback-image.jpg"; // Create a fallback image in your public folder
                        }}
                      />{" "}
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
                        {course.enrolledStudents}/{course.sectionSize} Enrolled
                      </span>
                    </div>
                    <Progress
                      value={
                        (course.enrolledStudents / course.sectionSize) * 100
                      }
                      className="w-full h-2 dark:bg-gray-700 bg-gray-200"
                    />
                    {course.isRegistered ? (
                      <Button
                        className="w-full flex gap-2 items-center bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white transition-all duration-300"
                        onClick={() => handleUnregister(course.id)}
                      >
                        <LogOut size={20} />
                        Withdraw
                      </Button>
                    ) : (
                      <Button
                        className="w-full flex gap-2 items-center dark:bg-gradient-to-r dark:from-blue-600 dark:to-blue-800 dark:hover:from-blue-700 dark:hover:to-blue-900 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white transition-all duration-300"
                        disabled={course.enrolledStudents >= course.sectionSize}
                        onClick={() => handleBookClass(course.id)}
                      >
                        {course.enrolledStudents >= course.sectionSize ? (
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

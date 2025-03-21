import { Heart } from "lucide-react";
import { FavouriteCourses } from "@/components/courses/favourite-courses";

export default function FavouriteCoursesPage() {
  return (
    <div className="container mx-auto transition-all animate-fade-in">
      <div className="space-y-1 mb-8">
        <h1 className="text-3xl font-bold flex items-center">
          <Heart className="h-6 w-6 mr-2 text-red-500" />
          Favorite Courses
        </h1>
        <p className="text-muted-foreground">
          Courses you have saved for quick access
        </p>
      </div>

      <FavouriteCourses />
    </div>
  );
}

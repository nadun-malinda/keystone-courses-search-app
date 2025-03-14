import { CourseList } from "../courses/course-list";
import { QueryParams } from "@/types/filters";
import { dbFetchCourses } from "@/lib/data/course/db-fetch-courses";

export async function SearchResult({
  urlSearchParams,
}: {
  urlSearchParams: QueryParams;
}) {
  const courses = await dbFetchCourses(urlSearchParams);

  console.log(">>> courses: ", courses);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center">
        Search Results
        <span className="ml-2 text-sm font-normal text-muted-foreground">
          ({courses.length} courses found)
        </span>
      </h2>
      <CourseList courses={courses} />
    </div>
  );
}

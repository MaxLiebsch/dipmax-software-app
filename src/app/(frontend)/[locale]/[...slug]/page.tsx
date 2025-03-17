// app/[locale]/[...slug]/page.tsx
import { notFound } from 'next/navigation';

// Define your valid paths or fetch them from a data source
const validPaths = ['developers', 'projects'];

export default function CatchAllPage({
  params
}: {
  params: { locale: string; slug: string[] };
}) {
  const { slug } = params;
  
  // Get the first part of the path
  const mainPath = slug[0];
  
  // Check if the path is valid
  if (!validPaths.includes(mainPath)) {
    // Trigger the not-found page if path doesn't exist
    notFound();
  }
  
  // If it gets here, it's a valid path
  return (
    <div>
      <h1>Page: {mainPath}</h1>
      {/* Content for valid page */}
    </div>
  );
}
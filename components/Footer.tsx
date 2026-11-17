async function getCurrentYear() {
  'use cache';
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getCurrentYear();
  
  return (
    <footer className="bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-600 mt-auto">
      &copy; {year} StudyPlanner | WDD 430 Team
    </footer>
  );
}
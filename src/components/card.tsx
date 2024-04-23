import Link from "next/link"
import prog from "../app/prog.json"

export default function Card() {
  let programs = prog;
    return (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {prog.map((program, index) => (
        <div className="rounded-lg bg-white p-8 shadow-lg transition-transform hover:scale-105 dark:bg-gray-800" key={index}>
        <div className="mb-4">
          <h3 className="text-xl font-bold">{program.name}</h3>
        </div>
        <p className="mb-6 text-gray-500 dark:text-gray-400">
          {program.description}
        </p>
        <Link
          className="inline-flex items-center justify-center rounded-md bg-[#6366F1] px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2"
          href={program.link}
        >
          Sign Up
        </Link>
      </div>
        ))}
            </div>
    )
}
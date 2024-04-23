import Link from "next/link"
import { Input } from "@/components/ui/input"
import { lazy, Suspense } from 'react'
const Card = lazy(() => import("./card"));
import { JSX, SVGProps } from "react";


export default function Program() {
  return (
    <div className="w-full">
      <header className="w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] py-4 md:py-6 lg:py-8">
        <div className="container mx-auto px-4 md:px-6 xl:px-8 flex items-center justify-between">
          <Link
            className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-base font-medium text-[#6366F1] shadow-md transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2"
            href="/"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back
          </Link>
          <div className="relative w-full bg-gray-500 max-w-md rounded-md">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
            <div className="bg-white rounded-md">
              <Input className="pl-10 w-full focus:outline-none" placeholder="Search programs..." type="search"/>
            </div>
           
          </div>
        </div>
      </header>
      <section className="w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Programs</h2>
            <p className="mb-12 text-lg text-gray-200 sm:text-xl md:text-2xl">
              Explore our diverse range of programs and embark on a journey of personal and professional growth.
            </p>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Card />
        </Suspense>
            </div>
      </section>
    </div>
  )
}

function ArrowLeftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

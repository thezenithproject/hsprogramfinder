import Link from "next/link"

export default function Hero() {
  return (
   
    <section className="w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] py-20 md:py-32 lg:py-40 bg-white">
      <div className="container mx-auto px-4 md:px-6 xl:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="flex flex-col items-start justify-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Find Your Next Adventure
            </h1>
            <p className="max-w-md text-lg text-gray-200 md:text-xl">
              Discover high school programs and internships tailored to your interests and goals. Explore opportunities
              that will shape your future.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-[#6366F1] shadow-md transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6366F1]"
                href="/programs"
              >
                Browse Programs
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-md bg-[#8B5CF6] px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-[#7E22CE] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#8B5CF6]"
                href="/blogs"
              >
                Explore Blogs
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              alt="Hero Illustration"
              className="max-w-full"
              height={500}
              src="https://images.unsplash.com/photo-1505246053330-ecd82cf55f18?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{
                aspectRatio: "500/600",
                objectFit: "cover",
              }}
              width={500}
            />
          </div>
        </div>
      </div>
    </section>
    
  )
}
<script>
    const websites = [
        { 
            id: 1, 
            title: "Todo App", 
            description: "A simple page where you can manage your todos.", 
            color: "bg-indigo-500", 
            href: "/todos" 
        },
        { 
            id: 2, 
            title: "Positivus Landing Page", 
            description: "Professional and modern business site.", 
            color: "bg-green-500", 
            href: "/positivus" 
        },
        { 
            id: 3, 
            title: "Personal Portfolio", 
            description: "Personal portfolio website to display my skills and projects.", 
            color: "bg-red-500", 
            href: "/portfolio" 
        },
        { 
            id: 4, 
            title: "Agency Website", 
            description: "A clean and functional agency website.", 
            color: "bg-yellow-500", 
            href: "/agency-website" 
        },
    ];
</script>

<section class="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div class="max-w-4xl mx-auto">
        
        <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-10">
            Showcase Projects ✨
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {#each websites as site (site.id)}
                <a 
                    href={site.href}
                    class="
                        block p-6 rounded-xl shadow-lg 
                        hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 
                        {site.color} text-white
                        flex flex-col justify-between h-full
                    "
                >
                    <div>
                        <h3 class="text-2xl font-bold mb-2">
                            {site.title}
                        </h3>
                        <p class="text-lg opacity-90">
                            {site.description}
                        </p>
                    </div>
                    
                    <div class="mt-4 text-sm font-semibold flex items-center">
                        View Project
                        <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </div>
                </a>
            {/each}

        </div>
    </div>
</section>
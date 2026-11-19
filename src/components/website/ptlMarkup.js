// Auto-converted from plot_the_link_lux_land_developers.html (body markup).
// Kept as plain HTML so Tailwind can scan every class below during the project build.
const markup = `<div id="ptl-root" class="bg-slate-950 text-slate-100 antialiased selection:bg-gold-500 selection:text-slate-950 min-h-screen" x-data="appData()">
<!-- ================= NAVBAR ================= -->
    <nav class="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-slate-950/80 backdrop-blur-md border-b border-gold-500/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <!-- Logo -->
                <a href="#home" class="flex items-center gap-3 group">
                    <img src="/logo/luxland-developers-logo.png" alt="Lux Land Developers" class="h-16 w-auto object-contain group-hover:scale-105 transition-transform">
                </a>

                <!-- Desktop Nav Links -->
                <div class="hidden md:flex items-center space-x-8 text-sm font-medium">
                    <a href="#home" class="hover:text-gold-400 transition-colors">Home</a>
                    <a href="#services" class="hover:text-gold-400 transition-colors">What We Do</a>
                    <a href="#properties" class="hover:text-gold-400 transition-colors">Plots & Properties</a>
                    <a href="#testimonials" class="hover:text-gold-400 transition-colors">Testimonials</a>
                    <a href="#about" class="hover:text-gold-400 transition-colors">About Us</a>
                    <a href="#contact" class="hover:text-gold-400 transition-colors">Contact</a>
                </div>

                <!-- Primary Action -->
                <div class="hidden md:flex items-center gap-4">
                    <a href="#contact" class="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-slate-950 font-semibold px-5 py-2.5 rounded-lg text-sm shadow-md transition-all duration-300 hover:shadow-gold-500/25 hover:scale-105">
                        Schedule Visit
                    </a>
                </div>

                <!-- Mobile menu button -->
                <div class="md:hidden flex items-center gap-2">
                    <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-slate-300 hover:text-white p-2">
                        <i data-lucide="menu" class="w-6 h-6" x-show="!mobileMenuOpen"></i>
                        <i data-lucide="x" class="w-6 h-6" x-show="mobileMenuOpen" x-cloak></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div x-show="mobileMenuOpen" x-cloak class="md:hidden glass-card border-t border-gold-500/20 px-4 pt-2 pb-6 space-y-3">
            <a href="#home" @click="mobileMenuOpen = false" class="block py-2 text-slate-200 hover:text-gold-400">Home</a>
            <a href="#services" @click="mobileMenuOpen = false" class="block py-2 text-slate-200 hover:text-gold-400">What We Do</a>
            <a href="#properties" @click="mobileMenuOpen = false" class="block py-2 text-slate-200 hover:text-gold-400">Properties</a>
            <a href="#testimonials" @click="mobileMenuOpen = false" class="block py-2 text-slate-200 hover:text-gold-400">Testimonials</a>
            <a href="#about" @click="mobileMenuOpen = false" class="block py-2 text-slate-200 hover:text-gold-400">About Us</a>
            <a href="#contact" @click="mobileMenuOpen = false" class="block py-2 text-slate-200 hover:text-gold-400">Contact Us</a>
            <div class="flex items-center gap-4 border-t border-slate-700/70 pt-4">
                <span class="text-xs text-slate-400">Follow us</span>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Instagram" class="text-slate-300 hover:text-gold-400 transition-colors">
                    <i data-lucide="instagram" class="h-5 w-5"></i>
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit YouTube" class="text-slate-300 hover:text-gold-400 transition-colors">
                    <i data-lucide="youtube" class="h-5 w-5"></i>
                </a>
            </div>
        </div>
    </nav>

    <!-- ================= HERO SECTION ================= -->
    <section id="home" class="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
        <!-- Background Glow FX -->
        <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div class="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div class="text-center max-w-3xl mx-auto mb-12">
                <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs uppercase tracking-widest mb-6 font-semibold">
                    <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Premium Coastal & Gaothan Lands
                </span>
                <h1 class="text-4xl sm:text-6xl font-serif font-bold text-white leading-tight mb-6">
                    Discover Your Dream Plot with <span class="gold-gradient-text">Plot The Link</span>
                </h1>
                <p class="text-slate-400 text-base sm:text-lg font-light leading-relaxed mb-8">
                    Simplifying your journey to acquire clear-title premium land parcels in Alibaug, Kihim, Saswane & Zirad. Elevated coastal living starts here.
                </p>
            </div>

            <!-- Search Bar Filter Container -->
            <div class="glass-card rounded-2xl p-4 sm:p-6 shadow-2xl max-w-4xl mx-auto border border-gold-500/20">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                        <label class="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-medium">Location Filter</label>
                        <div class="relative">
                            <select x-model="filterLocation" class="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-gold-500 appearance-none">
                                <option value="All">All Locations (Alibaug & nearby)</option>
                                <option value="Saswane">Saswane</option>
                                <option value="Zirad">Zirad</option>
                                <option value="Mapgaon">Mapgaon</option>
                                <option value="Kihim">Kihim</option>
                                <option value="Nandaipada">Nandaipada</option>
                            </select>
                            <i data-lucide="chevron-down" class="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none"></i>
                        </div>
                    </div>
                    <div>
                        <label class="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-medium">Zone Category</label>
                        <div class="relative">
                            <select x-model="filterZone" class="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-gold-500 appearance-none">
                                <option value="All">All Zones (Gaothan, Green 1...)</option>
                                <option value="Gaothan">Gaothan Zone (FSI 1.1+)</option>
                                <option value="Green 1">Green 1 Zone</option>
                                <option value="Plantation">Plantation / Agriculture</option>
                            </select>
                            <i data-lucide="chevron-down" class="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none"></i>
                        </div>
                    </div>
                    <div>
                        <label class="block text-xs text-slate-400 uppercase tracking-wider mb-2 font-medium">Action</label>
                        <a href="#properties" class="w-full bg-gold-500 hover:bg-gold-400 text-slate-950 font-semibold py-3 px-6 rounded-xl text-sm flex items-center justify-center gap-2 transition-all">
                            <i data-lucide="search" class="w-4 h-4"></i> Explore Properties
                        </a>
                    </div>
                </div>
            </div>

            <!-- Quick Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 text-center">
                <div class="p-4 rounded-xl glass-card">
                    <h3 class="text-2xl sm:text-3xl font-serif font-bold text-gold-400">250+</h3>
                    <p class="text-xs text-slate-400 uppercase mt-1">Gunthas Available</p>
                </div>
                <div class="p-4 rounded-xl glass-card">
                    <h3 class="text-2xl sm:text-3xl font-serif font-bold text-gold-400">100%</h3>
                    <p class="text-xs text-slate-400 uppercase mt-1">Clear Title Verified</p>
                </div>
                <div class="p-4 rounded-xl glass-card">
                    <h3 class="text-2xl sm:text-3xl font-serif font-bold text-gold-400">4-8 Min</h3>
                    <p class="text-xs text-slate-400 uppercase mt-1">Beach & Jetty Access</p>
                </div>
                <div class="p-4 rounded-xl glass-card">
                    <h3 class="text-2xl sm:text-3xl font-serif font-bold text-gold-400">15+ Yrs</h3>
                    <p class="text-xs text-slate-400 uppercase mt-1">Trust in Kihim</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ================= WHAT WE DO (SERVICES) ================= -->
    <section id="services" class="py-24 bg-slate-900/50 relative border-t border-b border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-16">
                <span class="text-gold-400 text-xs font-semibold uppercase tracking-widest">Our Expertise</span>
                <h2 class="text-3xl sm:text-4xl font-serif font-bold text-white mt-2">What We Do</h2>
                <p class="text-slate-400 text-sm mt-3">Simplifying the journey of buying, selling, and developing prime coastal land.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Service 1 -->
                <div class="glass-card rounded-2xl p-8 hover:border-gold-500/50 transition-all duration-300 group">
                    <div class="text-4xl font-serif font-bold text-gold-500/30 group-hover:text-gold-400 transition-colors mb-6">01</div>
                    <div class="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 transition-transform">
                        <i data-lucide="map-pin" class="w-6 h-6"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3">Property Sales</h3>
                    <p class="text-slate-400 text-sm leading-relaxed">
                        Find your dream plot with Plot The Link – our expert team guides you through verified legal documentation and smooth land transfers.
                    </p>
                </div>

                <!-- Service 2 -->
                <div class="glass-card rounded-2xl p-8 hover:border-gold-500/50 transition-all duration-300 group">
                    <div class="text-4xl font-serif font-bold text-gold-500/30 group-hover:text-gold-400 transition-colors mb-6">02</div>
                    <div class="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 transition-transform">
                        <i data-lucide="key" class="w-6 h-6"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3">Property Rentals</h3>
                    <p class="text-slate-400 text-sm leading-relaxed">
                        Explore curated luxury beach estates and estate land rentals tailored for custom luxury setups and long-term retreats.
                    </p>
                </div>

                <!-- Service 3 -->
                <div class="glass-card rounded-2xl p-8 hover:border-gold-500/50 transition-all duration-300 group">
                    <div class="text-4xl font-serif font-bold text-gold-500/30 group-hover:text-gold-400 transition-colors mb-6">03</div>
                    <div class="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 transition-transform">
                        <i data-lucide="shield-check" class="w-6 h-6"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3">Property Management</h3>
                    <p class="text-slate-400 text-sm leading-relaxed">
                        Trust Lux Land Developers to manage boundary fencing, plantation upkeep, tree care, and security to maximize plot value.
                    </p>
                </div>

                <!-- Service 4 -->
                <div class="glass-card rounded-2xl p-8 hover:border-gold-500/50 transition-all duration-300 group">
                    <div class="text-4xl font-serif font-bold text-gold-500/30 group-hover:text-gold-400 transition-colors mb-6">04</div>
                    <div class="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 transition-transform">
                        <i data-lucide="trending-up" class="w-6 h-6"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3">Lucrative Investments</h3>
                    <p class="text-slate-400 text-sm leading-relaxed">
                        Capitalize on fast-growing Alibaug connectivity (Mandwa Jetty, MTHL Trans-Harbour Bridge) for explosive real estate ROI.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- ================= FEATURED PROPERTIES ================= -->
    <section id="properties" class="py-24 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div>
                    <span class="text-gold-400 text-xs font-semibold uppercase tracking-widest">Exclusive Listings</span>
                    <h2 class="text-3xl sm:text-4xl font-serif font-bold text-white mt-2">Featured Land Parcels</h2>
                    <p class="text-slate-400 text-sm mt-2 max-w-xl">
                        Hand-picked top-notch properties guaranteed to meet your resort, villa, or investment requirements.
                    </p>
                </div>
                <!-- Interactive Count Indicator -->
                <div class="mt-4 md:mt-0 text-slate-400 text-sm">
                    Showing <span class="text-gold-400 font-bold" x-text="filteredPlots.length"></span> of <span x-text="plots.length"></span> properties
                </div>
            </div>

            <!-- Plot Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <template x-for="plot in filteredPlots" :key="plot.id">
                    <div class="glass-card rounded-2xl overflow-hidden hover:border-gold-500/40 transition-all duration-300 flex flex-col group">
                        <!-- Card Image Header -->
                        <div class="relative h-60 overflow-hidden bg-slate-900">
                            <img :src="plot.image" :alt="plot.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                            
                            <!-- Badges -->
                            <div class="absolute top-4 left-4 flex gap-2">
                                <span class="bg-slate-950/80 backdrop-blur-md text-gold-400 text-xs font-semibold px-3 py-1 rounded-full border border-gold-500/30" x-text="plot.zone"></span>
                            </div>
                            <div class="absolute bottom-4 right-4">
                                <span class="bg-gold-500 text-slate-950 font-bold text-xs px-3 py-1 rounded-full shadow-lg" x-text="plot.rate"></span>
                            </div>
                        </div>

                        <!-- Card Body -->
                        <div class="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <div class="text-xs text-gold-400 font-medium tracking-wide uppercase mb-1" x-text="plot.location"></div>
                                <h3 class="text-xl font-serif font-bold text-white mb-3 group-hover:text-gold-400 transition-colors" x-text="plot.title"></h3>
                                
                                <div class="space-y-2 text-xs text-slate-300 mb-6">
                                    <div class="flex items-center gap-2">
                                        <i data-lucide="layers" class="w-4 h-4 text-gold-400 shrink-0"></i>
                                        <span><strong>Area:</strong> <span x-text="plot.area"></span></span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <i data-lucide="file-text" class="w-4 h-4 text-gold-400 shrink-0"></i>
                                        <span><strong>FSI:</strong> <span x-text="plot.fsi"></span></span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <i data-lucide="compass" class="w-4 h-4 text-gold-400 shrink-0"></i>
                                        <span><strong>Highlights:</strong> <span x-text="plot.highlights"></span></span>
                                    </div>
                                </div>
                            </div>

                            <!-- Buttons -->
                            <div class="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                                <button @click="selectedPlot = plot; detailModalOpen = true" class="flex-1 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 py-2.5 rounded-xl text-xs font-medium text-center transition-all">
                                    View Details
                                </button>
                                <a href="#contact" @click="bookingPlotTitle = plot.title" class="flex-1 bg-gold-500 hover:bg-gold-400 text-slate-950 py-2.5 rounded-xl text-xs font-bold text-center transition-all">
                                    Enquire Now
                                </a>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </section>

    <!-- ================= DETAIL MODAL ================= -->
    <div x-show="detailModalOpen" x-cloak class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <div @click.outside="detailModalOpen = false" class="glass-card max-w-2xl w-full rounded-2xl overflow-hidden border border-gold-500/30 my-8">
            <template x-if="selectedPlot">
                <div>
                    <div class="relative h-72">
                        <img :src="selectedPlot.image" :alt="selectedPlot.title" class="w-full h-full object-cover">
                        <button @click="detailModalOpen = false" class="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/70 text-white flex items-center justify-center hover:bg-gold-500 hover:text-slate-950 transition-colors">
                            <i data-lucide="x" class="w-5 h-5"></i>
                        </button>
                    </div>
                    <div class="p-6 sm:p-8 space-y-4">
                        <div class="flex items-center justify-between">
                            <span class="text-xs uppercase tracking-widest text-gold-400 font-bold" x-text="selectedPlot.location"></span>
                            <span class="bg-gold-500/20 text-gold-400 text-xs px-3 py-1 rounded-full font-semibold border border-gold-500/30" x-text="selectedPlot.zone"></span>
                        </div>
                        <h3 class="text-2xl font-serif font-bold text-white" x-text="selectedPlot.title"></h3>
                        <p class="text-2xl font-bold text-gold-400" x-text="selectedPlot.rate"></p>
                        
                        <div class="grid grid-cols-2 gap-4 py-4 border-t border-b border-slate-800 text-sm">
                            <div>
                                <span class="text-slate-400 block text-xs">Total Guntha Area</span>
                                <span class="text-white font-semibold" x-text="selectedPlot.area"></span>
                            </div>
                            <div>
                                <span class="text-slate-400 block text-xs">FSI & Permissible Build</span>
                                <span class="text-white font-semibold" x-text="selectedPlot.fsi"></span>
                            </div>
                            <div>
                                <span class="text-slate-400 block text-xs">Road / Approach Access</span>
                                <span class="text-white font-semibold" x-text="selectedPlot.access"></span>
                            </div>
                            <div>
                                <span class="text-slate-400 block text-xs">Trees & Extras</span>
                                <span class="text-white font-semibold" x-text="selectedPlot.extras"></span>
                            </div>
                        </div>

                        <div class="space-y-2">
                            <h4 class="text-xs uppercase text-slate-400 tracking-wider font-semibold">Key Highlights</h4>
                            <p class="text-slate-300 text-sm" x-text="selectedPlot.highlights"></p>
                        </div>

                        <div class="pt-4 flex gap-4">
                            <a href="#contact" @click="detailModalOpen = false; bookingPlotTitle = selectedPlot.title" class="w-full bg-gold-500 hover:bg-gold-400 text-slate-950 py-3 rounded-xl font-bold text-center text-sm transition-all">
                                Schedule Site Visit For This Plot
                            </a>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>

    <!-- ================= TESTIMONIALS ================= -->
    <section id="testimonials" class="py-24 bg-slate-900/40 relative border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-16">
                <span class="text-gold-400 text-xs font-semibold uppercase tracking-widest">Client Satisfaction</span>
                <h2 class="text-3xl sm:text-4xl font-serif font-bold text-white mt-2">What Our Clients Say</h2>
                <p class="text-slate-400 text-sm mt-2">Discover testimonials from clients who found their dream properties with Lux Land Developers.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <!-- Testimonial 1 -->
                <div class="glass-card p-8 rounded-2xl relative border-gold-500/20">
                    <div class="flex text-gold-400 mb-4">
                        <i data-lucide="star" class="w-5 h-5 fill-gold-400"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-gold-400"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-gold-400"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-gold-400"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-gold-400"></i>
                    </div>
                    <p class="text-slate-300 text-sm italic leading-relaxed mb-6">
                        “I truly feel there is no one as good as LUX developers. Their designs are so classy and unique. I got my estate land designed and acquired through them and I'm totally satisfied by their work.”
                    </p>
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center font-bold">UM</div>
                        <div>
                            <h4 class="text-white font-semibold text-sm">Ursha Muttalib</h4>
                            <p class="text-slate-400 text-xs">Villa Owner, Saswane</p>
                        </div>
                    </div>
                </div>

                <!-- Testimonial 2 -->
                <div class="glass-card p-8 rounded-2xl relative border-gold-500/20">
                    <div class="flex text-gold-400 mb-4">
                        <i data-lucide="star" class="w-5 h-5 fill-gold-400"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-gold-400"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-gold-400"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-gold-400"></i>
                        <i data-lucide="star" class="w-5 h-5 fill-gold-400"></i>
                    </div>
                    <p class="text-slate-300 text-sm italic leading-relaxed mb-6">
                        “They are really commendable at their work. The elegance in their coastal land developments with such luxurious look is amazing. Got my Zirad plot through them and it was superb.”
                    </p>
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center font-bold">NJ</div>
                        <div>
                            <h4 class="text-white font-semibold text-sm">Nasreen Jahan</h4>
                            <p class="text-slate-400 text-xs">Investor, Zirad Alibaug</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================= ABOUT US ================= -->
    <section id="about" class="py-24 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="space-y-6">
                    <span class="text-gold-400 text-xs font-semibold uppercase tracking-widest">About Lux Land Developers</span>
                    <h2 class="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
                        Shaping Landmarks, Elevating Lifestyles
                    </h2>
                    <p class="text-slate-300 text-sm leading-relaxed">
                        At Lux Land Developers, we believe that every piece of land holds the potential to become a timeless masterpiece. Founded with a vision to redefine real estate standards, we are committed to delivering premium plots, luxury villas, and bespoke developments that seamlessly blend elegance, sustainability, and value.
                    </p>
                    <p class="text-slate-400 text-sm leading-relaxed">
                        Based in the serene coastal town of Kihim, Maharashtra, Lux Land Developers is more than just a real estate company — we are curators of lifestyles. Our passion lies in transforming landscapes into thriving communities that offer not just a home, but an elevated living experience.
                    </p>
                    <div class="pt-4 flex flex-wrap gap-6 text-sm font-semibold text-white">
                        <div class="flex items-center gap-2">
                            <i data-lucide="check-circle-2" class="w-5 h-5 text-gold-400"></i> Clear Title Verified
                        </div>
                        <div class="flex items-center gap-2">
                            <i data-lucide="check-circle-2" class="w-5 h-5 text-gold-400"></i> Eco-Conscious Development
                        </div>
                        <div class="flex items-center gap-2">
                            <i data-lucide="check-circle-2" class="w-5 h-5 text-gold-400"></i> High ROI Locations
                        </div>
                    </div>
                </div>

                <!-- Modern Graphic Card -->
                <div class="relative">
                    <div class="glass-card rounded-3xl p-8 border-gold-500/30 relative z-10 space-y-6">
                        <div class="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-400">
                            <i data-lucide="building-2" class="w-8 h-8"></i>
                        </div>
                        <h3 class="text-2xl font-serif font-bold text-white">Connecting People with Perfect Homes is Our Passion.</h3>
                        <p class="text-slate-400 text-sm leading-relaxed">
                            With a genuine passion for helping people find their dream homes, we are dedicated to connecting buyers and sellers in the real estate market. Trust us to make your home buying experience seamless and satisfying.
                        </p>
                        <div class="pt-2">
                            <a href="#contact" class="inline-flex items-center gap-2 text-gold-400 font-semibold hover:gap-3 transition-all text-sm">
                                Schedule a Consultation <i data-lucide="arrow-right" class="w-4 h-4"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================= CONTACT & APPOINTMENT FORM ================= -->
    <section id="contact" class="py-24 bg-slate-900/60 border-t border-slate-800 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Info Column -->
                <div class="space-y-6">
                    <span class="text-gold-400 text-xs font-semibold uppercase tracking-widest">Get In Touch</span>
                    <h2 class="text-3xl sm:text-4xl font-serif font-bold text-white">Schedule an Appointment</h2>
                    <p class="text-slate-400 text-sm leading-relaxed">
                        Interested in Saswane, Zirad, Mapgaon, or Kihim plots? Fill out the form or reach out directly to schedule an exclusive on-site tour.
                    </p>

                    <div class="space-y-4 pt-4">
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 shrink-0">
                                <i data-lucide="map-pin" class="w-5 h-5"></i>
                            </div>
                            <div>
                                <h4 class="text-white font-semibold text-sm">Headquarters</h4>
                                <p class="text-slate-400 text-sm">Kihim Beach Road, Alibaug, Maharashtra - 402201</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 shrink-0">
                                <i data-lucide="phone" class="w-5 h-5"></i>
                            </div>
                            <div>
                                <h4 class="text-white font-semibold text-sm">Contact Phone</h4>
                                <p class="text-slate-400 text-sm">+91 98200 12345 / +91 98200 67890</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 shrink-0">
                                <i data-lucide="mail" class="w-5 h-5"></i>
                            </div>
                            <div>
                                <h4 class="text-white font-semibold text-sm">Email Address</h4>
                                <p class="text-slate-400 text-sm">info@luxlanddevelopers.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Form Column -->
                <div class="glass-card rounded-2xl p-6 sm:p-8 border-gold-500/20">
                    <form @submit.prevent="submitEnquiry()" class="space-y-5">
                        <div>
                            <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Selected Interest</label>
                            <input type="text" x-model="bookingPlotTitle" placeholder="General Inquiry / Specific Plot" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-gold-500">
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Your Name</label>
                            <input type="text" x-model="contactForm.name" required placeholder="e.g. Rahul Sharma" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-gold-500">
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Email Address</label>
                                <input type="email" x-model="contactForm.email" required placeholder="name@example.com" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-gold-500">
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Contact Number</label>
                                <input type="tel" x-model="contactForm.phone" required placeholder="+91 9876543210" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-gold-500">
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Message / Preferred Date</label>
                            <textarea x-model="contactForm.message" rows="3" placeholder="Tell us when you'd like to visit the land parcel..." class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-gold-500"></textarea>
                        </div>

                        <button type="submit" class="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-slate-950 font-bold py-3.5 rounded-xl shadow-lg transition-all text-sm">
                            Submit Appointment Request
                        </button>
                    </form>

                    <!-- Success Alert -->
                    <div x-show="formSubmitted" x-cloak class="mt-4 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-3">
                        <i data-lucide="check-circle" class="w-5 h-5 shrink-0"></i>
                        <span>Thank you! Your appointment request has been logged into our dynamic backend. Our representative will call you shortly.</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================= FOOTER ================= -->
    <footer class="bg-slate-950 text-slate-400 text-xs py-12 border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
                <span class="text-white font-serif text-lg font-bold">Plot The Link</span>
                <p class="text-slate-500 text-xs mt-1">Lux Land Developers © 2026 luxlanddevelopers.com. All Rights Reserved.</p>
            </div>
            <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-slate-400">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Instagram" class="text-slate-400 hover:text-gold-400 transition-colors">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                        <rect x="3" y="3" width="18" height="18" rx="5"></rect>
                        <circle cx="12" cy="12" r="4"></circle>
                        <circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none"></circle>
                    </svg>
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit YouTube" class="text-slate-400 hover:text-gold-400 transition-colors">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                        <path d="M22 12s0-3.5-.45-5.15a2.8 2.8 0 0 0-1.97-1.97C17.93 4.4 12 4.4 12 4.4s-5.93 0-7.58.48a2.8 2.8 0 0 0-1.97 1.97C2 8.5 2 12 2 12s0 3.5.45 5.15a2.8 2.8 0 0 0 1.97 1.97c1.65.48 7.58.48 7.58.48s5.93 0 7.58-.48a2.8 2.8 0 0 0 1.97-1.97C22 15.5 22 12 22 12Z"></path>
                        <path d="m10 15 5-3-5-3z" fill="currentColor"></path>
                    </svg>
                </a>
            </div>
        </div>
    </footer>

    <!-- ================= REACTIVE SCRIPT & DATA LOGIC ================= -->
</div>`;

export default markup;

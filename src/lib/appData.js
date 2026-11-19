// Alpine.js state + actions for the Plot The Link site (ported 1:1 from the HTML).
function appData() {
    return {
        mobileMenuOpen: false,
        detailModalOpen: false,
        filterLocation: 'All',
        filterZone: 'All',
        bookingPlotTitle: '',
        selectedPlot: null,
        formSubmitted: false,

        // Initial Real Estate Data from prompt details
        plots: [
            {
                id: 1,
                title: 'Saswane 18.8 Gunthe Land Parcel',
                location: 'Saswane',
                zone: 'Plantation / Agri',
                area: '20.3 Guntha – Sasawane',
                rate: '₹28 Lakhs / Guntha',
                fsi: '0.20 basic with premium 0.8',
                highlights: 'Lake view, plantation land',
                access: 'Concrete road touch',
                extras: 'Mango & coconut plants (8 min from Mandwa Jetty)',
                image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
            },
            {
                id: 2,
                title: 'Zirad 20 Gunthe Land Parcel',
                location: 'Zirad',
                zone: 'Gaothan',
                area: '20 Guntha – Zirad, Alibaug',
                rate: '₹22 Lakhs / Guntha',
                fsi: '1.1 Basic (Premium 2.24)',
                highlights: 'Lake view, panoramic mountain view',
                access: '9-metre wide road access',
                extras: 'Gaothan plots with high FSI potential',
                image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80'
            },
            {
                id: 3,
                title: 'Mapgaon 40 Gunthe Land Parcel',
                location: 'Mapgaon',
                zone: 'Gaothan',
                area: '40 Guntha – Mapgaon',
                rate: '₹16 Lakhs / Guntha',
                fsi: '1.1 Basic (Premium 2.4)',
                highlights: '1.5 Km From Kihim Beach',
                access: 'Tar Road Touch',
                extras: 'Boundary framed with mature Mango trees',
                image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
            },
            {
                id: 4,
                title: 'Kihim 48.5 Gunthe Land Parcel',
                location: 'Kihim',
                zone: 'Green 1',
                area: '48.5 Guntha – Kihim',
                rate: '₹35 Lakhs / Guntha',
                fsi: '0.2 Basic (Premium 0.8)',
                highlights: 'Near Beach (4 minutes walk to sea shore)',
                access: 'Main Kihim Beach Road Access',
                extras: 'Lush green boundary wall & privacy fencing',
                image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
            },
            {
                id: 5,
                title: 'Nandaipada 29 Gunthe Land Parcel',
                location: 'Nandaipada',
                zone: 'Gaothan',
                area: '29 Guntha – Nandaipada Zirad',
                rate: '₹22 Lakhs / Guntha',
                fsi: '1.1 Basic (Premium 2.4)',
                highlights: 'Tar Road Touch prime entrance',
                access: 'Direct Tar Road Touch',
                extras: 'Random luxury shade trees',
                image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80'
            },
            {
                id: 6,
                title: 'Zirad 108 Gunthe Land Parcel',
                location: 'Zirad',
                zone: 'Gaothan',
                area: '108 Guntha – Zirad',
                rate: '₹22 Lakhs / Guntha',
                fsi: '1.1 Basic (Premium 2.4)',
                highlights: '9-meter wide access road',
                access: 'Heavy vehicle wide concrete road',
                extras: 'Mango trees with complete chainlink fencing',
                image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
            }
        ],

        contactForm: { name: '', email: '', phone: '', message: '' },

        get filteredPlots() {
            return this.plots.filter(plot => {
                const matchLoc = this.filterLocation === 'All' || plot.location.toLowerCase().includes(this.filterLocation.toLowerCase());
                const matchZone = this.filterZone === 'All' || plot.zone.toLowerCase().includes(this.filterZone.toLowerCase());
                return matchLoc && matchZone;
            });
        },

        submitEnquiry() {
            if (!this.contactForm.name || !this.contactForm.phone) return;
            this.formSubmitted = true;
            this.contactForm = { name: '', email: '', phone: '', message: '' };
            setTimeout(() => { this.formSubmitted = false; }, 6000);
        }
    }
}

export default appData;

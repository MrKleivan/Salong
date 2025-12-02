const HeaderLinks = [
    {
        name: "Home",
        linkName: "Home",
        label: "Hjem",
    },
    {
        name: "About",
        linkName: "Home",
        label: "Om Oss",
    },
    {
        name: "Prices",
        linkName: "Home",
        label: "Priser",
    }
];
const FrontPageLinks = [
    {
        name: "Hair",
        linkName: "Hair",
        label: "Hårstell",
        description: "Ta vare på ditt hå, gi det en god look;)",
        underLinks: [
            {
                name: "Home",
                linkName: "Home",
                label: "Hjem",
                gallery: [],
            }  
        ],
        pictures: [
            {
                url: "/vipper.jpg",
                label: "Hjem",
            },
            {
                url: "/vipper.jpg",
                label: "Hjem",
            }
        ],
        index: 0,
        isActive: false,
    },
    {
        name: "Nails",
        linkName: "Nails",
        label: "Negler",
        description: "Klassiske, hybrid, mer volum, wet look, wispy look vippeløft",
        underLinks: [
            {
                name: "Home",
                linkName: "Home",
                label: "Hjem",
                gallery: [],
            }
        ],
        pictures: [
            {
                url: "/vipper.jpg",
                label: "Hjem",
            }
        ],
        index: 0,
        isActive: false,
    },
    {
        name: "Lashes",
        linkName: "/",
        label: "Vipper",
        description: "La vippene dine skinne!",
        underLinks: [
            {
                name: "Classic",
                linkName: "ClassicLashes",
                label: "Klassisk",
                gallery: ["src/Images/Lashes/Classic.jpg"],
            },
            {
                name: "Hybrid",
                linkName: "HybridLashes",
                label: "Hybrid",
                gallery: ["src/Images/Lashes/Hybrid.jpg"],
            },
            {
                name: "Volume",
                linkName: "VolumeLashes",
                label: "Volume",
                gallery: ["src/Images/Lashes/Volume.jpg"],
            },
            {
                name: "Wet look",
                linkName: "WetLookLashes",
                label: "Wet look",
                gallery: [""],
            },
            {
                name: "Wispy look",
                linkName: "WispyLookLashes",
                label: "Wispy look",
                gallery: ["src/Images/Lashes/Wispy.jpg"],
            },
            {
                name: "Lashes lift",
                linkName: "LashesLift",
                label: "LashesLift",
                gallery: ["src/Images/Lashes/LashesLift.jpg"],
            }
        ],
        pictures: [
            {
                url: "src/Images/Lashes/Classic.jpg",
                label: "Vipper",
            },
            {
                url: "src/Images/Lashes/Hybrid.jpg",
                label: "Hybrid",
            },
            {
                url: "src/Images/Lashes/LashesLift.jpg",
                label: "LashesLift",
            },
            {
                url: "src/Images/Lashes/Volume.jpg",
                label: "Volume",
            },
            {
                url: "src/Images/Lashes/Wispy.jpg",
                label: "Wispy",
            }
        ],
        index: 0,
        isActive: true,
    },
    {
        name: "Brow",
        linkName: "Brow",
        label: "Øyebryn",
        description: "Klassiske, hybrid, mer volum, wet look, wispy look vippeløft",
        underLinks: [
            {
                name: "Home",
                linkName: "Home",
                label: "Hjem",
                gallery: [],
            }
        ],
        pictures: [
            {
                url: "/vipper.jpg",
                label: "Hjem",
            }
        ],
        index: 0,
        isActive: false,
    }
];

export {HeaderLinks, FrontPageLinks};
    
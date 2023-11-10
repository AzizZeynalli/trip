import heartIcon from '../assets/label-icons/heart.svg'
import sparklesIcons from '../assets/label-icons/sparkles.svg'
import trending1 from '../assets/trending/trending1.png'
import trending2 from '../assets/trending/trending2.png'
import trending3 from '../assets/trending/trending3.png'
import new1 from '../assets/new/new1.png'
import new2 from '../assets/new/new2.png'
import new3 from '../assets/new/new3.png'
import icon1 from '../assets/why-us/icon1.svg'
import icon2 from '../assets/why-us/icon2.svg'
import icon3 from '../assets/why-us/icon3.svg'

export const trendingItems = [
    {
        id: 1,
        label: {
            icon: sparklesIcons,
            title: 'Loved by over 40s',
        },
        country: 'Spain',
        title: 'Magical Madrid To Marrakech By Train',
        days: 12,
        price: 1299.00,
        photo: trending1
    },
    {
        id: 2,
        label: {
            icon: heartIcon,
            title: 'Loved by couples',
        },
        country: 'Italy',
        title: 'Spectacular Sicily',
        days: 5,
        price: 250.00,
        photo: trending2
    },
    {
        id: 3,
        label: null,
        country: 'Turkey',
        title: 'International Istanbul',
        days: 7,
        price: 400.00,
        photo: trending3
    }
]

export const newItems = [
    {
        id: 1,
        country: 'Spain',
        title: 'Magical Madrid To Marrakech By Train',
        days: 12,
        price: 1299.00,
        photo: new1
    },
    {
        id: 2,
        country: 'Italy',
        title: 'Spectacular Sicily',
        days: 5,
        price: 250.00,
        photo: new2
    },
    {
        id: 3,
        country: 'Turkey',
        title: 'International Istanbul',
        days: 7,
        price: 400.00,
        photo: new3
    }
]    

export const whyUs = [
    {
        id: 1,
        icon: icon1,
        title: 'More than 149 travel titles currently in print',
    },
    {
        id: 2,
        icon: icon2,
        title: 'Supporting millions of travellers since 1982',
    },
    {
        id: 3,
        icon: icon3,
        title: 'Our outstanding customer satisfaction',
    }
]

export const destinations = {
    "Europe": [
        "Azores",
        "Croatia",
        "Georgia",
        "Germany",
        "Greece",
        "Iceland",
        "Ireland",
        "Italy",
        "Portugal",
        "Scotland",
        "Spain",
        "United Kingdom"
    ],
    "Asia": [
        "Combodia",
        "China",
        "India",
        "Indonesia",
        "Japan",
        "Jordan",
        "South Korea",
        "Sri Lanka",
        "Taiwan",
        "Thailand",
        "Turkey",
        "Vietnam",
    ],
    "Africa": [
        "Egypt",
        "Ethiopia",
        "Kenya",
        "Ghana",
        "Madagascar",
        "Mauritius",
        "Morooco",
        "Namibia",
        "Rwanda",
        "South Africa",
        "Uganda",
        "Tanazania & Zanzibar",
    ],
    "C/America": [
        "Belize",
        "Costa Rica",
        "Cuba",
        "Dominican Republic",
        "Guatemala",
        "Honduras",
        "Jamaica",
        "Nicaragua",
        "Mexico",
        "Panama",
        "Puerto Rico",
        "Trinidad and Tobago",
    ],
    "S/America": [
        "Argentina",
        "Bolivia",
        "Brazil",
        "Chile",
        "Colombia",
        "Ecuador",
        "Peru",
    ],
}

export const footerLinks = {
    "Menu": [
        "Destinations",
        "Private trips",
        "Blog",
        "About us",
    ],
    "Support": [
        "Contact us",
        "FAQ",
        "Privacy Policy",
        "Terms of Use",
    ],
    "Follow us": [
        "Instagram",
        "Facebook",
        "Linkedin",
        "Tiktok",
    ],
}

export const contacts = {
    "Commercial Contacts": [
        {
            label: "To advertise on Tourista",
            email: "advertise@tourista.com",
        },
        {
            label: "To become an affiliate partner",
            email: "affiliate@tourista.com",
        },
        {
            label: "To contact the hotels team",
            email: "hotels@tourista.com",
        },
        {
            label: "Send your request to republish Tourista content",
            email: "contentlicensing@tourista.com",
        },
        {
            label: "To contact the experiences team",
            email: "experiences@tourista.com",
        },
    ],
    "Content Contact": [{
        label: "To report an issue to our content teams please contact",
        email: "corrections@tourista.com",
    }],
    "Press Contact": [{
        label: "If you’re a journalist / influencer with a press enquiry about Tourista, please contact our press office",
        email: "pr@tourista.com",
    }],
    "Partnership Contact": [{
        label: "For partnership opportunities:",
        email: "partnerships@tourista.com",
    }],
}
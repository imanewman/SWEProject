class Categories {
    static names = [
        'Hikes',
        'Concerts',
        'Festivals',
        'Food',
        'Open Mics',
        'Career Fairs',
        'Conventions',
        'Sports',
        'Trade Shows',
        'Charity Events',
        'Farmers Markets',
        'Speeches and Discussions'
    ];

    static tagToName = {
        'Farmers Market': 'Farmers Markets',
        'Hiking': 'Hikes',
        'Festival': 'Festivals',
        'Food': 'Food',
        'Open Mic': 'Open Mics',
        'Career Fair': 'Career Fairs',
        'Trade Show': 'Trade Shows',
        'Sports': 'Sports',
        'Charity': 'Charity Events',
        'Convention': 'Conventions',
        'Speech': 'Speeches and Discussions',
        'Concerts': 'Concerts'
    };

    static nameToTag = {
        'Farmers Markets': 'Farmers Market',
        'Hikes': 'Hiking',
        'Festivals': 'Festival',
        'Food': 'Food',
        'Open Mics': 'Open Mic',
        'Career Fairs': 'Career Fair',
        'Trade Shows': 'Trade Show',
        'Sports': 'Sports',
        'Charity Events': 'Charity',
        'Conventions': 'Convention',
        'Speeches and Discussions': 'Speech',
        'Concerts': 'Concerts'
    };

    static icons = {
        'Farmers Market': 'fas fa-carrot orange',
        'Hiking': 'fas fa-hiking neongreen',
        'Festival': 'fas fa-guitar gold',
        'Food': 'fas fa-utensils limegreen',
        'Open Mic': 'fas fa-microphone purple',
        'Career Fair': 'fas fa-user-tie deepblue',
        'Trade Show': 'fas fa-store red',
        'Sports': 'fas fa-futbol bloodorange',
        'Charity': 'fas fa-hand-holding-heart pink',
        'Convention': 'fas fa-users rose',
        'Speech': 'fas fa-comments green'
    };
}

export default Categories;
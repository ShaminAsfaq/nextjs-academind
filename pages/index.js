import MeetupList from "../components/meetups/MeetupList";

const dummy = [
    {
        id: 'm1',
        title: 'First Meetup',
        image: 'https://cmstravelmedia.webjet.com.au/wp-uploads/2018/09/Florence_Italy.jpg',
        address: 'Florence, Italy.',
        description: 'Iconic Dome of Florence'
    },
    {
        id: 'm2',
        title: 'Second Meetup',
        image: 'https://cmstravelmedia.webjet.com.au/wp-uploads/2018/09/Florence_Italy.jpg',
        address: 'Florence, Italy.',
        description: 'Iconic Dome of Florence'
    },
    {
        id: 'm3',
        title: 'Third Meetup',
        image: 'https://cmstravelmedia.webjet.com.au/wp-uploads/2018/09/Florence_Italy.jpg',
        address: 'Florence, Italy.',
        description: 'Iconic Dome of Florence'
    }
];

const HomePage = () => {
    return (
        <MeetupList meetups={dummy} />
    );
}

export {
    HomePage as default
}
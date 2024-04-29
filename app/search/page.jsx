"use client";
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { FaCommentDots } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
// import icons for rating, price, location, language
import { FaStar } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaLanguage } from 'react-icons/fa';
import io from "socket.io-client";
import GoogleTranslate from '../components/google-translator';



const SearchResults = () => {
    const searchParams = useSearchParams();
    const location = searchParams.get('location');
    const language = searchParams.get('language');
    const rating = searchParams.get('rating');
    const sliderValue = searchParams.get('price');
    const [uniqueGuidesByFilter, setUniqueGuidesByFilter] = useState([]);
    const [tourGuidesData, setTourGuidesData] = useState([]);

    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const [address, setAddress] = useState("");
    const [guideLocation, setGuideLocation] = useState("");
    const [modal, setModal] = useState(false);



    useEffect(() => {
        fetch('http://localhost:3001/tourguides')
            .then(response => response.json())
            .then(data => {
                setTourGuidesData(data.tourguides);

                const filteredGuides = [];

                if (location !== "location") {
                    filteredGuides.push(...data.tourguides.filter(guide => guide.location === location));
                }

                if (rating !== "rating") {
                    filteredGuides.push(...data.tourguides.filter(guide => guide.rating === parseInt(rating)));
                }

                if (language !== "language") {
                    filteredGuides.push(...data.tourguides.filter(guide => guide.language === language));
                }

                if (sliderValue !== 0) {
                    filteredGuides.push(...data.tourguides.filter(guide => guide.price <= parseInt(sliderValue)));
                }

                // remove duplicates
                const uniqueGuides = Array.from(new Set(filteredGuides.map(a => a.id)))
                    .map(id => {
                        return filteredGuides.find(a => a.id === id)
                    });

                console.log(uniqueGuides);
                setUniqueGuidesByFilter(uniqueGuides);
            });
    }, [location, language, rating, sliderValue]);

    useEffect(() => {
        // Get the current location
        navigator.geolocation.getCurrentPosition((position) => {
            setLongitude(position.coords.longitude);
            setLatitude(position.coords.latitude);
            getCurrentAddress(position.coords.latitude, position.coords.longitude);
        });

        // Connect to the WebSocket server
        const socket = io("http://localhost:3001");

        // Listen for guide location updates
        socket.on("location/guide", (data) => {
            setGuideLocation(data);
        });

        // Share your location with the guide
        socket.emit("locationUpdate", {
            role: "traveler",
            latitude,
            longitude
        });
    }, [latitude, longitude]);

    const getCurrentAddress = async (lat, lng) => {
        const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=f3a6d1c2bee04fdeb6fa30af41dd63eb&q=${lat}%2C+${lng}&pretty=1&no_annotations=1`)
        const data = await response.json()
        setAddress(data.results[0].formatted)
    };


    return (
        <div
            className='flex flex-col items-center gap-4 p-4 bg-white rounded-lg shadow-lg w-full'
        >
            <Navbar />
            <GoogleTranslate />
            <ul
                className='mt-20 grid grid-cols-3 gap-8 py-6 bg-white'
            >
                {
                    uniqueGuidesByFilter.map(guide => (
                        <li
                            key={guide.id}
                            className='flex flex-col items-center gap-2 p-4 bg-white rounded-lg shadow-lg relative'
                        >
                            <Image
                                src={guide.profilePicture}
                                alt={guide.name}
                                width={200}
                                height={200}
                                className='rounded-md py-2'
                            />
                            <h2
                                className='text-2xl font-bold'
                            >
                                {guide.username}
                            </h2>
                            <button
                                className='text-sm flex gap-2 justify-center items-center
                                absolute top-0 right-0 bg-blue-500 text-white rounded-lg px-2 py-1
                                cursor-pointer
                                '
                                onClick={() => {
                                    setModal(true);
                                }
                                }
                            >
                                <FaMapMarkerAlt />
                                Live Location
                            </button>
                            <p
                                className='text-lg flex gap-2 justify-center items-center'
                            >
                                <FaLanguage />
                                {guide.language}
                            </p>
                            <p
                                className='text-lg flex gap-2 justify-center items-center'
                            >
                                <FaStar />
                                {guide.rating}
                            </p>
                            <p
                                className='text-lg flex gap-2 justify-center items-center'
                            >
                                <FaDollarSign />
                                {guide.price}
                            </p>
                            <Link
                                href={{
                                    pathname: '/TravelerProfile',
                                    query: { guideName: guide.username }
                                }}
                                className='flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg'
                            >

                                <FaCommentDots />
                                Contact with {guide.username}

                            </Link>
                        </li>
                    ))
                }
            </ul>

            {/* Modal to show the guide live address and location */}
            {
                modal && (
                    <div
                        className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10 '
                    >
                        <div
                            className='bg-white p-4 rounded-lg shadow-lg'
                        >
                            <h2
                                className='text-2xl font-bold'
                            >
                                Guide Live Location
                            </h2>
                            <iframe
                                width="400"
                                height="250"
                                style={{ border: 0 }}
                                src={`https://maps.google.com/maps?q=${guideLocation.latitude},${guideLocation.longitude}&z=16&output=embed`}
                                allowFullScreen
                            ></iframe>
                            <button
                                onClick={() => setModal(false)}
                                className='px-4 py-2 bg-blue-500 text-white rounded-lg mt-4'
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )
            }


        </div>
    );
};

export default SearchResults;
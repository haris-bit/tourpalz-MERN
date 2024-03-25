import { useRouter } from 'next/navigation';

const SearchResults = () => {
    const router = useRouter();
    const { filteredGuides } = router.query;
    const guides = filteredGuides ? JSON.parse(filteredGuides) : [];

    return (
        <div>
            <h1>Search Results</h1>
            {guides.length > 0 ? (
                guides.map((guide) => (
                    <div key={guide.id}>
                        <h3>{guide.name}</h3>
                        <p>Location: {guide.location}</p>
                        <p>Language: {guide.language}</p>
                        <p>Rating: {guide.rating}</p>
                        <p>Price: ${guide.price}</p>
                    </div>
                ))
            ) : (
                <p>No guides found</p>
            )}
        </div>
    );
};

export default SearchResults;
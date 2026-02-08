import { useState, useEffect } from 'react';

export default function Arena5() {

    const [page, setPage] = useState(1);
    
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState()

    useEffect(() => {
        setPage(null);

        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
            .then(response => response.json())
            .then(data => {
                setPage(data);
            });
    }, [page]);

    return (
        <div>

            
        </div>
    )
}
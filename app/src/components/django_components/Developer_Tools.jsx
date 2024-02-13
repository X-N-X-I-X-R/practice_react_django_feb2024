import React, { useEffect, useState } from 'react'

const Developer_Tools = () => {
    const [repoData, setRepoData] = useState(null);

    useEffect(() => {
        console.log("use effect Developer tools");
        fetch('https://api.github.com/users/X-N-X-I-X-R/repos') // replace with actual GitHub username
            .then(response => response.json())
            .then(data => setRepoData(data));
    }, []);

    return (
        <div>
            {repoData ? (
                repoData.map((repo, index) => (
                    <div key={index}>
                        <h1>{repo.name}</h1>
                        <p>{repo.description}</p>
                        <a href={repo.html_url}>Repo Link</a>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Developer_Tools
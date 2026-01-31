import { useState, useEffect } from 'react';

interface GitHubStats {
    stars: number;
    forks: number;
    followers: number;
    repos: number;
}

export const useGitHubStats = (username: string) => {
    const [stats, setStats] = useState<GitHubStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const userRes = await fetch(`https://api.github.com/users/${username}`);
                const userData = await userRes.json();

                // This is a simplified example. For total stars/forks you'd need to iterate all repos
                // or use a specific API/proxy. For now we use the user data.

                if (userData.public_repos) {
                    setStats({
                        followers: userData.followers,
                        repos: userData.public_repos,
                        stars: 100, // Placeholder as gathering total stars requires more calls
                        forks: 50   // Placeholder
                    });
                }
            } catch (err) {
                setError("Failed to fetch GitHub stats");
            } finally {
                setLoading(false);
            }
        };

        if (username) {
            fetchStats();
        }
    }, [username]);

    return { stats, loading, error };
};

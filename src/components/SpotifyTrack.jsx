import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SpotifyTrack = ({ token }) => {
  const [track, setTrack] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrack = async () => {
      try {
        const { data } = await axios.get(
          'https://api.spotify.com/v1/user/stevenleabo',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTrack(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getTrack();

    return () => {
      setTrack(null);
      setError(null);
      setLoading(true);
    }
  }, [token]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!track) return null;

  return (
    <div>

      <h2>{track.name}</h2>
      <p>
        {track.artists.map((artist) => artist.name).join(', ')} -{' '}
        {track.album.name}
      </p>
    </div>
  );

  };
  
  export default SpotifyTrack;
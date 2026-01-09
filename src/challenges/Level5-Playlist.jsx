// src/challenges/Level5-Playlist.jsx

export default function Level5() {
  const songs = [
    { id: 101, title: "Bohemian Rhapsody", artist: "Queen" },
    { id: 102, title: "Imagine", artist: "John Lennon" },
    { id: 103, title: "Billie Jean", artist: "Michael Jackson" },
    { id: 104, title: "Hotel California", artist: "Eagles" }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Level 5: The DJ</h1>
      
      <h2>Top Hits</h2>
      
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        
        {songs.map((song) => (
          <li key={song.id} style={{ marginBottom: '10px' }}> 
            <strong>{song.title}</strong> by {song.artist}
          </li>
        ))}

      </ul>
    </div>
  );
}
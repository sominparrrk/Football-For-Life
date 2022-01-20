import React, { useEffect, useState } from 'react';
import getClubInfo from '../../lib/api/clubInfo';

const Clubs = ({ currentClub }) => {
  const [club, setClub] = useState([]);
  useEffect(() => {
    if (currentClub.includes('-')) {
      currentClub = currentClub.replace('-', ' ');
    }
    getClubInfo(currentClub).then((club) => setClub(club));
  }, [currentClub]);

  return (
    <div>
      {club[0] && (
        <>
          <p>{club[0].team.name}</p>
          <p>{club[0].venue.name}</p>
        </>
      )}
    </div>
  );
};

export default Clubs;

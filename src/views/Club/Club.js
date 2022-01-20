import React from 'react';
import { useParams } from 'react-router-dom';
import ClubItem from '../../components/Club/ClubItem';

const Club = () => {
  const { code } = useParams();

  return (
    <>
      <ClubItem currentClub={code} />
    </>
  );
};

export default Club;

import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const ExploreContainer = styled.div`
  padding: 2rem;
  background-color: #e0f7fa; 
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #00796b;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #004d40;
  margin-bottom: 2rem;
`;

const SearchBar = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 0.8rem;
  border: 2px solid #b2dfdb;
  border-radius: 4px;
  margin-bottom: 2rem;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #00796b;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const Button = styled.button`
  background-color: #00796b;
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004d40;
  }
`;

const RecentTrips = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const TripCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: calc(33.333% - 1rem);
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;
  aspect-ratio: 3 / 4;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TripImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
`;

const TripContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: 40%;
`;

const TripTitle = styled.h3`
  font-size: 1.5rem;
  color: #00796b;
  margin: 0;
`;

const TripDescription = styled.p`
  font-size: 1rem;
  color: #004d40;
  margin: 0;
`;

const ViewMoreButton = styled(Button)`
  background-color: #004d40;
  margin-top: 1rem;

  &:hover {
    background-color: #00796b;
  }
`;

const ViewLessButton = styled(Button)`
  background-color: #004d40;
  margin-top: 1rem;

  &:hover {
    background-color: #00796b;
  }
`;

const Explore = () => {
  const [showMore, setShowMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const trips = [
    { title: "Iceland Adventure", description: "Exploring glaciers, waterfalls, and geysers in the land of fire and ice.", image: "src/assets/location.jpg" },
    { title: "Paris Getaway", description: "A romantic trip to the city of lights, visiting iconic landmarks and enjoying exquisite cuisine.", image: "src/assets/location.jpg" },
    { title: "Tokyo Experience", description: "Immerse yourself in the vibrant culture of Tokyo, from ancient temples to modern skyscrapers.", image: "src/assets/location.jpg" },
    { title: "Sydney Escapade", description: "Discover the beauty of Sydney, from its stunning harbor to its famous opera house.", image: "src/assets/location.jpg" },
    { title: "New York City Lights", description: "Experience the hustle and bustle of NYC, with its Broadway shows and world-class museums.", image: "src/assets/location.jpg" },
    { title: "Rome Adventure", description: "Explore the historic streets of Rome, with its ancient ruins and delicious Italian food.", image: "src/assets/location.jpg" },
  ];

  const handleViewMore = () => setShowMore(true);
  const handleViewLess = () => setShowMore(false);
  const handleSearchChange = (e) => setSearchQuery(e.target.value.toLowerCase());

  const filteredTrips = trips.filter(trip =>
    trip.title.toLowerCase().includes(searchQuery) ||
    trip.description.toLowerCase().includes(searchQuery)
  );

  return (
    <ExploreContainer>
      <Title>Explore Now</Title>
      <Subtitle>Explore the latest adventures of our community!</Subtitle>
      <SearchBar
        type="text"
        placeholder="Search trips..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ButtonContainer>
        <a href="#Help"><Button >Help</Button></a>
      </ButtonContainer>
      <RecentTrips>
        {filteredTrips.slice(0, showMore ? filteredTrips.length : 3).map((trip, index) => (
          <TripCard key={index}>
            <TripImage src={trip.image} alt={trip.title} />
            <TripContent>
              <TripTitle>{trip.title}</TripTitle>
              <TripDescription>{trip.description}</TripDescription>
            </TripContent>
          </TripCard>
        ))}
      </RecentTrips>
      {showMore ? (
        <ViewLessButton onClick={handleViewLess}>View Less</ViewLessButton>
      ) : (
        <ViewMoreButton onClick={handleViewMore}>View More</ViewMoreButton>
      )}
    </ExploreContainer>
  );
};

export default Explore;

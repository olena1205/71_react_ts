   import type { AnimalCardProps } from "./types";
import { AnimalCardWrapper, AnimalImg, Title, AnimalSpecies } from "./styles";

function AnimalCard({
  animalName,
  animalSpecies,
  animalImg,
  children,
}: AnimalCardProps) {
  return (
    <AnimalCardWrapper>
      {children}
      <Title>{animalName}</Title>
      <AnimalSpecies>{animalSpecies}</AnimalSpecies>
      <AnimalImg src={animalImg} />
    </AnimalCardWrapper>
  );
}

export default AnimalCard;

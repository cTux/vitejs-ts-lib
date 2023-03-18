interface GetRandomBetweenProps {
  min: number;
  max: number;
}

export const getRandomBetween = ({ min, max }: GetRandomBetweenProps): number =>
  ((Math.random() * (max - min + 1)) >> 0) + min;

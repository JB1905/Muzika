import td from 'two-digit';

export const msToTime = (duration: number) => {
  const seconds = Math.round(duration / 1000) % 60;
  const minutes = Math.round(duration / (1000 * 60)) % 60;

  return minutes + ':' + td(seconds);
};

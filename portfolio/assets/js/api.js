
async function fetchProfileData() {
  const url = 'https://raw.githubusercontent.com/ablemosjr/frontEnd-Estudo/portfolio-api/portfolio/data/profile.json';
  const fetching = await fetch(url);
  return await fetching.json();
}
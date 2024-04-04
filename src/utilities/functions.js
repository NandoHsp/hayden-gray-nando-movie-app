function formatReleaseDate(date) {
  const dateObject = new Date(date);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return dateObject.toLocaleDateString('en-US', options);
}
function filterVideos(videoDataArray) {
  return videoDataArray.filter((videoData) => {
    return videoData.site === 'YouTube' && videoData.type === 'Trailer';
  });
}
export { formatReleaseDate, filterVideos };

  
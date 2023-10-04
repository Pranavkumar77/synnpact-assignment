export const formatDate = (timestamp) => {
    if (!timestamp || isNaN(timestamp)) {
      return 'Invalid Date';
    }
  
    const date = new Date(timestamp * 1000); // Convert to milliseconds
    const options = {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZoneName: 'short',
    };
    return date.toLocaleDateString('en-US', options);
};
export const formatDate = (date: any) => {
    if (date == null) return ''; 
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };
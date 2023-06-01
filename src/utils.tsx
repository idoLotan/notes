export function formatDate(date: Date | string): string {
    if (typeof date === 'string') {
      date = new Date(date); // Convert string to Date object
    }
    return date.toString().split("GMT")[0];
  }
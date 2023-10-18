export function capitalizeFirstLetter(
    str: string | undefined
  ): string | undefined {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : undefined;
  }
  
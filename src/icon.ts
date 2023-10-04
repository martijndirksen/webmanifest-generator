export type Icon = { src: string; sizes: string; type: 'image/png'; purpose?: 'maskable' };

export function createIcon(size: number, maskable: boolean = false): Icon {
  if (maskable) {
    return {
      src: `/logo-${size}-maskable.png`,
      sizes: `${size}x${size}`,
      type: 'image/png',
      purpose: 'maskable',
    };
  }

  return {
    src: `/logo-${size}.png`,
    sizes: `${size}x${size}`,
    type: 'image/png',
  };
}

import { IconFactory } from "./factory/icon.factory";

// Simulación de coordenadas
const locations = [
  { type: 'restaurant', x: 10, y: 20 },
  { type: 'shop', x: 15, y: 25 },
  { type: 'hospital', x: 20, y: 30 },
  { type: 'restaurant', x: 25, y: 35 },
  { type: 'shop', x: 30, y: 40 },
];

// Renderizar iconos
locations.forEach(location => {
  const icon = IconFactory.getIcon(location.type);
  icon.render(location.x, location.y);
});

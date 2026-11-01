import {
  FaSnowflake,
  FaBuilding,
  FaWarehouse,
  FaTemperatureLow,
  FaIndustry,
  FaHome,
} from 'react-icons/fa';
import windowAcImage from '../../img/WhatsApp Image 2026-10-10 at 8.17.26 AM.jpeg';
import splitAcImage from '../../img/WhatsApp Image 2026-10-10 at 8.18.13 AM.jpeg';
import inverterAcImage from '../../img/WhatsApp Image 2026-10-10 at 8.19.09 AM.jpeg';
import commercialAcImage from '../../img/WhatsApp Image 2026-10-10 at 8.20.33 AM.jpeg';
import maintenanceImage from '../../img/WhatsApp Image 2026-10-10 at 8.21.54 AM.jpeg';
import dairyCoolingImage from '../../img/WhatsApp Image 2026-10-10 at 8.22.28 AM.jpeg';
import indoorOutdoorImage from '../../img/WhatsApp Image 2026-10-10 at 8.23.00 AM.jpeg';

export const services = [
  {
    icon: FaSnowflake,
    title: 'Split AC Service',
    description: 'Repair and maintenance for split AC units used in homes, offices, and small commercial spaces.',
    image: splitAcImage,
  },
  {
    icon: FaHome,
    title: 'Window AC Service',
    description: 'Support for window AC systems including inspection, cleaning, diagnosis, and repair.',
    image: windowAcImage,
  },
  {
    icon: FaTemperatureLow,
    title: 'Inverter AC Service',
    description: 'Care for inverter AC systems with diagnosis and service support for cooling performance issues.',
    image: inverterAcImage,
  },
  {
    icon: FaBuilding,
    title: 'Commercial AC Service',
    description: 'Cooling support for offices, shops, and commercial spaces with reliable AC maintenance and service.',
    image: commercialAcImage,
  },
  {
    icon: FaWarehouse,
    title: 'Indoor & Outdoor Unit Service',
    description: 'Support for both indoor and outdoor unit servicing, including inspection and repair work.',
    image: indoorOutdoorImage,
  },
  {
    icon: FaIndustry,
    title: 'Cooling Chamber & Dairy Solutions',
    description: 'Service support for cooling chambers and dairy cooling systems used in temperature-sensitive operations.',
    image: dairyCoolingImage,
  },
  {
    icon: FaSnowflake,
    title: 'AC Maintenance & Repair',
    description: 'Routine servicing and repair assistance to keep AC units functioning effectively over time.',
    image: maintenanceImage,
  },
];

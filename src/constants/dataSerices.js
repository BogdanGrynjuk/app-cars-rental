import serviceFuel from 'images/service-fuel.svg';
import serviceRepair from 'images/service-repair.svg';
import serviceTire from 'images/service-tire.svg';
import serviceTowing from 'images/service-towing.svg';
import serviceWash from 'images/service-wash.svg';

export const services = [
  {
    name: 'Fuel delivery',
    icon: serviceFuel,
    details:
      "Order a fuel delivery, and we'll supply the required amount of fuel directly to your vehicle",
  },
  {
    name: 'Car repair',
    icon: serviceRepair,
    details:
      'Our qualified mechanics will quickly resolve the issue with your vehicle',
  },
  {
    name: 'Tire service',
    icon: serviceTire,
    details:
      'Our professional technicians will address any tire-related concerns',
  },
  {
    name: 'Towing',
    icon: serviceTowing,
    details:
      'Our towing service is ready to transport your vehicle to the nearest service center',
  },
  {
    name: 'Car wash',
    icon: serviceWash,
    details:
      'Our expert car washers will ensure your vehicle is sparkling clean',
  },
];

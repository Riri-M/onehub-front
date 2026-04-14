import { Business, CreateBusinessDTO } from '@/lib/types/business.types';

const MOCK_BUSINESSES: Business[] = [
  {
    id: '1',
    name: 'The Cheshire Cat Pub',
    description: 'A cozy British-style pub offering traditional fish and chips, craft beers, and a warm atmosphere in the heart of Carp.',
    category: 'Restaurant',
    address: '2193 Richardson Side Rd, Carp, ON K0A 1L0',
    phone: '(613) 839-5165',
    email: 'info@cheshirecatpub.com',
    website: 'https://cheshirecatpub.com',
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    name: 'Bridgehead Coffee',
    description: 'Ottawa-based fair trade coffee roaster with multiple locations across the city, serving ethically sourced coffee and fresh pastries.',
    category: 'Cafe',
    address: '130 Sparks St, Ottawa, ON K1P 5B5',
    phone: '(613) 238-5602',
    email: 'hello@bridgehead.ca',
    website: 'https://bridgehead.ca',
    createdAt: new Date('2024-01-20'),
  },
  {
    id: '3',
    name: 'The Byward Market',
    description: 'Historic farmers market and shopping district featuring local vendors, restaurants, and artisanal goods in downtown Ottawa.',
    category: 'Retail',
    address: '55 ByWard Market Square, Ottawa, ON K1N 9C3',
    phone: '(613) 244-4410',
    email: 'info@byward-market.com',
    website: 'https://byward-market.com',
    createdAt: new Date('2024-02-01'),
  },
  {
    id: '4',
    name: 'Shopify Ottawa',
    description: 'Leading e-commerce platform headquarters helping businesses worldwide build their online stores and grow their digital presence.',
    category: 'Technology',
    address: '150 Elgin St, Ottawa, ON K2P 1L4',
    phone: '(613) 241-2828',
    email: 'ottawa@shopify.com',
    website: 'https://www.shopify.ca',
    createdAt: new Date('2024-02-10'),
  },
  {
    id: '5',
    name: 'Merry Maids Ottawa',
    description: 'Professional residential and commercial cleaning services serving Ottawa with eco-friendly cleaning solutions.',
    category: 'Services',
    address: '2525 Carling Ave, Ottawa, ON K2B 7Z2',
    phone: '(613) 727-1533',
    email: 'ottawa@merrymaids.ca',
    website: 'https://www.merrymaids.ca/ottawa',
    createdAt: new Date('2024-02-15'),
  },
  {
    id: '6',
    name: 'Pure Yoga Ottawa',
    description: 'Premium yoga studio offering hot yoga, power yoga, and meditation classes in a state-of-the-art facility.',
    category: 'Healthcare',
    address: '359 Elgin St, Ottawa, ON K2P 1M9',
    phone: '(613) 680-9642',
    email: 'info@pureyogaottawa.com',
    website: 'https://pureyogaottawa.com',
    createdAt: new Date('2024-03-01'),
  },
  {
    id: '7',
    name: 'University of Ottawa',
    description: 'Bilingual public research university offering undergraduate and graduate programs across multiple faculties.',
    category: 'Education',
    address: '75 Laurier Ave E, Ottawa, ON K1N 6N5',
    phone: '(613) 562-5700',
    email: 'info@uottawa.ca',
    website: 'https://www.uottawa.ca',
    createdAt: new Date('2024-03-10'),
  },
  {
    id: '8',
    name: 'Mayfair Theatre',
    description: 'Historic single-screen cinema showing indie films, classics, and cult favorites since 1932.',
    category: 'Entertainment',
    address: '1074 Bank St, Ottawa, ON K1S 3X3',
    phone: '(613) 730-3883',
    email: 'info@mayfairtheatre.ca',
    website: 'https://mayfairtheatre.ca',
    createdAt: new Date('2024-03-15'),
  },
  {
    id: '9',
    name: 'Fratelli Kanata',
    description: 'Italian restaurant serving authentic pasta, wood-fired pizza, and traditional dishes in a warm atmosphere.',
    category: 'Restaurant',
    address: '300 Earl Grey Dr, Kanata, ON K2T 1C1',
    phone: '(613) 599-0026',
    email: 'kanata@fratelli.ca',
    website: 'https://fratelli.ca',
    createdAt: new Date('2024-03-20'),
  },
  {
    id: '10',
    name: 'Little Victories Coffee',
    description: 'Specialty coffee roaster and cafe focusing on high-quality single-origin beans and expert brewing.',
    category: 'Cafe',
    address: '637 Somerset St W, Ottawa, ON K1R 5K3',
    phone: '(613) 695-0244',
    email: 'hello@littlevictoriescoffee.com',
    website: 'https://littlevictoriescoffee.com',
    createdAt: new Date('2024-03-25'),
  },
  {
    id: '11',
    name: 'Westboro Village',
    description: 'Trendy shopping and dining district featuring local boutiques, galleries, cafes, and restaurants.',
    category: 'Retail',
    address: '306 Richmond Rd, Ottawa, ON K1Z 6X3',
    phone: '(613) 722-4000',
    email: 'info@westborovillage.com',
    website: 'https://westborovillage.ca',
    createdAt: new Date('2024-04-01'),
  },
  {
    id: '12',
    name: 'Fullscript',
    description: 'Health tech company providing online supplement dispensary platform for healthcare practitioners.',
    category: 'Technology',
    address: '1200 St Laurent Blvd, Ottawa, ON K1K 3B8',
    phone: '(613) 226-1744',
    email: 'support@fullscript.com',
    website: 'https://fullscript.com',
    createdAt: new Date('2024-04-05'),
  },
  {
    id: '13',
    name: 'Ottawa General Contractors',
    description: 'Full-service construction and renovation company specializing in residential and commercial projects.',
    category: 'Services',
    address: '1100 Gloucester St, Ottawa, ON K1J 1B6',
    phone: '(613) 800-4622',
    email: 'info@ottawageneralcontractors.com',
    website: 'https://ottawageneralcontractors.com',
    createdAt: new Date('2024-04-10'),
  },
  {
    id: '14',
    name: 'KTT Physiotherapy',
    description: 'Modern physiotherapy clinic offering manual therapy, exercise rehabilitation, and sports injury treatment.',
    category: 'Healthcare',
    address: '2525 Bank St, Ottawa, ON K1V 0T8',
    phone: '(613) 260-6757',
    email: 'info@kttphysio.com',
    website: 'https://kttphysio.com',
    createdAt: new Date('2024-04-15'),
  },
  {
    id: '15',
    name: 'Algonquin College',
    description: 'Public college offering applied arts and technology programs, with three campuses serving Ottawa.',
    category: 'Education',
    address: '1385 Woodroffe Ave, Ottawa, ON K2G 1V8',
    phone: '(613) 727-4723',
    email: 'info@algonquincollege.com',
    website: 'https://www.algonquincollege.com',
    createdAt: new Date('2024-04-20'),
  },
  {
    id: '16',
    name: 'National Arts Centre',
    description: "Canada's premier performing arts venue hosting theatre, dance, music, and comedy performances.",
    category: 'Entertainment',
    address: '1 Elgin St, Ottawa, ON K1P 5W1',
    phone: '(613) 947-7000',
    email: 'info@nac-cna.ca',
    website: 'https://nac-cna.ca',
    createdAt: new Date('2024-04-25'),
  },
  {
    id: '17',
    name: 'Beckta Dining & Wine',
    description: 'Award-winning fine dining restaurant offering contemporary Canadian cuisine in a historic mansion.',
    category: 'Restaurant',
    address: '150 Elgin St, Ottawa, ON K2P 1L4',
    phone: '(613) 238-7063',
    email: 'info@beckta.com',
    website: 'https://beckta.com',
    createdAt: new Date('2024-05-01'),
  },
  {
    id: '18',
    name: 'Red Door Provisions',
    description: 'Neighborhood cafe and grocer offering locally-sourced food, artisanal products, and community space.',
    category: 'Cafe',
    address: '117 Beechwood Ave, Ottawa, ON K1M 1L5',
    phone: '(613) 298-8088',
    email: 'hello@reddoorprovisions.com',
    website: 'https://reddoorprovisions.com',
    createdAt: new Date('2024-05-05'),
  },
];

class BusinessStore {
  private businesses: Business[] = [...MOCK_BUSINESSES];
  private nextId = MOCK_BUSINESSES.length + 1;

  async getAll(): Promise<Business[]> {
    await this.delay(300);
    return [...this.businesses].sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getByCategory(category: string): Promise<Business[]> {
    await this.delay(200);
    return this.businesses.filter((b) => b.category === category);
  }

  async search(query: string): Promise<Business[]> {
    await this.delay(250);
    const lower = query.toLowerCase();
    return this.businesses.filter(
      (b) =>
        b.name.toLowerCase().includes(lower) ||
        b.description.toLowerCase().includes(lower)
    );
  }

  async create(data: CreateBusinessDTO): Promise<Business> {
    await this.delay(500);
    const newBusiness: Business = {
      id: String(this.nextId++),
      ...data,
      createdAt: new Date(),
    };
    this.businesses.push(newBusiness);
    return newBusiness;
  }

  async getById(id: string): Promise<Business | null> {
    await this.delay(150);
    return this.businesses.find((b) => b.id === id) ?? null;
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export const businessStore = new BusinessStore();

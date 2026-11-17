/**
 * Marcas e produtos trabalhados pela loja.
 * image: caminho do arquivo oficial (PNG ou SVG, de preferência fundo transparente).
 * Enquanto for null, o card mostra um espaço reservado identificado.
 * Não usar imagens genéricas ou redesenhadas como se fossem oficiais.
 */
export interface Brand {
  slug: string;
  name: string;
  segment: string;
  /** Tipo do arquivo esperado: logo da marca ou embalagem/produto. */
  kind: 'logo' | 'produto';
  image: string | null;
  /** Logo em versão clara (branca): exibido sobre fundo escuro. */
  dark?: boolean;
  /** Origem da imagem: 'oficial' (fabricante) ou 'revenda' (foto comercial de loja). */
  source?: 'oficial' | 'revenda';
  /** Descrição da foto para o texto alternativo. */
  alt?: string;
}

export interface BrandGroup {
  title: string;
  brands: Brand[];
}

export const brandGroups: BrandGroup[] = [
  {
    title: 'Perfumaria e cosméticos',
    brands: [
      { slug: 'o-boticario', name: 'O Boticário', segment: 'Perfumaria e cosméticos', kind: 'logo', image: '/images/marcas/o-boticario.webp', dark: true },
      { slug: 'la-rive', name: 'La Rive', segment: 'Perfumaria', kind: 'logo', image: '/images/marcas/la-rive.svg' },
      { slug: 'giovanna-baby', name: 'Giovanna Baby', segment: 'Perfumaria e cuidados', kind: 'logo', image: '/images/marcas/giovanna-baby.png', dark: true },
      { slug: 'natura', name: 'Natura', segment: 'Perfumaria e cosméticos', kind: 'logo', image: '/images/marcas/natura.svg' },
      { slug: 'eudora', name: 'Eudora', segment: 'Perfumaria e cosméticos', kind: 'logo', image: '/images/marcas/eudora-logo.png' },
    ],
  },
  {
    title: 'Cílios e acessórios',
    brands: [
      { slug: 'fadvan', name: 'Fadvan', segment: 'Cílios', kind: 'logo', image: '/images/marcas/fadvan-logo.png' },
    ],
  },
  {
    title: 'Colas para cílios',
    brands: [
      { slug: 'decemars', name: 'Decemars', segment: 'Cola para extensão de cílios', kind: 'produto', image: null },
      { slug: 'sobelle', name: 'Sobelle', segment: 'Colas para cílios', kind: 'logo', image: '/images/marcas/sobelle-logo.png' },
    ],
  },
];

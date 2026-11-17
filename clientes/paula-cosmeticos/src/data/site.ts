/**
 * Dados editáveis do protótipo. Tudo aqui é PROVISÓRIO e deve ser confirmado
 * com a Paula Cosméticos antes de qualquer versão definitiva.
 */

// Perfil do Instagram da Paula Cosméticos: A CONFIRMAR. Vazio = links do Instagram ficam ocultos.
const instagramUser = '';

export const site = {
  name: 'Paula Cosméticos',
  title: 'Paula Cosméticos — Beleza com cuidado em Morro da Fumaça/SC',
  description:
    'Loja de cosméticos em Morro da Fumaça/SC. Conheça categorias, destaques e fale com a Paula Cosméticos pelo WhatsApp.',

  instagram: {
    user: instagramUser,
    url: instagramUser ? `https://www.instagram.com/${instagramUser}/` : '',
    // Mensagem direta pelo Instagram: usada enquanto não houver WhatsApp confirmado.
    direct: instagramUser ? `https://ig.me/m/${instagramUser}` : '',
  },

  /**
   * WhatsApp de atendimento (link oficial fornecido): só dígitos, com DDI e DDD.
   * Vazio = os botões de contato apontam para a mensagem direta do Instagram.
   */
  whatsapp: '554899828524',
  // Grupo VIP no WhatsApp (link de convite recebido): promoções e novidades exclusivas. Vazio = oculta o cartão.
  whatsappGroup: 'https://chat.whatsapp.com/LXVisX1PKZkFW4f8s3vxdZ',
  whatsappMessage: 'Olá! Vim pelo site e gostaria de mais informações.',

  // Endereço encontrado em diretórios — provisório, confirmar com a loja.
  address: {
    street: 'Rua Vinte de Maio, 27, Sala 02',
    district: 'Centro',
    city: 'Morro da Fumaça',
    state: 'SC',
    provisional: true,
  },

  // Horários não confirmados: deixar null até a loja informar.
  hours: null as string | null,
};

export const fullAddress = `${site.address.street} — ${site.address.district}, ${site.address.city}/${site.address.state}`;

export const mapsQuery = encodeURIComponent(
  `${site.address.street}, ${site.address.district}, ${site.address.city} - ${site.address.state}`,
);

export const contactUrl = site.whatsapp
  ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`
  : site.instagram.direct;

export const contactLabel = site.whatsapp ? 'Conversar no WhatsApp' : 'Falar pelo Instagram';

/**
 * Categorias SUGERIDAS para a demonstração (não confirmadas no perfil).
 * Ajuste conforme o mix real da loja. As imagens são ilustrativas e substituíveis.
 */
export const categories = [
  { name: 'Maquiagem', note: 'Pele, olhos e lábios', image: '/images/categorias/cat-maquiagem.jpg' },
  { name: 'Skincare', note: 'Rotina de cuidados', image: '/images/categorias/cat-skincare.jpg' },
  { name: 'Cabelos', note: 'Tratamento e finalização', image: '/images/categorias/cat-cabelos.jpg' },
  { name: 'Perfumaria', note: 'Fragrâncias marcantes', image: '/images/categorias/cat-perfumaria.jpg' },
  { name: 'Corpo & Banho', note: 'Hidratação e bem-estar', image: '/images/categorias/cat-corpo.jpg' },
  { name: 'Unhas', note: 'Esmaltes e cuidados', image: '/images/categorias/cat-unhas.jpg' },
];

/**
 * Vitrine ILUSTRATIVA: tipos de produto genéricos, sem marcas, nomes ou preços.
 * Substituir pelos produtos reais escolhidos pela loja.
 */
export const featured = [
  { type: 'Sérum facial', category: 'Skincare', image: '/images/prod-serum.svg' },
  { type: 'Batom', category: 'Maquiagem', image: '/images/prod-batom.svg' },
  { type: 'Perfume', category: 'Perfumaria', image: '/images/prod-perfume.svg' },
  { type: 'Creme hidratante', category: 'Corpo & Banho', image: '/images/prod-creme.svg' },
];

import './style.css'

// Pricing Data Extracted from Image
const pricingData = [
  { id: 1, service: "Instalação Filtro e Bomba", price: "R$ 250,00" },
  { id: 2, service: "Instalação LED (Por Ponto)", price: "R$ 150,00" },
  { id: 3, service: "Instalação Piscinas Compactas 1M até 5M", price: "R$ 1.200,00" },
  { id: 4, service: "Instalação Piscinas Médias 6M até 8M", price: "R$ 1.600,00" },
  { id: 5, service: "Instalação Piscinas Grandes 9M até 12,50M", price: "R$ 2.500,00" },
  { id: 6, service: "Troca de areia até 50Kg", price: "R$ 100,00" },
  { id: 7, service: "Troca de areia de 60Kg até 100Kg", price: "R$ 150,00" },
  { id: 8, service: "Troca de areia acima de 100Kg até 300Kg", price: "R$ 250,00" },
  { id: 9, service: "Instalação Capa Dentro da Cidade", price: "R$ 100,00" },
  { id: 10, service: "Instalação Capa Fora da Cidade", price: "R$ 150,00" },
  { id: 11, service: "Inst. Hidráulica Piscina Dentro Cidade (Por dia)", price: "R$ 200,00" },
  { id: 12, service: "Inst. Hidráulica Piscina Fora Cidade (Por dia)", price: "R$ 250,00" },
  { id: 13, service: "Pintura piscina de Fibra Metro Quadrado", price: "R$ 120,00" },
  { id: 14, service: "Retirar e colocar a bomba", price: "R$ 80,00" },
  { id: 15, service: "Limpeza de bomba", price: "R$ 50,00" },
  { id: 16, service: "Inst. de hidro piscina fibra incluso disp. e canhão (por ponto)", price: "R$ 300,00" },
  { id: 17, service: "Instalação de hidro piscina de alvenaria mão de obra (por ponto)", price: "R$ 70,00" },
  { id: 18, service: "Taxa de deslocamento (raio 60km de S. Talhada)", price: "R$ 200,00" },
  { id: 19, service: "Frete por kilometro rodado", price: "R$ 3,00" },
  { id: 20, service: "Alimentação para o Técnico", price: "R$ 30,00" },
  { id: 21, service: "Borda da piscina jateada (metro linear)", price: "R$ 40,00" },
  { id: 22, service: "Taxa de orientação", price: "R$ 200,00" },
];

document.addEventListener('DOMContentLoaded', () => {
  // Populate Pricing Table
  const pricingBody = document.getElementById('pricing-body');
  if (pricingBody) {
    pricingBody.innerHTML = pricingData.map(item => `
      <tr>
        <td>${item.id}</td>
        <td>${item.service}</td>
        <td class="price-col">${item.price}</td>
      </tr>
    `).join('');
  }

  // Sticky Header
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });

  // Mobile Menu Toggle
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});

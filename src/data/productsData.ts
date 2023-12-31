import { ItemType } from "@/types/Item";

/*!!!!! CASO QUEIRA ADICIONAR UM NOVO ITEM LEMBRE-SE DE ADICIONAR UMA DAS CATEGORIAS E SIGA O MODEL NA PASTA "TYPES" Item.ts>>>
 1 - phone
 2 - smartWatch
 3 - audio
 4 - tablet
*/

export const ProdData: ItemType[] = [
  {
    id: 0,
    name: "Iphone 8",
    price: 4600,
    image:
      "https://www.outletfone.com.br/media/catalog/product/cache/1/thumbnail/350x/9df78eab33525d08d6e5fb8d27136e95/1/1/1106e98c79c45444891461.jpg",
    description: "64GB 4.7 polegadas resolução de 1334x750 pixels",
    category: "phone",
  },
  {
    id: 1,
    name: "Iphone 14 PRO",
    price: 6400,
    image:
      "https://cdn.awsli.com.br/2500x2500/761/761012/produto/218353870/editada--5--rcs401z0ta.png",
    description: "256GB 6.1 polegadas resolução de 2532x1170 pixels",
    category: "phone",
  },
  {
    id: 2,
    name: "SmartWatch 2023 model",
    price: 1200,
    image: "https://image01.realme.net/general/20220711/1657521687391.png.webp",
    description: "relogio inteligente",
    category: "smartWatch",
  },
  {
    id: 3,
    name: "Samsung Galaxy 2023",
    price: 3300,
    image:
      "https://img.global.news.samsung.com/br/wp-content/uploads/2021/08/SM_A037_GalaxyA03s_Red_Front-e1629835940519.png",
    description: "64GB 4GB ram  5.5 polegadas",
    category: "phone",
  },
  {
    id: 4,
    name: "Fone de ouvido 2022",
    price: 340,
    image:
      "https://d1r6yjixh9u0er.cloudfront.net/Custom/Content/Products/21/96/2196_fone-de-ouvido-bluetooth-mi-true-wireless-earbuds-basic-2-x542_z1_637390634966968179.jpg",
    description: "fone de ouvido com bateria de 12hrs",
    category: "audio",
  },
  {
    id: 5,
    name: "Tablet 2023",
    price: 4000,
    image: "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/169544",
    description: "tablet modelo 2023",
    category: "tablet",
  },
  {
    id: 6,
    name: "Ipad PRO",
    price: 8000,
    image:
      "https://www.atacadogames.com/imagem/tablets-e-readers/apple-ipad-pro-m2-mnxr3ll-a-wifi-256gb-tela-12-9-space-gray-2022/2/155944.jpg?pfdrid_c=true",
    description: "ipad PRO 256GB ",
    category: "tablet",
  },
  {
    id: 7,
    name: "SmartWatch 2022",
    price: 900,
    image:
      "https://d2r9epyceweg5n.cloudfront.net/stores/001/173/492/products/u981-28c259f73417b0c5a416796617944098-480-0.png",
    description: "relogio inteligente modelo 2022",
    category: "smartWatch",
  },
  {
    id: 8,
    name: "Samsung Galaxy 2022",
    price: 4200,
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/br/sm-a235mlbgzto/gallery/br-galaxy-a23-sm-a235-sm-a235mlbgzto-531826303?$650_519_PNG$",
    description: "Celular samsung 2022 512GB",
    category: "phone",
  },
  {
    id: 9,
    name: "Fone de ouvido 2023",
    price: 400,
    image:
      "https://img.freepik.com/vetores-gratis/composicao-realista-sem-fio-de-fones-de-ouvido-com-imagem-isolada-de-telefones-com-estacao-de-dock-de-banco-de-potencia-com-ilustracao-vetorial-de-reflexoes_1284-73201.jpg?w=826&t=st=1693247550~exp=1693248150~hmac=87ae144e8fc55b6526a06e6c43aa2c1106badbf666a42b569ca7e57d50c6c629",
    description: "fone de ouvido com bateria de 32hrs, aprova d' agua",
    category: "audio",
  },
];

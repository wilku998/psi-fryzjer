export default [
  {
    title: "Psia kąpiel",
    price: 99,
    offers: [
      "Kąpiel",
      "Suszenie i modelowanie",
      "Kosmetyka oczu",
      "Obcinanie pazurów",
      "Oczyszczenie uszu",
    ]
  },
  {
    title: "Strzyżenie oraz psia kąpiel",
    price: 149,
    offers: [
      "Kąpiel",
      "Suszenie i modelowanie",
      "Kosmetyka oczu",
      "Obcinanie pazurów",
      "Oczyszczenie uszu",
      "Strzyżenie"
    ]
  },
  {
    title: "Psie spa",
    price: 199,
    offers: [
      "Kąpiel",
      "Suszenie i modelowanie",
      "Kosmetyka oczu",
      "Obcinanie pazurów",
      "Oczyszczenie uszu",
      "Strzyżenie",
      "Preparaty pielęgnujące psi włos",
    ]
  }
];

export interface PacketI {
  title: string;
  price: number;
  offers: string[];
}

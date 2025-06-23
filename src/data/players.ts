export interface Player {
  id: string;
  name: string;
  points: number;
  photo: string;
  dob: string;
  height: string;
  weight: string;
  details: string;
}

export const players: Player[] = [
  {
    id: "1",
    name: "John Doe",
    points: 1200,
    photo: "https://i.pravatar.cc/100?img=1",
    dob: "1992-05-12",
    height: "6'1\" (185 cm)",
    weight: "180 lbs (82 kg)",
    details: "Aggressive play style with strong serves."
  },
  {
    id: "2",
    name: "Jane Smith",
    points: 1150,
    photo: "https://i.pravatar.cc/100?img=2",
    dob: "1995-09-23",
    height: "5'9\" (175 cm)",
    weight: "150 lbs (68 kg)",
    details: "Excellent defensive skills and footwork."
  },
  {
    id: "3",
    name: "Carlos Mendoza",
    points: 980,
    photo: "https://i.pravatar.cc/100?img=3",
    dob: "1990-01-30",
    height: "6'0\" (183 cm)",
    weight: "172 lbs (78 kg)",
    details: "Power hitter known for baseline dominance."
  },
  {
    id: "4",
    name: "Emily Zhang",
    points: 940,
    photo: "https://i.pravatar.cc/100?img=4",
    dob: "1998-11-11",
    height: "5'7\" (170 cm)",
    weight: "140 lbs (63 kg)",
    details: "Strategic thinker with strong volley skills."
  },
  {
    id: "5",
    name: "Liam O'Connor",
    points: 900,
    photo: "https://i.pravatar.cc/100?img=5",
    dob: "1993-06-07",
    height: "6'2\" (188 cm)",
    weight: "190 lbs (86 kg)",
    details: "Fast server and agile net player."
  }
];

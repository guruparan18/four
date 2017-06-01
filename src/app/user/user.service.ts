export class Groups {
  constructor(public id: number, public name: string) { }
}

const GROUPS = [
  new Groups(1, 'Work'),
  new Groups(2, 'Close Friends'),
  new Groups(3, 'Neighbors'),
  new Groups(4, 'Family'),
];
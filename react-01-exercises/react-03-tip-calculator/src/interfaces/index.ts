export interface IMenuItem {
  id: number;
  name: string;
  price: number;
}

export interface IOrdenItem extends IMenuItem {
  quantity: number;
}

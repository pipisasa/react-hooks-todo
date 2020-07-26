export enum ItemStatus {
  TODO,
  DOING,
  DONE
};

export type TodoItemType = {
  id: any,
  title: String,
  status: ItemStatus
}
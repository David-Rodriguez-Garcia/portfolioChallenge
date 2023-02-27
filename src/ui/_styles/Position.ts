export enum Justify {
  start = 'flex-start',
  spaceAround = 'space-around',
  spaceBetween = 'space-between',
}

export type JustifyKeys = keyof typeof Justify

export const toJustify = (type: JustifyKeys) => Justify[type]

export enum Align {
  start = 'flex-start',
  center = 'center',
}

export type AlignKeys = keyof typeof Align

export const toAlign = (type: AlignKeys) => Align[type]

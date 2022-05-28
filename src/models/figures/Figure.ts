import logoEx from '../../assets/black-king.png';
import { Cell } from '../Cell';
import { Colors } from '../Colors';

export enum FigureNames {
  FIGURE = 'Фигура',
  KING = 'Король',
  QUEEN = 'Ферзь',
  KNIGHT = 'Конь',
  ROOK = 'Ладья',
  BISHOP = 'Слон',
  PAWN = 'Пешка',
}

export class Figure {
  color: Colors;
  logo: typeof logoEx | null;
  cell: Cell;
  name: FigureNames;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
  }

  canMove(target: Cell): boolean {
    if (
      target.figure?.color === this.color ||
      target.figure?.name === FigureNames.KING
    ) {
      return false;
    }
    return true;
  }

  moveFigure(target: Cell) {}
}

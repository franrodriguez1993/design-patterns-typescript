export interface Command {
  execute(): void;
  undo(): void; // Permite revertir el comando
}

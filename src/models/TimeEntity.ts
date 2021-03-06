import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Partida } from "./PartidaEntity";

@Entity()
export class Time {
  @PrimaryGeneratedColumn()
  time_id: number;

  @Column({ length: 50 })
  nome_popular: string;

  @Column({ length: 50 })
  sigla: string;

  @Column({ length: 500 })
  escudo: string;

  @OneToMany(() => Partida, (partida) => partida.mandante)
  partidasMandante: Partida[];

  @OneToMany(() => Partida, (partida) => partida.visitante)
  partidasVisitante: Partida[];
}

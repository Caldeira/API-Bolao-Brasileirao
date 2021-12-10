import { StatusAndamento } from "../@types/enums/StatusAndamento";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Partida } from "./PartidaEntity";
import { Campeonato } from "./CampeonatoEntity";

@Entity()
export class Rodada {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, nullable: true })
  nome: string;

  @Column({ length: 50, nullable: true })
  slug: string;

  @Column()
  rodada: number;

  @Column({
    type: 'enum',
    enum: StatusAndamento,
    default: StatusAndamento.Agendada
  })
  status: StatusAndamento;

  @OneToMany(() => Partida, partida => partida.rodada, { cascade: true })
  partidas: Partida[];

  @ManyToOne(() => Campeonato, campeonato => campeonato.rodadas)
  campeonato: Campeonato;
}

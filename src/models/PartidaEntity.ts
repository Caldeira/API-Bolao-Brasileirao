import { StatusAndamento } from "../@types/enums/StatusAndamento";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Time } from "./TimeEntity";
import { Rodada } from "./RodadaEntity";
import { Aposta } from "./ApostaEntity";

@Entity()
export class Partida {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, nullable: true })
  placar: string;

  @Column({ nullable: true })
  placarMandante: number;

  @Column({ nullable: true })
  placarVisitante: number;

  @ManyToOne(() => Time, (time) => time.partidasMandante, {
    cascade: ["insert", "update"],
  })
  mandante: Time;

  @ManyToOne(() => Time, (time) => time.partidasVisitante, {
    cascade: ["insert", "update"],
  })
  visitante: Time;

  @Column({ length: 50 })
  status: string;

  @Column({ length: 50, nullable: true })
  slug: string;

  @Column({ nullable: true })
  dataRealizacao: Date;

  @ManyToOne(() => Rodada, (rodada) => rodada.partidas)
  rodada: Rodada;

  @OneToMany(() => Aposta, (aposta) => aposta.partida)
  apostas: Aposta[];
}

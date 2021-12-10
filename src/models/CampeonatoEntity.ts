import { StatusAndamento } from "../@types/enums/StatusAndamento";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Rodada } from "./RodadaEntity";
import { Usuario } from "./UsuarioEntity";

@Entity()
export class Campeonato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  nome: string;

  @Column({ length: 50, nullable: true })
  slug: string;

  @Column({ length: 50, nullable: true })
  nomePopular: string;

  @Column({
    type: 'enum',
    enum: StatusAndamento,
    default: StatusAndamento.Agendada
  })
  status: StatusAndamento;

  @Column({ length: 500, nullable: true })
  logo: string;

  @Column()
  idCampeonatoApiExterna: number;

  @OneToMany(() => Rodada, rodada => rodada.campeonato)
  rodadas: Rodada[];

  @ManyToMany(() => Usuario, usuario => usuario.campeonatos)
  usuarios: Usuario[];
}

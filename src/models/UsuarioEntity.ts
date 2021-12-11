import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Aposta } from "./ApostaEntity";
import { Campeonato } from "./CampeonatoEntity";
import { Endereco } from "./EnderecoEntity";

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  nome: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ length: 70 })
  senha: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => Endereco, (endereco) => endereco.usuario, {
    cascade: ["insert", "update", "remove"],
  })
  endereco: Endereco;

  @OneToMany(() => Aposta, (aposta) => aposta.usuario)
  apostas: Aposta[];

  @ManyToMany(() => Campeonato, (campeonato) => campeonato.usuarios, {
    cascade: true,
  })
  @JoinTable()
  campeonatos: Campeonato[];
}

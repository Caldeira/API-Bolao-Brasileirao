import { Column, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Aposta } from "./ApostaEntity";
import { Campeonato } from "./CampeonatoEntity";
import { Endereco } from "./EnderecoEntity";

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  nome: string;

  @Column({ length: 50 })
  email: string;

  @Column({ length: 50 })
  hashSenha: string;

  @OneToOne(() => Endereco, endereco => endereco.usuario, { cascade: ['insert', 'update', 'remove'] })
  endereco: Endereco;

  @OneToMany(() => Aposta, aposta => aposta.usuario)
  apostas: Aposta[];

  @ManyToMany(() => Campeonato, campeonato => campeonato.usuarios, { cascade: true })
  @JoinTable()
  campeonatos: Campeonato[];
}

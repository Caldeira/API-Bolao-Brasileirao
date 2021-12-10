import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Usuario } from "./UsuarioEntity";

@Entity()
export class Endereco {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  cep: string;

  @Column({ length: 50 })
  logradouro: string;

  @Column({ length: 50 })
  numero: string;

  @Column({ length: 50 })
  complemento: string;

  @Column({ length: 50 })
  bairro: string;

  @Column({ length: 50 })
  localidade: string;

  @Column({ length: 50 })
  estado: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => Usuario, (usuario) => usuario.endereco)
  @JoinColumn()
  usuario: Usuario;
}

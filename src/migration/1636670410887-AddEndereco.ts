import {MigrationInterface, QueryRunner} from "typeorm";

export class AddEndereco1636670410887 implements MigrationInterface {
    name = 'AddEndereco1636670410887'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`endereco\` (\`id\` int NOT NULL AUTO_INCREMENT, \`cep\` varchar(50) NOT NULL, \`logradouro\` varchar(50) NOT NULL, \`complemento\` varchar(50) NOT NULL, \`numero\` varchar(50) NOT NULL, \`bairro\` varchar(50) NOT NULL, \`estado\` varchar(50) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`endereco\``);
    }

}

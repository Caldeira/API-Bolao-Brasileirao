import {MigrationInterface, QueryRunner} from "typeorm";

export class AddTime1636672286877 implements MigrationInterface {
    name = 'AddTime1636672286877'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`time\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(50) NOT NULL, \`sigla\` varchar(50) NOT NULL, \`escudo\` varchar(500) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`time\``);
    }

}
